# Studio J'Black Barbearia — Site institucional

Site em página única (landing page) do Studio J'Black Barbearia, barbearia de bairro na Zona Sul de São Paulo. Objetivo: apresentar o negócio e direcionar o cliente para agendamento via WhatsApp.

🔗 **Site no ar:** _(https://studiojblack.vercel.app)_

## Tecnologias

- [Next.js 16](https://nextjs.org) (App Router)
- [React](https://react.dev)
- [TypeScript](https://www.typescriptlang.org)
- [Tailwind CSS v4](https://tailwindcss.com)
- Hospedagem: [Vercel](https://vercel.com)

## Como rodar localmente

```bash
npm install
npm run dev
```

Abra [http://localhost:3000](http://localhost:3000) no navegador.

## Estrutura do projeto

- app/
- layout.tsx → fontes, título e metadados do site
- page.tsx → monta as seções da página na ordem em que aparecem
- globals.css → cores, tipografia e estilos globais (design system)
- components/ → um componente por seção (Hero, About, Services, Gallery, Testimonials, LocationMap, Footer, etc.)
- lib/
- data.ts → todas as informações do negócio (nome, telefone, endereço, horários, preços, avaliações) — editar aqui para atualizar conteúdo sem mexer no design
- public/
- imagens/ → fotos usadas no site (fachada, cortes, produtos, logo)

## Editando o conteúdo

A maior parte das informações do site (telefone, endereço, horários, preços de serviços e produtos, avaliações) fica centralizada em **`lib/data.ts`**. Para atualizar preços ou horários, basta editar os valores desse arquivo — não é necessário mexer nos componentes visuais.

## Deploy

O projeto está conectado à Vercel e cada push na branch `main` gera um novo deploy automaticamente.
