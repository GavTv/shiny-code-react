import { useState, useEffect } from "react";
import { X } from "lucide-react";
import { Link } from "react-router-dom";
import promoSinger from "@/assets/promo-singer.jpg";

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
        className="relative w-full max-w-lg bg-card rounded-3xl shadow-2xl overflow-hidden animate-scale-in"
      >
        {/* Image */}
        <div className="relative h-56 md:h-64 overflow-hidden">
          <img
            src={promoSinger}
            alt="Урок вокала"
            className="w-full h-full object-cover object-[center_20%]"
          />
          <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-card to-transparent" />
        </div>

        {/* Close */}
        <button
          onClick={handleClose}
          className="absolute top-3 right-3 w-8 h-8 rounded-full bg-black/30 backdrop-blur-sm flex items-center justify-center text-white hover:bg-black/50 transition-colors"
        >
          <X size={18} />
        </button>

        {/* Content */}
        <div className="px-6 pb-6 pt-2 md:px-8 md:pb-8 flex flex-col items-center text-center gap-3 md:gap-4">
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground leading-snug">
            Первый урок вокала —<br />всего 700&nbsp;₽
          </h2>

          <p className="text-sm md:text-base text-muted-foreground font-body leading-relaxed max-w-sm">
            Попробуйте и&nbsp;убедитесь сами! Опытный преподаватель подберёт программу именно для&nbsp;вас.
          </p>

          <Link
            to="/contacts"
            onClick={handleClose}
            className="w-full flex items-center justify-center gap-2 px-6 py-4 rounded-2xl bg-accent text-accent-foreground font-heading font-bold text-lg transition-all duration-200 hover:opacity-90 active:scale-[0.98] shadow-lg"
          >
            Записаться на урок
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
