import { Helmet } from "react-helmet-async";

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "MusicSchool",
  name: "Звук Вокруг",
  alternateName: "Звук Вокруг школа вокала",
  url: "https://zvschool.ru",
  telephone: "+7-916-235-33-81",
  email: "soundaround.club@yandex.ru",
  address: {
    "@type": "PostalAddress",
    streetAddress: "улица Мнёвники, дом 7, корпус 1",
    addressLocality: "Москва",
    addressCountry: "RU",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 55.7728,
    longitude: 37.4569,
  },
  description:
    "Музыкальная студия «Звук Вокруг» в Москве — уроки вокала, гитары, фортепиано, укулеле, ансамбля и сонграйтинга для детей и взрослых.",
  priceRange: "₽₽",
  openingHours: "Mo-Su 10:00-22:00",
  sameAs: [
    "https://t.me/zv_musicstudio",
    "https://vk.com/studiozv",
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Музыкальные дисциплины",
    itemListElement: [
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Вокал" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Гитара" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Фортепиано" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Укулеле" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Ансамбль" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Сонграйтинг" } },
    ],
  },
};

const JsonLd = () => (
  <Helmet>
    <script type="application/ld+json">
      {JSON.stringify(localBusinessSchema)}
    </script>
  </Helmet>
);

export default JsonLd;
