import { useState, useEffect } from "react";
import { X, Copy, Check, Music } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const PROMO_CODE = "lovesound";
const STORAGE_KEY = "promo_modal_shown";

const PromoModal = () => {
  const [open, setOpen] = useState(false);
  const [copied, setCopied] = useState(false);
  const { toast } = useToast();

  useEffect(() => {
    if (sessionStorage.getItem(STORAGE_KEY)) return;
    const timer = setTimeout(() => setOpen(true), 1200);
    return () => clearTimeout(timer);
  }, []);

  const handleClose = () => {
    setOpen(false);
    sessionStorage.setItem(STORAGE_KEY, "1");
  };

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(PROMO_CODE);
      setCopied(true);
      toast({ title: "Промокод скопирован!", description: `«${PROMO_CODE}» в буфере обмена` });
      setTimeout(() => setCopied(false), 2000);
    } catch {
      toast({ title: "Не удалось скопировать", variant: "destructive" });
    }
  };

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 animate-fade-in"
      onClick={handleClose}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />

      {/* Modal */}
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-md bg-card rounded-3xl shadow-2xl overflow-hidden animate-scale-in"
      >
        {/* Top accent */}
        <div className="h-2 bg-gradient-to-r from-primary via-accent to-secondary" />

        {/* Close */}
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 w-8 h-8 rounded-full bg-muted flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-muted/80 transition-colors"
        >
          <X size={18} />
        </button>

        <div className="p-4 pt-3 md:p-8 md:pt-6 flex flex-col items-center text-center gap-3 md:gap-5">
          {/* Icon */}
          <div className="w-10 h-10 md:w-16 md:h-16 rounded-xl md:rounded-2xl bg-primary/10 flex items-center justify-center text-primary">
            <Music size={22} className="md:hidden" />
            <Music size={32} className="hidden md:block" />
          </div>

          <div>
            <h2 className="font-heading text-lg md:text-3xl font-bold text-foreground mb-1 md:mb-2">
              Первое занятие за <span className="line-through text-muted-foreground">1000&nbsp;₽</span> 700&nbsp;₽
            </h2>
            <p className="font-body text-sm md:text-base text-muted-foreground leading-relaxed">
              Назовите промокод при записи и&nbsp;получите скидку на&nbsp;первое занятие в&nbsp;нашей студии
            </p>
            <p className="font-body text-xs md:text-sm text-destructive font-semibold mt-1.5 md:mt-2">
              ⏳ Акция действует только до&nbsp;конца месяца!
            </p>
          </div>

          {/* Promo code block */}
          <div className="w-full rounded-xl md:rounded-2xl bg-muted/50 border border-border p-3 md:p-5">
            <span className="text-[10px] md:text-xs font-heading text-muted-foreground uppercase tracking-widest block mb-1 md:mb-2">
              Ваш промокод
            </span>
            <span className="font-heading text-2xl md:text-3xl font-bold text-primary tracking-wider">
              {PROMO_CODE}
            </span>
          </div>

          {/* Copy button */}
          <button
            onClick={handleCopy}
            className="w-full flex items-center justify-center gap-2 px-4 py-3 md:px-6 md:py-4 rounded-xl md:rounded-2xl bg-primary text-primary-foreground font-heading font-bold text-base md:text-lg transition-all duration-200 hover:brightness-110 active:scale-[0.98]"
          >
            {copied ? <Check size={18} /> : <Copy size={18} />}
            {copied ? "Скопировано!" : "Скопировать промокод"}
          </button>

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
