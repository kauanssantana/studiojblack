import Image from "next/image";
import Reveal from "./Reveal";
import { services, products, whatsappLink } from "@/lib/data";

export default function Services() {
  return (
    <section
      id="servicos"
      className="section bg-surface border-y border-line overflow-hidden !py-0"
    >
      {/* Adicionado gap e padding para espaçamento */}
      <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,350px)_minmax(0,620px)_minmax(0,350px)] justify-center items-center gap-8 lg:gap-12 py-16">
        {/* Imagem 1 - Ajustada para proporção 1:1 (Quadrada) */}
        <Reveal className="relative w-full max-w-[350px] aspect-square mx-auto">
          <Image
            src="/imagens/produtos/pomada-fox.png"
            alt={products[0].name}
            fill
            className="media-img object-cover rounded-xl"
          />
        </Reveal>

        <Reveal
          delay={0.1}
          className="px-8 sm:px-14 lg:px-4 flex flex-col justify-center"
        >
          <span className="kicker mb-6">Serviços e Produtos</span>
          <h2 className="display text-4xl md:text-5xl mt-6 mb-14">
            Preço justo que cabe no seu bolso
          </h2>

          <div>
            {services.map((service, i) => (
              <Reveal key={service.name} delay={i * 0.1}>
                <div className="flex items-center justify-between py-5 border-b border-line">
                  <span className="display text-lg md:text-xl">
                    {service.name}
                  </span>
                  <span className="display text-lg md:text-xl text-gold">
                    R$ {service.price}
                  </span>
                </div>
              </Reveal>
            ))}
            {products.map((product, i) => (
              <Reveal key={product.name} delay={(services.length + i) * 0.1}>
                <div className="flex items-center justify-between py-5 border-b border-line">
                  <span className="display text-lg md:text-xl">
                    {product.name}
                  </span>
                  <span className="display text-lg md:text-xl text-gold">
                    R$ {product.price}
                  </span>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.3} className="mt-12">
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="btn"
            >
              Agendar meu horário
              <span className="btn-arrow">→</span>
            </a>
          </Reveal>
        </Reveal>

        {/* Imagem 2 - Ajustada para proporção 1:1 (Quadrada) */}
        <Reveal
          delay={0.2}
          className="relative w-full max-w-[350px] aspect-square mx-auto"
        >
          <Image
            src="/imagens/corte-cabelo.jpg"
            alt="Corte infantil com freestyle"
            fill
            className="media-img object-cover rounded-xl"
          />
        </Reveal>
      </div>
    </section>
  );
}
