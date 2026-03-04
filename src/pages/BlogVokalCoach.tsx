import { useState } from "react";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import PrivacyModal from "@/components/PrivacyModal";
import SEO from "@/components/SEO";
import { DisciplinesCTA } from "@/components/DisciplinesCTA";
import { ArrowLeft, Calendar, Clock, Star, MapPin, CheckCircle, AlertTriangle } from "lucide-react";

const BlogVokalCoach = () => {
  const [privacyOpen, setPrivacyOpen] = useState(false);

  return (
    <div className="w-full min-h-screen">
      <SEO
        title="Как выбрать вокального коуча в Москве 2026 — Звук Вокруг Мневники"
        description="Топ-7 критериев выбора коуча вокала в Москве. Как не ошибиться и найти преподавателя, который раскроет ваш голос."
        path="/blog/vokal-koach-moskva"
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            headline: "Как выбрать вокального коуча в Москве — 7 критериев",
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
            <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold">Гайд</span>
          </div>
          <h1 className="font-heading text-2xl md:text-4xl font-bold text-foreground mb-4 leading-tight">
            Как выбрать вокального коуча в&nbsp;Москве — 7&nbsp;критериев, на которые стоит обратить внимание
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
            В Москве сотни предложений по урокам вокала — от частных репетиторов до крупных сетевых школ. Разброс цен, подходов и уровня преподавателей огромен. Как не потратить деньги впустую и найти коуча, который действительно раскроет ваш голос? Мы собрали <strong>7 критериев</strong>, которые помогут сделать правильный выбор.
          </p>

          {/* Warning box */}
          <div className="bg-destructive/5 border border-destructive/20 rounded-2xl p-6 flex gap-4">
            <AlertTriangle size={24} className="text-destructive flex-shrink-0 mt-0.5" />
            <div>
              <p className="text-foreground font-semibold mb-1">Частая ошибка</p>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Многие выбирают коуча только по цене или красивому Instagram. Но низкая цена часто означает неопытного преподавателя, а красивый профиль — ещё не гарантия результата. Смотрите глубже.
              </p>
            </div>
          </div>

          {[
            {
              num: 1,
              title: "Преподавательский стаж — минимум 5 лет",
              text: "Хороший вокалист и хороший преподаватель — это разные навыки. Коуч со стажем 5+ лет уже прошёл через десятки учеников с разными голосами, проблемами и целями. Он знает, как объяснить технику так, чтобы именно вы поняли. Новичок-преподаватель может петь божественно, но не сможет передать это умение.",
              tip: "В школе Звук Вокруг все преподаватели вокала имеют стаж от 5 до 15 лет — это был один из главных критериев при отборе в команду.",
            },
            {
              num: 2,
              title: "Собственный сценический опыт",
              text: "Коуч, который сам никогда не выступал на сцене, не сможет подготовить вас к выступлению. Он не знает, что такое сценический мандраж, как работать с микрофоном в живом звуке, как держать внимание зала. Спросите коуча напрямую: «Где вы выступали?» Если ответ — «нигде» или «на студенческих отчётниках» — это повод задуматься.",
              tip: "Наши коучи выступали на фестивалях, в московских клубах и за рубежом. Они передают этот опыт ученикам на практике.",
            },
            {
              num: 3,
              title: "Профессиональное оборудование в классе",
              text: "Петь в комнате без акустической обработки — всё равно что учиться плавать на суше. Хороший класс должен быть оснащён: акустическая обработка стен, конденсаторный микрофон, мониторы или наушники, пианино или клавиши для распевок. Если коуч занимается дома в обычной комнате — вы не услышите свой реальный звук.",
              tip: "В Звук Вокруг — 3 полностью оборудованных класса. Оборудование включено в стоимость занятия, доплачивать не нужно.",
            },
            {
              num: 4,
              title: "Индивидуальный подход, а не шаблон",
              text: "У каждого человека свой тембр, диапазон, сильные и слабые стороны. Хороший коуч на первом занятии оценивает ваш голос и составляет план именно под вас. Плохой — даёт всем одинаковые упражнения. Спросите: «Как вы строите программу для нового ученика?» Если ответ размытый — это тревожный знак.",
              tip: "В Звук Вокруг каждый ученик получает персональный план развития после первого пробного занятия.",
            },
            {
              num: 5,
              title: "Работа с песнями, а не только с распевками",
              text: "Распевки и упражнения — это фундамент. Но если через месяц занятий вы до сих пор не поёте ни одной песни — что-то не так. Хороший коуч с первых уроков совмещает технику с реальным репертуаром. Вы должны петь то, что вам нравится, и применять технику на практике.",
              tip: "В Звук Вокруг разбор песен начинается уже на первом занятии — преподаватель подбирает трек под ваш уровень и цели.",
            },
            {
              num: 6,
              title: "Удобная локация и расписание",
              text: "Это кажется мелочью, но дорога в один конец больше 40 минут убивает мотивацию. Через пару месяцев вы начнёте пропускать занятия. Выбирайте школу рядом с домом, работой или хотя бы у метро. И убедитесь, что расписание гибкое — жёсткий график «только вторник 16:00» подходит не всем.",
              tip: "Звук Вокруг находится в 5 минутах пешком от метро Народного Ополчения (ул. Мнёвники 7к1). Расписание подстраивается под ученика.",
            },
            {
              num: 7,
              title: "Реальные результаты учеников",
              text: "Попросите коуча показать результаты: видео учеников до/после, записи выступлений, отзывы. Если коуч не может показать ничего — значит, либо он начинающий, либо результатов нет. Не стесняйтесь спрашивать — это ваши деньги и время.",
              tip: "Ученики Звук Вокруг выступают на конкурсах, поют на мероприятиях и записываются в нашей студии. Результаты видны уже через месяц.",
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
                  <p className="text-muted-foreground text-base leading-relaxed mb-3">{item.text}</p>
                  <div className="bg-primary/5 rounded-xl p-3 border-l-4 border-primary">
                    <p className="text-foreground text-sm leading-relaxed">
                      <strong>💡 Звук Вокруг:</strong> {item.tip}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}

          {/* Summary box */}
          <div className="bg-gradient-to-br from-primary/10 to-accent/10 rounded-3xl p-8 mt-12">
            <h3 className="font-heading text-xl font-bold text-foreground mb-4 flex items-center gap-2">
              <CheckCircle size={24} className="text-primary" />
              Чек-лист: на что смотреть при выборе коуча
            </h3>
            <ul className="space-y-2">
              {[
                "Стаж преподавания ≥ 5 лет",
                "Опыт живых выступлений",
                "Оборудованный класс с акустикой",
                "Индивидуальная программа под вас",
                "Работа с песнями с первых уроков",
                "Удобная локация у метро",
                "Реальные результаты учеников",
              ].map((item) => (
                <li key={item} className="flex items-center gap-2 text-foreground">
                  <Star size={14} className="text-primary fill-primary flex-shrink-0" /> {item}
                </li>
              ))}
            </ul>
            <p className="text-muted-foreground text-sm mt-4">
              Все 7 критериев соблюдены в школе <strong className="text-foreground">Звук Вокруг Мневники</strong>. Запишитесь на пробное занятие и убедитесь сами.
            </p>
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
