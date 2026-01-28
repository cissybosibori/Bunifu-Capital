import { motion } from "framer-motion";
import { ArrowRight, Calendar, Mic } from "lucide-react";
import { Button } from "@/components/ui/button";

const resources = [
  {
    type: "Article",
    icon: Calendar,
    title: "Understanding the Creative Economy: Size, Scale, and Opportunity",
    author: "Bunifu Capital Research",
    category: "Creative Economy",
    gradient: "from-rainbow-red via-rainbow-orange to-rainbow-yellow",
  },
  {
    type: "Thought Piece",
    icon: Mic,
    title: "Why Creative Income Doesn't Fit Traditional Financial Models",
    author: "Bunifu Capital",
    category: "Finance & Creativity",
    gradient: "from-rainbow-blue via-rainbow-indigo to-rainbow-violet",
  },
];

export function ResourcesSection() {
  return (
    <section id="resources" className="bunifu-section py-16 lg:py-24 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.5 }}
          className="grid lg:grid-cols-2 gap-10 items-start mb-12"
        >
          <div>
            <p className="text-gradient bg-rainbow-gradient bg-[length:200%_200%] animate-rainbow-shift bg-clip-text text-transparent font-medium mb-3">Resources</p>
            <h2 className="text-4xl md:text-6xl font-semibold tracking-tight leading-tight">
              Learn about the{" "}
              <span className="text-gradient bg-rainbow-gradient bg-[length:200%_200%] animate-rainbow-shift bg-clip-text text-transparent">creative economy</span>
            </h2>
            <p className="text-lg text-foreground/70 mt-4">
              Articles, research, and educational content about the creative economy, finance, and how we're building infrastructure to connect them.
            </p>
            <Button variant="ctaOutline" size="lg" className="mt-7 group">
              Resource center
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          {resources.map((resource, index) => (
            <motion.article
              key={resource.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group resource-card relative overflow-hidden border-2 border-border bg-[#141129] text-white min-h-[340px] cursor-pointer hover:border-rainbow-gradient transition-all duration-300"
            >
              <div
                className={`absolute inset-0 bg-gradient-to-br ${resource.gradient} transition-transform duration-700 ease-out group-hover:scale-[1.06] opacity-90 group-hover:opacity-100`}
                style={{
                  backgroundImage: resource.gradient.includes('rainbow-red') 
                    ? `linear-gradient(to bottom right, hsl(var(--rainbow-red)), hsl(var(--rainbow-orange)), hsl(var(--rainbow-yellow)))`
                    : `linear-gradient(to bottom right, hsl(var(--rainbow-blue)), hsl(var(--rainbow-indigo)), hsl(var(--rainbow-violet)))`,
                }}
              />
              {/* Rainbow-style background artwork */}
              <div className="pointer-events-none absolute inset-0">
                <div className="absolute inset-0 bunifu-grid-card opacity-[0.28] invert mix-blend-screen transition-all duration-700 ease-out group-hover:opacity-[0.42] group-hover:-translate-x-2 group-hover:-translate-y-2" />
                <div 
                  className="absolute right-10 top-0 bottom-0 w-[2px] opacity-[0.55] transition-all duration-300 group-hover:opacity-100"
                  style={{
                    background: index === 0 
                      ? `linear-gradient(to bottom, transparent 39.58%, hsl(var(--rainbow-red)) 96.82%)`
                      : `linear-gradient(to bottom, transparent 39.58%, hsl(var(--rainbow-blue)) 96.82%)`,
                  }}
                />
                <div 
                  className="absolute left-0 right-0 bottom-12 h-[2px] opacity-[0.55] transition-all duration-300 group-hover:opacity-100"
                  style={{
                    background: index === 0
                      ? `linear-gradient(to right, transparent 6.5%, hsl(var(--rainbow-yellow)) 31.36%)`
                      : `linear-gradient(to right, transparent 6.5%, hsl(var(--rainbow-violet)) 31.36%)`,
                  }}
                />
                <div className="absolute inset-0 bg-black/0 transition-colors duration-300 group-hover:bg-black/10" />
              </div>

              <div className="relative p-8 h-full flex flex-col">
                <div 
                  className="flex items-center gap-2 text-sm font-medium mb-4 transition-colors duration-300 group-hover:scale-105"
                  style={{
                    color: index === 0 ? `hsl(var(--rainbow-red))` : `hsl(var(--rainbow-blue))`,
                  }}
                >
                  <resource.icon className="w-4 h-4" />
                  {resource.type}
                </div>

                <h3 className="text-2xl md:text-3xl font-semibold tracking-tight leading-tight mb-5">
                  {resource.title}
                </h3>

                <div className="mt-auto flex items-center justify-between gap-6 text-white/80">
                  <div className="flex items-center gap-3">
                    <div className="h-9 w-9 rounded-full bg-white/10 flex items-center justify-center text-xs">
                      {resource.author.split(" ")[0].slice(0, 1)}
                    </div>
                    <div>
                      <div className="text-sm font-medium text-white">{resource.author}</div>
                      <div className="text-xs text-white/70">{resource.category}</div>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 opacity-0 translate-x-2 transition-all duration-200 group-hover:opacity-100 group-hover:translate-x-0">
                    <span className="text-sm font-medium">Learn more</span>
                    <ArrowRight className="h-4 w-4" />
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
