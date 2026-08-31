import Reveal from "./Reveal";
import { services, whatsappLink } from "@/lib/data";

export default function Services() {
  return (
    <section id="servicos" className="section bg-surface border-y border-line">
      <div className="container-page">
        <Reveal>
          <span className="kicker mb-6">Serviços</span>
          <h2 className="display text-4xl md:text-5xl mt-6 mb-16 max-w-lg">
            Preço justo, sem letra miúda
          </h2>
        </Reveal>

        <div className="max-w-2xl">
          {services.map((service, i) => (
            <Reveal key={service.name} delay={i * 0.1}>
              <div className="flex items-baseline justify-between py-6 border-b border-line">
                <span className="display text-xl md:text-2xl">
                  {service.name}
                </span>
                <span className="flex-1 border-b border-dotted border-line mx-4 translate-y-[-6px]" />
                <span className="display text-xl md:text-2xl text-gold">
                  R$ {service.price}
                </span>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.3} className="mt-14">
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
      </div>
    </section>
  );
}
