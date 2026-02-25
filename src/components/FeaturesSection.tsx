import { Mic, Guitar, Music } from "lucide-react";

const features = [
  {
    icon: Mic,
    title: "Вокал",
    description: "Развивайте свой голос под руководством опытных педагогов. От начальных азов до профессионального уровня.",
  },
  {
    icon: Guitar,
    title: "Инструменты",
    description: "Гитара, фортепиано, укулеле — выберите своё направление и погрузитесь в мир музыки с индивидуальным подходом.",
  },
  {
    icon: Music,
    title: "Сцена",
    description: "Готовьтесь к выступлениям, работайте над сценическим образом и уверенностью перед публикой.",
  },
];

const FeaturesSection = () => {
  return (
    <section className="w-full py-16 px-5 bg-gradient-to-br from-primary/5 via-transparent to-secondary/3">
      <div className="max-w-[84rem] mx-auto flex flex-col md:flex-row gap-8">
        {features.map((f) => {
          const Icon = f.icon;
          return (
            <article
              key={f.title}
              className="flex-1 flex flex-col gap-4 overflow-hidden bg-muted rounded-3xl shadow-md transition-all duration-400 hover:-translate-y-2 hover:shadow-xl group"
            >
              <div className="relative w-full h-80 overflow-hidden">
                {/* Placeholder image */}
                <div className="w-full h-full bg-gradient-to-br from-primary/20 to-accent/10 transition-transform duration-500 group-hover:scale-110" />
                <div className="absolute top-4 right-4 w-16 h-16 rounded-full bg-primary text-primary-foreground flex items-center justify-center shadow-lg z-[2]">
                  <Icon size={32} />
                </div>
              </div>
              <div className="flex flex-col gap-3 px-6 pb-6">
                <h3 className="text-xl font-heading font-bold text-foreground">{f.title}</h3>
                <p className="text-muted-foreground text-base leading-relaxed">{f.description}</p>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default FeaturesSection;
