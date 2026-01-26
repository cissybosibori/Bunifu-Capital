import { motion } from "framer-motion";
import { Cpu, Zap, Settings, Brain, Headphones, TrendingDown } from "lucide-react";

const features = [
  { icon: Settings, label: "Flexible deployment" },
  { icon: Zap, label: "Fast implementation" },
  { icon: Cpu, label: "Reduced complexity" },
  { icon: Brain, label: "AI-powered insights" },
  { icon: Headphones, label: "Expert support" },
  { icon: TrendingDown, label: "Lower TCO" },
];

export function HowItWorksSection() {
  return (
    <section className="py-20 lg:py-32 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-accent/10 text-accent text-sm font-medium mb-4">
            How it works
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            How we power protection
          </h2>
          <p className="text-lg text-muted-foreground">
            Netwrix connects the dots between identity, access, and data. Our platform is fast and flexible, 
            easy to manage, and built to scale with you. With AI-driven insights, unified visibility, 
            and built-in compliance, you can reduce risk without the overhead.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {features.map((feature, index) => (
            <motion.div
              key={feature.label}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              className="flex flex-col items-center p-6 rounded-xl bg-card border border-border hover:border-accent/30 transition-all duration-300 card-hover"
            >
              <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center mb-3">
                <feature.icon className="w-6 h-6 text-accent" />
              </div>
              <span className="text-sm font-medium text-card-foreground text-center">
                {feature.label}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
