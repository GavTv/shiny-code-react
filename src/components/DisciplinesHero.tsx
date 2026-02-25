const DisciplinesHero = () => {
  return (
    <section className="relative h-[50vh] min-h-[320px] flex items-center justify-center overflow-hidden">
      {/* Background placeholder */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/30 via-accent/15 to-primary/40" />
      <div className="absolute inset-0 bg-black/30" />
      <div className="relative z-10 text-center px-6">
        <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
          Наши<br />дисциплины
        </h1>
      </div>
    </section>
  );
};

export default DisciplinesHero;
