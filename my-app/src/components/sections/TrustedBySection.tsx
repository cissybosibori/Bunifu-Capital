import { motion } from "framer-motion";

const logos = [
  { name: "Samsung", url: "https://cdn.sanity.io/images/r09655ln/production/fdea939690b7d45d191565dabec450445afb29a4-200x100.webp" },
  { name: "IBM", url: "https://cdn.sanity.io/images/r09655ln/production/2d3e2da4774ece31137ed6df9e2fd6af1199d073-180x100.webp" },
  { name: "UCLA", url: "https://cdn.sanity.io/images/r09655ln/production/c3d898b2b63cef9bc94471869537e19f5ac0f5de-275x100.webp" },
  { name: "JetBlue", url: "https://cdn.sanity.io/images/r09655ln/production/5f8a8872af33fa90481897f62e739aef7c655826-197x100.webp" },
  { name: "Uber Freight", url: "https://cdn.sanity.io/images/r09655ln/production/f535f1126b8dbed9dd2457901159003a6a93e1fd-291x100.webp" },
  { name: "US Marine Corps", url: "https://cdn.sanity.io/images/r09655ln/production/4a382767fed7cfbe110c2d4a5872b954e7feff4a-102x100.webp" },
  { name: "Veterans Affairs", url: "https://cdn.sanity.io/images/r09655ln/production/b83a862f428ef3fc189af09f80cc050192f0aeb8-300x100.webp" },
  { name: "King's Hawaiian", url: "https://cdn.sanity.io/images/r09655ln/production/2bb3f7b056f68a061c9d7a6b4cc3ef8d38e2adf2-154x100.webp" },
];

export function TrustedBySection() {
  return (
    <section className="netwrix-section border-b border-border bg-background">
      <div className="container mx-auto px-4">
        <a href="#" className="block py-10 lg:py-12">
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.45 }}
            className="flex flex-col items-center gap-4"
          >
            <span className="text-accent font-medium">Read their Stories</span>
            <div className="flex items-center gap-3 text-muted-foreground">
              <span>Trusted by</span>
            </div>

            <div className="relative w-full overflow-hidden">
              <div className="flex items-center gap-10 logo-scroll">
                {[...logos, ...logos].map((logo, index) => (
                  <div
                    key={`${logo.name}-${index}`}
                    className="flex-shrink-0 h-10 w-32 flex items-center justify-center opacity-70 hover:opacity-100 transition-opacity duration-300"
                  >
                    <img src={logo.url} alt={logo.name} className="max-h-full max-w-full object-contain grayscale" />
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </a>
      </div>
    </section>
  );
}

