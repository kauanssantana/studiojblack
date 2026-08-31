"use client";

import { useEffect, useState } from "react";
import { whatsappLink } from "@/lib/data";

const links = [
  { href: "#quem-somos", label: "Quem somos" },
  { href: "#servicos", label: "Serviços" },
  { href: "#galeria", label: "Galeria" },
  { href: "#avaliacoes", label: "Avaliações" },
  { href: "#local", label: "Onde estamos" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <div className="brand-bar fixed top-0 left-0 right-0 z-50" />
      <header
        className={`fixed top-1 left-0 right-0 z-40 transition-all duration-500 ${
          scrolled
            ? "bg-bg/90 backdrop-blur-md border-b border-line"
            : "bg-gradient-to-b from-black/60 to-transparent"
        }`}
      >
        <div className="container-page flex items-center justify-between h-20">
          <a href="#top" className="display text-lg tracking-wide">
            Studio J&apos;Black
          </a>
          <nav className="hidden md:flex items-center gap-10 text-sm uppercase tracking-[0.15em]">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="hover:text-gold transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="btn text-xs !py-3 !px-6"
          >
            Agendar
            <span className="btn-arrow">→</span>
          </a>
        </div>
      </header>
    </>
  );
}
