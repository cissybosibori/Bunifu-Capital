import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, ChevronRight } from "lucide-react";

const faqItems: { question: string; answer: string }[] = [
  {
    question: "When is the launch date?",
    answer: "We're in pre-launch. Join the waitlist to be notified when we go live and to help shape what we build.",
  },
  {
    question: "What is the pricing?",
    answer: "Pricing will be announced at launch. Check our Pricing page or join the waitlist for early updates.",
  },
  {
    question: "Is it an app or a website (PWA)?",
    answer: "Bunifu Capital will be available as a web experience with PWA support so you can use it like an app on your device.",
  },
  {
    question: "How do I get more info?",
    answer: "Sign up for the waitlist, follow our updates, or get in touch via the Get involved page for demos and conversations.",
  },
  {
    question: "Do you connect with financial institutions?",
    answer: "Yes. We're building infrastructure to connect creative income with capital and work with banks, lenders, and investors.",
  },
  {
    question: "Are you giving credit?",
    answer: "We standardize and translate creative income into signals that financial institutions can use. Lending and credit decisions are made by our partners; we enable the connection.",
  },
];

export function StayUpdatedSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="bunifu-section bg-background py-16 lg:py-24">
      <div className="container mx-auto px-4">
        <div className="border border-border grid md:grid-cols-2">
          {/* Stay updated */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.45 }}
            className="p-8 md:p-10 border-b border-border md:border-b-0 md:border-r border-border"
          >
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-2">
              <span className="text-gradient bg-rainbow-gradient bg-[length:200%_200%] animate-rainbow-shift bg-clip-text text-transparent">Stay updated.</span>
            </h2>
            <p className="text-foreground/70 mb-8">Get the latest Bunifu Capital news and product updates</p>

            <label className="block text-sm font-medium mb-2" htmlFor="work-email">
              Work Email*
            </label>
            <div className="flex items-center gap-3">
              <input
                id="work-email"
                type="email"
                placeholder=""
                className="w-full h-12 px-4 bg-transparent border-2 border-rainbow-violet/30 focus:outline-none focus:ring-2 focus:ring-rainbow-violet focus:border-rainbow-violet transition-all duration-300 hover:border-rainbow-gradient"
              />
              <button
                type="button"
                aria-label="Submit email"
                className="h-12 w-12 flex items-center justify-center border-2 border-rainbow-gradient bg-rainbow-gradient bg-[length:200%_200%] animate-rainbow-shift hover:scale-110 hover:shadow-lg hover:shadow-rainbow-violet/30 transition-all duration-300"
              >
                <ArrowRight className="h-5 w-5 text-white" />
              </button>
            </div>

            <p className="mt-4 text-sm text-foreground/60">
              We care about the security of your data.{" "}
              <a className="text-accent underline underline-offset-4" href="#">
                Privacy Policy
              </a>
              .
            </p>
          </motion.div>

          {/* Frequently asked questions */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.45, delay: 0.05 }}
            className="p-8 md:p-10"
          >
            <h3 className="text-xl font-semibold mb-6">Frequently asked questions</h3>
            <div className="divide-y divide-border">
              {faqItems.map((item, index) => {
                const isOpen = openIndex === index;
                const rainbowColors = [
                  'hover:text-rainbow-red',
                  'hover:text-rainbow-orange',
                  'hover:text-rainbow-yellow',
                  'hover:text-rainbow-green',
                  'hover:text-rainbow-blue',
                ];
                const hoverColor = rainbowColors[index % 5];
                const rainbowNames = ['red', 'orange', 'yellow', 'green', 'blue'] as const;
                const iconColor = rainbowNames[index % 5];
                return (
                  <div key={item.question} className="py-0">
                    <button
                      type="button"
                      onClick={() => setOpenIndex(isOpen ? null : index)}
                      className={`article-link group flex w-full items-center justify-between gap-4 py-4 px-2 -mx-2 text-left text-foreground/80 ${hoverColor} hover:bg-gradient-to-r hover:from-rainbow-red/5 hover:to-transparent transition-all duration-300`}
                    >
                      <span className="transition-transform duration-200 group-hover:translate-x-1">{item.question}</span>
                      <ChevronRight
                        className={`h-5 w-5 shrink-0 transition-all duration-200 ${isOpen ? 'rotate-90 opacity-100' : 'opacity-0 translate-x-1 group-hover:opacity-100 group-hover:translate-x-0'}`}
                        style={{
                          color: `hsl(var(--rainbow-${iconColor}))`,
                        }}
                      />
                    </button>
                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.25 }}
                          className="overflow-hidden"
                        >
                          <p className="pb-4 pt-0 px-2 -mx-2 text-foreground/70 text-sm leading-relaxed">
                            {item.answer}
                          </p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

