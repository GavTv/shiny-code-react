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

        <div className="p-8 pt-6 flex flex-col items-center text-center gap-5">
          {/* Icon */}
          <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center text-primary">
            <Music size={32} />
          </div>

          <div>
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-2">
              Первое занятие за 700&nbsp;₽
            </h2>
            <p className="font-body text-muted-foreground leading-relaxed">
              Назовите промокод при записи и&nbsp;получите скидку на&nbsp;первое занятие в&nbsp;нашей студии
            </p>
          </div>

          {/* Promo code block */}
          <div className="w-full rounded-2xl bg-muted/50 border border-border p-5">
            <span className="text-xs font-heading text-muted-foreground uppercase tracking-widest block mb-2">
              Ваш промокод
            </span>
            <span className="font-heading text-3xl font-bold text-primary tracking-wider">
              {PROMO_CODE}
            </span>
          </div>

          {/* Copy button */}
          <button
            onClick={handleCopy}
            className="w-full flex items-center justify-center gap-2 px-6 py-4 rounded-2xl bg-primary text-primary-foreground font-heading font-bold text-lg transition-all duration-200 hover:brightness-110 active:scale-[0.98]"
          >
            {copied ? <Check size={20} /> : <Copy size={20} />}
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
