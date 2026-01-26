import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown, Search, User, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";

const navItems = [
  { label: "Platform", hasDropdown: true },
  { label: "Solutions", hasDropdown: true },
  { label: "Resources", hasDropdown: true },
  { label: "Partners", hasDropdown: true },
  { label: "Why Netwrix", hasDropdown: true },
  { label: "Pricing", hasDropdown: false },
];

const topNavItems = [
  { label: "Contact us" },
  { label: "Support" },
  { label: "Community" },
];

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      {/* Top bar */}
      <div className="bg-primary text-primary-foreground/80 text-xs">
        <div className="container mx-auto px-4 flex items-center justify-between h-8">
          <div className="flex items-center gap-1 text-primary-foreground">
            <span className="text-accent">★</span>
            <span>Magic Quadrant™ for Privileged Access Management 2024.</span>
            <a href="#" className="text-accent hover:underline ml-1">
              Netwrix Recognized for first time. Download the report
            </a>
          </div>
          <div className="hidden lg:flex items-center gap-6">
            {topNavItems.map((item) => (
              <a
                key={item.label}
                href="#"
                className="hover:text-primary-foreground transition-colors"
              >
                {item.label}
              </a>
            ))}
            <div className="flex items-center gap-4 ml-4 pl-4 border-l border-primary-foreground/20">
              <button className="hover:text-primary-foreground transition-colors">
                <User className="w-4 h-4" />
              </button>
              <button className="hover:text-primary-foreground transition-colors">
                <Search className="w-4 h-4" />
              </button>
              <button className="flex items-center gap-1 hover:text-primary-foreground transition-colors">
                <Globe className="w-4 h-4" />
                <span>EN</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <div className="bg-background/95 backdrop-blur-md border-b border-border">
        <div className="container mx-auto px-4 flex items-center justify-between h-16">
          {/* Logo */}
          <a href="/" className="flex items-center">
            <span className="text-2xl font-bold text-primary">
              <span className="text-accent">/</span>netwrix
            </span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <a
                key={item.label}
                href="#"
                className="nav-link flex items-center gap-1 px-4 py-2 text-foreground/80 hover:text-foreground"
              >
                {item.label}
                {item.hasDropdown && <ChevronDown className="w-4 h-4" />}
              </a>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <Button variant="navCta" size="default">
              Get a demo
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-background border-b border-border"
          >
            <nav className="container mx-auto px-4 py-4 flex flex-col gap-2">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href="#"
                  className="flex items-center justify-between py-3 border-b border-border/50 text-foreground"
                >
                  {item.label}
                  {item.hasDropdown && <ChevronDown className="w-4 h-4" />}
                </a>
              ))}
              <Button variant="cta" className="mt-4 w-full">
                Get a demo
              </Button>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
