import assert from 'node:assert/strict';
import { createHash } from 'node:crypto';
import { createServer } from 'vite';

// Run with: node scripts/check-journal.mjs
const expectedOrder = [
  'relevance-an-unfinished-education', 'yellow-light', 'architects-of-judgment',
  'soldier-mapped-mind', 'mind-behind-mirror', 'two-minds-one-idea',
  'rabble-rouser-thaler', 'most-cited-man-sunstein', 'foxes-hedgehogs',
  'failure-to-disagree', 'michael-lewis', 'running-old-software', 'bias-always-bug',
  'confidence-not-accuracy', 'noise-not-hearing', 'pre-decision', 'speed-trap',
  'systemic-heuristics', 'decision-hygiene', 'biased-oracle',
];
const server = await createServer({ server: { middlewareMode: true, hmr: false, watch: null } });
try {
  const { ARTICLES } = await server.ssrLoadModule('/articles.ts');
  const { BLOG_POSTS } = await server.ssrLoadModule('/constants.tsx');
  assert.deepEqual(BLOG_POSTS.map(({ slug }) => slug), expectedOrder);
  assert.equal(ARTICLES.length, 21);
  for (const registry of [ARTICLES, BLOG_POSTS]) {
    for (const key of ['id', 'slug']) {
      assert.equal(new Set(registry.map(item => item[key])).size, registry.length, `Unique ${key}`);
    }
  }
  const normalize = text => text.toLowerCase().replace(/[^\p{L}\p{N}]/gu, '');
  for (const article of ARTICLES) {
    const card = BLOG_POSTS.find(({ slug }) => slug === article.slug);
    if (card) {
      for (const key of ['title', 'date', 'readTime']) assert.equal(card[key], article[key], `${article.slug}: ${key}`);
    } else assert.equal(article.slug, 'designing-second-thought');
    assert.ok(article.audio?.url.startsWith('https://v6sltbivoauquric.public.blob.vercel-storage.com/'));
    assert.ok(article.audio.durationSeconds > 0);
    assert.equal(article.audio.downloadUrl, `${article.audio.url}?download=1`);
    const blocks = article.content.trim().split(/\n\s*\n/);
    assert.match(blocks.shift(), /^# [^\n]+$/);
    assert.equal(blocks.filter(block => /^# /.test(block)).length, 0, `${article.slug}: body title`);
    assert.notEqual(normalize(blocks[0]), normalize(article.subtitle), `${article.slug}: repeated subtitle`);
    // Two old ledes paraphrased their metadata rather than matching it exactly.
    if (['systemic-heuristics', 'designing-second-thought'].includes(article.slug)) {
      assert.equal(blocks[0], '***', `${article.slug}: body must start after the removed subtitle`);
    }
    if (article.slug === 'mind-behind-mirror') assert.match(blocks[0], /^## /);
  }
  const biography = ARTICLES.find(({ slug }) => slug === expectedOrder[0]);
  assert.equal(createHash('sha256').update(biography.content).digest('hex'), '01552f57b7a6465c6ba97ea456fc50a4dea77c2149acef827d36a76e20795d5b');
  assert.equal(biography.readTime, `${Math.ceil(biography.content.trim().split(/\s+/).length / 200)} min read`);
  assert.deepEqual(BLOG_POSTS[0].tags, ['HISTORY', 'BEHAVIORAL']);
  assert.equal(BLOG_POSTS[0].excerpt, biography.subtitle);
  assert.equal(biography.audio.durationSeconds, 1404.087438);
  console.log('PASS: 20 ordered cards, 21 routes, unique IDs/slugs, matching metadata, subtitles, audio metadata, verbatim biography.');
} finally {
  await server.close();
}
