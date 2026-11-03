import { ARTICLES } from './articles';

export const SITE_URL = 'https://www.yellowlights.ai';

// Only use verified registry fields. Month-only display dates are not exact
// publication timestamps; no fabricated dates, images, or sitemap lastmod values.
export function getSeo(pathname: string) {
  const path = pathname.replace(/\/$/, '') || '/';
  const article = ARTICLES.find(a => path === `/journal/${a.slug}`);
  const isHome = path === '/';
  return {
    title: article ? `${article.title} | Yellowlights.ai Journal`
      : isHome ? 'Trace Hancock | Prismatic Decision Science' : 'Article not found | Yellowlights.ai',
    description: article?.subtitle ?? (isHome
      ? 'Explore behavioral and decision science with Trace Hancock: interactive artifacts and Journal investigations into judgment, choice, and cognitive bias.'
      : 'The requested Journal article could not be found.'),
    canonical: article ? `${SITE_URL}/journal/${article.slug}` : isHome ? `${SITE_URL}/` : undefined,
    article,
  };
}

export function escapeHtml(value: string) {
  return value.replace(/[&<>"']/g, character => ({
    '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;',
  })[character]!);
}

export function renderSeo(pathname: string) {
  const { title, description, canonical, article } = getSeo(pathname);
  const meta = (attribute: 'name' | 'property', key: string, value: string) =>
    `<meta data-seo ${attribute}="${key}" content="${escapeHtml(value)}">`;
  const tags = [
    `<title data-seo>${escapeHtml(title)}</title>`,
    meta('name', 'description', description),
    meta('property', 'og:title', title),
    meta('property', 'og:description', description),
    meta('property', 'og:type', article ? 'article' : 'website'),
    meta('property', 'og:site_name', 'Yellowlights.ai'),
    meta('property', 'og:locale', 'en_US'),
    meta('name', 'twitter:card', 'summary'),
    meta('name', 'twitter:title', title),
    meta('name', 'twitter:description', description),
  ];
  if (canonical) {
    tags.push(`<link data-seo rel="canonical" href="${canonical}">`, meta('property', 'og:url', canonical));
  } else {
    tags.push(meta('name', 'robots', 'noindex'));
  }
  if (article) {
    const structuredData = {
      '@context': 'https://schema.org',
      '@type': 'BlogPosting',
      '@id': `${canonical}#article`,
      headline: article.title,
      description,
      url: canonical,
      mainEntityOfPage: { '@type': 'WebPage', '@id': canonical },
      author: { '@type': 'Person', name: 'Trace Hancock', url: `${SITE_URL}/` },
      publisher: { '@type': 'Organization', name: 'Yellowlights.ai', url: `${SITE_URL}/` },
      inLanguage: 'en',
    };
    tags.push(`<script data-seo type="application/ld+json">${JSON.stringify(structuredData).replace(/</g, '\\u003c')}</script>`);
  }
  return tags.join('\n');
}
