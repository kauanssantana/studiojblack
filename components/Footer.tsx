import Image from "next/image";
import { business, hours, payments, whatsappLink } from "@/lib/data";

const navLinks = [
  { href: "#top", label: "Início" },
  { href: "#quem-somos", label: "Quem somos" },
  { href: "#servicos", label: "Serviços" },
  { href: "#galeria", label: "Galeria" },
  { href: "#avaliacoes", label: "Avaliações" },
  { href: "#local", label: "Onde estamos" },
];

const socials = [
  {
    label: "Instagram",
    href: business.instagram,
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073z" />
        <path d="M12 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zm0 10.162a4 4 0 1 1 0-8 4 4 0 0 1 0 8z" />
        <circle cx="18.406" cy="5.594" r="1.44" />
      </svg>
    ),
  },
  {
    label: "E-mail",
    href: `mailto:${business.email}`,
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M20 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2zm0 2v.01L12 12 4 6.01V6h16zM4 18V8.238l7.445 5.583a1 1 0 0 0 1.11 0L20 8.238V18H4z" />
      </svg>
    ),
  },
  {
    label: "WhatsApp",
    href: whatsappLink,
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
        <path d="M12.004 2.003c-5.514 0-9.997 4.483-9.997 9.997 0 1.762.464 3.484 1.346 4.997L2 22l5.144-1.34a9.96 9.96 0 0 0 4.86 1.238h.004c5.514 0 9.997-4.483 9.997-9.997 0-2.67-1.04-5.18-2.928-7.07a9.935 9.935 0 0 0-7.073-2.928zm0 18.19a8.19 8.19 0 0 1-4.174-1.14l-.3-.178-3.055.796.816-2.978-.195-.306a8.176 8.176 0 0 1-1.253-4.387c0-4.518 3.677-8.194 8.196-8.194 2.19 0 4.248.852 5.796 2.401a8.14 8.14 0 0 1 2.399 5.798c0 4.518-3.677 8.188-8.23 8.188z" />
      </svg>
    ),
  },
];

export default function Footer() {
  return (
    <footer className="border-t border-line bg-bg">
      <div className="container-page py-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-14">
          <div>
            <Image
              src="/imagens/logo.png"
              alt="Studio J'Black Barbearia"
              width={110}
              height={110}
              className="object-contain mb-6"
            />
            <p className="text-muted max-w-xs mb-6">
              O Studio J&apos;Black une a tradição de barbearia de bairro com o
              cuidado que cada corte merece, há {business.yearsInMarket} anos na
              Zona Sul de São Paulo.
            </p>
            <div className="flex gap-3">
              {socials.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="w-10 h-10 flex items-center justify-center rounded-full border border-line hover:border-accent hover:bg-accent transition-colors"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="display text-lg mb-3">Navegação</h3>
            <div className="w-10 h-[2px] bg-accent mb-6" />
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-muted hover:text-gold transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="display text-lg mb-3">Atendimento</h3>
            <div className="w-10 h-[2px] bg-accent mb-6" />
            <ul className="space-y-3 text-muted mb-8">
              <li>
                {business.phone.replace(/(\d{2})(\d{5})(\d{4})/, "($1) $2-$3")}
              </li>
              <li>{business.email}</li>
              <li>
                {hours[0].days}: {hours[0].time}
              </li>
              <li>{business.address}</li>
            </ul>

            <h4 className="text-xs uppercase tracking-[0.15em] text-muted mb-3">
              Pagamento
            </h4>
            <div className="flex flex-wrap gap-2">
              {payments.map((method) => (
                <span
                  key={method}
                  className="text-xs uppercase tracking-wide border border-line px-3 py-1.5"
                >
                  {method}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-line text-sm text-muted">
          © {new Date().getFullYear()} {business.name}. Todos os direitos
          reservados.
        </div>
      </div>
    </footer>
  );
}
