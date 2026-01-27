import { motion } from "framer-motion";
import { ArrowRight, ChevronRight } from "lucide-react";

const topArticles = [
  "Essential PowerShell Commands: A Cheat Sheet for Beginners",
  "Download and Install PowerShell 7",
  "Common Types of Network Devices and Their Functions",
  "How to Run PowerShell Script from Task Scheduler",
  "How to Install & Use Active Directory Users and Computers (ADUC)?",
];

export function StayUpdatedSection() {
  return (
    <section className="netwrix-section bg-background py-16 lg:py-24">
      <div className="container mx-auto px-4">
        <div className="border border-border grid md:grid-cols-2">
          {/* Stay updated */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.45 }}
            className="p-8 md:p-10 border-b border-border md:border-b-0 md:border-r border-border"
          >
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-2">
              <span className="text-gradient bg-rainbow-gradient bg-[length:200%_200%] animate-rainbow-shift bg-clip-text text-transparent">Stay updated.</span>
            </h2>
            <p className="text-foreground/70 mb-8">Get the latest Bunifu Capital news and product updates</p>

            <label className="block text-sm font-medium mb-2" htmlFor="work-email">
              Work Email*
            </label>
            <div className="flex items-center gap-3">
              <input
                id="work-email"
                type="email"
                placeholder=""
                className="w-full h-12 px-4 bg-transparent border-2 border-rainbow-violet/30 focus:outline-none focus:ring-2 focus:ring-rainbow-violet focus:border-rainbow-violet transition-all duration-300 hover:border-rainbow-gradient"
              />
              <button
                type="button"
                aria-label="Submit email"
                className="h-12 w-12 flex items-center justify-center border-2 border-rainbow-gradient bg-rainbow-gradient bg-[length:200%_200%] animate-rainbow-shift hover:scale-110 hover:shadow-lg hover:shadow-rainbow-violet/30 transition-all duration-300"
              >
                <ArrowRight className="h-5 w-5 text-white" />
              </button>
            </div>

            <p className="mt-4 text-sm text-foreground/60">
              We care about the security of your data.{" "}
              <a className="text-accent underline underline-offset-4" href="#">
                Privacy Policy
              </a>
              .
            </p>
          </motion.div>

          {/* Top articles */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.45, delay: 0.05 }}
            className="p-8 md:p-10"
          >
            <h3 className="text-xl font-semibold mb-6">Read top articles</h3>
            <div className="divide-y divide-border">
              {topArticles.map((title, index) => {
                const rainbowColors = [
                  'hover:text-rainbow-red',
                  'hover:text-rainbow-orange',
                  'hover:text-rainbow-yellow',
                  'hover:text-rainbow-green',
                  'hover:text-rainbow-blue',
                ];
                const hoverColor = rainbowColors[index % 5];
                return (
                  <a
                    key={title}
                    href="#"
                    className={`article-link group flex items-center justify-between gap-4 py-4 px-2 -mx-2 text-foreground/80 ${hoverColor} hover:bg-gradient-to-r hover:from-rainbow-red/5 hover:to-transparent transition-all duration-300`}
                  >
                    <span className="transition-transform duration-200 group-hover:translate-x-1">{title}</span>
                    <ChevronRight 
                      className="h-5 w-5 opacity-0 translate-x-1 transition-all duration-200 group-hover:opacity-100 group-hover:translate-x-0"
                      style={{
                        color: `hsl(var(--rainbow-${index % 5 === 0 ? 'red' : index % 5 === 1 ? 'orange' : index % 5 === 2 ? 'yellow' : index % 5 === 3 ? 'green' : 'blue'}))`,
                      }}
                    />
                  </a>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

