import { motion } from "framer-motion";

const stats = [
  { value: "$2.25T", label: "global creative economy value, yet creatives remain underfunded", color: "rainbow-red" },
  { value: "70%", label: "of creatives report difficulty accessing credit and loans", color: "rainbow-orange" },
  { value: "6.1%", label: "contribution to global GDP from creative industries", color: "rainbow-yellow" },
  { value: "$50B+", label: "funding gap between value created and capital accessed", color: "rainbow-green" },
];

export function StatsSection() {
  return (
    <section className="bunifu-section bg-background py-16 lg:py-24">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.45 }}
          >
            <p className="text-gradient bg-rainbow-gradient bg-[length:200%_200%] animate-rainbow-shift bg-clip-text text-transparent font-medium mb-3">The creative economy</p>
            <h2 className="text-4xl md:text-6xl font-semibold tracking-tight leading-tight">
              Massive value.{" "}
              <span className="text-gradient bg-rainbow-gradient bg-[length:200%_200%] animate-rainbow-shift bg-clip-text text-transparent">Limited access.</span>
            </h2>
            <p className="text-lg text-foreground/70 mt-4">
              The creative economy creates enormous value, but traditional financial systems struggle to understand creative income. This gap represents both a problem and an opportunity.
            </p>
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
