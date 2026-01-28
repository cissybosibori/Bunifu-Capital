import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

const benefits = [
  {
    color: "bg-rainbow-red",
    title: "All creative financial data in one place",
    description:
      "Connect income sources across platforms. See your complete financial picture in one unified profile that reflects how creatives actually earn.",
  },
  {
    color: "bg-rainbow-orange",
    title: "Easier access to funding readiness",
    description:
      "Transform fragmented income into standardized reports and financial signals that banks, lenders, and investors understand and trust.",
  },
  {
    color: "bg-rainbow-yellow",
    title: "Clear reporting and records",
    description:
      "Generate professional financial analytics, risk scores, and market comparisons tailored to creative income patterns and your specific industry.",
  },
  {
    color: "bg-rainbow-green",
    title: "Automation powered by AI",
    description:
      "AI learns your income behavior and patterns over time, providing insights, predictions, and automated analysis without manual work.",
  },
  {
    color: "bg-rainbow-blue",
    title: "Security and privacy as core principles",
    description:
      "Your data is encrypted, secure, and private. You control what's shared and with whom. Built with security from the ground up.",
  },
  {
    color: "bg-rainbow-indigo",
    title: "Built specifically for creative economies",
    description:
      "Not adapted from traditional finance tools. Designed from day one to understand and represent creative income accurately.",
  },
];

export function WhyBunifuSection() {
  return (
    <section className="bunifu-section bg-background py-16 lg:py-24 relative overflow-hidden">
      {/* Full-section squares (bigger + darker like Bunifu) */}
      <div className="pointer-events-none absolute inset-0 bunifu-grid-svg-black-lg opacity-[0.22]" />
      <div className="pointer-events-none absolute right-0 top-0 h-[520px] w-[640px] bg-[radial-gradient(closest-side,rgba(88,81,219,0.16),rgba(88,81,219,0)_70%)] translate-x-44 -translate-y-24" />
      <div className="container mx-auto px-4 relative">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.45 }}
          className="text-center mb-10 lg:mb-14"
        >
          <p className="text-gradient bg-rainbow-gradient bg-[length:200%_200%] animate-rainbow-shift bg-clip-text text-transparent font-medium mb-3">
            Why Bunifu Capital?
          </p>
          <h2 className="text-4xl md:text-6xl font-semibold tracking-tight">
            Infrastructure built for{" "}
            <span className="text-gradient bg-rainbow-gradient bg-[length:200%_200%] animate-rainbow-shift bg-clip-text text-transparent">
              creative income
            </span>
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
              <span
                className={`mt-2 h-3 w-3 ${benefit.color} rounded-full shadow-lg group-hover:scale-150 group-hover:shadow-xl transition-all duration-300`}
                aria-hidden="true"
              />
              <div>
                <h3 className="text-xl md:text-2xl font-semibold mb-2 group-hover:text-gradient group-hover:bg-rainbow-gradient group-hover:bg-[length:200%_200%] group-hover:animate-rainbow-shift group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
                  {benefit.title}
                </h3>
                <p className="text-foreground/70 leading-relaxed group-hover:text-foreground/90 transition-colors duration-300">
                  {benefit.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 flex justify-center gap-4">
          <Button variant="cta" size="lg">
            Join the waitlist
          </Button>
          <Button variant="ctaOutline" size="lg">
            Learn more
          </Button>
        </div>
      </div>
    </section>
  );
}

