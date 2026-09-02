import Image from "next/image";
import Reveal from "./Reveal";
import { business } from "@/lib/data";

export default function About() {
  return (
    <section id="quem-somos" className="section">
      <div className="container-page">
        <div className="panel">
          <Reveal className="panel-media relative overflow-hidden h-[520px]">
            <Image
              src="/imagens/josue.jpg"
              alt={`O barbeiro ${business.barber} atendendo no Studio J'Black`}
              fill
              className="media-img object-cover"
            />
          </Reveal>
          <Reveal delay={0.15} className="panel-text">
            <span className="kicker mb-6">Quem somos</span>
            <h2 className="display text-4xl md:text-5xl mt-6 mb-6">
              {business.yearsInMarket} anos de navalha na mão
            </h2>
            <p className="text-muted mb-4">
              O Studio J&apos;Black nasceu no Jardim Guanhembu e virou
              referência de bairro na Zona Sul de São Paulo. À frente da tesoura
              está {business.barber}, formado e que também ministra curso
              prático de barbearia, com quase duas décadas cortando o cabelo da
              vizinhança.
            </p>
            <p className="text-muted">
              Aqui o corte é feito com calma, no tempo certo, sem pressa pra
              sair rápido — mas sempre mantendo o grau da excelência.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
