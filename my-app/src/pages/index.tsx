import { Header } from "@/components/layout/Header";
import { HeroSection } from "@/components/sections/HeroSection";
import { TrustedBySection } from "@/components/sections/TrustedBySection";
import { ProblemExplanationSection } from "@/components/sections/ProblemExplanationSection";
import { PlatformSection } from "@/components/sections/PlatformSection";
import { WhyBunifuSection } from "@/components/sections/WhyBunifuSection";
import { HowItWorksSection } from "@/components/sections/HowItWorksSection";
import { StatsSection } from "@/components/sections/StatsSection";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { SeeInActionSection } from "@/components/sections/SeeInActionSection";
import { ResourcesSection } from "@/components/sections/ResourcesSection";
import { WaitlistSignupSection } from "@/components/sections/WaitlistSignupSection";
import { StayUpdatedSection } from "@/components/sections/StayUpdatedSection";
import { GetInTouchSection } from "@/components/sections/GetInTouchSection";
import { Footer } from "@/components/layout/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="bunifu-page">
        <HeroSection />
        <TrustedBySection />
        <ProblemExplanationSection />
        <PlatformSection />
        <HowItWorksSection />
        <WhyBunifuSection />
        <StatsSection />
        <TestimonialsSection />
        <SeeInActionSection />
        <ResourcesSection />
        <WaitlistSignupSection />
        <StayUpdatedSection />
        <GetInTouchSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
