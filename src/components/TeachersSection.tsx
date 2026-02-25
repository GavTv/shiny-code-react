import { Mic, Guitar, Headphones, User } from "lucide-react";
import aleksandrImg from "@/assets/teachers/aleksandr.webp";
import nastyaImg from "@/assets/teachers/nastya.webp";
import aleksandraImg from "@/assets/teachers/aleksandra.webp";
import aleksandra2Img from "@/assets/teachers/aleksandra2.jpg";
import borisImg from "@/assets/teachers/boris.webp";
import kirillImg from "@/assets/teachers/kirill.webp";

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
    name: "Александр",
    specialty: "Гитара",
    specialtyEmoji: "🎸",
    icon: <Mic size={20} />,
    photo: aleksandrImg,
    description: [
      "Саша — педагог по гитаре, профессиональный музыкант.",
      "Образование: Старооскольская Музыкальная Школа.",
      "Московская джазовая студия C JAM CLUB (гитара, джазовые инструменты).",
      "Достижения: 20 лет выступлений на фестивалях, гастролях, клубах. Участник групп разных жанров, автор песен, аранжировок, ремиксов.",
      "Методика: помогает расслабиться, убрать комплексы через любимые песни. Стили: рок, поп, метал, фанк.",
    ],
  },
  {
    name: "Анастасия",
    specialty: "Вокал",
    specialtyEmoji: "🎤",
    icon: <Guitar size={20} />,
    photo: nastyaImg,
    description: [
      "Анастасия — педагог эстрадного вокала.",
      "Образование (Свердловское училище с отличием, Berklee, HSE).",
      "4 года опыта, ученики — лауреаты конкурсов.",
      "Индивидуальный подход, снятие зажима сцены, высокие ноты.",
      "Жанры: поп, рок, джаз, соул.",
      "Пишет песни/аранжировки, позитивная атмосфера.",
    ],
  },
  {
    name: "Александра",
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
    name: "Александра",
    specialty: "Вокал и актёрское мастерство",
    specialtyEmoji: "🎤",
    icon: <Mic size={20} />,
    photo: aleksandra2Img,
    description: [
      "Александра — педагог по вокалу, профессиональная певица и актриса.",
      "Образование: Алтайская академия искусств и культуры, Институт современного искусства (эстрадно-джазовый вокал).",
      "Методика: соединяет вокал и актёрское мастерство, помогает раскрыть голос и уверенность на сцене.",
      "Опыт: участник платформы Profty (методики ведущих педагогов США), педагог по актёрскому мастерству, режиссёр творческих проектов.",
    ],
  },
  {
    name: "Борис",
    specialty: "Укулеле & Гитара",
    specialtyEmoji: "🎸",
    icon: <Guitar size={20} />,
    photo: borisImg,
    description: [
      "Борис — педагог по гитаре.",
      "Выпускник МОМК им. Прокофьева с отличием, лауреат конкурсов.",
      "Бас-гитарист Lunar Miura, сольные выступления.",
      "Учит классику, акустику, электрогитару, бас, укулеле.",
      "Любой стиль: рок, джаз, классика.",
    ],
  },
  {
    name: "Кирилл",
    specialty: "Гитара",
    specialtyEmoji: "🎸",
    icon: <Headphones size={20} />,
    photo: kirillImg,
    description: [
      "Кирилл — педагог по гитаре.",
      "Образование: Московский Педагогический Государственный Университет.",
      "Достижения: В составе своей музыкальной группы попадал в редакторские плейлисты стриминговых сервисов и был в ротации радио «Мегаполис».",
      "Методика: структура занятий для эффективной музыки с удовольствием и производительностью.",
    ],
  },
];

const TeachersSection = () => {
  return (
    <section className="py-16 md:py-24 bg-muted/30">
      <div className="max-w-[84rem] mx-auto px-6">
        <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground text-center mb-3">
          Наши преподаватели
        </h2>
        <p className="text-center text-muted-foreground font-body text-lg mb-12">
          Познакомьтесь с нашей командой профессионалов
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teachers.map((teacher, idx) => (
            <article
              key={idx}
              className="group bg-card rounded-[24px] overflow-hidden shadow-[0_4px_12px_rgba(100,50,200,0.15)] hover:shadow-[0_12px_32px_rgba(100,50,200,0.2)] transition-all duration-300 hover:-translate-y-1"
            >
              {/* Photo */}
              <div className="w-full h-[160px] md:h-[180px] overflow-hidden">
                {teacher.photo ? (
                  <img
                    src={teacher.photo}
                    alt={teacher.name}
                    className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                  />
                ) : (
                  <div className="w-full h-full bg-gradient-to-br from-primary/15 via-accent/10 to-primary/25 flex items-center justify-center transition-transform duration-500 group-hover:scale-105">
                    <User size={64} className="text-primary/40" />
                  </div>
                )}
              </div>
              {/* Content */}
              <div className="p-6">
                <h3 className="font-heading text-xl font-bold text-foreground mb-2">
                  {teacher.name}
                </h3>
                <div className="flex items-center gap-2 mb-4">
                  <span className="text-primary">{teacher.icon}</span>
                  <span className="font-body text-sm text-muted-foreground">
                    {teacher.specialty} {teacher.specialtyEmoji}
                  </span>
                </div>
                <div className="space-y-2">
                  {teacher.description.map((line, i) => (
                    <p key={i} className="font-body text-sm text-muted-foreground leading-relaxed">
                      {line}
                    </p>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeachersSection;
