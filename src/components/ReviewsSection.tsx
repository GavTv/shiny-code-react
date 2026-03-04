import { Star, Quote } from "lucide-react";

const reviews = [
  {
    name: "Маша К.",
    text: "Отличные уроки вокала! Артём — настоящий профессионал, за 3 месяца я начала петь так, как мечтала. Атмосфера в студии невероятная!",
    discipline: "Вокал",
  },
  {
    name: "Саша Д.",
    text: "Пришёл с нулевым уровнем — через месяц уже играл любимые песни на гитаре. Преподаватель подстраивается под темп и вкусы.",
    discipline: "Гитара",
  },
  {
    name: "Катя М.",
    text: "Фортепиано с нуля в 30 лет — казалось невозможным, но тут верят в каждого ученика. Уже играю Людовико Эйнауди!",
    discipline: "Фортепиано",
  },
];

const ReviewsSection = () => {
  return (
    <section className="w-full py-16 md:py-24 bg-gradient-to-b from-muted to-background">
      <div className="max-w-[84rem] mx-auto px-5">
        <h2 className="text-center text-3xl md:text-4xl font-heading font-bold text-foreground mb-3">
          Что говорят наши ученики
        </h2>
        <p className="text-center text-muted-foreground text-base md:text-lg mb-12 max-w-2xl mx-auto">
          Настоящие истории тех, кто уже нашёл свой звук
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((r, i) => (
            <article
              key={i}
              className="relative flex flex-col gap-4 p-8 bg-card rounded-3xl shadow-[0_4px_12px_rgba(100,50,200,0.12)] hover:shadow-[0_12px_32px_rgba(100,50,200,0.18)] transition-all duration-300 hover:-translate-y-1"
            >
              {/* Decorative quote */}
              <Quote
                size={36}
                className="absolute top-5 right-6 text-primary/15 rotate-180"
              />

              {/* Stars */}
              <div className="flex gap-0.5">
                {Array.from({ length: 5 }).map((_, s) => (
                  <Star
                    key={s}
                    size={18}
                    className="fill-primary text-primary"
                  />
                ))}
              </div>

              {/* Review text */}
              <p className="text-foreground text-base leading-relaxed italic relative z-10">
                «{r.text}»
              </p>

              {/* Author */}
              <div className="mt-auto pt-4 border-t border-primary/10 flex items-center justify-between">
                <span className="font-heading font-bold text-foreground">
                  {r.name}
                </span>
                <span className="text-xs font-body px-3 py-1 rounded-full bg-primary/10 text-primary font-medium">
                  {r.discipline}
                </span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;
