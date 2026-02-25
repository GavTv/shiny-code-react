import { useState } from "react";
import Navigation from "@/components/Navigation";
import DisciplinesHero from "@/components/DisciplinesHero";
import DisciplinesGrid from "@/components/DisciplinesGrid";
import PricingSection from "@/components/PricingSection";
import { DisciplinesCTA, ContactInfoSection } from "@/components/DisciplinesCTA";
import Footer from "@/components/Footer";
import PrivacyModal from "@/components/PrivacyModal";

const Disciplines = () => {
  const [privacyOpen, setPrivacyOpen] = useState(false);
  return (
    <div className="w-full min-h-screen">
      <Navigation />
      <DisciplinesHero />
      <DisciplinesGrid />
      <PricingSection />
      <DisciplinesCTA />
      <ContactInfoSection />
      <Footer onPrivacyOpen={() => setPrivacyOpen(true)} />
      <PrivacyModal open={privacyOpen} onClose={() => setPrivacyOpen(false)} />
    </div>
  );
};

export default Disciplines;
