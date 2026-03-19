import { MapPin } from "lucide-react";

const LocationBanner = () => {
  return (
    <section className="w-full py-10 md:py-14 px-5 bg-muted">
      <div className="max-w-[84rem] mx-auto flex flex-col items-center text-center gap-4">
        <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground">
          Где нас найти
        </h2>
        <div className="flex items-center gap-2 text-muted-foreground">
          <MapPin size={20} className="text-primary flex-shrink-0" />
          <span className="font-body text-base md:text-lg">
            Москва, ул. Мнёвники, 7к1 — 7 мин от метро Народного Ополчения
          </span>
        </div>
        <a
          href="https://yandex.ru/maps/?whatshere[point]=37.472983,55.779459&whatshere[zoom]=17&text=%D0%9C%D0%BE%D1%81%D0%BA%D0%B2%D0%B0%2C%20%D1%83%D0%BB%D0%B8%D1%86%D0%B0%20%D0%9C%D0%BD%D1%91%D0%B2%D0%BD%D0%B8%D0%BA%D0%B8%2C%207%D0%BA1"
          target="_blank"
          rel="noreferrer noopener"
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-primary text-primary-foreground font-heading font-semibold text-sm hover:bg-primary/90 transition-all duration-300"
        >
          <MapPin size={16} />
          Открыть на карте
        </a>
      </div>
    </section>
  );
};

export default LocationBanner;
