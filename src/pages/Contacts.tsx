import { useState } from "react";
import Navigation from "@/components/Navigation";
import { ContactHero, QuickContact, FeedbackForm, LocationsSection } from "@/components/ContactSections";
import Footer from "@/components/Footer";
import PrivacyModal from "@/components/PrivacyModal";
import SEO from "@/components/SEO";

const Contacts = () => {
  const [privacyOpen, setPrivacyOpen] = useState(false);
  return (
    <div className="w-full min-h-screen">
      <SEO
        title="Контакты"
        description="Свяжитесь со студией «Звук Вокруг» — телефон +7 (916) 235-33-81, адрес: ул. Мнёвники, д. 7, к. 1, Москва. Запишитесь на пробный урок."
        path="/contacts"
      />
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
