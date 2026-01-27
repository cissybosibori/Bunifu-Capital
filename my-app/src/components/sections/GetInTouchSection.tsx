import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export function GetInTouchSection() {
  return (
    <section className="netwrix-section bg-accent netwrix-cta-bg text-accent-foreground py-16 lg:py-24 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.45 }}
          className="text-center"
        >
          <p className="text-accent-foreground/80 font-medium mb-4">Get in touch</p>
          <h2 className="text-5xl md:text-7xl font-semibold tracking-tight leading-[0.95] mb-10">
            Ready to get started?
          </h2>
          <Button
            size="lg"
            className="rounded-full bg-white text-foreground hover:bg-white/90 border border-white/10"
          >
            Contact our experts
          </Button>
        </motion.div>
      </div>
    </section>
  );
}

