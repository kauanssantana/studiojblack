import Image from "next/image";
import Reveal from "./Reveal";
import { services, products, whatsappLink } from "@/lib/data";

export default function Services() {
  return (
    <section
      id="servicos"
      className="section bg-surface border-y border-line overflow-hidden !py-0"
    >
      {/* 1. Responsividade: Trocamos lg: para xl: para que telas de iPad empilhem os itens em 1 coluna */}
      <div className="grid grid-cols-1 xl:grid-cols-[minmax(0,350px)_minmax(0,620px)_minmax(0,350px)] justify-center items-center gap-10 xl:gap-12 py-16">
        {/* 2. Ordem no Mobile: order-2 faz a imagem ficar abaixo do título no celular */}
        <Reveal className="relative w-full max-w-[350px] aspect-square mx-auto order-2 xl:order-1">
          <Image
            src="/imagens/produtos/pomada-fox.jpg" // <-- CORRIGIDO PARA .jpg
            alt={products[0].name}
            fill
            priority // <-- CORRIGE O AVISO VERMELHO DE LCP NO CONSOLE
            sizes="(max-width: 1280px) 100vw, 350px" // <-- CORRIGE O AVISO AMARELO DE SIZES
            className="media-img object-cover rounded-xl"
          />
        </Reveal>

        {/* 3. Ordem no Mobile: order-1 faz o texto vir primeiro nas telas menores */}
        <Reveal
          delay={0.1}
          className="px-6 sm:px-14 xl:px-4 flex flex-col justify-center order-1 xl:order-2"
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

          <Reveal delay={0.3} className="mt-12 text-center xl:text-left">
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

        <Reveal
          delay={0.2}
          className="relative w-full max-w-[350px] aspect-square mx-auto order-3"
        >
          <Image
            src="/imagens/corte-cabelo.jpg"
            alt="Corte infantil com freestyle"
            fill
            sizes="(max-width: 1280px) 100vw, 350px" // <-- CORRIGE O AVISO AMARELO DE SIZES
            className="media-img object-cover rounded-xl"
          />
        </Reveal>
      </div>
    </section>
  );
}
