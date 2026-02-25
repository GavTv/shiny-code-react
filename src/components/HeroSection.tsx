import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background placeholder */}
      <div className="absolute inset-0 z-[1] bg-gradient-to-br from-primary/30 via-secondary/20 to-accent/10" />
      
      {/* Overlay */}
      <div className="absolute inset-0 z-[2] bg-black/50" />

      {/* Content */}
      <div className="relative z-[3] w-full max-w-[84rem] flex flex-col items-center text-center gap-12 px-5 py-12">
        <Link
          to="/contacts"
          className="inline-flex items-center px-8 py-5 text-lg font-body font-semibold text-accent-foreground bg-accent rounded-2xl shadow-lg border border-transparent transition-all duration-200 hover:opacity-90 mt-4"
        >
          Запись на пробный урок
        </Link>

        <div className="flex flex-col items-center gap-2 px-6 py-5 bg-black/55 rounded-3xl backdrop-blur-md">
          <span className="text-background/85 text-sm font-semibold uppercase tracking-widest">
            Позвонить
          </span>
          <a
            href="tel:+79162353381"
            className="text-background text-2xl md:text-3xl font-bold transition-transform duration-300 hover:scale-105 hover:opacity-90"
          >
            +7 (916) 235-33-81
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
