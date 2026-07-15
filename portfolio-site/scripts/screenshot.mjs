// Helper para gerar screenshots de preview (light e dark)
import { execSync } from 'node:child_process';
import { cpSync, readFileSync, writeFileSync, mkdirSync, existsSync, rmSync } from 'node:fs';
import { resolve, join } from 'node:path';
import http from 'node:http';

const EDGE = 'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe';
const DIST = resolve('./dist');
const PREVIEWS = resolve('./previews');
const URL = 4322;

if (existsSync(PREVIEWS)) rmSync(PREVIEWS, { recursive: true, force: true });
mkdirSync(PREVIEWS, { recursive: true });

// Copia o dist inteiro para previews/staging
cpSync(DIST, join(PREVIEWS, 'staging'), { recursive: true });

function patchIndex(theme) {
  const src = readFileSync(join(PREVIEWS, 'staging', 'index.html'), 'utf8');
  const htmlClass = theme === 'dark' ? 'dark scroll-smooth' : 'scroll-smooth';
  const patched = src
    .replace(
      '<html lang="pt-BR" class="scroll-smooth">',
      `<html lang="pt-BR" class="${htmlClass}">`
    )
    .replace(
      "const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;",
      `const prefersDark = ${theme === 'dark' ? 'true' : 'false'};`
    );
  const target = resolve(PREVIEWS, `staging-${theme}`, 'index.html');
  mkdirSync(resolve(PREVIEWS, `staging-${theme}`), { recursive: true });
  // Copia o dist todo, depois sobrescreve o index
  cpSync(DIST, resolve(PREVIEWS, `staging-${theme}`), { recursive: true });
  writeFileSync(target, patched);
  return `http://127.0.0.1:${URL}/staging-${theme}/index.html`;
}

function exec(cmd) {
  try { execSync(cmd, { stdio: 'ignore', timeout: 30000 }); } catch {}
}

function shoot(url, file, w, h) {
  const out = join(PREVIEWS, file);
  console.log(`→ ${file}`);
  exec(`"${EDGE}" --headless=new --disable-gpu --no-sandbox --hide-scrollbars --window-size=${w},${h} --screenshot=${out} --virtual-time-budget=6000 "${url}"`);
}

// Servidor
const mime = { '.html': 'text/html', '.css': 'text/css', '.js': 'application/javascript', '.svg': 'image/svg+xml', '.png': 'image/png', '.webp': 'image/webp' };
const server = http.createServer((req, res) => {
  const url = req.url.split('?')[0];
  const full = join(PREVIEWS, url);
  if (!existsSync(full)) { res.statusCode = 404; res.end(); return; }
  res.setHeader('Content-Type', mime[full.split('.').pop()] || 'application/octet-stream');
  res.end(readFileSync(full));
});
await new Promise((r) => server.listen(URL, '127.0.0.1', r));

const lightUrl = patchIndex('light');
const darkUrl = patchIndex('dark');

shoot(lightUrl, 'home-light-viewport.png', 1440, 900);
shoot(lightUrl, 'home-light-full.png', 1440, 5400);
shoot(darkUrl, 'home-dark-viewport.png', 1440, 900);
shoot(darkUrl, 'home-dark-full.png', 1440, 5400);
shoot(lightUrl, 'home-mobile.png', 390, 2400);

// Case detail
shoot(lightUrl.replace('index.html', 'projects/task-manager-api/index.html'), 'case-light.png', 1440, 1400);
shoot(darkUrl.replace('index.html', 'projects/task-manager-api/index.html'), 'case-dark.png', 1440, 1400);

server.close();
console.log('✓ Concluído');
