import { useState } from "react";
import { MapPin, Music, Guitar, Piano, Mic, Users, Clock, Phone, PhoneCall, Star, CheckCircle } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import PrivacyModal from "@/components/PrivacyModal";
import SEO from "@/components/SEO";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";

import studioImg1 from "@/assets/gallery/studio1.png";
import studioImg2 from "@/assets/gallery/studio2.png";
import studioImg3 from "@/assets/gallery/studio3.png";

const disciplines = [
  { icon: Mic, name: "Вокал", desc: "Постановка голоса, дыхание, репертуар" },
  { icon: Guitar, name: "Гитара", desc: "Акустика и электрогитара с нуля" },
  { icon: Piano, name: "Фортепиано", desc: "Классика и современные направления" },
  { icon: Music, name: "Укулеле", desc: "Лёгкий старт в мир музыки" },
  { icon: Users, name: "Ансамбль", desc: "Играйте в группе с другими учениками" },
  { icon: Star, name: "Сонграйтинг", desc: "Напишите свою первую песню" },
];

const advantages = [
  "6 опытных преподавателей",
  "Индивидуальные и групповые занятия",
  "Своя студия звукозаписи",
  "Концерты для учеников каждый сезон",
  "Гибкое расписание 10:00–22:00",
  "5 минут от метро Народного Ополчения",
];

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Главная", item: "https://zvschool.ru/" },
    { "@type": "ListItem", position: 2, name: "Звук Вокруг Мнёвники", item: "https://zvschool.ru/mnevniki" },
  ],
};

const Mnevniki = () => {
  const [privacyOpen, setPrivacyOpen] = useState(false);

  return (
    <div className="w-full min-h-screen">
      <SEO
        title="Звук Вокруг Мнёвники | Школа вокала и гитары — пробник 700 руб"
        description="Уроки вокала, гитары, пианино в Звук Вокруг Мнёвники (ул. Мнёвники 7к1). Пробник 45 мин — 700 руб акция. 6 опытных преподавателей."
        path="/mnevniki"
      />
      <Helmet>
        <script type="application/ld+json">{JSON.stringify(breadcrumbSchema)}</script>
      </Helmet>

      <Navigation />

      {/* Hero */}
      <section className="w-full pt-28 md:pt-36 pb-14 md:pb-20 px-4 bg-gradient-to-br from-primary/10 via-background to-secondary/10">
        <div className="max-w-4xl mx-auto text-center">
          <nav className="flex justify-center gap-2 text-sm font-body text-muted-foreground mb-6">
            <Link to="/" className="hover:text-primary transition-colors">Главная</Link>
            <span>/</span>
            <span className="text-foreground font-semibold">Звук Вокруг Мнёвники</span>
          </nav>

          <h1 className="font-heading text-3xl md:text-5xl font-bold text-foreground leading-tight mb-5">
            Звук Вокруг Мнёвники — музыкальная школа рядом с&nbsp;метро Народного Ополчения
          </h1>

          <p className="font-body text-base md:text-lg text-muted-foreground max-w-2xl mx-auto mb-8 leading-relaxed">
            Уроки вокала, гитары, фортепиано, укулеле, ансамбля и сонграйтинга для детей и взрослых на ул.&nbsp;Мнёвники,&nbsp;7к1. Пробный урок 45&nbsp;минут — <strong className="text-accent">700&nbsp;₽ по акции</strong>.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href="tel:+79162353381"
              className="inline-flex items-center justify-center gap-2 px-7 py-4 text-lg font-heading font-bold text-primary-foreground bg-primary rounded-2xl shadow-lg hover:opacity-90 transition-all"
            >
              <Phone size={20} />
              Записаться на пробник
            </a>
            <a
              href="https://t.me/zv_musicstudio"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-7 py-4 text-lg font-heading font-bold text-primary bg-background border-2 border-primary rounded-2xl shadow hover:bg-primary/5 transition-all"
            >
              <PhoneCall size={20} />
              Написать в Telegram
            </a>
          </div>
        </div>
      </section>

      {/* Disciplines */}
      <section className="w-full py-14 md:py-20 px-4 bg-background">
        <div className="max-w-5xl mx-auto">
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground text-center mb-10">
            Чему учим в студии на Мнёвниках
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {disciplines.map((d) => {
              const Icon = d.icon;
              return (
                <div key={d.name} className="flex items-start gap-4 p-5 rounded-2xl bg-card border border-border shadow-sm hover:shadow-md transition-shadow">
                  <div className="w-11 h-11 rounded-xl bg-primary/10 text-primary flex items-center justify-center flex-shrink-0">
                    <Icon size={22} />
                  </div>
                  <div>
                    <h3 className="font-heading font-bold text-foreground text-lg">{d.name}</h3>
                    <p className="font-body text-sm text-muted-foreground mt-1">{d.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Advantages */}
      <section className="w-full py-14 md:py-20 px-4 bg-muted/40">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground text-center mb-10">
            Почему выбирают Звук Вокруг на Мнёвниках
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {advantages.map((a) => (
              <div key={a} className="flex items-center gap-3 p-4 rounded-xl bg-background border border-border">
                <CheckCircle size={20} className="text-primary flex-shrink-0" />
                <span className="font-body text-foreground">{a}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="w-full py-14 md:py-20 px-4 bg-background">
        <div className="max-w-5xl mx-auto">
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground text-center mb-10">
            Наша студия на ул. Мнёвники, 7к1
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[studioImg1, studioImg2, studioImg3].map((src, i) => (
              <img
                key={i}
                src={src}
                alt={`Студия Звук Вокруг Мнёвники — фото ${i + 1}`}
                className="w-full h-56 md:h-64 object-cover rounded-2xl shadow"
                loading="lazy"
              />
            ))}
          </div>
        </div>
      </section>

      {/* Location */}
      <section className="w-full py-14 md:py-20 px-4 bg-muted/40">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-4">
            Как добраться
          </h2>
          <div className="flex items-center justify-center gap-2 text-muted-foreground font-body mb-6">
            <MapPin size={18} className="text-primary" />
            <span>ул. Мнёвники, 7к1 — 5 мин от м. Народного Ополчения</span>
          </div>
          <div className="flex items-center justify-center gap-2 text-muted-foreground font-body mb-8">
            <Clock size={18} className="text-primary" />
            <span>Ежедневно 10:00–22:00</span>
          </div>
          <div className="rounded-2xl overflow-hidden shadow-lg border border-border">
            <iframe
              src="https://yandex.ru/map-widget/v1/?um=constructor%3A0c0bf7d4a0e5e2e7e2c0b0c0d0e0f0a0&amp;source=constructor"
              title="Звук Вокруг на карте — Мнёвники 7к1"
              width="100%"
              height="350"
              className="w-full"
              loading="lazy"
              style={{ border: 0 }}
            />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="w-full py-12 md:py-16 px-4 bg-gradient-to-br from-primary to-secondary">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-primary-foreground mb-3">
            Запишитесь на пробный урок — 700 ₽
          </h2>
          <p className="font-body text-primary-foreground/90 mb-7">
            45 минут знакомства с преподавателем и студией на Мнёвниках
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href="tel:+79162353381"
              className="inline-flex items-center justify-center gap-2 px-7 py-4 text-lg font-heading font-bold text-accent-foreground bg-accent rounded-2xl shadow-lg hover:opacity-90 transition-all"
            >
              <Phone size={20} />
              Позвонить
            </a>
            <a
              href="https://t.me/zv_musicstudio"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-7 py-4 text-lg font-heading font-bold text-primary bg-background rounded-2xl shadow hover:bg-primary/5 transition-all"
            >
              <PhoneCall size={20} />
              Telegram
            </a>
          </div>
        </div>
      </section>

      <Footer onPrivacyOpen={() => setPrivacyOpen(true)} />
      <PrivacyModal open={privacyOpen} onClose={() => setPrivacyOpen(false)} />
    </div>
  );
};

export default Mnevniki;
