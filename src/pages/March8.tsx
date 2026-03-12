import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import PrivacyModal from "@/components/PrivacyModal";
import { useState } from "react";
import { Copy, Check, ExternalLink, Music, Sparkles } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const PROMO_CODE = "BEAUTYSOUND";
const SCHOOL_URL = "https://zvschool.ru";
const PARTNER_URL = "https://novobeauty.ru/?promo=music500&utm_source=zvschool";

const beautyServices = [
{ title: "Архитектура бровей", desc: "идеальная форма для весны" },
{ title: "Чистка лица (ультразвук)", desc: "сияющая кожа без покраснений" },
{ title: "Абсолютное счастье для волос", desc: "блеск и восстановление Lebel" },
{ title: "Маникюр + педикюр (комплекс)", desc: "идеальный образ к теплу" }];


const March8 = () => {
  const [privacyOpen, setPrivacyOpen] = useState(false);
  const [copied, setCopied] = useState(false);
  const { toast } = useToast();

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

  return (
    <div className="w-full min-h-screen">
      <SEO
        title="Акция 8 Марта — бесплатный урок вокала"
        description="Бесплатный первый урок вокала в школе Звук Вокруг + скидка 500 ₽ на бьюти-процедуры. Промокод BEAUTYSOUND до 31 марта!"
        path="/march8" />
      
      <Navigation />

      {/* Hero */}
      <section className="relative overflow-hidden py-16 md:py-24 bg-gradient-to-br from-primary/10 via-background to-secondary/10">
        <div className="absolute inset-0 pointer-events-none opacity-20">
          <div className="absolute top-10 left-10 text-6xl">🌸</div>
          <div className="absolute top-20 right-20 text-5xl">💐</div>
          <div className="absolute bottom-10 left-1/3 text-4xl">🌷</div>
          <div className="absolute bottom-20 right-10 text-6xl">✨</div>
        </div>

        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary font-heading font-bold text-sm mb-6">
            <Sparkles size={16} />
            Специальное предложение до 31 марта
          </div>

          <h1 className="font-heading text-4xl md:text-6xl font-bold text-foreground mb-4 leading-tight">
            Акция 8 Марта! <span className="text-primary">🌸</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground font-body max-w-2xl mx-auto">
            Раскрой талант вместе с красотой — два подарка к&nbsp;празднику весны
          </p>
        </div>
      </section>

      {/* Main offer */}
      <section className="py-12 md:py-20">
        <div className="max-w-5xl mx-auto px-4 grid md:grid-cols-2 gap-8">
          {/* Free lesson card */}
          <div className="rounded-3xl bg-card border border-border shadow-lg overflow-hidden flex flex-col">
            <div className="h-2 bg-gradient-to-r from-primary to-secondary" />
            <div className="p-6 md:p-8 flex flex-col flex-1">
              <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-4">
                <span className="text-3xl">🎁</span>
              </div>
              <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-3">
                Первый урок вокала — всего 300&nbsp;₽
              </h2>
              <p className="text-muted-foreground font-body mb-6 flex-1">
                Попробуй себя в роли певицы — приходи на пробное занятие <span className="font-bold text-primary">за 300&nbsp;₽</span> вместо <span className="line-through">1000&nbsp;₽</span>
                в школу музыки{" "}
                <a
                  href={SCHOOL_URL}
                  className="text-primary font-semibold hover:underline">
                  
                  Звук Вокруг
                </a>
                . Раскрой свой талант вместе с красотой!
              </p>

              <div className="rounded-xl bg-muted/50 border border-border p-4 mb-5">
                <span className="text-xs text-muted-foreground uppercase tracking-wider block mb-1">
                  Промокод для записи:
                </span>
                <div className="flex items-center gap-3">
                  <span className="font-heading font-bold text-primary text-2xl tracking-widest">
                    {PROMO_CODE}
                  </span>
                  <button
                    onClick={handleCopy}
                    className="ml-auto flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-primary/10 text-primary text-sm font-semibold transition-all hover:bg-primary/20 active:scale-95">
                    
                    {copied ? <Check size={14} /> : <Copy size={14} />}
                    {copied ? "Скопировано" : "Копировать"}
                  </button>
                </div>
              </div>

              <p className="text-sm text-muted-foreground font-body">
                Скопируй промокод и назови его администратору при записи
              </p>

              <Link
                to="/contacts"
                className="mt-4 flex items-center justify-center gap-2 px-6 py-4 rounded-2xl bg-primary text-primary-foreground font-heading font-bold text-lg transition-all duration-200 hover:brightness-110 active:scale-[0.98]">Записаться на пробный урок

                <Music size={20} />
                Записаться на бесплатный урок
              </Link>
            </div>
          </div>

          {/* Beauty bonus card */}
          <div className="rounded-3xl bg-card border border-border shadow-lg overflow-hidden flex flex-col">
            <div className="h-2 bg-gradient-to-r from-secondary to-accent" />
            <div className="p-6 md:p-8 flex flex-col flex-1">
              <div className="w-14 h-14 rounded-2xl bg-secondary/10 flex items-center justify-center mb-4">
                <span className="text-3xl">✨</span>
              </div>
              <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-3">
                Супер-бонус: скидка 500&nbsp;₽
              </h2>
              <p className="text-muted-foreground font-body mb-6">
                При выборе любой из этих процедур — скидка 500 рублей:
              </p>

              <ul className="space-y-3 mb-6 flex-1">
                {beautyServices.map((s) =>
                <li
                  key={s.title}
                  className="flex items-start gap-3 p-3 rounded-xl bg-muted/50 border border-border">
                  
                    <span className="text-primary mt-0.5">✦</span>
                    <div>
                      <span className="font-heading font-bold text-foreground text-sm">
                        {s.title}
                      </span>
                      <span className="text-muted-foreground text-sm font-body">
                        {" — "}
                        {s.desc}
                      </span>
                    </div>
                  </li>
                )}
              </ul>

              <a
                href={PARTNER_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-auto flex items-center justify-center gap-2 px-6 py-4 rounded-2xl bg-secondary text-secondary-foreground font-heading font-bold text-lg transition-all duration-200 hover:brightness-110 active:scale-[0.98]">
                
                <ExternalLink size={20} />
                Перейти на сайт салона
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Terms */}
      <section className="pb-16 md:pb-24">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <div className="rounded-2xl bg-muted/50 border border-border p-6 md:p-8">
            <h3 className="font-heading text-lg font-bold text-foreground mb-2">
              Условия акции
            </h3>
            <ul className="text-sm text-muted-foreground font-body space-y-1">
              <li>• Акция действует до 31 марта 2026 года</li>
              <li>• Бесплатный урок — для новых учеников</li>
              <li>• Назовите промокод <strong className="text-primary">BEAUTYSOUND</strong> при записи</li>
              <li>• Скидка на бьюти-процедуры суммируется с промокодом</li>
            </ul>
          </div>
        </div>
      </section>

      <Footer onPrivacyOpen={() => setPrivacyOpen(true)} />
      <PrivacyModal open={privacyOpen} onClose={() => setPrivacyOpen(false)} />
    </div>);

};

export default March8;