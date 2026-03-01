import { Phone, PhoneCall } from "lucide-react";
import ctaPerson from "@/assets/cta-person.jpg";

const CTASection = () => {
  return (
    <section className="w-full relative overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src={ctaPerson}
          alt=""
          className="w-full h-full object-cover object-[center_20%]"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black/70" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center py-28 md:py-36 px-4">
        <a
          href="tel:+79162353381"
          className="inline-flex items-center px-10 py-5 text-lg md:text-xl font-heading font-bold text-primary-foreground bg-primary rounded-full shadow-xl transition-all duration-200 hover:opacity-90 hover:scale-105 mb-6"
        >
          Запись на пробный урок
        </a>

        <a
          href="tel:+79162353381"
          className="inline-flex flex-col items-center px-8 py-4 bg-foreground/80 backdrop-blur-sm rounded-2xl shadow-lg transition-all duration-200 hover:bg-foreground/90"
        >
          <span className="text-sm font-body text-background/80">позвонить</span>
          <span className="text-xl md:text-2xl font-heading font-bold text-background">
            +7 (916) 235-33-81
          </span>
        </a>

        <div className="flex gap-3 mt-6">
          <a
            href="https://t.me/zv_musicstudio?text=%D0%97%D0%B4%D1%80%D0%B0%D0%B2%D1%81%D1%82%D0%B2%D1%83%D0%B9%D1%82%D0%B5,%20%D0%BF%D0%B8%D1%88%D1%83%20%D0%92%D0%B0%D0%BC%20%D1%81%20%D1%81%D0%B0%D0%B9%D1%82%D0%B0%20Zoon"
            target="_blank"
            rel="noreferrer noopener"
            className="flex items-center gap-1.5 px-4 py-2.5 text-sm font-semibold text-foreground bg-background/90 backdrop-blur-sm rounded-full shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md"
          >
            <PhoneCall size={18} />
            <span className="font-heading">Telegram</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
