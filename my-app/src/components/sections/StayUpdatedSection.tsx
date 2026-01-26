import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

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
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-accent mb-2">
              Stay updated.
            </h2>
            <p className="text-foreground/70 mb-8">Get the latest Netwrix news and product updates</p>

            <label className="block text-sm font-medium mb-2" htmlFor="work-email">
              Work Email*
            </label>
            <div className="flex items-center gap-3">
              <input
                id="work-email"
                type="email"
                placeholder=""
                className="w-full h-12 px-4 bg-transparent border border-accent focus:outline-none focus:ring-2 focus:ring-accent"
              />
              <button
                type="button"
                aria-label="Submit email"
                className="h-12 w-12 flex items-center justify-center border border-border hover:bg-foreground/5"
              >
                <ArrowRight className="h-5 w-5 text-accent" />
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
              {topArticles.map((title) => (
                <a
                  key={title}
                  href="#"
                  className="block py-4 text-foreground/80 hover:text-foreground"
                >
                  {title}
                </a>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

