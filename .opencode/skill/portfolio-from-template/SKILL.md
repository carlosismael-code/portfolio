---
name: portfolio-from-template
description: Recria um portfólio pessoal a partir de um template HTML/CSS de referência, preservando layout, tipografia, espaçamento, animações, interações, responsividade e identidade visual. Substitui APENAS nome, textos, projetos, tecnologias, redes sociais e conteúdo profissional. Use ONLY when o usuário fornece (a) um arquivo index.html de referência e (b) dados pessoais/projetos do dono do portfólio, e pede que o portfólio seja construído com fidelidade visual ao template. NÃO use para criar portfólios do zero, para redesigns livres ou para projetos que não sejam portfólios pessoais.
---

# Portfolio From Template

Esta skill automatiza a recriação fiel de um portfólio pessoal a partir de um
template de referência. A regra de ouro: **o template manda, o conteúdo é
trocado, a identidade visual não muda**.

## Quando usar

- O usuário diz "use o `index.html` como referência" / "recrie o portfólio do
  Ismael a partir desse template" / "construa em cima desse design".
- Existe um `index.html` (ou equivalente) bem formado e acessível no disco.
- Existe uma fonte de conteúdo pessoal disponível (pasta de projetos, README,
  relatório, etc.).

## Quando NÃO usar

- O usuário quer um portfólio criado do zero sem referência visual.
- A "referência" é apenas uma descrição verbal, sem arquivo.
- A tarefa é outro tipo de projeto (landing page genérica, blog, e-commerce).

## Entradas esperadas

1. **Caminho do template de referência** (ex.: `C:\ISMAEL\PortfolioResearch\codedgar.com\index.html`).
2. **Pasta de destino do portfólio novo** (ex.: `C:\ISMAEL\portfolio`).
3. **Fonte de conteúdo pessoal** — usar uma combinação de:
   - `C:\ISMAEL\PortfolioResearch\relatorio_portfolio_backend.md` (posicionamento, bio, skills, tom de voz).
   - Subpastas em `C:\ISMAEL\` com os repositórios do dono
     (`carros`, `finanpy-final-sprints`, `finanpy-main`, `flix_app`, `flix-api`,
     `smart_finance`) — cada `README.md` vira insumo para um case.
   - Qualquer arquivo que o usuário aponte explicitamente.
4. **Stack de entrega**: por padrão, **Astro 5 + Tailwind CSS 3 + MDX**, no
   mesmo formato do protótipo em `C:\ISMAEL\PortfolioResearch\portfolio\`
   (estrutura `src/components`, `src/content/projects`, `src/data`, etc.).
   Pode ser sobrescrito pelo usuário.

## Processo obrigatório

Siga estas etapas em ordem. Não pule etapas. Não invente conteúdo.

### 1. Inspeção do template

- Ler o `index.html` inteiro (mesmo que grande — usar `read` com `offset`/`limit`
  se necessário; gravar a estrutura em notas internas, não no repo).
- Identificar e listar:
  - **Estrutura HTML**: header, nav, hero, seções, footer, landmarks.
  - **Componentes visuais**: cards, listas, badges, tags, CTAs, divisores.
  - **Tipografia**: famílias (procurar por `font-family`, Google Fonts,
    `@font-face`), tamanhos, pesos, escala.
  - **Paleta**: cores em `:root`, classes utilitárias, gradientes, glows.
  - **Espaçamento**: paddings, gaps, grid/gap das seções.
  - **Animações**: classes `reveal`, GSAP, `framer-motion`, `IntersectionObserver`,
    `@keyframes`, transições CSS, `scroll-behavior`.
  - **Interações**: hover, foco, cursor custom, smooth-scroll, anchors.
  - **Backgrounds/efeitos**: grids SVG, "tron grid", chuva de caracteres, blobs.
  - **Responsividade**: breakpoints (`@media`, `sm/md/lg/xl`), grids que
    colapsam, tipografia fluida (`clamp`).
  - **Navegação**: nav fixa/sidebar, comportamento ao scroll, indicador de
    seção ativa.
- Quando possível, abrir o template no Playwright MCP (`playwright_browser_navigate`
  para o caminho `file:///` + `playwright_browser_take_screenshot` /
  `playwright_browser_snapshot`) para validar comportamento e capturar
  screenshots de referência em viewports desktop e mobile.

### 2. Mapeamento de conteúdo pessoal

- Ler o relatório de pesquisa (`relatorio_portfolio_backend.md`) para extrair:
  bio, tom de voz, lista de skills, padrões sugeridos.
- Para cada subpasta de projeto em `C:\ISMAEL\`, ler o `README.md` (e
  `package.json` se existir) para extrair: nome, descrição, stack, papel, ano,
  link do GitHub, highlights (bullets curtos de impacto).
- Cruzar com o que já existe no protótipo Astro
  (`C:\ISMAEL\PortfolioResearch\portfolio\src\content\projects\*.md`) — o
  schema e a estrutura de cases já estão definidos lá, reusar.

### 3. Decisão de fidelidade

Antes de codificar, listar em texto (para o usuário, no chat):

- **O que será preservado** (cores, fontes, animações, layout, responsividade).
- **O que será substituído** (nome, textos, projetos, skills, social).
- **Pontos de risco** (animações pesadas que podem ser simplificadas, fontes
  proprietárias que precisam de fallback, assets binários que precisam ser
  copiados ou regenerados).

Só prosseguir se o usuário não pedir ajustes nessa lista.

### 4. Construção do portfólio

Usar o protótipo `C:\ISMAEL\PortfolioResearch\portfolio\` como ponto de partida.
Não reinventar a estrutura de pastas. Reusar:

- `astro.config.mjs` (ajustar `site`).
- `tailwind.config.mjs` e `src/styles/global.css` (ajustar tokens de cor e
  fontes para bater com o template).
- `BaseLayout.astro`, `Nav.astro`, `Hero.astro`, `About.astro`, `Projects.astro`,
  `ProjectCard.astro`, `Journey.astro`, `TechStack.astro`, `Contact.astro`,
  `Footer.astro`, `SectionHeading.astro`.
- O schema de `src/content.config.ts` e o padrão de frontmatter dos
  `src/content/projects/*.md`.

Adaptações obrigatórias:

- Trocar tokens de cor, fontes, animações e estrutura visual para casar com
  o template de referência. **Não preservar** as escolhas visuais do
  protótipo — só a estrutura de código.
- Trocar dados em `src/consts.ts` (nome, role, tagline, email, social, ABOUT).
- Substituir/reescrever os 3 `.md` de projeto por cases reais do Ismael
  (carros, finanpy, flix, smart_finance ou similares).
- Atualizar `src/data/tech.ts` com a stack real (Python, Django, DRF,
  PostgreSQL, Docker, etc. — confirmar lendo READMEs).
- Trajetória em `Journey.astro` com formação e evolução profissional reais.

Se o template de referência trouxer assets binários (imagens, webp, svg de
background), copiá-los para `public/` ou `src/assets/` do portfólio novo,
**renomeando para o contexto do Ismael** quando fizer sentido (ex.: foto do
hero). Não manter o nome original se isso vazar identidade do template.

### 5. Validação visual com Playwright

Depois de implementar:

- `playwright_browser_navigate` em `http://localhost:4321` (ou `file:///` no
  `dist/index.html`).
- Capturar `playwright_browser_take_screenshot` em desktop (1440×900) e
  mobile (390×844) — full page.
- Comparar lado a lado com screenshots do template original
  (capturados na etapa 1).
- Se uma seção não bater visualmente (proporção, fonte, cor, espaçamento),
  voltar e ajustar. Não aprovar com divergências óbvias.

### 6. Critério de aprovação

O portfólio só está pronto quando, ao comparar com o `index.html` de
referência, um usuário reconhece **claramente** a mesma identidade visual
e a mesma experiência de uso — com nome, projetos e conteúdo do Ismael
no lugar.

## Proibições explícitas

- **Não** criar uma identidade visual própria.
- **Não** substituir o template por componentes genéricos (botões, cards,
  layouts comuns de Bootstrap/Tailwind UI) sem justificativa técnica.
- **Não** simplificar a interface para "caber no escopo". Se algo do
  template não cabe, explicar o motivo e perguntar antes de cortar.
- **Não** commitar mudanças sem o usuário pedir explicitamente.
- **Não** usar `git init`, `git add`, `git commit`, `git push` por conta
  própria.
- **Não** inventar projetos, empresas, cargos ou números. Se faltar
  conteúdo, perguntar.

## Saída esperada

Ao final, entregar:

1. Árvore de arquivos criada/modificada.
2. Diff conceitual: o que mudou em relação ao template e por quê.
3. Screenshots comparativos (template original vs. portfólio novo) em
   `previews/` (ou diretório equivalente).
4. Comando para rodar (`npm install && npm run dev`) e URL local.
5. Lista de pendências conhecidas (ex.: "fonte X do template não está
   disponível publicamente — usando fallback Y").

## Integração com o agent `portfolio-builder`

Esta skill é o cérebro do agent `portfolio-builder` (definido em
`.opencode/agent/portfolio-builder.md`). O agent recebe o pedido do usuário,
delega o trabalho de implementação a um subagent com esta skill carregada,
e devolve o resultado ao usuário com a lista de mudanças e os screenshots.
