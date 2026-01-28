import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

const testimonials = [
  {
    quote: "The creative economy represents one of the largest untapped markets for financial services. Bunifu Capital is building the infrastructure needed to unlock this potential.",
    author: "Advisor",
    role: "Financial Technology",
    company: "Early Supporter",
  },
  {
    quote: "Creative income is real income, but it doesn't fit traditional financial models. This platform addresses a fundamental gap in how we understand and value creative work.",
    author: "Partner",
    role: "Creative Economy",
    company: "Ecosystem Voice",
  },
  {
    quote: "The scale of the creative economy is massive, but access to capital remains limited. Infrastructure like this is essential for bridging that gap.",
    author: "Investor",
    role: "Fintech & Impact",
    company: "Early Supporter",
  },
  {
    quote: "Banks need better ways to assess creative income. This approach of standardizing and analyzing fragmented income streams makes sense for both creatives and financial institutions.",
    author: "Partner",
    role: "Banking Innovation",
    company: "Financial Services",
  },
];

export function TestimonialsSection() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: "start" });
  const sectionRef = useRef<HTMLElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start 0.9", "start 0.35"],
  });
  const fadeIn = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <motion.section
      ref={sectionRef}
      style={{ opacity: fadeIn }}
      className="netwrix-section py-16 lg:py-24 bg-background"
    >
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <p className="text-gradient bg-rainbow-gradient bg-[length:200%_200%] animate-rainbow-shift bg-clip-text text-transparent font-medium mb-3">Early supporters</p>
          <h2 className="text-4xl md:text-6xl font-semibold tracking-tight mb-2">
            Building with{" "}
            <span className="text-gradient bg-rainbow-gradient bg-[length:200%_200%] animate-rainbow-shift bg-clip-text text-transparent">partners</span>
          </h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto mt-4">
            We're working with advisors, partners, and early supporters who see the potential in connecting creative income with capital. Their perspectives shape what we're building.
          </p>
        </motion.div>

        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-3">
            <button
              type="button"
              aria-label="Previous"
              onClick={() => emblaApi?.scrollPrev()}
              className="p-2 rounded-full hover:bg-rainbow-red/10 hover:text-rainbow-red transition-all duration-300"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>
            <button
              type="button"
              aria-label="Next"
              onClick={() => emblaApi?.scrollNext()}
              className="p-2 rounded-full hover:bg-rainbow-blue/10 hover:text-rainbow-blue transition-all duration-300"
            >
              <ChevronRight className="h-6 w-6" />
            </button>
          </div>
          <a href="#" className="text-gradient bg-rainbow-gradient bg-[length:200%_200%] animate-rainbow-shift bg-clip-text text-transparent font-medium hover:underline underline-offset-4 transition-all duration-300">
            Learn about partnerships →
          </a>
        </div>

        <div ref={emblaRef} className="overflow-hidden border border-border">
          <div className="flex">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={`${testimonial.author}-${index}`}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.4, delay: index * 0.03 }}
                className="min-w-0 flex-[0_0_100%] md:flex-[0_0_50%] lg:flex-[0_0_50%] border-r border-border last:border-r-0"
              >
                <div className="p-8 group hover:bg-gradient-to-br hover:from-rainbow-red/5 hover:via-rainbow-yellow/5 hover:to-rainbow-blue/5 transition-all duration-300">
                  <Quote 
                    className="h-10 w-10 mb-6 transition-all duration-300 group-hover:scale-110 group-hover:rotate-12"
                    style={{
                      color: `hsl(var(--rainbow-${index % 7 === 0 ? 'red' : index % 7 === 1 ? 'orange' : index % 7 === 2 ? 'yellow' : index % 7 === 3 ? 'green' : index % 7 === 4 ? 'blue' : index % 7 === 5 ? 'indigo' : 'violet'}))`,
                    }}
                  />
                  <p className="text-xl leading-relaxed text-foreground/90 group-hover:text-foreground transition-colors duration-300">
                    “{testimonial.quote}”
                  </p>
                  <div className="mt-8 text-sm text-foreground/70">
                    <div className="font-medium text-foreground group-hover:text-gradient group-hover:bg-rainbow-gradient group-hover:bg-[length:200%_200%] group-hover:animate-rainbow-shift group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">{testimonial.author}</div>
                    <div className="group-hover:text-foreground/80 transition-colors duration-300">
                      {testimonial.role}, {testimonial.company}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </motion.section>
  );
}
