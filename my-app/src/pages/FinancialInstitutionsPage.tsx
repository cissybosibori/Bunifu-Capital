import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Building2, Shield, Scale, TrendingUp, Workflow, Layers, FileCheck } from "lucide-react";
import { TiltCard } from "@/components/ui/tilt-card";
import { cn } from "@/lib/utils";

const challenges = [
  {
    tone: "blue" as const,
    icon: Scale,
    title: "Creative income is hard to assess",
    description: "Traditional models expect steady paychecks, not variable, multi-source income from platforms like TikTok, Spotify, and Shopify.",
  },
  {
    tone: "indigo" as const,
    icon: Building2,
    title: "Existing models fail for creatives",
    description: "Standard credit scoring and risk assessment tools don't account for how creatives actually earn and grow their income.",
  },
  {
    tone: "blue" as const,
    icon: FileCheck,
    title: "Manual assessment is costly",
    description: "Reviewing creative income manually is time-consuming, inconsistent, and doesn't scale. You need standardized, automated solutions.",
  },
];

const benefits = [
  {
    tone: "blue" as const,
    icon: Shield,
    title: "Reduce risk and effort",
    description: "Bunifu Capital standardizes creative income into structured, analyzable data. AI-powered risk scoring and financial signals help you make informed decisions faster.",
  },
  {
    tone: "indigo" as const,
    icon: TrendingUp,
    title: "Expand your market safely",
    description: "Access the growing creative economy with confidence. Our platform helps you understand and assess creative income patterns you couldn't evaluate before.",
  },
  {
    tone: "violet" as const,
    icon: Workflow,
    title: "Fit into existing workflows",
    description: "Our outputs integrate with your current systems. Get standardized reports, risk scores, and financial analytics that work with your processes.",
  },
  {
    tone: "indigo" as const,
    icon: Layers,
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
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_12%_86%,hsl(var(--rainbow-blue)/0.25),transparent_58%)]" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_92%_18%,hsl(var(--rainbow-indigo)/0.22),transparent_58%)]" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,hsl(var(--rainbow-violet)/0.15),transparent_70%)]" />
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
                <span className="text-gradient bg-gradient-to-r from-[hsl(var(--rainbow-blue))] via-[hsl(var(--rainbow-indigo))] to-[hsl(var(--rainbow-violet))] bg-[length:200%_200%] animate-rainbow-shift bg-clip-text text-transparent">
                  financial institutions
                </span>
              </h1>
              <p className="text-lg md:text-xl text-foreground/70 mb-8 max-w-2xl mx-auto">
                Bunifu Capital helps banks, lenders, and financial institutions understand creative income.
                We reduce risk, reduce effort, and help you expand into the creative economy safely.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  variant="hero"
                  size="lg"
                  className="bg-rainbow-blue text-white hover:bg-rainbow-blue/90 hover:shadow-xl hover:shadow-rainbow-blue/25"
                  asChild
                >
                  <Link to="/pricing">Book a demo</Link>
                </Button>
                <Button
                  variant="heroOutline"
                  size="lg"
                  className="group border-rainbow-indigo/35 hover:bg-rainbow-indigo hover:border-rainbow-indigo"
                  asChild
                >
                  <Link to="/waitlist">
                    Get involved
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Challenges Section */}
        <section className="bunifu-section bg-background py-16 lg:py-24">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.35 }}
              transition={{ duration: 0.45 }}
              className="text-center mb-10 lg:mb-14"
            >
              <p className="text-gradient bg-gradient-to-r from-[hsl(var(--rainbow-blue))] via-[hsl(var(--rainbow-indigo))] to-[hsl(var(--rainbow-violet))] bg-[length:200%_200%] animate-rainbow-shift bg-clip-text text-transparent font-medium mb-3">
                The challenge
              </p>
              <h2 className="text-4xl md:text-6xl font-semibold tracking-tight mb-6">
                Why institutions struggle with{" "}
                <span className="text-gradient bg-gradient-to-r from-[hsl(var(--rainbow-blue))] via-[hsl(var(--rainbow-indigo))] to-[hsl(var(--rainbow-violet))] bg-[length:200%_200%] animate-rainbow-shift bg-clip-text text-transparent">
                  creative income
                </span>
              </h2>
              <p className="text-lg text-foreground/70 max-w-3xl mx-auto">
                Creative income is real, but it doesn't fit traditional assessment models.
                You need new tools to understand and evaluate this growing segment of the economy.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {challenges.map((c) => {
                const Icon = c.icon;
                return (
                  <TiltCard key={c.title} tone={c.tone}>
                    <div className="flex items-start gap-3">
                      <Icon
                        className={cn(
                          "w-5 h-5",
                          c.tone === "blue" ? "text-rainbow-blue" : c.tone === "indigo" ? "text-rainbow-indigo" : "text-rainbow-violet",
                        )}
                      />
                      <div>
                        <h3 className="text-xl font-semibold mb-2">{c.title}</h3>
                        <p className="text-foreground/70 text-sm leading-relaxed">{c.description}</p>
                      </div>
                    </div>
                  </TiltCard>
                );
              })}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="bunifu-section bg-background py-16 lg:py-24">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.35 }}
              transition={{ duration: 0.45 }}
              className="text-center mb-10 lg:mb-14"
            >
              <p className="text-gradient bg-gradient-to-r from-[hsl(var(--rainbow-blue))] via-[hsl(var(--rainbow-indigo))] to-[hsl(var(--rainbow-violet))] bg-[length:200%_200%] animate-rainbow-shift bg-clip-text text-transparent font-medium mb-3">
                How we help
              </p>
              <h2 className="text-4xl md:text-6xl font-semibold tracking-tight mb-6">
                How Bunifu Capital{" "}
                <span className="text-gradient bg-gradient-to-r from-[hsl(var(--rainbow-blue))] via-[hsl(var(--rainbow-indigo))] to-[hsl(var(--rainbow-violet))] bg-[length:200%_200%] animate-rainbow-shift bg-clip-text text-transparent">
                  reduces risk
                </span>
              </h2>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
              {benefits.map((b) => {
                const Icon = b.icon;
                return (
                  <TiltCard key={b.title} tone={b.tone}>
                    <div className="flex items-start gap-3">
                      <Icon
                        className={cn(
                          "w-5 h-5",
                          b.tone === "blue" ? "text-rainbow-blue" : b.tone === "indigo" ? "text-rainbow-indigo" : "text-rainbow-violet",
                        )}
                      />
                      <div>
                        <h3 className="text-lg font-semibold mb-2">{b.title}</h3>
                        <p className="text-foreground/70 text-sm leading-relaxed">{b.description}</p>
                      </div>
                    </div>
                  </TiltCard>
                );
              })}
            </div>
          </div>
        </section>

        {/* Insights Section */}
        <section className="bunifu-section bg-background py-16 lg:py-24">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.35 }}
              transition={{ duration: 0.45 }}
              className="text-center mb-10 lg:mb-14"
            >
              <p className="text-gradient bg-gradient-to-r from-[hsl(var(--rainbow-blue))] via-[hsl(var(--rainbow-indigo))] to-[hsl(var(--rainbow-violet))] bg-[length:200%_200%] animate-rainbow-shift bg-clip-text text-transparent font-medium mb-3">
                Platform insights
              </p>
              <h2 className="text-4xl md:text-6xl font-semibold tracking-tight mb-6">
                What you receive{" "}
                <span className="text-gradient bg-gradient-to-r from-[hsl(var(--rainbow-blue))] via-[hsl(var(--rainbow-indigo))] to-[hsl(var(--rainbow-violet))] bg-[length:200%_200%] animate-rainbow-shift bg-clip-text text-transparent">
                  from our platform
                </span>
              </h2>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {insights.map((insight, idx) => {
                const tones: ("blue" | "indigo" | "violet")[] = ["blue", "indigo", "violet"];
                const tone = tones[idx % 3];
                return (
                  <TiltCard key={insight} tone={tone}>
                    <div className="flex items-start gap-3">
                      <FileCheck
                        className={cn(
                          "w-5 h-5 shrink-0",
                          tone === "blue" ? "text-rainbow-blue" : tone === "indigo" ? "text-rainbow-indigo" : "text-rainbow-violet",
                        )}
                      />
                      <p className="text-foreground/80">{insight}</p>
                    </div>
                  </TiltCard>
                );
              })}
            </div>
          </div>
        </section>

        {/* CTA Section - same color as hero with small squares */}
        <section className="bunifu-section relative overflow-hidden py-16 lg:py-24 bg-background border-t border-border">
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_12%_86%,hsl(var(--rainbow-blue)/0.25),transparent_58%)]" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_92%_18%,hsl(var(--rainbow-indigo)/0.22),transparent_58%)]" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,hsl(var(--rainbow-violet)/0.15),transparent_70%)]" />
            <div className="absolute -left-40 -bottom-44 h-[640px] w-[720px] bg-[radial-gradient(closest-side,hsl(var(--rainbow-blue)/0.35),hsl(var(--rainbow-indigo)/0.25),transparent_72%)]" />
            <div className="absolute right-0 top-0 h-[540px] w-[620px] bg-[radial-gradient(closest-side,hsl(var(--rainbow-indigo)/0.28),hsl(var(--rainbow-blue)/0.18),transparent_72%)] blur-3xl translate-x-40 -translate-y-28" />
            <div className="absolute inset-0 bunifu-grid-svg-white-sm opacity-[0.75]" />
          </div>
          <div className="container mx-auto px-4 relative">
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.35 }}
              transition={{ duration: 0.45 }}
              className="text-center"
            >
              <h2 className="text-5xl md:text-7xl font-semibold tracking-tight leading-[0.95] mb-10 text-foreground">
                Ready to expand into the{" "}
                <span className="text-gradient bg-gradient-to-r from-[hsl(var(--rainbow-blue))] via-[hsl(var(--rainbow-indigo))] to-[hsl(var(--rainbow-violet))] bg-[length:200%_200%] animate-rainbow-shift bg-clip-text text-transparent">
                  creative economy?
                </span>
              </h2>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  variant="hero"
                  size="lg"
                  className="bg-rainbow-blue text-white hover:bg-rainbow-blue/90 hover:shadow-xl hover:shadow-rainbow-blue/25"
                  asChild
                >
                  <Link to="/pricing">Book a demo</Link>
                </Button>
                <Button
                  variant="heroOutline"
                  size="lg"
                  className="group border-rainbow-indigo/35 hover:bg-rainbow-indigo hover:border-rainbow-indigo"
                  asChild
                >
                  <Link to="/waitlist">
                    Get involved
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
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
