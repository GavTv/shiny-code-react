import { User, BookOpen, Target } from "lucide-react";

const items = [
  {
    icon: <User size={48} />,
    title: "Индивидуальные учебные планы",
    text: "Каждый ученик уникален. Мы разрабатываем персональную программу обучения, которая сочетает развитие технических навыков с творческими проектами, соответствующими вашим интересам и целям.",
  },
  {
    icon: <BookOpen size={48} />,
    title: "Небольшие размеры класса",
    text: "Мы ограничиваем количество учеников в группах до 4-6 человек. Это позволяет преподавателю уделить время каждому, дать глубокую обратную связь и создать атмосферу доверия и поддержки.",
  },
  {
    icon: <Target size={48} />,
    title: "Путь к профессионализму",
    text: "От пробного урока до выступления на сцене — мы сопровождаем вас на каждом этапе. Наша программа построена так, чтобы вы видели прогресс и наслаждались процессом достижения мастерства.",
  },
];

const PedagogySection = () => {
  return (
    <section className="py-16 md:py-24">
      <div className="max-w-[84rem] mx-auto px-6">
        <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground text-center mb-3">
          Наша педагогическая философия
        </h2>
        <p className="text-center text-muted-foreground font-body text-lg mb-12">
          Три столпа нашего подхода к обучению
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {items.map((item, idx) => (
            <div
              key={idx}
              className="text-center p-8 rounded-[24px] bg-card shadow-[0_4px_12px_rgba(100,50,200,0.15)] hover:shadow-[0_12px_32px_rgba(100,50,200,0.2)] transition-all duration-300 hover:-translate-y-1"
            >
              <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                {item.icon}
              </div>
              <h3 className="font-heading text-xl font-bold text-foreground mb-4">
                {item.title}
              </h3>
              <p className="font-body text-muted-foreground leading-relaxed">
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PedagogySection;
