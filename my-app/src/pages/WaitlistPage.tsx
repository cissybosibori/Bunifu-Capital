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
import { ArrowRight, Mail, Twitter, Linkedin, Github, Calendar, Video, MessageCircle } from "lucide-react";
import { Link } from "react-router-dom";

/* Creative economy professions (~30) + Other */
const CREATIVE_PROFESSIONS = [
  "Musician",
  "Music producer",
  "Songwriter",
  "Vocalist",
  "DJ",
  "Video creator",
  "YouTuber",
  "Filmmaker",
  "Photographer",
  "Illustrator",
  "Graphic designer",
  "Fashion designer",
  "Writer",
  "Author",
  "Journalist",
  "Podcaster",
  "Streamer",
  "Content creator",
  "Social media creator",
  "Animator",
  "Game developer",
  "Architect",
  "Interior designer",
  "Art director",
  "Creative director",
  "Copywriter",
  "UX designer",
  "Artisan / Craftsperson",
  "Dancer",
  "Choreographer",
  "Actor",
  "Model",
  "Other",
];

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
    industry: "",
    industryOther: "",
    problems: "",
    features: "",
  });
  const [demoData, setDemoData] = useState({ name: "", email: "", company: "", message: "" });
  const [meetingData, setMeetingData] = useState({ name: "", email: "", preferredTime: "", message: "" });
  const [contactData, setContactData] = useState({ name: "", email: "", message: "" });

  const handleWaitlistSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Waitlist signup:", waitlistData);
    alert("Thank you! Your response helps shape what we build.");
    setWaitlistData({
      name: "",
      email: "",
      userType: "",
      industry: "",
      industryOther: "",
      problems: "",
      features: "",
    });
    setStep(1);
  };

  const handleDemoSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Demo request:", demoData);
    alert("Thank you! We'll be in touch to schedule your demo.");
    setDemoData({ name: "", email: "", company: "", message: "" });
  };

  const handleMeetingSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Meeting request:", meetingData);
    alert("Thank you! We'll confirm your meeting shortly.");
    setMeetingData({ name: "", email: "", preferredTime: "", message: "" });
  };

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Contact form:", contactData);
    alert("Thank you! We'll get back to you soon.");
    setContactData({ name: "", email: "", message: "" });
  };

  const isCreative = waitlistData.userType === "creator";
  const showIndustryOther = isCreative && waitlistData.industry === "Other";

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="bunifu-page">
        {/* Hero - Get involved, violet/indigo/blue + grid */}
        <section className="relative overflow-hidden pt-28 pb-16 lg:pt-36 lg:pb-24 bg-background border-b border-border">
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_12%_86%,hsl(var(--rainbow-violet)/0.25),transparent_58%)]" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_92%_18%,hsl(var(--rainbow-indigo)/0.22),transparent_58%)]" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,hsl(var(--rainbow-blue)/0.15),transparent_70%)]" />
            <div className="absolute -left-40 -bottom-44 h-[640px] w-[720px] bg-[radial-gradient(closest-side,hsl(var(--rainbow-violet)/0.35),hsl(var(--rainbow-indigo)/0.25),transparent_72%)]" />
            <div className="absolute right-0 top-0 h-[540px] w-[620px] bg-[radial-gradient(closest-side,hsl(var(--rainbow-indigo)/0.28),hsl(var(--rainbow-blue)/0.18),transparent_72%)] blur-3xl translate-x-40 -translate-y-28" />
            <div className="absolute inset-0 bunifu-grid-svg-white opacity-[0.75]" />
          </div>

          <div className="container mx-auto px-4 relative">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center max-w-4xl mx-auto"
            >
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-semibold tracking-tight leading-[0.96] mb-6">
                Get{" "}
                <span className="text-gradient bg-gradient-to-r from-[hsl(var(--rainbow-violet))] via-[hsl(var(--rainbow-indigo))] to-[hsl(var(--rainbow-blue))] bg-[length:200%_200%] animate-rainbow-shift bg-clip-text text-transparent">
                  involved
                </span>
              </h1>
              <p className="text-lg md:text-xl text-foreground/70 mb-8 max-w-2xl mx-auto">
                Join the waitlist, book a demo, set up a meeting, or contact our experts. Your input shapes what we build.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Join the waitlist - main form */}
        <section className="bunifu-section bg-background py-16 lg:py-24">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5 }}
              className="max-w-2xl mx-auto"
            >
              <div className="text-center mb-10">
                <p className="text-gradient bg-gradient-to-r from-[hsl(var(--rainbow-violet))] via-[hsl(var(--rainbow-indigo))] to-[hsl(var(--rainbow-blue))] bg-[length:200%_200%] animate-rainbow-shift bg-clip-text text-transparent font-medium mb-3">
                  Join early
                </p>
                <h2 className="text-4xl md:text-5xl font-semibold tracking-tight mb-4">
                  Join the{" "}
                  <span className="text-gradient bg-gradient-to-r from-[hsl(var(--rainbow-violet))] via-[hsl(var(--rainbow-indigo))] to-[hsl(var(--rainbow-blue))] bg-[length:200%_200%] animate-rainbow-shift bg-clip-text text-transparent">
                    waitlist
                  </span>
                </h2>
                <p className="text-lg text-foreground/70">
                  Your answers help shape the product. This is research, not just signup.
                </p>
              </div>

              <form onSubmit={handleWaitlistSubmit} className="space-y-6">
                {step === 1 && (
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="space-y-6"
                  >
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium mb-2">Name *</label>
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
                      <label htmlFor="email" className="block text-sm font-medium mb-2">Email *</label>
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
                      <label htmlFor="userType" className="block text-sm font-medium mb-2">I am a... *</label>
                      <Select
                        value={waitlistData.userType}
                        onValueChange={(value) => setWaitlistData({ ...waitlistData, userType: value, industry: "", industryOther: "" })}
                        required
                      >
                        <SelectTrigger className="border-2 border-rainbow-violet/30 focus:border-rainbow-violet">
                          <SelectValue placeholder="Select one" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="creator">Creative / Creative Professional</SelectItem>
                          <SelectItem value="financial-institution">Financial Institution</SelectItem>
                          <SelectItem value="investor">Investor / Partner</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <Button
                      type="button"
                      variant="cta"
                      size="lg"
                      className="w-full bg-rainbow-violet text-white hover:bg-rainbow-violet/90"
                      onClick={() => setStep(2)}
                      disabled={!waitlistData.name || !waitlistData.email || !waitlistData.userType}
                    >
                      Continue
                      <ArrowRight className="w-4 h-4" />
                    </Button>
                  </motion.div>
                )}

                {step === 2 && (
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="space-y-6"
                  >
                    {isCreative && (
                      <>
                        <div>
                          <label className="block text-sm font-medium mb-2">Profession in the creative economy *</label>
                          <Select
                            value={waitlistData.industry}
                            onValueChange={(value) => setWaitlistData({ ...waitlistData, industry: value, industryOther: value === "Other" ? waitlistData.industryOther : "" })}
                            required
                          >
                            <SelectTrigger className="border-2 border-rainbow-violet/30 focus:border-rainbow-violet">
                              <SelectValue placeholder="Select profession" />
                            </SelectTrigger>
                            <SelectContent>
                              {CREATIVE_PROFESSIONS.map((p) => (
                                <SelectItem key={p} value={p}>{p}</SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                        </div>
                        {showIndustryOther && (
                          <div>
                            <label htmlFor="industryOther" className="block text-sm font-medium mb-2">Please specify</label>
                            <Input
                              id="industryOther"
                              value={waitlistData.industryOther}
                              onChange={(e) => setWaitlistData({ ...waitlistData, industryOther: e.target.value })}
                              className="border-2 border-rainbow-violet/30 focus:border-rainbow-violet"
                              placeholder="Your profession"
                            />
                          </div>
                        )}
                        <div>
                          <label htmlFor="problems" className="block text-sm font-medium mb-2">What financial challenges do you face as a creative? *</label>
                          <Textarea
                            id="problems"
                            required
                            value={waitlistData.problems}
                            onChange={(e) => setWaitlistData({ ...waitlistData, problems: e.target.value })}
                            className="border-2 border-rainbow-violet/30 focus:border-rainbow-violet min-h-[100px]"
                            placeholder="e.g., Difficulty getting loans, inconsistent income tracking..."
                          />
                        </div>
                        <div>
                          <label htmlFor="features" className="block text-sm font-medium mb-2">What features would be most valuable to you? *</label>
                          <Textarea
                            id="features"
                            required
                            value={waitlistData.features}
                            onChange={(e) => setWaitlistData({ ...waitlistData, features: e.target.value })}
                            className="border-2 border-rainbow-violet/30 focus:border-rainbow-violet min-h-[100px]"
                            placeholder="e.g., Credit score for creatives, income forecasting..."
                          />
                        </div>
                      </>
                    )}

                    {waitlistData.userType === "financial-institution" && (
                      <>
                        <div>
                          <label htmlFor="problems" className="block text-sm font-medium mb-2">What challenges do you face when assessing creative income? *</label>
                          <Textarea
                            id="problems"
                            required
                            value={waitlistData.problems}
                            onChange={(e) => setWaitlistData({ ...waitlistData, problems: e.target.value })}
                            className="border-2 border-rainbow-violet/30 focus:border-rainbow-violet min-h-[100px]"
                            placeholder="e.g., Lack of standardized data, difficulty assessing risk..."
                          />
                        </div>
                        <div>
                          <label htmlFor="features" className="block text-sm font-medium mb-2">What would make creative income easier to evaluate? *</label>
                          <Textarea
                            id="features"
                            required
                            value={waitlistData.features}
                            onChange={(e) => setWaitlistData({ ...waitlistData, features: e.target.value })}
                            className="border-2 border-rainbow-violet/30 focus:border-rainbow-violet min-h-[100px]"
                            placeholder="e.g., Standardized risk scores, automated analysis..."
                          />
                        </div>
                      </>
                    )}

                    {waitlistData.userType === "investor" && (
                      <>
                        <div>
                          <label htmlFor="problems" className="block text-sm font-medium mb-2">What gaps do you see in creative economy financing? *</label>
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
                          <label htmlFor="features" className="block text-sm font-medium mb-2">What infrastructure would unlock more investment in creatives? *</label>
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
                      <Button type="button" variant="ctaOutline" size="lg" className="flex-1" onClick={() => setStep(1)}>
                        Back
                      </Button>
                      <Button
                        type="submit"
                        variant="cta"
                        size="lg"
                        className="flex-1 bg-rainbow-violet text-white hover:bg-rainbow-violet/90"
                        disabled={
                          !waitlistData.problems ||
                          !waitlistData.features ||
                          (isCreative && (!waitlistData.industry || (waitlistData.industry === "Other" && !waitlistData.industryOther.trim())))
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
                <Link to="#" className="text-rainbow-violet underline underline-offset-4">Privacy Policy</Link>
              </p>
            </motion.div>
          </div>
        </section>

        {/* Get demo - CTA + form */}
        <section className="bunifu-section bg-background py-16 lg:py-24">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.45 }}
              className="max-w-2xl mx-auto rounded-2xl border-2 border-border bg-gradient-to-br from-rainbow-blue/5 via-rainbow-indigo/5 to-rainbow-violet/5 p-8 lg:p-10"
            >
              <div className="flex items-center gap-3 mb-6">
                <Video className="w-8 h-8 text-rainbow-blue" />
                <div>
                  <p className="text-gradient bg-gradient-to-r from-[hsl(var(--rainbow-blue))] via-[hsl(var(--rainbow-indigo))] to-[hsl(var(--rainbow-violet))] bg-[length:200%_200%] animate-rainbow-shift bg-clip-text text-transparent font-medium">
                    Get a demo
                  </p>
                  <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">See Bunifu Capital in action</h2>
                </div>
              </div>
              <p className="text-foreground/70 mb-6">Book a short demo. We'll show you how the platform works and answer your questions.</p>
              <form onSubmit={handleDemoSubmit} className="space-y-4">
                <Input
                  required
                  value={demoData.name}
                  onChange={(e) => setDemoData({ ...demoData, name: e.target.value })}
                  className="border-2 border-rainbow-blue/30 focus:border-rainbow-blue"
                  placeholder="Name *"
                />
                <Input
                  type="email"
                  required
                  value={demoData.email}
                  onChange={(e) => setDemoData({ ...demoData, email: e.target.value })}
                  className="border-2 border-rainbow-blue/30 focus:border-rainbow-blue"
                  placeholder="Email *"
                />
                <Input
                  value={demoData.company}
                  onChange={(e) => setDemoData({ ...demoData, company: e.target.value })}
                  className="border-2 border-rainbow-blue/30 focus:border-rainbow-blue"
                  placeholder="Company (optional)"
                />
                <Textarea
                  value={demoData.message}
                  onChange={(e) => setDemoData({ ...demoData, message: e.target.value })}
                  className="border-2 border-rainbow-blue/30 focus:border-rainbow-blue min-h-[80px]"
                  placeholder="What would you like to see in the demo?"
                />
                <Button type="submit" variant="cta" size="lg" className="w-full bg-rainbow-blue text-white hover:bg-rainbow-blue/90">
                  Request demo
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </form>
            </motion.div>
          </div>
        </section>

        {/* Set up meeting - CTA + form */}
        <section className="bunifu-section bg-background py-16 lg:py-24">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.45 }}
              className="max-w-2xl mx-auto rounded-2xl border-2 border-border bg-gradient-to-br from-rainbow-green/5 via-rainbow-blue/5 to-rainbow-indigo/5 p-8 lg:p-10"
            >
              <div className="flex items-center gap-3 mb-6">
                <Calendar className="w-8 h-8 text-rainbow-green" />
                <div>
                  <p className="text-gradient bg-gradient-to-r from-[hsl(var(--rainbow-green))] via-[hsl(var(--rainbow-blue))] to-[hsl(var(--rainbow-indigo))] bg-[length:200%_200%] animate-rainbow-shift bg-clip-text text-transparent font-medium">
                    Set up a meeting
                  </p>
                  <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">Schedule a call with our team</h2>
                </div>
              </div>
              <p className="text-foreground/70 mb-6">Tell us your preferred time and we'll send a calendar link or confirm a slot.</p>
              <form onSubmit={handleMeetingSubmit} className="space-y-4">
                <Input
                  required
                  value={meetingData.name}
                  onChange={(e) => setMeetingData({ ...meetingData, name: e.target.value })}
                  className="border-2 border-rainbow-green/30 focus:border-rainbow-green"
                  placeholder="Name *"
                />
                <Input
                  type="email"
                  required
                  value={meetingData.email}
                  onChange={(e) => setMeetingData({ ...meetingData, email: e.target.value })}
                  className="border-2 border-rainbow-green/30 focus:border-rainbow-green"
                  placeholder="Email *"
                />
                <Input
                  value={meetingData.preferredTime}
                  onChange={(e) => setMeetingData({ ...meetingData, preferredTime: e.target.value })}
                  className="border-2 border-rainbow-green/30 focus:border-rainbow-green"
                  placeholder="Preferred date / time (optional)"
                />
                <Textarea
                  value={meetingData.message}
                  onChange={(e) => setMeetingData({ ...meetingData, message: e.target.value })}
                  className="border-2 border-rainbow-green/30 focus:border-rainbow-green min-h-[80px]"
                  placeholder="What would you like to discuss?"
                />
                <Button type="submit" variant="cta" size="lg" className="w-full bg-rainbow-green text-white hover:bg-rainbow-green/90">
                  Request meeting
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </form>
            </motion.div>
          </div>
        </section>

        {/* Contact experts - CTA + form */}
        <section className="bunifu-section bg-background py-16 lg:py-24">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.45 }}
              className="max-w-2xl mx-auto rounded-2xl border-2 border-border bg-gradient-to-br from-rainbow-orange/5 via-rainbow-yellow/5 to-rainbow-green/5 p-8 lg:p-10"
            >
              <div className="flex items-center gap-3 mb-6">
                <MessageCircle className="w-8 h-8 text-rainbow-orange" />
                <div>
                  <p className="text-gradient bg-gradient-to-r from-[hsl(var(--rainbow-orange))] via-[hsl(var(--rainbow-yellow))] to-[hsl(var(--rainbow-green))] bg-[length:200%_200%] animate-rainbow-shift bg-clip-text text-transparent font-medium">
                    Contact experts
                  </p>
                  <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">Get in touch with our team</h2>
                </div>
              </div>
              <p className="text-foreground/70 mb-6">Have questions? Want deeper documentation? Send us a message.</p>
              <form onSubmit={handleContactSubmit} className="space-y-4">
                <Input
                  required
                  value={contactData.name}
                  onChange={(e) => setContactData({ ...contactData, name: e.target.value })}
                  className="border-2 border-rainbow-orange/30 focus:border-rainbow-orange"
                  placeholder="Name *"
                />
                <Input
                  type="email"
                  required
                  value={contactData.email}
                  onChange={(e) => setContactData({ ...contactData, email: e.target.value })}
                  className="border-2 border-rainbow-orange/30 focus:border-rainbow-orange"
                  placeholder="Email *"
                />
                <Textarea
                  required
                  value={contactData.message}
                  onChange={(e) => setContactData({ ...contactData, message: e.target.value })}
                  className="border-2 border-rainbow-orange/30 focus:border-rainbow-orange min-h-[120px]"
                  placeholder="Your message *"
                />
                <Button type="submit" variant="cta" size="lg" className="w-full bg-rainbow-orange text-white hover:bg-rainbow-orange/90">
                  Send message
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </form>
            </motion.div>
          </div>
        </section>

        {/* Social links */}
        <section className="bunifu-section bg-background py-12">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap justify-center gap-6">
              <a href="mailto:hello@bunifucapital.com" className="flex items-center gap-2 text-foreground/70 hover:text-rainbow-violet transition-colors duration-300" aria-label="Email">
                <Mail className="w-5 h-5" />
                <span className="text-sm">Email</span>
              </a>
              <a href="#" className="flex items-center gap-2 text-foreground/70 hover:text-rainbow-indigo transition-colors duration-300" aria-label="Twitter">
                <Twitter className="w-5 h-5" />
                <span className="text-sm">Twitter</span>
              </a>
              <a href="#" className="flex items-center gap-2 text-foreground/70 hover:text-rainbow-blue transition-colors duration-300" aria-label="LinkedIn">
                <Linkedin className="w-5 h-5" />
                <span className="text-sm">LinkedIn</span>
              </a>
              <a href="#" className="flex items-center gap-2 text-foreground/70 hover:text-rainbow-violet transition-colors duration-300" aria-label="GitHub">
                <Github className="w-5 h-5" />
                <span className="text-sm">GitHub</span>
              </a>
            </div>
          </div>
        </section>

        {/* FAQs */}
        <section className="bunifu-section bg-background py-16 lg:py-24">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.45 }}
              className="max-w-3xl mx-auto"
            >
              <div className="text-center mb-10">
                <p className="text-gradient bg-gradient-to-r from-[hsl(var(--rainbow-violet))] via-[hsl(var(--rainbow-indigo))] to-[hsl(var(--rainbow-blue))] bg-[length:200%_200%] animate-rainbow-shift bg-clip-text text-transparent font-medium mb-3">
                  FAQs
                </p>
                <h2 className="text-4xl md:text-5xl font-semibold tracking-tight mb-6">
                  Frequently asked{" "}
                  <span className="text-gradient bg-gradient-to-r from-[hsl(var(--rainbow-violet))] via-[hsl(var(--rainbow-indigo))] to-[hsl(var(--rainbow-blue))] bg-[length:200%_200%] animate-rainbow-shift bg-clip-text text-transparent">
                    questions
                  </span>
                </h2>
              </div>
              <Accordion type="single" collapsible className="w-full">
                {faqs.map((faq, index) => (
                  <AccordionItem key={index} value={`item-${index}`} className="border-b border-border">
                    <AccordionTrigger className="text-left hover:text-rainbow-violet transition-colors duration-300">
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
