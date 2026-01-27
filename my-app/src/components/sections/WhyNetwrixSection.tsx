import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

const benefits = [
  {
    color: "bg-emerald-400",
    title: "Unified security",
    description: "Netwrix connects the dots between identity and data. Our unified platform gives you complete control over who has access to your data.",
  },
  {
    color: "bg-yellow-400",
    title: "Flexible deployment",
    description: "Today's IT environments are complex. Netwrix provides flexible deployment options for hybrid tech stacks.",
  },
  {
    color: "bg-sky-400",
    title: "Faster time to value",
    description: "Get up and running quickly, accelerate time-to-value, and reduce implementation costs.",
  },
  {
    color: "bg-orange-400",
    title: "Total cost advantage",
    description: "Netwrix software balances enterprise security with simplicity that helps organizations of all sizes achieve competitive TCOs.",
  },
];

export function WhyNetwrixSection() {
  return (
    <section className="netwrix-section bg-background py-16 lg:py-24 relative overflow-hidden">
      {/* Full-section squares (bigger + darker like Netwrix) */}
      <div className="pointer-events-none absolute inset-0 netwrix-grid-svg-black-lg opacity-[0.22]" />
      <div className="pointer-events-none absolute right-0 top-0 h-[520px] w-[640px] bg-[radial-gradient(closest-side,rgba(88,81,219,0.16),rgba(88,81,219,0)_70%)] translate-x-44 -translate-y-24" />
      <div className="container mx-auto px-4 relative">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.45 }}
          className="text-center mb-10 lg:mb-14"
        >
          <p className="text-accent font-medium mb-3">Why Netwrix?</p>
          <h2 className="text-4xl md:text-6xl font-semibold tracking-tight">
            Identity and data security, unified
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-x-12 gap-y-10">
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="flex gap-5"
            >
              <span className={`mt-2 h-3 w-3 ${benefit.color}`} aria-hidden="true" />
              <div>
                <h3 className="text-xl md:text-2xl font-semibold mb-2">{benefit.title}</h3>
                <p className="text-foreground/70 leading-relaxed">{benefit.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 flex justify-center">
          <Button variant="ctaOutline" size="lg">
            Learn more about us
          </Button>
        </div>
      </div>
    </section>
  );
}
