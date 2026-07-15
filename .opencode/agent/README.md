# Agentes do Portfólio

Índice dos agentes especializados disponíveis para o projeto do portfólio Ismael Carlos.

**Stack:** Astro 5 + Tailwind CSS 3 + TypeScript + MDX

---

## Como usar

Cada agente é invocável via `@nome-do-agente` no opencode. Os agentes são subagents especializados — cada um cuida de uma camada específica do projeto.

---

## Agentes disponíveis

### `@astro-frontend`
**Arquivo:** `astro-frontend.md`
**Especialidade:** Astro 5 + TypeScript
**O que faz:** Cria e edita componentes `.astro`, layouts, páginas, coleções de conteúdo, integrações e configuração do build.
**Usa Context7 MCP:** Sim — consulta documentação oficial do Astro antes de escrever código.
**Quando usar:** Para criar/editar componentes, adicionar seções, modificar rotas, configurar coleções.
**Quando NÃO usar:** Para CSS/tokens → `@design-system`, para conteúdo → `@content-manager`, para testes → `@qa-tester`.

---

### `@design-system`
**Arquivo:** `design-system.md`
**Especialidade:** Tailwind CSS 3 + CSS custom properties + animações
**O que faz:** Gerencia tokens de design (cores, fontes, espaçamentos), animações reveal, efeitos visuais (dot-grid, data-rain, glyphs), responsividade e identidade visual.
**Usa Context7 MCP:** Sim — consulta documentação do Tailwind antes de alterar config ou CSS.
**Quando usar:** Para alterar paleta, tipografia, espaçamentos, animações, breakpoints, efeitos visuais.
**Quando NÃO usar:** Para componentes Astro → `@astro-frontend`, para textos → `@content-manager`.

---

### `@content-manager`
**Arquivo:** `content-manager.md`
**Especialidade:** Conteúdo textual + dados estruturados + SEO
**O que faz:** Edita `consts.ts` (dados pessoais), `tech.ts` (stack), arquivos `.md` de projetos (cases), navegação e metadados SEO.
**Quando usar:** Para atualizar nome, email, bio, projetos, tech stack, highlights, descrições, links sociais.
**Quando NÃO usar:** Para componentes visuais → `@astro-frontend`, para design → `@design-system`.

---

### `@qa-tester`
**Arquivo:** `qa-tester.md`
**Especialidade:** QA visual + funcional com Playwright MCP
**O que faz:** Navega pelo site, captura screenshots, verifica responsividade (desktop/tablet/mobile), valida links, testa dark mode, compara com template de referência, verifica console para erros.
**Usa Playwright MCP:** Sim — exclusivamente.
**Quando usar:** Após criar/editar componentes, após alterar CSS, antes de considerar "pronto", para debugar problemas visuais.
**Quando NÃO usar:** Para editar código → use os outros agentes.

---

### `@code-quality`
**Arquivo:** `code-quality.md`
**Especialidade:** Build, TypeScript, linting, correção de erros
**O que faz:** Verifica e corrige erros de build (`npm run build`), type checking (`astro check`), erros de console e problemas de compilação.
**Usa Context7 MCP:** Sim — consulta documentação quando encontra erros desconhecidos.
**Quando usar:** Quando o build falha, quando há erros TypeScript, após grandes alterações para verificar integridade.
**Quando NÃO usar:** Para criar código → `@astro-frontend`, para design → `@design-system`.

---

### `@portfolio-builder`
**Arquivo:** `portfolio-builder.md` (existente)
**Especialidade:** Recriação completa de portfólio a partir de template
**O que faz:** Agente orquestrador que recria o portfólio inteiro a partir de um `index.html` de referência, preservando identidade visual.
**Quando usar:** Apenas para recriação completa do portfólio — não para edições incrementais.

---

## Fluxo recomendado de trabalho

```
1. @content-manager  →  definir/editar conteúdo
2. @astro-frontend   →  criar/editar componentes
3. @design-system     →  ajustar tokens visuais
4. @code-quality      →  verificar build
5. @qa-tester         →  verificar resultado visual
```

## Regra geral

- Cada agente é especialista em sua camada — não peça para um agente fazer trabalho de outro.
- Sempre rode `@code-quality` após alterações significativas.
- Sempre rode `@qa-tester` antes de considerar uma tarefa concluída.
- Para dúvidas sobre APIs/frameworks, os agentes técnicos consultam Context7 MCP automaticamente.
