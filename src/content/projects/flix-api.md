---
title: "Flix API"
summary: "API REST para um catálogo de filmes com Django 6 + DRF + JWT. Modela atores, gêneros, movies e reviews; suporta paginação, filtros e autenticação por token."
stack: ["Python", "Django 6", "Django REST Framework", "SimpleJWT", "SQLite"]
order: 3
status: shipped
role: "Criador e mantenedor"
year: 2025
github: "https://github.com/carlosismael-code/flix-api"
highlights:
  - "DRF + ViewSets com roteador padrão (rotas REST automáticas)"
  - "Autenticação JWT via SimpleJWT (access + refresh)"
  - "Filtros, busca e paginação em endpoints de listagem"
  - "Modelagem com relacionamentos N:N (movies ↔ actors ↔ genres) e reviews aninhadas"
---

## Contexto

`flix-api` é o back-end REST do projeto Flix — um catálogo de filmes
onde o usuário pode navegar, favoritar e avaliar títulos. O foco foi
construir uma API limpa, bem tipada, com autenticação real e cobertura
dos casos clássicos de REST (list, retrieve, create, update, delete +
filtros + paginação).

## Problema

APIs de catálogo viram rapidamente uma bagunça de endpoints ad-hoc, sem
paginação, sem filtros, sem auth consistente. Queria provar que dá pra
fazer "certo" com pouco: Django 6 + DRF + SimpleJWT.

## Solução

- **Django 6** + **DRF** com `ModelViewSet` + `DefaultRouter` (rotas
  REST automáticas).
- **SimpleJWT** para autenticação access/refresh.
- **Modelagem**: `Movie`, `Actor`, `Genre`, `Review`, `User`.
- **Relacionamentos N:N** entre `Movie ↔ Actor` e `Movie ↔ Genre`.
- **Filtros** e **paginação** padronizados.
- **Permissões** por ação (qualquer um lê; só autenticado escreve; só
  dono altera/deleta review).
- **Tests** cobrindo fluxos críticos (CRUD + auth + permissões).

## Aprendizados

- `ModelViewSet` acelera muito, mas exige `get_queryset()` afiado para
  evitar N+1 com `select_related` / `prefetch_related`.
- Custom permissions (subclasses de `BasePermission`) são o melhor
  lugar para regras de "dono pode editar".
- Tokens JWT com refresh rotation reduzem superfície de ataque sem
  complicar o front.

## Stack

- Python 3.12+
- Django 6.0.4
- Django REST Framework 3.17
- djangorestframework-simplejwt 5.5
- SQLite (dev) — adaptável para PostgreSQL

## Próximos passos

- Throttling por usuário para escrita.
- Filtros avançados (por ator, gênero, ano, avaliação mínima) com
  `django-filter`.
- Documentação OpenAPI automática (drf-spectacular).
