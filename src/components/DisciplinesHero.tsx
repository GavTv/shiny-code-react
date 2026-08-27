import heroStage from "@/assets/hero-stage.png";

const DisciplinesHero = () => {
  return (
    <section className="relative h-[50vh] min-h-[320px] flex items-center justify-center overflow-hidden">
      {/* Music-themed stage background */}
      <img
        src={heroStage}
        alt=""
        className="absolute inset-0 w-full h-full object-cover"
        aria-hidden="true"
      />
      <div className="absolute inset-0 bg-black/60" />
      <div className="absolute inset-0 bg-gradient-to-t from-background/40 via-transparent to-background/20" />

      {/* Minimalist floating note decorations */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
        <svg className="absolute top-[15%] left-[10%] w-8 h-8 text-white/10" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 3v10.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V7h4V3h-6z" />
        </svg>
        <svg className="absolute top-[25%] right-[12%] w-10 h-10 text-white/10" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 3v10.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V7h4V3h-6z" />
        </svg>
        <svg className="absolute bottom-[20%] left-[18%] w-6 h-6 text-white/10" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 3v10.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V7h4V3h-6z" />
        </svg>
        <svg className="absolute bottom-[28%] right-[20%] w-7 h-7 text-white/10" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 3v10.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V7h4V3h-6z" />
        </svg>
      </div>

      <div className="relative z-10 text-center px-6">
        <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight drop-shadow-lg">
          Наши<br />дисциплины
        </h1>
      </div>
    </section>
  );
};

export default DisciplinesHero;
