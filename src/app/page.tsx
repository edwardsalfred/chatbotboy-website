import FluidCanvas from "@/components/FluidCanvas";
import Header from "@/components/Header";
import { HeroSection, TechStackSection, ServicesSection, ProcessSection, RoadmapSection } from "@/components/Sections";
import { InsightsSection, AboutSection, CTASection, Footer } from "@/components/LowerSections";

export default function Home() {
  return (
    <>
      <FluidCanvas />

      {/* Background Gradient Spotlights */}
      <div className="fixed top-0 left-0 w-full h-full overflow-hidden -z-20 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-blue-900/20 blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-sky-900/20 blur-[120px]" />
      </div>

      <Header />

      <main>
        <HeroSection />
        <TechStackSection />
        <ServicesSection />
        <ProcessSection />
        <RoadmapSection />
        <InsightsSection />
        <AboutSection />
        <CTASection />
      </main>

      <Footer />
    </>
  );
}
