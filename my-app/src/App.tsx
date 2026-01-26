import { Route, Routes } from "react-router-dom";

import Index from "@/pages/index";
import NotFound from "@/pages/NotFound";
import { Toaster } from "@/components/ui/toaster";

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Toaster />
    </>
  );
}
