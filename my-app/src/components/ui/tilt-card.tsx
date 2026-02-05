import type { ReactNode } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { cn } from "@/lib/utils";

export type TiltCardTone =
  | "red"
  | "orange"
  | "yellow"
  | "green"
  | "blue"
  | "indigo"
  | "violet";

const toneStyles: Record<
  TiltCardTone,
  string
> = {
  red: "from-rainbow-red/10 via-rainbow-orange/5 to-transparent hover:shadow-rainbow-red/20",
  orange: "from-rainbow-orange/10 via-rainbow-yellow/5 to-transparent hover:shadow-rainbow-orange/20",
  yellow: "from-rainbow-yellow/10 via-rainbow-orange/5 to-transparent hover:shadow-rainbow-yellow/20",
  green: "from-rainbow-green/10 via-rainbow-blue/5 to-transparent hover:shadow-rainbow-green/20",
  blue: "from-rainbow-blue/10 via-rainbow-indigo/5 to-transparent hover:shadow-rainbow-blue/20",
  indigo: "from-rainbow-indigo/10 via-rainbow-violet/5 to-transparent hover:shadow-rainbow-indigo/20",
  violet: "from-rainbow-violet/10 via-rainbow-blue/5 to-transparent hover:shadow-rainbow-violet/20",
};

export function TiltCard({
  tone = "red",
  children,
  className = "",
}: {
  tone?: TiltCardTone;
  children: ReactNode;
  className?: string;
}) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 220, damping: 18 });
  const sy = useSpring(y, { stiffness: 220, damping: 18 });
  const rotateX = useTransform(sy, [-40, 40], [10, -10]);
  const rotateY = useTransform(sx, [-40, 40], [-10, 10]);

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
      <div
        className={cn(
          "pointer-events-none absolute inset-0 rounded-xl bg-gradient-to-br opacity-100",
          toneStyles[tone],
        )}
      />
      <div className="relative" style={{ transform: "translateZ(18px)" }}>
        {children}
      </div>
    </motion.div>
  );
}
