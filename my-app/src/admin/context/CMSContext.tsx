import React, { createContext, useContext, useReducer, useMemo, useCallback } from "react";
import type {
  Article,
  Session,
  WaitlistEntry,
  DemoBooking,
  WorkingWithUsEntry,
  ContactEntry,
  NewsletterSubscriber,
  JobListing,
  JobApplicant,
  TalentPoolEntry,
  AdminProfile,
  NotificationItem,
} from "./types";
import {
  initialArticles,
  initialSessions,
  initialWaitlist,
  initialDemoBookings,
  initialWorkingWithUs,
  initialContacts,
  initialNewsletter,
  initialJobListings,
  initialTalentPool,
  initialAdminProfile,
  uid,
} from "./initialState";

export interface CMSState {
  articles: Article[];
  sessions: Session[];
  waitlist: WaitlistEntry[];
  demoBookings: DemoBooking[];
  workingWithUs: WorkingWithUsEntry[];
  contacts: ContactEntry[];
  newsletter: NewsletterSubscriber[];
  jobListings: JobListing[];
  talentPool: TalentPoolEntry[];
  adminProfile: AdminProfile;
  reviewedNotificationIds: Set<string>;
}

const initialState: CMSState = {
  articles: initialArticles,
  sessions: initialSessions,
  waitlist: initialWaitlist,
  demoBookings: initialDemoBookings,
  workingWithUs: initialWorkingWithUs,
  contacts: initialContacts,
  newsletter: initialNewsletter,
  jobListings: initialJobListings,
  talentPool: initialTalentPool,
  adminProfile: initialAdminProfile,
  reviewedNotificationIds: new Set(),
};

type CMSAction =
  | { type: "ARTICLE_SAVE"; payload: Omit<Article, "updatedAt"> & { updatedAt?: string } }
  | { type: "ARTICLE_DELETE"; payload: string }
  | { type: "ARTICLE_STATUS"; payload: { id: string; status: Article["status"] } }
  | { type: "SESSION_SAVE"; payload: Session }
  | { type: "SESSION_DELETE"; payload: string }
  | { type: "WAITLIST_UPDATE_STATUS"; payload: { id: string; status: WaitlistEntry["status"] } }
  | { type: "WAITLIST_REVIEWED"; payload: string }
  | { type: "DEMO_UPDATE_STATUS"; payload: { id: string; status: DemoBooking["status"] } }
  | { type: "DEMO_REVIEWED"; payload: string }
  | { type: "WORKING_WITH_US_UPDATE_STATUS"; payload: { id: string; status: WorkingWithUsEntry["status"] } }
  | { type: "WORKING_REVIEWED"; payload: string }
  | { type: "CONTACT_UPDATE_STATUS"; payload: { id: string; status: ContactEntry["status"] } }
  | { type: "CONTACT_REVIEWED"; payload: string }
  | { type: "NEWSLETTER_ADD"; payload: Omit<NewsletterSubscriber, "id" | "dateSubscribed"> }
  | { type: "NEWSLETTER_REMOVE"; payload: string }
  | { type: "JOB_SAVE"; payload: Omit<JobListing, "applicants" | "updatedAt"> & { applicants?: JobApplicant[]; updatedAt?: string } }
  | { type: "JOB_DELETE"; payload: string }
  | { type: "APPLICANT_UPDATE_STATUS"; payload: { jobId: string; applicantId: string; status: JobApplicant["status"] } }
  | { type: "APPLICANT_REVIEWED"; payload: { jobId: string; applicantId: string } }
  | { type: "TALENT_POOL_UPDATE_TAG"; payload: { id: string; tag: TalentPoolEntry["tag"] } }
  | { type: "ADMIN_PROFILE_SAVE"; payload: Partial<AdminProfile> }
  | { type: "NOTIFICATION_MARK_REVIEWED"; payload: { type: string; entityId: string; subId?: string } };

function reducer(state: CMSState, action: CMSAction): CMSState {
  const now = new Date().toISOString().slice(0, 10);
  switch (action.type) {
    case "ARTICLE_SAVE": {
      const a = action.payload;
      const updatedAt = a.updatedAt || now;
      const existing = state.articles.find((x) => x.id === a.id);
      const next: Article = {
        ...a,
        id: a.id || uid(),
        datePublished: a.status === "Published" ? (existing?.datePublished || updatedAt) : (existing?.datePublished || ""),
        updatedAt,
      };
      const list = existing
        ? state.articles.map((x) => (x.id === a.id ? next : x))
        : [...state.articles, next as Article];
      return { ...state, articles: list };
    }
    case "ARTICLE_DELETE": {
      return { ...state, articles: state.articles.filter((a) => a.id !== action.payload) };
    }
    case "ARTICLE_STATUS": {
      return {
        ...state,
        articles: state.articles.map((a) =>
          a.id === action.payload.id ? { ...a, status: action.payload.status, updatedAt: now } : a
        ),
      };
    }
    case "SESSION_SAVE": {
      const s = action.payload;
      const existing = state.sessions.find((x) => x.id === s.id);
      const session: Session = { ...s, updatedAt: now };
      const list = existing ? state.sessions.map((x) => (x.id === s.id ? session : x)) : [...state.sessions, session];
      return { ...state, sessions: list };
    }
    case "SESSION_DELETE": {
      return { ...state, sessions: state.sessions.filter((s) => s.id !== action.payload) };
    }
    case "WAITLIST_UPDATE_STATUS": {
      return {
        ...state,
        waitlist: state.waitlist.map((w) =>
          w.id === action.payload.id ? { ...w, status: action.payload.status } : w
        ),
      };
    }
    case "WAITLIST_REVIEWED": {
      return {
        ...state,
        waitlist: state.waitlist.map((w) => (w.id === action.payload ? { ...w, notificationReviewed: true } : w)),
        reviewedNotificationIds: new Set(state.reviewedNotificationIds).add(`waitlist-${action.payload}`),
      };
    }
    case "DEMO_UPDATE_STATUS": {
      return {
        ...state,
        demoBookings: state.demoBookings.map((d) =>
          d.id === action.payload.id ? { ...d, status: action.payload.status } : d
        ),
      };
    }
    case "DEMO_REVIEWED": {
      const id = action.payload;
      return {
        ...state,
        demoBookings: state.demoBookings.map((d) => (d.id === id ? { ...d, notificationReviewed: true } : d)),
        reviewedNotificationIds: new Set(state.reviewedNotificationIds).add(`demo-${id}`),
      };
    }
    case "WORKING_WITH_US_UPDATE_STATUS": {
      return {
        ...state,
        workingWithUs: state.workingWithUs.map((w) =>
          w.id === action.payload.id ? { ...w, status: action.payload.status } : w
        ),
      };
    }
    case "WORKING_REVIEWED": {
      return {
        ...state,
        workingWithUs: state.workingWithUs.map((w) => (w.id === action.payload ? { ...w, notificationReviewed: true } : w)),
        reviewedNotificationIds: new Set(state.reviewedNotificationIds).add(`partnership-${action.payload}`),
      };
    }
    case "CONTACT_UPDATE_STATUS": {
      return {
        ...state,
        contacts: state.contacts.map((c) =>
          c.id === action.payload.id ? { ...c, status: action.payload.status } : c
        ),
      };
    }
    case "CONTACT_REVIEWED": {
      return {
        ...state,
        contacts: state.contacts.map((c) => (c.id === action.payload ? { ...c, notificationReviewed: true } : c)),
        reviewedNotificationIds: new Set(state.reviewedNotificationIds).add(`contact-${action.payload}`),
      };
    }
    case "NEWSLETTER_ADD": {
      const sub: NewsletterSubscriber = {
        id: uid(),
        ...action.payload,
        dateSubscribed: now,
      };
      return { ...state, newsletter: [...state.newsletter, sub] };
    }
    case "NEWSLETTER_REMOVE": {
      return { ...state, newsletter: state.newsletter.filter((n) => n.id !== action.payload) };
    }
    case "JOB_SAVE": {
      const j = action.payload;
      const existing = state.jobListings.find((x) => x.id === j.id);
      const job: JobListing = {
        ...j,
        id: j.id || uid(),
        applicants: existing?.applicants ?? j.applicants ?? [],
        updatedAt: now,
      };
      const list = existing
        ? state.jobListings.map((x) => (x.id === j.id ? job : x))
        : [...state.jobListings, job];
      return { ...state, jobListings: list };
    }
    case "JOB_DELETE": {
      return { ...state, jobListings: state.jobListings.filter((j) => j.id !== action.payload) };
    }
    case "APPLICANT_UPDATE_STATUS": {
      const { jobId, applicantId, status } = action.payload;
      return {
        ...state,
        jobListings: state.jobListings.map((job) =>
          job.id !== jobId
            ? job
            : {
                ...job,
                applicants: job.applicants.map((a) =>
                  a.id === applicantId ? { ...a, status } : a
                ),
              }
        ),
      };
    }
    case "APPLICANT_REVIEWED": {
      const { jobId, applicantId } = action.payload;
      return {
        ...state,
        jobListings: state.jobListings.map((job) =>
          job.id !== jobId
            ? job
            : {
                ...job,
                applicants: job.applicants.map((a) =>
                  a.id === applicantId ? { ...a, notificationReviewed: true } : a
                ),
              }
        ),
        reviewedNotificationIds: new Set(state.reviewedNotificationIds).add(`job_application-${jobId}-${applicantId}`),
      };
    }
    case "TALENT_POOL_UPDATE_TAG": {
      return {
        ...state,
        talentPool: state.talentPool.map((t) =>
          t.id === action.payload.id ? { ...t, tag: action.payload.tag } : t
        ),
      };
    }
    case "ADMIN_PROFILE_SAVE": {
      return { ...state, adminProfile: { ...state.adminProfile, ...action.payload } };
    }
    case "NOTIFICATION_MARK_REVIEWED": {
      const key = action.payload.subId
        ? `${action.payload.type}-${action.payload.entityId}-${action.payload.subId}`
        : `${action.payload.type}-${action.payload.entityId}`;
      return { ...state, reviewedNotificationIds: new Set(state.reviewedNotificationIds).add(key) };
    }
    default:
      return state;
  }
}

function getNotifications(state: CMSState): NotificationItem[] {
  const items: NotificationItem[] = [];
  const key = (type: string, id: string, sub?: string) => (sub ? `${type}-${id}-${sub}` : `${type}-${id}`);

  state.waitlist
    .filter((w) => w.status === "New" && !state.reviewedNotificationIds.has(key("waitlist", w.id)))
    .forEach((w) =>
      items.push({
        id: key("waitlist", w.id),
        type: "waitlist",
        entityId: w.id,
        name: w.name,
        date: w.dateJoined,
        status: w.status,
        reviewed: false,
        href: "/admin/waitlist",
      })
    );

  state.demoBookings
    .filter((d) => d.status === "Pending Review" && !state.reviewedNotificationIds.has(key("demo", d.id)))
    .forEach((d) =>
      items.push({
        id: key("demo", d.id),
        type: "demo",
        entityId: d.id,
        name: d.name,
        date: d.preferredDate,
        status: d.status,
        reviewed: false,
        href: "/admin/demo-bookings",
      })
    );

  state.contacts
    .filter((c) => c.status !== "Resolved" && !state.reviewedNotificationIds.has(key("contact", c.id)) )
    .forEach((c) =>
      items.push({
        id: key("contact", c.id),
        type: "contact",
        entityId: c.id,
        name: c.name,
        date: c.date,
        status: c.status,
        reviewed: false,
        href: "/admin/contacts",
      })
    );

  state.workingWithUs
    .filter((w) => w.status === "New" && !state.reviewedNotificationIds.has(key("partnership", w.id)))
    .forEach((w) =>
      items.push({
        id: key("partnership", w.id),
        type: "partnership",
        entityId: w.id,
        name: w.name,
        date: w.date,
        status: w.status,
        reviewed: false,
        href: "/admin/working-with-us",
      })
    );

  state.jobListings.forEach((job) =>
    job.applicants
      .filter((a) => a.status === "New" && !state.reviewedNotificationIds.has(key("job_application", job.id, a.id)))
      .forEach((a) =>
        items.push({
          id: key("job_application", job.id, a.id),
          type: "job_application",
          entityId: job.id,
          applicantId: a.id,
          name: a.name,
          date: a.dateApplied,
          status: a.status,
          reviewed: false,
          href: `/admin/jobs/${job.id}`,
        })
      )
  );

  return items.sort((a, b) => b.date.localeCompare(a.date));
}

const CMSContext = createContext<{
  state: CMSState;
  dispatch: React.Dispatch<CMSAction>;
  notifications: NotificationItem[];
  markNotificationReviewed: (type: string, entityId: string, subId?: string) => void;
} | null>(null);

export function CMSProvider({ children }: { children: React.ReactNode }) {
  const [state, dispatch] = useReducer(reducer, initialState);
  const notifications = useMemo(() => getNotifications(state), [state]);
  const markNotificationReviewed = useCallback((type: string, entityId: string, subId?: string) => {
    dispatch({ type: "NOTIFICATION_MARK_REVIEWED", payload: { type, entityId, subId } });
    if (type === "waitlist") dispatch({ type: "WAITLIST_REVIEWED", payload: entityId });
    if (type === "demo") dispatch({ type: "DEMO_REVIEWED", payload: entityId });
    if (type === "contact") dispatch({ type: "CONTACT_REVIEWED", payload: entityId });
    if (type === "partnership") dispatch({ type: "WORKING_REVIEWED", payload: entityId });
    if (type === "job_application" && subId) dispatch({ type: "APPLICANT_REVIEWED", payload: { jobId: entityId, applicantId: subId } });
  }, []);
  const value = useMemo(
    () => ({ state, dispatch, notifications, markNotificationReviewed }),
    [state, notifications, markNotificationReviewed]
  );
  return <CMSContext.Provider value={value}>{children}</CMSContext.Provider>;
}

export function useCMS() {
  const ctx = useContext(CMSContext);
  if (!ctx) throw new Error("useCMS must be used within CMSProvider");
  return ctx;
}
