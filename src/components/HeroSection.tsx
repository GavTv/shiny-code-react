import { Link } from "react-router-dom";
import { MapPin } from "lucide-react";
import heroImage from "@/assets/hero-stage.png";

const HeroSection = () => {
  return (
    <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden bg-primary">
      <div className="relative w-full max-w-[84rem] flex flex-col items-center text-center gap-5 px-5 py-12">
        <h1 className="font-heading text-3xl md:text-6xl font-bold text-background leading-tight">
          Музыкальная школа
          <br />
          <span className="text-accent">«Звук Вокруг»</span>
        </h1>

        <p className="text-background/90 font-body text-lg md:text-2xl max-w-2xl leading-relaxed">
          Вокал, гитара, фортепиано и укулеле
          <br className="hidden md:block" />
          {" "}для детей и взрослых в Мневниках
        </p>

        <p className="text-accent font-body text-sm md:text-base max-w-xl">
          Подготовим к первым выступлениям уже через 3 месяца занятий
        </p>

        <img
          src={heroImage}
          alt="Сцена с гитарой, микрофоном и клавишами — музыкальная школа Звук Вокруг"
          className="w-full max-w-3xl rounded-2xl shadow-2xl mt-2"
        />

        <Link
          to="/contacts"
          className="inline-flex items-center px-8 py-5 text-lg font-body font-semibold text-accent-foreground bg-accent rounded-2xl shadow-lg transition-all duration-200 hover:opacity-90 hover:-translate-y-0.5 mt-2"
        >
          Записаться на пробный урок
        </Link>

        <div className="flex items-center gap-3 text-background/70 text-sm md:text-base">
          <span>или позвоните</span>
          <a
            href="tel:+79162353381"
            className="text-background font-bold hover:opacity-90 transition-opacity"
          >
            +7 (916) 235‑33‑81
          </a>
          <a
            href="https://t.me/zv_musicstudio?text=%D0%97%D0%B4%D1%80%D0%B0%D0%B2%D1%81%D1%82%D0%B2%D1%83%D0%B9%D1%82%D0%B5,%20%D0%BF%D0%B8%D1%88%D1%83%20%D0%92%D0%B0%D0%BC%20%D1%81%20%D1%81%D0%B0%D0%B9%D1%82%D0%B0"
            target="_blank"
            rel="noreferrer noopener"
            className="text-background/80 hover:text-background transition-colors"
            aria-label="Telegram"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/></svg>
          </a>
        </div>

        {/* Location */}
        <div className="flex items-center gap-2 text-background/80 mt-2">
          <MapPin size={20} className="text-accent flex-shrink-0" />
          <span className="font-body text-sm md:text-base">
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
