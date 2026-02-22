"use client";

import { useState } from "react";
import { N8nIcon, ClaudeIcon, HighLevelIcon, RetellIcon, SupabaseIcon } from "./icons";
import { Icon } from '@iconify/react';

const BOOKING_URL = "https://links.convertwave.ai/widget/booking/vTmxKNDLOVK17mpAYXot";

export function HeroSection() {
    return (
        <section className="md:pt-52 md:pb-36 overflow-hidden pt-44 px-6 pb-24 relative">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-600/15 blur-[120px] -z-10 rounded-full" />
            <div className="max-w-5xl mx-auto text-center space-y-10 relative z-10">
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-200 text-sm font-medium tracking-wide">
                    <span className="relative flex h-2.5 w-2.5">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75" />
                        <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-blue-500" />
                    </span>
                    ACCEPTING NEW CLIENTS
                </div>
                <h1 className="md:text-8xl leading-[1.05] text-5xl font-semibold text-white tracking-tight">
                    AI Automation <br />
                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-200 to-blue-500">Work Less. Earn More.</span>
                </h1>
                <p className="md:text-2xl leading-relaxed text-xl text-zinc-400 max-w-3xl mx-auto">
                    Scale your business without scaling your headcount. We build done-for-you AI workflows that eliminate your bottlenecks, ship fast, and generate real revenue, no tech expertise required.
                </p>
                <div className="flex flex-col md:flex-row items-center justify-center gap-6 pt-6">
                    <a href={BOOKING_URL} target="_blank" rel="noreferrer" className="shiny-cta group">
                        <span className="flex items-center gap-2">
                            Book a Free Strategy Call
                            <Icon icon="solar:arrow-right-linear" width="1.2em" height="1.2em" />
                        </span>
                    </a>
                    <a href="/insights" className="px-8 py-4 rounded-full border border-zinc-700 text-zinc-200 font-medium hover:bg-zinc-800 transition-colors flex items-center gap-3 text-lg">
                        <Icon icon="solar:book-bookmark-linear" width="1.2em" height="1.2em" />
                        Read Our Insights
                    </a>
                </div>
                <div className="pt-16 grid grid-cols-2 md:grid-cols-4 gap-10 border-t border-white/5 mt-16 max-w-4xl mx-auto">
                    {[
                        { val: "50k+", label: "AI Calls Made" },
                        { val: "24/7", label: "Uptime Support" },
                        { val: "30%", label: "Conv. Increase" },
                        { val: "20+", label: "Systems Built" },
                    ].map((m) => (
                        <div key={m.label} className="text-center">
                            <p className="text-3xl font-bold text-white">{m.val}</p>
                            <p className="text-sm text-zinc-500 uppercase tracking-wide mt-2">{m.label}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export function TechStackSection() {
    const techs = [
        { icon: <N8nIcon />, name: "n8n" },
        { icon: <ClaudeIcon />, name: "Claude" },
        { icon: <HighLevelIcon />, name: "HighLevel" },
        { icon: <RetellIcon />, name: "Retell AI" },
        { icon: <SupabaseIcon />, name: "Supabase" },
    ];
    return (
        <section className="border-y bg-zinc-900/30 border-white/5 py-16">
            <div className="max-w-7xl mx-auto px-6 text-center">
                <p className="uppercase text-base text-zinc-500 tracking-widest mb-10">Powering Automation for businesses using</p>
                <div className="flex flex-wrap gap-10 md:gap-20 hover:grayscale-0 transition-all duration-500 opacity-70 grayscale justify-center">
                    {techs.map((t) => (
                        <div key={t.name} className="flex items-center gap-3 text-2xl font-semibold text-zinc-300 hover:text-white transition-colors">
                            {t.icon} {t.name}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export function ServicesSection() {
    return (
        <section id="services" className="max-w-7xl mx-auto py-28 px-6">
            <div className="mb-20">
                <h2 className="text-4xl md:text-5xl font-semibold tracking-tight mb-6 text-white">Core Automation Services</h2>
                <p className="text-xl text-zinc-400 max-w-2xl">Most businesses are still doing manually what machines could handle in seconds. We fix that by building the AI backbone your business needs to scale without the chaos.</p>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
                <ServiceCard
                    icon="solar:microphone-3-linear" color="blue" title="AI Voice Agents"
                    desc="Never miss a lead again. Our AI calling agents handle inbound and outbound calls around the clock, qualifying prospects, booking appointments, and answering customer questions without you lifting a finger."
                    features={["Sub-800ms latency", "Custom Knowledgebase"]}
                />
                <ServiceCard
                    iconSvg title="Website & App Development" color="blue"
                    desc="From landing pages to full-stack web apps, we build fast, conversion-optimized digital products that integrate directly with your AI workflows and CRM from day one."
                    features={["Custom-built to your brand", "Workflow & CRM ready"]}
                />
                <ServiceCard
                    icon="solar:round-transfer-horizontal-linear" color="blue" title="CRM & n8n Workflows"
                    desc="Your forms, spreadsheets, and AI tools shouldn't live in silos. We wire everything together into one automated system that captures data, triggers actions, and keeps your pipeline moving without manual input."
                    features={["Error-free data entry", "Automated reporting"]}
                />
                <ServiceCard
                    icon="solar:video-frame-linear" color="blue" title="Short Form Video and AI Avatar"
                    desc="Scale your content without being on camera every day. We create scroll stopping short videos and build your AI avatar so your brand posts consistently, engages faster, and stays visible across TikTok, Instagram Reels, and YouTube Shorts."
                    features={["Short form videos ready for all platforms", "AI avatar trained on your voice and face"]}
                />
            </div>
        </section>
    );
}

function ServiceCard({ icon, iconSvg, color, title, desc, features }: { icon?: string; iconSvg?: boolean; color: string; title: string; desc: string; features: string[] }) {
    const colorMap: Record<string, { border: string; bg: string; text: string; check: string }> = {
        blue: { border: "hover:border-blue-500/50", bg: "bg-blue-500/10", text: "text-blue-400", check: "text-[#00b0f0]" },
        sky: { border: "hover:border-sky-500/50", bg: "bg-sky-500/10", text: "text-sky-400", check: "text-sky-500" },
        cyan: { border: "hover:border-cyan-500/50", bg: "bg-cyan-500/10", text: "text-cyan-400", check: "text-sky-500" },
    };
    const c = colorMap[color];
    return (
        <div className={`glass-card p-10 rounded-2xl ${c.border} transition-colors group relative overflow-hidden`}>
            <div className={`absolute inset-0 bg-gradient-to-br from-${color}-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity`} />
            <div className={`w-14 h-14 rounded-xl ${c.bg} flex items-center justify-center ${c.text} mb-8 group-hover:scale-110 transition-transform relative z-10`}>
                {iconSvg ? (
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m18 16 4-4-4-4" /><path d="m6 8-4 4 4 4" /><path d="m14.5 4-5 16" /></svg>
                ) : (
                    <Icon icon={icon || ""} width="1.5em" height="1.5em" />
                )}
            </div>
            <h3 className="text-2xl font-medium mb-4 relative z-10 text-white">{title}</h3>
            <p className="leading-relaxed text-base text-zinc-400 z-10 mb-6 relative">{desc}</p>
            <ul className="text-sm text-zinc-500 space-y-3 relative z-10">
                {features.map((f) => (
                    <li key={f} className="flex gap-3 items-center">
                        <Icon icon="solar:check-circle-linear" className={c.check} width="1.2em" height="1.2em" />
                        {f}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export function ProcessSection() {
    const steps = [
        { n: 1, active: true, title: "Audit & Logic Design", desc: "We learn how your business actually operates before touching a single tool. We map your workflows, identify real bottlenecks, and decide exactly what should and shouldn't be automated." },
        { n: 2, active: false, title: "Design & Logic Planning", desc: "We architect the full system on paper first. Conversation flows, data logic, integrations, and decision trees are all mapped out before we write a single line of code." },
        { n: 3, active: false, title: "Build & Integration", desc: "We connect your tools, configure your AI agents, and build the workflows that tie everything together. Every solution is custom built to match your brand voice and business objectives." },
        { n: 4, active: false, title: "Testing with Real Data", desc: "We stress test the system against real world scenarios, objections, accents, and edge cases. Latency, accuracy, and response quality are all refined before anything goes live." },
        { n: 5, active: false, title: "Launch & Handoff", desc: "Your system goes live with full documentation and a dashboard so you can monitor performance without needing us. And we stick around to optimize as your business evolves." },
    ];
    return (
        <section className="border-y bg-zinc-900/20 border-white/5 py-28" id="process">
            <div className="max-w-7xl mx-auto px-6">
                <div className="flex flex-col md:flex-row gap-20">
                    <div className="md:w-1/3 sticky top-32 h-fit">
                        <h2 className="text-4xl md:text-5xl font-semibold tracking-tight mb-8 text-white">How We Build Your System</h2>
                        <p className="text-xl text-zinc-400 mb-10">No jumping straight into tools. We take the time to understand your operation first, then build the right solution from the ground up.</p>
                        <a href={BOOKING_URL} target="_blank" rel="noreferrer" className="px-6 py-3 rounded-lg bg-zinc-100 text-zinc-950 font-semibold text-base hover:bg-zinc-200 transition-colors inline-block">Start the Process</a>
                    </div>
                    <div className="md:w-2/3 space-y-16">
                        {steps.map((s, i) => (
                            <div key={s.n} className="flex gap-8">
                                <div className="flex flex-col items-center">
                                    <div className={`w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-lg ${s.active ? "bg-blue-600 shadow-lg shadow-blue-500/20" : "bg-zinc-800 border border-zinc-700"}`}>{s.n}</div>
                                    {i < steps.length - 1 && <div className="w-px h-full bg-zinc-800 my-4" />}
                                </div>
                                <div className={i < steps.length - 1 ? "pb-6" : ""}>
                                    <h3 className="text-2xl font-medium text-white mb-3">{s.title}</h3>
                                    <p className="text-lg text-zinc-400">{s.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

export function RoadmapSection() {
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [emailSentTo, setEmailSentTo] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsLoading(true);
        const formData = new FormData(e.currentTarget);
        const data = Object.fromEntries(formData.entries());

        try {
            await fetch("https://workflow.chatbotboy.ai/webhook/ai-implementation-roadmap", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(data),
            });
            setEmailSentTo(data.email as string);
            setIsSubmitted(true);
        } catch (error) {
            console.error("Error submitting roadmap request:", error);
        } finally {
            setIsLoading(false);
        }
    };

    const benefits = [
        "Custom AI automation roadmap",
        "ROI estimation for your process",
        "Step-by-step implementation plan",
        "Tool recommendations",
        "No credit card required",
        "Delivered in 5 minutes",
        "We respect your privacy"
    ];

    return (
        <section className="bg-zinc-950 py-28 relative overflow-hidden" id="roadmap">
            {/* Background Glow */}
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-900/10 blur-[130px] rounded-full pointer-events-none" />

            <div className="max-w-6xl mx-auto px-6 relative z-10">
                <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-start">

                    {/* Left Side: Copy & Benefits */}
                    <div className="w-full lg:w-5/12 space-y-8 sticky top-32">
                        <div>
                            <h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-white mb-6">Get Your Free AI Implementation Roadmap</h2>
                            <p className="text-xl text-zinc-400 leading-relaxed">Discover how AI can automate your business processes. Get a custom analysis in 5 minutes—no sales call required.</p>
                        </div>

                        <div className="pt-8 space-y-6">
                            <h3 className="text-2xl font-medium text-white">What You&apos;ll Get:</h3>
                            <ul className="space-y-4">
                                {benefits.map((b) => (
                                    <li key={b} className="flex gap-4 items-start text-zinc-300 text-lg">
                                        <div className="mt-1">
                                            <Icon icon="solar:check-circle-linear" className="text-blue-500" width="1.2em" height="1.2em" />
                                        </div>
                                        <span>{b}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    {/* Right Side: Form structure matching the picture layout */}
                    <div className="w-full lg:w-7/12">
                        <div className="bg-zinc-900/50 border border-zinc-800 rounded-3xl p-8 md:p-12 shadow-2xl backdrop-blur-sm relative overflow-hidden">
                            {/* Inner Form Glow */}
                            <div className="absolute -top-32 -right-32 w-64 h-64 bg-sky-500/10 blur-[80px] rounded-full pointer-events-none" />

                            {isSubmitted ? (
                                <div className="relative z-10 flex flex-col items-center text-center tracking-wide">
                                    <h3 className="text-3xl md:text-4xl font-semibold text-white mb-4">Your Information Has Been Received!</h3>
                                    <p className="text-lg text-zinc-400 max-w-md mx-auto mb-8">Expect your personalized AI Implementation Roadmap in your inbox within 3-5 minutes.</p>

                                    <div className="w-full border border-zinc-800 bg-zinc-950/50 rounded-2xl p-6 shadow-sm flex flex-col items-center justify-center gap-2 mb-6">
                                        <div className="flex gap-2 items-center text-blue-400 font-medium tracking-wide">
                                            <Icon icon="solar:letter-linear" width="1.4em" height="1.4em" />
                                            We sent it to:
                                        </div>
                                        <div className="text-xl font-medium text-white">{emailSentTo}</div>
                                    </div>

                                    <div className="w-full bg-blue-900/10 border border-blue-500/20 rounded-2xl p-8 text-left mb-10">
                                        <div className="flex items-center gap-2 text-zinc-300 font-medium mb-5 text-lg">
                                            <Icon icon="solar:clock-circle-linear" width="1.4em" height="1.4em" className="text-blue-400" />
                                            What happens next?
                                        </div>
                                        <ul className="space-y-4 text-zinc-400">
                                            <li className="flex gap-3"><span className="text-blue-500 font-bold">1.</span> Our AI analyzes your business process</li>
                                            <li className="flex gap-3"><span className="text-blue-500 font-bold">2.</span> A custom roadmap is generated for you</li>
                                            <li className="flex gap-3"><span className="text-blue-500 font-bold">3.</span> Check your inbox (and spam folder) in 3-5 minutes</li>
                                        </ul>
                                    </div>

                                    <div className="flex flex-col items-center gap-5 w-full">
                                        <p className="text-zinc-400 font-medium">Ready to implement faster? Let's chat!</p>
                                        <a href="https://links.convertwave.ai/widget/booking/vTmxKNDLOVK17mpAYXot" target="_blank" rel="noreferrer" className="w-full md:w-auto bg-blue-600 hover:bg-blue-500 text-white font-medium text-lg py-4 px-10 rounded-xl transition-all shadow-xl hover:shadow-blue-500/25 flex items-center justify-center gap-3">
                                            Book a Discovery Call
                                            <Icon icon="solar:arrow-right-up-linear" width="1.2em" height="1.2em" />
                                        </a>
                                    </div>
                                </div>
                            ) : (
                                <form onSubmit={handleSubmit} className="relative z-10 space-y-8">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                        <div className="space-y-2">
                                            <label htmlFor="firstName" className="block text-sm font-medium text-zinc-300">First Name <span className="text-red-400">*</span></label>
                                            <input type="text" id="firstName" name="firstName" placeholder="John" required className="w-full bg-zinc-950 border border-zinc-800 rounded-xl px-4 py-3 text-white placeholder-zinc-600 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all font-light" />
                                        </div>
                                        <div className="space-y-2">
                                            <label htmlFor="lastName" className="block text-sm font-medium text-zinc-300">Last Name <span className="text-red-400">*</span></label>
                                            <input type="text" id="lastName" name="lastName" placeholder="Smith" required className="w-full bg-zinc-950 border border-zinc-800 rounded-xl px-4 py-3 text-white placeholder-zinc-600 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all font-light" />
                                        </div>
                                    </div>

                                    <div className="space-y-2">
                                        <label htmlFor="companyName" className="block text-sm font-medium text-zinc-300">Company Name <span className="text-red-400">*</span></label>
                                        <input type="text" id="companyName" name="companyName" placeholder="Acme Inc." required className="w-full bg-zinc-950 border border-zinc-800 rounded-xl px-4 py-3 text-white placeholder-zinc-600 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all font-light" />
                                    </div>

                                    <div className="space-y-2">
                                        <label htmlFor="email" className="block text-sm font-medium text-zinc-300">Email Address <span className="text-red-400">*</span></label>
                                        <input type="email" id="email" name="email" placeholder="john@company.com" required className="w-full bg-zinc-950 border border-zinc-800 rounded-xl px-4 py-3 text-white placeholder-zinc-600 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all font-light" />
                                    </div>

                                    <div className="space-y-2">
                                        <label htmlFor="problem" className="block text-sm font-medium text-zinc-300 mb-1">Describe Your Business Process or Problem <span className="text-red-400">*</span></label>
                                        <p className="text-sm text-zinc-500 mb-3 font-light">What repetitive task takes too much time?</p>
                                        <textarea id="problem" name="problem" rows={6} placeholder="Example: Our team manually processes 50+ customer inquiries daily by copying information from emails into our CRM. This takes about 3 hours per day and often leads to data entry errors..." required className="w-full bg-zinc-950 border border-zinc-800 rounded-xl px-4 py-4 text-white placeholder-zinc-600 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all resize-none shadow-inner font-light leading-relaxed"></textarea>
                                    </div>

                                    <div className="pt-4">
                                        <button type="submit" disabled={isLoading} className="w-full bg-blue-600 hover:bg-blue-500 text-white font-medium text-lg py-4 rounded-xl transition-all shadow-lg hover:shadow-blue-500/25 active:scale-[0.98] disabled:opacity-75 disabled:cursor-not-allowed">
                                            {isLoading ? "Submitting..." : "Get My Free Roadmap"}
                                        </button>
                                    </div>
                                </form>
                            )}
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
