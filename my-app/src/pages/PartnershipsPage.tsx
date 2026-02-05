import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Database, LayoutGrid, Megaphone, Sparkles, Handshake } from "lucide-react";
import { TiltCard } from "@/components/ui/tilt-card";
import { cn } from "@/lib/utils";

const partnershipTypes = [
  {
    tone: "green" as const,
    icon: Database,
    title: "Data partnerships",
    description: "Collaborate on data sharing, insights, and analytics. Help us build better models while accessing aggregated, anonymized creative economy data.",
  },
  {
    tone: "blue" as const,
    icon: LayoutGrid,
    title: "Platform partnerships",
    description: "Integrate Bunifu Capital into your platform or service. Offer financial infrastructure to your creative users and expand your value proposition.",
  },
  {
    tone: "green" as const,
    icon: Megaphone,
    title: "Distribution partnerships",
    description: "Help us reach creatives and financial institutions. Partner on marketing, community building, and ecosystem growth.",
  },
  {
    tone: "indigo" as const,
    icon: Sparkles,
    title: "Ecosystem partnerships",
    description: "Build together. We're creating infrastructure for the creative economy - join us in shaping how creatives access capital.",
  },
];

const benefits = [
  "Access to creative economy insights and data",
  "Early integration opportunities",
  "Co-marketing and community building",
  "Shared vision for creative financial infrastructure",
  "Long-term ecosystem growth",
  "Strategic collaboration on product development",
];

const PartnershipsPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="bunifu-page">
        {/* Hero Section */}
        <section className="relative overflow-hidden pt-28 pb-16 lg:pt-36 lg:pb-24 bg-background border-b border-border">
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_12%_86%,hsl(var(--rainbow-green)/0.25),transparent_58%)]" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_92%_18%,hsl(var(--rainbow-blue)/0.22),transparent_58%)]" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,hsl(var(--rainbow-indigo)/0.15),transparent_70%)]" />
            <div className="absolute -left-40 -bottom-44 h-[640px] w-[720px] bg-[radial-gradient(closest-side,hsl(var(--rainbow-green)/0.35),hsl(var(--rainbow-blue)/0.25),transparent_72%)]" />
            <div className="absolute right-0 top-0 h-[540px] w-[620px] bg-[radial-gradient(closest-side,hsl(var(--rainbow-blue)/0.28),hsl(var(--rainbow-indigo)/0.18),transparent_72%)] blur-3xl translate-x-40 -translate-y-28" />
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
                Build the{" "}
                <span className="text-gradient bg-gradient-to-r from-[hsl(var(--rainbow-green))] via-[hsl(var(--rainbow-blue))] to-[hsl(var(--rainbow-indigo))] bg-[length:200%_200%] animate-rainbow-shift bg-clip-text text-transparent">
                  creative economy
                </span>
                <br />
                together
              </h1>
              <p className="text-lg md:text-xl text-foreground/70 mb-8 max-w-2xl mx-auto">
                Bunifu Capital is building infrastructure for the creative economy.
                We're looking for partners who share our vision and want to collaborate on ecosystem growth.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  variant="hero"
                  size="lg"
                  className="bg-rainbow-green text-white hover:bg-rainbow-green/90 hover:shadow-xl hover:shadow-rainbow-green/25"
                  asChild
                >
                  <Link to="/waitlist">Get in touch</Link>
                </Button>
                <Button
                  variant="heroOutline"
                  size="lg"
                  className="group border-rainbow-blue/35 hover:bg-rainbow-blue hover:border-rainbow-blue"
                  asChild
                >
                  <Link to="/resources">
                    Learn more
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Partnership Types Section */}
        <section className="bunifu-section bg-background py-16 lg:py-24">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.35 }}
              transition={{ duration: 0.45 }}
              className="text-center mb-10 lg:mb-14"
            >
              <p className="text-gradient bg-gradient-to-r from-[hsl(var(--rainbow-green))] via-[hsl(var(--rainbow-blue))] to-[hsl(var(--rainbow-indigo))] bg-[length:200%_200%] animate-rainbow-shift bg-clip-text text-transparent font-medium mb-3">
                Partnership opportunities
              </p>
              <h2 className="text-4xl md:text-6xl font-semibold tracking-tight mb-6">
                How we can{" "}
                <span className="text-gradient bg-gradient-to-r from-[hsl(var(--rainbow-green))] via-[hsl(var(--rainbow-blue))] to-[hsl(var(--rainbow-indigo))] bg-[length:200%_200%] animate-rainbow-shift bg-clip-text text-transparent">
                  collaborate
                </span>
              </h2>
              <p className="text-lg text-foreground/70 max-w-3xl mx-auto">
                We're building infrastructure for the creative economy. Whether you're a platform, data provider,
                financial institution, or ecosystem player, there are opportunities to partner.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
              {partnershipTypes.map((type) => {
                const Icon = type.icon;
                return (
                  <TiltCard key={type.title} tone={type.tone}>
                    <div className="flex items-start gap-3">
                      <Icon
                        className={cn(
                          "w-5 h-5 shrink-0",
                          type.tone === "green" ? "text-rainbow-green" : type.tone === "blue" ? "text-rainbow-blue" : "text-rainbow-indigo",
                        )}
                      />
                      <div>
                        <h3 className="text-xl font-semibold mb-2">{type.title}</h3>
                        <p className="text-foreground/70 text-sm leading-relaxed">{type.description}</p>
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
              <p className="text-gradient bg-gradient-to-r from-[hsl(var(--rainbow-green))] via-[hsl(var(--rainbow-blue))] to-[hsl(var(--rainbow-indigo))] bg-[length:200%_200%] animate-rainbow-shift bg-clip-text text-transparent font-medium mb-3">
                Why partner
              </p>
              <h2 className="text-4xl md:text-6xl font-semibold tracking-tight mb-6">
                Partnership{" "}
                <span className="text-gradient bg-gradient-to-r from-[hsl(var(--rainbow-green))] via-[hsl(var(--rainbow-blue))] to-[hsl(var(--rainbow-indigo))] bg-[length:200%_200%] animate-rainbow-shift bg-clip-text text-transparent">
                  benefits
                </span>
              </h2>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {benefits.map((benefit, idx) => {
                const tones: ("green" | "blue" | "indigo")[] = ["green", "blue", "indigo"];
                const tone = tones[idx % 3];
                return (
                  <TiltCard key={benefit} tone={tone}>
                    <div className="flex items-start gap-3">
                      <Handshake
                        className={cn(
                          "w-5 h-5 shrink-0",
                          tone === "green" ? "text-rainbow-green" : tone === "blue" ? "text-rainbow-blue" : "text-rainbow-indigo",
                        )}
                      />
                      <p className="text-foreground/80">{benefit}</p>
                    </div>
                  </TiltCard>
                );
              })}
            </div>
          </div>
        </section>

        {/* Vision Section */}
        <section className="bunifu-section bg-background py-16 lg:py-24">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.35 }}
              transition={{ duration: 0.45 }}
              className="max-w-4xl mx-auto text-center mb-10 lg:mb-14"
            >
              <p className="text-gradient bg-gradient-to-r from-[hsl(var(--rainbow-green))] via-[hsl(var(--rainbow-blue))] to-[hsl(var(--rainbow-indigo))] bg-[length:200%_200%] animate-rainbow-shift bg-clip-text text-transparent font-medium mb-3">
                Long-term vision
              </p>
              <h2 className="text-4xl md:text-6xl font-semibold tracking-tight mb-6">
                Long-term{" "}
                <span className="text-gradient bg-gradient-to-r from-[hsl(var(--rainbow-green))] via-[hsl(var(--rainbow-blue))] to-[hsl(var(--rainbow-indigo))] bg-[length:200%_200%] animate-rainbow-shift bg-clip-text text-transparent">
                  ecosystem vision
                </span>
              </h2>
              <p className="text-lg text-foreground/70 leading-relaxed mb-6">
                We're not just building a product - we're building infrastructure for the creative economy.
                This means creating standards, building trust, and growing an ecosystem where creatives can access capital
                and financial institutions can serve them confidently. Partnerships are central to this vision.
              </p>
              <p className="text-lg text-foreground/70 leading-relaxed">
                If you share this vision and want to collaborate, let's talk. We're looking for partners who want to
                shape the future of creative finance together.
              </p>
            </motion.div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                variant="cta"
                size="lg"
                className="bg-rainbow-green text-white hover:bg-rainbow-green/90 hover:shadow-lg hover:shadow-rainbow-green/25"
                asChild
              >
                <Link to="/waitlist">
                  Get in touch
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </Button>
              <Button
                variant="ctaOutline"
                size="lg"
                className="border-rainbow-indigo/35 hover:bg-rainbow-indigo hover:border-rainbow-indigo"
                asChild
              >
                <Link to="/resources">Explore Resources</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* CTA Section - same color as hero with small squares */}
        <section className="bunifu-section relative overflow-hidden py-16 lg:py-24 bg-background border-t border-border">
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_12%_86%,hsl(var(--rainbow-green)/0.25),transparent_58%)]" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_92%_18%,hsl(var(--rainbow-blue)/0.22),transparent_58%)]" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,hsl(var(--rainbow-indigo)/0.15),transparent_70%)]" />
            <div className="absolute -left-40 -bottom-44 h-[640px] w-[720px] bg-[radial-gradient(closest-side,hsl(var(--rainbow-green)/0.35),hsl(var(--rainbow-blue)/0.25),transparent_72%)]" />
            <div className="absolute right-0 top-0 h-[540px] w-[620px] bg-[radial-gradient(closest-side,hsl(var(--rainbow-blue)/0.28),hsl(var(--rainbow-indigo)/0.18),transparent_72%)] blur-3xl translate-x-40 -translate-y-28" />
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
                Start a{" "}
                <span className="text-gradient bg-gradient-to-r from-[hsl(var(--rainbow-green))] via-[hsl(var(--rainbow-blue))] to-[hsl(var(--rainbow-indigo))] bg-[length:200%_200%] animate-rainbow-shift bg-clip-text text-transparent">
                  conversation
                </span>
              </h2>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  variant="hero"
                  size="lg"
                  className="bg-rainbow-green text-white hover:bg-rainbow-green/90 hover:shadow-xl hover:shadow-rainbow-green/25"
                  asChild
                >
                  <Link to="/waitlist">Get in touch</Link>
                </Button>
                <Button
                  variant="heroOutline"
                  size="lg"
                  className="group border-rainbow-blue/35 hover:bg-rainbow-blue hover:border-rainbow-blue"
                  asChild
                >
                  <Link to="/resources">
                    Learn more
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

export default PartnershipsPage;
