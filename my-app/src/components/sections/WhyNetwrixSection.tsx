import { motion } from "framer-motion";
import { Layers, Rocket, Clock, DollarSign } from "lucide-react";
import { Button } from "@/components/ui/button";

const benefits = [
  {
    icon: Layers,
    title: "Unified security",
    description: "Netwrix connects the dots between identity and data. Our unified platform gives you complete control over who has access to your data.",
  },
  {
    icon: Rocket,
    title: "Flexible deployment",
    description: "Today's IT environments are complex. Netwrix provides flexible deployment options for hybrid tech stacks.",
  },
  {
    icon: Clock,
    title: "Faster time to value",
    description: "Get up and running quickly, accelerate time-to-value, and reduce implementation costs.",
  },
  {
    icon: DollarSign,
    title: "Total cost advantage",
    description: "Netwrix software balances enterprise security with simplicity that helps organizations of all sizes achieve competitive TCOs.",
  },
];

export function WhyNetwrixSection() {
  return (
    <section className="py-20 lg:py-32 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
              Why Netwrix?
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Identity and data security, <span className="text-accent">unified</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Netwrix connects the dots between identity, access, and data. Our platform is fast and flexible, 
              easy to manage, and built to scale with you.
            </p>
            <Button variant="cta" size="lg">
              Learn more about us
            </Button>
          </motion.div>

          {/* Right content - Benefits */}
          <div className="grid sm:grid-cols-2 gap-6">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-card p-6 rounded-xl border border-border card-hover"
              >
                <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center mb-3">
                  <benefit.icon className="w-5 h-5 text-accent" />
                </div>
                <h3 className="font-semibold text-card-foreground mb-2">
                  {benefit.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {benefit.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
