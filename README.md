# portfolio

Agente opencode (`portfolio-builder`) + skill (`portfolio-from-template`)
que reconstroem o portfolio do Ismael Carlos a partir de um `index.html`
de referencia, preservando a identidade visual do template.

## Estrutura

```
portfolio/
├── opencode.json                       registra o agent e o MCP do Playwright
├── README.md                           este arquivo
└── .opencode/
    ├── agent/
    │   └── portfolio-builder.md        agent (subagent) que o usuario invoca
    └── skill/
        └── portfolio-from-template/
            └── SKILL.md                cerebro procedural do agent
```

## Como usar

1. Reinicie o opencode depois de criar/alterar esses arquivos (a configuracao
   e carregada uma unica vez no startup).
2. Em qualquer sessao, invoque o agent com `@portfolio-builder` e passe:
   - o caminho do `index.html` de referencia;
   - ajustes que voce queira (se houver);
   - qualquer informacao adicional (GitHub, LinkedIn, dominio) que nao esteja
     nos READMEs.
3. O agent carrega a skill, mapeia o conteudo pessoal nos repositorios em
   `C:\ISMAEL\`, e devolve um portfolio Astro 5 + Tailwind 3 com a mesma
   identidade visual do template.

## Fontes de conteudo (ja configuradas na skill)

- `C:\ISMAEL\PortfolioResearch\relatorio_portfolio_backend.md` — bio, tom de
  voz, skills, posicionamento.
- Subpastas em `C:\ISMAEL\` com os repositorios:
  - `carros/`
  - `finanpy-final-sprints/`
  - `finanpy-main/`
  - `flix_app/`
  - `flix-api/`
  - `smart_finance/`
- `C:\ISMAEL\PortfolioResearch\portfolio\` — prototipo Astro 5 + Tailwind 3
  usado como base de codigo (estrutura de pastas, schema de content, etc.).

## Stack de entrega

- Astro 5 (SSG, zero JS por padrao)
- Tailwind CSS 3
- MDX para cases em `src/content/projects/*.md`
- Playwright MCP para validacao visual

## MCP necessario

O `opencode.json` ja registra o servidor Playwright via
`npx -y @playwright/mcp`. Se voce ja tem outro Playwright configurado no
escopo global, remova a chave `mcp` deste arquivo para evitar duplicidade.
