import { motion } from "framer-motion";
import { Building2 } from "lucide-react";

const platforms = [
  { name: "TikTok", logo: "https://logos-world.net/wp-content/uploads/2021/04/TikTok-Logo.png" },
  { name: "Instagram", logo: "https://logos-world.net/wp-content/uploads/2017/04/Instagram-Logo.png" },
  { name: "YouTube", logo: "https://logos-world.net/wp-content/uploads/2020/04/YouTube-Logo.png" },
  { name: "Spotify", logo: "https://logos-world.net/wp-content/uploads/2020/09/Spotify-Logo.png" },
  { name: "M-Pesa", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/M-PESA_LOGO-01.svg/2560px-M-PESA_LOGO-01.svg.png" },
  { name: "Shopify", logo: "https://logos-world.net/wp-content/uploads/2020/11/Shopify-Logo.png" },
  { name: "Bank", isIcon: true },
];

export function TrustedBySection() {
  return (
    <section className="netwrix-section border-b border-border bg-background">
      <div className="container mx-auto px-4 py-10 lg:py-12">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.45 }}
          className="flex flex-col items-center gap-6"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight text-center">
            Creative income lives across{" "}
            <span className="text-gradient bg-rainbow-gradient bg-[length:200%_200%] animate-rainbow-shift bg-clip-text text-transparent">platforms</span>
          </h2>

          <div className="relative w-full overflow-hidden mt-4">
            <div className="flex items-center gap-10 logo-scroll">
              {[...platforms, ...platforms].map((platform, index) => (
                <div
                  key={`${platform.name}-${index}`}
                  className="flex-shrink-0 h-12 w-32 flex items-center justify-center opacity-70 hover:opacity-100 transition-opacity duration-300"
                >
                  {platform.isIcon ? (
                    <Building2 className="h-10 w-10 text-foreground/60" />
                  ) : (
                    <img 
                      src={platform.logo} 
                      alt={platform.name} 
                      className="max-h-full max-w-full object-contain" 
                    />
                  )}
                </div>
              ))}
            </div>
          </div>

          <p className="text-lg text-foreground/70 text-center max-w-2xl mt-6">
            Bunifu Capital connects to those platforms. Data is unified into one{" "}
            <span className="text-gradient bg-rainbow-gradient bg-[length:200%_200%] animate-rainbow-shift bg-clip-text text-transparent font-semibold">financial profile</span>.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

