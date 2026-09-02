import type { Metadata } from "next";
import { Oswald, Inter } from "next/font/google";
import "./globals.css";

const oswald = Oswald({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-oswald",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Studio J'Black Barbearia | Zona Sul, São Paulo",
  description:
    "Studio J'Black Barbearia, há 19 anos na Zona Sul de São Paulo. Corte, barba e sobrancelha com o barbeiro Josué. Agende pelo WhatsApp.",
  icons: {
    icon: "/imagens/logo.png",
    apple: "/imagens/logo.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body className={`${oswald.variable} ${inter.variable}`}>{children}</body>
    </html>
  );
}
