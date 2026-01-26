import { Header } from "@/components/layout/Header";
import { HeroSection } from "@/components/sections/HeroSection";
import { TrustedBySection } from "@/components/sections/TrustedBySection";
import { PlatformSection } from "@/components/sections/PlatformSection";
import { WhyNetwrixSection } from "@/components/sections/WhyNetwrixSection";
import { HowItWorksSection } from "@/components/sections/HowItWorksSection";
import { StatsSection } from "@/components/sections/StatsSection";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { CTASection } from "@/components/sections/CTASection";
import { ResourcesSection } from "@/components/sections/ResourcesSection";
import { Footer } from "@/components/layout/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <TrustedBySection />
        <PlatformSection />
        <WhyNetwrixSection />
        <HowItWorksSection />
        <StatsSection />
        <TestimonialsSection />
        <CTASection />
        <ResourcesSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
