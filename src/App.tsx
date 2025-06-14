
```typescript
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
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

// Import new pages
import PipelinePage from "./pages/PipelinePage";
import NewsPage from "./pages/NewsPage";
import AboutUsPage from "./pages/AboutUsPage";
import CareersPage from "./pages/CareersPage";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/our-science" element={<OurSciencePage />} />
          <Route path="/platform" element={<PlatformPage />} />
          <Route path="/for-patients" element={<ForPatientsPage />} />
          <Route path="/for-clinicians" element={<ForCliniciansPage />} />
          <Route path="/contact-us" element={<ContactUsPage />} />
          
          {/* Add new routes */}
          <Route path="/pipeline" element={<PipelinePage />} />
          <Route path="/news" element={<NewsPage />} />
          <Route path="/about-us" element={<AboutUsPage />} />
          <Route path="/careers" element={<CareersPage />} />

          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
```
