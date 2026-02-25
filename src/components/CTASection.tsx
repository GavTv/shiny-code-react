import { Mic, Phone, PhoneCall } from "lucide-react";

const CTASection = () => {
  return (
    <section className="w-full py-8 px-5 bg-gradient-to-br from-primary to-secondary">
      <div className="max-w-[84rem] mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
        {/* Left content */}
        <div className="flex items-start gap-5 flex-1">
          <div className="w-16 h-16 rounded-2xl bg-background text-primary flex items-center justify-center shadow-lg flex-shrink-0">
            <Mic size={32} />
          </div>
          <div className="flex flex-col gap-2">
            <h3 className="text-xl font-heading font-bold text-primary-foreground leading-snug">
              Запишись на пробный урок — первое занятие 1000 руб.
            </h3>
            <p className="text-primary-foreground/95 text-base leading-relaxed">
              Познакомьтесь с преподавателями и студией
            </p>
          </div>
        </div>

        {/* Right actions */}
        <div className="flex flex-col items-end gap-4">
          <a
            href="tel:+79162353381"
            className="inline-flex items-center px-6 py-4 text-lg font-body font-semibold text-accent-foreground bg-accent rounded-2xl shadow-lg transition-all duration-200 hover:opacity-90"
          >
            Записаться сейчас
          </a>
          <div className="flex gap-3">
            {[
              { href: "tel:+79162353381", label: "Позвонить", icon: Phone },
              { href: "https://t.me/79162353381", label: "Telegram", icon: PhoneCall },
            ].map((c) => {
              const Icon = c.icon;
              return (
                <a
                  key={c.label}
                  href={c.href}
                  className="flex items-center gap-1.5 px-3 py-2 text-sm font-semibold text-primary bg-background rounded-sm shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md"
                >
                  <Icon size={20} />
                  <span className="font-heading">{c.label}</span>
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
