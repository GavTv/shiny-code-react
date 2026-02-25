import { Mic } from "lucide-react";

const AboutGallery = () => {
  return (
    <section className="py-16 md:py-24 bg-muted/30">
      <div className="max-w-[84rem] mx-auto px-6">
        {/* CTA block */}
        <div className="bg-gradient-to-r from-primary to-primary/80 rounded-[24px] p-8 md:p-10 mb-10 flex flex-col md:flex-row items-center gap-6">
          <div className="w-16 h-16 rounded-full bg-primary-foreground/20 flex items-center justify-center flex-shrink-0">
            <Mic size={32} className="text-primary-foreground" />
          </div>
          <div className="text-center md:text-left">
            <h3 className="font-heading text-xl md:text-2xl font-bold text-primary-foreground mb-1">
              Новые возможности, чтобы понять что тебе нравится
            </h3>
            <p className="font-body text-primary-foreground/80">
              Познакомьтесь с преподавателями и студией
            </p>
          </div>
        </div>

        {/* Photo mosaic */}
        <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr_1fr] gap-5">
          <div className="relative rounded-[16px] overflow-hidden h-[260px] md:h-[420px]">
            <div className="w-full h-full bg-gradient-to-br from-primary/20 via-accent/10 to-primary/30" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent flex items-end p-6">
              <h3 className="font-heading text-2xl font-bold text-white">
                Музыка есть счастье
              </h3>
            </div>
          </div>
          <div className="rounded-[16px] overflow-hidden h-[200px] md:h-[420px]">
            <div className="w-full h-full bg-gradient-to-br from-accent/15 via-primary/10 to-accent/25" />
          </div>
          <div className="rounded-[16px] overflow-hidden h-[200px] md:h-[420px]">
            <div className="w-full h-full bg-gradient-to-br from-primary/25 via-accent/15 to-primary/10" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutGallery;
