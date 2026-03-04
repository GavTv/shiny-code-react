import { useState } from "react";
import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import FeaturesSection from "@/components/FeaturesSection";
import StatsSection from "@/components/StatsSection";
import ReviewsSection from "@/components/ReviewsSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import PrivacyModal from "@/components/PrivacyModal";
import SEO from "@/components/SEO";

const Index = () => {
  const [privacyOpen, setPrivacyOpen] = useState(false);

  return (
    <div className="w-full min-h-screen">
      <SEO
        title="Звук Вокруг — музыкальная студия в Москве"
        description="Музыкальная студия «Звук Вокруг» — уроки вокала, гитары, фортепиано, укулеле и ансамбля в Москве. Запишитесь на пробный урок за 1000 руб."
        path="/"
      />
      <Navigation />
      <HeroSection />
      <FeaturesSection />
      <StatsSection />
      <ReviewsSection />
      <CTASection />
      <Footer onPrivacyOpen={() => setPrivacyOpen(true)} />
      <PrivacyModal open={privacyOpen} onClose={() => setPrivacyOpen(false)} />
    </div>
  );
};

export default Index;
