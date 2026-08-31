import Reveal from "./Reveal";
import { business, hours, whatsappLink } from "@/lib/data";

export default function LocationMap() {
  return (
    <section id="local" className="section bg-surface border-y border-line">
      <div className="container-page">
        <div className="panel">
          <Reveal className="panel-media overflow-hidden h-[480px]">
            <iframe
              title="Localização do Studio J'Black Barbearia"
              src={`https://www.google.com/maps?q=${encodeURIComponent(business.address)}&output=embed`}
              className="w-full h-full border-0 grayscale contrast-125"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </Reveal>

          <Reveal delay={0.15} className="panel-text">
            <span className="kicker mb-6">Onde estamos</span>
            <h2 className="display text-4xl md:text-5xl mt-6 mb-8">
              Zona Sul de São Paulo
            </h2>

            <p className="text-muted mb-8">{business.address}</p>

            <div className="mb-8">
              {hours.map((item) => (
                <div
                  key={item.days}
                  className="flex justify-between py-3 border-b border-line text-sm"
                >
                  <span className="uppercase tracking-[0.1em] text-muted">
                    {item.days}
                  </span>
                  <span>{item.time}</span>
                </div>
              ))}
            </div>

            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="btn"
            >
              Agendar no WhatsApp
              <span className="btn-arrow">→</span>
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
