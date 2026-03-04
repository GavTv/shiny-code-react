import { useState } from "react";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import PrivacyModal from "@/components/PrivacyModal";
import SEO from "@/components/SEO";
import { DisciplinesCTA } from "@/components/DisciplinesCTA";
import { ArrowLeft, Calendar, Clock, Star, MapPin, CheckCircle } from "lucide-react";

const BlogVokalCoach = () => {
  const [privacyOpen, setPrivacyOpen] = useState(false);

  return (
    <div className="w-full min-h-screen">
      <SEO
        title="Как выбрать вокального коуча в Москве 2026 — Звук Вокруг Мневники"
        description="Топ-7 критериев выбора коуча вокала в Москве. Звук Вокруг Мневники — пробник 700 руб, 6 преподавателей с опытом 5+ лет"
        path="/blog/vokal-koach-moskva"
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            headline: "Как выбрать вокального коуча в Москве — 7 критериев от школы Звук Вокруг",
            datePublished: "2026-03-04",
            author: { "@type": "Organization", name: "Звук Вокруг" },
            publisher: { "@type": "Organization", name: "Звук Вокруг" },
            description: "Топ-7 критериев выбора коуча вокала в Москве.",
          }),
        }}
      />

      <Navigation />

      {/* Hero */}
      <section className="pt-28 pb-12 md:pt-36 md:pb-16 bg-gradient-to-br from-primary/10 via-background to-accent/5">
        <div className="max-w-3xl mx-auto px-5">
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 text-primary font-semibold text-sm mb-6 hover:gap-3 transition-all"
          >
            <ArrowLeft size={16} /> Назад в блог
          </Link>
          <div className="flex gap-2 mb-4">
            <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold">Вокал</span>
            <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold">Москва</span>
          </div>
          <h1 className="font-heading text-2xl md:text-4xl font-bold text-foreground mb-4 leading-tight">
            Как выбрать вокального коуча в Москве — 7&nbsp;критериев от школы Звук&nbsp;Вокруг
          </h1>
          <div className="flex items-center gap-4 text-muted-foreground text-sm">
            <span className="flex items-center gap-1.5"><Calendar size={14} /> 4 марта 2026</span>
            <span className="flex items-center gap-1.5"><Clock size={14} /> 5 мин чтения</span>
          </div>
        </div>
      </section>

      {/* Article */}
      <article className="py-12 md:py-16">
        <div className="max-w-3xl mx-auto px-5 space-y-8">
          <p className="text-foreground text-lg leading-relaxed">
            <strong>Москва 2026:</strong> уроки вокала популярны как никогда — поп, R&B, рок, мюзиклы. Но как выбрать коуча среди 500+ предложений? Рассказываем проверенные критерии от школы <strong>Звук Вокруг Мневники</strong>.
          </p>

          {[
            {
              num: 1,
              title: "Стаж преподавания ≥ 5 лет",
              text: "Коуч должен обучать минимум 5 лет. В Звук Вокруг все 6 преподавателей вокала имеют опыт от 5 до 15 лет — Артём (поп/рок), Арина (R&B), Евгений (альт/джаз). За эти годы они отточили методику и знают, как раскрыть голос каждого ученика.",
            },
            {
              num: 2,
              title: "Собственный опыт выступлений",
              text: "Коуч без сцены учит хуже — он не знает, что значит стоять перед залом. Наши преподаватели выступали на фестивалях, в клубах Москвы и за рубежом. Они знают сцену изнутри и передают это знание ученикам.",
            },
            {
              num: 3,
              title: "Современное оборудование",
              text: "Класс должен быть оборудован микрофонами, акустикой и пианино. У нас 3 полностью оборудованных класса на Мневниках — использование оборудования включено в стоимость занятия.",
            },
            {
              num: 4,
              title: "Индивидуальный подход к ученику",
              text: "Хороший коуч не работает по шаблону. Он оценивает ваш тембр, диапазон, цели — и выстраивает программу именно под вас. В Звук Вокруг каждый ученик получает персональный план развития.",
            },
            {
              num: 5,
              title: "Работа с репертуаром, а не только упражнения",
              text: "Гаммы и распевки важны, но петь любимые песни — главная мотивация. Наши коучи сочетают технику с разбором реального репертуара уже с первых занятий.",
            },
            {
              num: 6,
              title: "Удобное расположение",
              text: "Звук Вокруг находится по адресу ул. Мнёвники 7к1 — всего 5 минут пешком от метро Народного Ополчения. Добраться легко из любого района Москвы.",
            },
            {
              num: 7,
              title: "Результаты учеников",
              text: "Наши ученики выступают на конкурсах, поют в караоке с уверенностью, создают музыкальный контент. Прогресс виден уже после первого месяца занятий.",
            },
          ].map((item) => (
            <div key={item.num} className="bg-card rounded-2xl p-6 md:p-8 shadow-[0_2px_8px_rgba(100,50,200,0.08)] border border-primary/5">
              <div className="flex items-start gap-4">
                <span className="flex-shrink-0 w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-accent text-primary-foreground flex items-center justify-center font-heading font-bold text-lg">
                  {item.num}
                </span>
                <div>
                  <h2 className="font-heading text-lg md:text-xl font-bold text-foreground mb-2">
                    {item.title}
                  </h2>
                  <p className="text-muted-foreground text-base leading-relaxed">{item.text}</p>
                </div>
              </div>
            </div>
          ))}

          {/* Summary box */}
          <div className="bg-gradient-to-br from-primary/10 to-accent/10 rounded-3xl p-8 mt-12">
            <h3 className="font-heading text-xl font-bold text-foreground mb-4 flex items-center gap-2">
              <CheckCircle size={24} className="text-primary" />
              Итого: чек-лист идеального коуча
            </h3>
            <ul className="space-y-2">
              {["Стаж ≥ 5 лет", "Сценический опыт", "Оборудованный класс", "Индивидуальный подход", "Работа с репертуаром", "Удобная локация", "Видимые результаты"].map((item) => (
                <li key={item} className="flex items-center gap-2 text-foreground">
                  <Star size={14} className="text-primary fill-primary flex-shrink-0" /> {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Location */}
          <div className="flex items-center gap-3 text-muted-foreground text-sm bg-muted rounded-2xl p-4">
            <MapPin size={18} className="text-primary flex-shrink-0" />
            <span>Звук Вокруг Мневники: ул. Мнёвники 7к1, 5 мин от м. Народного Ополчения</span>
          </div>
        </div>
      </article>

      {/* CTA form */}
      <DisciplinesCTA />

      <Footer onPrivacyOpen={() => setPrivacyOpen(true)} />
      <PrivacyModal open={privacyOpen} onClose={() => setPrivacyOpen(false)} />
    </div>
  );
};

export default BlogVokalCoach;
