import { Link } from "react-router-dom";
import { MapPin } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden bg-primary">

      {/* Content */}
      <div className="relative w-full max-w-[84rem] flex flex-col items-center text-center gap-6 px-5 py-12">
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

        {/* Location */}
        <div className="flex items-center gap-2 text-background/80">
          <MapPin size={20} className="text-accent flex-shrink-0" />
          <span className="font-body text-base md:text-lg">
            Москва, ул. Мнёвники, 7к1 — 7 мин от метро Народного Ополчения
          </span>
        </div>
        <a
          href="https://yandex.ru/maps/?whatshere[point]=37.472983,55.779459&whatshere[zoom]=17&text=%D0%9C%D0%BE%D1%81%D0%BA%D0%B2%D0%B0%2C%20%D1%83%D0%BB%D0%B8%D1%86%D0%B0%20%D0%9C%D0%BD%D1%91%D0%B2%D0%BD%D0%B8%D0%BA%D0%B8%2C%207%D0%BA1"
          target="_blank"
          rel="noreferrer noopener"
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-background text-foreground font-heading font-semibold text-sm hover:bg-background/90 transition-all duration-300"
        >
          <MapPin size={16} />
          Открыть на карте
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
