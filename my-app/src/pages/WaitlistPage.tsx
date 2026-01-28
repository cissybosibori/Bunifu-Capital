import { useState } from "react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { ArrowRight, Mail, MessageSquare, Twitter, Linkedin, Github } from "lucide-react";

const faqs = [
  {
    question: "What is Bunifu Capital?",
    answer: "Bunifu Capital is building infrastructure to connect creative income with capital. We standardize, analyze, and translate fragmented creative income into financial signals that banks, lenders, and investors can understand and trust.",
  },
  {
    question: "When will the app launch?",
    answer: "We're currently in pre-launch and building our waitlist. Early access will be available to waitlist members. Join the waitlist to stay updated on our progress and be among the first to access the platform.",
  },
  {
    question: "Who is Bunifu Capital for?",
    answer: "Bunifu Capital serves three main groups: creatives who need better access to funding, financial institutions who want to serve the creative economy, and investors/partners who want to collaborate on building infrastructure for creative finance.",
  },
  {
    question: "How does the waitlist work?",
    answer: "When you join the waitlist, you'll be asked a few research questions to help us understand what features matter most to you. This helps shape what we build. You'll receive updates on our progress and early access when we launch.",
  },
  {
    question: "Is my data secure?",
    answer: "Yes. Security and privacy are core principles. Your data is encrypted, secure, and private. You control what's shared and with whom. We're building with security from the ground up.",
  },
  {
    question: "What makes Bunifu Capital different?",
    answer: "We're building infrastructure specifically for creative economies, not adapting traditional finance tools. We understand how creatives actually earn - from multiple platforms, with variable income - and we translate that into financial signals that institutions can trust.",
  },
];

const WaitlistPage = () => {
  const [step, setStep] = useState(1);
  const [waitlistData, setWaitlistData] = useState({
    name: "",
    email: "",
    userType: "",
    problems: "",
    features: "",
    industry: "",
  });
  const [contactData, setContactData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleWaitlistSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Waitlist signup:", waitlistData);
    alert("Thank you! Your response helps shape what we build.");
    setWaitlistData({
      name: "",
      email: "",
      userType: "",
      problems: "",
      features: "",
      industry: "",
    });
    setStep(1);
  };

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Contact form:", contactData);
    alert("Thank you! We'll get back to you soon.");
    setContactData({
      name: "",
      email: "",
      message: "",
    });
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="netwrix-page">
        {/* Hero Section */}
        <section className="relative overflow-hidden pt-28 pb-16 lg:pt-36 lg:pb-24 bg-background border-b border-border">
          {/* Violet/Indigo gradient theme */}
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_12%_86%,hsl(var(--rainbow-violet)/0.25),transparent_58%)]" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_92%_18%,hsl(var(--rainbow-indigo)/0.22),transparent_58%)]" />
            <div className="absolute -left-40 -bottom-44 h-[640px] w-[720px] bg-[radial-gradient(closest-side,hsl(var(--rainbow-violet)/0.35),hsl(var(--rainbow-indigo)/0.25),transparent_72%)]" />
            <div className="absolute right-0 top-0 h-[540px] w-[620px] bg-[radial-gradient(closest-side,hsl(var(--rainbow-indigo)/0.28),hsl(var(--rainbow-violet)/0.18),transparent_72%)] blur-3xl translate-x-40 -translate-y-28" />
            <div className="absolute inset-0 netwrix-grid-svg-white opacity-[0.75]" />
          </div>

          <div className="container mx-auto px-4 relative">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center max-w-4xl mx-auto"
            >
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-semibold tracking-tight leading-[0.96] mb-6">
                Join the{" "}
                <span className="text-gradient bg-gradient-to-r from-[hsl(var(--rainbow-violet))] via-[hsl(var(--rainbow-indigo))] to-[hsl(var(--rainbow-blue))] bg-[length:200%_200%] animate-rainbow-shift bg-clip-text text-transparent">waitlist</span>
              </h1>
              <p className="text-lg md:text-xl text-foreground/70 mb-8 max-w-2xl mx-auto">
                Be among the first to access Bunifu Capital. Your input shapes what we build. 
                Join early and help us create infrastructure for the creative economy.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Waitlist Form Section */}
        <section className="netwrix-section bg-background py-16 lg:py-24 relative overflow-hidden">
          <div className="pointer-events-none absolute inset-0 netwrix-grid-svg-black-lg opacity-[0.15]" />
          <div className="container mx-auto px-4 relative">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.35 }}
              transition={{ duration: 0.5 }}
              className="max-w-2xl mx-auto"
            >
              <div className="text-center mb-10">
                <p className="text-gradient bg-gradient-to-r from-[hsl(var(--rainbow-violet))] via-[hsl(var(--rainbow-indigo))] to-[hsl(var(--rainbow-blue))] bg-[length:200%_200%] animate-rainbow-shift bg-clip-text text-transparent font-medium mb-3">
                  Join early
                </p>
                <h2 className="text-4xl md:text-6xl font-semibold tracking-tight mb-4">
                  Help us build{" "}
                  <span className="text-gradient bg-gradient-to-r from-[hsl(var(--rainbow-violet))] via-[hsl(var(--rainbow-indigo))] to-[hsl(var(--rainbow-blue))] bg-[length:200%_200%] animate-rainbow-shift bg-clip-text text-transparent">
                    what you need
                  </span>
                </h2>
                <p className="text-lg text-foreground/70">
                  Your answers help shape the product. This is research, not just signup.
                </p>
              </div>

              <form onSubmit={handleWaitlistSubmit} className="space-y-6">
                {/* Step 1: Basic Info */}
                {step === 1 && (
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="space-y-6"
                  >
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium mb-2">
                        Name *
                      </label>
                      <Input
                        id="name"
                        required
                        value={waitlistData.name}
                        onChange={(e) => setWaitlistData({ ...waitlistData, name: e.target.value })}
                        className="border-2 border-rainbow-violet/30 focus:border-rainbow-violet"
                        placeholder="Your name"
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-medium mb-2">
                        Email *
                      </label>
                      <Input
                        id="email"
                        type="email"
                        required
                        value={waitlistData.email}
                        onChange={(e) => setWaitlistData({ ...waitlistData, email: e.target.value })}
                        className="border-2 border-rainbow-violet/30 focus:border-rainbow-violet"
                        placeholder="your@email.com"
                      />
                    </div>

                    <div>
                      <label htmlFor="userType" className="block text-sm font-medium mb-2">
                        I am a... *
                      </label>
                      <Select
                        value={waitlistData.userType}
                        onValueChange={(value) => setWaitlistData({ ...waitlistData, userType: value })}
                        required
                      >
                        <SelectTrigger className="border-2 border-rainbow-violet/30 focus:border-rainbow-violet">
                          <SelectValue placeholder="Select one" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="creator">Creator / Creative Professional</SelectItem>
                          <SelectItem value="financial-institution">Financial Institution</SelectItem>
                          <SelectItem value="investor">Investor / Partner</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <Button
                      type="button"
                      variant="cta"
                      size="lg"
                      className="w-full"
                      onClick={() => setStep(2)}
                      disabled={!waitlistData.name || !waitlistData.email || !waitlistData.userType}
                    >
                      Continue
                      <ArrowRight className="w-4 h-4" />
                    </Button>
                  </motion.div>
                )}

                {/* Step 2: Research Questions */}
                {step === 2 && (
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="space-y-6"
                  >
                    <div className="bg-gradient-to-r from-rainbow-violet/5 via-rainbow-indigo/5 to-rainbow-blue/5 p-6 rounded-lg border border-border">
                      <p className="text-sm font-medium">
                        Help us build what you need. These questions help shape the product.
                      </p>
                    </div>

                    {waitlistData.userType === "creator" && (
                      <>
                        <div>
                          <label htmlFor="industry" className="block text-sm font-medium mb-2">
                            What creative industry are you in?
                          </label>
                          <Select
                            value={waitlistData.industry}
                            onValueChange={(value) => setWaitlistData({ ...waitlistData, industry: value })}
                          >
                            <SelectTrigger className="border-2 border-rainbow-violet/30 focus:border-rainbow-violet">
                              <SelectValue placeholder="Select industry" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="music">Music</SelectItem>
                              <SelectItem value="video">Video / Content Creation</SelectItem>
                              <SelectItem value="writing">Writing / Publishing</SelectItem>
                              <SelectItem value="design">Design / Visual Arts</SelectItem>
                              <SelectItem value="fashion">Fashion</SelectItem>
                              <SelectItem value="other">Other</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>

                        <div>
                          <label htmlFor="problems" className="block text-sm font-medium mb-2">
                            What financial challenges do you face as a creative? *
                          </label>
                          <Textarea
                            id="problems"
                            required
                            value={waitlistData.problems}
                            onChange={(e) => setWaitlistData({ ...waitlistData, problems: e.target.value })}
                            className="border-2 border-rainbow-violet/30 focus:border-rainbow-violet min-h-[100px]"
                            placeholder="e.g., Difficulty getting loans, inconsistent income tracking, lack of financial planning tools..."
                          />
                        </div>

                        <div>
                          <label htmlFor="features" className="block text-sm font-medium mb-2">
                            What features would be most valuable to you? *
                          </label>
                          <Textarea
                            id="features"
                            required
                            value={waitlistData.features}
                            onChange={(e) => setWaitlistData({ ...waitlistData, features: e.target.value })}
                            className="border-2 border-rainbow-violet/30 focus:border-rainbow-violet min-h-[100px]"
                            placeholder="e.g., Credit score for creatives, income forecasting, comparison to peers..."
                          />
                        </div>
                      </>
                    )}

                    {waitlistData.userType === "financial-institution" && (
                      <>
                        <div>
                          <label htmlFor="problems" className="block text-sm font-medium mb-2">
                            What challenges do you face when assessing creative income? *
                          </label>
                          <Textarea
                            id="problems"
                            required
                            value={waitlistData.problems}
                            onChange={(e) => setWaitlistData({ ...waitlistData, problems: e.target.value })}
                            className="border-2 border-rainbow-violet/30 focus:border-rainbow-violet min-h-[100px]"
                            placeholder="e.g., Lack of standardized data, difficulty assessing risk, time-consuming manual review..."
                          />
                        </div>

                        <div>
                          <label htmlFor="features" className="block text-sm font-medium mb-2">
                            What would make creative income easier to evaluate? *
                          </label>
                          <Textarea
                            id="features"
                            required
                            value={waitlistData.features}
                            onChange={(e) => setWaitlistData({ ...waitlistData, features: e.target.value })}
                            className="border-2 border-rainbow-violet/30 focus:border-rainbow-violet min-h-[100px]"
                            placeholder="e.g., Standardized risk scores, automated analysis, industry benchmarks..."
                          />
                        </div>
                      </>
                    )}

                    {waitlistData.userType === "investor" && (
                      <>
                        <div>
                          <label htmlFor="problems" className="block text-sm font-medium mb-2">
                            What gaps do you see in creative economy financing? *
                          </label>
                          <Textarea
                            id="problems"
                            required
                            value={waitlistData.problems}
                            onChange={(e) => setWaitlistData({ ...waitlistData, problems: e.target.value })}
                            className="border-2 border-rainbow-violet/30 focus:border-rainbow-violet min-h-[100px]"
                            placeholder="Share your perspective..."
                          />
                        </div>

                        <div>
                          <label htmlFor="features" className="block text-sm font-medium mb-2">
                            What infrastructure would unlock more investment in creatives? *
                          </label>
                          <Textarea
                            id="features"
                            required
                            value={waitlistData.features}
                            onChange={(e) => setWaitlistData({ ...waitlistData, features: e.target.value })}
                            className="border-2 border-rainbow-violet/30 focus:border-rainbow-violet min-h-[100px]"
                            placeholder="Share your thoughts..."
                          />
                        </div>
                      </>
                    )}

                    <div className="flex gap-4">
                      <Button
                        type="button"
                        variant="ctaOutline"
                        size="lg"
                        className="flex-1"
                        onClick={() => setStep(1)}
                      >
                        Back
                      </Button>
                      <Button
                        type="submit"
                        variant="cta"
                        size="lg"
                        className="flex-1"
                        disabled={
                          !waitlistData.problems || !waitlistData.features ||
                          (waitlistData.userType === "creator" && !waitlistData.industry)
                        }
                      >
                        Join waitlist
                        <ArrowRight className="w-4 h-4" />
                      </Button>
                    </div>
                  </motion.div>
                )}
              </form>

              <p className="text-sm text-foreground/60 text-center mt-6">
                We care about your privacy.{" "}
                <a href="#" className="text-gradient bg-gradient-to-r from-[hsl(var(--rainbow-violet))] via-[hsl(var(--rainbow-indigo))] to-[hsl(var(--rainbow-blue))] bg-[length:200%_200%] animate-rainbow-shift bg-clip-text text-transparent underline underline-offset-4">
                  Privacy Policy
                </a>
              </p>
            </motion.div>
          </div>
        </section>

        {/* Get in Touch Form Section */}
        <section className="netwrix-section bg-background py-16 lg:py-24 relative overflow-hidden">
          <div className="pointer-events-none absolute inset-0 netwrix-grid-svg-black-lg opacity-[0.15]" />
          <div className="container mx-auto px-4 relative">
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.35 }}
              transition={{ duration: 0.45 }}
              className="max-w-2xl mx-auto"
            >
              <div className="text-center mb-10">
                <p className="text-gradient bg-gradient-to-r from-[hsl(var(--rainbow-violet))] via-[hsl(var(--rainbow-indigo))] to-[hsl(var(--rainbow-blue))] bg-[length:200%_200%] animate-rainbow-shift bg-clip-text text-transparent font-medium mb-3">
                  Get in touch
                </p>
                <h2 className="text-4xl md:text-6xl font-semibold tracking-tight mb-4">
                  Start a{" "}
                  <span className="text-gradient bg-gradient-to-r from-[hsl(var(--rainbow-violet))] via-[hsl(var(--rainbow-indigo))] to-[hsl(var(--rainbow-blue))] bg-[length:200%_200%] animate-rainbow-shift bg-clip-text text-transparent">
                    conversation
                  </span>
                </h2>
                <p className="text-lg text-foreground/70">
                  Have questions? Want to learn more? Send us a message.
                </p>
              </div>

              <form onSubmit={handleContactSubmit} className="space-y-6">
                <div>
                  <label htmlFor="contact-name" className="block text-sm font-medium mb-2">
                    Name *
                  </label>
                  <Input
                    id="contact-name"
                    required
                    value={contactData.name}
                    onChange={(e) => setContactData({ ...contactData, name: e.target.value })}
                    className="border-2 border-rainbow-violet/30 focus:border-rainbow-violet"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label htmlFor="contact-email" className="block text-sm font-medium mb-2">
                    Email *
                  </label>
                  <Input
                    id="contact-email"
                    type="email"
                    required
                    value={contactData.email}
                    onChange={(e) => setContactData({ ...contactData, email: e.target.value })}
                    className="border-2 border-rainbow-violet/30 focus:border-rainbow-violet"
                    placeholder="your@email.com"
                  />
                </div>

                <div>
                  <label htmlFor="contact-message" className="block text-sm font-medium mb-2">
                    Message *
                  </label>
                  <Textarea
                    id="contact-message"
                    required
                    value={contactData.message}
                    onChange={(e) => setContactData({ ...contactData, message: e.target.value })}
                    className="border-2 border-rainbow-violet/30 focus:border-rainbow-violet min-h-[150px]"
                    placeholder="Tell us what you'd like to discuss..."
                  />
                </div>

                <Button
                  type="submit"
                  variant="cta"
                  size="lg"
                  className="w-full"
                  disabled={!contactData.name || !contactData.email || !contactData.message}
                >
                  Send message
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </form>
            </motion.div>
          </div>
        </section>

        {/* Social Links Section */}
        <section className="netwrix-section bg-background py-12 relative overflow-hidden">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap justify-center gap-6">
              <a
                href="#"
                className="flex items-center gap-2 text-foreground/70 hover:text-rainbow-violet transition-colors duration-300"
                aria-label="Email"
              >
                <Mail className="w-5 h-5" />
                <span className="text-sm">Email</span>
              </a>
              <a
                href="#"
                className="flex items-center gap-2 text-foreground/70 hover:text-rainbow-indigo transition-colors duration-300"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5" />
                <span className="text-sm">Twitter</span>
              </a>
              <a
                href="#"
                className="flex items-center gap-2 text-foreground/70 hover:text-rainbow-blue transition-colors duration-300"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
                <span className="text-sm">LinkedIn</span>
              </a>
              <a
                href="#"
                className="flex items-center gap-2 text-foreground/70 hover:text-rainbow-violet transition-colors duration-300"
                aria-label="GitHub"
              >
                <Github className="w-5 h-5" />
                <span className="text-sm">GitHub</span>
              </a>
            </div>
          </div>
        </section>

        {/* FAQs Section */}
        <section className="netwrix-section bg-background py-16 lg:py-24 relative overflow-hidden">
          <div className="pointer-events-none absolute inset-0 netwrix-grid-svg-black-lg opacity-[0.15]" />
          <div className="container mx-auto px-4 relative">
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.35 }}
              transition={{ duration: 0.45 }}
              className="max-w-3xl mx-auto"
            >
              <div className="text-center mb-10">
                <p className="text-gradient bg-gradient-to-r from-[hsl(var(--rainbow-violet))] via-[hsl(var(--rainbow-indigo))] to-[hsl(var(--rainbow-blue))] bg-[length:200%_200%] animate-rainbow-shift bg-clip-text text-transparent font-medium mb-3">
                  FAQs
                </p>
                <h2 className="text-4xl md:text-6xl font-semibold tracking-tight mb-6">
                  Frequently asked{" "}
                  <span className="text-gradient bg-gradient-to-r from-[hsl(var(--rainbow-violet))] via-[hsl(var(--rainbow-indigo))] to-[hsl(var(--rainbow-blue))] bg-[length:200%_200%] animate-rainbow-shift bg-clip-text text-transparent">
                    questions
                  </span>
                </h2>
              </div>

              <Accordion type="single" collapsible className="w-full">
                {faqs.map((faq, index) => (
                  <AccordionItem key={index} value={`item-${index}`} className="border-b border-border">
                    <AccordionTrigger className="text-left hover:text-gradient hover:bg-gradient-to-r hover:from-[hsl(var(--rainbow-violet))] hover:via-[hsl(var(--rainbow-indigo))] hover:to-[hsl(var(--rainbow-blue))] hover:bg-[length:200%_200%] hover:animate-rainbow-shift hover:bg-clip-text hover:text-transparent transition-all duration-300">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-foreground/70 leading-relaxed">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default WaitlistPage;
