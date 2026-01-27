import { motion } from "framer-motion";

const stats = [
  { value: "13k+", label: "organizations turn to us for their security needs", color: "rainbow-red" },
  { value: "120+", label: "Fortune 500 companies rely on our solutions", color: "rainbow-orange" },
  { value: "95%", label: "customer satisfaction rating from our clients", color: "rainbow-yellow" },
  { value: "#1", label: "to market with AI MCP server integration", color: "rainbow-green" },
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
            <p className="text-gradient bg-rainbow-gradient bg-[length:200%_200%] animate-rainbow-shift bg-clip-text text-transparent font-medium mb-3">Stats</p>
            <h2 className="text-4xl md:text-6xl font-semibold tracking-tight leading-tight">
              Our numbers speak for{" "}
              <span className="text-gradient bg-rainbow-gradient bg-[length:200%_200%] animate-rainbow-shift bg-clip-text text-transparent">themselves</span>
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
                className="px-6 py-8 group hover:bg-gradient-to-r hover:from-rainbow-red/5 hover:via-rainbow-yellow/5 hover:to-rainbow-blue/5 transition-all duration-300"
              >
                <div className="flex items-start justify-between gap-6">
                  <div 
                    className="text-5xl md:text-6xl font-semibold transition-all duration-300 group-hover:scale-110 group-hover:drop-shadow-lg"
                    style={{
                      color: `hsl(var(--rainbow-${stat.color === 'rainbow-red' ? 'red' : stat.color === 'rainbow-orange' ? 'orange' : stat.color === 'rainbow-yellow' ? 'yellow' : 'green'}))`,
                    }}
                  >
                    {stat.value}
                  </div>
                  <p className="text-foreground/70 max-w-sm pt-2 group-hover:text-foreground/90 transition-colors duration-300">{stat.label}</p>
                </div>
                {index !== stats.length - 1 && (
                  <div 
                    className="mt-8 border-t transition-colors duration-300 group-hover:border-rainbow-gradient"
                    style={{
                      borderColor: `hsl(var(--rainbow-${stat.color === 'rainbow-red' ? 'red' : stat.color === 'rainbow-orange' ? 'orange' : stat.color === 'rainbow-yellow' ? 'yellow' : 'green'}) / 0.3)`,
                    }}
                  />
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
