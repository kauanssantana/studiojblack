import Reveal from "./Reveal";
import { business } from "@/lib/data";

const photos = [
  {
    src: "/imagens/galeria/corte-1.jpg",
    alt: "Corte infantil com freestyle W",
  },
  { src: "/imagens/galeria/corte-2.jpg", alt: "Tranças box braids com fade" },
  { src: "/imagens/galeria/corte-3.jpg", alt: "Corte natural com taper fade" },
  {
    src: "/imagens/galeria/corte-4.jpg",
    alt: "Penteado para trás com barba cheiao",
  },
  {
    src: "/imagens/galeria/corte-5.jpg",
    alt: "Corte infantil com fade e freestyle",
  },
  { src: "/imagens/galeria/corte-6.jpg", alt: "Slick back com taper fade" },
  {
    src: "/imagens/galeria/corte-7.jpg",
    alt: "Corte infantil com fade e freestyle",
  },
  { src: "/imagens/galeria/corte-8.jpg", alt: "Corte curto com mid fade" },
];

export default function Gallery() {
  const doubled = [...photos, ...photos];

  return (
    <section id="galeria" className="section overflow-hidden">
      <div className="container-page">
        <Reveal>
          <span className="kicker mb-6">Galeria</span>
          <h2 className="display text-4xl md:text-5xl mt-6 mb-16 max-w-lg">
            Trabalho que fala por si
          </h2>
        </Reveal>
      </div>

      <div className="gallery-track-wrap">
        <div className="gallery-track">
          {doubled.map((photo, i) => (
            <div key={i} className="gallery-item">
              <img
                src={photo.src}
                alt={photo.alt}
                className="media-img w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>

      <div className="container-page mt-10">
        <a
          href={business.instagram}
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm uppercase tracking-[0.15em] text-gold hover:brightness-110 transition"
        >
          Mais cortes no Instagram →
        </a>
      </div>
    </section>
  );
}
