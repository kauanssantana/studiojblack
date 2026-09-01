import Image from "next/image";
import Reveal from "./Reveal";
import { services, whatsappLink } from "@/lib/data";

export default function Services() {
  return (
    <section id="servicos" className="section bg-surface border-y border-line">
      <div className="container-page">
        <div className="panel flip">
          <Reveal className="panel-text">
            <span className="kicker mb-6">Serviços</span>
            <h2 className="display text-4xl md:text-5xl mt-6 mb-14">
              Preço justo, sem letra miúda
            </h2>

            <div className="max-w-md">
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

          <Reveal
            delay={0.15}
            className="panel-media relative overflow-hidden h-[520px]"
          >
            <Image
              src="/imagens/corte-cabelo.jpg"
              alt="Interior do Studio J'Black Barbearia"
              fill
              className="media-img object-cover"
            />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
