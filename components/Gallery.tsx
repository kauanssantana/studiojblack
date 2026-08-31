"use client";

import { useRef } from "react";
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
  const trackRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    const node = trackRef.current;
    if (!node) return;
    const amount = node.clientWidth * 0.8;
    node.scrollBy({
      left: direction === "left" ? -amount : amount,
      behavior: "smooth",
    });
  };

  return (
    <section id="galeria" className="section overflow-hidden">
      <div className="container-page">
        <Reveal>
          <div className="flex items-end justify-between flex-wrap gap-6 mb-16">
            <div>
              <span className="kicker mb-6">Galeria</span>
              <h2 className="display text-4xl md:text-5xl mt-6">
                Trabalho que fala por si
              </h2>
            </div>
            <div className="flex gap-3">
              <button
                onClick={() => scroll("left")}
                aria-label="Ver fotos anteriores"
                className="w-12 h-12 border border-line hover:border-accent hover:bg-accent transition-colors flex items-center justify-center"
              >
                ←
              </button>
              <button
                onClick={() => scroll("right")}
                aria-label="Ver próximas fotos"
                className="w-12 h-12 border border-line hover:border-accent hover:bg-accent transition-colors flex items-center justify-center"
              >
                →
              </button>
            </div>
          </div>
        </Reveal>

        <div
          ref={trackRef}
          className="flex gap-4 overflow-x-auto snap-x snap-mandatory scroll-smooth pb-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {photos.map((photo) => (
            <div
              key={photo.src}
              className="snap-start shrink-0 w-[72vw] sm:w-[38vw] md:w-[26vw] overflow-hidden"
            >
              <img
                src={photo.src}
                alt={photo.alt}
                className="media-img w-full h-[360px] object-cover"
              />
            </div>
          ))}
        </div>

        <Reveal delay={0.2} className="mt-10">
          <a
            href={business.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm uppercase tracking-[0.15em] text-gold hover:brightness-110 transition"
          >
            Mais cortes no Instagram →
          </a>
        </Reveal>
      </div>
    </section>
  );
}
