import { useEffect, useState } from "react";
import { Mic, Guitar, Music, Headphones, Home, Radio, X } from "lucide-react";
import vocalImg from "@/assets/disciplines/vocal.webp";
import guitarImg from "@/assets/disciplines/guitar.webp";
import pianoImg from "@/assets/disciplines/piano.webp";
import ukuleleImg from "@/assets/disciplines/ukulele.jpg";
import songwritingImg from "@/assets/disciplines/songwriting.jpg";
import ensembleImg from "@/assets/disciplines/ensemble.webp";
import rentalImg from "@/assets/disciplines/rental.webp";
import recordingImg from "@/assets/disciplines/recording.webp";

type Discipline = {
  icon: JSX.Element;
  title: string;
  description: string;
  image: string;
  details: string[];
};

const disciplines: Discipline[] = [
  {
    icon: <Mic size={48} />,
    title: "Вокал",
    description: "Обучение современному пению с упором на дыхание, звучание и технику исполнения.",
    image: vocalImg,
    details: [
      "Ставим дыхание, опору и работу резонаторов — голос звучит свободно и без зажимов.",
      "Разбираем любимые песни: подбираем тональность, работаем над подачей и артикуляцией.",
      "Стили: поп, рок, джаз, соул, блюз, романсы. Подходит и новичкам, и поющим давно.",
      "Занятия индивидуальные, для детей и взрослых, с выходом на сцену и отчётные концерты.",
    ],
  },
  {
    icon: <Guitar size={48} />,
    title: "Гитара",
    description: "От простых аккордов до сложных композиций. Акустическая и электрогитара. Любые стили и направления.",
    image: guitarImg,
    details: [
      "Первые аккорды и бой — уже на старте вы играете песню целиком.",
      "Акустика, электрогитара, бас: техника правой и левой руки, баррэ, перебор, соло.",
      "Изучаем аккомпанемент под собственный вокал и игру в группе.",
      "Стили: рок, поп, блюз, джаз, регги, классика.",
    ],
  },
  {
    icon: <Music size={48} />,
    title: "Фортепиано",
    description: "От основ игры на клавишах до джазовых аккордов, игры под песню и импровизации в ансамбле.",
    image: pianoImg,
    details: [
      "Постановка рук, чтение нот и аккордовых обозначений с нуля.",
      "Играем современный репертуар и классику — по желанию ученика.",
      "Аккомпанемент себе за инструментом, подбор на слух, импровизация.",
      "Для детей — игровой формат, для взрослых — быстрый практический результат.",
    ],
  },
  {
    icon: <Guitar size={48} />,
    title: "Укулеле",
    description: "От основ игры на укулеле до джазовых аккордов, боя под песни и создания мелодий.",
    image: ukuleleImg,
    details: [
      "Самый быстрый старт в музыке: первая песня — уже на первом занятии.",
      "Бой, перебор, смена аккордов, пение под собственный аккомпанемент.",
      "Отличный вариант для детей и для взрослых, которые хотят играть «для души».",
    ],
  },
  {
    icon: <Headphones size={48} />,
    title: "Написание песен",
    description: "Совместные мастер-классы по созданию текстов, мелодии, аранжировке и стратегии выпуска.",
    image: songwritingImg,
    details: [
      "От идеи до готового трека: текст, мелодия, гармония, форма.",
      "Основы аранжировки и работы в цифровой студии.",
      "Разбираем, как оформить релиз и выпустить песню на площадках.",
      "Работаем с вашим материалом — на выходе собственная песня.",
    ],
  },
  {
    icon: <Mic size={48} />,
    title: "Вокальный ансамбль",
    description: "Маленькие ансамбли и группы, которые отрабатывают песни и навыки живых выступлений.",
    image: ensembleImg,
    details: [
      "Пение в несколько голосов: гармония, строй, чувство ансамбля.",
      "Репетиции с живым составом и подготовка концертной программы.",
      "Навыки сцены: движение, взаимодействие с публикой, работа с микрофоном.",
    ],
  },
  {
    icon: <Home size={48} />,
    title: "Аренда помещения",
    description: "У нас вы сможете арендовать почасово помещение для самостоятельной практики",
    image: rentalImg,
    details: [
      "Почасовая аренда репетиционного зала с инструментами и аппаратурой.",
      "Подходит для индивидуальных занятий, репетиций группы и съёмок.",
      "Удобное расположение: Поварская, 23с1. Время бронируется заранее.",
    ],
  },
  {
    icon: <Radio size={48} />,
    title: "Студия звукозаписи",
    description: "Запиши свою песню со звукорежиссёром в профессиональной студии.",
    image: recordingImg,
    details: [
      "Запись вокала и инструментов с профессиональным звукорежиссёром.",
      "Сведение и мастеринг — трек готов к публикации.",
      "Можно записать кавер, собственную песню или демо для прослушиваний.",
    ],
  },
];

const DisciplineModal = ({ item, onClose }: { item: Discipline; onClose: () => void }) => {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-fade-in"
      onClick={onClose}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-2xl max-h-[85vh] bg-card rounded-3xl shadow-2xl overflow-hidden animate-scale-in flex flex-col"
      >
        <button
          onClick={onClose}
          aria-label="Закрыть"
          className="absolute top-3 right-3 z-10 w-9 h-9 rounded-full bg-black/30 backdrop-blur-sm flex items-center justify-center text-primary-foreground hover:bg-black/50 transition-colors"
        >
          <X size={18} />
        </button>

        <div className="flex-1 min-h-0 overflow-y-auto">
          <div className="w-full bg-muted flex items-center justify-center">
            <img src={item.image} alt={item.title} className="w-full max-h-[40vh] object-cover" />
          </div>
          <div className="p-6 md:p-8">
            <div className="flex items-center gap-3 mb-3">
              <span className="text-primary [&>svg]:w-6 [&>svg]:h-6">{item.icon}</span>
              <h3 className="font-heading text-2xl md:text-3xl font-bold text-foreground">{item.title}</h3>
            </div>
            <p className="font-body text-base text-foreground/80 mb-4">{item.description}</p>
            <div className="space-y-2 md:space-y-3">
              {item.details.map((line, i) => (
                <p key={i} className="font-body text-sm md:text-base text-muted-foreground leading-relaxed">
                  {line}
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const DisciplinesGrid = () => {
  const [selected, setSelected] = useState<Discipline | null>(null);

  return (
    <section className="py-16 md:py-24">
      <div className="max-w-[84rem] mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {disciplines.map((d, idx) => (
            <button
              key={idx}
              type="button"
              onClick={() => setSelected(d)}
              className="group text-left bg-card rounded-[24px] overflow-hidden shadow-[0_4px_12px_rgba(100,50,200,0.15)] hover:shadow-[0_12px_32px_rgba(100,50,200,0.2)] transition-shadow duration-300 flex flex-col"
            >
              <div className="p-8 pb-4 flex-1">
                <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-6">
                  {d.icon}
                </div>
                <h3 className="font-heading text-xl font-bold text-foreground mb-3">{d.title}</h3>
                <p className="font-body text-muted-foreground leading-relaxed mb-4">{d.description}</p>
                <span className="font-body text-sm font-semibold text-primary">Подробнее →</span>
              </div>
              <div className="w-full h-[260px] overflow-hidden mt-auto">
                <img
                  src={d.image}
                  alt={d.title}
                  className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                />
              </div>
            </button>
          ))}
        </div>
      </div>

      {selected && <DisciplineModal item={selected} onClose={() => setSelected(null)} />}
    </section>
  );
};

export default DisciplinesGrid;
