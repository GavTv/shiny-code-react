import { Link } from "react-router-dom";
import { Send, Phone, Mail, MapPin } from "lucide-react";

interface FooterProps {
  onPrivacyOpen: () => void;
}

const Footer = ({ onPrivacyOpen }: FooterProps) => {
  return (
    <footer className="relative w-full overflow-hidden bg-gradient-to-br from-primary/8 to-background pt-8 pb-6 md:pt-16 md:pb-12">
      {/* Decorative layer */}
      <div className="absolute inset-0 opacity-60 pointer-events-none z-[1]" style={{
        background: "radial-gradient(circle at 80% 20%, hsl(var(--accent) / 0.06) 0%, transparent 50%), radial-gradient(circle at 20% 80%, hsl(var(--secondary) / 0.05) 0%, transparent 50%)"
      }} />

      <div className="relative z-[2] max-w-[84rem] mx-auto px-4 md:px-8">
        {/* Grid */}
        <div className="flex flex-col md:flex-row gap-6 md:gap-12 mb-6 md:mb-12">


          {/* Navigation */}
          <div className="flex-1 min-w-0">
            <h3 className="relative text-base md:text-lg font-heading font-bold text-foreground leading-snug mb-2 md:mb-4 pb-2">
              Навигация
              <span className="absolute bottom-0 left-0 w-10 h-[3px] bg-gradient-to-r from-accent to-transparent rounded-full" />
            </h3>
            <nav className="flex flex-col gap-1.5 md:gap-3">
              {[
                { label: "Главная", to: "/" },
                { label: "О нас", to: "/about" },
                { label: "Дисциплины", to: "/disciplines" },
                { label: "Контакты", to: "/contacts" },
              ].map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className="relative text-muted-foreground text-sm md:text-base font-body pl-2 transition-all duration-250 hover:text-primary hover:pl-4 before:absolute before:top-1/2 before:left-0 before:-translate-y-1/2 before:w-0 before:h-0.5 before:bg-accent before:transition-all before:duration-300 hover:before:w-3"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contacts */}
          <div className="flex-1 min-w-0">
            <h3 className="relative text-base md:text-lg font-heading font-bold text-foreground leading-snug mb-2 md:mb-4 pb-2">
              Контакты
              <span className="absolute bottom-0 left-0 w-10 h-[3px] bg-gradient-to-r from-accent to-transparent rounded-full" />
            </h3>
            <div className="flex flex-col gap-2.5 md:gap-4">
              <div className="flex items-center gap-2 md:gap-3">
                <div className="w-8 h-8 md:w-10 md:h-10 rounded-sm bg-primary/10 flex items-center justify-center flex-shrink-0 text-primary">
                  <Phone size={20} />
                </div>
                <a href="tel:+79162353381" className="text-foreground text-sm md:text-base font-body transition-colors hover:text-primary">
                  +7 (916) 235-33-81
                </a>
              </div>
              <div className="flex items-center gap-2 md:gap-3">
                <div className="w-8 h-8 md:w-10 md:h-10 rounded-sm bg-primary/10 flex items-center justify-center flex-shrink-0 text-primary">
                  <Mail size={20} />
                </div>
                <a href="mailto:soundaround.club@yandex.ru" className="text-foreground text-sm md:text-base font-body transition-colors hover:text-primary break-all">
                  soundaround.club@yandex.ru
                </a>
              </div>
              <div className="flex items-center gap-2 md:gap-3">
                <div className="w-8 h-8 md:w-10 md:h-10 rounded-sm bg-primary/10 flex items-center justify-center flex-shrink-0 text-primary">
                  <MapPin size={20} />
                </div>
                <span className="text-foreground text-sm md:text-base font-body">
                  улица Мнёвники дом 7 корпус 1
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="flex flex-col items-center gap-1 border-t border-border/40 pt-3 md:pt-4">
          <p className="text-muted-foreground text-[10px] font-body">
            © 2025 Студия Звук Вокруг. Все права защищены.
          </p>
          <div className="flex items-center gap-1.5">
            <button
              onClick={onPrivacyOpen}
              className="text-muted-foreground text-[10px] font-body transition-colors hover:text-primary cursor-pointer bg-transparent border-none p-0"
            >
              Политика конфиденциальности
            </button>
            <span className="text-muted-foreground text-[10px]">•</span>
            <a href="#" className="text-muted-foreground text-[10px] font-body transition-colors hover:text-primary">
              Условия использования
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
