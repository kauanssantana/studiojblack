import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import WhatsAppButton from "@/components/WhatsAppButton";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Marquee />
        {/* Quem somos, Serviços, Galeria, Avaliações e Mapa entram na próxima etapa */}
      </main>
      <WhatsAppButton />
    </>
  );
}
