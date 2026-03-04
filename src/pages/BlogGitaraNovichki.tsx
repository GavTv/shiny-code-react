import { useState } from "react";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import PrivacyModal from "@/components/PrivacyModal";
import SEO from "@/components/SEO";
import { DisciplinesCTA } from "@/components/DisciplinesCTA";
import { ArrowLeft, Calendar, Clock, AlertTriangle, CheckCircle, Guitar } from "lucide-react";

const BlogGitaraNovichki = () => {
  const [privacyOpen, setPrivacyOpen] = useState(false);

  const mistakes = [
    {
      num: 1,
      title: "Неправильная постановка левой руки",
      problem: "Большой палец обнимает гриф сверху, запястье провисает. Итог — зажатость, боли в кисти, медленные переходы между аккордами.",
      fix: "Большой палец упирается в заднюю часть грифа напротив среднего пальца. Запястье слегка выгнуто наружу. Проверяйте себя перед зеркалом первые 2 недели.",
      tip: "На занятиях в Звук Вокруг преподаватель корректирует постановку с первого урока — именно поэтому с педагогом прогресс в 3 раза быстрее.",
    },
    {
      num: 2,
      title: "Игнорирование метронома",
      problem: "Новички учат аккорды «как получится» по ритму. Результат — неровный бой, спешка в куплетах и замедление на припевах.",
      fix: "Начните с 60 BPM. Играйте каждый аккорд на один удар метронома. Увеличивайте темп на 5 BPM только когда играете чисто. Приложения: Pro Metronome, Soundbrenner.",
      tip: "Мы используем метроном с первого занятия — ритмическая грамотность закладывается сразу, а не переучивается потом.",
    },
    {
      num: 3,
      title: "Слишком сильное давление на струны",
      problem: "Пальцы «вдавливают» струны в гриф. Итог — быстрая усталость, мозоли, дребезг при переходах.",
      fix: "Прижимайте струну ровно столько, чтобы она звучала чисто. Попробуйте: возьмите аккорд Am, постепенно ослабляйте давление, пока звук не начнёт «грязнить». Точка чуть выше — ваш идеальный нажим.",
      tip: "Преподаватель поможет найти баланс за одно занятие — то, на что самоучки тратят месяцы.",
    },
    {
      num: 4,
      title: "Попытка играть сложные песни сразу",
      problem: "«Я хочу играть Metallica!» — а пальцы не переходят даже с Am на C. Результат — разочарование и заброшенная гитара через 2 недели.",
      fix: "Начните с 3-аккордных песен (Am-Dm-E, G-C-D). «Кукушка» Цоя, «Knockin' on Heaven's Door», «Zombie» — простые и приятные. Сложность наращивайте постепенно.",
      tip: "В Звук Вокруг мы подбираем репертуар под ваш уровень и вкус — вы играете любимую музыку с первого урока, но в адаптированной аранжировке.",
    },
    {
      num: 5,
      title: "Не настраивают гитару перед игрой",
      problem: "Играть на расстроенной гитаре — приучать ухо к неправильному звуку. Это тормозит развитие слуха на месяцы.",
      fix: "Настраивайте гитару каждый раз. Тюнер-приложение (GuitarTuna, BOSS Tuner) — бесплатно и точно. Стандартный строй: E-A-D-G-B-E.",
      tip: "На каждом уроке мы начинаем с настройки — и учим делать это быстро и по слуху.",
    },
  ];

  return (
    <div className="w-full min-h-screen">
      <SEO
        title="Топ-5 ошибок начинающих гитаристов — Звук Вокруг"
        description="Разбираем типичные ошибки новичков-гитаристов: постановка рук, ритм, давление на струны. Советы от преподавателей школы Звук Вокруг Мневники."
        path="/blog/gitara-nachinayushim-oshibki"
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            headline: "Топ-5 ошибок начинающих гитаристов и как их исправить",
            datePublished: "2026-03-03",
            author: { "@type": "Organization", name: "Звук Вокруг" },
            publisher: { "@type": "Organization", name: "Звук Вокруг" },
            description: "Разбираем типичные ошибки новичков-гитаристов.",
          }),
        }}
      />

      <Navigation />

      {/* Hero */}
      <section className="pt-28 pb-12 md:pt-36 md:pb-16 bg-gradient-to-br from-accent/8 via-background to-primary/5">
        <div className="max-w-3xl mx-auto px-5">
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 text-primary font-semibold text-sm mb-6 hover:gap-3 transition-all"
          >
            <ArrowLeft size={16} /> Назад в блог
          </Link>
          <div className="flex gap-2 mb-4">
            <span className="px-3 py-1 rounded-full bg-accent/10 text-accent text-xs font-semibold">Гитара</span>
            <span className="px-3 py-1 rounded-full bg-accent/10 text-accent text-xs font-semibold">Для начинающих</span>
          </div>
          <h1 className="font-heading text-2xl md:text-4xl font-bold text-foreground mb-4 leading-tight">
            Топ-5 ошибок начинающих гитаристов и&nbsp;как их&nbsp;исправить
          </h1>
          <div className="flex items-center gap-4 text-muted-foreground text-sm">
            <span className="flex items-center gap-1.5"><Calendar size={14} /> 3 марта 2026</span>
            <span className="flex items-center gap-1.5"><Clock size={14} /> 2 мин чтения</span>
          </div>
        </div>
      </section>

      {/* Article */}
      <article className="py-12 md:py-16">
        <div className="max-w-3xl mx-auto px-5 space-y-8">
          <p className="text-foreground text-lg leading-relaxed">
            Гитара — один из самых популярных инструментов для новичков. Но именно первые недели решают, продолжите ли вы играть или бросите. Мы собрали <strong>5 главных ошибок</strong>, которые совершают 90% начинающих, и рассказываем, как их исправить.
          </p>

          <div className="bg-gradient-to-br from-primary/8 to-accent/8 rounded-3xl p-6 md:p-8">
            <p className="text-foreground font-body flex items-start gap-3">
              <Guitar size={24} className="text-primary flex-shrink-0 mt-0.5" />
              <span>В <strong>Звук Вокруг</strong> гитара от 700 руб за пробный урок. Преподаватель разберёт ваши ошибки и составит индивидуальный план — вы начнёте играть правильно с первого дня.</span>
            </p>
          </div>

          {mistakes.map((m) => (
            <div key={m.num} className="bg-card rounded-2xl overflow-hidden shadow-[0_2px_8px_rgba(100,50,200,0.08)] border border-primary/5">
              <div className="p-6 md:p-8 space-y-4">
                <div className="flex items-start gap-4">
                  <span className="flex-shrink-0 w-10 h-10 rounded-xl bg-gradient-to-br from-accent to-primary text-primary-foreground flex items-center justify-center font-heading font-bold text-lg">
                    {m.num}
                  </span>
                  <h2 className="font-heading text-lg md:text-xl font-bold text-foreground">
                    {m.title}
                  </h2>
                </div>

                <div className="ml-0 md:ml-14 space-y-3">
                  <div className="flex items-start gap-2.5 text-destructive/80">
                    <AlertTriangle size={16} className="flex-shrink-0 mt-1" />
                    <p className="text-sm leading-relaxed"><strong>Проблема:</strong> {m.problem}</p>
                  </div>
                  <div className="flex items-start gap-2.5 text-foreground">
                    <CheckCircle size={16} className="text-primary flex-shrink-0 mt-1" />
                    <p className="text-sm leading-relaxed"><strong>Как исправить:</strong> {m.fix}</p>
                  </div>
                  <div className="bg-primary/5 rounded-xl p-4 mt-2">
                    <p className="text-sm text-muted-foreground leading-relaxed italic">
                      💡 {m.tip}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}

          {/* Summary */}
          <div className="bg-gradient-to-br from-primary/10 to-accent/10 rounded-3xl p-8 mt-12">
            <h3 className="font-heading text-xl font-bold text-foreground mb-4">
              Главный совет
            </h3>
            <p className="text-foreground leading-relaxed">
              Все пять ошибок объединяет одно — они <strong>закрепляются</strong>, если учиться самостоятельно. Преподаватель видит их сразу и не даёт сформироваться вредным привычкам. Именно поэтому один месяц с педагогом заменяет полгода самоучки.
            </p>
            <p className="text-foreground leading-relaxed mt-4">
              В <strong>Звук Вокруг</strong> пробный урок гитары стоит <strong>1000 руб (45 минут)</strong>. За это время преподаватель оценит ваш текущий уровень, покажет правильную технику и составит план обучения.
            </p>
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

export default BlogGitaraNovichki;
