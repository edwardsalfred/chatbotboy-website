"use client";

import { useEffect, useRef } from "react";

export default function FluidCanvas() {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const config = {
            SIM_RESOLUTION: 128, DYE_RESOLUTION: 1024, DENSITY_DISSIPATION: 1,
            VELOCITY_DISSIPATION: 0.2, PRESSURE: 0.8, PRESSURE_ITERATIONS: 20,
            CURL: 30, SPLAT_RADIUS: 0.25, SHADING: true,
        };

        const params = { alpha: true, depth: false, stencil: false, antialias: false, preserveDrawingBuffer: false };
        let gl = canvas.getContext("webgl2", params) as WebGLRenderingContext | null;
        const isWebGL2 = !!gl;
        if (!isWebGL2) gl = (canvas.getContext("webgl", params) || canvas.getContext("experimental-webgl", params)) as WebGLRenderingContext | null;
        if (!gl) return;

        const glCtx = gl;
        let halfFloatTexType: number;

        if (isWebGL2) {
            (glCtx as WebGL2RenderingContext).getExtension("EXT_color_buffer_float");
            (glCtx as WebGL2RenderingContext).getExtension("OES_texture_float_linear");
            halfFloatTexType = (glCtx as WebGL2RenderingContext).HALF_FLOAT;
        } else {
            const hf = glCtx.getExtension("OES_texture_half_float");
            glCtx.getExtension("OES_texture_half_float_linear");
            halfFloatTexType = hf ? hf.HALF_FLOAT_OES : glCtx.FLOAT;
        }

        glCtx.clearColor(0, 0, 0, 1);

        function createShader(type: number, source: string) {
            const shader = glCtx.createShader(type)!;
            glCtx.shaderSource(shader, source);
            glCtx.compileShader(shader);
            return shader;
        }

        function createProgram(vs: string, fs: string) {
            const p = glCtx.createProgram()!;
            glCtx.attachShader(p, createShader(glCtx.VERTEX_SHADER, vs));
            glCtx.attachShader(p, createShader(glCtx.FRAGMENT_SHADER, fs));
            glCtx.linkProgram(p);
            return p;
        }

        const baseVS = `precision highp float; attribute vec2 aPosition; varying vec2 vUv,vL,vR,vT,vB; uniform vec2 texelSize;
      void main(){vUv=aPosition*0.5+0.5;vL=vUv-vec2(texelSize.x,0);vR=vUv+vec2(texelSize.x,0);vT=vUv+vec2(0,texelSize.y);vB=vUv-vec2(0,texelSize.y);gl_Position=vec4(aPosition,0,1);}`;

        const clearFS = `precision mediump float;precision mediump sampler2D;varying highp vec2 vUv;uniform sampler2D uTexture;uniform float value;void main(){gl_FragColor=value*texture2D(uTexture,vUv);}`;

        const displayFS = `precision highp float;precision highp sampler2D;varying vec2 vUv,vL,vR,vT,vB;uniform sampler2D uTexture;uniform vec2 texelSize;
      void main(){vec3 c=texture2D(uTexture,vUv).rgb;
      #ifdef SHADING
      vec3 lc=texture2D(uTexture,vL).rgb;vec3 rc=texture2D(uTexture,vR).rgb;vec3 tc=texture2D(uTexture,vT).rgb;vec3 bc=texture2D(uTexture,vB).rgb;
      float dx=length(rc)-length(lc);float dy=length(tc)-length(bc);vec3 n=normalize(vec3(dx,dy,length(texelSize)));float diffuse=clamp(dot(n,vec3(0,0,1))+0.7,0.7,1.0);c*=diffuse;
      #endif
      float a=max(c.r,max(c.g,c.b));gl_FragColor=vec4(c,a);}`;

        const splatFS = `precision highp float;precision highp sampler2D;varying vec2 vUv;uniform sampler2D uTarget;uniform float aspectRatio;uniform vec3 color;uniform vec2 point;uniform float radius;
      void main(){vec2 p=vUv-point.xy;p.x*=aspectRatio;vec3 splat=exp(-dot(p,p)/radius)*color;vec3 base=texture2D(uTarget,vUv).xyz;gl_FragColor=vec4(base+splat,1);}`;

        const advFS = `precision highp float;precision highp sampler2D;varying vec2 vUv;uniform sampler2D uVelocity;uniform sampler2D uSource;uniform vec2 texelSize;uniform vec2 dyeTexelSize;uniform float dt;uniform float dissipation;
      void main(){vec2 coord=vUv-dt*texture2D(uVelocity,vUv).xy*texelSize;vec4 result=texture2D(uSource,coord);float decay=1.0+dissipation*dt;gl_FragColor=result/decay;}`;

        const divFS = `precision mediump float;precision mediump sampler2D;varying highp vec2 vUv,vL,vR,vT,vB;uniform sampler2D uVelocity;
      void main(){float L=texture2D(uVelocity,vL).x;float R=texture2D(uVelocity,vR).x;float T=texture2D(uVelocity,vT).y;float B=texture2D(uVelocity,vB).y;vec2 C=texture2D(uVelocity,vUv).xy;
      if(vL.x<0.0)L=-C.x;if(vR.x>1.0)R=-C.x;if(vT.y>1.0)T=-C.y;if(vB.y<0.0)B=-C.y;gl_FragColor=vec4(0.5*(R-L+T-B),0,0,1);}`;

        const curlFS = `precision mediump float;precision mediump sampler2D;varying highp vec2 vUv,vL,vR,vT,vB;uniform sampler2D uVelocity;
      void main(){float L=texture2D(uVelocity,vL).y;float R=texture2D(uVelocity,vR).y;float T=texture2D(uVelocity,vT).x;float B=texture2D(uVelocity,vB).x;gl_FragColor=vec4(0.5*(R-L-T+B),0,0,1);}`;

        const vortFS = `precision highp float;precision highp sampler2D;varying vec2 vUv,vL,vR,vT,vB;uniform sampler2D uVelocity;uniform sampler2D uCurl;uniform float curl;uniform float dt;
      void main(){float L=texture2D(uCurl,vL).x;float R=texture2D(uCurl,vR).x;float T=texture2D(uCurl,vT).x;float B=texture2D(uCurl,vB).x;float C=texture2D(uCurl,vUv).x;
      vec2 force=0.5*vec2(abs(T)-abs(B),abs(R)-abs(L));force/=length(force)+0.0001;force*=curl*C;force.y*=-1.0;
      vec2 vel=texture2D(uVelocity,vUv).xy;vel+=force*dt;vel=min(max(vel,-1000.0),1000.0);gl_FragColor=vec4(vel,0,1);}`;

        const pressFS = `precision mediump float;precision mediump sampler2D;varying highp vec2 vUv,vL,vR,vT,vB;uniform sampler2D uPressure;uniform sampler2D uDivergence;
      void main(){float L=texture2D(uPressure,vL).x;float R=texture2D(uPressure,vR).x;float T=texture2D(uPressure,vT).x;float B=texture2D(uPressure,vB).x;
      float div=texture2D(uDivergence,vUv).x;gl_FragColor=vec4((L+R+B+T-div)*0.25,0,0,1);}`;

        const gradFS = `precision mediump float;precision mediump sampler2D;varying highp vec2 vUv,vL,vR,vT,vB;uniform sampler2D uPressure;uniform sampler2D uVelocity;
      void main(){float L=texture2D(uPressure,vL).x;float R=texture2D(uPressure,vR).x;float T=texture2D(uPressure,vT).x;float B=texture2D(uPressure,vB).x;
      vec2 vel=texture2D(uVelocity,vUv).xy;vel.xy-=vec2(R-L,T-B);gl_FragColor=vec4(vel,0,1);}`;

        const progs = [
            createProgram(baseVS, splatFS), createProgram(baseVS, curlFS), createProgram(baseVS, vortFS),
            createProgram(baseVS, divFS), createProgram(baseVS, clearFS), createProgram(baseVS, pressFS),
            createProgram(baseVS, gradFS), createProgram(baseVS, advFS), createProgram(baseVS, displayFS),
        ];

        type Uniforms = Record<string, WebGLUniformLocation | null>;
        const uniforms: Uniforms[] = progs.map((p) => {
            const u: Uniforms = {};
            const count = glCtx.getProgramParameter(p, glCtx.ACTIVE_UNIFORMS);
            for (let i = 0; i < count; i++) {
                const name = glCtx.getActiveUniform(p, i)!.name;
                u[name] = glCtx.getUniformLocation(p, name);
            }
            return u;
        });

        const [splatP, curlP, vortP, divP, clearP, pressP, gradP, advP, dispP] = progs;
        const [splatU, curlU, vortU, divU, clearU, pressU, gradU, advU, dispU] = uniforms;

        interface FBO { texture: WebGLTexture; fbo: WebGLFramebuffer; width: number; height: number; texelSizeX: number; texelSizeY: number; attach: (id: number) => number; }
        interface DFBO { width: number; height: number; texelSizeX: number; texelSizeY: number; read: FBO; write: FBO; swap: () => void; }

        function createFBO(w: number, h: number, iF: number, f: number, t: number, param: number): FBO {
            glCtx.activeTexture(glCtx.TEXTURE0);
            const tex = glCtx.createTexture()!;
            glCtx.bindTexture(glCtx.TEXTURE_2D, tex);
            glCtx.texParameteri(glCtx.TEXTURE_2D, glCtx.TEXTURE_MIN_FILTER, param);
            glCtx.texParameteri(glCtx.TEXTURE_2D, glCtx.TEXTURE_MAG_FILTER, param);
            glCtx.texParameteri(glCtx.TEXTURE_2D, glCtx.TEXTURE_WRAP_S, glCtx.CLAMP_TO_EDGE);
            glCtx.texParameteri(glCtx.TEXTURE_2D, glCtx.TEXTURE_WRAP_T, glCtx.CLAMP_TO_EDGE);
            glCtx.texImage2D(glCtx.TEXTURE_2D, 0, iF, w, h, 0, f, t, null);
            const fb = glCtx.createFramebuffer()!;
            glCtx.bindFramebuffer(glCtx.FRAMEBUFFER, fb);
            glCtx.framebufferTexture2D(glCtx.FRAMEBUFFER, glCtx.COLOR_ATTACHMENT0, glCtx.TEXTURE_2D, tex, 0);
            glCtx.viewport(0, 0, w, h); glCtx.clear(glCtx.COLOR_BUFFER_BIT);
            return { texture: tex, fbo: fb, width: w, height: h, texelSizeX: 1 / w, texelSizeY: 1 / h, attach(id) { glCtx.activeTexture(glCtx.TEXTURE0 + id); glCtx.bindTexture(glCtx.TEXTURE_2D, tex); return id; } };
        }

        function createDFBO(w: number, h: number, iF: number, f: number, t: number, param: number): DFBO {
            let f1 = createFBO(w, h, iF, f, t, param), f2 = createFBO(w, h, iF, f, t, param);
            return { width: w, height: h, texelSizeX: f1.texelSizeX, texelSizeY: f1.texelSizeY, get read() { return f1; }, set read(v) { f1 = v; }, get write() { return f2; }, set write(v) { f2 = v; }, swap() { const tmp = f1; f1 = f2; f2 = tmp; } };
        }

        let dye: DFBO, velocity: DFBO, divergence: FBO, curlFBO: FBO, pressure: DFBO;

        function getRes(r: number) {
            let ar = glCtx.drawingBufferWidth / glCtx.drawingBufferHeight;
            if (ar < 1) ar = 1 / ar;
            const mn = Math.round(r), mx = Math.round(r * ar);
            return glCtx.drawingBufferWidth > glCtx.drawingBufferHeight ? { width: mx, height: mn } : { width: mn, height: mx };
        }

        function initFBOs() {
            const sim = getRes(config.SIM_RESOLUTION), dyeR = getRes(config.DYE_RESOLUTION);
            const gl2 = glCtx as WebGL2RenderingContext;
            const rgbaIF = gl2.RGBA16F || glCtx.RGBA, rgaIF = gl2.RG16F || glCtx.RGBA, rIF = gl2.R16F || glCtx.RGBA;
            const rgaF = gl2.RG || glCtx.RGBA, rF = gl2.RED || glCtx.RGBA;
            dye = createDFBO(dyeR.width, dyeR.height, rgbaIF, glCtx.RGBA, halfFloatTexType, glCtx.LINEAR);
            velocity = createDFBO(sim.width, sim.height, rgaIF, rgaF, halfFloatTexType, glCtx.LINEAR);
            divergence = createFBO(sim.width, sim.height, rIF, rF, halfFloatTexType, glCtx.NEAREST);
            curlFBO = createFBO(sim.width, sim.height, rIF, rF, halfFloatTexType, glCtx.NEAREST);
            pressure = createDFBO(sim.width, sim.height, rIF, rF, halfFloatTexType, glCtx.NEAREST);
        }

        function blit(target: FBO | null) {
            if (!target) { glCtx.viewport(0, 0, glCtx.drawingBufferWidth, glCtx.drawingBufferHeight); glCtx.bindFramebuffer(glCtx.FRAMEBUFFER, null); }
            else { glCtx.viewport(0, 0, target.width, target.height); glCtx.bindFramebuffer(glCtx.FRAMEBUFFER, target.fbo); }
            glCtx.drawArrays(glCtx.TRIANGLE_STRIP, 0, 4);
        }

        glCtx.bindBuffer(glCtx.ARRAY_BUFFER, glCtx.createBuffer());
        glCtx.bufferData(glCtx.ARRAY_BUFFER, new Float32Array([-1, -1, -1, 1, 1, 1, 1, -1]), glCtx.STATIC_DRAW);
        glCtx.vertexAttribPointer(0, 2, glCtx.FLOAT, false, 0, 0);
        glCtx.enableVertexAttribArray(0);

        function splat(x: number, y: number, dx: number, dy: number, color: { r: number; g: number; b: number }) {
            glCtx.useProgram(splatP);
            glCtx.uniform1i(splatU.uTarget, velocity.read.attach(0));
            glCtx.uniform1f(splatU.aspectRatio, canvas!.width / canvas!.height);
            glCtx.uniform2f(splatU.point, x / canvas!.width, 1 - y / canvas!.height);
            glCtx.uniform3f(splatU.color, dx, dy, 0);
            glCtx.uniform1f(splatU.radius, config.SPLAT_RADIUS / 100);
            blit(velocity.write); velocity.swap();
            glCtx.uniform1i(splatU.uTarget, dye.read.attach(0));
            glCtx.uniform3f(splatU.color, color.r, color.g, color.b);
            blit(dye.write); dye.swap();
        }

        let lastTime = Date.now();
        let animId: number;

        function resizeCanvas() {
            const w = window.innerWidth, h = window.innerHeight;
            if (canvas!.width !== w || canvas!.height !== h) { canvas!.width = w; canvas!.height = h; initFBOs(); }
        }

        function update() {
            resizeCanvas();
            const dt = Math.min((Date.now() - lastTime) / 1000, 0.016);
            lastTime = Date.now();
            glCtx.disable(glCtx.BLEND);

            glCtx.useProgram(curlP); glCtx.uniform2f(curlU.texelSize, velocity.texelSizeX, velocity.texelSizeY); glCtx.uniform1i(curlU.uVelocity, velocity.read.attach(0)); blit(curlFBO);

            glCtx.useProgram(vortP); glCtx.uniform2f(vortU.texelSize, velocity.texelSizeX, velocity.texelSizeY); glCtx.uniform1i(vortU.uVelocity, velocity.read.attach(0)); glCtx.uniform1i(vortU.uCurl, curlFBO.attach(1)); glCtx.uniform1f(vortU.curl, config.CURL); glCtx.uniform1f(vortU.dt, dt); blit(velocity.write); velocity.swap();

            glCtx.useProgram(divP); glCtx.uniform2f(divU.texelSize, velocity.texelSizeX, velocity.texelSizeY); glCtx.uniform1i(divU.uVelocity, velocity.read.attach(0)); blit(divergence);

            glCtx.useProgram(clearP); glCtx.uniform1i(clearU.uTexture, pressure.read.attach(0)); glCtx.uniform1f(clearU.value, config.PRESSURE); blit(pressure.write); pressure.swap();

            glCtx.useProgram(pressP); glCtx.uniform2f(pressU.texelSize, velocity.texelSizeX, velocity.texelSizeY); glCtx.uniform1i(pressU.uDivergence, divergence.attach(0));
            for (let i = 0; i < config.PRESSURE_ITERATIONS; i++) { glCtx.uniform1i(pressU.uPressure, pressure.read.attach(1)); blit(pressure.write); pressure.swap(); }

            glCtx.useProgram(gradP); glCtx.uniform2f(gradU.texelSize, velocity.texelSizeX, velocity.texelSizeY); glCtx.uniform1i(gradU.uPressure, pressure.read.attach(0)); glCtx.uniform1i(gradU.uVelocity, velocity.read.attach(1)); blit(velocity.write); velocity.swap();

            glCtx.useProgram(advP); glCtx.uniform2f(advU.texelSize, velocity.texelSizeX, velocity.texelSizeY); glCtx.uniform2f(advU.dyeTexelSize, velocity.texelSizeX, velocity.texelSizeY);
            const vid = velocity.read.attach(0); glCtx.uniform1i(advU.uVelocity, vid); glCtx.uniform1i(advU.uSource, vid); glCtx.uniform1f(advU.dt, dt); glCtx.uniform1f(advU.dissipation, config.VELOCITY_DISSIPATION); blit(velocity.write); velocity.swap();

            glCtx.uniform2f(advU.dyeTexelSize, dye.texelSizeX, dye.texelSizeY); glCtx.uniform1i(advU.uVelocity, velocity.read.attach(0)); glCtx.uniform1i(advU.uSource, dye.read.attach(1)); glCtx.uniform1f(advU.dissipation, config.DENSITY_DISSIPATION); blit(dye.write); dye.swap();

            glCtx.viewport(0, 0, glCtx.drawingBufferWidth, glCtx.drawingBufferHeight); glCtx.bindFramebuffer(glCtx.FRAMEBUFFER, null); glCtx.useProgram(dispP); glCtx.uniform1i(dispU.uTexture, dye.read.attach(0));
            if (config.SHADING) glCtx.uniform2f(dispU.texelSize, 1 / glCtx.drawingBufferWidth, 1 / glCtx.drawingBufferHeight);
            glCtx.drawArrays(glCtx.TRIANGLE_STRIP, 0, 4);
            animId = requestAnimationFrame(update);
        }

        initFBOs();
        update();
        splat(window.innerWidth / 2, window.innerHeight / 2, 0, -20, { r: 0.15, g: 0.4, b: 0.9 });

        const onMouse = (e: MouseEvent) => splat(e.clientX, e.clientY, e.movementX * 10, -e.movementY * 10, { r: 0.38, g: 0.65, b: 0.98 });
        const onTouch = (e: TouchEvent) => { const t = e.touches[0]; splat(t.clientX, t.clientY, 10, 10, { r: 0.38, g: 0.65, b: 0.98 }); };
        window.addEventListener("mousemove", onMouse);
        window.addEventListener("touchmove", onTouch);

        return () => {
            cancelAnimationFrame(animId);
            window.removeEventListener("mousemove", onMouse);
            window.removeEventListener("touchmove", onTouch);
        };
    }, []);

    return <canvas ref={canvasRef} className="fixed top-0 left-0 w-full h-full pointer-events-none -z-10 opacity-30 mix-blend-screen" />;
}
