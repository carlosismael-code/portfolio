---
title: "FinanPy"
summary: "Assistente financeiro pessoal com agentes de IA (LangChain + LangGraph). Permite perguntas em linguagem natural sobre receitas, despesas e metas, com memória de conversa e respostas ancoradas no banco."
stack: ["Python", "Django 5", "DRF", "LangChain", "LangGraph", "OpenAI", "PostgreSQL", "WhiteNoise"]
order: 2
status: wip
role: "Criador e mantenedor"
year: 2025
github: "https://github.com/carlosismael-code/finanpy"
highlights:
  - "Agentes LangGraph com tools que consultam o banco Django via ORM"
  - "Memória de conversa persistida em checkpoint store"
  - "API REST em DRF servindo o agente para o front"
  - "Pydantic v2 + pydantic-settings para validação e config tipada"
---

## Contexto

FinanPy é um assistente financeiro pessoal com IA. A ideia é o usuário
conversar com o sistema em linguagem natural ("quanto gastei com
delivery em maio?") e receber respostas precisas, ancoradas nos dados
reais do banco.

Projeto iterativo: a versão `main` é a base Django, e `finanpy-final-sprints`
avança com os agentes, tools e a camada de memória.

## Problema

Chatbots genéricos de finanças (ou alucinam números, ou exigem upload de
extrato) não respondem perguntas simples do dia a dia. E construir um
assistente de verdade exige mais do que `ChatOpenAI(prompt)` — precisa de
tools, memória e validação.

## Solução

- **Django 5 + DRF** servindo o back-end e a API que o front consome.
- **LangChain + LangGraph** para orquestrar agentes com tools.
- **Tools** que consultam o ORM do Django (modelos de receita, despesa,
  meta) — a IA não "chuta" números.
- **LangGraph checkpoint store** para memória persistente da conversa.
- **Pydantic v2** para tipar responses, tools e settings.
- **PostgreSQL** (psycopg2-binary) como banco de produção.
- **WhiteNoise** para estáticos.
- **Testes** com pytest + flake8 + isort.

## Aprendizados

- Agentes sem **guardrails de tools** rapidamente começam a inventar campos.
- Pydantic v2 + LangChain simplifica muito a tipagem de responses.
- LangGraph vale o custo de aprender quando você precisa de memória e
  fluxos com ramos — chains lineares não dão conta de "conversa + ação".
- Logs estruturados (`structlog`) em todo tool call salvam horas de debug.

## Stack

- Python 3.12+
- Django 5.2 + DRF
- LangChain 1.0 / LangGraph 1.0
- OpenAI (gpt-4o)
- PostgreSQL
- WhiteNoise, django-tailwind
- Pydantic 2, pydantic-settings
- pytest, flake8, isort

## Próximos passos

- Fechar o ciclo de tools: leitura, escrita com confirmação, e rollback
  de operações destrutivas.
- Camada de auth OAuth2 no agente.
- Métricas de qualidade de resposta (groundedness, latência, custo).
