import { motion } from "framer-motion";
import { Calendar, Mic, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const resources = [
  {
    type: "Upcoming Webinar",
    icon: Calendar,
    title: "Securing Data in the Age of AI with DSPM",
    author: "Martin Cannard",
    category: "Data Security Posture Management",
    image: "https://cdn.sanity.io/images/r09655ln/production/edd4c4d3aa8c098c66670845a5d8f3cd7032b086-679x800.jpg",
  },
  {
    type: "Podcasts",
    icon: Mic,
    title: "Voices of Cyber Asia: Episode 4- Why Visibility Comes First",
    author: "Terry Burgess, Anthony Moillic",
    category: "Security Insights",
    image: "https://cdn.sanity.io/images/r09655ln/production/9a693809be358a6a558a0b520c6d33d127a072d6-300x300.jpg",
  },
];

export function ResourcesSection() {
  return (
    <section className="py-20 lg:py-32 bg-secondary/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col md:flex-row md:items-end justify-between mb-12"
        >
          <div>
            <span className="inline-block px-4 py-1.5 rounded-full bg-accent/10 text-accent text-sm font-medium mb-4">
              Featured resources
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Geek out with us
            </h2>
          </div>
          <Button variant="outline" className="mt-4 md:mt-0 group">
            Resource center
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Button>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {resources.map((resource, index) => (
            <motion.article
              key={resource.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group bg-card rounded-2xl overflow-hidden border border-border card-hover cursor-pointer"
            >
              <div className="aspect-video overflow-hidden">
                <img
                  src={resource.image}
                  alt={resource.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2 text-accent text-sm font-medium mb-3">
                  <resource.icon className="w-4 h-4" />
                  {resource.type}
                </div>
                <h3 className="text-xl font-semibold text-card-foreground mb-2 group-hover:text-accent transition-colors">
                  {resource.title}
                </h3>
                <p className="text-sm text-muted-foreground mb-4">
                  {resource.author}
                </p>
                <span className="inline-block px-3 py-1 rounded-full bg-secondary text-xs font-medium text-secondary-foreground">
                  {resource.category}
                </span>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
