import { Link } from "react-router-dom";
import heroBg from "@/assets/hero-bg.png";

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
        <h1 className="font-heading text-3xl md:text-6xl font-bold text-background leading-tight">
          Музыкальная школа
          <br />
          <span className="text-accent">Звук Вокруг</span>
        </h1>
        <p className="text-background/90 font-body text-base md:text-xl max-w-2xl leading-relaxed">
          Вокал · Гитара · Фортепиано · Укулеле · Написание песен · Ансамбль
        </p>

        <Link
          to="/contacts"
          className="inline-flex items-center px-8 py-5 text-lg font-body font-semibold text-accent-foreground bg-accent rounded-2xl shadow-lg transition-all duration-200 hover:opacity-90 hover:-translate-y-0.5"
        >
          Записаться на пробный урок
        </Link>

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
