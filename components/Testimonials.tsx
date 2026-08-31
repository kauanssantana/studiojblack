import { business, testimonials } from "@/lib/data";

const mapsReviewsUrl =
  "https://www.google.com/maps/place/?q=place_id:ChIJ4WgJZ2lPzpQRsQAThRA0lGo";

export default function Testimonials() {
  const doubled = [...testimonials, ...testimonials];

  return (
    <section id="avaliacoes" className="section overflow-hidden">
      <div className="container-page">
        <div className="flex items-end justify-between flex-wrap gap-6 mb-16">
          <div>
            <span className="kicker mb-6">Avaliações</span>
            <h2 className="display text-4xl md:text-5xl mt-6">
              O que dizem de nós
            </h2>
          </div>
          <div className="text-right">
            <span className="display text-5xl text-gold">
              {business.rating}
            </span>
            <p className="text-muted text-sm mt-1">
              ★★★★★ · {business.reviewCount} avaliações no Google
            </p>
          </div>
        </div>
      </div>

      <div className="testimonial-track-wrap">
        <div className="testimonial-track">
          {doubled.map((item, i) => (
            <div key={i} className="testimonial-card">
              <p className="leading-relaxed mb-4">&ldquo;{item.text}&rdquo;</p>
              <span className="text-muted text-sm uppercase tracking-[0.1em]">
                {item.source}
              </span>
            </div>
          ))}
        </div>
      </div>

      <div className="container-page mt-10">
        <a
          href={mapsReviewsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm uppercase tracking-[0.15em] text-gold hover:brightness-110 transition"
        >
          Ver todas as avaliações no Google →
        </a>
      </div>
    </section>
  );
}
