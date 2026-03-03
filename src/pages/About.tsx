import { useState } from "react";
import Navigation from "@/components/Navigation";
import FounderHero from "@/components/FounderHero";
import TeachersSection from "@/components/TeachersSection";
import PedagogySection from "@/components/PedagogySection";
import AboutGallery from "@/components/AboutGallery";
import Footer from "@/components/Footer";
import PrivacyModal from "@/components/PrivacyModal";
import SEO from "@/components/SEO";

const About = () => {
  const [privacyOpen, setPrivacyOpen] = useState(false);
  return (
    <div className="w-full min-h-screen">
      <SEO
        title="О нас"
        description="Команда студии «Звук Вокруг» — опытные преподаватели вокала, гитары и фортепиано в Москве. Узнайте о нашей методике и педагогах."
        path="/about"
      />
      <Navigation />
      <FounderHero />
      <TeachersSection />
      <PedagogySection />
      <AboutGallery />
      <Footer onPrivacyOpen={() => setPrivacyOpen(true)} />
      <PrivacyModal open={privacyOpen} onClose={() => setPrivacyOpen(false)} />
    </div>
  );
};

export default About;
