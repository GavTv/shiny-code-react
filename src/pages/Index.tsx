import { useState } from "react";
import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import FeaturesSection from "@/components/FeaturesSection";
import StatsSection from "@/components/StatsSection";
import ReviewsSection from "@/components/ReviewsSection";
import LocationBanner from "@/components/LocationBanner";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import PrivacyModal from "@/components/PrivacyModal";
import PromoBanner from "@/components/PromoBanner";
import SEO from "@/components/SEO";

const Index = () => {
  const [privacyOpen, setPrivacyOpen] = useState(false);

  return (
    <div className="w-full min-h-screen">
      <SEO
        title="Звук Вокруг | Школа вокала/гитары Москва Мневники — пробник 1000 руб"
        description="Звук Вокруг Мневники — уроки вокала, гитары, пианино. Пробник 1000 руб. 6 преподавателей, 4.5⭐ Я.Карты. Запись онлайн."
        path="/"
      />
      <Navigation />
      <HeroSection />
      <PromoBanner />
      <FeaturesSection />
      <StatsSection />
      <ReviewsSection />
      <LocationBanner />
      <CTASection />
      <Footer onPrivacyOpen={() => setPrivacyOpen(true)} />
      <PrivacyModal open={privacyOpen} onClose={() => setPrivacyOpen(false)} />
    </div>
  );
};

export default Index;
