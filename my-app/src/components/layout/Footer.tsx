export function Footer() {
  return (
    <footer className="netwrix-section bg-background">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-x-10 gap-y-10">
          <div>
            <h3 className="font-semibold mb-4">Solutions</h3>
            <ul className="space-y-2 text-sm text-foreground/70">
              {[
                { text: "Our Platform", color: "hover:text-rainbow-red" },
                { text: "Data Security Posture Management", color: "hover:text-rainbow-orange" },
                { text: "Directory Management", color: "hover:text-rainbow-yellow" },
                { text: "Endpoint Management", color: "hover:text-rainbow-green" },
                { text: "Identity Management", color: "hover:text-rainbow-blue" },
                { text: "Identity Threat Detection & Response", color: "hover:text-rainbow-indigo" },
                { text: "Privileged Access Management", color: "hover:text-rainbow-violet" },
                { text: "Environments", color: "hover:text-rainbow-red" },
                { text: "Integrations", color: "hover:text-rainbow-orange" },
              ].map((item, idx) => (
                <li key={idx}><a className={`transition-colors duration-300 ${item.color}`} href="#">{item.text}</a></li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Products</h3>
            <ul className="space-y-2 text-sm text-foreground/70">
              {[
                { text: "Bunifu Capital Platform", color: "hover:text-rainbow-yellow" },
                { text: "Access Analyzer", color: "hover:text-rainbow-green" },
                { text: "Financial Auditor", color: "hover:text-rainbow-blue" },
                { text: "Directory Manager", color: "hover:text-rainbow-indigo" },
                { text: "Endpoint Protector", color: "hover:text-rainbow-violet" },
                { text: "Identity Manager", color: "hover:text-rainbow-red" },
                { text: "Privilege Secure", color: "hover:text-rainbow-orange" },
              ].map((item, idx) => (
                <li key={idx}><a className={`transition-colors duration-300 ${item.color}`} href="#">{item.text}</a></li>
              ))}
              <li><a className="text-gradient bg-rainbow-gradient bg-[length:200%_200%] animate-rainbow-shift bg-clip-text text-transparent hover:underline underline-offset-4 transition-all duration-300" href="#">See All Products</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Resources</h3>
            <ul className="space-y-2 text-sm text-foreground/70">
              <li><a className="hover:text-foreground" href="#">Blog</a></li>
              <li><a className="hover:text-foreground" href="#">Cybersecurity Glossary</a></li>
              <li><a className="hover:text-foreground" href="#">Documentation</a></li>
              <li><a className="hover:text-foreground" href="#">Freeware</a></li>
              <li><a className="hover:text-foreground" href="#">News</a></li>
              <li><a className="hover:text-foreground" href="#">Publications</a></li>
              <li><a className="hover:text-foreground" href="#">Research</a></li>
              <li><a className="hover:text-foreground" href="#">Webinars</a></li>
              <li><a className="text-accent hover:underline underline-offset-4" href="#">See All Resources</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Partners</h3>
            <ul className="space-y-2 text-sm text-foreground/70">
              <li><a className="hover:text-rainbow-green transition-colors duration-300" href="#">Partner Program</a></li>
              <li><a className="hover:text-rainbow-blue transition-colors duration-300" href="#">Become a Partner</a></li>
              <li><a className="hover:text-rainbow-indigo transition-colors duration-300" href="#">MSPs</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-10 border-t border-border grid grid-cols-2 md:grid-cols-3 gap-x-10 gap-y-10">
          <div>
            <h3 className="font-semibold mb-4">Customers</h3>
            <ul className="space-y-2 text-sm text-foreground/70">
              {[
                { text: "Customer Portal", color: "hover:text-rainbow-violet" },
                { text: "Customer Training", color: "hover:text-rainbow-red" },
                { text: "Renew License", color: "hover:text-rainbow-orange" },
                { text: "Professional Services", color: "hover:text-rainbow-yellow" },
                { text: "Support", color: "hover:text-rainbow-green" },
                { text: "Knowledge Center", color: "hover:text-rainbow-blue" },
              ].map((item, idx) => (
                <li key={idx}><a className={`transition-colors duration-300 ${item.color}`} href="#">{item.text}</a></li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Why Netwrix</h3>
            <ul className="space-y-2 text-sm text-foreground/70">
              {[
                { text: "About Us", color: "hover:text-rainbow-indigo" },
                { text: "Leadership", color: "hover:text-rainbow-violet" },
                { text: "Bunifu AI", color: "hover:text-rainbow-red" },
                { text: "Careers", color: "hover:text-rainbow-orange" },
                { text: "News", color: "hover:text-rainbow-yellow" },
                { text: "Recognition", color: "hover:text-rainbow-green" },
              ].map((item, idx) => (
                <li key={idx}><a className={`transition-colors duration-300 ${item.color}`} href="#">{item.text}</a></li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Compliance</h3>
            <ul className="space-y-2 text-sm text-foreground/70">
              {[
                { text: "CMMC", color: "hover:text-rainbow-blue" },
                { text: "ISO", color: "hover:text-rainbow-indigo" },
                { text: "HIPAA", color: "hover:text-rainbow-violet" },
                { text: "NIST CSF", color: "hover:text-rainbow-red" },
                { text: "PCI DSS", color: "hover:text-rainbow-orange" },
                { text: "TISAX", color: "hover:text-rainbow-yellow" },
              ].map((item, idx) => (
                <li key={idx}><a className={`transition-colors duration-300 ${item.color}`} href="#">{item.text}</a></li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <div className="text-2xl font-semibold tracking-tight mb-2 rainbow-hover">Bunifu Capital</div>
            <p className="text-sm text-foreground/60">
              Corporate Headquarters: 6160 Warren Parkway, Suite 100, Frisco, TX, US 75034
            </p>
          </div>
          <p className="text-sm text-foreground/60">
            © {new Date().getFullYear()} Bunifu Capital Corporation
          </p>
        </div>
      </div>
    </footer>
  );
}
