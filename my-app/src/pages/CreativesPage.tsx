import type { ReactNode } from "react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Sparkles, Layers, TrendingUp, Wallet, Radar, Flame } from "lucide-react";
import { cn } from "@/lib/utils";

const creativeReality = [
  {
    label: "Traditional systems assume",
    items: ["One income source", "Stable monthly pay", "Predictable cashflow", "Easy-to-read payslips"],
  },
  {
    label: "Creatives often live",
    items: [
      "Multiple payouts (platforms, gigs, royalties)",
      "Quiet months and spike months",
      "Irregular big payments",
      "Income spread across apps, accounts, and channels",
    ],
  },
];

const incomeStreams = [
  "Royalties",
  "Platform payouts",
  "Gigs & commissions",
  "Brand deals",
  "Content revenue",
  "Licensing",
  "Digital products",
  "Workshops",
  "IP-derived income (acknowledged)",
];

const companionCapabilities = [
  { icon: Wallet, title: "See your money clearly", desc: "A unified view of where money comes from, where it goes, and what it means this month." },
  { icon: Radar, title: "Pattern-aware automation", desc: "Signals that adapt to your workflow - spot streaks, seasonality, gaps, and spikes without spreadsheets." },
  { icon: TrendingUp, title: "Performance insights", desc: "Trends over time across income, spending, and stability - so you can make decisions with context." },
  { icon: Layers, title: "Cross-platform tracking", desc: "Track income streams across platforms and channels so your full picture isn’t fragmented." },
];

const benchmarkingExamples = [
  "Musicians compared to musicians (same country, same niche).",
  "Fashion designers compared to fashion designers (same country, same niche).",
  "Lifestyle creators compared only to lifestyle creators (same country, same niche).",
];

function TiltCard({
  tone = "red",
  children,
  className = "",
}: {
  tone?: "red" | "orange" | "yellow";
  children: ReactNode;
  className?: string;
}) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 220, damping: 18 });
  const sy = useSpring(y, { stiffness: 220, damping: 18 });
  const rotateX = useTransform(sy, [-40, 40], [10, -10]);
  const rotateY = useTransform(sx, [-40, 40], [-10, 10]);

  const toneStyles =
    tone === "red"
      ? "from-rainbow-red/10 via-rainbow-orange/5 to-transparent hover:shadow-rainbow-red/20"
      : tone === "orange"
        ? "from-rainbow-orange/10 via-rainbow-yellow/5 to-transparent hover:shadow-rainbow-orange/20"
        : "from-rainbow-yellow/10 via-rainbow-orange/5 to-transparent hover:shadow-rainbow-yellow/20";

  return (
    <motion.div
      onMouseMove={(e) => {
        const r = (e.currentTarget as HTMLDivElement).getBoundingClientRect();
        x.set(e.clientX - r.left - r.width / 2);
        y.set(e.clientY - r.top - r.height / 2);
      }}
      onMouseLeave={() => {
        x.set(0);
        y.set(0);
      }}
      style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
      className={cn(
        "relative rounded-xl border-2 border-border bg-background/70 backdrop-blur-sm p-6 transition-all duration-300 hover:border-foreground/15 hover:shadow-2xl",
        className,
      )}
    >
      <div className={cn("pointer-events-none absolute inset-0 rounded-xl bg-gradient-to-br opacity-100", toneStyles)} />
      <div className="relative" style={{ transform: "translateZ(18px)" }}>
        {children}
      </div>
    </motion.div>
  );
}

const CreativesPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="netwrix-page">
        {/* Hero Section */}
        <section className="relative overflow-hidden pt-28 pb-16 lg:pt-36 lg:pb-24 bg-background border-b border-border">
          {/* Red/Orange/Yellow gradient theme */}
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_12%_86%,hsl(var(--rainbow-red)/0.25),transparent_58%)]" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_92%_18%,hsl(var(--rainbow-orange)/0.22),transparent_58%)]" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,hsl(var(--rainbow-yellow)/0.15),transparent_70%)]" />
            <div className="absolute -left-40 -bottom-44 h-[640px] w-[720px] bg-[radial-gradient(closest-side,hsl(var(--rainbow-red)/0.35),hsl(var(--rainbow-orange)/0.25),transparent_72%)]" />
            <div className="absolute right-0 top-0 h-[540px] w-[620px] bg-[radial-gradient(closest-side,hsl(var(--rainbow-yellow)/0.28),hsl(var(--rainbow-orange)/0.18),transparent_72%)] blur-3xl translate-x-40 -translate-y-28" />
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
                Built for{" "}
                <span className="text-gradient bg-gradient-to-r from-[hsl(var(--rainbow-red))] via-[hsl(var(--rainbow-orange))] to-[hsl(var(--rainbow-yellow))] bg-[length:200%_200%] animate-rainbow-shift bg-clip-text text-transparent">creatives</span>
              </h1>
              <p className="text-lg md:text-xl text-foreground/70 mb-8 max-w-2xl mx-auto">
                A playful, futuristic financial companion that fits your income reality - multi-stream, variable, and creative.
                Get clarity, control, and context without forcing your life into “salary-shaped” boxes.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  variant="hero"
                  size="lg"
                  className="bg-rainbow-red text-white hover:bg-rainbow-red/90 hover:shadow-xl hover:shadow-rainbow-red/25"
                  asChild
                >
                  <Link to="/waitlist">Join the waitlist</Link>
                </Button>
                <Button
                  variant="heroOutline"
                  size="lg"
                  className="group border-rainbow-orange/35 hover:bg-rainbow-orange hover:border-rainbow-orange"
                  asChild
                >
                  <Link to="/waitlist">
                    Learn more
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Scale & diversity (credibility) */}
        <section className="netwrix-section bg-background py-16 lg:py-24">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.35 }}
              transition={{ duration: 0.45 }}
              className="text-center mb-10 lg:mb-14"
            >
              <p className="text-gradient bg-gradient-to-r from-[hsl(var(--rainbow-red))] via-[hsl(var(--rainbow-orange))] to-[hsl(var(--rainbow-yellow))] bg-[length:200%_200%] animate-rainbow-shift bg-clip-text text-transparent font-medium mb-3">
                The creative economy is vast
              </p>
              <h2 className="text-4xl md:text-6xl font-semibold tracking-tight mb-6">
                Not one industry.{" "}
                <span className="text-gradient bg-gradient-to-r from-[hsl(var(--rainbow-red))] via-[hsl(var(--rainbow-orange))] to-[hsl(var(--rainbow-yellow))] bg-[length:200%_200%] animate-rainbow-shift bg-clip-text text-transparent">
                  Hundreds of niches.
                </span>
              </h2>
              <p className="text-lg text-foreground/70 max-w-3xl mx-auto">
                Depending on the taxonomy, “creative industries” are grouped into a handful of macro-domains, but the real world is much
                more granular: roles, sub-disciplines, and niches stack into hundreds of categories and thousands of job titles.
                Occupational taxonomies like O*NET list 900+ occupations overall, with many in arts, media, design, and digital creation.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
              <TiltCard tone="red">
                <div className="flex items-start gap-3">
                  <Sparkles className="w-5 h-5 text-rainbow-red" />
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Creative categories multiply</h3>
                    <p className="text-foreground/70">
                      Music isn’t one thing. Design isn’t one thing. Every craft has sub-scenes, formats, markets, and monetization styles.
                    </p>
                  </div>
                </div>
              </TiltCard>
              <TiltCard tone="orange">
                <div className="flex items-start gap-3">
                  <Flame className="w-5 h-5 text-rainbow-orange" />
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Respect for diversity</h3>
                    <p className="text-foreground/70">
                      Your “industry” might be a hybrid: a photographer who teaches workshops and sells presets, or a musician who licenses.
                    </p>
                  </div>
                </div>
              </TiltCard>
              <TiltCard tone="yellow">
                <div className="flex items-start gap-3">
                  <Layers className="w-5 h-5 text-rainbow-yellow" />
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Income styles vary</h3>
                    <p className="text-foreground/70">
                      Some creatives earn via steady retainers. Others via spikes. Many via a blend across platforms, royalties, and gigs.
                    </p>
                  </div>
                </div>
              </TiltCard>
            </div>
          </div>
        </section>

        {/* Income reality: gaps (not “problems”) */}
        <section className="netwrix-section bg-background py-16 lg:py-24">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.35 }}
              transition={{ duration: 0.45 }}
              className="text-center mb-10 lg:mb-14"
            >
              <p className="text-gradient bg-gradient-to-r from-[hsl(var(--rainbow-red))] via-[hsl(var(--rainbow-orange))] to-[hsl(var(--rainbow-yellow))] bg-[length:200%_200%] animate-rainbow-shift bg-clip-text text-transparent font-medium mb-3">
                The gap is structural
              </p>
              <h2 className="text-4xl md:text-6xl font-semibold tracking-tight mb-6">
                Your income is real.{" "}
                <span className="text-gradient bg-gradient-to-r from-[hsl(var(--rainbow-red))] via-[hsl(var(--rainbow-orange))] to-[hsl(var(--rainbow-yellow))] bg-[length:200%_200%] animate-rainbow-shift bg-clip-text text-transparent">
                  It’s just not “salary-shaped.”
                </span>
              </h2>
              <p className="text-lg text-foreground/70 max-w-3xl mx-auto">
                Most tools assume a single, predictable income stream. Creatives often earn across platforms, royalties, gigs, brand work,
                and IP-derived payouts, with quiet months and spike months included. That mismatch creates gaps in clarity and access.
              </p>
            </motion.div>

            <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
              {creativeReality.map((col, idx) => (
                <TiltCard key={col.label} tone={idx === 0 ? "orange" : "red"} className="min-h-[240px]">
                  <p className="text-sm font-medium text-foreground/70 mb-4">{col.label}</p>
                  <ul className="space-y-3">
                    {col.items.map((i) => (
                      <li key={i} className="flex items-start gap-3">
                        <span
                          className={cn(
                            "mt-2 h-2.5 w-2.5 rounded-full",
                            idx === 0 ? "bg-rainbow-orange" : "bg-rainbow-red",
                          )}
                        />
                        <span className="text-foreground/80">{i}</span>
                      </li>
                    ))}
                  </ul>
                </TiltCard>
              ))}
            </div>

            <div className="mt-10 max-w-6xl mx-auto">
              <TiltCard tone="yellow">
                <p className="text-sm font-medium text-foreground/70 mb-4">Multiple income streams we recognize</p>
                <div className="flex flex-wrap gap-2">
                  {incomeStreams.map((s, i) => (
                    <motion.span
                      key={s}
                      whileHover={{ y: -2, rotate: i % 2 === 0 ? 1 : -1 }}
                      className={cn(
                        "inline-flex items-center rounded-full border px-3 py-1 text-sm transition-colors",
                        "border-rainbow-yellow/35 bg-rainbow-yellow/5 text-foreground/80 hover:bg-rainbow-orange/10 hover:border-rainbow-orange/40",
                      )}
                    >
                      {s}
                    </motion.span>
                  ))}
                </div>
                <p className="mt-4 text-sm text-foreground/60">
                  IP has value. On this page we acknowledge it; deeper discussion and future approaches to valuation live in Resources.
                </p>
              </TiltCard>
            </div>
          </div>
        </section>

        {/* Financial companion (self-first) */}
        <section className="netwrix-section bg-background py-16 lg:py-24">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.35 }}
              transition={{ duration: 0.45 }}
              className="text-center mb-10 lg:mb-14"
            >
              <p className="text-gradient bg-gradient-to-r from-[hsl(var(--rainbow-red))] via-[hsl(var(--rainbow-orange))] to-[hsl(var(--rainbow-yellow))] bg-[length:200%_200%] animate-rainbow-shift bg-clip-text text-transparent font-medium mb-3">
                Your financial companion
              </p>
              <h2 className="text-4xl md:text-6xl font-semibold tracking-tight mb-6">
                What you gain{" "}
                <span className="text-gradient bg-gradient-to-r from-[hsl(var(--rainbow-red))] via-[hsl(var(--rainbow-orange))] to-[hsl(var(--rainbow-yellow))] bg-[length:200%_200%] animate-rainbow-shift bg-clip-text text-transparent">
                  for yourself
                </span>
              </h2>
              <p className="text-lg text-foreground/70 max-w-3xl mx-auto">
                Before funding, banks, or institutions, this is about clarity, control, and day-to-day decision support for your creative life.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
              {companionCapabilities.map((c, idx) => {
                const Icon = c.icon;
                const tone = idx % 3 === 0 ? "red" : idx % 3 === 1 ? "orange" : "yellow";
                return (
                  <TiltCard key={c.title} tone={tone}>
                    <div className="flex items-start gap-3">
                      <Icon
                        className={cn(
                          "w-5 h-5",
                          tone === "red" ? "text-rainbow-red" : tone === "orange" ? "text-rainbow-orange" : "text-rainbow-yellow",
                        )}
                      />
                      <div>
                        <h3 className="text-lg font-semibold mb-2">{c.title}</h3>
                        <p className="text-foreground/70 text-sm leading-relaxed">{c.desc}</p>
                      </div>
                    </div>
                  </TiltCard>
                );
              })}
            </div>

            <div className="mt-12 flex justify-center">
              <Button
                variant="cta"
                size="lg"
                className="bg-rainbow-orange text-white hover:bg-rainbow-orange/90 hover:shadow-lg hover:shadow-rainbow-orange/25"
                asChild
              >
                <Link to="/waitlist">
                  Get involved
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Contextual benchmarking (fair comparisons) */}
        <section className="netwrix-section bg-background py-16 lg:py-24">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.35 }}
              transition={{ duration: 0.45 }}
              className="text-center mb-10 lg:mb-14"
            >
              <p className="text-gradient bg-gradient-to-r from-[hsl(var(--rainbow-red))] via-[hsl(var(--rainbow-orange))] to-[hsl(var(--rainbow-yellow))] bg-[length:200%_200%] animate-rainbow-shift bg-clip-text text-transparent font-medium mb-3">
                Context matters
              </p>
              <h2 className="text-4xl md:text-6xl font-semibold tracking-tight mb-6">
                Benchmarking that’s{" "}
                <span className="text-gradient bg-gradient-to-r from-[hsl(var(--rainbow-red))] via-[hsl(var(--rainbow-orange))] to-[hsl(var(--rainbow-yellow))] bg-[length:200%_200%] animate-rainbow-shift bg-clip-text text-transparent">
                  fair and useful
                </span>
              </h2>
              <p className="text-lg text-foreground/70 max-w-3xl mx-auto">
                Comparisons should be meaningful - same category, same country, same niche. That’s how you get healthy benchmarking and better decisions.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {benchmarkingExamples.map((ex, idx) => (
                <TiltCard key={ex} tone={idx === 0 ? "yellow" : idx === 1 ? "orange" : "red"}>
                  <div className="flex items-start gap-3">
                    <TrendingUp className={cn("w-5 h-5", idx === 0 ? "text-rainbow-yellow" : idx === 1 ? "text-rainbow-orange" : "text-rainbow-red")} />
                    <p className="text-foreground/80">{ex}</p>
                  </div>
                </TiltCard>
              ))}
            </div>
          </div>
        </section>

        {/* Funding, partnerships & opportunities (after self-value) */}
        <section className="netwrix-section bg-background py-16 lg:py-24">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.35 }}
              transition={{ duration: 0.45 }}
              className="max-w-4xl mx-auto text-center mb-10 lg:mb-14"
            >
              <p className="text-gradient bg-gradient-to-r from-[hsl(var(--rainbow-red))] via-[hsl(var(--rainbow-orange))] to-[hsl(var(--rainbow-yellow))] bg-[length:200%_200%] animate-rainbow-shift bg-clip-text text-transparent font-medium mb-3">
                Optional paths
              </p>
              <h2 className="text-4xl md:text-6xl font-semibold tracking-tight mb-6">
                Use clarity to unlock{" "}
                <span className="text-gradient bg-gradient-to-r from-[hsl(var(--rainbow-red))] via-[hsl(var(--rainbow-orange))] to-[hsl(var(--rainbow-yellow))] bg-[length:200%_200%] animate-rainbow-shift bg-clip-text text-transparent">
                  opportunities
                </span>
              </h2>
              <p className="text-lg text-foreground/70">
                Not everyone wants funding, and that’s valid. Some want partnerships. Some want confident rate cards. Some want control.
                Structured financial clarity supports all paths.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
              <TiltCard tone="orange">
                <div className="flex items-start gap-3">
                  <Radar className="w-5 h-5 text-rainbow-orange" />
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Funding readiness (when you want it)</h3>
                    <p className="text-foreground/70">
                      Apply for funding with structured financial data and clear performance context, without forcing your income into a “salary” narrative.
                    </p>
                  </div>
                </div>
              </TiltCard>
              <TiltCard tone="red">
                <div className="flex items-start gap-3">
                  <Sparkles className="w-5 h-5 text-rainbow-red" />
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Partnership confidence</h3>
                    <p className="text-foreground/70">
                      Walk into brand and partnership conversations with better numbers: structured earnings, trends, and a clearer view of your earning power.
                    </p>
                  </div>
                </div>
              </TiltCard>
              <TiltCard tone="yellow">
                <div className="flex items-start gap-3">
                  <Wallet className="w-5 h-5 text-rainbow-yellow" />
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Know where your money is at</h3>
                    <p className="text-foreground/70">
                      Keep a clear, current view of your income and spending across platforms, so you can act with confidence in any opportunity.
                    </p>
                  </div>
                </div>
              </TiltCard>
            </div>

            <div className="mt-12 flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                variant="cta"
                size="lg"
                className="bg-rainbow-red text-white hover:bg-rainbow-red/90 hover:shadow-lg hover:shadow-rainbow-red/25"
                asChild
              >
                <Link to="/waitlist">
                  Join the waitlist
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </Button>
              <Button
                variant="ctaOutline"
                size="lg"
                className="border-rainbow-yellow/35 hover:bg-rainbow-yellow hover:border-rainbow-yellow"
                asChild
              >
                <Link to="/resources">Explore Resources</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default CreativesPage;
