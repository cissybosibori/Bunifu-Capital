import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export function HeroSection() {
  return (
    <section className="hero-gradient relative overflow-hidden pt-32 pb-20 lg:pt-40 lg:pb-32">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-grid-pattern bg-[size:40px_40px] opacity-20" />
      <div className="absolute inset-0 bg-hero-pattern" />
      
      {/* Decorative elements - using design tokens */}
      <div className="absolute top-20 left-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-80 h-80 bg-primary/20 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center lg:text-left"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground leading-tight mb-6">
              Data security that starts with{" "}
              <span className="text-gradient">identity™</span>
            </h1>
            
            <p className="text-lg md:text-xl text-primary-foreground/80 mb-8 max-w-xl mx-auto lg:mx-0">
              You can't protect data without first securing the identities that access it. 
              Netwrix puts identity at the core of your data security strategy.
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
            <div className="relative animate-float">
              <img
                src="https://res.cloudinary.com/spiralyze/image/upload/f_auto/netwrix/1021/main_image_4x_1.webp"
                alt="Netwrix Platform Dashboard"
                className="w-full max-w-2xl mx-auto drop-shadow-2xl rounded-lg"
              />
              
              {/* Floating cards */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="absolute -left-4 top-1/4 bg-card p-4 rounded-xl shadow-xl border border-border/50 hidden lg:block"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center">
                    <span className="text-accent text-lg">✓</span>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-card-foreground">Access Secured</p>
                    <p className="text-xs text-muted-foreground">Identity verified</p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.7 }}
                className="absolute -right-4 bottom-1/4 bg-card p-4 rounded-xl shadow-xl border border-border/50 hidden lg:block"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center">
                    <span className="text-accent text-lg">🛡️</span>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-card-foreground">Threat Blocked</p>
                    <p className="text-xs text-muted-foreground">Real-time protection</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
