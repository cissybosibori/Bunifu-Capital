import { useState } from "react";
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
import { ArrowRight } from "lucide-react";

export function WaitlistSignupSection() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    userType: "",
    problems: "",
    features: "",
    industry: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In production, this would submit to your backend
    console.log("Waitlist signup:", formData);
    alert("Thank you! Your response helps shape what we build.");
    // Reset form
    setFormData({
      name: "",
      email: "",
      userType: "",
      problems: "",
      features: "",
      industry: "",
    });
    setStep(1);
  };

  return (
    <section id="waitlist" className="netwrix-section bg-background py-16 lg:py-24 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.5 }}
          className="max-w-2xl mx-auto"
        >
          <div className="text-center mb-10">
            <p className="text-gradient bg-rainbow-gradient bg-[length:200%_200%] animate-rainbow-shift bg-clip-text text-transparent font-medium mb-3">
              Join early
            </p>
            <h2 className="text-4xl md:text-6xl font-semibold tracking-tight mb-4">
              Join the{" "}
              <span className="text-gradient bg-rainbow-gradient bg-[length:200%_200%] animate-rainbow-shift bg-clip-text text-transparent">
                waitlist
              </span>
            </h2>
            <p className="text-lg text-foreground/70">
              Be among the first to access Bunifu Capital. Your input shapes what we build.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
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
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
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
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="border-2 border-rainbow-violet/30 focus:border-rainbow-violet"
                    placeholder="your@email.com"
                  />
                </div>

                <div>
                  <label htmlFor="userType" className="block text-sm font-medium mb-2">
                    I am a... *
                  </label>
                  <Select
                    value={formData.userType}
                    onValueChange={(value) => setFormData({ ...formData, userType: value })}
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
                  disabled={!formData.name || !formData.email || !formData.userType}
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
                <div className="bg-gradient-to-r from-rainbow-red/5 via-rainbow-yellow/5 to-rainbow-blue/5 p-6 rounded-lg border border-border">
                  <p className="text-sm font-medium mb-4">
                    Help us build what you need. These questions help shape the product.
                  </p>
                </div>

                {formData.userType === "creator" && (
                  <>
                    <div>
                      <label htmlFor="industry" className="block text-sm font-medium mb-2">
                        What creative industry are you in?
                      </label>
                      <Select
                        value={formData.industry}
                        onValueChange={(value) => setFormData({ ...formData, industry: value })}
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
                        value={formData.problems}
                        onChange={(e) => setFormData({ ...formData, problems: e.target.value })}
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
                        value={formData.features}
                        onChange={(e) => setFormData({ ...formData, features: e.target.value })}
                        className="border-2 border-rainbow-violet/30 focus:border-rainbow-violet min-h-[100px]"
                        placeholder="e.g., Credit score for creatives, income forecasting, comparison to peers..."
                      />
                    </div>
                  </>
                )}

                {formData.userType === "financial-institution" && (
                  <>
                    <div>
                      <label htmlFor="problems" className="block text-sm font-medium mb-2">
                        What challenges do you face when assessing creative income? *
                      </label>
                      <Textarea
                        id="problems"
                        required
                        value={formData.problems}
                        onChange={(e) => setFormData({ ...formData, problems: e.target.value })}
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
                        value={formData.features}
                        onChange={(e) => setFormData({ ...formData, features: e.target.value })}
                        className="border-2 border-rainbow-violet/30 focus:border-rainbow-violet min-h-[100px]"
                        placeholder="e.g., Standardized risk scores, automated analysis, industry benchmarks..."
                      />
                    </div>
                  </>
                )}

                {formData.userType === "investor" && (
                  <>
                    <div>
                      <label htmlFor="problems" className="block text-sm font-medium mb-2">
                        What gaps do you see in creative economy financing? *
                      </label>
                      <Textarea
                        id="problems"
                        required
                        value={formData.problems}
                        onChange={(e) => setFormData({ ...formData, problems: e.target.value })}
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
                        value={formData.features}
                        onChange={(e) => setFormData({ ...formData, features: e.target.value })}
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
                      !formData.problems || !formData.features ||
                      (formData.userType === "creator" && !formData.industry)
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
            <a href="#" className="text-gradient bg-rainbow-gradient bg-[length:200%_200%] animate-rainbow-shift bg-clip-text text-transparent underline underline-offset-4">
              Privacy Policy
            </a>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
