import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { usePublicContent } from "@/context/PublicContentContext";
import { EmptyState } from "@/components/EmptyState";

type ResourceItem = import("@/context/PublicContentContext").ResourceItem;

function ResourceCard({ resource, index }: { resource: ResourceItem; index: number }) {
  const hero = resource.heroStyle;
  const accentColor = hero ? hero.accent : `hsl(var(--rainbow-${resource.lineColor.vertical}))`;
  const lineGradient = hero ? hero.accent : `hsl(var(--rainbow-${resource.lineColor.vertical}))`;

  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group resource-card relative overflow-hidden border-2 border-border bg-[#141129] text-white min-h-[340px] cursor-pointer hover:border-rainbow-gradient transition-all duration-300"
    >
      <div
        className="absolute inset-0 opacity-90 transition-transform duration-700 ease-out group-hover:scale-[1.06] group-hover:opacity-100"
        style={{
          background: hero
            ? hero.background
            : resource.gradient.includes("rainbow-red")
              ? "linear-gradient(to bottom right, hsl(var(--rainbow-red)), hsl(var(--rainbow-orange)), hsl(var(--rainbow-yellow)))"
              : "linear-gradient(to bottom right, hsl(var(--rainbow-blue)), hsl(var(--rainbow-indigo)), hsl(var(--rainbow-violet)))",
        }}
      />
      <div className="absolute inset-0 bg-black/25 pointer-events-none" aria-hidden />
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bunifu-grid-card-small opacity-[0.28] transition-all duration-700 ease-out group-hover:opacity-[0.42]" />
        <div
          className="absolute right-10 top-0 bottom-0 w-[2px] opacity-[0.55] transition-all duration-300 group-hover:opacity-100"
          style={{
            background: `linear-gradient(to bottom, transparent 39.58%, ${lineGradient} 96.82%)`,
          } as React.CSSProperties}
        />
        <div
          className="absolute left-0 right-0 bottom-12 h-[2px] opacity-[0.55] transition-all duration-300 group-hover:opacity-100"
          style={{
            background: `linear-gradient(to right, transparent 6.5%, ${lineGradient} 31.36%)`,
          } as React.CSSProperties}
        />
        <div className="absolute inset-0 bg-black/0 transition-colors duration-300 group-hover:bg-black/10" />
      </div>

      <div className="relative p-8 h-full flex flex-col">
        <div
          className="flex items-center gap-2 text-sm font-medium mb-4 transition-colors duration-300 group-hover:scale-105 drop-shadow-[0_1px_2px_rgba(0,0,0,0.4)]"
          style={{ color: accentColor }}
        >
          <resource.icon className="w-4 h-4" />
          {resource.type}
        </div>

        <h3 className="text-2xl md:text-3xl font-semibold tracking-tight leading-tight mb-5 text-white [text-shadow:0_1px_3px_rgba(0,0,0,0.35)]">
          {resource.title}
        </h3>

        <div className="mt-auto flex items-center justify-between gap-6 text-white/90 [text-shadow:0_1px_2px_rgba(0,0,0,0.3)]">
          <div className="flex items-center gap-3">
            <div className="h-9 w-9 rounded-full bg-white/10 flex items-center justify-center text-xs">
              {resource.author.split(" ")[0].slice(0, 1)}
            </div>
                    <div>
                      <div className="text-sm font-medium text-white">{resource.author}</div>
                      <div className="text-xs text-white/80 [text-shadow:0_1px_2px_rgba(0,0,0,0.3)]">{resource.category}</div>
                    </div>
          </div>

          <div className="flex items-center gap-2 opacity-0 translate-x-2 transition-all duration-200 group-hover:opacity-100 group-hover:translate-x-0">
            <span className="text-sm font-medium">Learn more</span>
            <ArrowRight className="h-4 w-4" />
          </div>
        </div>
      </div>
    </motion.article>
  );
}

const ResourcesPage = () => {
  const { featuredResources, articles, communitySessions } = usePublicContent();

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="bunifu-page">
        {/* Hero - same structure as other pages, yellow/green + grid */}
        <section className="relative overflow-hidden pt-28 pb-16 lg:pt-36 lg:pb-24 bg-background border-b border-border">
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_12%_86%,hsl(var(--rainbow-yellow)/0.25),transparent_58%)]" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_92%_18%,hsl(var(--rainbow-green)/0.22),transparent_58%)]" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,hsl(var(--rainbow-blue)/0.15),transparent_70%)]" />
            <div className="absolute -left-40 -bottom-44 h-[640px] w-[720px] bg-[radial-gradient(closest-side,hsl(var(--rainbow-yellow)/0.35),hsl(var(--rainbow-green)/0.25),transparent_72%)]" />
            <div className="absolute right-0 top-0 h-[540px] w-[620px] bg-[radial-gradient(closest-side,hsl(var(--rainbow-green)/0.28),hsl(var(--rainbow-blue)/0.18),transparent_72%)] blur-3xl translate-x-40 -translate-y-28" />
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
                Learn about the{" "}
                <span className="text-gradient bg-gradient-to-r from-[hsl(var(--rainbow-yellow))] via-[hsl(var(--rainbow-green))] to-[hsl(var(--rainbow-blue))] bg-[length:200%_200%] animate-rainbow-shift bg-clip-text text-transparent">
                  creative economy
                </span>
              </h1>
              <p className="text-lg md:text-xl text-foreground/70 mb-8 max-w-2xl mx-auto">
                Articles, research, and educational content about the creative economy, finance, and how we're building infrastructure to connect them. Plus community sessions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  variant="hero"
                  size="lg"
                  className="bg-rainbow-green text-white hover:bg-rainbow-green/90 hover:shadow-xl hover:shadow-rainbow-green/25"
                  asChild
                >
                  <Link to="/resources#resources">Resource center</Link>
                </Button>
                <Button
                  variant="heroOutline"
                  size="lg"
                  className="group border-rainbow-yellow/35 hover:bg-rainbow-yellow hover:border-rainbow-yellow"
                  asChild
                >
                  <Link to="/waitlist">
                    Join the waitlist
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Resources section - same layout as home page ResourcesSection */}
        <section id="resources" className="bunifu-section py-16 lg:py-24 bg-background">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.35 }}
              transition={{ duration: 0.5 }}
              className="grid lg:grid-cols-2 gap-10 items-start mb-12"
            >
              <div>
                <p className="text-gradient bg-rainbow-gradient bg-[length:200%_200%] animate-rainbow-shift bg-clip-text text-transparent font-medium mb-3">
                  Resources
                </p>
                <h2 className="text-4xl md:text-6xl font-semibold tracking-tight leading-tight">
                  Articles, research &{" "}
                  <span className="text-gradient bg-rainbow-gradient bg-[length:200%_200%] animate-rainbow-shift bg-clip-text text-transparent">
                    thought pieces
                  </span>
                </h2>
                <p className="text-lg text-foreground/70 mt-4">
                  Educational content about the creative economy, finance, and how we're building infrastructure to connect them.
                </p>
                <Button variant="ctaOutline" size="lg" className="mt-7 group" asChild>
                  <Link to="/waitlist">
                    Join the waitlist
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
              </div>
            </motion.div>

            <div className="grid lg:grid-cols-2 gap-8">
              {featuredResources.length === 0 ? (
                <EmptyState title="No featured resources yet" description="Articles and thought pieces will appear here when published." className="col-span-2" />
              ) : (
                featuredResources.map((resource, index) => (
                  <ResourceCard key={resource.title} resource={resource} index={index} />
                ))
              )}
            </div>
          </div>
        </section>

        {/* More articles */}
        <section className="bunifu-section bg-background py-16 lg:py-24">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.35 }}
              transition={{ duration: 0.45 }}
              className="text-center mb-10 lg:mb-14"
            >
              <p className="text-gradient bg-gradient-to-r from-[hsl(var(--rainbow-yellow))] via-[hsl(var(--rainbow-green))] to-[hsl(var(--rainbow-blue))] bg-[length:200%_200%] animate-rainbow-shift bg-clip-text text-transparent font-medium mb-3">
                More to read
              </p>
              <h2 className="text-4xl md:text-6xl font-semibold tracking-tight mb-6">
                Understanding the{" "}
                <span className="text-gradient bg-gradient-to-r from-[hsl(var(--rainbow-yellow))] via-[hsl(var(--rainbow-green))] to-[hsl(var(--rainbow-blue))] bg-[length:200%_200%] animate-rainbow-shift bg-clip-text text-transparent">
                  creative economy
                </span>
              </h2>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {articles.map((resource, index) => (
                <ResourceCard key={resource.title} resource={resource} index={index} />
              ))}
            </div>
          </div>
        </section>

        {/* Community sessions */}
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
                Community
              </p>
              <h2 className="text-4xl md:text-6xl font-semibold tracking-tight mb-6">
                Join our{" "}
                <span className="text-gradient bg-gradient-to-r from-[hsl(var(--rainbow-green))] via-[hsl(var(--rainbow-blue))] to-[hsl(var(--rainbow-indigo))] bg-[length:200%_200%] animate-rainbow-shift bg-clip-text text-transparent">
                  monthly sessions
                </span>
              </h2>
              <p className="text-lg text-foreground/70 max-w-3xl mx-auto">
                We host regular community sessions to explain the problem, share our vision, and invite feedback.
              </p>
            </motion.div>

            <div className="grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {communitySessions.length === 0 ? (
                <EmptyState title="No community sessions yet" description="Monthly sessions will appear here when scheduled." className="col-span-2" />
              ) : (
                communitySessions.map((resource, index) => (
                  <ResourceCard key={resource.title} resource={resource} index={index} />
                ))
              )}
            </div>

            <div className="mt-12 flex justify-center">
              <Button
                variant="cta"
                size="lg"
                className="bg-rainbow-green text-white hover:bg-rainbow-green/90 hover:shadow-lg hover:shadow-rainbow-green/25"
                asChild
              >
                <Link to="/waitlist">
                  Join the waitlist to attend
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* CTA - same style as Institutions/Partnerships: hero colors + small grid */}
        <section className="bunifu-section relative overflow-hidden py-16 lg:py-24 bg-background border-t border-border">
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_12%_86%,hsl(var(--rainbow-yellow)/0.25),transparent_58%)]" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_92%_18%,hsl(var(--rainbow-green)/0.22),transparent_58%)]" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,hsl(var(--rainbow-blue)/0.15),transparent_70%)]" />
            <div className="absolute -left-40 -bottom-44 h-[640px] w-[720px] bg-[radial-gradient(closest-side,hsl(var(--rainbow-yellow)/0.35),hsl(var(--rainbow-green)/0.25),transparent_72%)]" />
            <div className="absolute right-0 top-0 h-[540px] w-[620px] bg-[radial-gradient(closest-side,hsl(var(--rainbow-green)/0.28),hsl(var(--rainbow-blue)/0.18),transparent_72%)] blur-3xl translate-x-40 -translate-y-28" />
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
                Stay updated on{" "}
                <span className="text-gradient bg-gradient-to-r from-[hsl(var(--rainbow-yellow))] via-[hsl(var(--rainbow-green))] to-[hsl(var(--rainbow-blue))] bg-[length:200%_200%] animate-rainbow-shift bg-clip-text text-transparent">
                  our progress
                </span>
              </h2>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  variant="hero"
                  size="lg"
                  className="bg-rainbow-green text-white hover:bg-rainbow-green/90 hover:shadow-xl hover:shadow-rainbow-green/25"
                  asChild
                >
                  <Link to="/waitlist">Join the waitlist</Link>
                </Button>
                <Button
                  variant="heroOutline"
                  size="lg"
                  className="group border-rainbow-yellow/35 hover:bg-rainbow-yellow hover:border-rainbow-yellow"
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

export default ResourcesPage;
