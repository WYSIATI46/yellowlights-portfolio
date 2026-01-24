
import React, { useState, useEffect, useRef } from 'react';
import { geminiService } from '../services/geminiService';
import { DecisionAnalysis } from '../types';
import { 
  Zap, 
  ArrowRight, 
  RotateCcw, 
  Brain, 
  ShieldAlert, 
  Info, 
  Loader2,
  Scan,
  Compass,
  Sparkles
} from 'lucide-react';

const DecisionLab: React.FC = () => {
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [analysis, setAnalysis] = useState<DecisionAnalysis | null>(null);
  const [error, setError] = useState<string | null>(null);
  const resultsRef = useRef<HTMLDivElement>(null);

  const handleAnalyze = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    setLoading(true);
    setError(null);
    try {
      const result = await geminiService.analyzeDecision(input);
      setAnalysis(result);
    } catch (err) {
      setError("Diagnostic Interface Interrupted: Neural processing encountered unexpected turbulence.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (analysis && resultsRef.current) {
      resultsRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, [analysis]);

  return (
    <section className="py-40 px-6 sm:px-12 bg-[#f4f2ee] relative border-y border-black/5">
      <div className="max-w-4xl mx-auto">
        {/* Unit Header */}
        <div className="flex flex-col items-center text-center mb-24">
          <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-2xl bg-black text-white mono text-[11px] uppercase tracking-[0.3em] mb-12 shadow-lg shadow-black/10">
            <Scan size={14} className="text-yellow-500 animate-pulse" /> Diagnostic Suite v4.0
          </div>
          <h2 className="serif text-7xl md:text-[100px] font-black italic tracking-tighter mb-10 leading-none text-black">
            Structural <br /><span className="text-zinc-300">Audit.</span>
          </h2>
          <p className="text-xl text-zinc-500 font-light leading-relaxed max-w-2xl mx-auto serif italic">
            A specialized engine to deconstruct the choice architecture behind high-stakes decisions. Expose the "hidden glass" of heuristic interference.
          </p>
        </div>

        {/* Console Interface (Light Variant) */}
        <div className={`transition-all duration-1000 ${analysis ? 'opacity-30 scale-[0.98] blur-[4px] pointer-events-none' : 'opacity-100 scale-100'}`}>
          <form onSubmit={handleAnalyze} className="relative group">
            <div className="absolute -inset-1 bg-yellow-500/20 rounded-[3rem] opacity-0 group-hover:opacity-100 transition-opacity blur-2xl"></div>
            <div className="relative bg-white border border-black/5 rounded-[3rem] overflow-hidden shadow-sm">
               <div className="flex items-center gap-2 px-10 py-5 border-b border-black/5 bg-black/[0.01]">
                 <div className="w-2 h-2 rounded-full bg-red-400"></div>
                 <div className="w-2 h-2 rounded-full bg-yellow-400"></div>
                 <div className="w-2 h-2 rounded-full bg-green-400"></div>
                 <span className="mono text-[10px] text-zinc-400 uppercase tracking-widest ml-4">NEURAL_CONSOLE_ACTIVE</span>
               </div>
               <textarea
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Awaiting decision parameters... Describe the context, the variables, and the latent friction."
                className="w-full bg-transparent p-12 min-h-[300px] focus:outline-none text-2xl serif italic placeholder:text-zinc-200 leading-relaxed text-black"
               />
               <div className="p-8 bg-black/[0.01] flex justify-end">
                <button
                  type="submit"
                  disabled={loading || !input.trim()}
                  className="px-12 py-6 bg-black text-white rounded-2xl font-black uppercase text-xs tracking-[0.3em] flex items-center gap-4 transition-all hover:bg-yellow-500 hover:text-black hover:shadow-xl disabled:bg-zinc-100 disabled:text-zinc-300 disabled:shadow-none"
                >
                  {loading ? (
                    <Loader2 className="animate-spin" size={18} />
                  ) : (
                    <>Run Full Diagnostic <ArrowRight size={18} /></>
                  )}
                </button>
               </div>
            </div>
          </form>
        </div>

        {/* Status Error */}
        {error && (
          <div className="mt-12 p-8 rounded-[2rem] bg-red-50 border border-red-100 flex items-center gap-6 text-red-600 text-sm italic font-medium serif">
            <div className="w-10 h-10 rounded-full bg-red-100 flex items-center justify-center shrink-0">
               <ShieldAlert size={18} />
            </div>
            {error}
          </div>
        )}

        {/* Refracted Output (Light Variant) */}
        <div ref={resultsRef} className="mt-20">
          {analysis && (
            <div className="animate-in fade-in slide-in-from-bottom-24 duration-1000 space-y-16">
              <div className="relative glass-card p-16 rounded-[4rem] border-black/5 shadow-xl shadow-black/5">
                <div className="absolute top-12 right-16 text-black/[0.01]">
                  <Compass size={200} />
                </div>
                
                <div className="mb-24 max-w-3xl">
                  <div className="flex items-center gap-3 mb-6">
                    <Sparkles size={16} className="text-yellow-600" />
                    <span className="mono text-[11px] uppercase font-black text-yellow-600 tracking-[0.5em]">The Refracted Lens</span>
                  </div>
                  <h3 className="serif text-5xl md:text-7xl font-black italic leading-tight text-black text-gradient">
                    "{analysis.perspective}"
                  </h3>
                </div>

                <div className="grid md:grid-cols-3 gap-12">
                  {analysis.biases.map((bias, idx) => (
                    <div key={idx} className="space-y-8 relative group">
                      <div className="flex items-center gap-5">
                        <div className="w-12 h-12 rounded-2xl bg-black/5 border border-black/5 flex items-center justify-center text-[11px] font-black group-hover:bg-yellow-500 group-hover:text-black transition-all">
                          0{idx + 1}
                        </div>
                        <h4 className="font-black text-xs uppercase tracking-[0.2em] text-zinc-900">{bias.biasName}</h4>
                      </div>
                      <p className="text-lg text-zinc-500 italic leading-relaxed serif font-light">
                        {bias.explanation}
                      </p>
                      <div className="pt-8 border-t border-black/5">
                        <span className="mono text-[9px] font-black text-zinc-300 uppercase block mb-3 tracking-widest">Correction Protocol</span>
                        <p className="text-[13px] font-black uppercase text-yellow-600 tracking-wider leading-snug">
                          {bias.mitigation}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-32 pt-20 border-t border-black/5 flex flex-col lg:flex-row items-center gap-16 -mx-16 -mb-16 p-20 bg-yellow-500 text-black rounded-b-[4rem]">
                  <div className="w-24 h-24 bg-black flex items-center justify-center rounded-[2.5rem] shadow-2xl shrink-0">
                    <Zap size={44} className="text-yellow-500" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-[2px] bg-black"></div>
                      <span className="mono text-[12px] uppercase font-black tracking-[0.4em] text-black/60">Final Stabilization // Yellow Light</span>
                    </div>
                    <p className="text-3xl md:text-4xl font-black leading-tight italic serif">
                      {analysis.recommendation}
                    </p>
                  </div>
                  <button 
                    onClick={() => { setAnalysis(null); setInput(''); }}
                    className="flex items-center gap-4 text-xs font-black uppercase tracking-[0.3em] text-black/50 hover:text-black transition-colors group py-4 px-10 rounded-full border-2 border-black/10 hover:border-black"
                  >
                    <RotateCcw size={20} className="group-hover:rotate-[-90deg] transition-transform" /> Reset Suite
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default DecisionLab;
