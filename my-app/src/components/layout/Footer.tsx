import { motion } from "framer-motion";
import { Linkedin, Twitter, Youtube, Facebook } from "lucide-react";

const footerLinks = {
  Platform: ["1Secure", "Data Security Posture Management", "Directory Management", "Endpoint Management", "Identity Management"],
  Solutions: ["Access Control", "Compliance", "Data Protection", "Threat Detection", "Privileged Access"],
  Resources: ["Blog", "Webinars", "Case Studies", "Whitepapers", "Documentation"],
  Company: ["About Us", "Careers", "Partners", "Contact", "Press"],
};

const socialLinks = [
  { icon: Linkedin, href: "#" },
  { icon: Twitter, href: "#" },
  { icon: Youtube, href: "#" },
  { icon: Facebook, href: "#" },
];

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 mb-12">
          {/* Logo and description */}
          <div className="col-span-2 md:col-span-4 lg:col-span-1 mb-8 lg:mb-0">
            <motion.a
              href="/"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="inline-block mb-4"
            >
              <span className="text-2xl font-bold">
                <span className="text-accent">/</span>netwrix
              </span>
            </motion.a>
            <p className="text-primary-foreground/70 text-sm mb-6">
              Data security that starts with identity™
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-accent hover:text-navy transition-colors"
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Footer links */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h3 className="font-semibold mb-4">{title}</h3>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-sm text-primary-foreground/70 hover:text-accent transition-colors"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="border-t border-primary-foreground/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-primary-foreground/50">
            © {new Date().getFullYear()} Netwrix Corporation. All rights reserved.
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-sm text-primary-foreground/50">
            <a href="#" className="hover:text-accent transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-accent transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-accent transition-colors">Cookie Settings</a>
            <a href="#" className="hover:text-accent transition-colors">Legal</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
