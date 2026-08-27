import { useState } from "react";
import { Phone, Mail, MapPin, Send, Music } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";
import formGuitarImg from "@/assets/form/guitar.jpg";
import formVocalImg from "@/assets/form/vocal.jpg";
import formPianoImg from "@/assets/form/piano.jpg";
import formUkuleleImg from "@/assets/form/ukulele.jpg";
import formSongwritingImg from "@/assets/form/songwriting.jpg";
import formEnsembleImg from "@/assets/form/ensemble.jpg";
import formDefaultImg from "@/assets/form/default.jpg";

const disciplineImages: Record<string, string> = {
  guitar: formGuitarImg,
  vocal: formVocalImg,
  piano: formPianoImg,
  ukulele: formUkuleleImg,
  songwriting: formSongwritingImg,
  ensemble: formEnsembleImg
};

/* ─── Hero ─── */
const ContactHero = () =>
<section className="relative py-12 md:py-28 overflow-hidden">
    <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-accent/10 to-primary/30" />
    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
    <div className="relative z-10 max-w-[84rem] mx-auto px-4 md:px-6 flex items-center justify-center">
      <div className="bg-card/80 backdrop-blur-sm rounded-xl md:rounded-[24px] p-6 md:p-12 text-center shadow-[0_24px_60px_rgba(100,50,200,0.25)] max-w-2xl">
        <h1 className="font-heading text-2xl md:text-5xl font-bold text-foreground mb-2 md:mb-4">
          Наша Связь
        </h1>
        <p className="font-body text-muted-foreground text-sm md:text-lg mb-4 md:mb-8">
          Откройте для себя свой голос, инструмент или сценическое мастерство в уютной музыкальной школе-студии
        </p>
        <a
        href="tel:89162353381"
        className="inline-flex items-center gap-2 px-6 py-3 md:px-8 md:py-4 rounded-xl md:rounded-[16px] bg-primary text-primary-foreground font-heading font-bold text-sm md:text-lg hover:bg-primary/90 transition-all duration-300 hover:-translate-y-0.5 shadow-lg">
        
          Запишись на пробный урок
        </a>
      </div>
    </div>
  </section>;


/* ─── Quick Contact Cards ─── */
const QuickContact = () =>
<section className="py-12">
    <div className="max-w-[84rem] mx-auto px-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
        <div className="bg-card rounded-[24px] p-8 text-center shadow-[0_4px_12px_rgba(100,50,200,0.15)]">
          <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center text-primary">
            <Phone size={32} />
          </div>
          <h3 className="font-heading font-bold text-foreground mb-2">Телефон</h3>
          <a href="tel:+79162353381" className="font-body text-muted-foreground hover:text-primary transition-colors">
            +7 (916) 235-33-81
          </a>
        </div>
        <div className="bg-card rounded-[24px] p-8 text-center shadow-[0_4px_12px_rgba(100,50,200,0.15)]">
          <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center text-primary">
            <Mail size={32} />
          </div>
          <h3 className="font-heading font-bold text-foreground mb-2">Email</h3>
          <a href="mailto:soundaround.club@yandex.ru" className="font-body text-muted-foreground hover:text-primary transition-colors">
            soundaround.club@yandex.ru
          </a>
        </div>
      </div>
    </div>
  </section>;


/* ─── Feedback Form ─── */
const FeedbackForm = ({ onPrivacyOpen }: {onPrivacyOpen: () => void;}) => {
const [name, setName] = useState("");
  const [discipline, setDiscipline] = useState("");
  const [phone, setPhone] = useState("");
  const [wishes, setWishes] = useState("");
  const [sending, setSending] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);

    try {
      const response = await supabase.functions.invoke("send-to-telegram", {
        body: { name: name.trim(), discipline, phone, wishes: wishes.trim() }
      });

      console.log("Telegram response:", response);

      // Check for real errors (network failures, non-2xx status)
      if (response.error && !response.data) {
        throw response.error;
      }

      toast.success("Мы скоро с вами свяжемся! 🎶", {
        description: "Ваша заявка получена, ожидайте звонка.",
        duration: 5000
      });
      setName("");
      setDiscipline("");
      setPhone("");
      setWishes("");
    } catch (err) {
      console.error("Form submission error:", err);
      toast.error("Не удалось отправить заявку", {
        description: "Попробуйте позже или свяжитесь с нами по телефону."
      });
    } finally {
      setSending(false);
    }
  };

  return (
    <section className="py-16 md:py-24 bg-muted/30">
      <div className="max-w-[84rem] mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-stretch">
          {/* Form */}
          <div className="bg-card rounded-[24px] p-8 shadow-[0_4px_12px_rgba(100,50,200,0.15)]">
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-2">
              Запись на пробное занятие
            </h2>
            <p className="font-body text-muted-foreground mb-6">
              Заполните форму, и мы свяжемся с вами для подтверждения записи.
            </p>
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="block font-body text-sm font-semibold text-foreground mb-1.5">
                  Имя
                </label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  placeholder="Ваше имя"
                  maxLength={50}
                  className="w-full px-4 py-3 rounded-[16px] border border-border bg-background text-foreground font-body focus:outline-none focus:ring-2 focus:ring-primary/50" />
              </div>
              <div>
                <label className="block font-body text-sm font-semibold text-foreground mb-1.5">
                  Выберите дисциплину
                </label>
                <select
                  value={discipline}
                  onChange={(e) => setDiscipline(e.target.value)}
                  required
                  className="w-full px-4 py-3 rounded-[16px] border border-border bg-background text-foreground font-body focus:outline-none focus:ring-2 focus:ring-primary/50">
                  
                  <option value="">Выберите...</option>
                  <option value="guitar">Гитара</option>
                  <option value="vocal">Вокал</option>
                  <option value="piano">Фортепиано</option>
                  <option value="ukulele">Укулеле</option>
                  <option value="songwriting">Написание песен</option>
                  <option value="ensemble">Ансамбль</option>
                </select>
              </div>
              <div>
                <label className="block font-body text-sm font-semibold text-foreground mb-1.5">
                  Телефон
                </label>
                <input
                  type="tel"
                  value={phone}
                  onChange={(e) => {
                    const digits = e.target.value.replace(/\D/g, "");
                    // Keep only up to 11 digits (7 + 10)
                    const d = digits.startsWith("7") ? digits.slice(0, 11) : digits.slice(0, 11);
                    let formatted = "";
                    if (d.length === 0) {formatted = "";} else
                    if (d.length <= 1) {formatted = `+${d}`;} else
                    if (d.length <= 4) {formatted = `+${d[0]} (${d.slice(1)}`;} else
                    if (d.length <= 7) {formatted = `+${d[0]} (${d.slice(1, 4)}) ${d.slice(4)}`;} else
                    if (d.length <= 9) {formatted = `+${d[0]} (${d.slice(1, 4)}) ${d.slice(4, 7)}-${d.slice(7)}`;} else
                    {formatted = `+${d[0]} (${d.slice(1, 4)}) ${d.slice(4, 7)}-${d.slice(7, 9)}-${d.slice(9, 11)}`;}
                    setPhone(formatted);
                  }}
                  required
                  placeholder="+7 (___) ___-__-__"
                  maxLength={18}
                  className="w-full px-4 py-3 rounded-[16px] border border-border bg-background text-foreground font-body focus:outline-none focus:ring-2 focus:ring-primary/50" />
                
              </div>
              <div>
                <label className="block font-body text-sm font-semibold text-foreground mb-1.5">
                  Промокод <span className="font-normal text-muted-foreground">(необязательно)</span>
                </label>
                <input
                  type="text"
                  value={promo}
                  onChange={(e) => {setPromo(e.target.value);setPromoError("");}}
                  placeholder="Введите промокод"
                  maxLength={30}
                  className={`w-full px-4 py-3 rounded-[16px] border bg-background text-foreground font-body focus:outline-none focus:ring-2 focus:ring-primary/50 ${promoError ? "border-destructive" : "border-border"}`} />
                
                {promoError &&
                <p className="text-destructive text-sm mt-1.5 font-body">{promoError}</p>
                }
              </div>
              <button
                type="submit"
                disabled={sending}
                className="w-full px-8 py-4 rounded-[16px] bg-primary text-primary-foreground font-heading font-bold text-lg hover:bg-primary/90 transition-all duration-300 hover:-translate-y-0.5 shadow-lg disabled:opacity-50 disabled:cursor-not-allowed">
                
                {sending ? "Отправляем..." : "Записаться"}
              </button>
              <p className="text-xs text-muted-foreground text-center">
                Нажимая кнопку «Отправить», вы даёте согласие на обработку ваших персональных данных в соответствии с{" "}
                <button type="button" onClick={onPrivacyOpen} className="text-primary underline hover:no-underline">
                  Политикой конфиденциальности
                </button>.
              </p>
            </form>
          </div>
          {/* Image */}
          <div className="relative rounded-[24px] overflow-hidden min-h-[400px] aspect-[3/4]">
            {discipline && disciplineImages[discipline] ?
            <img
              src={disciplineImages[discipline]}
              alt={discipline}
              className="absolute inset-0 w-full h-full object-cover object-top transition-opacity duration-500" /> :
            <img
              src={formDefaultImg}
              alt="Звук Вокруг"
              className="absolute inset-0 w-full h-full object-cover" />
            }
          </div>
        </div>
      </div>
    </section>);

};

/* ─── Location Card ─── */
const LocationsSection = () =>
<section className="py-16 md:py-24">
    <div className="max-w-[84rem] mx-auto px-6">
      <div className="max-w-md mx-auto">
        <article className="relative bg-card rounded-[24px] p-8 shadow-[0_4px_12px_rgba(100,50,200,0.15)] overflow-hidden">
          <div className="absolute top-0 right-0 w-24 h-24 bg-primary/5 rounded-bl-full" />
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
              <MapPin size={28} />
            </div>
            <h3 className="font-heading text-xl font-bold text-foreground">Наш адрес</h3>
          </div>
          <div className="space-y-2 mb-6">
            <p className="font-body font-semibold text-foreground">улица Мнёвники, 7к1</p>
            <p className="font-body text-muted-foreground text-sm">Москва, 123308</p>
            <div className="flex items-center gap-2 text-muted-foreground">
              <span className="text-sm">🚇</span>
              <span className="font-body text-sm">7 мин от метро Народного Ополчения</span>
            </div>
          </div>
          <a
          href="https://yandex.ru/maps/?whatshere[point]=37.472983,55.779459&whatshere[zoom]=17&text=%D0%9C%D0%BE%D1%81%D0%BA%D0%B2%D0%B0%2C%20%D1%83%D0%BB%D0%B8%D1%86%D0%B0%20%D0%9C%D0%BD%D1%91%D0%B2%D0%BD%D0%B8%D0%BA%D0%B8%2C%207%D0%BA1"
          target="_blank"
          rel="noreferrer noopener"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-[16px] bg-primary text-primary-foreground font-heading font-bold hover:bg-primary/90 transition-all duration-300">
            <MapPin size={20} />
            Открыть маршрут
          </a>
        </article>
      </div>
    </div>
  </section>;


/* ─── Social CTA ─── */
const SocialCTA = () => {
  const socials = [
    { name: "Telegram", icon: <Send size={32} />, href: "https://t.me/zv_musicstudio?text=%D0%97%D0%B4%D1%80%D0%B0%D0%B2%D1%81%D1%82%D0%B2%D1%83%D0%B9%D1%82%D0%B5,%20%D0%BF%D0%B8%D1%88%D1%83%20%D0%92%D0%B0%D0%BC%20%D1%81%20%D1%81%D0%B0%D0%B9%D1%82%D0%B0%20Zoon" },
    { name: "Вконтакте", icon: <span className="text-2xl font-heading font-bold">ВК</span>, href: "https://vk.com/studiozv" },
    { name: "WhatsApp", icon: <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="currentColor"><path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 2.06.56 4.07 1.62 5.83L2.5 22l4.37-1.21a9.85 9.85 0 0 0 5.17 1.47c5.46 0 9.91-4.45 9.91-9.91S17.5 2 12.04 2zm0 17.82a7.93 7.93 0 0 1-4.05-1.12l-.29-.18-2.55.71.68-2.48-.18-.29A7.91 7.91 0 0 1 12.04 3.99c4.37 0 7.93 3.56 7.93 7.93 0 2.16-.85 4.2-2.38 5.73a7.96 7.96 0 0 1-5.55 2.17zm4.47-6.04c-.24-.12-1.43-.71-1.65-.79-.22-.08-.38-.12-.54.12-.16.24-.62.79-.77.95-.14.16-.29.18-.54.06-.24-.12-1.03-.38-1.97-1.22-.72-.64-1.21-1.43-1.35-1.67-.14-.24-.01-.37.1-.5.11-.11.24-.29.36-.43.12-.14.16-.24.24-.4.08-.16.04-.29-.02-.4-.06-.11-.54-1.31-.74-1.79-.2-.46-.39-.4-.54-.4-.14 0-.29-.02-.44-.02-.16 0-.4.06-.61.29-.21.22-.8.78-.8 1.91s.82 2.22.93 2.37c.11.16 1.62 2.48 3.92 3.48.55.24.97.38 1.3.48.55.18 1.05.15 1.45.1.44-.06 1.43-.58 1.63-1.15.2-.56.2-1.04.14-1.15-.06-.1-.22-.16-.46-.28z"/></svg>, href: "https://wa.me/79162353381" },
  ];


  const badges = [
  { value: "1200+", label: "Подписчиков" },
  { value: "100+", label: "Публикаций" },
  { value: "20+", label: "Событий в год" }];


  return (
    <section className="py-16 md:py-24 bg-muted/30">
      <div className="max-w-[84rem] mx-auto px-6">
        <div className="relative bg-gradient-to-br from-primary to-primary/80 rounded-[24px] p-8 md:p-12 text-center overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent" />
          <div className="relative z-10">
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-primary-foreground mb-3">
              Присоединяйтесь к нашему сообществу
            </h2>
            <p className="font-body text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
              Следите за новостями, анонсами событий и творческими достижениями наших учеников в социальных сетях
            </p>
            <div className="flex flex-wrap justify-center gap-4 mb-10">
              {socials.map((s) =>
              <a
                key={s.name}
                href={s.href}
                target="_blank"
                rel="noreferrer noopener"
                className="flex items-center gap-3 px-6 py-3 rounded-[16px] bg-primary-foreground/10 border border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/20 transition-all duration-300 hover:-translate-y-0.5">
                
                  {s.icon}
                  <span className="font-heading font-semibold">{s.name}</span>
                </a>
              )}
            </div>
            <div className="flex flex-wrap justify-center gap-6">
              {badges.map((b) =>
              <div key={b.label} className="bg-primary-foreground/10 rounded-[16px] px-6 py-4 min-w-[140px]">
                  <p className="font-heading text-2xl font-bold text-primary-foreground">{b.value}</p>
                  <p className="font-body text-sm text-primary-foreground/70">{b.label}</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>);

};

export { ContactHero, QuickContact, FeedbackForm, LocationsSection, SocialCTA };