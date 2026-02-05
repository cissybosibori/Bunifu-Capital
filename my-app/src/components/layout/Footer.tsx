import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const pageLinks = [
  { label: "For Creatives", href: "/creatives", color: "hover:text-[hsl(var(--rainbow-red))]" },
  { label: "For Institutions", href: "/financial-institutions", color: "hover:text-[hsl(var(--rainbow-orange))]" },
  { label: "Partnerships", href: "/partnerships", color: "hover:text-[hsl(var(--rainbow-yellow))]" },
  { label: "Resources", href: "/resources", color: "hover:text-[hsl(var(--rainbow-green))]" },
];

const actionLinks = [
  { label: "Join Waitlist", href: "/waitlist", color: "hover:text-[hsl(var(--rainbow-blue))]" },
  { label: "Pricing", href: "/pricing", color: "hover:text-[hsl(var(--rainbow-indigo))]" },
  { label: "Careers", href: "/careers", color: "hover:text-[hsl(var(--rainbow-violet))]" },
];

export function Footer() {
  return (
    <footer className="bunifu-section bg-background border-t border-border">
      {/* Top accent */}
      <div className="h-1 w-full bg-[hsl(var(--rainbow-orange))]" />

      <div className="container mx-auto px-4 py-8 lg:py-10">
        <div className="grid gap-8 lg:grid-cols-12 lg:gap-6">
          {/* Brand block */}
          <div className="lg:col-span-5">
            <Link to="/" className="inline-block mb-2">
              <span className="text-xl font-semibold tracking-tight text-[hsl(var(--rainbow-orange))]">
                Bunifu Capital
              </span>
            </Link>
            <p className="text-sm text-foreground/70 max-w-xs leading-snug mb-4">
              Opening access to finance for the creative economy.
            </p>
            <Button variant="ctaOutline" size="sm" className="group" asChild>
              <Link to="/waitlist">
                Get involved
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-0.5 transition-transform" />
              </Link>
            </Button>
          </div>

          {/* Links + Newsletter */}
          <div className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-6">
            <div>
              <h3 className="text-xs font-semibold uppercase tracking-wider text-foreground/50 mb-2">
                Pages
              </h3>
              <ul className="space-y-2">
                {pageLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      to={link.href}
                      className={`text-sm text-foreground/80 transition-colors duration-300 ${link.color}`}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-xs font-semibold uppercase tracking-wider text-foreground/50 mb-2">
                Actions
              </h3>
              <ul className="space-y-2">
                {actionLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      to={link.href}
                      className={`text-sm text-foreground/80 transition-colors duration-300 ${link.color}`}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="col-span-2 sm:col-span-1">
              <h3 className="text-xs font-semibold uppercase tracking-wider text-foreground/50 mb-2">
                Newsletter
              </h3>
              <p className="text-sm text-foreground/60 mb-3">
                Updates on the creative economy.
              </p>
              <form
                className="flex flex-col gap-2"
                onSubmit={(e) => e.preventDefault()}
              >
                <Input
                  type="email"
                  placeholder="you@example.com"
                  className="w-full bg-background border-border focus-visible:ring-[hsl(var(--rainbow-orange))]"
                  aria-label="Email for newsletter"
                />
                <Button type="submit" variant="cta" size="sm" className="w-full sm:w-auto">
                  Subscribe
                </Button>
              </form>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-6 pt-6 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-foreground/50">
            © {new Date().getFullYear()} Bunifu Capital
          </p>
          <div className="flex items-center gap-6 text-xs">
            <a href="#" className="text-foreground/50 hover:text-foreground/80 transition-colors">
              Privacy
            </a>
            <a href="#" className="text-foreground/50 hover:text-foreground/80 transition-colors">
              Terms
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
