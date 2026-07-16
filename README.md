# Portfolio — Back-End Developer

Portfólio pessoal minimalista, construído com **Astro + Tailwind CSS**, focado em
performance e acessibilidade. Hospedado na Vercel.

## Stack

- **Astro 5** — geração estática, zero JS por padrão
- **Tailwind CSS 3** + `@tailwindcss/typography` para o conteúdo dos cases
- **MDX/Markdown** — projetos ficam em `src/content/projects/*.md`
- **Vercel** — deploy contínuo via Git

## Estrutura

```
src/
├── components/       Componentes Astro (Nav, Hero, Projects, etc.)
├── content/          Projects em Markdown
│   └── projects/      Cada case vira um .md
├── data/             Dados estáticos (tech stack com SVGs)
├── layouts/          BaseLayout
├── pages/            Rotas (index, projects/[slug], 404)
├── styles/           global.css (tokens, dark mode)
├── consts.ts         Dados pessoais (EDITAR!)
└── content.config.ts Schema Zod dos projects
```

## Primeiros passos

```bash
npm install
npm run dev      # http://localhost:4321
```

## O que editar antes de colocar no ar

### 1. Dados pessoais — `src/consts.ts`

```ts
name: 'Seu Nome Completo',
role: 'Back-End Developer',
tagline: 'Sua tagline aqui.',
description: 'Descrição curta da hero.',
email: 'seu.email@dominio.com',
social: {
  github: 'https://github.com/seu-usuario',
  linkedin: 'https://linkedin.com/in/seu-usuario',
},
url: 'https://seu-dominio.com',
```

### 2. About — mesmo arquivo, campo `ABOUT.paragraphs`

Dois parágrafos curtos sobre você. Tom direto, sem clichê.

### 3. Projetos — `src/content/projects/*.md`

Edite os 3 templates existentes (ou crie novos). O schema exige:

```yaml
---
title: "Nome do projeto"
summary: "1-2 frases resumindo o case"
stack: ["Python", "Django", ...]
order: 1                 # define a ordem de exibição
status: shipped         # shipped | wip | archived
role: "Seu papel"        # opcional
year: 2025              # opcional
github: "https://..."   # opcional
demo: "https://..."     # opcional
highlights:             # 2-4 bullets que aparecem no card
  - "Bullet curto de impacto"
---
```

O corpo do Markdown suporta qualquer estrutura. Sugerido:

```markdown
## Contexto
## Problema
## Solução
## Aprendizados
## Stack
## Próximos passos
```

### 4. Trajetória — `src/components/Journey.astro`

Liste faculdade e evolução profissional. Edite o array `items`.

### 5. Tech stack

`src/data/tech.ts` — já tem as 8 ferramentas que você definiu (Python, Django,
DRF, PostgreSQL, Docker, Nginx, Linux, Git). Adicione ou remova conforme
necessário. O SVG inline fica em `icon`.

### 6. SEO / domínio — `astro.config.mjs`

```js
site: 'https://seu-dominio.com',  // trocar
```

### 7. Favicon e OG image

- `public/favicon.svg` — troque pelo seu logo (formato SVG, 32x32)
- `public/og-image.png` — gere em [og-image.vercel.app](https://og-image.vercel.app)
  ou similar (1200x630)

## Build

```bash
npm run build       # gera /dist
npm run preview     # testa o build local
```

## Deploy na Vercel

1. Suba o código para um repo no GitHub
2. Importe em [vercel.com/new](https://vercel.com/new)
3. A Vercel detecta Astro automaticamente
4. Configure seu domínio customizado em Project Settings → Domains
5. Cada push na `main` faz deploy automático

Sem variáveis de ambiente necessárias.

## Adicionando um novo projeto

1. Crie `src/content/projects/meu-projeto.md` com o frontmatter correto
2. Rode `npm run dev` para ver localmente
3. Commit + push — Vercel faz o resto

## Customizações comuns

- **Cores:** edite `src/styles/global.css` (`:root` e `html.dark`)
- **Fontes:** altere em `BaseLayout.astro` (Google Fonts) e `tailwind.config.mjs`
- **Animações:** classe `.reveal` aplica fade-in via IntersectionObserver.
  Adicione `class="reveal"` em qualquer elemento.
