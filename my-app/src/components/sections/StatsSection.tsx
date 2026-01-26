import { motion } from "framer-motion";

const stats = [
  { value: "13k+", label: "organizations turn to us for their security needs" },
  { value: "120+", label: "Fortune 500 companies rely on our solutions" },
  { value: "95%", label: "customer satisfaction rating from our clients" },
  { value: "#1", label: "to market with AI MCP server integration" },
];

export function StatsSection() {
  return (
    <section className="hero-gradient py-20 lg:py-28 relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-grid-pattern bg-[size:40px_40px] opacity-10" />
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-accent/20 text-accent text-sm font-medium mb-4">
            Stats
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground">
            Our numbers speak for themselves
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.value}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center"
            >
              <div className="text-5xl md:text-6xl font-bold text-accent mb-3">
                {stat.value}
              </div>
              <p className="text-primary-foreground/80">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
