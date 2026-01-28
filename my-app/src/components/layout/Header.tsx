import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown, Search, User, Globe } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const navItems = [
  { label: "For Creatives", href: "/creatives", hasDropdown: false },
  { label: "For Institutions", href: "/financial-institutions", hasDropdown: false },
  { label: "Partnerships", href: "/partnerships", hasDropdown: false },
  { label: "Resources", href: "/resources", hasDropdown: false },
  { label: "Get involved", href: "/waitlist", hasDropdown: false },
];

const BANNER_DISMISSED_KEY = "bunifu_report_banner_dismissed_v1";

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [bannerVisible, setBannerVisible] = useState(() => {
    try {
      return localStorage.getItem(BANNER_DISMISSED_KEY) !== "1";
    } catch {
      return true;
    }
  });

  const dismissBanner = () => {
    try {
      localStorage.setItem(BANNER_DISMISSED_KEY, "1");
    } catch {
      // ignore
    }
    setBannerVisible(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      {/* Announcement banner */}
      <AnimatePresence initial={false}>
        {bannerVisible && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 44, opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="bg-rainbow-gradient bg-[length:200%_200%] animate-rainbow-shift text-white"
          >
            <div className="container mx-auto px-4 h-11 flex items-center justify-center text-sm relative">
              <p className="text-center max-w-3xl">
                Magic Quadrant™ for Privileged Access Management 2025: Netwrix Recognized for the Fourth Year in a Row.{" "}
                <a href="#" className="underline underline-offset-4">
                  Download the report.
                </a>
              </p>
              <button
                type="button"
                aria-label="Close banner"
                onClick={dismissBanner}
                className="absolute right-4 top-1/2 -translate-y-1/2 opacity-90 hover:opacity-100"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main navigation */}
      <div className="bg-background border-b border-border">
        <div className="container mx-auto px-4 flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center text-2xl font-semibold tracking-tight rainbow-hover">
            Bunifu Capital
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {navItems.map((item, index) => {
              const rainbowColors = [
                'hover:text-rainbow-red',
                'hover:text-rainbow-orange',
                'hover:text-rainbow-yellow',
                'hover:text-rainbow-green',
                'hover:text-rainbow-blue',
                'hover:text-rainbow-indigo',
                'hover:text-rainbow-violet',
              ];
              const hoverColor = rainbowColors[index % 7];
              return (
                <Link
                  key={item.label}
                  to={item.href || "#"}
                  className={`flex items-center gap-1 px-4 py-2 text-sm text-foreground/80 ${hoverColor} transition-all duration-300 relative group`}
                >
                  {item.label}
                  {item.hasDropdown && <ChevronDown className="w-4 h-4 group-hover:rotate-180 transition-transform duration-300" />}
                  <span className={`absolute bottom-0 left-4 right-4 h-0.5 bg-gradient-to-r ${index % 7 === 0 ? 'from-rainbow-red' : index % 7 === 1 ? 'from-rainbow-orange' : index % 7 === 2 ? 'from-rainbow-yellow' : index % 7 === 3 ? 'from-rainbow-green' : index % 7 === 4 ? 'from-rainbow-blue' : index % 7 === 5 ? 'from-rainbow-indigo' : 'from-rainbow-violet'} to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left`} />
                </Link>
              );
            })}
          </nav>

          {/* Right side actions */}
          <div className="hidden lg:flex items-center gap-3">
            <button className="p-2 rounded-full hover:bg-rainbow-red/10 hover:text-rainbow-red transition-all duration-300" aria-label="Search">
              <Search className="w-5 h-5" />
            </button>
            <button className="p-2 rounded-full hover:bg-rainbow-blue/10 hover:text-rainbow-blue transition-all duration-300" aria-label="Account">
              <User className="w-5 h-5" />
            </button>
            <Button variant="navCta" size="default" asChild>
              <Link to="/waitlist">Join waitlist</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center gap-2">
            <button className="p-2 rounded-full hover:bg-rainbow-green/10 hover:text-rainbow-green transition-all duration-300" aria-label="Language">
              <Globe className="w-5 h-5" />
            </button>
            <button className="p-2 rounded-full hover:bg-rainbow-violet/10 hover:text-rainbow-violet transition-all duration-300" aria-label="Menu" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
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
              {navItems.map((item, index) => {
                const rainbowColors = [
                  'hover:text-rainbow-red hover:border-rainbow-red',
                  'hover:text-rainbow-orange hover:border-rainbow-orange',
                  'hover:text-rainbow-yellow hover:border-rainbow-yellow',
                  'hover:text-rainbow-green hover:border-rainbow-green',
                  'hover:text-rainbow-blue hover:border-rainbow-blue',
                  'hover:text-rainbow-indigo hover:border-rainbow-indigo',
                  'hover:text-rainbow-violet hover:border-rainbow-violet',
                ];
                const hoverColor = rainbowColors[index % 7];
                return (
                  <Link
                    key={item.label}
                    to={item.href || "#"}
                    className={`flex items-center justify-between py-3 border-b border-border/50 text-foreground transition-all duration-300 ${hoverColor}`}
                  >
                    {item.label}
                    {item.hasDropdown && <ChevronDown className="w-4 h-4" />}
                  </Link>
                );
              })}
              <Button variant="cta" className="mt-4 w-full" asChild>
                <Link to="/waitlist">Join waitlist</Link>
              </Button>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
