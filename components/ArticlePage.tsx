import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, Brain } from 'lucide-react';
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

  // Simple markdown-to-JSX renderer for the article content
  const renderContent = (content: string) => {
    return content.split('\n\n').map((block, i) => {
      if (block.startsWith('## ')) {
        return <h2 key={i} className="serif text-3xl font-black italic mt-16 mb-6 text-black">{block.replace('## ', '')}</h2>;
      }
      if (block.startsWith('**') && block.endsWith('**')) {
        return <p key={i} className="font-bold text-black mb-4">{block.replace(/\*\*/g, '')}</p>;
      }
      // Handle bullet lists
      if (block.includes('\n- ')) {
        const items = block.split('\n').filter(l => l.startsWith('- '));
        return (
          <ul key={i} className="list-disc pl-6 space-y-2 mb-6 text-zinc-600">
            {items.map((item, j) => {
              const text = item.replace('- ', '');
              // Handle bold within list items
              const parts = text.split(/\*\*(.*?)\*\*/g);
              return (
                <li key={j} className="leading-relaxed">
                  {parts.map((part, k) => k % 2 === 1 ? <strong key={k} className="text-black">{part}</strong> : part)}
                </li>
              );
            })}
          </ul>
        );
      }
      // Regular paragraph — handle bold and italic inline
      const formatted = block
        .replace(/\*\*\*(.*?)\*\*\*/g, '<strong><em>$1</em></strong>')
        .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
        .replace(/\*(.*?)\*/g, '<em>$1</em>');
      return (
        <p
          key={i}
          className="text-lg font-light text-zinc-600 leading-relaxed mb-6 serif"
          dangerouslySetInnerHTML={{ __html: formatted }}
        />
      );
    });
  };

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

      {/* Article Body */}
      <article className="px-6 sm:px-12 pb-40">
        <div className="max-w-3xl mx-auto">
          {renderContent(article.content)}
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
