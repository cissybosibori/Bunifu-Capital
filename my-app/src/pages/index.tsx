import { Header } from "@/components/layout/Header";
import { HeroSection } from "@/components/sections/HeroSection";
import { TrustedBySection } from "@/components/sections/TrustedBySection";
import { PlatformSection } from "@/components/sections/PlatformSection";
import { WhyNetwrixSection } from "@/components/sections/WhyNetwrixSection";
import { HowItWorksSection } from "@/components/sections/HowItWorksSection";
import { GetInTouchSection } from "@/components/sections/GetInTouchSection";
import { StatsSection } from "@/components/sections/StatsSection";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { SeeInActionSection } from "@/components/sections/SeeInActionSection";
import { ResourcesSection } from "@/components/sections/ResourcesSection";
import { StayUpdatedSection } from "@/components/sections/StayUpdatedSection";
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
        <GetInTouchSection />
        <StatsSection />
        <TestimonialsSection />
        <SeeInActionSection />
        <ResourcesSection />
        <StayUpdatedSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
