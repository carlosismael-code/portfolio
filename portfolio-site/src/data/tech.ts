export interface TechItem {
  name: string;
  category: 'Backend' | 'Database' | 'DevOps' | 'Ferramentas';
  url: string;
  note?: string;
  icon: string; // SVG inline (markup)
}

const python = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="22" height="22" aria-hidden="true"><path d="M11.5 2.5c-3 0-3.5 1-3.5 2.5v2h5v1H5c-2 0-3 1-3 4v3c0 2 1 3 3 3h2v-2c0-2 1-3 3-3h6c1.5 0 2-1 2-2V6c0-2-1-3.5-3.5-3.5h-3zm-1 1.5c.6 0 1 .4 1 1s-.4 1-1 1-1-.4-1-1 .4-1 1-1z"/><path d="M12.5 21.5c3 0 3.5-1 3.5-2.5v-2h-5v-1h8c2 0 3-1 3-4V9c0-2-1-3-3-3h-2v2c0 2-1 3-3 3H8c-1.5 0-2 1-2 2v5c0 2 1 3.5 3.5 3.5h3zm1-1.5c-.6 0-1-.4-1-1s.4-1 1-1 1 .4 1 1-.4 1-1 1z"/></svg>`;

const django = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="22" height="22" aria-hidden="true"><path d="M3 3h18v2.5l-9 8 9 7.5V18l-12-10.5L21 18V3z" opacity=".3"/><path d="M2.5 2.5h19v19h-19z" fill="none" stroke="currentColor" stroke-width="1"/><path d="M12 7.5c-2.5 0-4.5 2-4.5 4.5s2 4.5 4.5 4.5c1 0 2-.3 2.7-.9l-1-1.2c-.5.4-1 .6-1.7.6-1.5 0-2.7-1.3-2.7-3s1.2-3 2.7-3c.7 0 1.2.2 1.7.6l1-1.2c-.7-.6-1.7-.9-2.7-.9z"/></svg>`;

const drf = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="22" height="22" aria-hidden="true"><path d="M3 3h18v18H3z" fill="none"/><text x="12" y="16" text-anchor="middle" font-family="ui-monospace, monospace" font-weight="700" font-size="8">DRF</text></svg>`;

const postgres = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="22" height="22" aria-hidden="true"><path d="M12 2c-1 0-2 .5-2 2v.5C8 5 6 6 5 8c-1 1.5-1 3-1 4.5 0 2 .5 4 1.5 5.5C6 19 7 20 8 20.5V22h2v-1h4v1h2v-1.5c1-.5 2-1.5 2.5-2.5 1-1.5 1.5-3.5 1.5-5.5 0-1.5 0-3-1-4.5-1-2-3-3-5-3.5V4c0-1.5-1-2-2-2zm-3 6c.5 0 1 .5 1 1s-.5 1-1 1-1-.5-1-1 .5-1 1-1zm6 0c.5 0 1 .5 1 1s-.5 1-1 1-1-.5-1-1 .5-1 1-1zm-3 4c1 0 2 .5 2 1.5S13 15 12 15s-2-.5-2-1.5S11 12 12 12z"/></svg>`;

const docker = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="22" height="22" aria-hidden="true"><path d="M2 12h2v3H2zm3-2h2v3H5zm3-2h2v3H8zm3 0h2v3h-2zm3 0h2v3h-2zm-9 4h2v3H5zm3 0h2v3H8zm3 0h2v3h-2zm3 0h2v3h-2zm-9 4h2v3H5zm3 0h2v3H8zm3 0h2v3h-2zm3 0h2v3h-2zM21 8c-1 0-1.5.5-2 1-.5-1.5-2-2-3-1.5-1 .5-1 1.5-1 2.5l-7 1c-.5 0-1 .5-1 1.5l1 4c.5 1 1 1.5 2 1.5h11c1.5 0 3-1 4-2.5.5-1.5 0-3-1-4-1-.5-2-.5-3-.5z"/></svg>`;

const linux = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="22" height="22" aria-hidden="true"><path d="M12 2c-2 0-3 2-3 4 0 1.5.5 2.5 1 3.5C8 11 6 13 6 16c0 1.5.5 2.5 1 3.5-.5.5-1 1-1 2 0 1 1 1.5 2 1.5.5 0 1-.5 1.5-1 1 .5 2 1 3.5 1s2.5-.5 3.5-1c.5.5 1 1 1.5 1 1 0 2-.5 2-1.5 0-1-.5-1.5-1-2 .5-1 1-2 1-3.5 0-3-2-5-4-6.5.5-1 1-2 1-3.5 0-2-1-4-3-4zm-1 4c.5 0 1 .5 1 1s-.5 1-1 1-1-.5-1-1 .5-1 1-1zm2 0c.5 0 1 .5 1 1s-.5 1-1 1-1-.5-1-1 .5-1 1-1zm-1 2c.5 0 1 .5 1 1s-.5 1-1 1-1-.5-1-1 .5-1 1-1z"/></svg>`;

const git = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="22" height="22" aria-hidden="true"><path d="M21 11.5L12.5 3 11 4.5l2 2-3 3-1.5-1.5-2 2 3 3-5 5c-1 1-1 2.5 0 3.5s2.5 1 3.5 0l5-5 3 3 2-2L16.5 16l3-3 2 2L23 13.5 21 11.5zM8.5 18.5c-.8 0-1.5-.7-1.5-1.5s.7-1.5 1.5-1.5 1.5.7 1.5 1.5-.7 1.5-1.5 1.5z"/></svg>`;

const nginx = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="22" height="22" aria-hidden="true"><path d="M12 2L2 7v10l10 5 10-5V7L12 2zm-1 4l5 2.5v3l-5 2.5L6 11.5v-3l5-2.5zM12 7L7 9.5 12 12l5-2.5L12 7z"/></svg>`;

const postman = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="22" height="22" aria-hidden="true"><path d="M12 2L4 5v6c0 5 3.5 9.5 8 11 4.5-1.5 8-6 8-11V5l-8-3zm-1 14l-3-3 1.5-1.5 1.5 1.5 4-4 1.5 1.5-5.5 5.5z"/></svg>`;

const langchain = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="22" height="22" aria-hidden="true"><path d="M12 2c-1 0-2 .5-2 2v1H8c-1 0-2 1-2 2v3c0 1 1 2 2 2h1v1c0 1 1 2 2 2h1v-2h-1c-.5 0-1-.5-1-1v-1h2v-2H10V8c0-.5.5-1 1-1h1V5c0-1.5 1-2 2-2s2 .5 2 2v1h1c.5 0 1 .5 1 1v1h-2v2h2c1 0 2-1 2-2V5c0-1-1-2-2-2h-2V2c0-1.5-1-2-2-2z" opacity=".3"/><path d="M6 9c-1 0-2 1-2 2v4c0 1 1 2 2 2h2v-2H6V11h2V9H6zm10 2h-1v-1h-2v1h-1c-1 0-2 1-2 2v4c0 1 1 2 2 2h4c1 0 2-1 2-2v-4c0-1-1-2-2-2zm0 6h-4v-4h4v4z" fill-rule="evenodd"/></svg>`;

const openai = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="22" height="22" aria-hidden="true"><path d="M22 13.4c0-1.5-.9-2.8-2.2-3.4.3-1.3-.1-2.6-1-3.5-1-1-2.4-1.3-3.7-.9-.6-1.3-1.9-2.2-3.4-2.2-1.5 0-2.8.9-3.4 2.2-1.3-.4-2.7-.1-3.7.9-.9.9-1.3 2.2-1 3.5C2.5 10.6 1.6 11.9 1.6 13.4c0 1.5.9 2.8 2.2 3.4-.3 1.3.1 2.6 1 3.5 1 1 2.4 1.3 3.7.9.6 1.3 1.9 2.2 3.4 2.2 1.5 0 2.8-.9 3.4-2.2 1.3.4 2.7.1 3.7-.9.9-.9 1.3-2.2 1-3.5 1.3-.6 2.2-1.9 2.2-3.4zM12 18.2c-3.4 0-6.2-2.8-6.2-6.2s2.8-6.2 6.2-6.2 6.2 2.8 6.2 6.2-2.8 6.2-6.2 6.2z" opacity=".4"/><circle cx="12" cy="12" r="3.5"/></svg>`;

const streamlit = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="22" height="22" aria-hidden="true"><path d="M11 3v8.5L4 18h7v-3l8-7.5V3h-8z" opacity=".3"/><path d="M11 3v8.5L4 18h7v-3l8-7.5V3h-8zm0 0"/></svg>`;

const pytest = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="22" height="22" aria-hidden="true"><circle cx="12" cy="12" r="10" fill="none" stroke="currentColor" stroke-width="1.5" opacity=".3"/><text x="12" y="16" text-anchor="middle" font-family="ui-monospace, monospace" font-weight="700" font-size="8">py</text></svg>`;

export const TECH_STACK: TechItem[] = [
  {
    name: 'Python',
    category: 'Backend',
    url: 'https://www.python.org',
    note: 'Linguagem principal',
    icon: python,
  },
  {
    name: 'Django',
    category: 'Backend',
    url: 'https://www.djangoproject.com',
    note: 'Framework web fullstack',
    icon: django,
  },
  {
    name: 'Django REST Framework',
    category: 'Backend',
    url: 'https://www.django-rest-framework.org',
    note: 'Construção de APIs',
    icon: drf,
  },
  {
    name: 'LangChain',
    category: 'Backend',
    url: 'https://www.langchain.com',
    note: 'Orquestração de agentes',
    icon: langchain,
  },
  {
    name: 'OpenAI API',
    category: 'Backend',
    url: 'https://platform.openai.com',
    note: 'LLM provider',
    icon: openai,
  },
  {
    name: 'Streamlit',
    category: 'Backend',
    url: 'https://streamlit.io',
    note: 'Apps de dados rápidos',
    icon: streamlit,
  },
  {
    name: 'PostgreSQL',
    category: 'Database',
    url: 'https://www.postgresql.org',
    note: 'Banco relacional',
    icon: postgres,
  },
  {
    name: 'Docker',
    category: 'DevOps',
    url: 'https://www.docker.com',
    note: 'Containerização',
    icon: docker,
  },
  {
    name: 'Nginx',
    category: 'DevOps',
    url: 'https://nginx.org',
    note: 'Reverse proxy & static',
    icon: nginx,
  },
  {
    name: 'Linux',
    category: 'DevOps',
    url: 'https://www.linux.org',
    note: 'Ambiente de produção',
    icon: linux,
  },
  {
    name: 'Git',
    category: 'Ferramentas',
    url: 'https://git-scm.com',
    note: 'Versionamento',
    icon: git,
  },
  {
    name: 'Postman',
    category: 'Ferramentas',
    url: 'https://www.postman.com',
    note: 'Teste de APIs',
    icon: postman,
  },
  {
    name: 'pytest',
    category: 'Ferramentas',
    url: 'https://docs.pytest.org',
    note: 'Testes automatizados',
    icon: pytest,
  },
];
