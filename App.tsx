
import React, { useState, useEffect } from 'react';
import { 
  ArrowRight, 
  ArrowUpRight, 
  Menu, 
  X, 
  Github, 
  Twitter, 
  Linkedin, 
  Hexagon, 
  Layers, 
  Fingerprint, 
  Command, 
  Brain,
  Activity,
  ArrowDown
} from 'lucide-react';
import { PROJECTS, BLOG_POSTS } from './constants';
import DecisionLab from './components/DecisionLab';

const App: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen">
      {/* Dynamic Header */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-500 px-6 sm:px-12 ${scrolled ? 'py-4' : 'py-10'}`}>
        <div className={`max-w-7xl mx-auto flex justify-between items-center transition-all ${scrolled ? 'bg-white/70 backdrop-blur-xl border border-black/5 rounded-full px-8 py-3 shadow-sm' : ''}`}>
          <div className="flex items-center gap-4 cursor-pointer" onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}>
            <div className="w-10 h-10 bg-black text-white flex items-center justify-center font-black rounded-xl">
              T
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-lg tracking-tighter uppercase leading-none">Trace Hancock</span>
              <span className="mono text-[8px] font-bold text-zinc-400 uppercase tracking-[0.3em]">Decision Architect</span>
            </div>
          </div>

          <div className="hidden md:flex items-center gap-12">
            {['Laboratory', 'Archive', 'Journal', 'Inquiry'].map((item) => (
              <a 
                key={item} 
                href={`#${item.toLowerCase()}`} 
                className="text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-500 hover:text-black transition-colors"
              >
                {item}
              </a>
            ))}
            <div className="w-px h-5 bg-black/10"></div>
            <a href="mailto:trace@yellowlights.ai" className="px-6 py-2 bg-black/5 border border-black/10 rounded-full text-[10px] font-bold uppercase tracking-widest hover:bg-black hover:text-white transition-all">
              Initiate Contact
            </a>
          </div>

          <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="md:hidden text-black">
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Hero: The Manifesto */}
      <header className="relative pt-48 pb-32 px-6 sm:px-12 overflow-hidden">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid lg:grid-cols-12 gap-16 items-center">
            <div className="lg:col-span-8">
              <div className="flex items-center gap-3 mb-12">
                <div className="w-8 h-px bg-yellow-500"></div>
                <span className="mono text-[10px] font-bold text-yellow-600 uppercase tracking-[0.5em]">Cognitive Science // Structural Analytics</span>
              </div>
              <h1 className="serif text-[clamp(3.5rem,9vw,9rem)] font-black leading-[0.85] tracking-tight mb-16 italic text-gradient">
                Refracting <br /> 
                <span className="text-zinc-400">Choice.</span>
              </h1>
              <div className="max-w-2xl pl-12 border-l-2 border-black/5">
                <p className="text-2xl md:text-3xl font-light text-zinc-500 leading-relaxed serif italic">
                  Mapping the invisible architecture of judgment. Trace Hancock builds analytical frameworks to stabilize high-stakes decision cycles.
                </p>
              </div>
              
              <div className="mt-20 flex flex-wrap gap-10 items-center">
                <a href="#laboratory" className="px-12 py-6 bg-black text-white font-black uppercase text-xs tracking-[0.3em] rounded-2xl hover:bg-yellow-500 hover:text-black transition-all transform hover:-translate-y-1">
                  Enter Laboratory
                </a>
                <a href="#archive" className="flex items-center gap-3 text-[10px] font-bold uppercase tracking-[0.3em] text-zinc-400 hover:text-black transition-all group">
                  Browse Artifacts <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>

            <div className="lg:col-span-4 hidden lg:block">
              <div className="relative glass-card p-12 rounded-[3rem] animate-float">
                <Hexagon size={64} className="text-yellow-500/30 mb-10" />
                <h3 className="serif text-3xl italic font-black mb-6">Structural <br />Insights.</h3>
                <div className="space-y-6 pt-10 border-t border-black/5">
                  <div className="flex items-center justify-between group cursor-default">
                    <span className="text-[10px] font-bold uppercase tracking-widest text-zinc-400 group-hover:text-black transition-colors">Bias Diagnostics</span>
                    <Activity size={12} className="text-zinc-200" />
                  </div>
                  <div className="flex items-center justify-between group cursor-default">
                    <span className="text-[10px] font-bold uppercase tracking-widest text-zinc-400 group-hover:text-black transition-colors">Choice UX Audits</span>
                    <Fingerprint size={12} className="text-zinc-200" />
                  </div>
                  <div className="flex items-center justify-between group cursor-default">
                    <span className="text-[10px] font-bold uppercase tracking-widest text-zinc-400 group-hover:text-black transition-colors">Logic Stabilization</span>
                    <Command size={12} className="text-zinc-200" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Subtle Background Elements */}
        <div className="absolute top-20 right-[-100px] w-[500px] h-[500px] bg-black/[0.02] rounded-full blur-[120px] pointer-events-none"></div>
        <div className="absolute bottom-[-100px] left-[-100px] w-[400px] h-[400px] bg-yellow-500/[0.03] rounded-full blur-[100px] pointer-events-none"></div>
      </header>

      {/* Laboratory: AI Diagnostic Engine */}
      <section id="laboratory" className="scroll-mt-32">
        <DecisionLab />
      </section>

      {/* Archive: Specimen Grid */}
      <section id="archive" className="py-40 px-6 sm:px-12 bg-black/[0.01] border-y border-black/5 scroll-mt-24">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-24 gap-12">
            <div>
              <span className="mono text-[10px] font-bold text-yellow-600 uppercase tracking-[0.4em] mb-4 block">Archive Series // 2024-2025</span>
              <h2 className="serif text-7xl font-black italic tracking-tighter">Tactile <span className="text-zinc-400">Artifacts.</span></h2>
            </div>
            <div className="max-w-sm text-sm text-zinc-400 leading-relaxed font-light italic">
              "Every decision leaves a trace. We document the path from heuristic to clarity."
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {PROJECTS.map((project, idx) => (
              <div key={project.id} className="glass-card p-12 rounded-[2.5rem] flex flex-col h-full group">
                <div className="mb-12 flex justify-between items-start">
                  <div className="w-14 h-14 bg-black/[0.02] rounded-2xl flex items-center justify-center transition-all group-hover:bg-yellow-500/10 group-hover:rotate-12">
                    <Layers size={24} className="text-zinc-300 group-hover:text-yellow-600" />
                  </div>
                  <span className="mono text-5xl font-black text-black/[0.03] group-hover:text-black/[0.08]">0{idx + 1}</span>
                </div>
                <h3 className="serif text-3xl font-black italic mb-6 group-hover:text-black transition-colors">
                  {project.title.replace('→', '')}
                </h3>
                <p className="text-sm font-light text-zinc-500 leading-relaxed mb-12 flex-grow">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 pt-8 border-t border-black/5">
                  {project.tags.map(tag => (
                    <span key={tag} className="px-4 py-1.5 rounded-full bg-black/5 text-[9px] font-bold uppercase tracking-widest text-zinc-400">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Journal: Intellectual Dispatches */}
      <section id="journal" className="py-40 px-6 sm:px-12 scroll-mt-24">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-32">
            <Brain className="mx-auto mb-10 text-yellow-600" size={40} />
            <h2 className="serif text-7xl font-black italic tracking-tighter mb-8">Neural Logs.</h2>
            <p className="text-xl font-light italic text-zinc-500 leading-relaxed serif max-w-2xl mx-auto">
              Investigative threads exploring cognitive economics and the mechanics of modern perception.
            </p>
          </div>

          <div className="space-y-6">
            {BLOG_POSTS.map((post) => (
              <div key={post.id} className="glass-card p-12 rounded-[3rem] group cursor-pointer flex flex-col md:flex-row md:items-center justify-between gap-12 hover:bg-black/[0.01]">
                <div className="flex-1">
                  <div className="flex items-center gap-4 text-[10px] mono font-bold uppercase tracking-widest text-zinc-400 mb-6">
                    <span className="text-yellow-600">{post.date}</span>
                    <div className="w-1.5 h-1.5 rounded-full bg-black/5"></div>
                    <span>{post.readTime}</span>
                  </div>
                  <h3 className="serif text-4xl font-black italic mb-6 group-hover:text-black transition-colors">{post.title}</h3>
                  <p className="text-lg font-light text-zinc-500 serif italic line-clamp-2 leading-relaxed">
                    {post.excerpt}
                  </p>
                </div>
                <div className="w-16 h-16 rounded-full border border-black/10 flex items-center justify-center group-hover:bg-black group-hover:text-white transition-all shrink-0">
                  <ArrowUpRight size={24} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Inquiry: The Closing Note */}
      <footer id="inquiry" className="pt-48 pb-24 px-6 sm:px-12 border-t border-black/5 bg-black/[0.01]">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-32 items-start mb-48">
            <div className="space-y-16">
              <h2 className="serif text-[clamp(4rem,7vw,10rem)] font-black italic leading-[0.8] tracking-tighter">
                Refining <br /> the <span className="text-yellow-600">Lens.</span>
              </h2>
              <div className="space-y-10 text-2xl font-light italic leading-relaxed text-zinc-500 serif">
                <p>
                  Trace Hancock is a decision consultant and analytical scientist specializing in cognitive stabilization.
                </p>
                <p>
                  He deconstructs high-stakes choice architecture into structural frameworks, helping organizations navigate the boundary between intuition and data.
                </p>
              </div>
            </div>

            <div className="space-y-12">
              <div className="p-16 rounded-[4rem] glass-card relative overflow-hidden group shadow-none border-black/5">
                <Fingerprint size={120} className="absolute -bottom-10 -right-10 text-black/[0.02] group-hover:text-yellow-500/10 transition-colors" />
                <h4 className="serif text-4xl font-black italic mb-12">Direct Interface.</h4>
                <div className="space-y-10">
                  <a href="mailto:trace@yellowlights.ai" className="text-3xl md:text-4xl font-black border-b border-yellow-500 pb-2 hover:bg-black hover:text-white transition-all px-2 inline-block">
                    trace@yellowlights.ai
                  </a>
                  <div className="flex gap-10 pt-4">
                    <a href="#" className="text-zinc-400 hover:text-black transition-colors cursor-pointer" title="Twitter - Coming Soon">
                      <Twitter />
                    </a>
                    <a href="https://www.linkedin.com/in/trace-hancock-3094a24/" target="_blank" rel="noopener noreferrer" className="text-zinc-400 hover:text-black transition-colors cursor-pointer">
                      <Linkedin />
                    </a>
                    <a href="https://github.com/WYSIATI46" target="_blank" rel="noopener noreferrer" className="text-zinc-400 hover:text-black transition-colors cursor-pointer">
                      <Github />
                    </a>
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-6 p-8 rounded-3xl bg-white border border-black/5">
                <div className="w-12 h-12 bg-black rounded-2xl flex items-center justify-center text-white">
                  <Activity size={24} />
                </div>
                <div>
                  <span className="mono text-[10px] uppercase font-black tracking-[0.2em] text-zinc-400">Engagement Status</span>
                  <p className="text-sm font-bold text-black">Accepting Audits Q2 2025</p>
                </div>
              </div>
            </div>
          </div>

          <div className="pt-12 border-t border-black/5 flex flex-col md:flex-row justify-between items-center gap-12 text-zinc-400 mono text-[10px] uppercase tracking-[0.4em]">
            <div className="flex items-center gap-4">
              <div className="w-2 h-2 rounded-full bg-yellow-600 pulse-dot"></div>
              <span>Operational: San Francisco, CA</span>
            </div>
            <p>© 2025 YellowLights.ai // Precision Insight</p>
            <div className="flex gap-10">
               <a href="#" className="hover:text-black transition-colors">Methods</a>
               <a href="#" className="hover:text-black transition-colors">Ethics</a>
            </div>
          </div>
        </div>
      </footer>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-[60] bg-white p-12 flex flex-col justify-center animate-in fade-in duration-300">
          <button onClick={() => setMobileMenuOpen(false)} className="absolute top-12 right-12 text-zinc-400">
            <X size={32} />
          </button>
          <div className="space-y-12">
            {['Laboratory', 'Archive', 'Journal', 'Inquiry'].map((item) => (
              <a 
                key={item} 
                href={`#${item.toLowerCase()}`} 
                onClick={() => setMobileMenuOpen(false)}
                className="block serif text-6xl font-black italic tracking-tighter text-zinc-800 hover:text-yellow-600 transition-colors"
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default App;
