# Portfólio — Ismael Carlos

Portfólio pessoal de **Ismael Carlos**, desenvolvedor back-end focado em Python, Django e Django REST Framework.

## Stack

- **Astro 5** — geração estática, zero JS por padrão
- **Tailwind CSS 3** — design system com tokens customizados
- **TypeScript** — tipagem estrita
- **MDX/Markdown** — projetos em `src/content/projects/*.md`

## Estrutura

```
portfolio-site/
├── src/
│   ├── components/       Componentes Astro (Nav, Hero, About, etc.)
│   ├── content/          Projetos em Markdown
│   │   └── projects/     Cada case vira um .md
│   ├── data/             Dados estáticos (tech stack com SVGs)
│   ├── layouts/          BaseLayout
│   ├── pages/            Rotas (index, projects/[slug], 404)
│   ├── styles/           global.css (tokens, dark mode, animações)
│   ├── consts.ts         Dados pessoais
│   └── content.config.ts Schema Zod dos projetos
├── public/               Favicon, og-image, foto, robots.txt
├── package.json
├── tailwind.config.mjs
├── tsconfig.json
└── astro.config.mjs
```

## Rodar local

```bash
cd portfolio-site
npm install
npm run dev
```

Abra `http://localhost:4321`.

## Build de produção

```bash
npm run build
npm run preview
```

## Deploy na Vercel

1. Suba o código para este repo no GitHub
2. Importe em [vercel.com/new](https://vercel.com/new)
3. A Vercel detecta Astro automaticamente
4. Configure seu domínio customizado em Project Settings → Domains
5. Cada push na `main` faz deploy automático

Sem variáveis de ambiente necessárias.

## Seções do portfólio

| Seção | Conteúdo |
|---|---|
| **Hero** | Tagline + foto + CTAs |
| **Sobre** | Bio + cards (stack/foco/estilo) |
| **Stack** | 13 tecnologias com ícones SVG |
| **Projetos** | 4 cases (SmartFinance, FinanPy, Flix API, Carros) |
| **Trajetória** | Timeline de formação e projetos |
| **Formação** | Graduação + certificações |
| **Experiência** | Profissional |
| **Contato** | Email, WhatsApp, LinkedIn, GitHub |

## Licença

MIT
