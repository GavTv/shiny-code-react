import { useState, useEffect } from "react";
import { X, Copy, Check, ExternalLink } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const PROMO_CODE = "MUSIC500";
const STORAGE_KEY = "partner_promo_shown";
const PARTNER_URL =
  "https://novobeauty.ru/?promo=music500&utm_source=zvschool";

interface PartnerPromoModalProps {
  /** Signal that the first promo (lovesound) has been dismissed */
  trigger: boolean;
}

const PartnerPromoModal = ({ trigger }: PartnerPromoModalProps) => {
  const [open, setOpen] = useState(false);
  const [copied, setCopied] = useState(false);
  const { toast } = useToast();

  useEffect(() => {
    if (!trigger) return;

    // Already shown this visitor
    if (localStorage.getItem(STORAGE_KEY)) return;

    // Came from novobeauty — skip
    try {
      if (document.referrer && new URL(document.referrer).hostname.includes("novobeauty")) return;
    } catch {
      /* ignore bad referrer */
    }

    const timer = setTimeout(() => setOpen(true), 600);
    return () => clearTimeout(timer);
  }, [trigger]);

  const handleClose = () => {
    setOpen(false);
    localStorage.setItem(STORAGE_KEY, "1");
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

  const services = [
    "Архитектура бровей",
    "Чистка лица (ультразвук)",
    "Абсолютное счастье для волос",
    "Маникюр-Педикюр (комплекс)",
  ];

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
          <div className="w-10 h-10 md:w-16 md:h-16 rounded-xl md:rounded-2xl bg-primary/10 flex items-center justify-center">
            <span className="text-lg md:text-3xl" role="img" aria-label="music and beauty">
              🎵💄
            </span>
          </div>

          <div>
            <h2 className="font-heading text-lg md:text-3xl font-bold text-foreground mb-1 md:mb-2">
              Готов к сцене?
            </h2>
            <p className="font-body text-sm md:text-base text-muted-foreground leading-relaxed">
              Записался в&nbsp;Звук&nbsp;Вокруг? Получи скидку <span className="font-bold text-primary">500&nbsp;₽</span> в&nbsp;NovoBeauty на:
            </p>
          </div>

          {/* Services list */}
          <ul className="w-full text-left space-y-1.5 md:space-y-2 px-2 md:px-4">
            {services.map((s) => (
              <li key={s} className="flex items-start gap-2 text-sm md:text-base text-foreground font-body">
                <span className="text-primary mt-0.5">✦</span>
                {s}
              </li>
            ))}
          </ul>

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
            className="w-full flex items-center justify-center gap-2 px-4 py-2.5 md:px-6 md:py-3 rounded-xl md:rounded-2xl bg-muted text-foreground font-heading font-bold text-sm md:text-base transition-all duration-200 hover:bg-muted/80 active:scale-[0.98]"
          >
            {copied ? <Check size={16} /> : <Copy size={16} />}
            {copied ? "Скопировано!" : "Скопировать промокод"}
          </button>

          {/* CTA button */}
          <a
            href={PARTNER_URL}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => localStorage.setItem(STORAGE_KEY, "1")}
            className="w-full flex items-center justify-center gap-2 px-4 py-3 md:px-6 md:py-4 rounded-xl md:rounded-2xl bg-primary text-primary-foreground font-heading font-bold text-base md:text-lg transition-all duration-200 hover:brightness-110 active:scale-[0.98]"
          >
            <ExternalLink size={18} />
            Перейти в салон
          </a>

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

export default PartnerPromoModal;
