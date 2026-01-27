import { motion } from "framer-motion";
import { Check } from "lucide-react";

const features = [
  { label: "Flexible deployment" },
  { label: "Fast implementation" },
  { label: "Reduced complexity" },
  { label: "AI-powered insights" },
  { label: "Expert support" },
  { label: "Lower TCO" },
];

export function HowItWorksSection() {
  return (
    <section className="netwrix-section py-16 lg:py-24 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <p className="text-gradient bg-rainbow-gradient bg-[length:200%_200%] animate-rainbow-shift bg-clip-text text-transparent font-medium mb-3">How it works</p>
          <h2 className="text-4xl md:text-6xl font-semibold tracking-tight mb-6">
            How we power{" "}
            <span className="text-gradient bg-rainbow-gradient bg-[length:200%_200%] animate-rainbow-shift bg-clip-text text-transparent">protection</span>
          </h2>
          <p className="text-lg text-foreground/70">
            Bunifu Capital connects the dots between identity, access, and data. Our platform is fast and flexible, 
            easy to manage, and built to scale with you. With AI-driven insights, unified visibility, 
            and built-in compliance, you can reduce risk without the overhead.
          </p>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-4">
          {features.map((feature, index) => (
            <motion.div
              key={feature.label}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.35, delay: index * 0.04 }}
              className="flex items-center gap-3 px-6 py-3 bg-background text-foreground rounded-none border-2 border-border hover:border-rainbow-gradient hover:bg-gradient-to-r hover:from-rainbow-red/5 hover:via-rainbow-yellow/5 hover:to-rainbow-blue/5 transition-all duration-300 group rainbow-hover-scale"
              style={{
                borderColor: `hsl(var(--rainbow-${feature.color === 'rainbow-red' ? 'red' : feature.color === 'rainbow-orange' ? 'orange' : feature.color === 'rainbow-yellow' ? 'yellow' : feature.color === 'rainbow-green' ? 'green' : feature.color === 'rainbow-blue' ? 'blue' : 'indigo'}) / 0.3)`,
              }}
            >
              <Check 
                className="h-5 w-5 transition-all duration-300 group-hover:scale-125"
                style={{
                  color: `hsl(var(--rainbow-${feature.color === 'rainbow-red' ? 'red' : feature.color === 'rainbow-orange' ? 'orange' : feature.color === 'rainbow-yellow' ? 'yellow' : feature.color === 'rainbow-green' ? 'green' : feature.color === 'rainbow-blue' ? 'blue' : 'indigo'}))`,
                }}
              />
              <span className="font-medium group-hover:text-gradient group-hover:bg-rainbow-gradient group-hover:bg-[length:200%_200%] group-hover:animate-rainbow-shift group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">{feature.label}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
