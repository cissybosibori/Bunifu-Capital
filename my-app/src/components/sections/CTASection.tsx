import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";

const features = [
  {
    title: "Access",
    description: "Monitor access to sensitive data, systems, and apps. Manage privileges. Identify weak passwords. Secure endpoints.",
  },
  {
    title: "Threats",
    description: "Identify and remediate vulnerabilities and misconfigurations. Detect and automatically respond to attacks.",
  },
  {
    title: "Compliance",
    description: "Automate compliance reporting and adherence to regulations, including NIST, GDPR, HIPAA, PCI-DSS, and more.",
  },
];

export function CTASection() {
  return (
    <section className="py-20 lg:py-32 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8">
              Secure data, identity, and infrastructure.
            </h2>

            <div className="space-y-6 mb-8">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  className="flex gap-4"
                >
                  <CheckCircle className="w-6 h-6 text-accent flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-foreground">{feature.title}.</span>{" "}
                    <span className="text-muted-foreground">{feature.description}</span>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="cta" size="lg">
                Get a demo
              </Button>
              <Button variant="outline" size="lg">
                Pricing
              </Button>
            </div>
          </motion.div>

          {/* Right content - Image */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-border">
              <img
                src="https://netwrix.com/images/img-desktop_4.webp"
                alt="Netwrix Platform Interface"
                className="w-full"
              />
              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
