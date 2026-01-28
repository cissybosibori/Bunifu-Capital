import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, ExternalLink, Calendar } from "lucide-react";

const articles = [
  {
    title: "Understanding the Creative Economy",
    description: "An overview of how creatives earn, the scale of the creative economy, and why traditional financial systems struggle to serve this market.",
    category: "Education",
    date: "2024",
  },
  {
    title: "The Funding Gap in Creative Industries",
    description: "Exploring the disconnect between value created by creatives and capital they can access. Data, insights, and analysis.",
    category: "Research",
    date: "2024",
  },
  {
    title: "Why Creative Income Needs New Infrastructure",
    description: "A deep dive into why fragmented income streams require new financial infrastructure, not adapted traditional tools.",
    category: "Thought Leadership",
    date: "2024",
  },
];

const communitySessions = [
  {
    title: "Monthly Community Session: The Creative Economy Problem",
    description: "Join us for our monthly session where we explain the problem, share our vision, and invite feedback from the community.",
    date: "First Tuesday of each month",
    time: "6:00 PM EAT",
  },
  {
    title: "Community Session: How Creative Income Works",
    description: "Understanding how creatives earn, income patterns, and what makes creative income different from traditional employment.",
    date: "Third Thursday of each month",
    time: "6:00 PM EAT",
  },
];

const ResourcesPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="bunifu-page">
        {/* Hero Section */}
        <section className="relative overflow-hidden pt-28 pb-16 lg:pt-36 lg:pb-24 bg-background border-b border-border">
          {/* Yellow/Green gradient theme */}
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_12%_86%,hsl(var(--rainbow-yellow)/0.25),transparent_58%)]" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_92%_18%,hsl(var(--rainbow-green)/0.22),transparent_58%)]" />
            <div className="absolute -left-40 -bottom-44 h-[640px] w-[720px] bg-[radial-gradient(closest-side,hsl(var(--rainbow-yellow)/0.35),hsl(var(--rainbow-green)/0.25),transparent_72%)]" />
            <div className="absolute right-0 top-0 h-[540px] w-[620px] bg-[radial-gradient(closest-side,hsl(var(--rainbow-green)/0.28),hsl(var(--rainbow-yellow)/0.18),transparent_72%)] blur-3xl translate-x-40 -translate-y-28" />
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
                Resources and{" "}
                <span className="text-gradient bg-gradient-to-r from-[hsl(var(--rainbow-yellow))] via-[hsl(var(--rainbow-green))] to-[hsl(var(--rainbow-blue))] bg-[length:200%_200%] animate-rainbow-shift bg-clip-text text-transparent">community</span>
              </h1>
              <p className="text-lg md:text-xl text-foreground/70 mb-8 max-w-2xl mx-auto">
                Learn about the creative economy, understand the problem we're solving, and join our community sessions. 
                Public-facing knowledge, not product secrets.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Articles Section */}
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
              <p className="text-gradient bg-gradient-to-r from-[hsl(var(--rainbow-yellow))] via-[hsl(var(--rainbow-green))] to-[hsl(var(--rainbow-blue))] bg-[length:200%_200%] animate-rainbow-shift bg-clip-text text-transparent font-medium mb-3">Articles & Research</p>
              <h2 className="text-4xl md:text-6xl font-semibold tracking-tight mb-6">
                Understanding the{" "}
                <span className="text-gradient bg-gradient-to-r from-[hsl(var(--rainbow-yellow))] via-[hsl(var(--rainbow-green))] to-[hsl(var(--rainbow-blue))] bg-[length:200%_200%] animate-rainbow-shift bg-clip-text text-transparent">creative economy</span>
              </h2>
              <p className="text-lg text-foreground/70 max-w-3xl mx-auto">
                Educational content, research, and thought pieces about the creative economy, finance, and the problem we're solving.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {articles.map((article, index) => (
                <motion.div
                  key={article.title}
                  initial={{ opacity: 0, y: 14 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.25 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="group border-2 border-border rounded-lg p-6 hover:border-rainbow-gradient hover:bg-gradient-to-br hover:from-rainbow-yellow/5 hover:via-rainbow-green/5 hover:to-rainbow-blue/5 transition-all duration-300"
                >
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-xs font-medium px-2 py-1 rounded bg-rainbow-yellow/10 text-rainbow-yellow group-hover:bg-rainbow-green/20 group-hover:text-rainbow-green transition-colors duration-300">
                      {article.category}
                    </span>
                    <span className="text-xs text-foreground/50">{article.date}</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-3 group-hover:text-gradient group-hover:bg-gradient-to-r group-hover:from-[hsl(var(--rainbow-yellow))] group-hover:via-[hsl(var(--rainbow-green))] group-hover:to-[hsl(var(--rainbow-blue))] group-hover:bg-[length:200%_200%] group-hover:animate-rainbow-shift group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
                    {article.title}
                  </h3>
                  <p className="text-foreground/70 text-sm leading-relaxed mb-4 group-hover:text-foreground/90 transition-colors duration-300">
                    {article.description}
                  </p>
                  <button className="text-sm font-medium text-rainbow-yellow group-hover:text-rainbow-green flex items-center gap-1 transition-colors duration-300">
                    Read more
                    <ExternalLink className="w-4 h-4" />
                  </button>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Community Sessions Section */}
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
              <p className="text-gradient bg-gradient-to-r from-[hsl(var(--rainbow-yellow))] via-[hsl(var(--rainbow-green))] to-[hsl(var(--rainbow-blue))] bg-[length:200%_200%] animate-rainbow-shift bg-clip-text text-transparent font-medium mb-3">Community Sessions</p>
              <h2 className="text-4xl md:text-6xl font-semibold tracking-tight mb-6">
                Join our{" "}
                <span className="text-gradient bg-gradient-to-r from-[hsl(var(--rainbow-yellow))] via-[hsl(var(--rainbow-green))] to-[hsl(var(--rainbow-blue))] bg-[length:200%_200%] animate-rainbow-shift bg-clip-text text-transparent">monthly sessions</span>
              </h2>
              <p className="text-lg text-foreground/70 max-w-3xl mx-auto">
                We host regular community sessions to explain the problem, share our vision, and invite feedback. 
                All sessions are recorded and summaries are published here.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {communitySessions.map((session, index) => (
                <motion.div
                  key={session.title}
                  initial={{ opacity: 0, y: 14 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.25 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="group border-2 border-border rounded-lg p-6 hover:border-rainbow-gradient hover:bg-gradient-to-br hover:from-rainbow-yellow/5 hover:via-rainbow-green/5 hover:to-rainbow-blue/5 transition-all duration-300"
                >
                  <div className="flex items-start gap-3 mb-4">
                    <Calendar className="w-5 h-5 mt-1 text-rainbow-yellow group-hover:text-rainbow-green transition-colors duration-300 flex-shrink-0" />
                    <div>
                      <p className="text-sm font-medium text-foreground/60 mb-1">{session.date}</p>
                      <p className="text-sm text-foreground/50">{session.time}</p>
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold mb-3 group-hover:text-gradient group-hover:bg-gradient-to-r group-hover:from-[hsl(var(--rainbow-yellow))] group-hover:via-[hsl(var(--rainbow-green))] group-hover:to-[hsl(var(--rainbow-blue))] group-hover:bg-[length:200%_200%] group-hover:animate-rainbow-shift group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
                    {session.title}
                  </h3>
                  <p className="text-foreground/70 text-sm leading-relaxed group-hover:text-foreground/90 transition-colors duration-300">
                    {session.description}
                  </p>
                </motion.div>
              ))}
            </div>

            <div className="mt-12 text-center">
              <Button variant="cta" size="lg" asChild>
                <Link to="/waitlist">
                  Join the waitlist to attend
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bunifu-section bg-gradient-to-r from-[hsl(var(--rainbow-yellow))] via-[hsl(var(--rainbow-green))] to-[hsl(var(--rainbow-blue))] bg-[length:200%_200%] animate-rainbow-shift text-white py-16 lg:py-24 relative overflow-hidden group">
          <div className="pointer-events-none absolute inset-0 transition-transform duration-700 ease-out group-hover:scale-110 group-hover:rotate-1">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,hsl(var(--rainbow-yellow)/0.3),transparent_60%)]" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,hsl(var(--rainbow-green)/0.3),transparent_60%)]" />
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
                Stay updated on{" "}
                <span className="text-white drop-shadow-[0_0_20px_rgba(255,255,255,0.5)]">our progress</span>
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
                  <Link to="/#get-in-touch">Get in touch</Link>
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

export default ResourcesPage;
