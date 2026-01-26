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
    <section ref={sectionRef} className="relative overflow-hidden pt-28 pb-16 lg:pt-36 lg:pb-24 bg-background">
      {/* subtle grid + soft green corner wash */}
      <div className="absolute inset-0 bg-grid-pattern bg-[size:48px_48px] opacity-[0.22]" />
      <div className="absolute right-0 top-0 h-[520px] w-[720px] bg-[radial-gradient(closest-side,rgba(63,191,123,0.35),rgba(63,191,123,0)_70%)] translate-x-40 -translate-y-24" />

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
              <img
                src="https://res.cloudinary.com/spiralyze/image/upload/f_auto/netwrix/1021/main_image_4x_1.webp"
                alt="Netwrix Platform Dashboard"
                className="w-full max-w-2xl mx-auto rounded-xl border border-border bg-white shadow-[0_24px_64px_rgba(0,0,0,0.14)]"
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
