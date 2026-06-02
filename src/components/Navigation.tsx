import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Menu, X, Send, Phone } from "lucide-react";
import logo from "@/assets/logo.png";

const navLinks = [
  { label: "Главная", to: "/" },
  { label: "О нас", to: "/about" },
  { label: "Услуги", to: "/disciplines" },
  
  { label: "Блог", to: "/blog" },
  { label: "Контакты", to: "/contacts" },
];

const WhatsAppIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 2.06.56 4.07 1.62 5.83L2.5 22l4.37-1.21a9.85 9.85 0 0 0 5.17 1.47c5.46 0 9.91-4.45 9.91-9.91S17.5 2 12.04 2zm0 17.82a7.93 7.93 0 0 1-4.05-1.12l-.29-.18-2.55.71.68-2.48-.18-.29A7.91 7.91 0 0 1 12.04 3.99c4.37 0 7.93 3.56 7.93 7.93 0 2.16-.85 4.2-2.38 5.73a7.96 7.96 0 0 1-5.55 2.17zm4.47-6.04c-.24-.12-1.43-.71-1.65-.79-.22-.08-.38-.12-.54.12-.16.24-.62.79-.77.95-.14.16-.29.18-.54.06-.24-.12-1.03-.38-1.97-1.22-.72-.64-1.21-1.43-1.35-1.67-.14-.24-.01-.37.1-.5.11-.11.24-.29.36-.43.12-.14.16-.24.24-.4.08-.16.04-.29-.02-.4-.06-.11-.54-1.31-.74-1.79-.2-.46-.39-.4-.54-.4-.14 0-.29-.02-.44-.02-.16 0-.4.06-.61.29-.21.22-.8.78-.8 1.91s.82 2.22.93 2.37c.11.16 1.62 2.48 3.92 3.48.55.24.97.38 1.3.48.55.18 1.05.15 1.45.1.44-.06 1.43-.58 1.63-1.15.2-.56.2-1.04.14-1.15-.06-.1-.22-.16-.46-.28z"/>
  </svg>
);

const socials = [
  { label: "Telegram", href: "https://t.me/zv_musicstudio?text=%D0%97%D0%B4%D1%80%D0%B0%D0%B2%D1%81%D1%82%D0%B2%D1%83%D0%B9%D1%82%D0%B5,%20%D0%BF%D0%B8%D1%88%D1%83%20%D0%92%D0%B0%D0%BC%20%D1%81%20%D1%81%D0%B0%D0%B9%D1%82%D0%B0%20Zoon", icon: Send },
  { label: "ВКонтакте", href: "https://vk.com/studiozv", icon: () => <span className="text-xs font-heading font-bold">ВК</span> },
  { label: "WhatsApp", href: "https://wa.me/79162353381", icon: WhatsAppIcon },
];

const Navigation = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMobileOpen(false);
    };
    document.addEventListener("keydown", handler);
    return () => document.removeEventListener("keydown", handler);
  }, []);

  return (
    <nav className="sticky top-0 w-full z-[1000] bg-background border-b border-border">
      <div className="max-w-[84rem] mx-auto flex items-center justify-between px-4 py-1.5 md:px-6 md:py-3 gap-4">
        {/* Logo */}
        <Link to="/" className="flex-shrink-0 transition-transform hover:-translate-y-0.5">
          <img src={logo} alt="Звук Вокруг" className="h-16 md:h-28 w-auto" />
        </Link>

        {/* Desktop nav - centered links */}
        <div className="hidden md:flex items-center justify-center flex-1">
          <ul className="flex items-center gap-6 list-none m-0 p-0">
            {navLinks.map((link) => (
              <li key={link.to}>
                <Link
                  to={link.to}
                  className="relative px-3 py-2 text-foreground font-body font-semibold text-base whitespace-nowrap rounded-sm transition-all duration-300 hover:text-primary after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-0 after:h-0.5 after:bg-gradient-to-r after:from-primary after:to-secondary after:transition-all after:duration-300 hover:after:w-4/5"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Desktop socials - right */}
        <div className="hidden md:flex items-center gap-3 flex-shrink-0">
          {socials.map((s) => {
            const Icon = s.icon;
            return (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noreferrer noopener"
                aria-label={s.label}
                className="w-10 h-10 rounded-full bg-muted flex items-center justify-center text-primary border border-transparent transition-all duration-300 hover:bg-primary hover:text-primary-foreground hover:-translate-y-1 hover:scale-105 hover:shadow-lg"
              >
                <Icon size={20} />
              </a>
            );
          })}
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setMobileOpen(true)}
          aria-label="Открыть меню"
          className="md:hidden w-11 h-11 flex items-center justify-center text-primary bg-transparent border-none cursor-pointer rounded-sm transition-all hover:bg-muted"
        >
          <Menu size={28} />
        </button>
      </div>

      {/* Mobile overlay */}
      <div
        className={`fixed inset-0 z-[1100] bg-background transition-all duration-300 flex flex-col ${
          mobileOpen ? "opacity-100 translate-x-0 pointer-events-auto" : "opacity-0 translate-x-full pointer-events-none"
        }`}
        onClick={(e) => e.target === e.currentTarget && setMobileOpen(false)}
      >
        <div className="sticky top-0 flex items-center justify-between px-5 py-4 bg-background border-b border-border z-[1110]">
          <span className="font-heading text-xl font-bold bg-gradient-to-br from-primary to-secondary bg-clip-text text-transparent">
            Звук Вокруг
          </span>
          <button
            onClick={() => setMobileOpen(false)}
            aria-label="Закрыть меню"
            className="w-11 h-11 flex items-center justify-center text-primary bg-transparent border-none cursor-pointer rounded-sm transition-all hover:rotate-90 hover:bg-muted"
          >
            <X size={32} />
          </button>
        </div>
        <nav className="flex-1 flex flex-col gap-12 px-5 py-12 pb-16">
          <ul className="flex flex-col gap-4 list-none m-0 p-0">
            {navLinks.map((link, i) => (
              <li key={link.to}>
                <Link
                  to={link.to}
                  onClick={() => setMobileOpen(false)}
                  className="block text-foreground text-2xl font-heading font-bold py-3 border-b-2 border-transparent transition-all duration-300 hover:text-primary hover:pl-3 hover:border-primary"
                  style={{ animationDelay: `${(i + 1) * 0.1}s` }}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          <div className="border-t border-border pt-6">
            <span className="text-muted-foreground text-lg font-heading font-semibold mb-4 block">
              Мы в соцсетях
            </span>
            <div className="grid grid-cols-2 gap-3">
              {socials.map((s) => {
                const Icon = s.icon;
                return (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="flex items-center gap-3 px-4 py-3 text-sm font-body font-semibold bg-muted rounded-lg border border-transparent transition-all duration-300 hover:bg-primary hover:text-primary-foreground hover:-translate-y-0.5"
                  >
                    <Icon size={24} />
                    <span>{s.label}</span>
                  </a>
                );
              })}
            </div>
          </div>
        </nav>
      </div>
    </nav>
  );
};

export default Navigation;
