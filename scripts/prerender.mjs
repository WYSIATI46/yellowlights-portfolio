import { mkdir, readFile, writeFile } from 'node:fs/promises';
import { createServer } from 'vite';

// Vite already understands TSX and ?raw Markdown imports. Reuse it at build
// time, without running a browser, an HTTP server, or any external service.
const vite = await createServer({
  server: { middlewareMode: true, hmr: false, ws: false },
  optimizeDeps: { noDiscovery: true, include: [] },
  ssr: {
    noExternal: ['react-router-dom', 'react-router'],
    resolve: { conditions: ['module', 'import'] },
  },
  appType: 'custom',
});
try {
  const { ARTICLES, BLOG_POSTS, PROJECTS, render, renderSeo, SITE_URL, escapeHtml } = await vite.ssrLoadModule('/prerender.tsx');
  const slugs = new Set(ARTICLES.map(article => article.slug));
  if (slugs.size !== ARTICLES.length || ARTICLES.some(article => !/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(article.slug))) {
    throw new Error('Article slugs must be unique and URL-safe.');
  }
  if (BLOG_POSTS.some(post => !slugs.has(post.slug))) throw new Error('Featured article missing from registry.');
  const template = await readFile('dist/index.html', 'utf8');
  if (!template.includes('<div id="root"></div>') || !/<title>[^<]*<\/title>/.test(template)) {
    throw new Error('Prerender template is missing its root or title placeholder.');
  }
  const routes = ['/', ...ARTICLES.map(article => `/journal/${article.slug}`)];
  // The public artifacts belong in discovery, but their HTML is owned by the
  // separate apps behind Vercel proxies. Never generate portfolio HTML there.
  const artifactPaths = PROJECTS.flatMap(project => {
    if (!project.link) return [];
    const url = new URL(project.link);
    return ['yellowlights.ai', 'www.yellowlights.ai'].includes(url.hostname) ? [url.pathname] : [];
  });
  const sitemapPaths = [...new Set([...routes, ...artifactPaths])];
  const page = path => template
    .replace(/<title>[^<]*<\/title>/, () => renderSeo(path))
    .replace('<div id="root"></div>', () => `<div id="root" data-prerendered>${render(path)}</div>`);
  for (const path of routes) {
    const directory = path === '/' ? 'dist' : `dist${path}`;
    await mkdir(directory, { recursive: true });
    await writeFile(`${directory}/index.html`, page(path));
  }
  await writeFile('dist/404.html', page('/journal/__not-found__'));
  await writeFile('dist/sitemap.xml', `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${sitemapPaths.map(path => `  <url><loc>${escapeHtml(SITE_URL + path)}</loc></url>`).join('\n')}\n</urlset>\n`);
  await writeFile('dist/robots.txt', `User-agent: *\nAllow: /\n\nSitemap: ${SITE_URL}/sitemap.xml\n`);
  console.log(`Prerendered ${routes.length} pages; generated ${sitemapPaths.length}-URL sitemap.xml and robots.txt.`);
} finally {
  await vite.close();
}
