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
} from "@/admin/context/types";

const NOT_IMPLEMENTED = "Backend not implemented";

export async function getArticles(): Promise<Article[]> {
  throw new Error(NOT_IMPLEMENTED);
}

export async function getArticle(_id: string): Promise<Article | null> {
  throw new Error(NOT_IMPLEMENTED);
}

export async function getSessions(): Promise<Session[]> {
  throw new Error(NOT_IMPLEMENTED);
}

export async function getWaitlist(): Promise<WaitlistEntry[]> {
  throw new Error(NOT_IMPLEMENTED);
}

export async function getDemoBookings(): Promise<DemoBooking[]> {
  throw new Error(NOT_IMPLEMENTED);
}

export async function getWorkingWithUs(): Promise<WorkingWithUsEntry[]> {
  throw new Error(NOT_IMPLEMENTED);
}

export async function getContacts(): Promise<ContactEntry[]> {
  throw new Error(NOT_IMPLEMENTED);
}

export async function getNewsletterSubscribers(): Promise<NewsletterSubscriber[]> {
  throw new Error(NOT_IMPLEMENTED);
}

export async function getJobListings(): Promise<JobListing[]> {
  throw new Error(NOT_IMPLEMENTED);
}

export async function getJobListing(_id: string): Promise<JobListing | null> {
  throw new Error(NOT_IMPLEMENTED);
}

export async function getTalentPool(): Promise<TalentPoolEntry[]> {
  throw new Error(NOT_IMPLEMENTED);
}
