import { motion } from "framer-motion";

const stats = [
  { value: "13k+", label: "organizations turn to us for their security needs" },
  { value: "120+", label: "Fortune 500 companies rely on our solutions" },
  { value: "95%", label: "customer satisfaction rating from our clients" },
  { value: "#1", label: "to market with AI MCP server integration" },
];

export function StatsSection() {
  return (
    <section className="netwrix-section bg-background py-16 lg:py-24">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.45 }}
          >
            <p className="text-accent font-medium mb-3">Stats</p>
            <h2 className="text-4xl md:text-6xl font-semibold tracking-tight leading-tight">
              Our numbers speak for themselves
            </h2>
          </motion.div>

          <div className="border border-border">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.value}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.35, delay: index * 0.05 }}
                className="px-6 py-8"
              >
                <div className="flex items-start justify-between gap-6">
                  <div className="text-5xl md:text-6xl font-semibold text-accent">{stat.value}</div>
                  <p className="text-foreground/70 max-w-sm pt-2">{stat.label}</p>
                </div>
                {index !== stats.length - 1 && <div className="mt-8 border-t border-border" />}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
