import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { Mic, Guitar, Headphones, User, X } from "lucide-react";
import aleksandrImg from "@/assets/teachers/aleksandr.webp";
import nastyaImg from "@/assets/teachers/nastya.webp";
import aleksandraImg from "@/assets/teachers/aleksandra.webp";
import annaZolotarevaImg from "@/assets/teachers/anna-zolotareva.webp";
import annaZhirovaImg from "@/assets/teachers/anna.webp";



interface Teacher {
  name: string;
  specialty: string;
  specialtyEmoji: string;
  icon: React.ReactNode;
  description: string[];
  photo?: string;
}

const teachers: Teacher[] = [
  {
    name: "Анна Жирова",
    specialty: "Вокал",
    specialtyEmoji: "🎤",
    icon: <Mic size={20} />,
    photo: annaZhirovaImg,
    description: [
      "Анна Жирова — основатель школы «Звук Вокруг» и преподаватель вокала.",
      "Веду индивидуальные занятия по вокалу для взрослых и детей. Помогаю раскрыть голос, петь свободнее и увереннее, освоить современную технику и подготовиться к выступлению, записи или важному музыкальному событию.",
      "На занятиях мы работаем с дыханием, опорой, интонацией, диапазоном, дикцией, ритмом, эмоциональной подачей и репертуаром. Программа всегда строится под вашу задачу и текущий уровень — можно прийти с нуля, продолжить развитие или подготовиться к сцене.",
      "Мой путь в музыке — более 19 лет. Я окончила колледж при Российской академии музыки имени Гнесиных и Московский педагогический государственный университет, проходила повышение квалификации в Berklee College of Music.",
      "Как основатель школы, я отвечаю за качество обучения и собрала команду преподавателей, которым доверяю. При этом продолжаю лично вести учеников — для тех, кому важны индивидуальный подход, сильная база и поддержка на пути к своему звучанию.",
    ],
  },
  {
    name: "Александр Палашев",
    specialty: "Гитара",
    specialtyEmoji: "🎸",
    icon: <Mic size={20} />,
    photo: aleksandrImg,
    description: [
      "Александр — педагог по гитаре, профессиональный музыкант.",
      "Образование: Старооскольская Музыкальная Школа.",
      "Московская джазовая студия C JAM CLUB (гитара, джазовые инструменты).",
      "Достижения: 20 лет выступлений на фестивалях, гастролях, клубах. Участник групп разных жанров, автор песен, аранжировок, ремиксов.",
      "Методика: помогает расслабиться, убрать комплексы через любимые песни. Стили: рок, поп, метал, фанк.",
    ],
  },
  {
    name: "Александра Ордынец",
    specialty: "Вокал",
    specialtyEmoji: "🎤",
    icon: <Mic size={20} />,
    photo: aleksandraImg,
    description: [
      "Александра — выпускница ГМУЭДИ (колледжа при Академии им. Гнесиных), педагог эстрадного вокала, артист и руководитель коллектива.",
      "Обучает техникам качественного и свободного звукоизвлечения, работает с вокальными стилями: поп, R&B, мюзиклы, альтернативу и рок.",
      "Создает комфортную атмосферу, помогает раскрыть музыкальный потенциал учеников через погружение в музыку.",
      "Опыт преподавания — 8 лет.",
    ],
  },
  {
    name: "Анастасия Оленберг",
    specialty: "Вокал, фортепиано",
    specialtyEmoji: "🎤🎹",
    icon: <Mic size={20} />,
    photo: nastyaImg,
    description: [
      "Анастасия — педагог эстрадного вокала и фортепиано.",
      "Образование (Свердловское училище с отличием, Berklee, HSE).",
      "4 года опыта, ученики — лауреаты конкурсов.",
      "Индивидуальный подход, снятие зажима сцены, высокие ноты.",
      "Жанры: поп, рок, джаз, соул.",
      "Пишет песни/аранжировки, позитивная атмосфера.",
    ],
  },
  {
    name: "Анна Золотарёва",
    specialty: "Вокал, фортепиано",
    specialtyEmoji: "🎤🎹",
    icon: <Mic size={20} />,
    photo: annaZolotarevaImg,
    description: [
      "Анна — автор и исполнитель собственной музыки, педагог по вокалу и фортепиано, активная концертирующая артистка.",
      "Обучает свободному и выразительному звучанию в стилях поп, рок, джаз, фанк, соул, блюз и романсы.",
      "Помогает написать собственные песни и научиться аккомпанировать себе за фортепиано.",
    ],
  },
];

const TeacherCard = ({ teacher, onClick }: { teacher: Teacher; onClick: () => void }) => {
  return (
    <article
      className="group bg-card rounded-xl md:rounded-[24px] overflow-hidden shadow-[0_4px_12px_rgba(100,50,200,0.15)] hover:shadow-[0_12px_32px_rgba(100,50,200,0.2)] transition-shadow duration-300 cursor-pointer h-full flex flex-col"
      onClick={onClick}
    >
      <div className="w-full aspect-[3/4] overflow-hidden">
        {teacher.photo ? (
          <img src={teacher.photo} alt={teacher.name} className="w-full h-full object-cover object-center" />
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-primary/15 via-accent/10 to-primary/25 flex items-center justify-center">
            <User size={64} className="text-primary/40" />
          </div>
        )}
      </div>
      <div className="p-3 md:p-6 flex-1 flex flex-col justify-center">
        <h3 className="font-heading text-[13px] leading-tight md:text-xl font-bold text-foreground mb-1 md:mb-2 text-center">{teacher.name}</h3>
        <div className="flex items-center justify-center gap-1 md:gap-2">
          <span className="text-primary [&>svg]:w-3.5 [&>svg]:h-3.5 md:[&>svg]:w-5 md:[&>svg]:h-5">{teacher.icon}</span>
          <span className="font-body text-[11px] md:text-sm text-muted-foreground">{teacher.specialty} {teacher.specialtyEmoji}</span>
        </div>
      </div>
    </article>
  );
};

const TeacherModal = ({ teacher, onClose }: { teacher: Teacher; onClose: () => void }) => {
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handleEscape);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  return createPortal(
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center overflow-y-auto p-4 md:p-6 animate-fade-in"
      onClick={onClose}
    >
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />

      <div
        role="dialog"
        aria-modal="true"
        aria-label={`Информация о преподавателе ${teacher.name}`}
        onClick={(e) => e.stopPropagation()}
        className="relative my-auto flex w-full max-w-[300px] flex-col overflow-hidden rounded-2xl bg-card shadow-2xl animate-scale-in max-h-[calc(100dvh-2rem)] md:max-h-[calc(100dvh-3rem)] md:max-w-[720px] md:flex-row md:rounded-3xl"
      >
        <button
          onClick={onClose}
          className="absolute top-2 right-2 md:top-3 md:right-3 z-20 w-7 h-7 md:w-8 md:h-8 rounded-full bg-black/40 backdrop-blur-sm flex items-center justify-center text-white hover:bg-black/60 transition-colors"
        >
          <X size={14} className="md:w-4 md:h-4" />
        </button>

        <div className="hidden md:block w-[45%] flex-shrink-0 bg-muted">
          {teacher.photo ? (
            <img src={teacher.photo} alt={teacher.name} className="w-full h-full object-cover object-top" />
          ) : (
            <div className="w-full h-full bg-gradient-to-br from-primary/15 via-accent/10 to-primary/25 flex items-center justify-center">
              <User size={72} className="text-primary/40" />
            </div>
          )}
        </div>

        <div className="flex-1 min-h-0 overflow-y-auto custom-scrollbar">
          <div className="md:hidden w-full aspect-[4/5] bg-muted flex-shrink-0">
            {teacher.photo ? (
              <img src={teacher.photo} alt={teacher.name} className="w-full h-full object-cover object-top" />
            ) : (
              <div className="w-full h-full bg-gradient-to-br from-primary/15 via-accent/10 to-primary/25 flex items-center justify-center">
                <User size={64} className="text-primary/40" />
              </div>
            )}
          </div>

          <div className="p-4 md:p-6">
            <div className="flex items-center gap-2 mb-1">
              <span className="text-primary [&>svg]:w-3.5 [&>svg]:h-3.5 md:[&>svg]:w-4 md:[&>svg]:h-4">{teacher.icon}</span>
              <span className="font-body text-[11px] md:text-xs text-muted-foreground">{teacher.specialty} {teacher.specialtyEmoji}</span>
            </div>
            <h3 className="font-heading text-lg md:text-2xl font-bold text-foreground mb-2 md:mb-3">{teacher.name}</h3>
            <div className="space-y-1.5 md:space-y-2">
              {teacher.description.map((line, i) => (
                <p key={i} className="font-body text-[12px] md:text-sm text-muted-foreground leading-relaxed">{line}</p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>,
    document.body,
  );
};

const TeachersSection = () => {
  const [selectedTeacher, setSelectedTeacher] = useState<Teacher | null>(null);

  return (
    <section className="py-10 md:py-24 bg-muted/30">
      <div className="max-w-[84rem] mx-auto px-4 md:px-6">
        <h2 className="font-heading text-2xl md:text-4xl font-bold text-foreground text-center mb-2 md:mb-3">Наши преподаватели</h2>
        <p className="text-center text-muted-foreground font-body text-sm md:text-lg mb-6 md:mb-12">Познакомьтесь с нашей командой профессионалов</p>
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-8">
          {teachers.map((teacher, idx) => (
            <TeacherCard key={idx} teacher={teacher} onClick={() => setSelectedTeacher(teacher)} />
          ))}
        </div>
      </div>

      {selectedTeacher && (
        <TeacherModal teacher={selectedTeacher} onClose={() => setSelectedTeacher(null)} />
      )}
    </section>
  );
};

export default TeachersSection;
