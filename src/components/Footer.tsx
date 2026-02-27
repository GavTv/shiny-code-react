import { Link } from "react-router-dom";
import { Send, Phone, Mail, MapPin } from "lucide-react";

interface FooterProps {
  onPrivacyOpen: () => void;
}

const Footer = ({ onPrivacyOpen }: FooterProps) => {
  return (
    <footer className="relative w-full overflow-hidden bg-gradient-to-br from-primary/8 to-background pt-16 pb-12">
      {/* Decorative layer */}
      <div className="absolute inset-0 opacity-60 pointer-events-none z-[1]" style={{
        background: "radial-gradient(circle at 80% 20%, hsl(var(--accent) / 0.06) 0%, transparent 50%), radial-gradient(circle at 20% 80%, hsl(var(--secondary) / 0.05) 0%, transparent 50%)"
      }} />

      <div className="relative z-[2] max-w-[84rem] mx-auto px-8">
        {/* Grid */}
        <div className="flex flex-col md:flex-row gap-12 mb-12">
          {/* Brand column */}
          <div className="flex-[1.5] min-w-0">
            <div className="w-[160px] h-[70px] bg-primary/10 rounded-lg flex items-center justify-center mb-4">
              <span className="font-heading font-bold text-lg bg-gradient-to-br from-primary to-secondary bg-clip-text text-transparent">
                Звук Вокруг
              </span>
            </div>
            <div className="flex flex-col gap-3 mt-4">
              <span className="text-sm font-body font-semibold text-foreground">Присоединяйтесь к нам:</span>
              <div className="flex gap-3">
                {[
                  { label: "Telegram", href: "https://t.me/soundaround_club", icon: Send },
                  { label: "ВК", href: "https://vk.com/studiozv", icon: () => <span className="text-sm font-heading font-bold">ВК</span> },
                ].map((s) => {
                  const Icon = s.icon;
                  return (
                    <a
                      key={s.label}
                      href={s.href}
                      target="_blank"
                      rel="noreferrer noopener"
                      aria-label={s.label}
                      className="w-12 h-12 rounded-2xl bg-muted border border-primary/15 text-primary flex items-center justify-center shadow-sm transition-all duration-300 hover:bg-primary hover:text-primary-foreground hover:-translate-y-1 hover:shadow-lg"
                    >
                      <Icon size={24} />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex-1 min-w-0">
            <h3 className="relative text-lg font-heading font-bold text-foreground leading-snug mb-4 pb-2">
              Навигация
              <span className="absolute bottom-0 left-0 w-10 h-[3px] bg-gradient-to-r from-accent to-transparent rounded-full" />
            </h3>
            <nav className="flex flex-col gap-3">
              {[
                { label: "Главная", to: "/" },
                { label: "О нас", to: "/about" },
                { label: "Дисциплины", to: "/disciplines" },
                { label: "Контакты", to: "/contacts" },
              ].map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className="relative text-muted-foreground text-base font-body pl-2 transition-all duration-250 hover:text-primary hover:pl-4 before:absolute before:top-1/2 before:left-0 before:-translate-y-1/2 before:w-0 before:h-0.5 before:bg-accent before:transition-all before:duration-300 hover:before:w-3"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contacts */}
          <div className="flex-1 min-w-0">
            <h3 className="relative text-lg font-heading font-bold text-foreground leading-snug mb-4 pb-2">
              Контакты
              <span className="absolute bottom-0 left-0 w-10 h-[3px] bg-gradient-to-r from-accent to-transparent rounded-full" />
            </h3>
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-sm bg-primary/10 flex items-center justify-center flex-shrink-0 text-primary">
                  <Phone size={20} />
                </div>
                <a href="tel:+79162353381" className="text-foreground text-base font-body transition-colors hover:text-primary">
                  +7 (916) 235-33-81
                </a>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-sm bg-primary/10 flex items-center justify-center flex-shrink-0 text-primary">
                  <Mail size={20} />
                </div>
                <a href="mailto:soundaround.club@yandex.ru" className="text-foreground text-base font-body transition-colors hover:text-primary">
                  soundaround.club@yandex.ru
                </a>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-sm bg-primary/10 flex items-center justify-center flex-shrink-0 text-primary">
                  <MapPin size={20} />
                </div>
                <span className="text-foreground text-base font-body">
                  улица Мнёвники дом 7 корпус 1
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-5 border-t border-border/40 pt-6">
          <div className="flex flex-col gap-2 flex-1">
            <p className="text-muted-foreground text-xs font-body">
              © 2025 Студия Звук Вокруг. Все права защищены.
            </p>
            <div className="flex items-center gap-2">
              <button
                onClick={onPrivacyOpen}
                className="text-muted-foreground text-xs font-body transition-colors hover:text-primary cursor-pointer bg-transparent border-none p-0"
              >
                Политика конфиденциальности
              </button>
              <span className="text-muted-foreground text-xs">•</span>
              <a href="#" className="text-muted-foreground text-xs font-body transition-colors hover:text-primary">
                Условия использования
              </a>
            </div>
          </div>
          <div className="flex-shrink-0">
            <p className="text-muted-foreground text-sm italic font-body">
              Создано с любовью к музыке и творчеству
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
