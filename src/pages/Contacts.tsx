import { useState } from "react";
import Navigation from "@/components/Navigation";
import { ContactHero, QuickContact, FeedbackForm, LocationsSection } from "@/components/ContactSections";
import Footer from "@/components/Footer";
import PrivacyModal from "@/components/PrivacyModal";

const Contacts = () => {
  const [privacyOpen, setPrivacyOpen] = useState(false);
  return (
    <div className="w-full min-h-screen">
      <Navigation />
      <FeedbackForm onPrivacyOpen={() => setPrivacyOpen(true)} />
      <LocationsSection />
      <QuickContact />
      
      <Footer onPrivacyOpen={() => setPrivacyOpen(true)} />
      <PrivacyModal open={privacyOpen} onClose={() => setPrivacyOpen(false)} />
    </div>
  );
};

export default Contacts;
