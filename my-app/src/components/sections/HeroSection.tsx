import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

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
      {/* Netwrix hero squares + gradient wash */}
      <div className="pointer-events-none absolute inset-0">
        {/* full-hero color wash so the grid reads everywhere */}
        <div className="absolute inset-0 bg-[linear-gradient(130deg,rgba(255,198,26,0.14),rgba(65,242,124,0.12),rgba(88,81,219,0.08))]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_12%_86%,rgba(255,198,26,0.30),transparent_58%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_92%_18%,rgba(65,242,124,0.22),transparent_58%)]" />

        {/* stronger bottom-left wash */}
        <div className="absolute -left-40 -bottom-44 h-[640px] w-[720px] bg-[radial-gradient(closest-side,rgba(255,198,26,0.48),rgba(255,198,26,0)_72%)]" />
        <div className="absolute -left-24 -bottom-28 h-[520px] w-[620px] bg-[radial-gradient(closest-side,rgba(65,242,124,0.32),rgba(65,242,124,0)_72%)]" />

        <div className="absolute right-0 top-0 h-[540px] w-[620px] netwrix-yellow-green opacity-[0.32] blur-3xl translate-x-40 -translate-y-28" />
        <div className="absolute right-20 top-20 h-[420px] w-[520px] netwrix-yellow-green opacity-[0.22] blur-3xl" />

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
              Data security
              <br />
              that starts with{" "}
              <span className="text-accent">identity™</span>
            </h1>
            
            <p className="text-lg md:text-xl text-foreground/70 mb-8 max-w-xl mx-auto lg:mx-0">
              You can't protect data without first securing the identities that access it. Netwrix puts identity at the core of your data security strategy.
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
              <div className="relative mx-auto w-full max-w-[833px] lg:ml-auto">
                <img
                  src="https://res.cloudinary.com/spiralyze/image/upload/f_auto/netwrix/1021/main_image_4x_1.webp"
                  alt="Netwrix Platform Dashboard"
                  className="block w-full h-auto select-none"
                />
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
