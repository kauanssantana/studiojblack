import { business } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="border-t border-line py-10">
      <div className="container-page flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted">
        <span>
          © {new Date().getFullYear()} {business.name}. Todos os direitos
          reservados.
        </span>
        <div className="flex gap-6">
          <a
            href={business.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gold transition-colors"
          >
            Instagram
          </a>
          <a
            href={`mailto:${business.email}`}
            className="hover:text-gold transition-colors"
          >
            {business.email}
          </a>
        </div>
      </div>
    </footer>
  );
}
