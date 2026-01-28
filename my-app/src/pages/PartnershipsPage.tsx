import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Check } from "lucide-react";

const partnershipTypes = [
  {
    color: "bg-rainbow-green",
    title: "Data partnerships",
    description: "Collaborate on data sharing, insights, and analytics. Help us build better models while accessing aggregated, anonymized creative economy data.",
  },
  {
    color: "bg-rainbow-blue",
    title: "Platform partnerships",
    description: "Integrate Bunifu Capital into your platform or service. Offer financial infrastructure to your creative users and expand your value proposition.",
  },
  {
    color: "bg-rainbow-green",
    title: "Distribution partnerships",
    description: "Help us reach creatives and financial institutions. Partner on marketing, community building, and ecosystem growth.",
  },
  {
    color: "bg-rainbow-blue",
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
      <main className="netwrix-page">
        {/* Hero Section */}
        <section className="relative overflow-hidden pt-28 pb-16 lg:pt-36 lg:pb-24 bg-background border-b border-border">
          {/* Green/Blue gradient theme */}
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_12%_86%,hsl(var(--rainbow-green)/0.25),transparent_58%)]" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_92%_18%,hsl(var(--rainbow-blue)/0.22),transparent_58%)]" />
            <div className="absolute -left-40 -bottom-44 h-[640px] w-[720px] bg-[radial-gradient(closest-side,hsl(var(--rainbow-green)/0.35),hsl(var(--rainbow-blue)/0.25),transparent_72%)]" />
            <div className="absolute right-0 top-0 h-[540px] w-[620px] bg-[radial-gradient(closest-side,hsl(var(--rainbow-blue)/0.28),hsl(var(--rainbow-green)/0.18),transparent_72%)] blur-3xl translate-x-40 -translate-y-28" />
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
                Build the{" "}
                <span className="text-gradient bg-gradient-to-r from-[hsl(var(--rainbow-green))] via-[hsl(var(--rainbow-blue))] to-[hsl(var(--rainbow-indigo))] bg-[length:200%_200%] animate-rainbow-shift bg-clip-text text-transparent">creative economy</span>
                <br />
                together
              </h1>
              <p className="text-lg md:text-xl text-foreground/70 mb-8 max-w-2xl mx-auto">
                Bunifu Capital is building infrastructure for the creative economy. 
                We're looking for partners who share our vision and want to collaborate on ecosystem growth.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="hero" size="lg" asChild>
                  <Link to="/#get-in-touch">Get in touch</Link>
                </Button>
                <Button variant="heroOutline" size="lg" className="group" asChild>
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
              <p className="text-gradient bg-gradient-to-r from-[hsl(var(--rainbow-green))] via-[hsl(var(--rainbow-blue))] to-[hsl(var(--rainbow-indigo))] bg-[length:200%_200%] animate-rainbow-shift bg-clip-text text-transparent font-medium mb-3">Partnership opportunities</p>
              <h2 className="text-4xl md:text-6xl font-semibold tracking-tight mb-6">
                How we can{" "}
                <span className="text-gradient bg-gradient-to-r from-[hsl(var(--rainbow-green))] via-[hsl(var(--rainbow-blue))] to-[hsl(var(--rainbow-indigo))] bg-[length:200%_200%] animate-rainbow-shift bg-clip-text text-transparent">collaborate</span>
              </h2>
              <p className="text-lg text-foreground/70 max-w-3xl mx-auto">
                We're building infrastructure for the creative economy. Whether you're a platform, data provider, 
                financial institution, or ecosystem player, there are opportunities to partner.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-x-12 gap-y-10 max-w-5xl mx-auto">
              {partnershipTypes.map((type, index) => (
                <motion.div
                  key={type.title}
                  initial={{ opacity: 0, y: 14 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.25 }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  className="flex gap-5 group hover:bg-gradient-to-r hover:from-rainbow-green/5 hover:to-transparent p-4 -m-4 rounded-lg transition-all duration-300"
                >
                  <span className={`mt-2 h-3 w-3 ${type.color} rounded-full shadow-lg group-hover:scale-150 group-hover:shadow-xl transition-all duration-300`} aria-hidden="true" />
                  <div>
                    <h3 className="text-xl md:text-2xl font-semibold mb-2 group-hover:text-gradient group-hover:bg-gradient-to-r group-hover:from-[hsl(var(--rainbow-green))] group-hover:via-[hsl(var(--rainbow-blue))] group-hover:to-[hsl(var(--rainbow-indigo))] group-hover:bg-[length:200%_200%] group-hover:animate-rainbow-shift group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
                      {type.title}
                    </h3>
                    <p className="text-foreground/70 leading-relaxed group-hover:text-foreground/90 transition-colors duration-300">
                      {type.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="netwrix-section bg-background py-16 lg:py-24 relative overflow-hidden">
          <div className="pointer-events-none absolute inset-0 netwrix-grid-svg-black-lg opacity-[0.15]" />
          <div className="container mx-auto px-4 relative">
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.35 }}
              transition={{ duration: 0.45 }}
              className="max-w-3xl mx-auto"
            >
              <h2 className="text-4xl md:text-5xl font-semibold tracking-tight mb-8 text-center">
                Partnership{" "}
                <span className="text-gradient bg-gradient-to-r from-[hsl(var(--rainbow-green))] via-[hsl(var(--rainbow-blue))] to-[hsl(var(--rainbow-indigo))] bg-[length:200%_200%] animate-rainbow-shift bg-clip-text text-transparent">benefits</span>
              </h2>
              <div className="grid md:grid-cols-2 gap-4">
                {benefits.map((benefit, index) => (
                  <motion.div
                    key={benefit}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.25 }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                    className="flex items-start gap-3 group"
                  >
                    <Check className="w-5 h-5 mt-0.5 text-rainbow-green group-hover:text-rainbow-blue transition-colors duration-300 flex-shrink-0" />
                    <p className="text-foreground/80 group-hover:text-foreground transition-colors duration-300">{benefit}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Vision Section */}
        <section className="netwrix-section bg-background py-16 lg:py-24 relative overflow-hidden">
          <div className="pointer-events-none absolute inset-0 netwrix-grid-svg-black-lg opacity-[0.15]" />
          <div className="container mx-auto px-4 relative">
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.35 }}
              transition={{ duration: 0.45 }}
              className="max-w-4xl mx-auto text-center"
            >
              <h2 className="text-4xl md:text-5xl font-semibold tracking-tight mb-6">
                Long-term{" "}
                <span className="text-gradient bg-gradient-to-r from-[hsl(var(--rainbow-green))] via-[hsl(var(--rainbow-blue))] to-[hsl(var(--rainbow-indigo))] bg-[length:200%_200%] animate-rainbow-shift bg-clip-text text-transparent">ecosystem vision</span>
              </h2>
              <p className="text-lg text-foreground/70 leading-relaxed mb-8">
                We're not just building a product - we're building infrastructure for the creative economy. 
                This means creating standards, building trust, and growing an ecosystem where creatives can access capital 
                and financial institutions can serve them confidently. Partnerships are central to this vision.
              </p>
              <p className="text-lg text-foreground/70 leading-relaxed">
                If you share this vision and want to collaborate, let's talk. We're looking for partners who want to 
                shape the future of creative finance together.
              </p>
            </motion.div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="netwrix-section bg-gradient-to-r from-[hsl(var(--rainbow-green))] via-[hsl(var(--rainbow-blue))] to-[hsl(var(--rainbow-indigo))] bg-[length:200%_200%] animate-rainbow-shift text-white py-16 lg:py-24 relative overflow-hidden group">
          <div className="pointer-events-none absolute inset-0 transition-transform duration-700 ease-out group-hover:scale-110 group-hover:rotate-1">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,hsl(var(--rainbow-green)/0.3),transparent_60%)]" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,hsl(var(--rainbow-blue)/0.3),transparent_60%)]" />
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
                Start a{" "}
                <span className="text-white drop-shadow-[0_0_20px_rgba(255,255,255,0.5)]">conversation</span>
              </h2>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  size="lg"
                  className="rounded-full bg-white text-foreground hover:bg-white/90 border-2 border-white/20 hover:border-white/40 hover:shadow-xl hover:shadow-white/30 hover:scale-105 transition-all duration-300"
                  asChild
                >
                  <Link to="/#get-in-touch">Get in touch</Link>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="rounded-full border-white/30 text-white hover:bg-white/10 hover:border-white/50"
                  asChild
                >
                  <Link to="/resources">Learn more</Link>
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
