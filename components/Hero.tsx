import { business, whatsappLink } from "@/lib/data";

export default function Hero() {
  return (
    <section
      id="top"
      className="relative min-h-screen flex items-end overflow-hidden"
    >
      <div className="absolute inset-0">
        <img
          src="/imagens/fachada.png"
          alt="Fachada do Studio J'Black Barbearia"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-bg via-bg/70 to-bg/20" />
      </div>

      <div className="container-page relative z-10 pb-24 pt-40">
        <span className="kicker mb-6">Zona Sul · São Paulo</span>
        <h1 className="display text-[10vw] md:text-[4.5vw] leading-[0.95] max-w-4xl mt-6">
          Corte com tradição.
          <br />
          Atitude de quem já viu tudo.
        </h1>
        <p className="mt-8 max-w-md text-muted">
          {business.yearsInMarket} anos cuidando do estilo da Zona Sul. Corte,
          barba e sobrancelha com o barbeiro {business.barber}, no Jardim
          Guanhembu.
        </p>

        <div className="mt-10 flex flex-wrap items-center gap-8">
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="btn"
          >
            Agendar no WhatsApp
            <span className="btn-arrow">→</span>
          </a>
          <div className="flex items-center gap-3 text-sm">
            <span className="text-gold display text-2xl">
              {business.rating}
            </span>
            <span className="text-muted">
              ★★★★★ · {business.reviewCount} avaliações no Google
            </span>
          </div>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10">
        <div className="scroll-hint" />
      </div>
    </section>
  );
}
