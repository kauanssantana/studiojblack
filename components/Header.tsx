// components/Header.tsx
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
  const [progress, setProgress] = useState(0);
  const [isOpen, setIsOpen] = useState(false); // Estado do menu mobile

  // Bloqueia o scroll da página quando o menu mobile está aberto
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isOpen]);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40);

      const scrollTop = window.scrollY;
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const pct = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
      setProgress(pct);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <div className="fixed top-0 left-0 right-0 z-50 h-1 bg-[#0B0A09]">
        <div
          className="h-full bg-accent transition-[width] duration-150 ease-linear"
          style={{ width: `${progress}%` }}
        />
      </div>

      <header
        className={`fixed top-1 left-0 right-0 z-40 transition-all duration-500 ${
          scrolled || isOpen
            ? "bg-bg/95 backdrop-blur-md border-b border-line"
            : "bg-gradient-to-b from-black/60 to-transparent"
        }`}
      >
        <div className="container-page flex items-center justify-between h-20">
          {/* Logo */}
          <a
            href="#top"
            className="display text-lg tracking-wide relative z-50"
            onClick={() => setIsOpen(false)}
          >
            Studio J&apos;Black
          </a>

          {/* Navegação Desktop */}
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

          {/* Área de Ações (Botão Agendar + Menu Hambúrguer) */}
          <div className="flex items-center gap-4 relative z-50">
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="btn text-xs !py-3 !px-4 sm:!px-6"
            >
              <span className="hidden sm:inline">Agendar</span>
              <span className="sm:hidden">Agendar</span>
              <span className="btn-arrow">→</span>
            </a>

            {/* Botão Menu Hambúrguer (Apenas Mobile) */}
            <button
              className="md:hidden p-2 text-text hover:text-gold transition-colors focus:outline-none"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Alternar Menu"
            >
              {isOpen ? (
                // Ícone de Fechar (X)
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                // Ícone de Hambúrguer
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Overlay do Menu Mobile */}
      <div
        className={`fixed inset-0 z-30 bg-bg/98 backdrop-blur-lg flex flex-col items-center justify-center transition-all duration-300 ease-in-out md:hidden ${
          isOpen
            ? "opacity-100 visible"
            : "opacity-0 invisible pointer-events-none"
        }`}
      >
        <nav className="flex flex-col items-center gap-8 text-xl uppercase tracking-[0.15em]">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setIsOpen(false)} // Fecha ao clicar
              className="hover:text-gold transition-colors transform hover:scale-105"
            >
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </>
  );
}
