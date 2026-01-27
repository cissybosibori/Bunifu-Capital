import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90 hover:shadow-lg hover:shadow-rainbow-blue/30",
        destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90 hover:shadow-lg hover:shadow-rainbow-red/30",
        outline: "border-2 border-rainbow-violet/30 bg-background hover:bg-rainbow-gradient hover:text-white hover:border-transparent hover:shadow-lg hover:shadow-rainbow-violet/30",
        secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80 hover:shadow-lg hover:shadow-rainbow-violet/30",
        ghost: "hover:bg-rainbow-gradient hover:text-white hover:shadow-lg hover:shadow-rainbow-indigo/30",
        link: "text-primary underline-offset-4 hover:underline hover:text-rainbow-blue",
        // Vibrant rainbow variants
        cta: "rounded-full bg-rainbow-gradient bg-[length:200%_200%] text-white font-semibold hover:animate-rainbow-shift hover:shadow-lg hover:shadow-rainbow-red/40 hover:scale-105",
        ctaOutline:
          "rounded-full border-2 border-rainbow-gradient bg-transparent text-foreground font-semibold hover:bg-rainbow-gradient hover:text-white hover:shadow-lg hover:shadow-rainbow-orange/30 hover:scale-105",
        hero: "rounded-full bg-rainbow-gradient bg-[length:200%_200%] text-white font-semibold px-8 py-3 hover:animate-rainbow-shift hover:shadow-xl hover:shadow-rainbow-yellow/40 hover:scale-105",
        heroOutline:
          "rounded-full border-2 border-rainbow-gradient bg-transparent text-foreground font-semibold px-8 py-3 hover:bg-rainbow-gradient hover:text-white hover:shadow-xl hover:shadow-rainbow-green/30 hover:scale-105",
        navCta: "rounded-full bg-rainbow-gradient bg-[length:200%_200%] text-white font-semibold hover:animate-rainbow-shift hover:shadow-lg hover:shadow-rainbow-blue/40 hover:scale-105",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-12 rounded-md px-8 text-base",
        xl: "h-14 rounded-lg px-10 text-lg",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return <Comp className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props} />;
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };
