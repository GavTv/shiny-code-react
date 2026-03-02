const packages = [
  {
    badge: "Пробный",
    period: "1 урок",
    prices: [
      { amount: "1 000 ₽", label: "Все категории" },
      { amount: "Бесплатно", label: "При покупке абонемента" },
    ],
    description: "Познакомьтесь с преподавателем и форматом обучения без обязательств",
    featured: false,
  },
  {
    badge: "Старт",
    period: "1 месяц",
    prices: [
      { amount: "3 200 руб", label: "Дети" },
      { amount: "3 500 руб", label: "Взрослые" },
    ],
    description: "Занятия с опытными преподавателями по всем дисциплинам студии. Идеально для знакомства с инструментом и основами техники",
    featured: false,
  },
  {
    badge: "Лучший выбор",
    period: "1 месяц · 4 занятия",
    prices: [
      { amount: "7 700 руб", label: "Дети" },
      { amount: "8 700 руб", label: "Взрослые" },
    ],
    description: "Месячный абонемент с четырьмя занятиями. Оптимальный вариант для устойчивого прогресса и развития навыков",
    featured: true,
  },
  {
    badge: "Прогресс",
    period: "1 месяц · 8 занятий",
    prices: [
      { amount: "14 600 руб", label: "Дети" },
      { amount: "16 200 руб", label: "Взрослые" },
    ],
    description: "Максимальная выгода — достигайте целей быстрее",
    featured: false,
  },
  {
    badge: "Мастер",
    period: "3 месяца · 24 занятия",
    prices: [
      { amount: "38 000 руб", label: "Дети" },
      { amount: "43 500 руб", label: "Взрослые" },
    ],
    description: "Полное погружение в творческую атмосферу для достижения профессионального уровня",
    featured: false,
  },
];

const PricingSection = () => {
  return (
    <section className="py-16 md:py-24 bg-muted/30">
      <div className="max-w-[84rem] mx-auto px-6">
        <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground text-center mb-3">
          Стоимость занятий
        </h2>
        <p className="text-center text-muted-foreground font-body text-lg mb-12">
          Доступные цены на все направления
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {packages.map((pkg, idx) => (
            <div
              key={idx}
              className={`relative rounded-[24px] p-6 flex flex-col transition-all duration-300 hover:-translate-y-1 ${
                pkg.featured
                  ? "bg-gradient-to-br from-primary to-primary/80 text-primary-foreground shadow-[0_12px_32px_rgba(100,50,200,0.3)] scale-[1.02] lg:scale-105"
                  : "bg-card shadow-[0_4px_12px_rgba(100,50,200,0.15)] hover:shadow-[0_12px_32px_rgba(100,50,200,0.2)]"
              }`}
            >
              <span
                className={`inline-block self-start px-3 py-1 rounded-full text-xs font-heading font-bold mb-3 ${
                  pkg.featured
                    ? "bg-accent text-primary-foreground"
                    : "bg-primary/10 text-primary"
                }`}
              >
                {pkg.badge}
              </span>
              <p
                className={`font-heading font-semibold text-sm mb-4 ${
                  pkg.featured ? "text-primary-foreground/80" : "text-muted-foreground"
                }`}
              >
                {pkg.period}
              </p>
              {pkg.prices.map((price, i) => (
                <div key={i} className="mb-2">
                  <p
                    className={`font-heading text-xl font-bold ${
                      pkg.featured ? "text-primary-foreground" : "text-foreground"
                    }`}
                  >
                    {price.amount}
                  </p>
                  <p
                    className={`text-xs ${
                      pkg.featured ? "text-primary-foreground/70" : "text-muted-foreground"
                    }`}
                  >
                    {price.label}
                  </p>
                  {i < pkg.prices.length - 1 && (
                    <div
                      className={`h-px my-2 ${
                        pkg.featured ? "bg-primary-foreground/20" : "bg-border"
                      }`}
                    />
                  )}
                </div>
              ))}
              <p
                className={`mt-auto pt-4 font-body text-sm leading-relaxed ${
                  pkg.featured ? "text-primary-foreground/80" : "text-muted-foreground"
                }`}
              >
                {pkg.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
