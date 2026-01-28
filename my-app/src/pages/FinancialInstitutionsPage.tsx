import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Check } from "lucide-react";

const challenges = [
  {
    color: "bg-rainbow-blue",
    title: "Creative income is hard to assess",
    description: "Traditional models expect steady paychecks, not variable, multi-source income from platforms like TikTok, Spotify, and Shopify.",
  },
  {
    color: "bg-rainbow-indigo",
    title: "Existing models fail for creatives",
    description: "Standard credit scoring and risk assessment tools don't account for how creatives actually earn and grow their income.",
  },
  {
    color: "bg-rainbow-blue",
    title: "Manual assessment is costly",
    description: "Reviewing creative income manually is time-consuming, inconsistent, and doesn't scale. You need standardized, automated solutions.",
  },
];

const benefits = [
  {
    color: "bg-rainbow-blue",
    title: "Reduce risk and effort",
    description: "Bunifu Capital standardizes creative income into structured, analyzable data. AI-powered risk scoring and financial signals help you make informed decisions faster.",
  },
  {
    color: "bg-rainbow-indigo",
    title: "Expand your market safely",
    description: "Access the growing creative economy with confidence. Our platform helps you understand and assess creative income patterns you couldn't evaluate before.",
  },
  {
    color: "bg-rainbow-blue",
    title: "Fit into existing workflows",
    description: "Our outputs integrate with your current systems. Get standardized reports, risk scores, and financial analytics that work with your processes.",
  },
  {
    color: "bg-rainbow-indigo",
    title: "Decision support infrastructure",
    description: "We act as infrastructure, not a replacement. You get the insights you need to make lending and investment decisions, while maintaining control.",
  },
];

const insights = [
  "Risk scores tailored to creative income patterns",
  "Financial analytics and income consistency metrics",
  "Market and peer comparisons by industry and location",
  "Standardized reports for underwriting and assessment",
  "AI-powered pattern recognition and predictions",
  "Secure, compliant data handling",
];

const FinancialInstitutionsPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="bunifu-page">
        {/* Hero Section */}
        <section className="relative overflow-hidden pt-28 pb-16 lg:pt-36 lg:pb-24 bg-background border-b border-border">
          {/* Blue/Indigo gradient theme */}
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_12%_86%,hsl(var(--rainbow-blue)/0.25),transparent_58%)]" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_92%_18%,hsl(var(--rainbow-indigo)/0.22),transparent_58%)]" />
            <div className="absolute -left-40 -bottom-44 h-[640px] w-[720px] bg-[radial-gradient(closest-side,hsl(var(--rainbow-blue)/0.35),hsl(var(--rainbow-indigo)/0.25),transparent_72%)]" />
            <div className="absolute right-0 top-0 h-[540px] w-[620px] bg-[radial-gradient(closest-side,hsl(var(--rainbow-indigo)/0.28),hsl(var(--rainbow-blue)/0.18),transparent_72%)] blur-3xl translate-x-40 -translate-y-28" />
            <div className="absolute inset-0 bunifu-grid-svg-white opacity-[0.75]" />
          </div>

          <div className="container mx-auto px-4 relative">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center max-w-4xl mx-auto"
            >
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-semibold tracking-tight leading-[0.96] mb-6">
                Infrastructure for{" "}
                <span className="text-gradient bg-gradient-to-r from-[hsl(var(--rainbow-blue))] via-[hsl(var(--rainbow-indigo))] to-[hsl(var(--rainbow-violet))] bg-[length:200%_200%] animate-rainbow-shift bg-clip-text text-transparent">financial institutions</span>
              </h1>
              <p className="text-lg md:text-xl text-foreground/70 mb-8 max-w-2xl mx-auto">
                Bunifu Capital helps banks, lenders, and financial institutions understand creative income. 
                We reduce risk, reduce effort, and help you expand into the creative economy safely.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="hero" size="lg" asChild>
                  <Link to="/pricing">Book a demo</Link>
                </Button>
                <Button variant="heroOutline" size="lg" className="group" asChild>
                  <Link to="/#get-in-touch">
                    Contact experts
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Challenges Section */}
        <section className="bunifu-section bg-background py-16 lg:py-24 relative overflow-hidden">
          <div className="pointer-events-none absolute inset-0 bunifu-grid-svg-black-lg opacity-[0.15]" />
          <div className="container mx-auto px-4 relative">
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.35 }}
              transition={{ duration: 0.45 }}
              className="text-center mb-10 lg:mb-14"
            >
              <p className="text-gradient bg-gradient-to-r from-[hsl(var(--rainbow-blue))] via-[hsl(var(--rainbow-indigo))] to-[hsl(var(--rainbow-violet))] bg-[length:200%_200%] animate-rainbow-shift bg-clip-text text-transparent font-medium mb-3">The challenge</p>
              <h2 className="text-4xl md:text-6xl font-semibold tracking-tight mb-6">
                Why institutions struggle with{" "}
                <span className="text-gradient bg-gradient-to-r from-[hsl(var(--rainbow-blue))] via-[hsl(var(--rainbow-indigo))] to-[hsl(var(--rainbow-violet))] bg-[length:200%_200%] animate-rainbow-shift bg-clip-text text-transparent">creative income</span>
              </h2>
              <p className="text-lg text-foreground/70 max-w-3xl mx-auto">
                Creative income is real, but it doesn't fit traditional assessment models. 
                You need new tools to understand and evaluate this growing segment of the economy.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-x-8 gap-y-10 max-w-5xl mx-auto">
              {challenges.map((challenge, index) => (
                <motion.div
                  key={challenge.title}
                  initial={{ opacity: 0, y: 14 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.25 }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  className="flex flex-col gap-5 group hover:bg-gradient-to-br hover:from-rainbow-blue/5 hover:to-transparent p-4 -m-4 rounded-lg transition-all duration-300"
                >
                  <span className={`h-3 w-3 ${challenge.color} rounded-full shadow-lg group-hover:scale-150 group-hover:shadow-xl transition-all duration-300`} aria-hidden="true" />
                  <div>
                    <h3 className="text-xl md:text-2xl font-semibold mb-2 group-hover:text-gradient group-hover:bg-gradient-to-r group-hover:from-[hsl(var(--rainbow-blue))] group-hover:via-[hsl(var(--rainbow-indigo))] group-hover:to-[hsl(var(--rainbow-violet))] group-hover:bg-[length:200%_200%] group-hover:animate-rainbow-shift group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
                      {challenge.title}
                    </h3>
                    <p className="text-foreground/70 leading-relaxed group-hover:text-foreground/90 transition-colors duration-300">
                      {challenge.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="bunifu-section bg-background py-16 lg:py-24 relative overflow-hidden">
          <div className="pointer-events-none absolute inset-0 bunifu-grid-svg-black-lg opacity-[0.15]" />
          <div className="container mx-auto px-4 relative">
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.35 }}
              transition={{ duration: 0.45 }}
              className="text-center mb-10 lg:mb-14"
            >
              <p className="text-gradient bg-gradient-to-r from-[hsl(var(--rainbow-blue))] via-[hsl(var(--rainbow-indigo))] to-[hsl(var(--rainbow-violet))] bg-[length:200%_200%] animate-rainbow-shift bg-clip-text text-transparent font-medium mb-3">How we help</p>
              <h2 className="text-4xl md:text-6xl font-semibold tracking-tight mb-6">
                How Bunifu Capital{" "}
                <span className="text-gradient bg-gradient-to-r from-[hsl(var(--rainbow-blue))] via-[hsl(var(--rainbow-indigo))] to-[hsl(var(--rainbow-violet))] bg-[length:200%_200%] animate-rainbow-shift bg-clip-text text-transparent">reduces risk</span>
              </h2>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-x-12 gap-y-10 max-w-5xl mx-auto">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={benefit.title}
                  initial={{ opacity: 0, y: 14 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.25 }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  className="flex gap-5 group hover:bg-gradient-to-r hover:from-rainbow-blue/5 hover:to-transparent p-4 -m-4 rounded-lg transition-all duration-300"
                >
                  <span className={`mt-2 h-3 w-3 ${benefit.color} rounded-full shadow-lg group-hover:scale-150 group-hover:shadow-xl transition-all duration-300`} aria-hidden="true" />
                  <div>
                    <h3 className="text-xl md:text-2xl font-semibold mb-2 group-hover:text-gradient group-hover:bg-gradient-to-r group-hover:from-[hsl(var(--rainbow-blue))] group-hover:via-[hsl(var(--rainbow-indigo))] group-hover:to-[hsl(var(--rainbow-violet))] group-hover:bg-[length:200%_200%] group-hover:animate-rainbow-shift group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
                      {benefit.title}
                    </h3>
                    <p className="text-foreground/70 leading-relaxed group-hover:text-foreground/90 transition-colors duration-300">
                      {benefit.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Insights Section */}
        <section className="bunifu-section bg-background py-16 lg:py-24 relative overflow-hidden">
          <div className="pointer-events-none absolute inset-0 bunifu-grid-svg-black-lg opacity-[0.15]" />
          <div className="container mx-auto px-4 relative">
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.35 }}
              transition={{ duration: 0.45 }}
              className="max-w-3xl mx-auto"
            >
              <h2 className="text-4xl md:text-5xl font-semibold tracking-tight mb-8 text-center">
                Insights you receive{" "}
                <span className="text-gradient bg-gradient-to-r from-[hsl(var(--rainbow-blue))] via-[hsl(var(--rainbow-indigo))] to-[hsl(var(--rainbow-violet))] bg-[length:200%_200%] animate-rainbow-shift bg-clip-text text-transparent">from our platform</span>
              </h2>
              <div className="grid md:grid-cols-2 gap-4">
                {insights.map((insight, index) => (
                  <motion.div
                    key={insight}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.25 }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                    className="flex items-start gap-3 group"
                  >
                    <Check className="w-5 h-5 mt-0.5 text-rainbow-blue group-hover:text-rainbow-indigo transition-colors duration-300 flex-shrink-0" />
                    <p className="text-foreground/80 group-hover:text-foreground transition-colors duration-300">{insight}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bunifu-section bg-gradient-to-r from-[hsl(var(--rainbow-blue))] via-[hsl(var(--rainbow-indigo))] to-[hsl(var(--rainbow-violet))] bg-[length:200%_200%] animate-rainbow-shift text-white py-16 lg:py-24 relative overflow-hidden group">
          <div className="pointer-events-none absolute inset-0 transition-transform duration-700 ease-out group-hover:scale-110 group-hover:rotate-1">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,hsl(var(--rainbow-blue)/0.3),transparent_60%)]" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,hsl(var(--rainbow-indigo)/0.3),transparent_60%)]" />
          </div>
          <div className="container mx-auto px-4 relative">
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.35 }}
              transition={{ duration: 0.45 }}
              className="text-center"
            >
              <h2 className="text-5xl md:text-7xl font-semibold tracking-tight leading-[0.95] mb-10">
                Ready to expand into the{" "}
                <span className="text-white drop-shadow-[0_0_20px_rgba(255,255,255,0.5)]">creative economy?</span>
              </h2>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  size="lg"
                  className="rounded-full bg-white text-foreground hover:bg-white/90 border-2 border-white/20 hover:border-white/40 hover:shadow-xl hover:shadow-white/30 hover:scale-105 transition-all duration-300"
                  asChild
                >
                  <Link to="/pricing">Book a demo</Link>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="rounded-full border-white/30 text-white hover:bg-white/10 hover:border-white/50"
                  asChild
                >
                  <Link to="/#get-in-touch">Contact experts</Link>
                </Button>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default FinancialInstitutionsPage;
