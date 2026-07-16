---
title: "Carros"
summary: "Catálogo de veículos com Django + uwsgi, configurado para deploy em produção com Nginx. Templates server-rendered, admin customizado e modelo de dados relacional para marca, modelo e ano."
stack: ["Python", "Django", "uwsgi", "Nginx", "SQLite", "Linux"]
order: 4
status: shipped
role: "Criador e mantenedor"
year: 2024
github: "https://github.com/carlosismael-code/carros"
highlights:
  - "Configuração completa de deploy com uwsgi + Nginx (uwsgi_params, carros.conf)"
  - "Admin Django customizado para o domínio de veículos"
  - "Modelagem relacional: marca → modelo → ano"
  - "Templates server-rendered com foco em SSR puro (sem SPA)"
---

## Contexto

`carros` é um catálogo de veículos onde o usuário pesquisa por marca,
modelo e ano. Foi meu primeiro contato com **deploy Django em produção
"de verdade"** — uwsgi, Nginx, virtualenv, variáveis de ambiente.

## Problema

Tutoriais de Django terminam no `runserver`. Queria fechar o ciclo:
subir uma aplicação Django para produção com uwsgi servindo atrás do
Nginx, em uma VM Linux, com virtualenv e arquivo `.ini` versionado.

## Solução

- **Django** (views baseadas em função, templates DTL, admin customizado).
- **uwsgi** como app server (configuração em `carros_uwsgi.ini`).
- **Nginx** como reverse proxy (configuração em `carros.conf`).
- **`uwsgi_params`** versionado no repo.
- **Virtualenv** para isolar dependências.
- **Admin customizado** com `list_display`, `search_fields` e
  `list_filter` para o domínio de veículos.
- **SQLite** (dev) com migrações versionadas.

## Aprendizados

- O combo `Nginx → uwsgi → Django` é simples, mas cada peça tem uma
  pegadinha (permissões do socket, `uwsgi_pass`, `static` files).
- Versionar `uwsgi_params` e o `.ini` economiza horas na próxima
  máquina.
- Admin Django, customizado com pouco código, substitui um "CRUD admin"
  inteiro em muito menos tempo.

## Stack

- Python 3.x
- Django (LTS)
- uwsgi
- Nginx
- SQLite (dev)
- Linux (deploy)

## Próximos passos

- Migrar para Gunicorn + systemd (mais simples em containers modernos).
- Substituir SQLite por PostgreSQL.
- Adicionar busca full-text com `django.contrib.postgres`.
