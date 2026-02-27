import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Menu, X, Instagram, Send, Phone } from "lucide-react";
import logo from "@/assets/logo.png";

const navLinks = [
  { label: "Главная", to: "/" },
  { label: "О нас", to: "/about" },
  { label: "Дисциплины", to: "/disciplines" },
  { label: "Контакты", to: "/contacts" },
];

const socials = [
  { label: "Instagram", href: "https://www.instagram.com/sa_musstudio/?igshid=OGQ5ZDc2ODk2ZA%3D%3D", icon: Instagram },
  { label: "Telegram", href: "https://t.me/soundaround_club", icon: Send },
  { label: "ВКонтакте", href: "https://vk.com/studiozv", icon: () => <span className="text-xs font-heading font-bold">ВК</span> },
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
      <div className="max-w-[84rem] mx-auto flex items-center justify-between px-6 py-3 gap-4">
        {/* Logo */}
        <Link to="/" className="flex-shrink-0 transition-transform hover:-translate-y-0.5">
          <img src={logo} alt="Звук Вокруг" className="h-28 w-auto" />
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center justify-center flex-1 gap-12">
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
          <div className="flex items-center gap-3">
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
