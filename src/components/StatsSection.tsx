import { User, Music, Check, Mic, Calendar, Palette } from "lucide-react";

const stats = [
  { icon: User, title: "Индивидуальный подход", text: "Учебные планы, сочетающие развитие навыков с проектной деятельностью" },
  { icon: Music, title: "Малые группы", text: "Небольшие размеры класса для получения глубокой обратной связи" },
  { icon: Check, title: "Профессиональный рост", text: "Наглядный путь от пробного урока к профессионализму" },
  { icon: Mic, title: "Студийное оборудование", text: "Современная аппаратура для записи и работы над звуком" },
  { icon: Calendar, title: "Гибкое расписание", text: "Удобные часы занятий для детей и взрослых" },
  { icon: Palette, title: "Творческая атмосфера", text: "Вдохновляющее пространство для раскрытия потенциала" },
];

const StatsSection = () => {
  return (
    <section className="w-full py-16 bg-gradient-to-b from-background to-muted">
      <div className="max-w-[84rem] mx-auto px-5">
        <h2 className="text-center text-3xl md:text-4xl font-heading font-bold text-foreground mb-12">
          Почему выбирают нас?
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {stats.map((s) => {
            const Icon = s.icon;
            return (
              <div
                key={s.title}
                className="flex flex-col gap-4 p-8 bg-background rounded-3xl border border-primary/10 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="w-[4.5rem] h-[4.5rem] rounded-3xl bg-gradient-to-br from-primary to-secondary text-primary-foreground flex items-center justify-center shadow-md">
                  <Icon size={40} />
                </div>
                <h3 className="text-lg font-heading font-bold text-foreground leading-snug">{s.title}</h3>
                <p className="text-muted-foreground text-base leading-relaxed">{s.text}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
