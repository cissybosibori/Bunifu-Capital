import { NavLink, Outlet, useLocation, useNavigate } from "react-router-dom";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarInset,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import {
  LayoutDashboard,
  FileText,
  CalendarDays,
  Users,
  CalendarCheck,
  Briefcase,
  Mail,
  Newspaper,
  UserCircle,
  LogOut,
  ChevronRight,
  Bell,
} from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ScrollArea } from "@/components/ui/scroll-area";
import { useCMS } from "@/admin/context/CMSContext";
const navGroups = [
  { label: "Dashboard", textClass: "text-rainbow-red", borderClass: "border-l-rainbow-red", items: [{ to: "/admin", label: "Overview", icon: LayoutDashboard }] },
  {
    label: "Resources",
    textClass: "text-rainbow-orange",
    borderClass: "border-l-rainbow-orange",
    items: [
      { to: "/admin/articles", label: "Articles", icon: FileText },
      { to: "/admin/sessions", label: "Sessions", icon: CalendarDays },
    ],
  },
  {
    label: "Get Involved",
    textClass: "text-rainbow-yellow",
    borderClass: "border-l-rainbow-yellow",
    items: [
      { to: "/admin/waitlist", label: "Waitlist", icon: Users },
      { to: "/admin/demo-bookings", label: "Demo Bookings", icon: CalendarCheck },
      { to: "/admin/working-with-us", label: "Working With Us", icon: Briefcase },
      { to: "/admin/contacts", label: "Contacts", icon: Mail },
      { to: "/admin/newsletter", label: "Newsletter", icon: Newspaper },
    ],
  },
  {
    label: "Careers",
    textClass: "text-rainbow-green",
    borderClass: "border-l-rainbow-green",
    items: [
      { to: "/admin/jobs", label: "Job Listings", icon: Briefcase },
      { to: "/admin/talent-pool", label: "Talent Pool", icon: Users },
    ],
  },
  {
    label: "Settings",
    textClass: "text-rainbow-blue",
    borderClass: "border-l-rainbow-blue",
    items: [
      { to: "/admin/settings", label: "Admin profile", icon: UserCircle },
      { to: "/admin/logout", label: "Logout", icon: LogOut },
    ],
  },
];

function isActive(pathname: string, to: string, end: boolean) {
  if (end) return pathname === to;
  return pathname === to || pathname.startsWith(to + "/");
}

const notificationTypeLabel: Record<string, string> = {
  waitlist: "Waitlist",
  demo: "Demo booking",
  contact: "Contact",
  partnership: "Partnership",
  job_application: "Job application",
};

export function AdminLayout() {
  const location = useLocation();
  const navigate = useNavigate();
  const { notifications, markNotificationReviewed } = useCMS();

  return (
    <SidebarProvider>
      <Sidebar side="left" variant="sidebar" collapsible="offcanvas" className="border-r border-sidebar-border">
        <SidebarHeader className="border-b border-sidebar-border p-4">
          <NavLink to="/admin" className="flex items-center gap-2">
            <span className="text-lg font-semibold tracking-tight bg-gradient-to-r from-[hsl(var(--rainbow-red))] via-[hsl(var(--rainbow-orange))] to-[hsl(var(--rainbow-yellow))] bg-clip-text text-transparent">
              Bunifu Capital
            </span>
            <span className="text-xs text-muted-foreground">Admin</span>
          </NavLink>
        </SidebarHeader>
        <SidebarContent>
          {navGroups.map((group) => (
            <SidebarGroup key={group.label} className={`relative pl-3 border-l-2 ${group.borderClass}`}>
              <SidebarGroupLabel className={`text-xs font-semibold uppercase tracking-wider ${group.textClass}`}>
                {group.label}
              </SidebarGroupLabel>
              <SidebarGroupContent>
                <SidebarMenu>
                  {group.items.map((item) => (
                    <SidebarMenuItem key={item.to}>
                      <SidebarMenuButton asChild isActive={isActive(location.pathname, item.to, item.to === "/admin")}>
                        <NavLink to={item.to} end={item.to === "/admin"}>
                          <item.icon className="h-4 w-4" />
                          <span>{item.label}</span>
                          <ChevronRight className="ml-auto h-4 w-4 opacity-50" />
                        </NavLink>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  ))}
                </SidebarMenu>
              </SidebarGroupContent>
            </SidebarGroup>
          ))}
        </SidebarContent>
        <SidebarFooter className="border-t border-sidebar-border p-2">
          <p className="px-2 text-xs text-muted-foreground">Bunifu Capital CMS</p>
        </SidebarFooter>
      </Sidebar>
      <SidebarInset>
        <header className="sticky top-0 z-10 flex h-14 items-center gap-4 border-b border-border bg-card px-6 shadow-sm overflow-hidden">
          <div className="absolute inset-x-0 top-0 h-0.5 bg-[linear-gradient(to_right,hsl(var(--rainbow-red)),hsl(var(--rainbow-orange)),hsl(var(--rainbow-yellow)),hsl(var(--rainbow-green)),hsl(var(--rainbow-blue)),hsl(var(--rainbow-indigo)),hsl(var(--rainbow-violet)))]" aria-hidden />
          <SidebarTrigger className="-ml-1" />
          <Separator orientation="vertical" className="h-6" />
          <h1 className="text-lg font-semibold tracking-tight text-foreground flex-1">
            {location.pathname === "/admin" && "Overview"}
            {location.pathname === "/admin/articles" && "Articles"}
            {location.pathname.startsWith("/admin/articles/") && "Edit Article"}
            {location.pathname === "/admin/sessions" && "Sessions"}
            {location.pathname === "/admin/waitlist" && "Waitlist"}
            {location.pathname === "/admin/demo-bookings" && "Demo Bookings"}
            {location.pathname === "/admin/working-with-us" && "Working With Us"}
            {location.pathname === "/admin/contacts" && "Contacts"}
            {location.pathname === "/admin/newsletter" && "Newsletter"}
            {location.pathname === "/admin/jobs" && "Job Listings"}
            {location.pathname.match(/^\/admin\/jobs\/[^/]+$/) && "Job details"}
            {location.pathname.endsWith("/edit") && "Edit Job"}
            {location.pathname === "/admin/talent-pool" && "Talent Pool"}
            {location.pathname === "/admin/settings" && "Settings"}
            {location.pathname === "/admin/logout" && "Logout"}
          </h1>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon" className="relative rounded-full">
                <Bell className="h-5 w-5" />
                {notifications.length > 0 && (
                  <span className="absolute -top-0.5 -right-0.5 flex h-5 min-w-5 items-center justify-center rounded-full bg-destructive text-[10px] font-medium text-destructive-foreground">
                    {notifications.length > 99 ? "99+" : notifications.length}
                  </span>
                )}
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-[320px] p-0">
              <div className="border-b border-border px-3 py-2">
                <p className="font-medium text-sm">Notifications</p>
                <p className="text-xs text-muted-foreground">{notifications.length} unreviewed</p>
              </div>
              <ScrollArea className="h-[280px]">
                {notifications.length === 0 ? (
                  <div className="p-4 text-center text-sm text-muted-foreground">No new notifications</div>
                ) : (
                  notifications.map((n) => (
                    <button
                      key={n.id}
                      type="button"
                      className="flex w-full flex-col items-start gap-0.5 border-b border-border px-3 py-2.5 text-left hover:bg-muted/60 transition-colors"
                      onClick={() => {
                        if (n.type === "job_application" && n.applicantId) {
                          markNotificationReviewed(n.type, n.entityId, n.applicantId);
                        } else {
                          markNotificationReviewed(n.type, n.entityId);
                        }
                        navigate(n.href);
                      }}
                    >
                      <span className="text-xs font-medium text-muted-foreground">{notificationTypeLabel[n.type] || n.type}</span>
                      <span className="text-sm font-medium">{n.name}</span>
                      <span className="text-xs text-muted-foreground">{n.date} · {n.status}</span>
                    </button>
                  ))
                )}
              </ScrollArea>
              {notifications.length > 0 && (
                <div className="border-t border-border p-2">
                  <p className="text-xs text-muted-foreground px-2">Click a notification to go to the page and mark it reviewed.</p>
                </div>
              )}
            </DropdownMenuContent>
          </DropdownMenu>
        </header>
        <div className="flex-1 p-6">
          <Outlet />
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
}
