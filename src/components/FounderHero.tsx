import { useState } from "react";
import { ChevronDown } from "lucide-react";
import annaImg from "@/assets/teachers/anna.webp";

const FounderHero = () => {
  const [open, setOpen] = useState(false);

  return (
    <section className="relative overflow-hidden py-10 md:py-24">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-accent/5" />
      <div className="relative max-w-[84rem] mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row items-center gap-6 md:gap-16">
          {/* Photo */}
          <div className="flex-shrink-0">
            <div className="w-[180px] h-[240px] md:w-[280px] md:h-[380px] rounded-[24px] overflow-hidden shadow-[0_24px_60px_rgba(100,50,200,0.25)] border-4 border-primary/20">
              <img src={annaImg} alt="Анна Жирова" className="w-full h-full object-cover object-top" />
            </div>
          </div>
          {/* Text */}
          <div className="flex-1 text-center md:text-left">
            <h1 className="font-heading text-3xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-1 md:mb-2">
              Анна<br />Жирова
            </h1>
            <p className="text-primary font-heading font-semibold text-base md:text-xl mb-3 md:mb-6">
              Основатель
            </p>

            {/* Mobile: collapsible */}
            <div
              className="md:hidden flex items-center justify-center gap-1 cursor-pointer text-muted-foreground mb-2"
              onClick={() => setOpen((v) => !v)}
            >
              <span className="font-body text-xs">Подробнее</span>
              <ChevronDown size={14} className={`transition-transform duration-300 ${open ? "rotate-180" : ""}`} />
            </div>

            <div className={`overflow-hidden transition-all duration-300 ${open ? "max-h-[1000px] opacity-100" : "max-h-0 opacity-0"} md:!max-h-none md:!opacity-100`}>
              <p className="font-body text-muted-foreground text-sm md:text-lg leading-relaxed">
                Я Анна Жирова, руководитель вокальной школы-студии &laquo;Звук Вокруг&raquo;. 
                Мой профессиональный путь в мире музыки насчитывает более 19 лет. 
                Я окончила колледж при Российской академии музыки имени Гнесиных, 
                а затем и Московский педагогический государственный университет. 
                Для совершенствования экспертизы в области современной музыки я прошла 
                программу повышения квалификации в знаменитом Berklee College of Music (США).
              </p>
              <p className="font-body text-muted-foreground text-sm md:text-lg leading-relaxed mt-3 md:mt-4">
                Сегодня моя ключевая задача — стратегическое развитие школы и обеспечение 
                безупречного качества обучения по всем направлениям. Я выстраиваю образовательную 
                систему, контролирую учебный процесс на каждом этапе и лично провожу консультации 
                для педагогов и учеников в сложных или нестандартных ситуациях.
              </p>
              <p className="font-body text-muted-foreground text-sm md:text-lg leading-relaxed mt-3 md:mt-4">
                Моя философия основана на синтезе глубокой академической базы и актуальной 
                исполнительской практики. Я убеждена, что основа успеха — в раскрытии уникального 
                потенциала каждого ученика, преодолении внутренних барьеров и воспитании артистической 
                уверенности. Готова стать вашим экспертом и стратегическим советником на пути к 
                творческим достижениям. Буду рада видеть вас в нашей школе. Давайте создавать 
                музыку и уверенность в себе вместе.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FounderHero;
