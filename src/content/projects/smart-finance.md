---
title: "SmartFinance"
summary: "Aplicação full-stack de gestão de finanças pessoais em Django, com dashboard, contas, transações, metas e relatórios. Tema escuro, design system próprio e cobertura de testes com pytest."
stack: ["Python", "Django 6", "SQLite", "pytest", "WhiteNoise", "Tailwind"]
order: 1
status: shipped
role: "Criador e mantenedor"
year: 2025
github: "https://github.com/carlosismael-code/smart_finance"
highlights:
  - "Sistema completo com accounts, bills, categories, transactions, goals e reports"
  - "Testes automatizados com pytest + pytest-django + cobertura"
  - "Logging estruturado com structlog e middleware próprio"
  - "Deploy documentado em DEPLOY.md (Python 3.14, WhiteNoise, SQLite)"
---

## Contexto

SmartFinance é um sistema web de gestão de finanças pessoais voltado para
estudantes, CLT, autônomos e pequenos empreendedores que querem um controle
financeiro simples — sem over-engineering.

A ideia foi construir um produto real, com um Design System único, tema
escuro e Class Based Views sempre que possível, evitando a tentação de
pular para Django REST Framework onde uma view server-rendered resolve.

## Problema

A maioria dos apps de finanças pessoais ou é super simples (uma planilha com
filtros) ou extremamente complexa (contábil, com integração bancária, etc.).
Público que só quer **registrar receitas, despesas e ver um dashboard honesto
do mês** não encontra um meio-termo.

## Solução

- **Apps Django por domínio** (`accounts`, `bills`, `categories`,
  `transactions`, `goals`, `profiles`, `reports`, `dashboard`).
- **CBVs** (Class Based Views) como padrão, deixando FBV só onde a clareza
  pede.
- **Dashboard** com cards financeiros resumindo o mês.
- **Relatórios** com filtros e exportação (openpyxl).
- **Tema escuro** e design system coerente (Tailwind via `django-tailwind`).
- **Testes** com pytest + pytest-django desde o início.
- **Logging estruturado** com `structlog` para debug em produção.

## Aprendizados

- Modelar `Transaction` corretamente (entrada vs. saída, status pendente/pago)
  evita refatoração depois.
- `pytest-django` com fixtures por app é o melhor investimento pra manter
  sanidade.
- WhiteNoise + SQLite é uma combinação viável pra protótipos com tráfego
  baixo/médio — sem complicar deploy.

## Stack

- Python 3.14
- Django 6.0.6
- SQLite (dev) / adaptável para PostgreSQL
- WhiteNoise (arquivos estáticos)
- structlog (logging)
- pytest + pytest-django + coverage
- django-tailwind

## Próximos passos

- Migrar dados do usuário via CSV com mapeamento de categorias automático.
- Adicionar recorrência real para bills (mensal, semanal, anual).
- API REST com DRF para um futuro app mobile.
