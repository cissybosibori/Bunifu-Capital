import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export function GetInTouchSection() {
  return (
    <section className="bunifu-section bg-rainbow-gradient rainbow-hover-bg text-white py-16 lg:py-24 relative overflow-hidden group">
      {/* Additional rainbow overlays for depth + motion on hover */}
      <div className="pointer-events-none absolute inset-0 transition-transform duration-700 ease-out group-hover:scale-110 group-hover:rotate-1">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,hsl(var(--rainbow-red)/0.3),transparent_60%)]" />
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
          <p className="text-white/90 font-medium mb-4">Get in touch</p>
          <h2 className="text-5xl md:text-7xl font-semibold tracking-tight leading-[0.95] mb-10">
            Ready to get{" "}
            <span className="text-white drop-shadow-[0_0_20px_rgba(255,255,255,0.5)]">started?</span>
          </h2>
          <Button
            size="lg"
            className="rounded-full bg-white text-foreground hover:bg-white/90 border-2 border-white/20 hover:border-white/40 hover:shadow-xl hover:shadow-white/30 hover:scale-105 transition-all duration-300"
          >
            Contact our experts
          </Button>
        </motion.div>
      </div>
    </section>
  );
}

