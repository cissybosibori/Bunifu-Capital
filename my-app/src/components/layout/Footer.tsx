import { Link } from "react-router-dom";

export function Footer() {
  return (
    <footer className="netwrix-section bg-background">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-x-8 gap-y-8">
          <div>
            <h3 className="font-semibold mb-4">Pages</h3>
            <ul className="space-y-2 text-sm text-foreground/70">
              <li>
                <Link to="/creatives" className="hover:text-rainbow-red transition-colors duration-300">
                  Creatives
                </Link>
              </li>
              <li>
                <Link to="/financial-institutions" className="hover:text-rainbow-orange transition-colors duration-300">
                  Institutions
                </Link>
              </li>
              <li>
                <Link to="/partnerships" className="hover:text-rainbow-yellow transition-colors duration-300">
                  Partners
                </Link>
              </li>
              <li>
                <Link to="/resources" className="hover:text-rainbow-green transition-colors duration-300">
                  Resources
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Actions</h3>
            <ul className="space-y-2 text-sm text-foreground/70">
              <li>
                <Link to="/waitlist" className="hover:text-rainbow-blue transition-colors duration-300">
                  Join Waitlist
                </Link>
              </li>
              <li>
                <Link to="/pricing" className="hover:text-rainbow-indigo transition-colors duration-300">
                  Pricing
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-border flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div className="text-2xl font-semibold tracking-tight rainbow-hover">Bunifu Capital</div>
          <p className="text-sm text-foreground/60">
            © {new Date().getFullYear()} Bunifu Capital Corporation
          </p>
        </div>
      </div>
    </footer>
  );
}
