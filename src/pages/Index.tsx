import { useState } from "react";
import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import HeroCards from "@/components/HeroCards";
import FeaturesSection from "@/components/FeaturesSection";
import StatsSection from "@/components/StatsSection";
import CTASection from "@/components/CTASection";

import Footer from "@/components/Footer";
import PrivacyModal from "@/components/PrivacyModal";

const Index = () => {
  const [privacyOpen, setPrivacyOpen] = useState(false);

  return (
    <div className="w-full min-h-screen">
      <Navigation />
      <HeroSection />
      <HeroCards />
      <FeaturesSection />
      <StatsSection />
      <CTASection />
      
      <Footer onPrivacyOpen={() => setPrivacyOpen(true)} />
      <PrivacyModal open={privacyOpen} onClose={() => setPrivacyOpen(false)} />
    </div>
  );
};

export default Index;
