import { Phone, Mail, Send } from "lucide-react";

const DisciplinesCTA = () => {
  return (
    <section className="py-16 md:py-20">
      <div className="max-w-[84rem] mx-auto px-6">
        <div className="bg-gradient-to-r from-primary to-primary/80 rounded-[24px] p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-primary-foreground mb-2">
              Готовы начать свой музыкальный путь?
            </h2>
            <p className="font-body text-primary-foreground/80">
              Запишитесь сегодня и получите полноценный урок с преподавателем!
            </p>
          </div>
          <a
            href="tel:89162353381"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-[16px] bg-accent text-primary-foreground font-heading font-bold text-lg hover:brightness-110 transition-all duration-300 hover:-translate-y-0.5 shadow-lg whitespace-nowrap"
          >
            Записаться сейчас
          </a>
        </div>
      </div>
    </section>
  );
};

const ContactInfoSection = () => {
  const socials = [
    { name: "Telegram", icon: <Send size={32} />, href: "https://t.me/zv_musicstudio?text=%D0%97%D0%B4%D1%80%D0%B0%D0%B2%D1%81%D1%82%D0%B2%D1%83%D0%B9%D1%82%D0%B5,%20%D0%BF%D0%B8%D1%88%D1%83%20%D0%92%D0%B0%D0%BC%20%D1%81%20%D1%81%D0%B0%D0%B9%D1%82%D0%B0%20Zoon" },
    { name: "ВКонтакте", icon: <span className="text-2xl font-heading font-bold">ВК</span>, href: "https://vk.com/studiozv" },
  ];

  return (
    <section className="py-16 md:py-24 bg-muted/30">
      <div className="max-w-[84rem] mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact info */}
          <div>
            <h2 className="font-heading text-3xl font-bold text-foreground mb-8">Контакты</h2>
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                  <Phone size={24} />
                </div>
                <div>
                  <span className="text-sm text-muted-foreground block">Телефон</span>
                  <a href="tel:89162353381" className="font-body font-semibold text-foreground hover:text-primary transition-colors">
                    8 916 235-33-81
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                  <Mail size={24} />
                </div>
                <div>
                  <span className="text-sm text-muted-foreground block">Email</span>
                  <a href="mailto:soundaround.club@yandex.ru" className="font-body font-semibold text-foreground hover:text-primary transition-colors">
                    soundaround.club@yandex.ru
                  </a>
                </div>
              </div>
            </div>
          </div>
          {/* Social */}
          <div>
            <h2 className="font-heading text-3xl font-bold text-foreground mb-4">
              Присоединяйтесь к сообществу
            </h2>
            <p className="font-body text-muted-foreground mb-8">
              Следите за нашими событиями, мастер-классами и успехами учеников в социальных сетях
            </p>
            <div className="flex flex-wrap gap-4">
              {socials.map((s) => (
                <a
                  key={s.name}
                  href={s.href}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="flex items-center gap-3 p-4 rounded-[16px] bg-card border border-border hover:border-primary hover:shadow-[0_4px_12px_rgba(100,50,200,0.15)] transition-all duration-300 hover:-translate-y-0.5"
                >
                  <div className="text-primary">{s.icon}</div>
                  <span className="font-heading font-semibold text-foreground">{s.name}</span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export { DisciplinesCTA, ContactInfoSection };
