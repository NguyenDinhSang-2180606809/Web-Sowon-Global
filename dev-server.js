// Server chạy thử ở máy cá nhân (thay cho `vercel dev`). Chạy: node dev-server.js
// Đọc .env, phục vụ file tĩnh, các đường dẫn /CTV /NV /ADMIN và thư mục /api.
const http = require('http');
const fs = require('fs');
const path = require('path');

// --- Nạp .env ---
try {
  for (const line of fs.readFileSync(path.join(__dirname, '.env'), 'utf8').split(/\r?\n/)) {
    const m = line.match(/^\s*([A-Za-z_][A-Za-z0-9_]*)\s*=\s*(.*?)\s*$/);
    if (m && !line.trim().startsWith('#')) process.env[m[1]] = m[2].replace(/^["']|["']$/g, '');
  }
} catch { console.warn('Không đọc được file .env'); }
if (!process.env.SUPABASE_URL || !process.env.SUPABASE_SERVICE_ROLE_KEY) {
  console.warn('CẢNH BÁO: thiếu SUPABASE_URL hoặc SUPABASE_SERVICE_ROLE_KEY trong .env');
}

const PORT = process.env.PORT || 3000;
const ROUTES = { '/ctv': '/ctv.html', '/nv': '/nv.html', '/admin': '/admin.html' };
const TYPES = {
  '.html': 'text/html; charset=utf-8', '.js': 'text/javascript; charset=utf-8',
  '.css': 'text/css; charset=utf-8', '.png': 'image/png', '.jpg': 'image/jpeg',
  '.svg': 'image/svg+xml', '.ico': 'image/x-icon', '.json': 'application/json'
};

function readBody(req) {
  return new Promise(resolve => {
    let s = '';
    req.on('data', c => (s += c));
    req.on('end', () => resolve(s));
  });
}

async function handleApi(req, res, name) {
  const file = path.join(__dirname, 'api', name + '.js');
  if (!/^[a-z0-9-]+$/i.test(name) || name.startsWith('_') || !fs.existsSync(file)) {
    res.writeHead(404, { 'Content-Type': 'application/json' });
    return res.end(JSON.stringify({ error: 'Not found' }));
  }
  delete require.cache[require.resolve(file)]; // sửa code là có hiệu lực ngay
  const raw = await readBody(req);
  let body = raw;
  try { body = raw ? JSON.parse(raw) : {}; } catch { body = {}; }
  req.body = body;
  res.status = code => { res.statusCode = code; return res; };
  res.json = obj => {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(obj));
    return res;
  };
  try { await require(file)(req, res); }
  catch (e) { console.error(e); if (!res.writableEnded) res.status(500).json({ error: 'Lỗi máy chủ' }); }
}

http.createServer(async (req, res) => {
  const url = new URL(req.url, 'http://localhost');
  let p = decodeURIComponent(url.pathname);
  if (p.startsWith('/api/')) return handleApi(req, res, p.slice(5));
  if (ROUTES[p.toLowerCase()]) p = ROUTES[p.toLowerCase()];
  if (p.endsWith('/')) p += 'index.html';
  const file = path.normalize(path.join(__dirname, p));
  const blocked = ['.env', 'api', 'supabase', 'node_modules', '.vercel', '.git'];
  const rel = path.relative(__dirname, file);
  if (rel.startsWith('..') || blocked.includes(rel.split(path.sep)[0])) {
    res.writeHead(404); return res.end('Not found');
  }
  fs.readFile(file, (err, data) => {
    if (err) { res.writeHead(404); return res.end('Not found'); }
    res.writeHead(200, { 'Content-Type': TYPES[path.extname(file)] || 'application/octet-stream' });
    res.end(data);
  });
}).listen(PORT, () => {
  console.log(`Chạy tại http://localhost:${PORT}  (thử /CTV, /NV, /ADMIN)`);
});