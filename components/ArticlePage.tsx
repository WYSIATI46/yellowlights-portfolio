import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, Brain } from 'lucide-react';
import ReactMarkdown from 'react-markdown';
import { ARTICLES } from '../articles';

const ArticlePage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const article = ARTICLES.find(a => a.slug === slug);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!article) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <p className="text-zinc-400 mb-4">Article not found.</p>
          <button onClick={() => navigate('/')} className="text-sm font-bold underline">
            Return home
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#f5f2ed]">
      {/* Nav */}
      <nav className="fixed top-0 w-full z-50 px-6 sm:px-12 py-4">
        <div className="max-w-7xl mx-auto">
          <button
            onClick={() => navigate('/')}
            className="flex items-center gap-3 text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-500 hover:text-black transition-colors bg-white/70 backdrop-blur-xl border border-black/5 rounded-full px-6 py-3"
          >
            <ArrowLeft size={12} /> Back to yellowlights.ai
          </button>
        </div>
      </nav>

      {/* Article Header */}
      <header className="pt-40 pb-16 px-6 sm:px-12">
        <div className="max-w-3xl mx-auto">
          <div className="flex items-center gap-4 text-[10px] mono font-bold uppercase tracking-widest text-zinc-400 mb-8">
            <Brain size={14} className="text-yellow-600" />
            <span className="text-yellow-600">{article.date}</span>
            <div className="w-1.5 h-1.5 rounded-full bg-black/10"></div>
            <span>{article.readTime}</span>
          </div>
          <h1 className="serif text-5xl md:text-6xl font-black italic tracking-tighter leading-tight mb-8">
            {article.title}
          </h1>
          <p className="text-xl font-light italic text-zinc-500 leading-relaxed serif border-l-2 border-yellow-500 pl-6">
            {article.subtitle}
          </p>
        </div>
      </header>

      {/* Divider */}
      <div className="max-w-3xl mx-auto px-6 sm:px-12">
        <div className="h-px bg-black/5 mb-16"></div>
      </div>

      {/* Article Body — Inter for body, Fraunces (serif) for headings */}
      <article className="px-6 sm:px-12 pb-40">
        <div className="max-w-3xl mx-auto">
          <ReactMarkdown
            components={{
              h1: () => null, // H1 is already rendered from article metadata above
              h2: ({ children }) => (
                <h2 className="serif text-3xl font-black italic mt-16 mb-6 text-black">{children}</h2>
              ),
              h3: ({ children }) => (
                <h3 className="serif text-2xl font-bold italic mt-12 mb-4 text-black">{children}</h3>
              ),
              h4: ({ children }) => (
                <h4 className="serif text-xl font-bold italic mt-10 mb-3 text-black">{children}</h4>
              ),
              p: ({ children }) => (
                <p className="text-lg font-light text-zinc-600 leading-relaxed mb-6">{children}</p>
              ),
              strong: ({ children }) => (
                <strong className="font-semibold text-black">{children}</strong>
              ),
              em: ({ children }) => (
                <em className="italic">{children}</em>
              ),
              blockquote: ({ children }) => (
                <blockquote className="border-l-2 border-yellow-500 pl-6 my-8 text-zinc-500 italic">{children}</blockquote>
              ),
              ul: ({ children }) => (
                <ul className="list-disc pl-6 space-y-2 mb-6 text-zinc-600">{children}</ul>
              ),
              ol: ({ children }) => (
                <ol className="list-decimal pl-6 space-y-2 mb-6 text-zinc-600">{children}</ol>
              ),
              li: ({ children }) => (
                <li className="text-lg font-light leading-relaxed">{children}</li>
              ),
              a: ({ href, children }) => (
                <a href={href} className="text-yellow-700 underline underline-offset-2 hover:text-black transition-colors" target="_blank" rel="noopener noreferrer">{children}</a>
              ),
              hr: () => (
                <hr className="my-12 border-black/5" />
              ),
              sup: ({ children }) => (
                <sup className="text-xs text-yellow-700 font-semibold">{children}</sup>
              ),
              code: ({ children }) => (
                <code className="mono text-sm bg-black/5 px-1.5 py-0.5 rounded">{children}</code>
              ),
            }}
          >
            {article.content}
          </ReactMarkdown>
        </div>
      </article>

      {/* Footer */}
      <div className="border-t border-black/5 py-12 px-6 sm:px-12">
        <div className="max-w-3xl mx-auto flex justify-between items-center">
          <button
            onClick={() => navigate('/')}
            className="flex items-center gap-3 text-[10px] font-bold uppercase tracking-widest text-zinc-400 hover:text-black transition-colors"
          >
            <ArrowLeft size={12} /> Return to Laboratory
          </button>
          <span className="mono text-[10px] text-zinc-300 uppercase tracking-widest">© 2026 YellowLights.ai</span>
        </div>
      </div>
    </div>
  );
};

export default ArticlePage;
