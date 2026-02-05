import { Route, Routes } from "react-router-dom";

import Index from "@/pages/index";
import CreativesPage from "@/pages/CreativesPage";
import FinancialInstitutionsPage from "@/pages/FinancialInstitutionsPage";
import PartnershipsPage from "@/pages/PartnershipsPage";
import ResourcesPage from "@/pages/ResourcesPage";
import WaitlistPage from "@/pages/WaitlistPage";
import PricingPage from "@/pages/PricingPage";
import CareersPage from "@/pages/CareersPage";
import NotFound from "@/pages/NotFound";
import { Toaster } from "@/components/ui/toaster";

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/creatives" element={<CreativesPage />} />
        <Route path="/financial-institutions" element={<FinancialInstitutionsPage />} />
        <Route path="/partnerships" element={<PartnershipsPage />} />
        <Route path="/resources" element={<ResourcesPage />} />
        <Route path="/waitlist" element={<WaitlistPage />} />
        <Route path="/pricing" element={<PricingPage />} />
        <Route path="/careers" element={<CareersPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Toaster />
    </>
  );
}
