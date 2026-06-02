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
    { name: "Telegram", icon: <Send size={32} />, href: "https://t.me/zv_musicstudio?text=%D0%97%D0%B4%D1%80%D0%B0%D0%B2%D1%81%D1%82%D0%B2%D1%83%D0%B9%D1%82%D0%B5,%20%D0%Bf%D0%B8%D1%88%D1%83%20%D0%92%D0%B0%D0%BC%20%D1%81%20%D1%81%D0%B0%D0%B9%D1%82%D0%B0%20Zoon" },
    { name: "ВКонтакте", icon: <span className="text-2xl font-heading font-bold">ВК</span>, href: "https://vk.com/studiozv" },
    { name: "WhatsApp", icon: <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="currentColor"><path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 2.06.56 4.07 1.62 5.83L2.5 22l4.37-1.21a9.85 9.85 0 0 0 5.17 1.47c5.46 0 9.91-4.45 9.91-9.91S17.5 2 12.04 2zm0 17.82a7.93 7.93 0 0 1-4.05-1.12l-.29-.18-2.55.71.68-2.48-.18-.29A7.91 7.91 0 0 1 12.04 3.99c4.37 0 7.93 3.56 7.93 7.93 0 2.16-.85 4.2-2.38 5.73a7.96 7.96 0 0 1-5.55 2.17zm4.47-6.04c-.24-.12-1.43-.71-1.65-.79-.22-.08-.38-.12-.54.12-.16.24-.62.79-.77.95-.14.16-.29.18-.54.06-.24-.12-1.03-.38-1.97-1.22-.72-.64-1.21-1.43-1.35-1.67-.14-.24-.01-.37.1-.5.11-.11.24-.29.36-.43.12-.14.16-.24.24-.4.08-.16.04-.29-.02-.4-.06-.11-.54-1.31-.74-1.79-.2-.46-.39-.4-.54-.4-.14 0-.29-.02-.44-.02-.16 0-.4.06-.61.29-.21.22-.8.78-.8 1.91s.82 2.22.93 2.37c.11.16 1.62 2.48 3.92 3.48.55.24.97.38 1.3.48.55.18 1.05.15 1.45.1.44-.06 1.43-.58 1.63-1.15.2-.56.2-1.04.14-1.15-.06-.1-.22-.16-.46-.28z"/></svg>, href: "https://wa.me/79162353381" },
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