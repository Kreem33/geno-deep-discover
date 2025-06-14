
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner"; // It seems there's another Sonner import already
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import OurSciencePage from "./pages/OurSciencePage";
import PlatformPage from "./pages/PlatformPage";
import ForPatientsPage from "./pages/ForPatientsPage";
import ForCliniciansPage from "./pages/ForCliniciansPage";
import ContactUsPage from "./pages/ContactUsPage";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner /> {/* This was already here, assuming it's intentional or from shadcn/ui */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/our-science" element={<OurSciencePage />} />
          <Route path="/platform" element={<PlatformPage />} />
          <Route path="/for-patients" element={<ForPatientsPage />} />
          <Route path="/for-clinicians" element={<ForCliniciansPage />} />
          <Route path="/contact-us" element={<ContactUsPage />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
