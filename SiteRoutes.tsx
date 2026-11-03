import React, { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import App from './App';
import ArticlePage from './components/ArticlePage';
import { renderSeo } from './seo';

function RouteMetadata() {
  const { pathname } = useLocation();
  useEffect(() => {
    // Keep client navigation and browser back/forward consistent with static HTML.
    const head = new DOMParser().parseFromString(renderSeo(pathname), 'text/html').head;
    document.head.querySelectorAll('[data-seo], title').forEach(node => node.remove());
    document.head.append(...Array.from(head.childNodes));
  }, [pathname]);
  return null;
}

export default function SiteRoutes() {
  return <>
    <RouteMetadata />
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/journal/:slug" element={<ArticlePage />} />
    </Routes>
  </>;
}
