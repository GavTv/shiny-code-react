import { useState } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, HashRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import Index from "./pages/Index";
import About from "./pages/About";
import Disciplines from "./pages/Disciplines";
import Contacts from "./pages/Contacts";
import Mnevniki from "./pages/Mnevniki";
import Blog from "./pages/Blog";
import BlogVokalCoach from "./pages/BlogVokalCoach";
import BlogGitaraNovichki from "./pages/BlogGitaraNovichki";
import NotFound from "./pages/NotFound";
import ScrollToTop from "./components/ScrollToTop";
import PromoModal from "./components/PromoModal";
import PartnerPromoModal from "./components/PartnerPromoModal";
import JsonLd from "./components/JsonLd";

const queryClient = new QueryClient();
const Router = import.meta.env.BASE_URL === "/" ? BrowserRouter : HashRouter;

const App = () => {
  const [showPartner, setShowPartner] = useState(false);

  return (
    <HelmetProvider>
      <QueryClientProvider client={queryClient}>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <PromoModal onDismiss={() => setShowPartner(true)} />
          <PartnerPromoModal trigger={showPartner} />
          <JsonLd />
          <Router>
            <ScrollToTop />
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/about" element={<About />} />
              <Route path="/disciplines" element={<Disciplines />} />
              <Route path="/contacts" element={<Contacts />} />
              <Route path="/mnevniki" element={<Mnevniki />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/blog/vokal-koach-moskva" element={<BlogVokalCoach />} />
              <Route path="/blog/gitara-nachinayushim-oshibki" element={<BlogGitaraNovichki />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Router>
        </TooltipProvider>
      </QueryClientProvider>
    </HelmetProvider>
  );
};

export default App;
