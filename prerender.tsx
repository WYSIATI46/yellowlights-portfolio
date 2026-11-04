import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import SiteRoutes from './SiteRoutes';
export { ARTICLES } from './articles';
export { BLOG_POSTS, PROJECTS } from './constants';
export { SITE_URL, escapeHtml, renderSeo } from './seo';

export function render(path: string) {
  return renderToString(<React.StrictMode><StaticRouter location={path}><SiteRoutes /></StaticRouter></React.StrictMode>);
}
