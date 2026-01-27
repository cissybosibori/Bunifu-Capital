import type { Config } from "tailwindcss";
import animate from "tailwindcss-animate";

export default {
  darkMode: ["class"],
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      center: true,
      padding: "1rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        navy: "hsl(var(--navy))",
        rainbow: {
          red: "hsl(var(--rainbow-red))",
          orange: "hsl(var(--rainbow-orange))",
          yellow: "hsl(var(--rainbow-yellow))",
          green: "hsl(var(--rainbow-green))",
          blue: "hsl(var(--rainbow-blue))",
          indigo: "hsl(var(--rainbow-indigo))",
          violet: "hsl(var(--rainbow-violet))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      backgroundImage: {
        "grid-pattern":
          "linear-gradient(to right, hsl(var(--border) / 0.25) 1px, transparent 1px), linear-gradient(to bottom, hsl(var(--border) / 0.25) 1px, transparent 1px)",
        "hero-pattern":
          "radial-gradient(ellipse at top, hsl(var(--accent) / 0.20), transparent 60%), radial-gradient(ellipse at bottom, hsl(var(--primary) / 0.18), transparent 55%)",
        "rainbow-gradient":
          "linear-gradient(135deg, hsl(var(--rainbow-red)) 0%, hsl(var(--rainbow-orange)) 14%, hsl(var(--rainbow-yellow)) 28%, hsl(var(--rainbow-green)) 42%, hsl(var(--rainbow-blue)) 57%, hsl(var(--rainbow-indigo)) 71%, hsl(var(--rainbow-violet)) 85%, hsl(var(--rainbow-red)) 100%)",
        "rainbow-radial":
          "radial-gradient(circle, hsl(var(--rainbow-red)) 0%, hsl(var(--rainbow-orange)) 14%, hsl(var(--rainbow-yellow)) 28%, hsl(var(--rainbow-green)) 42%, hsl(var(--rainbow-blue)) 57%, hsl(var(--rainbow-indigo)) 71%, hsl(var(--rainbow-violet)) 100%)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
        "caret-blink": {
          "0%, 70%, 100%": { opacity: "1" },
          "20%, 50%": { opacity: "0" },
        },
        "rainbow-shift": {
          "0%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
          "100%": { backgroundPosition: "0% 50%" },
        },
        "rainbow-rotate": {
          "0%": { filter: "hue-rotate(0deg)" },
          "100%": { filter: "hue-rotate(360deg)" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        float: "float 6s ease-in-out infinite",
        "caret-blink": "caret-blink 1s ease-out infinite",
        "rainbow-shift": "rainbow-shift 8s ease infinite",
        "rainbow-rotate": "rainbow-rotate 3s linear infinite",
      },
    },
  },
  plugins: [animate],
} satisfies Config;

