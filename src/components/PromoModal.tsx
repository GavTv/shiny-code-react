import { useState, useEffect } from "react";
import { X, Copy, Check, ExternalLink, Music } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const PROMO_LOVESOUND = "lovesound";
const PROMO_MUSIC500 = "MUSIC500";
const STORAGE_KEY = "promo_modal_shown";
const PARTNER_URL = "https://novobeauty.ru/?promo=music500&utm_source=zvschool";

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

  const handleCopyBoth = async () => {
    const text = `1. Промокод на пробник: ${PROMO_LOVESOUND}\n2. Промокод NovoBeauty: ${PROMO_MUSIC500}`;
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      toast({ title: "Оба промокода скопированы!", description: `«${PROMO_LOVESOUND}» и «${PROMO_MUSIC500}» в буфере` });
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
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />

      <div
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-md bg-card rounded-3xl shadow-2xl overflow-hidden animate-scale-in"
      >
        <div className="h-2 bg-gradient-to-r from-primary via-accent to-secondary" />

        <button
          onClick={handleClose}
          className="absolute top-4 right-4 w-8 h-8 rounded-full bg-muted flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-muted/80 transition-colors"
        >
          <X size={18} />
        </button>

        <div className="p-4 pt-3 md:p-8 md:pt-6 flex flex-col items-center text-center gap-2.5 md:gap-4">
          <div className="w-10 h-10 md:w-14 md:h-14 rounded-xl md:rounded-2xl bg-primary/10 flex items-center justify-center">
            <span className="text-lg md:text-2xl" role="img" aria-label="bonuses">🎁</span>
          </div>

          <h2 className="font-heading text-lg md:text-2xl font-bold text-foreground">
            Записался? Два бонуса!
          </h2>

          {/* Bonus 1 */}
          <div className="w-full rounded-xl bg-muted/50 border border-border p-3 md:p-4 text-left">
            <div className="flex items-center gap-2 mb-1">
              <span className="text-primary font-heading font-bold text-sm md:text-base">1.</span>
              <span className="font-heading font-bold text-sm md:text-base text-foreground">
                Пробник за <span className="line-through text-muted-foreground">1000</span> 700&nbsp;₽
              </span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-[10px] md:text-xs text-muted-foreground uppercase tracking-wider">Промокод:</span>
              <span className="font-heading font-bold text-primary text-base md:text-lg tracking-wider">{PROMO_LOVESOUND}</span>
            </div>
          </div>

          {/* Bonus 2 */}
          <div className="w-full rounded-xl bg-muted/50 border border-border p-3 md:p-4 text-left">
            <div className="flex items-center gap-2 mb-1">
              <span className="text-primary font-heading font-bold text-sm md:text-base">2.</span>
              <span className="font-heading font-bold text-sm md:text-base text-foreground">
                Скидка 500&nbsp;₽ в&nbsp;NovoBeauty
              </span>
            </div>
            <ul className="space-y-0.5 mb-2 ml-5">
              {services.map((s) => (
                <li key={s} className="flex items-start gap-1.5 text-xs md:text-sm text-muted-foreground font-body">
                  <span className="text-primary mt-0.5 text-[10px]">✦</span>
                  {s}
                </li>
              ))}
            </ul>
            <div className="flex items-center gap-2">
              <span className="text-[10px] md:text-xs text-muted-foreground uppercase tracking-wider">Промокод:</span>
              <span className="font-heading font-bold text-primary text-base md:text-lg tracking-wider">{PROMO_MUSIC500}</span>
            </div>
          </div>

          {/* Copy both */}
          <button
            onClick={handleCopyBoth}
            className="w-full flex items-center justify-center gap-2 px-4 py-2.5 md:px-6 md:py-3 rounded-xl md:rounded-2xl bg-muted text-foreground font-heading font-bold text-sm md:text-base transition-all duration-200 hover:bg-muted/80 active:scale-[0.98]"
          >
            {copied ? <Check size={16} /> : <Copy size={16} />}
            {copied ? "Скопировано!" : "Скопировать оба промокода"}
          </button>

          {/* CTA */}
          <a
            href={PARTNER_URL}
            target="_blank"
            rel="noopener noreferrer"
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

export default PromoModal;
