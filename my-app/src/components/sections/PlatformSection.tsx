import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

const features = [
  {
    color: "bg-rainbow-red",
    hoverShadow: "hover:shadow-rainbow-red/20",
    title: "Creative-specific credit scores",
    description: "Financial signals and risk scores designed for creative income patterns, not traditional employment. Understand your creditworthiness in terms that reflect how you actually earn.",
  },
  {
    color: "bg-rainbow-orange",
    hoverShadow: "hover:shadow-rainbow-orange/20",
    title: "Financial analytics tailored to you",
    description: "Income analysis, stability indicators, and growth projections built specifically for fragmented creative income streams. See your financial health and credit score factors clearly.",
  },
  {
    color: "bg-rainbow-yellow",
    hoverShadow: "hover:shadow-rainbow-yellow/20",
    title: "Market and peer comparisons",
    description: "Compare yourself to peers in your industry and location. A musician in Kenya sees comparisons to other musicians in Kenya, not generic benchmarks.",
  },
  {
    color: "bg-rainbow-green",
    hoverShadow: "hover:shadow-rainbow-green/20",
    title: "Risk and stability indicators",
    description: "Understand your income consistency, growth trends, and financial stability. See how these factors influence your credit score and what financial institutions see when they evaluate your profile.",
  },
  {
    color: "bg-rainbow-blue",
    hoverShadow: "hover:shadow-rainbow-blue/20",
    title: "Standardized reports for funding",
    description: "Generate professional reports ready for loan applications, investment pitches, and funding requests. Includes your credit score, income analysis, and financial metrics, all formatted correctly.",
  },
  {
    color: "bg-rainbow-indigo",
    hoverShadow: "hover:shadow-rainbow-indigo/20",
    title: "Secure credit score and privacy",
    description: "Your credit score information and financial data are encrypted, secure, and private. You control what's shared and with whom. Built with security and privacy as core principles from day one.",
  },
];

export function PlatformSection() {
  return (
    <section className="bunifu-section bg-background py-16 lg:py-24" id="platform">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true, amount: 0.35 }}
            className="order-2 lg:order-1"
          >
            <div className="rounded-2xl border border-border bg-white overflow-hidden shadow-lg">
              <video
                className="w-full h-auto"
                autoPlay
                muted
                loop
                playsInline
                preload="auto"
                aria-label="Bunifu Capital dashboard demo"
              >
                <source src="/bunifu-dashboard-demo.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.05 }}
            viewport={{ once: true, amount: 0.35 }}
            className="order-1 lg:order-2"
          >
            <p className="text-sm font-medium text-muted-foreground mb-3">How the app works</p>
            <h2 className="text-4xl md:text-5xl font-semibold tracking-tight leading-tight mb-5">
              From fragmented income{" "}
              <br />
              to <span className="text-gradient bg-rainbow-gradient bg-[length:200%_200%] animate-rainbow-shift bg-clip-text text-transparent">financial clarity</span>
            </h2>
            <p className="text-lg text-foreground/70 max-w-xl mb-7">
              Bunifu Capital helps creatives connect their income sources. Our AI analyzes your income patterns over time, learning your behavior and consistency. You receive creative-specific credit scores, financial analytics, market comparisons, and credit signals that banks, lenders, and partners can understand.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Button variant="cta" size="lg">
                Join the waitlist
              </Button>
              <Button variant="ctaOutline" size="lg">
                Book a demo
              </Button>
            </div>
          </motion.div>
        </div>

        <div className="mt-14 lg:mt-16 border border-border">
          {features.map((m, idx) => (
            <motion.div
              key={m.title}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.35, delay: idx * 0.03 }}
              className={`grid md:grid-cols-2 gap-6 px-6 py-8 bg-background ${idx === 0 ? "" : "border-t border-border"} transition-all duration-300 group hover:shadow-lg ${m.hoverShadow}`}
            >
              <div className="flex items-start gap-4">
                <span className={`mt-2 h-3 w-3 ${m.color} rounded-full shadow-lg group-hover:scale-150 group-hover:shadow-xl transition-all duration-300`} aria-hidden="true" />
                <h3 className="text-2xl md:text-3xl font-semibold tracking-tight transition-colors duration-300 group-hover:text-gradient group-hover:bg-rainbow-gradient group-hover:bg-[length:200%_200%] group-hover:animate-rainbow-shift group-hover:bg-clip-text group-hover:text-transparent">{m.title}</h3>
              </div>
              <p className="text-foreground/70 text-base md:text-lg group-hover:text-foreground/90 transition-colors duration-300">{m.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
