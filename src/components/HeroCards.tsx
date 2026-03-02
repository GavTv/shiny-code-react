import { Link } from "react-router-dom";
import vocalImg from "@/assets/cards/vocal.webp";
import instrumentsImg from "@/assets/cards/instruments.jpg";
import stageImg from "@/assets/cards/stage.webp";

const cards = [
  { title: "Вокал", image: vocalImg, link: "/disciplines" },
  { title: "Инструменты", image: instrumentsImg, link: "/disciplines" },
  { title: "Сцена", image: stageImg, link: "/about" },
];

const HeroCards = () => {
  return (
    <section className="py-16 md:py-24">
      <div className="max-w-[84rem] mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {cards.map((card) => (
            <Link
              key={card.title}
              to={card.link}
              className="group relative aspect-[4/3] rounded-2xl overflow-hidden shadow-lg"
            >
              <img
                src={card.image}
                alt={card.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
              <h3 className="absolute bottom-6 left-6 font-heading text-2xl md:text-3xl font-bold text-white">
                {card.title}
              </h3>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroCards;
