import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

const testimonials = [
  {
    quote: "We don't like vendors; we like partnerships. Netwrix has virtually become part of our staff.",
    author: "John Adams",
    role: "IT Director",
    company: "Washington County, Arkansas",
  },
  {
    quote: "I hope Netwrix never changes their support - you guys are top notch!",
    author: "Michael Nedbal",
    role: "VP Operations",
    company: "Makai Ocean Engineering, Inc.",
  },
  {
    quote: "Netwrix is a great company. They stand behind their products and provide great support and customer service.",
    author: "Anonymous",
    role: "IT Assistant Manager",
    company: "Healthcare/biotech",
  },
  {
    quote: "I foresee a long business relationship with Netwrix based on support's knowledge, expertise, and especially their follow-up to make sure the issue was resolved.",
    author: "Jim Stanton",
    role: "Information Technology Manager",
    company: "Palmdale Water District",
  },
  {
    quote: "10 out of 10 - prompt response and very satisfied.",
    author: "Andrew Warby",
    role: "Senior Network Admin",
    company: "CRA International",
  },
  {
    quote: "The customer support is just great. Netwrix is not a company that just wants to sell you a solution and go on to the next client.",
    author: "Vladimir Svidesskis",
    role: "Information Security Director",
    company: "The Georgia Lottery Corporation",
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
          <p className="text-accent font-medium mb-3">Trusted by professionals</p>
          <h2 className="text-4xl md:text-6xl font-semibold tracking-tight mb-2">
            Don't just take our word for it
          </h2>
        </motion.div>

        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-3">
            <button
              type="button"
              aria-label="Previous"
              onClick={() => emblaApi?.scrollPrev()}
              className="p-2 rounded-full hover:bg-foreground/5"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>
            <button
              type="button"
              aria-label="Next"
              onClick={() => emblaApi?.scrollNext()}
              className="p-2 rounded-full hover:bg-foreground/5"
            >
              <ChevronRight className="h-6 w-6" />
            </button>
          </div>
          <a href="#" className="text-accent font-medium hover:underline underline-offset-4">
            See All Customer Stories →
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
                <div className="p-8">
                  <Quote className="h-10 w-10 text-accent mb-6" />
                  <p className="text-xl leading-relaxed text-foreground/90">
                    “{testimonial.quote}”
                  </p>
                  <div className="mt-8 text-sm text-foreground/70">
                    <div className="font-medium text-foreground">{testimonial.author}</div>
                    <div>
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
