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
            href="https://api.whatsapp.com/send/?phone=79162353381&text=%D0%94%D0%BE%D0%B1%D1%80%D1%8B%D0%B9+%D0%B4%D0%B5%D0%BD%D1%8C%21+%D0%A5%D0%BE%D1%87%D1%83+%D0%B7%D0%B0%D0%BF%D0%B8%D1%81%D0%B0%D1%82%D1%8C%D1%81%D1%8F+%D0%BD%D0%B0+%D0%BF%D1%80%D0%BE%D0%B1%D0%BD%D0%BE%D0%B5+%D0%B7%D0%B0%D0%BD%D1%8F%D1%82%D0%B8%D0%B5&type=phone_number&app_absent=0"
            target="_blank"
            rel="noreferrer noopener"
            className="inline-flex items-center px-6 py-4 text-lg font-body font-semibold text-accent-foreground bg-accent rounded-2xl shadow-lg transition-all duration-200 hover:opacity-90"
          >
            Записаться сейчас
          </a>
          <div className="flex gap-3">
            {[
              { href: "tel:+79162353381", label: "Позвонить", icon: Phone },
              { href: "https://wa.me/79162353381", label: "WhatsApp", icon: PhoneCall },
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
