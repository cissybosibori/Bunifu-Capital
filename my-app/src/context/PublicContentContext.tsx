import { createContext, useContext, type ReactNode } from "react";
import type { LucideIcon } from "lucide-react";

export type ResourceItem = {
  type: string;
  icon: LucideIcon;
  title: string;
  author: string;
  category: string;
  gradient: string;
  lineColor: { vertical: string; horizontal: string };
  heroStyle?: { background: string; accent: string };
};

export type PublicJob = {
  id: string;
  title: string;
  department: string;
  location: string;
  employmentType: string;
  summary: string;
  description: string;
  responsibilities: string[];
  requirements: string[];
  niceToHave: string[];
};

type PublicContentState = {
  featuredResources: ResourceItem[];
  articles: ResourceItem[];
  communitySessions: ResourceItem[];
  openRoles: PublicJob[];
};

const initialState: PublicContentState = {
  featuredResources: [],
  articles: [],
  communitySessions: [],
  openRoles: [],
};

const PublicContentContext = createContext<PublicContentState>(initialState);

export function PublicContentProvider({ children }: { children: ReactNode }) {
  return (
    <PublicContentContext.Provider value={initialState}>
      {children}
    </PublicContentContext.Provider>
  );
}

export function usePublicContent() {
  const ctx = useContext(PublicContentContext);
  if (!ctx) throw new Error("usePublicContent must be used within PublicContentProvider");
  return ctx;
}
