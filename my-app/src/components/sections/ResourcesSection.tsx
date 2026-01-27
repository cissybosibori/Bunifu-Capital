import { motion } from "framer-motion";
import { ArrowRight, Calendar, Mic } from "lucide-react";
import { Button } from "@/components/ui/button";

const resources = [
  {
    type: "Upcoming Webinar",
    icon: Calendar,
    title: "Securing Data in the Age of AI with DSPM",
    author: "Martin Cannard",
    category: "Data Security Posture Management",
    gradient: "from-[#17173a] via-[#17173a] to-[#0e2f29]",
  },
  {
    type: "Podcasts",
    icon: Mic,
    title: "Voices of Cyber Asia: Episode 4- Why Visibility Comes First",
    author: "Terry Burgess, Anthony Moillic",
    category: "Security Insights",
    gradient: "from-[#17173a] via-[#17173a] to-[#2f1b3a]",
  },
];

export function ResourcesSection() {
  return (
    <section className="netwrix-section py-16 lg:py-24 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.5 }}
          className="grid lg:grid-cols-2 gap-10 items-start mb-12"
        >
          <div>
            <p className="text-accent font-medium mb-3">Featured resources</p>
            <h2 className="text-4xl md:text-6xl font-semibold tracking-tight leading-tight">
              Geek out with <br className="hidden md:block" />
              us
            </h2>
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
              className="group resource-card relative overflow-hidden border border-border bg-[#141129] text-white min-h-[340px] cursor-pointer"
            >
              <div
                className={`absolute inset-0 bg-gradient-to-br ${resource.gradient} transition-transform duration-700 ease-out group-hover:scale-[1.06]`}
              />
              {/* Netwrix-style background artwork (grid + green accent lines) */}
              <div className="pointer-events-none absolute inset-0">
                <div className="absolute inset-0 netwrix-grid-card opacity-[0.28] invert mix-blend-screen transition-all duration-700 ease-out group-hover:opacity-[0.42] group-hover:-translate-x-2 group-hover:-translate-y-2" />
                <div className="absolute right-10 top-0 bottom-0 w-[2px] bg-[linear-gradient(rgba(65,242,124,0)_39.58%,rgb(65,242,124)_96.82%)] opacity-[0.55]" />
                <div className="absolute left-0 right-0 bottom-12 h-[2px] bg-[linear-gradient(90deg,rgba(65,242,124,0)_6.5%,rgb(65,242,124)_31.36%)] opacity-[0.55]" />
                <div className="absolute inset-0 bg-black/0 transition-colors duration-300 group-hover:bg-black/10" />
              </div>

              <div className="relative p-8 h-full flex flex-col">
                <div className="flex items-center gap-2 text-emerald-300 text-sm font-medium mb-4">
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
