import { useState, useEffect } from "react";
import { X, Music } from "lucide-react";
import { Link } from "react-router-dom";

const STORAGE_KEY = "promo_vocal_shown";

const PromoModal = () => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (sessionStorage.getItem(STORAGE_KEY)) return;
    const timer = setTimeout(() => setOpen(true), 10000);
    return () => clearTimeout(timer);
  }, []);

  const handleClose = () => {
    setOpen(false);
    sessionStorage.setItem(STORAGE_KEY, "1");
  };

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 animate-fade-in"
      onClick={handleClose}
    >
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />

      <div
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-sm bg-card rounded-3xl shadow-2xl overflow-hidden animate-scale-in"
      >
        <div className="h-2 bg-gradient-to-r from-primary via-accent to-secondary" />

        <button
          onClick={handleClose}
          className="absolute top-4 right-4 w-8 h-8 rounded-full bg-muted flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-muted/80 transition-colors"
        >
          <X size={18} />
        </button>

        <div className="p-6 pt-5 md:p-8 md:pt-6 flex flex-col items-center text-center gap-4">
          <div className="w-12 h-12 md:w-14 md:h-14 rounded-2xl bg-primary/10 flex items-center justify-center">
            <Music className="w-6 h-6 md:w-7 md:h-7 text-primary" />
          </div>

          <h2 className="font-heading text-xl md:text-2xl font-bold text-foreground">
            Первый урок вокала — всего 700&nbsp;₽
          </h2>

          <p className="text-sm md:text-base text-muted-foreground font-body leading-relaxed">
            Попробуйте и&nbsp;убедитесь сами!
            <br />
            Запишитесь прямо сейчас.
          </p>

          <Link
            to="/contacts"
            onClick={handleClose}
            className="w-full flex items-center justify-center gap-2 px-6 py-4 rounded-2xl bg-accent text-accent-foreground font-heading font-bold text-base md:text-lg transition-all duration-200 hover:opacity-90 active:scale-[0.98]"
          >
            Записаться
          </Link>

          <button
            onClick={handleClose}
            className="text-sm text-muted-foreground hover:text-foreground transition-colors font-body"
          >
            Закрыть
          </button>
        </div>
      </div>
    </div>
  );
};

export default PromoModal;
