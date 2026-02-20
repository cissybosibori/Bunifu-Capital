import type {
  Article,
  Session,
  WaitlistEntry,
  DemoBooking,
  WorkingWithUsEntry,
  ContactEntry,
  NewsletterSubscriber,
  JobListing,
  TalentPoolEntry,
  AdminProfile,
} from "./types";

export function uid(): string {
  return Math.random().toString(36).slice(2, 11);
}

export const initialArticles: Article[] = [];
export const initialSessions: Session[] = [];
export const initialWaitlist: WaitlistEntry[] = [];
export const initialDemoBookings: DemoBooking[] = [];
export const initialWorkingWithUs: WorkingWithUsEntry[] = [];
export const initialContacts: ContactEntry[] = [];
export const initialNewsletter: NewsletterSubscriber[] = [];
export const initialJobListings: JobListing[] = [];
export const initialTalentPool: TalentPoolEntry[] = [];

export const initialAdminProfile: AdminProfile = {
  email: "",
  password: "",
};
