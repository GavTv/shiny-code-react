import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Music, X } from "lucide-react";

const PromoBanner = () => {
  const [visible, setVisible] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 10000);
    return () => clearTimeout(timer);
  }, []);

  if (dismissed) return null;

  return (
    <div
      className={`w-full transition-all duration-1000 ease-out overflow-hidden ${
        visible ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
      }`}
    >
      <div className="relative bg-gradient-to-r from-primary via-accent to-secondary py-4 px-5">
        <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-6 text-center">
          <div className="flex items-center gap-2">
            <Music className="w-5 h-5 text-primary-foreground" />
            <span className="font-heading font-bold text-base md:text-lg text-primary-foreground">
              Первый урок вокала — всего 700&nbsp;₽
            </span>
          </div>
          <Link
            to="/contacts"
            className="inline-flex items-center px-5 py-2 rounded-xl bg-background text-foreground font-heading font-bold text-sm transition-all duration-200 hover:opacity-90 active:scale-[0.98]"
          >
            Записаться
          </Link>
        </div>
        <button
          onClick={() => setDismissed(true)}
          className="absolute top-1/2 -translate-y-1/2 right-3 w-7 h-7 rounded-full bg-white/20 flex items-center justify-center text-primary-foreground hover:bg-white/30 transition-colors"
        >
          <X size={14} />
        </button>
      </div>
    </div>
  );
};

export default PromoBanner;
