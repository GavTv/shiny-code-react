import studio1 from "@/assets/gallery/studio1.png";
import studio2 from "@/assets/gallery/studio2.png";
import studio3 from "@/assets/gallery/studio3.png";

const GallerySection = () => {
  return (
    <section className="w-full bg-background">
      <div className="grid grid-cols-1 md:grid-cols-2 min-h-[40rem]">
        {/* Large image */}
        <div className="relative md:row-span-2 min-h-[20rem] overflow-hidden group">
          <img src={studio3} alt="Атмосфера творчества" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
          <div className="absolute bottom-0 left-0 right-0 px-8 py-6 z-[2] bg-black/70">
            <h3 className="text-2xl font-heading font-bold text-background leading-snug">
              Атмосфера творчества
            </h3>
          </div>
        </div>

        {/* Medium images */}
        <div className="relative min-h-[20rem] overflow-hidden group">
          <img src={studio1} alt="Студия записи" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
        </div>
        <div className="relative min-h-[20rem] overflow-hidden group">
          <img src={studio2} alt="Урок музыки" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
