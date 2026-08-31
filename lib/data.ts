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
];

export const testimonials = [
  {
    text: "Cliente há anos — ele e o filho cortam cabelo sempre com o Josué e saem satisfeitos.",
    source: "Avaliação no Google",
  },
  {
    text: "Descreve o profissional como competente e diz ser cliente fiel há bastante tempo.",
    source: "Avaliação no Google",
  },
  {
    text: "Elogia o cuidado no atendimento, até com as crianças que passam pela barbearia.",
    source: "Avaliação no Google",
  },
];
