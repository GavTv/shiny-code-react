import { useState } from "react";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import PrivacyModal from "@/components/PrivacyModal";
import SEO from "@/components/SEO";
import { ArrowRight, Calendar, Clock } from "lucide-react";

const posts = [
  {
    slug: "vokal-koach-moskva",
    title: "Как выбрать вокального коуча в Москве — 7 критериев",
    excerpt:
      "Москва 2026: уроки вокала популярны как никогда. Но как выбрать коуча среди 500+ предложений? Рассказываем проверенные критерии.",
    date: "4 марта 2026",
    readTime: "5 мин",
    tags: ["Вокал", "Москва"],
  },
  {
    slug: "gitara-nachinayushim-oshibki",
    title: "Топ-5 ошибок начинающих гитаристов и как их исправить",
    excerpt:
      "Разбираем типичные ошибки новичков — от неправильной постановки рук до проблем с ритмом. Советы от преподавателей Звук Вокруг.",
    date: "3 марта 2026",
    readTime: "7 мин",
    tags: ["Гитара", "Для начинающих"],
  },
];

const Blog = () => {
  const [privacyOpen, setPrivacyOpen] = useState(false);

  return (
    <div className="w-full min-h-screen">
      <SEO
        title="Блог Звук Вокруг — статьи о музыке, вокале и гитаре"
        description="Полезные статьи от школы музыки Звук Вокруг Мневники: как выбрать коуча вокала, ошибки начинающих гитаристов, советы преподавателей."
        path="/blog"
      />
      <Navigation />

      {/* Hero */}
      <section className="pt-28 pb-16 md:pt-36 md:pb-20 bg-gradient-to-br from-primary/8 via-background to-accent/5">
        <div className="max-w-[84rem] mx-auto px-5 text-center">
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-body font-semibold mb-4">
            Блог
          </span>
          <h1 className="font-heading text-3xl md:text-5xl font-bold text-foreground mb-4">
            Блог Звук Вокруг
          </h1>
          <p className="text-muted-foreground text-base md:text-lg max-w-2xl mx-auto">
            Полезные статьи, советы преподавателей и закулисье нашей музыкальной школы
          </p>
        </div>
      </section>

      {/* Posts grid */}
      <section className="py-16 md:py-24">
        <div className="max-w-[84rem] mx-auto px-5">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {posts.map((post) => (
              <Link
                key={post.slug}
                to={`/blog/${post.slug}`}
                className="group flex flex-col bg-card rounded-3xl overflow-hidden shadow-[0_4px_12px_rgba(100,50,200,0.12)] hover:shadow-[0_12px_32px_rgba(100,50,200,0.2)] transition-all duration-300 hover:-translate-y-1 no-underline"
              >
                {/* Gradient banner */}
                <div className="h-48 bg-gradient-to-br from-primary via-primary/80 to-accent flex items-end p-8">
                  <div className="flex gap-2">
                    {post.tags.map((t) => (
                      <span
                        key={t}
                        className="px-3 py-1 rounded-full bg-primary-foreground/20 text-primary-foreground text-xs font-semibold backdrop-blur-sm"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="flex flex-col gap-3 p-8 flex-1">
                  <div className="flex items-center gap-4 text-muted-foreground text-sm">
                    <span className="flex items-center gap-1.5">
                      <Calendar size={14} /> {post.date}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Clock size={14} /> {post.readTime}
                    </span>
                  </div>
                  <h2 className="font-heading text-xl md:text-2xl font-bold text-foreground group-hover:text-primary transition-colors">
                    {post.title}
                  </h2>
                  <p className="text-muted-foreground text-base leading-relaxed">
                    {post.excerpt}
                  </p>
                  <span className="mt-auto pt-4 inline-flex items-center gap-2 text-primary font-semibold text-sm group-hover:gap-3 transition-all">
                    Читать далее <ArrowRight size={16} />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Footer onPrivacyOpen={() => setPrivacyOpen(true)} />
      <PrivacyModal open={privacyOpen} onClose={() => setPrivacyOpen(false)} />
    </div>
  );
};

export default Blog;
