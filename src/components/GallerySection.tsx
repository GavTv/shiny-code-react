const GallerySection = () => {
  return (
    <section className="w-full bg-background">
      <div className="grid grid-cols-1 md:grid-cols-2 min-h-[40rem]">
        {/* Large image */}
        <div className="relative md:row-span-2 min-h-[20rem] overflow-hidden group">
          <div className="w-full h-full bg-gradient-to-br from-primary/25 to-accent/15 transition-transform duration-500 group-hover:scale-110" />
          <div className="absolute bottom-0 left-0 right-0 px-8 py-6 z-[2] bg-black/70">
            <h3 className="text-2xl font-heading font-bold text-background leading-snug">
              Атмосфера творчества
            </h3>
          </div>
        </div>

        {/* Medium images */}
        <div className="relative min-h-[20rem] overflow-hidden group">
          <div className="w-full h-full bg-gradient-to-br from-secondary/20 to-primary/10 transition-transform duration-500 group-hover:scale-110" />
        </div>
        <div className="relative min-h-[20rem] overflow-hidden group">
          <div className="w-full h-full bg-gradient-to-br from-accent/15 to-secondary/10 transition-transform duration-500 group-hover:scale-110" />
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
