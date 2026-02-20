import { Link } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  ChartLegend,
  ChartLegendContent,
} from "@/components/ui/chart";
import { useCMS } from "@/admin/context/CMSContext";
import { buildTrendData, buildMonthlyData } from "@/lib/chartData";
import {
  AreaChart,
  Area,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
} from "recharts";
import { ArrowUpRight } from "lucide-react";

const RAINBOW = {
  red: "hsl(var(--rainbow-red))",
  orange: "hsl(var(--rainbow-orange))",
  yellow: "hsl(var(--rainbow-yellow))",
  green: "hsl(var(--rainbow-green))",
  blue: "hsl(var(--rainbow-blue))",
  indigo: "hsl(var(--rainbow-indigo))",
  violet: "hsl(var(--rainbow-violet))",
} as const;

// Activity trend: cool spectrum (blue → indigo → violet) for a cohesive stacked look
const trendChartConfig = {
  waitlist: { label: "Waitlist", color: RAINBOW.blue },
  demos: { label: "Demos", color: RAINBOW.indigo },
  contacts: { label: "Contacts", color: RAINBOW.violet },
};

const barChartConfig = {
  signups: { label: "Signups", color: RAINBOW.indigo },
};

function useDashboardStats() {
  const { state } = useCMS();
  const jobApplications = state.jobListings.reduce((acc, j) => acc + j.applicants.length, 0);
  const publishedArticles = state.articles.filter((a) => a.status === "Published").length;
  const publishedSessions = state.sessions.filter((s) => s.status === "Published").length;
  return {
    waitlist: state.waitlist.length,
    demoBookings: state.demoBookings.length,
    contactInquiries: state.contacts.length,
    newsletterSubscribers: state.newsletter.length,
    jobApplications,
    talentPoolEntries: state.talentPool.length,
    publishedArticles,
    communitySessions: publishedSessions,
  };
}

function useRecentActivity() {
  const { state } = useCMS();
  return {
    recentWaitlist: state.waitlist.slice(0, 5),
    recentDemoRequests: state.demoBookings.slice(0, 3),
    recentContactInquiries: state.contacts.slice(0, 3),
  };
}

const pieColors = [RAINBOW.red, RAINBOW.orange, RAINBOW.yellow, RAINBOW.green, RAINBOW.blue, RAINBOW.indigo, RAINBOW.violet];

export function DashboardOverview() {
  const stats = useDashboardStats();
  const { recentWaitlist, recentDemoRequests, recentContactInquiries } = useRecentActivity();
  const trendData = buildTrendData();
  const monthlyData = buildMonthlyData();
  const hasRecentActivity = recentWaitlist.length > 0 || recentDemoRequests.length > 0 || recentContactInquiries.length > 0;
  const metricLinks = [
    { label: "Waitlist", value: stats.waitlist, href: "/admin/waitlist", color: "text-[hsl(var(--rainbow-red))]" },
    { label: "Demos", value: stats.demoBookings, href: "/admin/demo-bookings", color: "text-[hsl(var(--rainbow-orange))]" },
    { label: "Contacts", value: stats.contactInquiries, href: "/admin/contacts", color: "text-[hsl(var(--rainbow-yellow))]" },
    { label: "Newsletter", value: stats.newsletterSubscribers, href: "/admin/newsletter", color: "text-[hsl(var(--rainbow-green))]" },
    { label: "Careers", value: stats.jobApplications + stats.talentPoolEntries, href: "/admin/jobs", color: "text-[hsl(var(--rainbow-blue))]" },
    { label: "Resources", value: stats.publishedArticles + stats.communitySessions, href: "/admin/articles", color: "text-[hsl(var(--rainbow-violet))]" },
  ];

  const activityByCategory = [
    { name: "Waitlist", value: stats.waitlist },
    { name: "Newsletter", value: stats.newsletterSubscribers },
    { name: "Contacts", value: stats.contactInquiries },
    { name: "Demos", value: stats.demoBookings },
    { name: "Careers", value: stats.jobApplications + stats.talentPoolEntries },
    { name: "Resources", value: stats.publishedArticles + stats.communitySessions },
  ];

  return (
    <div className="space-y-8">
      {/* Minimal summary strip */}
      <div className="flex flex-wrap items-center gap-x-8 gap-y-3 border-b border-border pb-6">
        {metricLinks.map(({ label, value, href, color }) => (
          <Link
            key={label}
            to={href}
            className={`group flex items-baseline gap-1.5 text-sm transition-colors hover:opacity-80 ${color}`}
          >
            <span className="font-semibold tabular-nums">{value.toLocaleString()}</span>
            <span className="text-muted-foreground group-hover:text-foreground">{label}</span>
            <ArrowUpRight className="h-3.5 w-3.5 opacity-0 -translate-y-px group-hover:opacity-100 group-hover:translate-y-0 transition-all" />
          </Link>
        ))}
      </div>

      {/* Charts row */}
      <div className="grid gap-6 lg:grid-cols-2">
        <Card className="border-border bg-card overflow-hidden">
          <CardHeader className="pb-2">
            <CardTitle className="text-base font-semibold">Activity trend</CardTitle>
            <p className="text-xs text-muted-foreground">Last 7 days</p>
          </CardHeader>
          <CardContent className="h-[240px] pl-0">
            <ChartContainer config={trendChartConfig} className="h-full w-full">
              <AreaChart data={trendData} margin={{ left: 8, right: 8 }}>
                <CartesianGrid strokeDasharray="3 3" className="stroke-border/50" vertical={false} />
                <XAxis dataKey="day" tickLine={false} axisLine={false} />
                <YAxis hide />
                <ChartTooltip content={<ChartTooltipContent indicator="line" />} />
                <ChartLegend content={<ChartLegendContent />} />
                <Area type="monotone" dataKey="waitlist" stackId="1" stroke={RAINBOW.blue} fill={RAINBOW.blue} fillOpacity={0.5} strokeWidth={1.5} />
                <Area type="monotone" dataKey="demos" stackId="1" stroke={RAINBOW.indigo} fill={RAINBOW.indigo} fillOpacity={0.5} strokeWidth={1.5} />
                <Area type="monotone" dataKey="contacts" stackId="1" stroke={RAINBOW.violet} fill={RAINBOW.violet} fillOpacity={0.5} strokeWidth={1.5} />
              </AreaChart>
            </ChartContainer>
          </CardContent>
        </Card>

        <Card className="border-border bg-card overflow-hidden">
          <CardHeader className="pb-2">
            <CardTitle className="text-base font-semibold">Monthly signups</CardTitle>
            <p className="text-xs text-muted-foreground">Last 5 months</p>
          </CardHeader>
          <CardContent className="h-[240px] pl-0">
            <ChartContainer config={barChartConfig} className="h-full w-full">
              <BarChart data={monthlyData} margin={{ left: 8, right: 8 }}>
                <defs>
                  <linearGradient id="monthlyBarGradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor={RAINBOW.indigo} />
                    <stop offset="100%" stopColor={RAINBOW.violet} />
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" className="stroke-border/50" vertical={false} />
                <XAxis dataKey="month" tickLine={false} axisLine={false} />
                <YAxis hide />
                <ChartTooltip content={<ChartTooltipContent />} />
                <Bar dataKey="signups" radius={[4, 4, 0, 0]} fill="url(#monthlyBarGradient)" />
              </BarChart>
            </ChartContainer>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        <Card className="border-border bg-card overflow-hidden lg:col-span-1">
          <CardHeader className="pb-2">
            <CardTitle className="text-base font-semibold">By category</CardTitle>
            <p className="text-xs text-muted-foreground">Total entries</p>
          </CardHeader>
          <CardContent className="h-[220px]">
            <ChartContainer config={{}} className="h-full w-full [&_.recharts-pie]:outline-none">
              <PieChart>
                <ChartTooltip content={<ChartTooltipContent hideIndicator />} />
                <Pie
                  data={activityByCategory}
                  dataKey="value"
                  nameKey="name"
                  cx="50%"
                  cy="50%"
                  innerRadius={52}
                  outerRadius={80}
                  paddingAngle={2}
                  stroke="transparent"
                >
                  {activityByCategory.map((_, i) => (
                    <Cell key={i} fill={pieColors[i % pieColors.length]} />
                  ))}
                </Pie>
              </PieChart>
            </ChartContainer>
          </CardContent>
        </Card>

        {/* Single minimal recent activity list */}
        <Card className="border-border bg-card lg:col-span-2">
          <CardHeader className="pb-2">
            <CardTitle className="text-base font-semibold">Recent activity</CardTitle>
            <p className="text-xs text-muted-foreground">Waitlist, demos, contacts</p>
          </CardHeader>
          <CardContent>
            {!hasRecentActivity ? (
              <p className="text-sm text-muted-foreground py-4">No recent activity yet.</p>
            ) : (
            <ul className="space-y-2">
              {recentWaitlist.slice(0, 2).map((row) => (
                <li key={`w-${row.id}`}>
                  <Link to="/admin/waitlist" className="flex items-center justify-between rounded-md py-1.5 px-2 -mx-2 text-sm hover:bg-muted/60 transition-colors group">
                    <span className="font-medium truncate">{row.name}</span>
                    <span className="text-muted-foreground text-xs shrink-0 ml-2">Waitlist · {row.dateJoined}</span>
                    <span className="inline-block w-2 h-2 rounded-full bg-[hsl(var(--rainbow-red))] shrink-0 ml-2 opacity-0 group-hover:opacity-100" />
                  </Link>
                </li>
              ))}
              {recentDemoRequests.slice(0, 2).map((row) => (
                <li key={`d-${row.id}`}>
                  <Link to="/admin/demo-bookings" className="flex items-center justify-between rounded-md py-1.5 px-2 -mx-2 text-sm hover:bg-muted/60 transition-colors group">
                    <span className="font-medium truncate">{row.name}</span>
                    <span className="text-muted-foreground text-xs shrink-0 ml-2">Demo · {row.preferredDate}</span>
                    <span className="inline-block w-2 h-2 rounded-full bg-[hsl(var(--rainbow-orange))] shrink-0 ml-2 opacity-0 group-hover:opacity-100" />
                  </Link>
                </li>
              ))}
              {recentContactInquiries.slice(0, 2).map((row) => (
                <li key={`c-${row.id}`}>
                  <Link to="/admin/contacts" className="flex items-center justify-between rounded-md py-1.5 px-2 -mx-2 text-sm hover:bg-muted/60 transition-colors group">
                    <span className="font-medium truncate">{row.name}</span>
                    <span className="text-muted-foreground text-xs shrink-0 ml-2">Contact · {row.date}</span>
                    <span className="inline-block w-2 h-2 rounded-full bg-[hsl(var(--rainbow-blue))] shrink-0 ml-2 opacity-0 group-hover:opacity-100" />
                  </Link>
                </li>
              ))}
            </ul>
            )}
            <div className="flex gap-2 mt-4 pt-3 border-t border-border">
              <Link to="/admin/waitlist" className="text-xs font-medium text-[hsl(var(--rainbow-red))] hover:underline">Waitlist</Link>
              <Link to="/admin/demo-bookings" className="text-xs font-medium text-[hsl(var(--rainbow-orange))] hover:underline">Demos</Link>
              <Link to="/admin/contacts" className="text-xs font-medium text-[hsl(var(--rainbow-blue))] hover:underline">Contacts</Link>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
