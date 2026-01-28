import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

const problems = [
  {
    color: "bg-rainbow-red",
    title: "Fragmented income streams",
    description: "Creatives earn from multiple platforms - TikTok, Spotify, Shopify, M-Pesa, and more. Their income is real but scattered across different sources, making it hard to see the full picture.",
  },
  {
    color: "bg-rainbow-orange",
    title: "Financial institutions struggle",
    description: "Banks and lenders don't know how to read creative income. Traditional models expect steady paychecks, not the variable, multi-source income that creatives actually have.",
  },
  {
    color: "bg-rainbow-yellow",
    title: "Creatives are underfunded",
    description: "As a result, creatives struggle to access credit, loans, and investment. Their income is real, but it's not understood by the financial system.",
  },
  {
    color: "bg-rainbow-green",
    title: "The economy loses value",
    description: "When creatives can't access capital, the economy loses. Value is created but not unlocked. Capital is misallocated, and growth opportunities are missed.",
  },
];

export function ProblemExplanationSection() {
  return (
    <section className="netwrix-section bg-background py-16 lg:py-24 relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 netwrix-grid-svg-black-lg opacity-[0.15]" />
      <div className="container mx-auto px-4 relative">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.45 }}
          className="text-center mb-10 lg:mb-14"
        >
          <p className="text-gradient bg-rainbow-gradient bg-[length:200%_200%] animate-rainbow-shift bg-clip-text text-transparent font-medium mb-3">The problem</p>
          <h2 className="text-4xl md:text-6xl font-semibold tracking-tight mb-6">
            Why creatives are{" "}
            <span className="text-gradient bg-rainbow-gradient bg-[length:200%_200%] animate-rainbow-shift bg-clip-text text-transparent">structurally excluded</span>
          </h2>
          <p className="text-lg text-foreground/70 max-w-3xl mx-auto">
            This isn't about creatives or banks doing something wrong. It's a structural problem: creative income doesn't fit traditional financial models. 
            The system wasn't built for how creatives actually earn.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-x-12 gap-y-10 max-w-5xl mx-auto">
          {problems.map((problem, index) => (
            <motion.div
              key={problem.title}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="flex gap-5 group hover:bg-gradient-to-r hover:from-rainbow-red/5 hover:to-transparent p-4 -m-4 rounded-lg transition-all duration-300"
            >
              <span className={`mt-2 h-3 w-3 ${problem.color} rounded-full shadow-lg group-hover:scale-150 group-hover:shadow-xl transition-all duration-300`} aria-hidden="true" />
              <div>
                <h3 className="text-xl md:text-2xl font-semibold mb-2 group-hover:text-gradient group-hover:bg-rainbow-gradient group-hover:bg-[length:200%_200%] group-hover:animate-rainbow-shift group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
                  {problem.title}
                </h3>
                <p className="text-foreground/70 leading-relaxed group-hover:text-foreground/90 transition-colors duration-300">
                  {problem.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 flex justify-center">
          <Button variant="cta" size="lg">
            See how we solve this
          </Button>
        </div>
      </div>
    </section>
  );
}
