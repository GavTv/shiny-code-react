import { useState } from "react";
import Navigation from "@/components/Navigation";
import FounderHero from "@/components/FounderHero";
import TeachersSection from "@/components/TeachersSection";
import PedagogySection from "@/components/PedagogySection";
import AboutGallery from "@/components/AboutGallery";
import Footer from "@/components/Footer";
import PrivacyModal from "@/components/PrivacyModal";

const About = () => {
  const [privacyOpen, setPrivacyOpen] = useState(false);
  return (
    <div className="w-full min-h-screen">
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
