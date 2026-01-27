import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { HeroDashboardMain } from "./HeroDashboardMain";
import { HeroDashboardTablet } from "./HeroDashboardTablet";

export function HeroSection() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const heroImageY = useTransform(scrollYProgress, [0, 1], [0, -60]);

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden pt-28 pb-16 lg:pt-36 lg:pb-24 bg-background border-b border-border"
    >
      {/* Vibrant Rainbow gradient washes */}
      <div className="pointer-events-none absolute inset-0">
        {/* Full rainbow gradient overlay */}
        <div className="absolute inset-0 bg-rainbow-gradient bg-[length:200%_200%] animate-rainbow-shift opacity-20" />
        
        {/* Multiple radial rainbow gradients for depth */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_12%_86%,hsl(var(--rainbow-red)/0.25),transparent_58%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_92%_18%,hsl(var(--rainbow-blue)/0.22),transparent_58%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,hsl(var(--rainbow-yellow)/0.15),transparent_70%)]" />

        {/* Stronger rainbow washes */}
        <div className="absolute -left-40 -bottom-44 h-[640px] w-[720px] bg-[radial-gradient(closest-side,hsl(var(--rainbow-red)/0.35),hsl(var(--rainbow-orange)/0.25),transparent_72%)]" />
        <div className="absolute -left-24 -bottom-28 h-[520px] w-[620px] bg-[radial-gradient(closest-side,hsl(var(--rainbow-yellow)/0.30),hsl(var(--rainbow-green)/0.20),transparent_72%)]" />
        <div className="absolute right-0 top-0 h-[540px] w-[620px] bg-[radial-gradient(closest-side,hsl(var(--rainbow-blue)/0.28),hsl(var(--rainbow-indigo)/0.18),transparent_72%)] blur-3xl translate-x-40 -translate-y-28" />
        <div className="absolute right-20 top-20 h-[420px] w-[520px] bg-[radial-gradient(closest-side,hsl(var(--rainbow-violet)/0.22),hsl(var(--rainbow-red)/0.12),transparent_72%)] blur-3xl" />

        {/* Animated rainbow orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-rainbow-gradient rounded-full blur-3xl opacity-30 animate-rainbow-shift" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-rainbow-gradient rounded-full blur-3xl opacity-25 animate-rainbow-shift" style={{ animationDelay: '2s' }} />

        {/* grid on top */}
        <div className="absolute inset-0 netwrix-grid-svg-white opacity-[0.75]" />
      </div>

      <div className="container mx-auto px-4 relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center lg:text-left"
          >
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-semibold tracking-tight leading-[0.96] mb-6">
              Opening access to finance
              <br />
              for the{" "}
              <span className="text-gradient bg-rainbow-gradient bg-[length:200%_200%] animate-rainbow-shift bg-clip-text text-transparent">creative economy</span>
            </h1>
            
            <p className="text-lg md:text-xl text-foreground/70 mb-8 max-w-xl mx-auto lg:mx-0">
              Creatives earn from fragmented income streams. Financial institutions struggle to assess that income. Bunifu Capital standardizes, analyzes, and translates creative income into financial signals for credit, loans, and investment decisions.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button variant="hero" size="lg">
                Get a demo
              </Button>
              <Button variant="heroOutline" size="lg" className="group">
                Learn more
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </motion.div>

          {/* Right content - Hero image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <motion.div style={{ y: heroImageY }} className="relative">
              <div className="relative mx-auto w-full max-w-[600px] lg:ml-auto">
                {/* Main dashboard (behind) */}
                <div className="relative z-0 w-full">
                  <HeroDashboardMain />
                </div>

                {/* Smaller tablet dashboard: slight overlap (on top) */}
                <div className="hidden md:block absolute -right-8 -top-8 w-[45%] max-w-[280px] z-10">
                  <HeroDashboardTablet />
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
