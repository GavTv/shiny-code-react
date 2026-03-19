import { Link } from "react-router-dom";
import { MapPin } from "lucide-react";
import ctaPerson from "@/assets/cta-person.webp";

const HeroSection = () => {
  return (
    <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background photo */}
      <div className="absolute inset-0 z-[1]">
        <img src={ctaPerson} alt="" className="w-full h-full object-cover object-[center_20%]" />
      </div>
      
      {/* Overlay */}
      <div className="absolute inset-0 z-[2] bg-black/50" />

      {/* Content */}
      <div className="relative z-[3] w-full max-w-[84rem] flex flex-col items-center text-center gap-6 px-5 py-12">
        {/* Who we are */}
        <h1 className="font-heading text-3xl md:text-6xl font-bold text-background leading-tight">
          Музыкальная школа
          <br />
          <span className="text-accent">Звук Вокруг</span>
        </h1>
        <p className="text-background/90 font-body text-base md:text-xl max-w-2xl leading-relaxed">
          Вокал · Гитара · Фортепиано · Укулеле · Написание песен · Ансамбль
        </p>

        {/* Trial lesson price */}
        <div className="bg-accent text-accent-foreground rounded-2xl px-6 py-4 md:px-8 md:py-5 shadow-xl">
          <p className="font-heading text-lg md:text-2xl font-bold">
            Пробный урок — 1 000 ₽
          </p>
          <p className="font-body text-sm md:text-base opacity-80">45 минут с преподавателем</p>
        </div>

        {/* CTA */}
        <Link
          to="/contacts"
          className="inline-flex items-center px-8 py-5 text-lg font-body font-semibold text-primary-foreground bg-primary rounded-2xl shadow-lg transition-all duration-200 hover:bg-primary/90 hover:-translate-y-0.5"
        >
          Записаться на пробный урок
        </Link>

        {/* Location */}
        <div className="flex items-center gap-2 px-5 py-3 bg-black/50 rounded-xl backdrop-blur-md text-background/90">
          <MapPin size={18} className="text-accent flex-shrink-0" />
          <span className="font-body text-sm md:text-base">
            Москва, ул. Мнёвники, 7к1 — 7 мин от метро Народного Ополчения
          </span>
        </div>

        {/* Phone */}
        <a
          href="tel:+79162353381"
          className="text-background text-xl md:text-2xl font-bold transition-transform duration-300 hover:scale-105 hover:opacity-90"
        >
          +7 (916) 235-33-81
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
