"""Check built crawler responses, or an exact deployment via SEO_BASE_URL.

Run after npm run build: python3 scripts/check-seo.py
For a protected preview, SEO_BASE_URL may include its temporary share query.
"""
import json
import os
import re
from html.parser import HTMLParser
from http.cookiejar import CookieJar
from pathlib import Path
from urllib.error import HTTPError
from urllib.parse import urlsplit, urlunsplit
from urllib.request import HTTPCookieProcessor, build_opener
import xml.etree.ElementTree as ET

ORIGIN = 'https://www.yellowlights.ai'
BASE = os.environ.get('SEO_BASE_URL')
http = build_opener(HTTPCookieProcessor(CookieJar()))


def fetch(path):
    if not BASE:
        file = 'dist/index.html' if path == '/' else (
            f'dist{path}/index.html' if path.startswith('/journal/') else f'dist{path}')
        return Path(file).read_text(), ''
    base = urlsplit(BASE)
    url = urlunsplit((base.scheme, base.netloc, path, base.query, ''))
    with http.open(url, timeout=30) as response:
        assert response.status == 200, path
        return response.read().decode(), response.headers.get_content_type()


class Page(HTMLParser):
    def __init__(self, text):
        super().__init__()
        self.tags = []
        self.texts = []
        self.schema = []
        self.in_schema = False
        self.feed(text)

    def handle_starttag(self, tag, attrs):
        attrs = dict(attrs)
        self.tags.append((tag, attrs))
        self.in_schema = tag == 'script' and attrs.get('type') == 'application/ld+json'

    def handle_endtag(self, tag):
        if tag == 'script':
            self.in_schema = False

    def handle_data(self, data):
        if self.in_schema:
            self.schema.append(json.loads(data))
        self.texts.append(data)

    def attrs(self, tag, key, value):
        return [attrs for name, attrs in self.tags if name == tag and attrs.get(key) == value]


sitemap, mime = fetch('/sitemap.xml')
assert not BASE or mime == 'application/xml', mime
urls = [node.text for node in ET.fromstring(sitemap).findall('{*}url/{*}loc')]
slugs = re.findall(r'\bslug:\s*[\'\"]([^\'\"]+)', Path('articles.ts').read_text())
expected = [ORIGIN + '/', *[f'{ORIGIN}/journal/{slug}' for slug in slugs]]
assert len(urls) == len(set(urls)) and set(urls) == set(expected)
robots, mime = fetch('/robots.txt')
assert not BASE or mime == 'text/plain', mime
assert 'User-agent: *\nAllow: /' in robots
assert f'Sitemap: {ORIGIN}/sitemap.xml' in robots
descriptions = set()
titles = set()
audio_count = 0
for url in urls:
    path = urlsplit(url).path
    html, mime = fetch(path)
    assert not BASE or mime == 'text/html', (path, mime)
    page = Page(html)
    assert len([tag for tag, _ in page.tags if tag == 'title']) == 1, path
    title = re.search(r'<title[^>]*>(.*?)</title>', html).group(1)
    assert title not in titles, path
    titles.add(title)
    description, = page.attrs('meta', 'name', 'description')
    assert description['content'] and description['content'] not in descriptions, path
    descriptions.add(description['content'])
    canonical, = page.attrs('link', 'rel', 'canonical')
    assert canonical['href'] == url, path
    og_url, = page.attrs('meta', 'property', 'og:url')
    assert og_url['content'] == url, path
    assert not page.attrs('meta', 'name', 'robots'), path
    assert len([tag for tag, _ in page.tags if tag == 'h1']) == 1, path
    if path != '/':
        schema, = page.schema
        assert schema['@type'] == 'BlogPosting' and schema['url'] == url, path
        assert schema['author']['name'] == 'Trace Hancock', path
        assert 'datePublished' not in schema and 'dateModified' not in schema
        assert any(tag == 'article' for tag, _ in page.tags), path
        assert len(' '.join(page.texts)) > 3000, path
        audio, = [attrs for tag, attrs in page.tags if tag == 'audio']
        assert audio['src'].startswith('https://') and audio['src'].endswith('.m4a'), path
        audio_count += 1
    else:
        links = {attrs.get('href') for tag, attrs in page.tags if tag == 'a'}
        featured = re.findall(r'\bslug:\s*[\'\"]([^\'\"]+)', Path('constants.tsx').read_text())
        assert all(f'/journal/{slug}' in links for slug in featured)
        assert len([href for href in links if href and 'yellowlights.ai/' in href]) >= 18

if BASE:
    try:
        fetch('/journal/this-article-does-not-exist')
        raise AssertionError('Unknown Journal URL returned 200')
    except HTTPError as error:
        assert error.code == 404
        assert 'noindex' in error.read().decode()

print(f'PASS: {len(urls)} pages; {audio_count} article bodies/audio sources; unique metadata, canonical URLs, JSON-LD, sitemap and robots' + (' HTTP content types and Journal 404.' if BASE else '.'))
