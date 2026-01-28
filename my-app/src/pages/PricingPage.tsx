import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Check, ArrowRight } from "lucide-react";

const pricingTiers = [
  {
    name: "Early Access",
    description: "For creatives joining early",
    price: "Free",
    period: "during beta",
    features: [
      "Early access to the platform",
      "All core features",
      "Income source connections",
      "Financial analytics and insights",
      "Credit scores and signals",
      "Market comparisons",
      "Community support",
    ],
    cta: "Join waitlist",
    ctaLink: "/waitlist",
    color: "rainbow-indigo",
  },
  {
    name: "Paid Demo",
    description: "For financial institutions",
    price: "Custom",
    period: "one-time",
    features: [
      "Full platform demo",
      "Sample creative income analysis",
      "Risk scoring demonstration",
      "Integration overview",
      "Q&A session with experts",
      "Custom use case discussion",
      "Follow-up consultation",
    ],
    cta: "Book a demo",
    ctaLink: "/#get-in-touch",
    color: "rainbow-violet",
  },
  {
    name: "Institutional Access",
    description: "For banks and lenders",
    price: "Custom",
    period: "per agreement",
    features: [
      "API access",
      "Bulk analysis capabilities",
      "Custom risk models",
      "Dedicated support",
      "Integration assistance",
      "Training and documentation",
      "SLA guarantees",
    ],
    cta: "Contact us",
    ctaLink: "/#get-in-touch",
    color: "rainbow-indigo",
  },
];

const PricingPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="netwrix-page">
        {/* Hero Section */}
        <section className="relative overflow-hidden pt-28 pb-16 lg:pt-36 lg:pb-24 bg-background border-b border-border">
          {/* Indigo/Violet gradient theme */}
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_12%_86%,hsl(var(--rainbow-indigo)/0.25),transparent_58%)]" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_92%_18%,hsl(var(--rainbow-violet)/0.22),transparent_58%)]" />
            <div className="absolute -left-40 -bottom-44 h-[640px] w-[720px] bg-[radial-gradient(closest-side,hsl(var(--rainbow-indigo)/0.35),hsl(var(--rainbow-violet)/0.25),transparent_72%)]" />
            <div className="absolute right-0 top-0 h-[540px] w-[620px] bg-[radial-gradient(closest-side,hsl(var(--rainbow-violet)/0.28),hsl(var(--rainbow-indigo)/0.18),transparent_72%)] blur-3xl translate-x-40 -translate-y-28" />
            <div className="absolute inset-0 netwrix-grid-svg-white opacity-[0.75]" />
          </div>

          <div className="container mx-auto px-4 relative">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center max-w-4xl mx-auto"
            >
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-semibold tracking-tight leading-[0.96] mb-6">
                Pricing and{" "}
                <span className="text-gradient bg-gradient-to-r from-[hsl(var(--rainbow-indigo))] via-[hsl(var(--rainbow-violet))] to-[hsl(var(--rainbow-red))] bg-[length:200%_200%] animate-rainbow-shift bg-clip-text text-transparent">access</span>
              </h1>
              <p className="text-lg md:text-xl text-foreground/70 mb-8 max-w-2xl mx-auto">
                We're building infrastructure for the creative economy. Early access is free for creatives. 
                Financial institutions can book paid demos. Custom pricing available for institutional access.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Pricing Tiers Section */}
        <section className="netwrix-section bg-background py-16 lg:py-24 relative overflow-hidden">
          <div className="pointer-events-none absolute inset-0 netwrix-grid-svg-black-lg opacity-[0.15]" />
          <div className="container mx-auto px-4 relative">
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.35 }}
              transition={{ duration: 0.45 }}
              className="text-center mb-10 lg:mb-14"
            >
              <p className="text-gradient bg-gradient-to-r from-[hsl(var(--rainbow-indigo))] via-[hsl(var(--rainbow-violet))] to-[hsl(var(--rainbow-red))] bg-[length:200%_200%] animate-rainbow-shift bg-clip-text text-transparent font-medium mb-3">Pricing</p>
              <h2 className="text-4xl md:text-6xl font-semibold tracking-tight mb-6">
                Choose your{" "}
                <span className="text-gradient bg-gradient-to-r from-[hsl(var(--rainbow-indigo))] via-[hsl(var(--rainbow-violet))] to-[hsl(var(--rainbow-red))] bg-[length:200%_200%] animate-rainbow-shift bg-clip-text text-transparent">access level</span>
              </h2>
              <p className="text-lg text-foreground/70 max-w-3xl mx-auto">
                Different access models for different needs. We're setting expectations early and showing seriousness about building infrastructure.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {pricingTiers.map((tier, index) => (
                <motion.div
                  key={tier.name}
                  initial={{ opacity: 0, y: 14 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.25 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="group border-2 border-border rounded-lg p-8 hover:border-rainbow-gradient hover:bg-gradient-to-br hover:from-rainbow-indigo/5 hover:via-rainbow-violet/5 hover:to-rainbow-red/5 transition-all duration-300"
                >
                  <div className="mb-6">
                    <h3 className="text-2xl font-semibold mb-2 group-hover:text-gradient group-hover:bg-gradient-to-r group-hover:from-[hsl(var(--rainbow-indigo))] group-hover:via-[hsl(var(--rainbow-violet))] group-hover:to-[hsl(var(--rainbow-red))] group-hover:bg-[length:200%_200%] group-hover:animate-rainbow-shift group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
                      {tier.name}
                    </h3>
                    <p className="text-sm text-foreground/60 mb-4">{tier.description}</p>
                    <div className="flex items-baseline gap-2">
                      <span 
                        className="text-4xl font-semibold"
                        style={{
                          color: `hsl(var(--rainbow-${tier.color}))`,
                        }}
                      >
                        {tier.price}
                      </span>
                      {tier.period && (
                        <span className="text-sm text-foreground/60">/{tier.period}</span>
                      )}
                    </div>
                  </div>

                  <ul className="space-y-4 mb-8">
                    {tier.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start gap-3">
                        <Check 
                          className="w-5 h-5 mt-0.5 flex-shrink-0 transition-colors duration-300"
                          style={{
                            color: `hsl(var(--rainbow-${tier.color}))`,
                          }}
                        />
                        <span className="text-sm text-foreground/80 group-hover:text-foreground transition-colors duration-300">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Button
                    variant="cta"
                    size="lg"
                    className="w-full group-hover:bg-gradient-to-r group-hover:from-[hsl(var(--rainbow-indigo))] group-hover:via-[hsl(var(--rainbow-violet))] group-hover:to-[hsl(var(--rainbow-red))] transition-all duration-300"
                    asChild
                  >
                    <Link to={tier.ctaLink}>
                      {tier.cta}
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                  </Button>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Logic Section */}
        <section className="netwrix-section bg-background py-16 lg:py-24 relative overflow-hidden">
          <div className="pointer-events-none absolute inset-0 netwrix-grid-svg-black-lg opacity-[0.15]" />
          <div className="container mx-auto px-4 relative">
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.35 }}
              transition={{ duration: 0.45 }}
              className="max-w-4xl mx-auto"
            >
              <h2 className="text-4xl md:text-5xl font-semibold tracking-tight mb-8 text-center">
                Our pricing{" "}
                <span className="text-gradient bg-gradient-to-r from-[hsl(var(--rainbow-indigo))] via-[hsl(var(--rainbow-violet))] to-[hsl(var(--rainbow-red))] bg-[length:200%_200%] animate-rainbow-shift bg-clip-text text-transparent">philosophy</span>
              </h2>
              <div className="space-y-6 text-lg text-foreground/70 leading-relaxed">
                <p>
                  We're building infrastructure for the creative economy. This means different access models for different needs.
                </p>
                <p>
                  <strong className="text-foreground">For creatives:</strong> Early access is free during beta. 
                  We want to build with you and understand what you need. Once we launch, pricing will be transparent and accessible.
                </p>
                <p>
                  <strong className="text-foreground">For financial institutions:</strong> Paid demos help us understand your needs 
                  and show you how the platform works. Custom pricing for institutional access is based on volume, integration requirements, 
                  and support needs.
                </p>
                <p>
                  <strong className="text-foreground">For partners:</strong> Partnership models vary. Let's discuss how we can collaborate 
                  and what makes sense for both sides.
                </p>
                <p>
                  No hard selling. Clear positioning. We're setting expectations early and showing that we're serious about building 
                  infrastructure that works for everyone.
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="netwrix-section bg-gradient-to-r from-[hsl(var(--rainbow-indigo))] via-[hsl(var(--rainbow-violet))] to-[hsl(var(--rainbow-red))] bg-[length:200%_200%] animate-rainbow-shift text-white py-16 lg:py-24 relative overflow-hidden group">
          <div className="pointer-events-none absolute inset-0 transition-transform duration-700 ease-out group-hover:scale-110 group-hover:rotate-1">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,hsl(var(--rainbow-indigo)/0.3),transparent_60%)]" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,hsl(var(--rainbow-violet)/0.3),transparent_60%)]" />
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
                Ready to get{" "}
                <span className="text-white drop-shadow-[0_0_20px_rgba(255,255,255,0.5)]">started?</span>
              </h2>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  size="lg"
                  className="rounded-full bg-white text-foreground hover:bg-white/90 border-2 border-white/20 hover:border-white/40 hover:shadow-xl hover:shadow-white/30 hover:scale-105 transition-all duration-300"
                  asChild
                >
                  <Link to="/waitlist">Join the waitlist</Link>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="rounded-full border-white/30 text-white hover:bg-white/10 hover:border-white/50"
                  asChild
                >
                  <Link to="/#get-in-touch">Contact us</Link>
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

export default PricingPage;
