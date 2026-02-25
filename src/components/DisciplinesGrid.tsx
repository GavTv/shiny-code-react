import { Mic, Guitar, Music, Headphones } from "lucide-react";

const disciplines = [
  {
    icon: <Mic size={48} />,
    title: "Вокал",
    description: "Обучение современному пению с упором на дыхание, звучание и технику исполнения.",
  },
  {
    icon: <Guitar size={48} />,
    title: "Гитара",
    description: "От простых аккордов до сложных композиций. Акустическая и электрогитара. Любые стили и направления.",
  },
  {
    icon: <Music size={48} />,
    title: "Фортепиано",
    description: "От основ игры на клавишах до джазовых аккордов, игры под песню и импровизации в ансамбле.",
  },
  {
    icon: <Guitar size={48} />,
    title: "Укулеле",
    description: "От основ игры на укулеле до джазовых аккордов, боя под песни и создания мелодий.",
  },
  {
    icon: <Headphones size={48} />,
    title: "Написание песен",
    description: "Совместные мастер-классы по созданию текстов, мелодии, аранжировке и стратегии выпуска.",
  },
  {
    icon: <Mic size={48} />,
    title: "Вокальный ансамбль",
    description: "Маленькие ансамбли и группы, которые отрабатывают песни и навыки живых выступлений.",
  },
];

const DisciplinesGrid = () => {
  return (
    <section className="py-16 md:py-24">
      <div className="max-w-[84rem] mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {disciplines.map((d, idx) => (
            <div
              key={idx}
              className="group bg-card rounded-[24px] overflow-hidden shadow-[0_4px_12px_rgba(100,50,200,0.15)] hover:shadow-[0_12px_32px_rgba(100,50,200,0.2)] transition-all duration-300 hover:-translate-y-1"
            >
              <div className="p-8 pb-4">
                <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-6">
                  {d.icon}
                </div>
                <h3 className="font-heading text-xl font-bold text-foreground mb-3">
                  {d.title}
                </h3>
                <p className="font-body text-muted-foreground leading-relaxed mb-6">
                  {d.description}
                </p>
              </div>
              {/* Image placeholder */}
              <div className="w-full h-[200px] overflow-hidden">
                <div className="w-full h-full bg-gradient-to-br from-primary/15 via-accent/10 to-primary/25 transition-transform duration-500 group-hover:scale-105" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DisciplinesGrid;
