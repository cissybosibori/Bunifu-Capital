export function Footer() {
  return (
    <footer className="netwrix-section bg-background">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-x-10 gap-y-10">
          <div>
            <h3 className="font-semibold mb-4">Solutions</h3>
            <ul className="space-y-2 text-sm text-foreground/70">
              <li><a className="hover:text-foreground" href="#">Our Platform</a></li>
              <li><a className="hover:text-foreground" href="#">Data Security Posture Management</a></li>
              <li><a className="hover:text-foreground" href="#">Directory Management</a></li>
              <li><a className="hover:text-foreground" href="#">Endpoint Management</a></li>
              <li><a className="hover:text-foreground" href="#">Identity Management</a></li>
              <li><a className="hover:text-foreground" href="#">Identity Threat Detection & Response</a></li>
              <li><a className="hover:text-foreground" href="#">Privileged Access Management</a></li>
              <li><a className="hover:text-foreground" href="#">Environments</a></li>
              <li><a className="hover:text-foreground" href="#">Integrations</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Products</h3>
            <ul className="space-y-2 text-sm text-foreground/70">
              <li><a className="hover:text-foreground" href="#">Netwrix 1Secure for MSPs</a></li>
              <li><a className="hover:text-foreground" href="#">Netwrix Access Analyzer</a></li>
              <li><a className="hover:text-foreground" href="#">Netwrix Auditor</a></li>
              <li><a className="hover:text-foreground" href="#">Netwrix Directory Manager</a></li>
              <li><a className="hover:text-foreground" href="#">Netwrix Endpoint Protector</a></li>
              <li><a className="hover:text-foreground" href="#">Netwrix Identity Manager</a></li>
              <li><a className="hover:text-foreground" href="#">Netwrix Privilege Secure</a></li>
              <li><a className="text-accent hover:underline underline-offset-4" href="#">See All Products</a></li>
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
              <li><a className="hover:text-foreground" href="#">Partner Program</a></li>
              <li><a className="hover:text-foreground" href="#">Become a Partner</a></li>
              <li><a className="hover:text-foreground" href="#">MSPs</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-10 border-t border-border grid grid-cols-2 md:grid-cols-3 gap-x-10 gap-y-10">
          <div>
            <h3 className="font-semibold mb-4">Customers</h3>
            <ul className="space-y-2 text-sm text-foreground/70">
              <li><a className="hover:text-foreground" href="#">Customer Portal</a></li>
              <li><a className="hover:text-foreground" href="#">Customer Training</a></li>
              <li><a className="hover:text-foreground" href="#">Renew License</a></li>
              <li><a className="hover:text-foreground" href="#">Professional Services</a></li>
              <li><a className="hover:text-foreground" href="#">Support</a></li>
              <li><a className="hover:text-foreground" href="#">Knowledge Center</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Why Netwrix</h3>
            <ul className="space-y-2 text-sm text-foreground/70">
              <li><a className="hover:text-foreground" href="#">About Us</a></li>
              <li><a className="hover:text-foreground" href="#">Leadership</a></li>
              <li><a className="hover:text-foreground" href="#">Netwrix AI</a></li>
              <li><a className="hover:text-foreground" href="#">Careers</a></li>
              <li><a className="hover:text-foreground" href="#">News</a></li>
              <li><a className="hover:text-foreground" href="#">Recognition</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Compliance</h3>
            <ul className="space-y-2 text-sm text-foreground/70">
              <li><a className="hover:text-foreground" href="#">CMMC</a></li>
              <li><a className="hover:text-foreground" href="#">ISO</a></li>
              <li><a className="hover:text-foreground" href="#">HIPAA</a></li>
              <li><a className="hover:text-foreground" href="#">NIST CSF</a></li>
              <li><a className="hover:text-foreground" href="#">PCI DSS</a></li>
              <li><a className="hover:text-foreground" href="#">TISAX</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <div className="text-2xl font-semibold tracking-tight mb-2">netwrix</div>
            <p className="text-sm text-foreground/60">
              Corporate Headquarters: 6160 Warren Parkway, Suite 100, Frisco, TX, US 75034
            </p>
          </div>
          <p className="text-sm text-foreground/60">
            © {new Date().getFullYear()} Netwrix Corporation
          </p>
        </div>
      </div>
    </footer>
  );
}
