import { useState, useMemo } from "react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Briefcase,
  MapPin,
  Clock,
  Building2,
  Search,
  ArrowRight,
  ChevronLeft,
  CheckCircle2,
} from "lucide-react";
import { cn } from "@/lib/utils";

const DEPARTMENTS = [
  "Tech",
  "Finance",
  "Marketing",
  "Accounting",
  "Operations",
  "Design",
  "Other",
] as const;

const JOB_TYPES = ["Full time", "Part time", "Contract", "Internship"] as const;

const LOCATIONS = ["Remote", "On site", "Hybrid"] as const;

type Department = (typeof DEPARTMENTS)[number];
type JobType = (typeof JOB_TYPES)[number];
type Location = (typeof LOCATIONS)[number];

interface Job {
  id: string;
  title: string;
  department: Department;
  location: Location;
  employmentType: JobType;
  summary: string;
  description: string;
  responsibilities: string[];
  requirements: string[];
  niceToHave: string[];
}

// Toggle to simulate "no open roles" – set to [] to show talent-pool-only state
const OPEN_ROLES: Job[] = [
  {
    id: "1",
    title: "Senior Full-Stack Engineer",
    department: "Tech",
    location: "Remote",
    employmentType: "Full time",
    summary:
      "Build and scale product infrastructure for the creative economy. You'll work on APIs, data pipelines, and front-end tools used by creatives and financial institutions.",
    description:
      "We're looking for a senior full-stack engineer to own key parts of our platform. You'll work with a small team to design, build, and maintain systems that connect creative income data with financial analytics and reporting.",
    responsibilities: [
      "Design and implement APIs and services for income verification and analytics",
      "Build and maintain front-end experiences for creatives and partners",
      "Collaborate with product and design on new features and improvements",
      "Participate in code reviews and help shape engineering practices",
    ],
    requirements: [
      "5+ years of experience building production web applications",
      "Strong experience with TypeScript/JavaScript and a modern framework (e.g. React)",
      "Experience with REST or GraphQL APIs and relational databases",
      "Comfort with ambiguity and fast-moving product decisions",
    ],
    niceToHave: [
      "Experience in fintech or financial data systems",
      "Familiarity with creative platforms (e.g. Spotify, YouTube, Patreon)",
      "Interest in the creative economy",
    ],
  },
  {
    id: "2",
    title: "Product Designer",
    department: "Design",
    location: "Hybrid",
    employmentType: "Full time",
    summary:
      "Shape the product experience for creatives and institutions. You'll own UX and visual design for our core flows and help define our design system.",
    description:
      "As our first dedicated product designer, you'll have a big impact on how creatives and financial partners experience Bunifu Capital. You'll work closely with engineering and product to ship clear, inclusive, and effective interfaces.",
    responsibilities: [
      "Own end-to-end design for key product flows (onboarding, dashboards, reports)",
      "Create and maintain a design system that scales across the product",
      "Conduct user research and usability testing with creatives and partners",
      "Collaborate with engineering to ensure high-quality implementation",
    ],
    requirements: [
      "4+ years of product or UX design experience",
      "Strong portfolio showing web or mobile product work",
      "Proficiency in Figma or similar design tools",
      "Experience working with developers in an agile environment",
    ],
    niceToHave: [
      "Experience in fintech, banking, or B2B SaaS",
      "Interest in the creative economy and inclusive design",
    ],
  },
  {
    id: "3",
    title: "Partnerships Lead",
    department: "Marketing",
    location: "Remote",
    employmentType: "Full time",
    summary:
      "Drive growth through partnerships with platforms, creators, and financial institutions. You'll own outreach, relationship building, and early commercial conversations.",
    description:
      "We're looking for someone to own our partnerships pipeline and help turn interest into long-term relationships. You'll work with creative platforms, data partners, and financial institutions to expand Bunifu Capital's reach and value.",
    responsibilities: [
      "Identify and prioritize partnership opportunities across the creative and financial ecosystem",
      "Lead outreach, meetings, and follow-up with potential partners",
      "Support product and leadership with partner feedback and requirements",
      "Help define and track partnership metrics and goals",
    ],
    requirements: [
      "3+ years in partnerships, business development, or similar",
      "Strong communication and relationship-building skills",
      "Ability to work independently and prioritize in a fast-moving environment",
      "Interest in the creative economy and financial inclusion",
    ],
    niceToHave: [
      "Experience in fintech, creative industries, or platform businesses",
      "Existing network in creative or financial sectors",
    ],
  },
];

function CareersPage() {
  const [departmentFilter, setDepartmentFilter] = useState<string>("all");
  const [jobTypeFilter, setJobTypeFilter] = useState<string>("all");
  const [locationFilter, setLocationFilter] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedJobId, setSelectedJobId] = useState<string | null>(null);
  const [applicationOpen, setApplicationOpen] = useState(false);
  const [talentPoolOpen, setTalentPoolOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [isTalentPoolMode, setIsTalentPoolMode] = useState(false);

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    departmentOrRole: "",
    cvFile: null as File | null,
    portfolioFile: null as File | null,
    portfolioLink: "",
    linkedIn: "",
    github: "",
    otherWebsite: "",
    coverMessage: "",
    rolesInterestedIn: [] as string[],
    permissionToStore: false,
  });

  const filteredJobs = useMemo(() => {
    return OPEN_ROLES.filter((job) => {
      const matchDept = departmentFilter === "all" || job.department === departmentFilter;
      const matchType = jobTypeFilter === "all" || job.employmentType === jobTypeFilter;
      const matchLocation = locationFilter === "all" || job.location === locationFilter;
      const matchSearch =
        !searchQuery.trim() ||
        job.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        job.department.toLowerCase().includes(searchQuery.toLowerCase()) ||
        job.summary.toLowerCase().includes(searchQuery.toLowerCase());
      return matchDept && matchType && matchLocation && matchSearch;
    });
  }, [departmentFilter, jobTypeFilter, locationFilter, searchQuery]);

  const selectedJob = selectedJobId ? OPEN_ROLES.find((j) => j.id === selectedJobId) : null;

  const openApplication = (job: Job | null) => {
    setFormData({
      ...formData,
      departmentOrRole: job ? job.title : formData.departmentOrRole,
    });
    setIsTalentPoolMode(false);
    setApplicationOpen(true);
    setSubmitted(false);
  };

  const openTalentPool = () => {
    setFormData({
      ...formData,
      departmentOrRole: "",
      rolesInterestedIn: [],
      permissionToStore: false,
    });
    setIsTalentPoolMode(true);
    setTalentPoolOpen(true);
    setSubmitted(false);
  };

  const handleSubmitApplication = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleSubmitTalentPool = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.permissionToStore) return;
    setSubmitted(true);
  };

  const toggleRoleInterest = (role: string) => {
    setFormData((prev) => ({
      ...prev,
      rolesInterestedIn: prev.rolesInterestedIn.includes(role)
        ? prev.rolesInterestedIn.filter((r) => r !== role)
        : [...prev.rolesInterestedIn, role],
    }));
  };

  const hasOpenRoles = OPEN_ROLES.length > 0;

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="bunifu-page">
        {/* Intro */}
        <section className="relative overflow-hidden border-b border-border pt-28 pb-16 lg:pt-36 lg:pb-24 bg-background">
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,hsl(var(--rainbow-orange)/0.2),transparent_50%)]" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,hsl(var(--rainbow-yellow)/0.18),transparent_50%)]" />
          </div>
          <div className="container mx-auto px-4 relative">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="max-w-3xl"
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight mb-6">
                Build the future of{" "}
                <span className="text-gradient bg-gradient-to-r from-[hsl(var(--rainbow-orange))] via-[hsl(var(--rainbow-yellow))] to-[hsl(var(--rainbow-green))] bg-[length:200%_200%] animate-rainbow-shift bg-clip-text text-transparent">
                  creative finance
                </span>
              </h1>
              <p className="text-lg text-foreground/70 mb-8">
                We're a small team on a big mission: opening access to finance for the creative economy. We value
                clarity, collaboration, and ownership. You'll grow with us, shape the product, and work with people who
                care about creatives and financial inclusion.
              </p>
              <div className="flex flex-wrap gap-3">
                {hasOpenRoles && (
                  <Button variant="cta" size="lg" className="group" asChild>
                    <a href="#jobs">
                      View open roles
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-0.5 transition-transform" />
                    </a>
                  </Button>
                )}
                <Button
                  variant="ctaOutline"
                  size="lg"
                  className="group"
                  onClick={openTalentPool}
                >
                  Join our talent pool
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-0.5 transition-transform" />
                </Button>
              </div>
            </motion.div>
          </div>
        </section>

        {hasOpenRoles ? (
          <>
            {/* Filters + Listings */}
            <section id="jobs" className="bunifu-section bg-background py-16 lg:py-24">
              <div className="container mx-auto px-4">
                <div className="flex flex-col lg:flex-row gap-8">
                  {/* Filters */}
                  <div className="lg:w-64 shrink-0 space-y-4">
                    <div className="relative">
                      <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                      <Input
                        placeholder="Search roles..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="pl-9 border-border"
                      />
                    </div>
                    <div>
                      <Label className="text-xs font-medium text-foreground/60">Department</Label>
                      <Select value={departmentFilter} onValueChange={setDepartmentFilter}>
                        <SelectTrigger className="mt-1.5 border-border">
                          <SelectValue placeholder="All" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="all">All</SelectItem>
                          {DEPARTMENTS.map((d) => (
                            <SelectItem key={d} value={d}>
                              {d}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <Label className="text-xs font-medium text-foreground/60">Job type</Label>
                      <Select value={jobTypeFilter} onValueChange={setJobTypeFilter}>
                        <SelectTrigger className="mt-1.5 border-border">
                          <SelectValue placeholder="All" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="all">All</SelectItem>
                          {JOB_TYPES.map((t) => (
                            <SelectItem key={t} value={t}>
                              {t}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <Label className="text-xs font-medium text-foreground/60">Location</Label>
                      <Select value={locationFilter} onValueChange={setLocationFilter}>
                        <SelectTrigger className="mt-1.5 border-border">
                          <SelectValue placeholder="All" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="all">All</SelectItem>
                          {LOCATIONS.map((l) => (
                            <SelectItem key={l} value={l}>
                              {l}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  {/* Job list or detail */}
                  <div className="flex-1 min-w-0">
                    {selectedJob ? (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="space-y-6"
                      >
                        <Button
                          variant="ghost"
                          size="sm"
                          className="text-foreground/70 -ml-2"
                          onClick={() => setSelectedJobId(null)}
                        >
                          <ChevronLeft className="mr-1 h-4 w-4" />
                          Back to roles
                        </Button>
                        <div className="rounded-xl border border-border bg-card/50 p-6 lg:p-8">
                          <h2 className="text-2xl font-semibold mb-2">{selectedJob.title}</h2>
                          <div className="flex flex-wrap gap-3 text-sm text-foreground/70 mb-6">
                            <span className="inline-flex items-center gap-1.5">
                              <Building2 className="h-4 w-4" />
                              {selectedJob.department}
                            </span>
                            <span className="inline-flex items-center gap-1.5">
                              <MapPin className="h-4 w-4" />
                              {selectedJob.location}
                            </span>
                            <span className="inline-flex items-center gap-1.5">
                              <Clock className="h-4 w-4" />
                              {selectedJob.employmentType}
                            </span>
                          </div>
                          <p className="text-foreground/80 mb-6">{selectedJob.description}</p>
                          <div className="space-y-4 mb-6">
                            <div>
                              <h3 className="text-sm font-semibold mb-2">Responsibilities</h3>
                              <ul className="list-disc list-inside text-sm text-foreground/70 space-y-1">
                                {selectedJob.responsibilities.map((r, i) => (
                                  <li key={i}>{r}</li>
                                ))}
                              </ul>
                            </div>
                            <div>
                              <h3 className="text-sm font-semibold mb-2">Requirements</h3>
                              <ul className="list-disc list-inside text-sm text-foreground/70 space-y-1">
                                {selectedJob.requirements.map((r, i) => (
                                  <li key={i}>{r}</li>
                                ))}
                              </ul>
                            </div>
                            {selectedJob.niceToHave.length > 0 && (
                              <div>
                                <h3 className="text-sm font-semibold mb-2">Nice to have</h3>
                                <ul className="list-disc list-inside text-sm text-foreground/70 space-y-1">
                                  {selectedJob.niceToHave.map((r, i) => (
                                    <li key={i}>{r}</li>
                                  ))}
                                </ul>
                              </div>
                            )}
                          </div>
                          <Button variant="cta" size="lg" onClick={() => openApplication(selectedJob)}>
                            Apply for this role
                          </Button>
                        </div>
                      </motion.div>
                    ) : (
                      <>
                        <h2 className="text-xl font-semibold mb-4">
                          Open roles ({filteredJobs.length})
                        </h2>
                        {filteredJobs.length === 0 ? (
                          <p className="text-foreground/70 py-8">
                            No roles match your filters. Try adjusting them or{" "}
                            <button
                              type="button"
                              className="text-[hsl(var(--rainbow-orange))] hover:underline font-medium"
                              onClick={openTalentPool}
                            >
                              join our talent pool
                            </button>
                            .
                          </p>
                        ) : (
                          <ul className="space-y-4">
                            <AnimatePresence mode="wait">
                              {filteredJobs.map((job) => (
                                <motion.li
                                  key={job.id}
                                  initial={{ opacity: 0, y: 8 }}
                                  animate={{ opacity: 1, y: 0 }}
                                  exit={{ opacity: 0 }}
                                  className="rounded-xl border border-border bg-card/30 p-5 hover:border-foreground/15 hover:bg-card/50 transition-colors"
                                >
                                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
                                    <div
                                      className="cursor-pointer min-w-0"
                                      onClick={() => setSelectedJobId(job.id)}
                                      onKeyDown={(e) => e.key === "Enter" && setSelectedJobId(job.id)}
                                      role="button"
                                      tabIndex={0}
                                    >
                                      <h3 className="text-lg font-semibold text-foreground group-hover:text-foreground">
                                        {job.title}
                                      </h3>
                                      <div className="flex flex-wrap gap-2 mt-2 text-sm text-foreground/60">
                                        <span>{job.department}</span>
                                        <span>·</span>
                                        <span>{job.location}</span>
                                        <span>·</span>
                                        <span>{job.employmentType}</span>
                                      </div>
                                      <p className="mt-2 text-sm text-foreground/70 line-clamp-2">
                                        {job.summary}
                                      </p>
                                    </div>
                                    <Button
                                      variant="ctaOutline"
                                      size="sm"
                                      className="shrink-0"
                                      onClick={(e) => {
                                        e.stopPropagation();
                                        setSelectedJobId(job.id);
                                      }}
                                    >
                                      View & apply
                                    </Button>
                                  </div>
                                </motion.li>
                              ))}
                            </AnimatePresence>
                          </ul>
                        )}
                      </>
                    )}
                  </div>
                </div>
              </div>
            </section>
          </>
        ) : (
          /* No open roles */
          <section className="bunifu-section bg-background py-16 lg:py-24">
            <div className="container mx-auto px-4 text-center max-w-2xl">
              <Briefcase className="h-12 w-12 text-foreground/40 mx-auto mb-6" />
              <h2 className="text-2xl font-semibold mb-4">No open roles right now</h2>
              <p className="text-foreground/70 mb-6">
                We don't have any vacancies at the moment, but we're always interested in meeting talented people. Join
                our talent pool and we'll review your profile when new roles open. We typically review the pool every
                few weeks and reach out when there's a match.
              </p>
              <Button variant="cta" size="lg" onClick={openTalentPool}>
                Join our talent pool
              </Button>
            </div>
          </section>
        )}

        {/* Application dialog */}
        <Dialog open={applicationOpen} onOpenChange={setApplicationOpen}>
          <DialogContent className="max-w-lg max-h-[90vh] overflow-y-auto">
            {submitted ? (
              <>
                <DialogHeader>
                  <DialogTitle className="flex items-center gap-2">
                    <CheckCircle2 className="h-5 w-5 text-green-600" />
                    Application received
                  </DialogTitle>
                  <DialogDescription>
                    Thanks for applying. We've received your application and will get back to you soon.
                  </DialogDescription>
                </DialogHeader>
                <DialogFooter>
                  <Button variant="outline" onClick={() => setApplicationOpen(false)}>
                    Close
                  </Button>
                </DialogFooter>
              </>
            ) : (
              <>
                <DialogHeader>
                  <DialogTitle>Apply for this role</DialogTitle>
                  <DialogDescription>
                    Fill in your details and we'll be in touch. All fields marked with * are required.
                  </DialogDescription>
                </DialogHeader>
                <form onSubmit={handleSubmitApplication} className="space-y-4">
                  <div>
                    <Label htmlFor="app-name">Full name *</Label>
                    <Input
                      id="app-name"
                      required
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      className="mt-1.5 border-border"
                    />
                  </div>
                  <div>
                    <Label htmlFor="app-email">Email address *</Label>
                    <Input
                      id="app-email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="mt-1.5 border-border"
                    />
                  </div>
                  <div>
                    <Label htmlFor="app-phone">Phone number *</Label>
                    <Input
                      id="app-phone"
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="mt-1.5 border-border"
                    />
                  </div>
                  <div>
                    <Label htmlFor="app-department">Department or role of interest *</Label>
                    <Input
                      id="app-department"
                      value={formData.departmentOrRole}
                      onChange={(e) => setFormData({ ...formData, departmentOrRole: e.target.value })}
                      className="mt-1.5 border-border"
                      placeholder="e.g. Senior Full-Stack Engineer"
                    />
                  </div>
                  <div>
                    <Label>Upload CV *</Label>
                    <Input
                      type="file"
                      accept=".pdf,.doc,.docx"
                      required
                      className="mt-1.5 border-border"
                      onChange={(e) => setFormData({ ...formData, cvFile: e.target.files?.[0] ?? null })}
                    />
                  </div>
                  <div>
                    <Label>Upload portfolio or add portfolio link</Label>
                    <div className="mt-1.5 space-y-2">
                      <Input
                        type="file"
                        accept=".pdf,.doc,.docx,image/*"
                        className="border-border"
                        onChange={(e) => setFormData({ ...formData, portfolioFile: e.target.files?.[0] ?? null })}
                      />
                      <Input
                        placeholder="https://…"
                        value={formData.portfolioLink}
                        onChange={(e) => setFormData({ ...formData, portfolioLink: e.target.value })}
                        className="border-border"
                      />
                    </div>
                  </div>
                  <div>
                    <Label htmlFor="app-linkedin">LinkedIn profile link</Label>
                    <Input
                      id="app-linkedin"
                      placeholder="https://linkedin.com/in/…"
                      value={formData.linkedIn}
                      onChange={(e) => setFormData({ ...formData, linkedIn: e.target.value })}
                      className="mt-1.5 border-border"
                    />
                  </div>
                  <div>
                    <Label htmlFor="app-github">GitHub link</Label>
                    <Input
                      id="app-github"
                      placeholder="https://github.com/…"
                      value={formData.github}
                      onChange={(e) => setFormData({ ...formData, github: e.target.value })}
                      className="mt-1.5 border-border"
                    />
                  </div>
                  <div>
                    <Label htmlFor="app-website">Other social or personal website</Label>
                    <Input
                      id="app-website"
                      placeholder="https://…"
                      value={formData.otherWebsite}
                      onChange={(e) => setFormData({ ...formData, otherWebsite: e.target.value })}
                      className="mt-1.5 border-border"
                    />
                  </div>
                  <div>
                    <Label htmlFor="app-cover">Short note or cover message</Label>
                    <textarea
                      id="app-cover"
                      rows={4}
                      value={formData.coverMessage}
                      onChange={(e) => setFormData({ ...formData, coverMessage: e.target.value })}
                      className={cn(
                        "flex w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 mt-1.5 border-border",
                      )}
                      placeholder="Tell us why you're interested and what you'd bring…"
                    />
                  </div>
                  <DialogFooter>
                    <Button type="button" variant="outline" onClick={() => setApplicationOpen(false)}>
                      Cancel
                    </Button>
                    <Button type="submit" variant="cta">
                      Submit application
                    </Button>
                  </DialogFooter>
                </form>
              </>
            )}
          </DialogContent>
        </Dialog>

        {/* Talent pool dialog */}
        <Dialog open={talentPoolOpen} onOpenChange={setTalentPoolOpen}>
          <DialogContent className="max-w-lg max-h-[90vh] overflow-y-auto">
            {submitted ? (
              <>
                <DialogHeader>
                  <DialogTitle className="flex items-center gap-2">
                    <CheckCircle2 className="h-5 w-5 text-green-600" />
                    You're in the talent pool
                  </DialogTitle>
                  <DialogDescription>
                    We've saved your details and will review them when new roles open. We'll be in touch if there's a
                    match.
                  </DialogDescription>
                </DialogHeader>
                <DialogFooter>
                  <Button variant="outline" onClick={() => setTalentPoolOpen(false)}>
                    Close
                  </Button>
                </DialogFooter>
              </>
            ) : (
              <>
                <DialogHeader>
                  <DialogTitle>Join our talent pool</DialogTitle>
                  <DialogDescription>
                    No open role right now? Leave your details and we'll consider you for future positions. We review
                    the pool regularly and will reach out when there's a fit.
                  </DialogDescription>
                </DialogHeader>
                <form onSubmit={handleSubmitTalentPool} className="space-y-4">
                  <div>
                    <Label htmlFor="tp-name">Full name *</Label>
                    <Input
                      id="tp-name"
                      required
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      className="mt-1.5 border-border"
                    />
                  </div>
                  <div>
                    <Label htmlFor="tp-email">Email address *</Label>
                    <Input
                      id="tp-email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="mt-1.5 border-border"
                    />
                  </div>
                  <div>
                    <Label htmlFor="tp-phone">Phone number *</Label>
                    <Input
                      id="tp-phone"
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="mt-1.5 border-border"
                    />
                  </div>
                  <div>
                    <Label htmlFor="tp-department">Department or role of interest</Label>
                    <Input
                      id="tp-department"
                      value={formData.departmentOrRole}
                      onChange={(e) => setFormData({ ...formData, departmentOrRole: e.target.value })}
                      className="mt-1.5 border-border"
                      placeholder="e.g. Engineering, Design"
                    />
                  </div>
                  <div>
                    <Label>Roles you want to be considered for *</Label>
                    <p className="text-xs text-foreground/60 mt-1 mb-2">
                      Select all that apply. We'll match you to future openings in these areas.
                    </p>
                    <div className="flex flex-wrap gap-3 mt-2">
                      {DEPARTMENTS.map((d) => (
                        <label
                          key={d}
                          className="flex items-center gap-2 cursor-pointer text-sm text-foreground/80"
                        >
                          <Checkbox
                            checked={formData.rolesInterestedIn.includes(d)}
                            onCheckedChange={() => toggleRoleInterest(d)}
                          />
                          {d}
                        </label>
                      ))}
                    </div>
                  </div>
                  <div>
                    <Label>Upload CV *</Label>
                    <Input
                      type="file"
                      accept=".pdf,.doc,.docx"
                      required
                      className="mt-1.5 border-border"
                      onChange={(e) => setFormData({ ...formData, cvFile: e.target.files?.[0] ?? null })}
                    />
                  </div>
                  <div>
                    <Label>Upload portfolio or add portfolio link</Label>
                    <div className="mt-1.5 space-y-2">
                      <Input
                        type="file"
                        accept=".pdf,.doc,.docx,image/*"
                        className="border-border"
                        onChange={(e) => setFormData({ ...formData, portfolioFile: e.target.files?.[0] ?? null })}
                      />
                      <Input
                        placeholder="https://…"
                        value={formData.portfolioLink}
                        onChange={(e) => setFormData({ ...formData, portfolioLink: e.target.value })}
                        className="border-border"
                      />
                    </div>
                  </div>
                  <div>
                    <Label htmlFor="tp-linkedin">LinkedIn profile link</Label>
                    <Input
                      id="tp-linkedin"
                      placeholder="https://linkedin.com/in/…"
                      value={formData.linkedIn}
                      onChange={(e) => setFormData({ ...formData, linkedIn: e.target.value })}
                      className="mt-1.5 border-border"
                    />
                  </div>
                  <div>
                    <Label htmlFor="tp-github">GitHub link</Label>
                    <Input
                      id="tp-github"
                      placeholder="https://github.com/…"
                      value={formData.github}
                      onChange={(e) => setFormData({ ...formData, github: e.target.value })}
                      className="mt-1.5 border-border"
                    />
                  </div>
                  <div>
                    <Label htmlFor="tp-website">Other social or personal website</Label>
                    <Input
                      id="tp-website"
                      placeholder="https://…"
                      value={formData.otherWebsite}
                      onChange={(e) => setFormData({ ...formData, otherWebsite: e.target.value })}
                      className="mt-1.5 border-border"
                    />
                  </div>
                  <div>
                    <Label htmlFor="tp-cover">Short note or cover message</Label>
                    <textarea
                      id="tp-cover"
                      rows={4}
                      value={formData.coverMessage}
                      onChange={(e) => setFormData({ ...formData, coverMessage: e.target.value })}
                      className={cn(
                        "flex w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 mt-1.5 border-border",
                      )}
                      placeholder="Tell us a bit about yourself and what you're looking for…"
                    />
                  </div>
                  <div className="flex items-start gap-3 rounded-lg border border-border p-4 bg-muted/30">
                    <Checkbox
                      id="tp-permission"
                      checked={formData.permissionToStore}
                      onCheckedChange={(checked) =>
                        setFormData({ ...formData, permissionToStore: checked === true })
                      }
                    />
                    <label htmlFor="tp-permission" className="text-sm text-foreground/80 cursor-pointer leading-tight">
                      I give permission to store my details for future roles. Bunifu Capital may contact me when a
                      suitable role opens. *
                    </label>
                  </div>
                  <DialogFooter>
                    <Button type="button" variant="outline" onClick={() => setTalentPoolOpen(false)}>
                      Cancel
                    </Button>
                    <Button
                      type="submit"
                      variant="cta"
                      disabled={!formData.permissionToStore || formData.rolesInterestedIn.length === 0}
                    >
                      Join talent pool
                    </Button>
                  </DialogFooter>
                </form>
              </>
            )}
          </DialogContent>
        </Dialog>
      </main>
      <Footer />
    </div>
  );
}

export default CareersPage;
