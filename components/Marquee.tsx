const items = [
  "Corte",
  "Barba desenhada",
  "Sobrancelha",
  "19 anos de tradição",
  "Zona Sul de São Paulo",
  "Resiliência",
  "Dedicação",
  "Trabalho duro",
  "Atendimento personalizado",
  "Qualidade",
];

export default function Marquee() {
  const doubled = [...items, ...items];
  return (
    <div className="border-y border-line bg-surface py-5 overflow-hidden">
      <div className="marquee-track">
        {doubled.map((item, i) => (
          <span key={i} className="marquee-item text-sm text-muted">
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
