import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { useState } from "react";
import PrivacyModal from "@/components/PrivacyModal";

const Contacts = () => {
  const [privacyOpen, setPrivacyOpen] = useState(false);
  return (
    <div className="w-full min-h-screen">
      <Navigation />
      <div className="flex items-center justify-center min-h-[60vh]">
        <h1 className="text-4xl font-heading font-bold text-foreground">Контакты</h1>
      </div>
      <Footer onPrivacyOpen={() => setPrivacyOpen(true)} />
      <PrivacyModal open={privacyOpen} onClose={() => setPrivacyOpen(false)} />
    </div>
  );
};

export default Contacts;
