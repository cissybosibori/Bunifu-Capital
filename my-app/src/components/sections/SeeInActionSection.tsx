import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export function SeeInActionSection() {
  return (
    <section className="bunifu-section hero-gradient hero-gradient-animated text-white relative overflow-hidden">
      <div className="container mx-auto px-4 py-16 lg:py-24">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.45 }}
          className="min-h-[280px] lg:min-h-[340px] flex flex-col items-center justify-center text-center"
        >
          <h2 className="text-5xl md:text-7xl font-semibold tracking-tight mb-10">
            See Bunifu Capital in action
          </h2>
          <Button size="lg" className="rounded-full bg-white text-foreground hover:bg-white/90 border border-white/10">
            Get a demo
          </Button>
        </motion.div>
      </div>
    </section>
  );
}

