import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import { Button } from "@/components/ui/button";

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
  return (
    <section className="py-20 lg:py-32 bg-secondary/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-accent/10 text-accent text-sm font-medium mb-4">
            Trusted by professionals
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Don't just take our word for it
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.author}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-card p-6 rounded-2xl border border-border card-hover"
            >
              <Quote className="w-8 h-8 text-accent/30 mb-4" />
              <p className="text-card-foreground mb-6 leading-relaxed">
                "{testimonial.quote}"
              </p>
              <div className="border-t border-border pt-4">
                <p className="font-semibold text-card-foreground">
                  {testimonial.author}
                </p>
                <p className="text-sm text-muted-foreground">
                  {testimonial.role}, {testimonial.company}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center"
        >
          <Button variant="cta" size="lg">
            See All Customer Stories
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
