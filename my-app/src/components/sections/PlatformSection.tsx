import { motion } from "framer-motion";
import { ArrowRight, Database, Eye, KeyRound, ShieldCheck } from "lucide-react";

import { Button } from "@/components/ui/button";

const features = [
  {
    icon: ShieldCheck,
    title: "Identity-first security",
    description: "Protect data by securing the identities that access it, with consistent policy and visibility.",
  },
  {
    icon: KeyRound,
    title: "Access governance",
    description: "Understand and control who has access to what—across your most critical systems and data stores.",
  },
  {
    icon: Eye,
    title: "Threat detection",
    description: "Detect suspicious behavior and reduce blast radius with real-time monitoring and alerts.",
  },
  {
    icon: Database,
    title: "Data security posture",
    description: "Find sensitive data, assess exposure, and prioritize remediation across your environment.",
  },
];

export function PlatformSection() {
  return (
    <section className="py-20 lg:py-28 bg-background" id="platform">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              A unified platform for modern data security
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-xl">
              Netwrix brings identity, access, and data controls together so you can move faster with confidence.
            </p>

            <div className="flex flex-col sm:flex-row gap-3">
              <Button variant="cta" size="lg" className="group">
                Explore the platform
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="outline" size="lg">
                View capabilities
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="grid sm:grid-cols-2 gap-6"
          >
            {features.map((f) => (
              <div key={f.title} className="rounded-xl border border-border bg-card p-6 shadow-sm">
                <div className="w-10 h-10 rounded-lg bg-accent/15 text-accent flex items-center justify-center mb-4">
                  <f.icon className="w-5 h-5" />
                </div>
                <h3 className="font-semibold text-card-foreground mb-2">{f.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{f.description}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
