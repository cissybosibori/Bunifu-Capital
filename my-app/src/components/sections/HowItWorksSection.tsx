import { motion } from "framer-motion";

export function HowItWorksSection() {
  return (
    <section className="bunifu-section py-16 lg:py-24 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <p className="text-gradient bg-rainbow-gradient bg-[length:200%_200%] animate-rainbow-shift bg-clip-text text-transparent font-medium mb-3">How it works</p>
          <h2 className="text-4xl md:text-6xl font-semibold tracking-tight mb-6">
            Simple steps to{" "}
            <span className="text-gradient bg-rainbow-gradient bg-[length:200%_200%] animate-rainbow-shift bg-clip-text text-transparent">financial clarity</span>
          </h2>
          <p className="text-lg text-foreground/70 mb-8">
            The process is straightforward. Connect your income sources, let our AI analyze patterns over time, 
            and receive insights that make your creative income understandable to financial institutions.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {[
            { 
              step: "1", 
              title: "Connect income sources", 
              description: "Link your platforms - TikTok, Spotify, Shopify, M-Pesa, and more. All your income streams in one place.",
              color: "rainbow-red"
            },
            { 
              step: "2", 
              title: "AI analyzes patterns", 
              description: "Our models learn your income behavior, consistency, and patterns over time. The longer you're connected, the smarter it gets.",
              color: "rainbow-blue"
            },
            { 
              step: "3", 
              title: "Receive insights", 
              description: "Get risk scores, financial analytics, and market comparisons. See how you compare to peers in your industry and location.",
              color: "rainbow-green"
            },
          ].map((step, index) => (
            <motion.div
              key={step.step}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="text-center p-6 border-2 border-border rounded-lg hover:border-rainbow-gradient hover:bg-gradient-to-br hover:from-rainbow-red/5 hover:via-rainbow-yellow/5 hover:to-rainbow-blue/5 transition-all duration-300 group"
            >
              <div 
                className="text-5xl font-bold mb-4 transition-all duration-300 group-hover:scale-110"
                style={{
                  color: `hsl(var(--rainbow-${step.color}))`,
                }}
              >
                {step.step}
              </div>
              <h3 className="text-xl font-semibold mb-3 group-hover:text-gradient group-hover:bg-rainbow-gradient group-hover:bg-[length:200%_200%] group-hover:animate-rainbow-shift group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
                {step.title}
              </h3>
              <p className="text-foreground/70 text-sm leading-relaxed group-hover:text-foreground/90 transition-colors duration-300">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
