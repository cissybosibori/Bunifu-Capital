export interface WaitlistPayload {
  name: string;
  email: string;
  type: string;
  challenges: string;
}

export interface ContactPayload {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export interface DemoBookingPayload {
  name: string;
  email: string;
  organization: string;
  preferredDate: string;
  message: string;
}

export interface NewsletterPayload {
  email: string;
  name?: string;
}

export interface MeetingPayload {
  name: string;
  email: string;
  preferredTime: string;
  message: string;
}

const NOT_IMPLEMENTED = "Backend not implemented";

export async function submitWaitlist(_payload: WaitlistPayload): Promise<void> {
  throw new Error(NOT_IMPLEMENTED);
}

export async function submitContact(_payload: ContactPayload): Promise<void> {
  throw new Error(NOT_IMPLEMENTED);
}

export async function submitDemoBooking(_payload: DemoBookingPayload): Promise<void> {
  throw new Error(NOT_IMPLEMENTED);
}

export async function submitNewsletter(_payload: NewsletterPayload): Promise<void> {
  throw new Error(NOT_IMPLEMENTED);
}

export async function submitMeeting(_payload: MeetingPayload): Promise<void> {
  throw new Error(NOT_IMPLEMENTED);
}
