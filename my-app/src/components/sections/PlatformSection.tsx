import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

const modules = [
  {
    color: "bg-rainbow-red",
    title: "Data Security Posture Management",
    description: "Discover and classify data in hybrid environments. Assess, prioritize, and mitigate risks to sensitive data.",
  },
  {
    color: "bg-rainbow-orange",
    title: "Directory Management",
    description: "Simplify and secure directory operations by cutting down on complexity, risk, and manual effort.",
  },
  {
    color: "bg-rainbow-yellow",
    title: "Endpoint Management",
    description: "Secure endpoints and prevent data loss while keeping teams productive — no matter where they work.",
  },
  {
    color: "bg-rainbow-green",
    title: "Identity Management",
    description: "Secure every identity, streamline every process, and stay ahead of compliance — without adding complexity.",
  },
  {
    color: "bg-rainbow-blue",
    title: "Identity Threat Detection & Response",
    description: "Stay ahead of identity-based threats — proactively remediate risks, block attacks, and ensure rapid recovery.",
  },
  {
    color: "bg-rainbow-indigo",
    title: "Privileged Access Management",
    description: "Shrink your attack surface by killing standing privileges, locking down credentials, and monitoring privileged sessions.",
  },
];

export function PlatformSection() {
  return (
    <section className="netwrix-section bg-background py-16 lg:py-24" id="platform">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true, amount: 0.35 }}
            className="order-2 lg:order-1"
          >
            <div className="rounded-2xl border border-border bg-white overflow-hidden">
              <video
                className="w-full h-auto"
                autoPlay
                muted
                loop
                playsInline
                preload="metadata"
              >
                <source
                  src="https://cdn.sanity.io/files/r09655ln/production/efbcc92ad8c6d1e38881617b3b68660e5c64024b.mp4"
                  type="video/mp4"
                />
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
            <p className="text-sm font-medium text-muted-foreground mb-3">The Netwrix 1Secure™ Platform</p>
            <h2 className="text-4xl md:text-5xl font-semibold tracking-tight leading-tight mb-5">
              One platform. <br />
              1Secure™.
            </h2>
            <p className="text-lg text-foreground/70 max-w-xl mb-7">
              Meet 1Secure, the first platform to unify data and identity security. Ditch the siloed tools and secure your identities, strengthen data protection, and simplify compliance — all from one platform.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Button variant="cta" size="lg">
                Explore
              </Button>
              <Button variant="ctaOutline" size="lg">
                Learn more
              </Button>
            </div>
          </motion.div>
        </div>

        <div className="mt-14 lg:mt-16 border border-border">
          {modules.map((m, idx) => (
            <motion.div
              key={m.title}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.35, delay: idx * 0.03 }}
              className={`grid md:grid-cols-2 gap-6 px-6 py-8 bg-background ${idx === 0 ? "" : "border-t border-border"} transition-all duration-300 group hover:shadow-lg hover:shadow-rainbow-blue/10`}
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
