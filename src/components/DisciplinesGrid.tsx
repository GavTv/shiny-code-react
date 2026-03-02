import { Mic, Guitar, Music, Headphones } from "lucide-react";
import vocalImg from "@/assets/disciplines/vocal.webp";
import guitarImg from "@/assets/disciplines/guitar.webp";
import pianoImg from "@/assets/disciplines/piano.webp";
import ukuleleImg from "@/assets/disciplines/ukulele.jpg";
import songwritingImg from "@/assets/disciplines/songwriting.jpg";
import ensembleImg from "@/assets/disciplines/ensemble.webp";

const disciplines = [
  {
    icon: <Mic size={48} />,
    title: "Вокал",
    description: "Обучение современному пению с упором на дыхание, звучание и технику исполнения.",
    image: vocalImg,
  },
  {
    icon: <Guitar size={48} />,
    title: "Гитара",
    description: "От простых аккордов до сложных композиций. Акустическая и электрогитара. Любые стили и направления.",
    image: guitarImg,
  },
  {
    icon: <Music size={48} />,
    title: "Фортепиано",
    description: "От основ игры на клавишах до джазовых аккордов, игры под песню и импровизации в ансамбле.",
    image: pianoImg,
  },
  {
    icon: <Guitar size={48} />,
    title: "Укулеле",
    description: "От основ игры на укулеле до джазовых аккордов, боя под песни и создания мелодий.",
    image: ukuleleImg,
  },
  {
    icon: <Headphones size={48} />,
    title: "Написание песен",
    description: "Совместные мастер-классы по созданию текстов, мелодии, аранжировке и стратегии выпуска.",
    image: songwritingImg,
  },
  {
    icon: <Mic size={48} />,
    title: "Вокальный ансамбль",
    description: "Маленькие ансамбли и группы, которые отрабатывают песни и навыки живых выступлений.",
    image: ensembleImg,
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
              className="group bg-card rounded-[24px] overflow-hidden shadow-[0_4px_12px_rgba(100,50,200,0.15)] hover:shadow-[0_12px_32px_rgba(100,50,200,0.2)] transition-all duration-300 hover:-translate-y-1 flex flex-col"
            >
              <div className="p-8 pb-4 flex-1">
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
              <div className="w-full h-[260px] overflow-hidden mt-auto">
                <img
                  src={d.image}
                  alt={d.title}
                  className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DisciplinesGrid;
