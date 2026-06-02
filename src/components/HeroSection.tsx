import { Link } from "react-router-dom";
import { MapPin } from "lucide-react";
import heroImage from "@/assets/hero-stage.png";

const HeroSection = () => {
  return (
    <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden">
      <img src={heroImage} alt="" className="absolute inset-0 w-full h-full object-cover" />
      <div className="absolute inset-0 bg-black/60" />
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

        <Link
          to="/contacts"
          className="inline-flex items-center px-8 py-5 text-lg font-body font-semibold text-accent-foreground bg-accent rounded-2xl shadow-lg transition-all duration-200 hover:opacity-90 hover:-translate-y-0.5 mt-2"
        >
          Записаться на пробный урок
        </Link>

        <div className="flex items-center gap-3 text-background/70 text-sm md:text-base">
          <span>или позвоните</span>
          <a
            href="tel:89162353381"
            className="text-background font-bold hover:opacity-90 transition-opacity"
          >
            8 916 235‑33‑81
          </a>
          <a
            href="https://wa.me/79162353381"
            target="_blank"
            rel="noreferrer noopener"
            className="text-background/80 hover:text-background transition-colors"
            aria-label="WhatsApp"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 2.06.56 4.07 1.62 5.83L2.5 22l4.37-1.21a9.85 9.85 0 0 0 5.17 1.47c5.46 0 9.91-4.45 9.91-9.91S17.5 2 12.04 2zm0 17.82a7.93 7.93 0 0 1-4.05-1.12l-.29-.18-2.55.71.68-2.48-.18-.29A7.91 7.91 0 0 1 12.04 3.99c4.37 0 7.93 3.56 7.93 7.93 0 2.16-.85 4.2-2.38 5.73a7.96 7.96 0 0 1-5.55 2.17zm4.47-6.04c-.24-.12-1.43-.71-1.65-.79-.22-.08-.38-.12-.54.12-.16.24-.62.79-.77.95-.14.16-.29.18-.54.06-.24-.12-1.03-.38-1.97-1.22-.72-.64-1.21-1.43-1.35-1.67-.14-.24-.01-.37.1-.5.11-.11.24-.29.36-.43.12-.14.16-.24.24-.4.08-.16.04-.29-.02-.4-.06-.11-.54-1.31-.74-1.79-.2-.46-.39-.4-.54-.4-.14 0-.29-.02-.44-.02-.16 0-.4.06-.61.29-.21.22-.8.78-.8 1.91s.82 2.22.93 2.37c.11.16 1.62 2.48 3.92 3.48.55.24.97.38 1.3.48.55.18 1.05.15 1.45.1.44-.06 1.43-.58 1.63-1.15.2-.56.2-1.04.14-1.15-.06-.1-.22-.16-.46-.28z"/>
            </svg>
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
