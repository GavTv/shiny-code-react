import { Phone, Mail, Instagram, Send, MessageCircle } from "lucide-react";

const WHATSAPP_URL = "https://api.whatsapp.com/send/?phone=79162353381&text=%D0%9E%D0%B1%D1%80%D0%B0%D1%89%D0%B5%D0%BD%D0%B8%D0%B5+%D0%B8%D0%B7+%D0%AF%D0%BD%D0%B4%D0%B5%D0%BA%D1%81+%D0%9A%D0%B0%D1%80%D1%82%0A%D0%97%D0%B4%D1%80%D0%B0%D0%B2%D1%81%D1%82%D0%B2%D1%83%D0%B9%D1%82%D0%B5%21+%D0%9C%D0%B5%D0%BD%D1%8F+%D0%B7%D0%B0%D0%B8%D0%BD%D1%82%D0%B5%D1%80%D0%B5%D1%81%D0%BE%D0%B2%D0%B0%D0%BB%D0%BE+%D0%B2%D0%B0%D1%88%D0%B5+%D0%BF%D1%80%D0%B5%D0%B4%D0%BB%D0%BE%D0%B6%D0%B5%D0%BD%D0%B8%D0%B5&type=phone_number&app_absent=0";

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
            href={WHATSAPP_URL}
            target="_blank"
            rel="noreferrer noopener"
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
    { name: "Instagram", icon: <Instagram size={32} />, href: "https://www.instagram.com/sa_musstudio/?igshid=OGQ5ZDc2ODk2ZA%3D%3D" },
    { name: "Telegram", icon: <Send size={32} />, href: "https://t.me/soundaround_club" },
    { name: "WhatsApp", icon: <MessageCircle size={32} />, href: WHATSAPP_URL },
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
                  <a href="tel:+79162353381" className="font-body font-semibold text-foreground hover:text-primary transition-colors">
                    +7 (916) 235-33-81
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
            <div className="grid grid-cols-2 gap-4">
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
