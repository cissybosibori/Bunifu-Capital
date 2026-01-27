import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

const benefits = [
  {
    color: "bg-rainbow-red",
    title: "Unified security",
    description: "Bunifu Capital connects the dots between identity and data. Our unified platform gives you complete control over who has access to your data.",
  },
  {
    color: "bg-rainbow-orange",
    title: "Flexible deployment",
    description: "Today's IT environments are complex. Bunifu Capital provides flexible deployment options for hybrid tech stacks.",
  },
  {
    color: "bg-rainbow-yellow",
    title: "Faster time to value",
    description: "Get up and running quickly, accelerate time-to-value, and reduce implementation costs.",
  },
  {
    color: "bg-rainbow-green",
    title: "Total cost advantage",
    description: "Bunifu Capital software balances enterprise security with simplicity that helps organizations of all sizes achieve competitive TCOs.",
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
          <p className="text-gradient bg-rainbow-gradient bg-[length:200%_200%] animate-rainbow-shift bg-clip-text text-transparent font-medium mb-3">Why Bunifu Capital?</p>
          <h2 className="text-4xl md:text-6xl font-semibold tracking-tight">
            Identity and data security,{" "}
            <span className="text-gradient bg-rainbow-gradient bg-[length:200%_200%] animate-rainbow-shift bg-clip-text text-transparent">unified</span>
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
              className="flex gap-5 group hover:bg-gradient-to-r hover:from-rainbow-red/5 hover:to-transparent p-4 -m-4 rounded-lg transition-all duration-300"
            >
              <span className={`mt-2 h-3 w-3 ${benefit.color} rounded-full shadow-lg group-hover:scale-150 group-hover:shadow-xl transition-all duration-300`} aria-hidden="true" />
              <div>
                <h3 className="text-xl md:text-2xl font-semibold mb-2 group-hover:text-gradient group-hover:bg-rainbow-gradient group-hover:bg-[length:200%_200%] group-hover:animate-rainbow-shift group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">{benefit.title}</h3>
                <p className="text-foreground/70 leading-relaxed group-hover:text-foreground/90 transition-colors duration-300">{benefit.description}</p>
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
