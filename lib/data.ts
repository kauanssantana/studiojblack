export const business = {
  name: "Studio J'Black Barbearia",
  barber: "Josué",
  yearsInMarket: 19,
  phone: "11958033736",
  whatsappNumber: "5511958033736",
  whatsappMessage:
    "Olá! Vim pelo site do Studio J'Black e quero agendar um horário.",
  email: "studiojblackbarbearia@gmail.com",
  address:
    "R. Lourival Paulinho, 146 – Jardim Guanhembu, São Paulo – SP, 04814-480",
  instagram: "https://www.instagram.com/studiojblack/",
  rating: 4.9,
  reviewCount: 75,
};

export const payments = ["Débito", "Crédito", "Pix", "Dinheiro"];

export const whatsappLink = `https://wa.me/${business.whatsappNumber}?text=${encodeURIComponent(
  business.whatsappMessage,
)}`;

export const hours = [
  { days: "Terça a quinta", time: "09h às 20h" },
  { days: "Sexta e sábado", time: "09h às 21h" },
  { days: "Domingo", time: "09h às 15h" },
  { days: "Segunda", time: "Fechado" },
];

export const services = [
  { name: "Corte normal", price: 45 },
  { name: "Sobrancelha", price: 15 },
  { name: "Barba desenhada", price: 30 },
  { name: "Pezinho", price: 20 },
];

export const products = [{ name: "Pomada Fox Premium", price: 20 }];
export const testimonials = [
  {
    text: "Tem bons anos que meu filho e eu cortamos o cabelo no Josué. Pra corte infantil, não tem barbeiro melhor. Fecho os olhos e fico tranquilo com o corte perfeito do meu filho e do meu. Local calmo, ambiente familiar, diferente de barbearias masculinas por aí. Lá no STUDIO J'BLACK, é garantia de satisfação e vontade de chegar o dia do próximo corte. Cortávamos o cabelo lá antes de ir morar em Portugal, e voltamos para o Brasil, e voltamos a cortar com o Josué. Recomendo muito.",
    author: "Adriano Portugal",
  },
  {
    text: "Excelentes profissionais e um ótimo atendimento, ambiente limpo e agradável super recomendado parabens",
    author: "Binho Lima",
  },
  {
    text: "Profissional excelente, muito experiente e sem contar a simpatia. Recomendo a todos de olhos fechados. Deus abençoe sempre",
    author: "Filipe Douglas B. de Carvalho",
  },
  {
    text: "Ambiente muito agradável. Profissional de muita qualidade, acertou no corte do jeito que eu queria! Vou voltar sempre.",
    author: "Rodolfo Luiz",
  },
  {
    text: "Ótimo local, já sou cliente mais de 5 anos. Josué super profissional, ambiente familiar",
    author: "Luciano Lima",
  },
];
