import React, { useState, useReducer, useRef, useEffect, useMemo, useCallback } from 'react';
import { geminiService } from '../services/geminiService';
import { DecisionState, Alternative, Criterion, Risk, SimulationResult } from '../types';
import {
  Zap,
  ArrowRight,
  ArrowLeft,
  RotateCcw,
  Brain,
  Loader2,
  Scan,
  Compass,
  Sparkles,
  Target,
  BarChart3,
  TrendingUp,
  FileText,
  AlertTriangle,
  Check,
  Plus,
  X,
  Printer,
  Copy,
  ChevronUp,
  ChevronDown,
  RefreshCw,
  HelpCircle,
} from 'lucide-react';

// ══════════════════════════════════════
// CONSTANTS
// ══════════════════════════════════════

const STAGES = [
  { id: 'framing', label: 'Framing', icon: Compass },
  { id: 'alternatives', label: 'Alternatives', icon: Target },
  { id: 'criteria', label: 'Criteria', icon: BarChart3 },
  { id: 'scoring', label: 'Scoring', icon: TrendingUp },
  { id: 'uncertainty', label: 'Uncertainty', icon: Brain },
  { id: 'premortem', label: 'Risks', icon: AlertTriangle },
  { id: 'synthesis', label: 'Memo', icon: FileText },
];

const THRESHOLD_OPTIONS = [
  { label: 'Under $50K', value: 25000 },
  { label: '$50K \u2013 $100K', value: 75000 },
  { label: '$100K \u2013 $500K', value: 250000 },
  { label: '$500K \u2013 $1M', value: 750000 },
  { label: 'Over $1M', value: 1500000 },
];

const REVERSIBILITY_OPTIONS = [
  { label: 'High', value: 'easy', desc: 'Low switching costs, easily reversible.' },
  { label: 'Moderate', value: 'moderate', desc: 'Manageable pivot, some sunk costs.' },
  { label: 'Low', value: 'hard', desc: 'Significant sunk costs, extremely hard to undo.' },
];

const DEFAULT_CRITERIA_NAMES = [
  'Expected ROI / Value',
  'Time to Outcome',
  'Strategic Fit',
  'Risk Level',
];

// ══════════════════════════════════════
// HELPER FUNCTIONS (from original copilot)
// ══════════════════════════════════════

let _idSeq = 0;
const genId = () => `_${++_idSeq}_${Math.random().toString(36).slice(2, 6)}`;

const fmt = (n: number) => {
  if (n == null || isNaN(n)) return '$0';
  const abs = Math.abs(n);
  const s = n < 0 ? '-' : '';
  if (abs >= 1e9) return `${s}$${(abs / 1e9).toFixed(1)}B`;
  if (abs >= 1e6) return `${s}$${(abs / 1e6).toFixed(1)}M`;
  if (abs >= 1e3) return `${s}$${(abs / 1e3).toFixed(0)}K`;
  return `${s}$${abs.toFixed(0)}`;
};

function calculateRankings(
  alternatives: Alternative[],
  criteria: Criterion[],
  scores: Record<string, Record<string, number>>
): (Alternative & { score: number })[] {
  try {
    if (!alternatives?.length || !criteria?.length) return [];
    const totalW = criteria.reduce((s, c) => s + (c.weight || 0), 0);
    if (totalW === 0) return [];
    return alternatives
      .map((alt) => {
        const ws = criteria.reduce((s, cr) => {
          return s + (cr.weight || 0) * (scores?.[alt.id]?.[cr.id] ?? 5);
        }, 0);
        return { ...alt, score: ws / totalW };
      })
      .sort((a, b) => b.score - a.score);
  } catch (e) {
    console.error('Ranking error:', e);
    return [];
  }
}

function monteCarlo(
  min: number,
  mode: number,
  max: number,
  n = 10000
): SimulationResult {
  try {
    if (typeof min !== 'number' || typeof mode !== 'number' || typeof max !== 'number')
      return { mean: 0, median: 0, p10: 0, p90: 0, probLoss: 0 };
    if (min >= max) return { mean: mode, median: mode, p10: min, p90: max, probLoss: min < 0 ? 1 : 0 };
    if (mode < min) mode = min;
    if (mode > max) mode = max;
    const res: number[] = [];
    for (let i = 0; i < n; i++) {
      const u = Math.random();
      const F = (mode - min) / (max - min);
      let s: number;
      if (u < F) {
        s = min + Math.sqrt(Math.max(0, u * (max - min) * (mode - min)));
      } else {
        s = max - Math.sqrt(Math.max(0, (1 - u) * (max - min) * (max - mode)));
      }
      res.push(s);
    }
    res.sort((a, b) => a - b);
    const mean = res.reduce((acc, v) => acc + v, 0) / n;
    const median = res[Math.floor(n / 2)];
    const p10 = res[Math.floor(n * 0.1)];
    const p90 = res[Math.floor(n * 0.9)];
    const probLoss = res.filter((v) => v < 0).length / n;
    return { mean, median, p10, p90, probLoss };
  } catch (e) {
    console.error('Monte Carlo error:', e);
    return { mean: 0, median: 0, p10: 0, p90: 0, probLoss: 0 };
  }
}

function classifyRisk(desc: string): Risk['theme'] {
  const lower = desc.toLowerCase();
  if (/(execut|sponsor|politics|reorg|budget|priority|compet)/i.test(lower)) return 'organizational';
  if (/(regul|complian|legal|gdpr|audit)/i.test(lower)) return 'organizational';
  if (/(talent|hire|team|skill|capacity)/i.test(lower)) return 'organizational';
  if (/(tech|integrat|scalab|infrastr|legacy)/i.test(lower)) return 'technical';
  if (/(market|competitor|customer|demand)/i.test(lower)) return 'market';
  return 'other';
}

function detectScoringPatterns(
  rankings: (Alternative & { score: number })[],
  alternatives: Alternative[],
  criteria: Criterion[],
  scores: Record<string, Record<string, number>>
) {
  const insights: { type: string; message: string }[] = [];
  if (!rankings.length || !criteria.length) return insights;

  if (rankings.length >= 2) {
    const spread = rankings[0].score - rankings[rankings.length - 1].score;
    if (spread < 1.0) {
      insights.push({
        type: 'clustered',
        message:
          "These scores are very close \u2014 within 1 point of each other. What's the real tie-breaker that the numbers aren't capturing?",
      });
    }
  }

  if (rankings.length >= 2 && criteria.length >= 2) {
    for (const crit of criteria) {
      const otherCriteria = criteria.filter((c) => c.id !== crit.id);
      const altRankings = calculateRankings(alternatives, otherCriteria, scores);
      if (altRankings.length >= 2 && altRankings[0].id !== rankings[0].id) {
        insights.push({
          type: 'dominant',
          message: `"${crit.name}" is driving most of the difference \u2014 without it, ${altRankings[0].name} would be #1 instead. Is that weighting intentional?`,
        });
        break;
      }
    }
  }

  let highCount = 0,
    totalCount = 0;
  for (const alt of alternatives) {
    for (const crit of criteria) {
      const s = scores?.[alt.id]?.[crit.id];
      if (s != null) {
        totalCount++;
        if (s >= 7) highCount++;
      }
    }
  }
  if (totalCount > 0 && highCount / totalCount > 0.7) {
    insights.push({
      type: 'inflated',
      message:
        "Most scores are 7 or above. If everything is 'good,' the analysis loses its ability to differentiate. Consider recalibrating what 'average' (5) looks like.",
    });
  }

  return insights;
}

function parseNum(s: string): number {
  if (!s) return NaN;
  const cleaned = s.replace(/[$,\s]/g, '').toLowerCase();
  let multiplier = 1;
  let numStr = cleaned;
  if (cleaned.endsWith('m')) { multiplier = 1e6; numStr = cleaned.slice(0, -1); }
  else if (cleaned.endsWith('k')) { multiplier = 1e3; numStr = cleaned.slice(0, -1); }
  else if (cleaned.endsWith('b')) { multiplier = 1e9; numStr = cleaned.slice(0, -1); }
  const val = parseFloat(numStr);
  return isNaN(val) ? NaN : val * multiplier;
}

// ══════════════════════════════════════
// STATE MANAGEMENT
// ══════════════════════════════════════

const INITIAL_STATE: DecisionState = {
  statement: '',
  objectives: '',
  alternatives: [],
  criteria: [],
  scores: {},
  topChoice: null,
  mcResult: null,
  risks: [],
  meta: { threshold: 0, reversibility: '', reversibilityLabel: '' },
};

type Action =
  | { type: 'SET'; key: string; value: any }
  | { type: 'SET_META'; value: Partial<DecisionState['meta']> }
  | { type: 'SET_SCORE'; altId: string; critId: string; value: number }
  | { type: 'RESET' };

function decisionReducer(state: DecisionState, action: Action): DecisionState {
  switch (action.type) {
    case 'SET':
      return { ...state, [action.key]: action.value };
    case 'SET_META':
      return { ...state, meta: { ...state.meta, ...action.value } };
    case 'SET_SCORE':
      return {
        ...state,
        scores: {
          ...state.scores,
          [action.altId]: {
            ...(state.scores[action.altId] || {}),
            [action.critId]: action.value,
          },
        },
      };
    case 'RESET':
      return INITIAL_STATE;
    default:
      return state;
  }
}

// ══════════════════════════════════════
// STAGE 1: FRAMING
// ══════════════════════════════════════

function FramingStage({
  decision,
  dispatch,
  onComplete,
}: {
  decision: DecisionState;
  dispatch: React.Dispatch<Action>;
  onComplete: () => void;
}) {
  const [statement, setStatement] = useState(decision.statement || '');
  const [objectives, setObjectives] = useState(decision.objectives || '');
  const [threshold, setThreshold] = useState(decision.meta.threshold || 0);
  const [reversibility, setReversibility] = useState(decision.meta.reversibility || '');
  const [reversibilityLabel, setReversibilityLabel] = useState(decision.meta.reversibilityLabel || '');

  const handleContinue = () => {
    dispatch({ type: 'SET', key: 'statement', value: statement });
    dispatch({ type: 'SET', key: 'objectives', value: objectives });
    dispatch({ type: 'SET_META', value: { threshold, reversibility, reversibilityLabel } });
    onComplete();
  };

  const isValid = statement.trim() && objectives.trim() && threshold > 0 && reversibility;

  return (
    <div className="space-y-12">
      <div className="grid md:grid-cols-2 gap-12">
        <div className="space-y-6">
          <label className="mono text-[10px] uppercase font-bold text-zinc-400">The Core Inquiry</label>
          <textarea
            value={statement}
            onChange={(e) => setStatement(e.target.value)}
            placeholder="What is the critical choice being analyzed?"
            className="w-full bg-black/5 rounded-2xl p-6 serif italic text-xl focus:ring-1 ring-yellow-500 outline-none h-32"
          />
        </div>
        <div className="space-y-6">
          <label className="mono text-[10px] uppercase font-bold text-zinc-400">Success Objectives</label>
          <textarea
            value={objectives}
            onChange={(e) => setObjectives(e.target.value)}
            placeholder="What outcomes define a 'win'?"
            className="w-full bg-black/5 rounded-2xl p-6 serif italic text-xl focus:ring-1 ring-yellow-500 outline-none h-32"
          />
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-12">
        <div className="space-y-6">
          <label className="mono text-[10px] uppercase font-bold text-zinc-400">Economic Threshold</label>
          <div className="grid grid-cols-2 gap-2">
            {THRESHOLD_OPTIONS.map((opt) => (
              <button
                key={opt.value}
                onClick={() => setThreshold(opt.value)}
                className={`p-4 rounded-xl text-xs font-bold uppercase transition-all ${
                  threshold === opt.value
                    ? 'bg-black text-white'
                    : 'bg-black/5 hover:bg-black/10 text-zinc-500'
                }`}
              >
                {opt.label}
              </button>
            ))}
          </div>
        </div>
        <div className="space-y-6">
          <label className="mono text-[10px] uppercase font-bold text-zinc-400">Reversibility Coefficient</label>
          <div className="space-y-2">
            {REVERSIBILITY_OPTIONS.map((opt) => (
              <button
                key={opt.value}
                onClick={() => {
                  setReversibility(opt.value);
                  setReversibilityLabel(opt.label);
                }}
                className={`w-full p-4 rounded-xl text-left transition-all flex justify-between items-center ${
                  reversibility === opt.value
                    ? 'bg-yellow-500 text-black'
                    : 'bg-black/5 text-zinc-500'
                }`}
              >
                <span className="text-xs font-black uppercase">{opt.label}</span>
                <span className="text-[10px] opacity-60 italic serif">{opt.desc}</span>
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="pt-8 flex justify-end">
        <button
          onClick={handleContinue}
          disabled={!isValid}
          className="px-12 py-5 bg-black text-white rounded-2xl font-black uppercase text-[10px] tracking-widest hover:bg-yellow-500 hover:text-black hover:shadow-xl transition-all flex items-center gap-4 disabled:opacity-30 disabled:cursor-not-allowed"
        >
          Define Alternatives <ArrowRight size={14} />
        </button>
      </div>
    </div>
  );
}

// ══════════════════════════════════════
// STAGE 2: ALTERNATIVES
// ══════════════════════════════════════

function AlternativesStage({
  decision,
  dispatch,
  onComplete,
  onBack,
}: {
  decision: DecisionState;
  dispatch: React.Dispatch<Action>;
  onComplete: () => void;
  onBack: () => void;
}) {
  const [alternatives, setAlternatives] = useState<Alternative[]>(decision.alternatives.length > 0 ? decision.alternatives : []);
  const [newAlt, setNewAlt] = useState('');
  const [aiLoading, setAiLoading] = useState(false);
  const [aiSuggestions, setAiSuggestions] = useState<string[] | null>(null);
  const [aiRationale, setAiRationale] = useState('');
  const [aiError, setAiError] = useState('');

  const addAlternative = () => {
    if (newAlt.trim() && alternatives.length < 5) {
      setAlternatives([...alternatives, { id: genId(), name: newAlt.trim() }]);
      setNewAlt('');
    }
  };

  const removeAlternative = (id: string) => {
    if (alternatives.length > 2) {
      setAlternatives(alternatives.filter((a) => a.id !== id));
    }
  };

  const finishAndContinue = (alts?: Alternative[]) => {
    dispatch({ type: 'SET', key: 'alternatives', value: alts || alternatives });
    onComplete();
  };

  const handleNext = async () => {
    dispatch({ type: 'SET', key: 'alternatives', value: alternatives });
    setAiLoading(true);
    setAiError('');
    try {
      const tempDecision = { ...decision, alternatives };
      const result = await geminiService.brainstormAlternatives(tempDecision);
      if (result?.suggestions?.length) {
        setAiSuggestions(result.suggestions);
        setAiRationale(result.rationale || '');
      } else {
        finishAndContinue();
      }
    } catch (err: any) {
      setAiError(err.message || 'AI unavailable');
    } finally {
      setAiLoading(false);
    }
  };

  return (
    <div className="space-y-12">
      <div className="space-y-4">
        {alternatives.map((alt, i) => (
          <div key={alt.id} className="flex gap-4 items-center">
            <div className="w-8 h-8 rounded-lg bg-black text-white flex items-center justify-center mono text-[10px]">
              {i + 1}
            </div>
            <input
              value={alt.name}
              onChange={(e) => {
                const newAlts = [...alternatives];
                newAlts[i] = { ...newAlts[i], name: e.target.value };
                setAlternatives(newAlts);
              }}
              className="flex-1 bg-black/5 p-4 rounded-xl font-bold text-sm outline-none"
            />
            {alternatives.length > 2 && (
              <button
                onClick={() => removeAlternative(alt.id)}
                className="p-2 text-zinc-300 hover:text-red-500"
              >
                <X size={16} />
              </button>
            )}
          </div>
        ))}
        {alternatives.length < 5 && (
          <div className="flex gap-4">
            <input
              value={newAlt}
              onChange={(e) => setNewAlt(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === 'Enter') {
                  e.preventDefault();
                  addAlternative();
                }
              }}
              placeholder="Add an alternative..."
              className="flex-1 bg-black/5 p-4 rounded-xl text-sm outline-none"
            />
            <button
              onClick={addAlternative}
              disabled={!newAlt.trim()}
              className="w-12 h-12 rounded-xl bg-black/5 flex items-center justify-center text-zinc-400 hover:bg-black hover:text-white transition-all disabled:opacity-30"
            >
              <Plus size={16} />
            </button>
          </div>
        )}
      </div>

      {/* AI Suggestions Panel */}
      <div className="p-8 bg-yellow-500/5 rounded-3xl border border-yellow-500/10">
        <div className="flex items-center gap-3 mb-4">
          <Sparkles className="text-yellow-600" size={16} />
          <span className="mono text-[10px] uppercase font-black text-yellow-600">AI Synapse: Alternatives</span>
        </div>

        {aiLoading && (
          <div className="flex items-center gap-3 py-4">
            <Loader2 className="animate-spin text-yellow-600" size={18} />
            <span className="text-sm text-zinc-500">Brainstorming hybrid options...</span>
          </div>
        )}

        {aiError && (
          <div className="p-4 bg-red-50 rounded-xl text-sm text-red-700 mb-4">
            {aiError}
            <button onClick={() => finishAndContinue()} className="ml-4 underline text-xs">
              Continue without AI
            </button>
          </div>
        )}

        {aiSuggestions && !aiLoading && (
          <div className="mt-4 grid gap-2">
            {aiRationale && <p className="text-xs text-zinc-500 italic mb-2">{aiRationale}</p>}
            {aiSuggestions.map((s, i) => (
              <div
                key={i}
                className="bg-white p-4 rounded-xl border border-black/5 text-sm italic serif flex justify-between items-center"
              >
                {s}
                <button
                  onClick={() => {
                    if (alternatives.length < 5) {
                      setAlternatives([...alternatives, { id: genId(), name: s }]);
                    }
                  }}
                  disabled={alternatives.length >= 5}
                  className="p-2 text-yellow-600 hover:scale-110 transition-transform disabled:opacity-30"
                >
                  <Plus size={16} />
                </button>
              </div>
            ))}
            <button
              onClick={() => finishAndContinue()}
              className="mt-4 mono text-[11px] font-black uppercase tracking-widest bg-black text-white px-6 py-3 rounded-full hover:bg-yellow-500 hover:text-black transition-all self-start"
            >
              Continue to Criteria
            </button>
          </div>
        )}

        {!aiSuggestions && !aiLoading && !aiError && (
          <button
            onClick={handleNext}
            disabled={alternatives.length < 2}
            className="mono text-[11px] font-black uppercase tracking-widest bg-black text-white px-6 py-3 rounded-full hover:bg-yellow-500 hover:text-black transition-all disabled:opacity-30"
          >
            Brainstorm Hybrid Options
          </button>
        )}
      </div>

      {/* Navigation */}
      {!aiSuggestions && !aiLoading && (
        <div className="pt-8 border-t border-black/5 flex justify-between">
          <button
            onClick={onBack}
            className="px-10 py-5 border border-black/10 rounded-2xl font-black uppercase text-[10px] tracking-widest text-zinc-400 hover:bg-black hover:text-white transition-all"
          >
            <ArrowLeft className="inline mr-2" size={14} /> Back
          </button>
          <button
            onClick={() => finishAndContinue()}
            disabled={alternatives.length < 2}
            className="px-12 py-5 bg-black text-white rounded-2xl font-black uppercase text-[10px] tracking-widest hover:bg-yellow-500 hover:text-black hover:shadow-xl transition-all flex items-center gap-4 disabled:opacity-30"
          >
            Skip AI &mdash; Next <ArrowRight size={14} />
          </button>
        </div>
      )}
    </div>
  );
}

// ══════════════════════════════════════
// STAGE 3: CRITERIA (with rank-weighting)
// ══════════════════════════════════════

function CriteriaStage({
  decision,
  dispatch,
  onComplete,
  onBack,
}: {
  decision: DecisionState;
  dispatch: React.Dispatch<Action>;
  onComplete: () => void;
  onBack: () => void;
}) {
  const [step, setStep] = useState(0); // 0=edit, 1=rank
  const [criteria, setCriteria] = useState<{ id: string; name: string }[]>(
    DEFAULT_CRITERIA_NAMES.map((name) => ({ id: genId(), name }))
  );
  const [newCrit, setNewCrit] = useState('');
  const [ranked, setRanked] = useState<{ id: string; name: string }[] | null>(null);
  const [manualWeights, setManualWeights] = useState<number[] | null>(null);

  const getDefaultWeights = (count: number) => {
    const presets: Record<number, number[]> = {
      2: [60, 40],
      3: [45, 35, 20],
      4: [35, 25, 25, 15],
      5: [35, 25, 20, 15, 5],
    };
    return presets[count] || Array(count).fill(Math.round(100 / count));
  };

  const weightSum = manualWeights ? manualWeights.reduce((s, w) => s + w, 0) : 0;
  const weightsValid = manualWeights ? Math.abs(weightSum - 100) < 0.01 : false;

  const moveUp = (i: number) => {
    if (i === 0 || !ranked || !manualWeights) return;
    const next = [...ranked];
    [next[i - 1], next[i]] = [next[i], next[i - 1]];
    setRanked(next);
    const nextW = [...manualWeights];
    [nextW[i - 1], nextW[i]] = [nextW[i], nextW[i - 1]];
    setManualWeights(nextW);
  };

  const moveDown = (i: number) => {
    if (!ranked || !manualWeights || i === ranked.length - 1) return;
    const next = [...ranked];
    [next[i], next[i + 1]] = [next[i + 1], next[i]];
    setRanked(next);
    const nextW = [...manualWeights];
    [nextW[i], nextW[i + 1]] = [nextW[i + 1], nextW[i]];
    setManualWeights(nextW);
  };

  const startRanking = () => {
    const list = [...criteria];
    setRanked(list);
    setManualWeights(getDefaultWeights(list.length));
    setStep(1);
  };

  const confirmWeights = () => {
    if (!ranked || !manualWeights) return;
    const weighted: Criterion[] = ranked.map((c, i) => ({
      ...c,
      weight: (manualWeights[i] || 5) / 100,
    }));
    dispatch({ type: 'SET', key: 'criteria', value: weighted });
    onComplete();
  };

  return (
    <div className="space-y-12">
      {step === 0 && (
        <>
          <div className="grid gap-4">
            {criteria.map((crit, i) => (
              <div key={crit.id} className="bg-black/5 p-6 rounded-3xl flex items-center gap-6">
                <div className="flex-1">
                  <input
                    value={crit.name}
                    onChange={(e) => {
                      const newCrits = [...criteria];
                      newCrits[i] = { ...newCrits[i], name: e.target.value };
                      setCriteria(newCrits);
                    }}
                    className="bg-transparent font-black text-xl serif italic outline-none w-full"
                  />
                </div>
                {criteria.length > 2 && (
                  <button
                    onClick={() => setCriteria(criteria.filter((c) => c.id !== crit.id))}
                    className="p-2 text-zinc-300 hover:text-red-500"
                  >
                    <X size={16} />
                  </button>
                )}
              </div>
            ))}
          </div>
          {criteria.length < 5 && (
            <div className="flex gap-4">
              <input
                value={newCrit}
                onChange={(e) => setNewCrit(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' && newCrit.trim()) {
                    e.preventDefault();
                    setCriteria([...criteria, { id: genId(), name: newCrit.trim() }]);
                    setNewCrit('');
                  }
                }}
                placeholder="Add a criterion..."
                className="flex-1 bg-black/5 p-4 rounded-xl text-sm outline-none"
              />
              <button
                onClick={() => {
                  if (newCrit.trim()) {
                    setCriteria([...criteria, { id: genId(), name: newCrit.trim() }]);
                    setNewCrit('');
                  }
                }}
                className="w-12 h-12 rounded-xl bg-black/5 flex items-center justify-center hover:bg-black hover:text-white transition-all"
              >
                <Plus size={16} />
              </button>
            </div>
          )}
          <div className="pt-8 border-t border-black/5 flex justify-between">
            <button
              onClick={onBack}
              className="px-10 py-5 border border-black/10 rounded-2xl font-black uppercase text-[10px] tracking-widest text-zinc-400 hover:bg-black hover:text-white transition-all"
            >
              <ArrowLeft className="inline mr-2" size={14} /> Back
            </button>
            <button
              onClick={startRanking}
              disabled={criteria.length < 2}
              className="px-12 py-5 bg-black text-white rounded-2xl font-black uppercase text-[10px] tracking-widest hover:bg-yellow-500 hover:text-black transition-all flex items-center gap-4 disabled:opacity-30"
            >
              Rank &amp; Weight <ArrowRight size={14} />
            </button>
          </div>
        </>
      )}

      {step === 1 && ranked && manualWeights && (
        <>
          <p className="text-sm text-zinc-500">
            Drag to reorder by importance. Adjust weights (must sum to 100%).
          </p>
          <div className="space-y-3">
            {ranked.map((c, i) => (
              <div
                key={c.id}
                className={`flex items-center gap-4 p-5 rounded-2xl border-2 transition-all ${
                  i === 0 ? 'border-yellow-500 bg-yellow-500/5' : 'border-black/5 bg-white'
                }`}
              >
                <span className="mono text-sm font-bold w-8 text-center text-zinc-400">#{i + 1}</span>
                <span className="flex-1 font-black serif italic text-lg">{c.name}</span>
                <div className="flex items-center gap-2">
                  <input
                    type="number"
                    min="0"
                    max="100"
                    step="1"
                    value={manualWeights[i]}
                    onChange={(e) => {
                      const next = [...manualWeights];
                      next[i] = Math.max(0, Math.min(100, Number(e.target.value) || 0));
                      setManualWeights(next);
                    }}
                    className="w-16 text-center mono font-bold p-2 rounded-lg border border-black/10 outline-none focus:ring-1 ring-yellow-500"
                  />
                  <span className="mono text-xs text-zinc-400">%</span>
                </div>
                <div className="flex flex-col gap-0.5">
                  <button
                    onClick={() => moveUp(i)}
                    disabled={i === 0}
                    className="p-1 text-zinc-300 hover:text-black disabled:opacity-20"
                  >
                    <ChevronUp size={14} />
                  </button>
                  <button
                    onClick={() => moveDown(i)}
                    disabled={i === ranked.length - 1}
                    className="p-1 text-zinc-300 hover:text-black disabled:opacity-20"
                  >
                    <ChevronDown size={14} />
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div
            className={`px-4 py-3 rounded-xl text-xs mono font-bold flex items-center gap-2 ${
              weightsValid
                ? 'bg-green-50 text-green-700 border border-green-200'
                : 'bg-yellow-50 text-yellow-700 border border-yellow-200'
            }`}
          >
            {weightsValid ? (
              <>
                <Check size={14} /> Weights sum to 100%
              </>
            ) : (
              <>
                <AlertTriangle size={14} /> Weights must sum to 100% (currently: {weightSum}%)
              </>
            )}
          </div>

          <div className="pt-8 border-t border-black/5 flex justify-between">
            <button
              onClick={() => setStep(0)}
              className="px-10 py-5 border border-black/10 rounded-2xl font-black uppercase text-[10px] tracking-widest text-zinc-400 hover:bg-black hover:text-white transition-all"
            >
              <ArrowLeft className="inline mr-2" size={14} /> Edit Criteria
            </button>
            <button
              onClick={confirmWeights}
              disabled={!weightsValid}
              className="px-12 py-5 bg-black text-white rounded-2xl font-black uppercase text-[10px] tracking-widest hover:bg-yellow-500 hover:text-black transition-all flex items-center gap-4 disabled:opacity-30"
            >
              Confirm Weights <ArrowRight size={14} />
            </button>
          </div>
        </>
      )}
    </div>
  );
}

// ══════════════════════════════════════
// STAGE 4: SCORING
// ══════════════════════════════════════

function ScoringStage({
  decision,
  dispatch,
  onComplete,
  onBack,
}: {
  decision: DecisionState;
  dispatch: React.Dispatch<Action>;
  onComplete: () => void;
  onBack: () => void;
}) {
  const { alternatives, criteria } = decision;
  const [localScores, setLocalScores] = useState<Record<string, Record<string, number>>>(() => {
    const s: Record<string, Record<string, number>> = {};
    alternatives.forEach((a) => {
      s[a.id] = {};
      criteria.forEach((c) => {
        s[a.id][c.id] = decision.scores?.[a.id]?.[c.id] ?? 5;
      });
    });
    return s;
  });
  const [showResults, setShowResults] = useState(false);
  const [aiInsight, setAiInsight] = useState<string | null>(null);
  const [aiInsightLoading, setAiInsightLoading] = useState(false);

  const rankings = useMemo(
    () => calculateRankings(alternatives, criteria, localScores),
    [alternatives, criteria, localScores]
  );
  const insights = useMemo(
    () => detectScoringPatterns(rankings, alternatives, criteria, localScores),
    [rankings, alternatives, criteria, localScores]
  );

  const fetchAiInsight = useCallback(async () => {
    if (rankings.length < 2) return;
    setAiInsightLoading(true);
    try {
      const result = await geminiService.generateScoringInsight(decision, localScores, rankings);
      setAiInsight(result);
    } catch {
      // AI insight is optional, fail silently
    } finally {
      setAiInsightLoading(false);
    }
  }, [rankings, decision, localScores]);

  useEffect(() => {
    if (showResults && !aiInsight && !aiInsightLoading) {
      fetchAiInsight();
    }
  }, [showResults]);

  const handleContinue = () => {
    const topAlt = rankings[0];
    dispatch({ type: 'SET', key: 'scores', value: localScores });
    dispatch({
      type: 'SET',
      key: 'topChoice',
      value: { id: topAlt.id, name: topAlt.name, bestCase: 0, mostLikely: 0, worstCase: 0 },
    });
    onComplete();
  };

  if (showResults) {
    return (
      <div className="space-y-12">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b-2 border-black/10">
                <th className="text-left p-4 mono text-[10px] text-zinc-400">ALTERNATIVE</th>
                {criteria.map((c) => (
                  <th key={c.id} className="p-4 mono text-[10px] text-zinc-400 text-center">
                    {c.name}
                    <br />
                    <span className="text-zinc-300">({(c.weight * 100).toFixed(0)}%)</span>
                  </th>
                ))}
                <th className="p-4 mono text-[10px] text-yellow-600 text-center">WEIGHTED</th>
              </tr>
            </thead>
            <tbody>
              {rankings.map((r, idx) => (
                <tr
                  key={r.id}
                  className={`border-t border-black/5 ${idx === 0 ? 'bg-yellow-500/5' : ''}`}
                >
                  <td className="p-4 font-black serif italic text-lg">
                    {idx === 0 && <span className="mr-2">&#127942;</span>}
                    {r.name}
                  </td>
                  {criteria.map((c) => (
                    <td key={c.id} className="p-4 text-center mono font-bold">
                      {localScores[r.id]?.[c.id] ?? '\u2014'}
                    </td>
                  ))}
                  <td
                    className={`p-4 text-center mono font-black text-lg ${
                      idx === 0 ? 'text-yellow-600' : ''
                    }`}
                  >
                    {r.score.toFixed(1)}
                    <span className={`ml-2 text-[10px] font-bold px-2 py-0.5 rounded-full ${
                      r.score >= 8 ? 'bg-green-100 text-green-700' :
                      r.score >= 6 ? 'bg-yellow-100 text-yellow-700' :
                      r.score >= 4 ? 'bg-orange-100 text-orange-700' :
                      'bg-red-100 text-red-700'
                    }`}>
                      {r.score >= 8 ? 'Strong' : r.score >= 6 ? 'Moderate' : r.score >= 4 ? 'Weak' : 'Poor'}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* AI Insight */}
        {aiInsightLoading && (
          <div className="flex items-center gap-3 p-4 rounded-xl bg-yellow-500/5 border border-yellow-500/10">
            <Loader2 className="animate-spin text-yellow-600" size={18} />
            <span className="text-sm text-zinc-500">Analyzing score patterns...</span>
          </div>
        )}
        {aiInsight && (
          <div className="p-6 rounded-2xl bg-yellow-500/5 border border-yellow-500/10">
            <div className="flex items-center gap-2 mb-3">
              <Sparkles size={14} className="text-yellow-600" />
              <span className="mono text-[10px] uppercase font-black text-yellow-600">AI Analysis</span>
            </div>
            <p className="text-sm text-zinc-600 leading-relaxed">{aiInsight}</p>
          </div>
        )}

        {/* Score pattern insights */}
        {insights.length > 0 && (
          <div className="space-y-3">
            {insights.map((insight, i) => (
              <div
                key={i}
                className="p-4 rounded-xl bg-black/[0.02] border border-black/5 flex items-start gap-3"
              >
                <HelpCircle size={16} className="text-yellow-600 mt-0.5 shrink-0" />
                <p className="text-sm text-zinc-600">{insight.message}</p>
              </div>
            ))}
          </div>
        )}

        <div className="pt-8 border-t border-black/5 flex justify-between">
          <button
            onClick={() => {
              setShowResults(false);
              setAiInsight(null);
            }}
            className="px-10 py-5 border border-black/10 rounded-2xl font-black uppercase text-[10px] tracking-widest text-zinc-400 hover:bg-black hover:text-white transition-all"
          >
            <ArrowLeft className="inline mr-2" size={14} /> Adjust Scores
          </button>
          <button
            onClick={handleContinue}
            className="px-12 py-5 bg-black text-white rounded-2xl font-black uppercase text-[10px] tracking-widest hover:bg-yellow-500 hover:text-black transition-all flex items-center gap-4"
          >
            Uncertainty Analysis <ArrowRight size={14} />
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-12">
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr>
              <th className="text-left p-4 mono text-[10px] text-zinc-400">ALTERNATIVE</th>
              {criteria.map((c) => (
                <th key={c.id} className="p-4 mono text-[10px] text-zinc-400 text-center">
                  {c.name}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {alternatives.map((alt) => (
              <tr key={alt.id} className="border-t border-black/5">
                <td className="p-4 font-black serif italic text-lg">{alt.name}</td>
                {criteria.map((crit) => (
                  <td key={crit.id} className="p-4 text-center">
                    <div className="flex flex-col items-center gap-1">
                      <input
                        type="range"
                        min="1"
                        max="10"
                        step="1"
                        value={localScores[alt.id]?.[crit.id] || 5}
                        onChange={(e) => {
                          setLocalScores((prev) => ({
                            ...prev,
                            [alt.id]: { ...prev[alt.id], [crit.id]: parseInt(e.target.value) },
                          }));
                        }}
                        className="w-24 accent-black"
                      />
                      <span className="mono text-xs font-bold">
                        {localScores[alt.id]?.[crit.id] || 5}
                      </span>
                    </div>
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="p-4 rounded-xl bg-black/[0.02] border border-black/5">
        <div className="flex justify-between text-[10px] mono text-zinc-400 uppercase">
          <span>1-3: Poor</span>
          <span>4-6: Average</span>
          <span>7-8: Good</span>
          <span>9-10: Excellent</span>
        </div>
      </div>

      <div className="pt-8 border-t border-black/5 flex justify-between">
        <button
          onClick={onBack}
          className="px-10 py-5 border border-black/10 rounded-2xl font-black uppercase text-[10px] tracking-widest text-zinc-400 hover:bg-black hover:text-white transition-all"
        >
          <ArrowLeft className="inline mr-2" size={14} /> Back
        </button>
        <button
          onClick={() => {
            dispatch({ type: 'SET', key: 'scores', value: localScores });
            setShowResults(true);
          }}
          className="px-12 py-5 bg-black text-white rounded-2xl font-black uppercase text-[10px] tracking-widest hover:bg-yellow-500 hover:text-black transition-all flex items-center gap-4"
        >
          See Results <ArrowRight size={14} />
        </button>
      </div>
    </div>
  );
}

// ══════════════════════════════════════
// STAGE 5: UNCERTAINTY (Monte Carlo)
// ══════════════════════════════════════

function UncertaintyStage({
  decision,
  dispatch,
  onComplete,
  onBack,
}: {
  decision: DecisionState;
  dispatch: React.Dispatch<Action>;
  onComplete: () => void;
  onBack: () => void;
}) {
  const topName = decision.topChoice?.name || 'your top choice';
  const [bestCase, setBestCase] = useState('');
  const [mostLikely, setMostLikely] = useState('');
  const [worstCase, setWorstCase] = useState('');
  const [mcResult, setMcResult] = useState<SimulationResult | null>(null);
  const [isComputing, setIsComputing] = useState(false);
  const [validationError, setValidationError] = useState('');

  const handleSubmitValues = () => {
    const bv = parseNum(bestCase);
    const mv = parseNum(mostLikely);
    const wv = parseNum(worstCase);

    if (isNaN(bv) || isNaN(mv) || isNaN(wv)) {
      setValidationError('Please enter valid numbers. Use formats like $2M, $500K, -$100K.');
      return;
    }
    if (bv <= wv) {
      setValidationError('Best case should be higher than worst case.');
      return;
    }
    if (mv > bv || mv < wv) {
      setValidationError('Most likely outcome should fall between worst and best case.');
      return;
    }
    setValidationError('');
    setIsComputing(true);

    setTimeout(() => {
      const result = monteCarlo(wv, mv, bv);
      setMcResult(result);
      dispatch({
        type: 'SET',
        key: 'topChoice',
        value: { ...decision.topChoice, bestCase: bv, mostLikely: mv, worstCase: wv },
      });
      dispatch({ type: 'SET', key: 'mcResult', value: result });
      setIsComputing(false);
    }, 150);
  };

  const rangeBarPosition = (value: number, rangeMin: number, rangeMax: number) => {
    const span = rangeMax - rangeMin;
    if (span === 0) return 50;
    return Math.min(100, Math.max(0, ((value - rangeMin) / span) * 100));
  };

  return (
    <div className="space-y-12">
      <div className="p-8 bg-[#fbfaf8] rounded-[2rem] flex flex-col items-center text-center border border-black/5">
        <Brain className="text-yellow-600 mb-6" size={48} />
        <h3 className="serif text-3xl font-black italic mb-4 text-black">Monte Carlo Forecast</h3>
        <p className="text-zinc-500 text-xs max-w-md mb-6 leading-relaxed">
          Monte Carlo simulation runs thousands of random scenarios within your stated range to estimate the probability distribution of outcomes — giving you a realistic spread, not just a single guess.
        </p>
        <p className="text-zinc-500 text-sm max-w-md mb-12">
          Estimate the range of outcomes for{' '}
          <span className="text-black font-bold">{topName}</span>. Uses 10,000 triangular
          distribution simulations.
        </p>

        {!mcResult && !isComputing && (
          <>
            <div className="grid md:grid-cols-3 gap-8 w-full max-w-2xl">
              <div className="space-y-4">
                <label className="mono text-[9px] uppercase font-bold tracking-widest text-zinc-500">
                  Best Case ($)
                </label>
                <input
                  type="text"
                  value={bestCase}
                  onChange={(e) => setBestCase(e.target.value)}
                  placeholder="e.g. $2M"
                  className="w-full bg-black/5 p-4 rounded-xl mono text-black outline-none border border-black/10 focus:border-yellow-500"
                />
              </div>
              <div className="space-y-4">
                <label className="mono text-[9px] uppercase font-bold tracking-widest text-zinc-500">
                  Most Likely ($)
                </label>
                <input
                  type="text"
                  value={mostLikely}
                  onChange={(e) => setMostLikely(e.target.value)}
                  placeholder="e.g. $800K"
                  className="w-full bg-black/5 p-4 rounded-xl mono text-black outline-none border border-black/10 focus:border-yellow-500"
                />
              </div>
              <div className="space-y-4">
                <label className="mono text-[9px] uppercase font-bold tracking-widest text-zinc-500">
                  Worst Case ($)
                </label>
                <input
                  type="text"
                  value={worstCase}
                  onChange={(e) => {
                    setWorstCase(e.target.value);
                    setValidationError('');
                  }}
                  placeholder="e.g. -$500K"
                  className="w-full bg-black/5 p-4 rounded-xl mono text-black outline-none border border-black/10 focus:border-yellow-500"
                />
              </div>
            </div>

            {validationError && (
              <p className="text-red-400 text-sm mt-4">{validationError}</p>
            )}

            <button
              onClick={handleSubmitValues}
              disabled={!bestCase.trim() || !mostLikely.trim() || !worstCase.trim()}
              className="mt-16 px-12 py-6 bg-yellow-500 text-black rounded-2xl font-black uppercase text-xs tracking-[0.3em] hover:scale-105 transition-all disabled:opacity-30"
            >
              Generate Neural Simulation
            </button>
          </>
        )}

        {isComputing && (
          <div className="flex items-center gap-3 py-12">
            <Loader2 className="animate-spin text-yellow-500" size={24} />
            <span className="mono text-sm text-zinc-500">Running 10,000 Monte Carlo simulations...</span>
          </div>
        )}

        {mcResult && !isComputing && (
          <div className="w-full max-w-2xl text-left mt-8">
            {/* Visual range bar */}
            <div className="mb-6">
              <div className="relative h-12 rounded-lg overflow-hidden bg-black/10">
                <div
                  className="absolute h-full bg-yellow-500/30"
                  style={{
                    left: `${rangeBarPosition(mcResult.p10, parseNum(worstCase), parseNum(bestCase))}%`,
                    width: `${
                      rangeBarPosition(mcResult.p90, parseNum(worstCase), parseNum(bestCase)) -
                      rangeBarPosition(mcResult.p10, parseNum(worstCase), parseNum(bestCase))
                    }%`,
                  }}
                />
                <div
                  className="absolute w-1 h-full bg-yellow-500"
                  style={{
                    left: `${rangeBarPosition(mcResult.mean, parseNum(worstCase), parseNum(bestCase))}%`,
                  }}
                />
                <div className="absolute inset-0 flex items-center justify-between px-3 text-xs mono">
                  <span className="text-zinc-500">{fmt(parseNum(worstCase))}</span>
                  <span className="text-yellow-600 font-bold">{fmt(mcResult.mean)}</span>
                  <span className="text-zinc-500">{fmt(parseNum(bestCase))}</span>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
              <div className="bg-black/5 p-4 rounded-xl">
                <div className="mono text-[9px] uppercase text-zinc-500 mb-1">Expected Value</div>
                <div className="mono font-bold text-black">{fmt(mcResult.mean)}</div>
              </div>
              <div className="bg-black/5 p-4 rounded-xl">
                <div className="mono text-[9px] uppercase text-zinc-500 mb-1">Median</div>
                <div className="mono font-bold text-black">{fmt(mcResult.median)}</div>
              </div>
              <div className="bg-black/5 p-4 rounded-xl">
                <div className="mono text-[9px] uppercase text-zinc-500 mb-1">P10 \u2013 P90</div>
                <div className="mono font-bold text-black">
                  {fmt(mcResult.p10)} to {fmt(mcResult.p90)}
                </div>
              </div>
              <div className="bg-black/5 p-4 rounded-xl">
                <div className="mono text-[9px] uppercase text-zinc-500 mb-1">Loss Probability</div>
                <div className={`mono font-bold ${mcResult.probLoss > 0.3 ? 'text-red-400' : 'text-green-400'}`}>
                  {(mcResult.probLoss * 100).toFixed(0)}%
                </div>
              </div>
            </div>

            <div className="w-full max-w-2xl p-5 rounded-xl bg-black/5 border border-black/10 mt-2 mb-4 text-sm text-zinc-600 leading-relaxed">
              In plain terms: across 10,000 simulated scenarios, the most likely outcome is around <strong className="text-black">{fmt(mcResult.mean)}</strong>. There's an 80% chance the actual result falls between <strong className="text-black">{fmt(mcResult.p10)}</strong> and <strong className="text-black">{fmt(mcResult.p90)}</strong>.{mcResult.probLoss > 0.05 ? ` Worth noting: there's a ${(mcResult.probLoss * 100).toFixed(0)}% chance of a net loss.` : ' The probability of a net loss is minimal.'}
            </div>

            <div className="flex justify-between mt-8">
              <button
                onClick={() => {
                  setMcResult(null);
                  setValidationError('');
                }}
                className="px-6 py-3 border border-black/10 rounded-xl text-zinc-400 text-xs font-bold uppercase tracking-widest hover:bg-black/10 transition-all"
              >
                <RefreshCw className="inline mr-2" size={12} /> Adjust Estimates
              </button>
              <button
                onClick={onComplete}
                className="px-8 py-3 bg-yellow-500 text-black rounded-xl font-black uppercase text-xs tracking-widest hover:scale-105 transition-all"
              >
                {decision.meta.threshold > 100000 ? 'Risk Audit' : 'Generate Memo'}{' '}
                <ArrowRight className="inline ml-2" size={14} />
              </button>
            </div>
          </div>
        )}
      </div>

      {!mcResult && !isComputing && (
        <div className="flex justify-start">
          <button
            onClick={onBack}
            className="px-10 py-5 border border-black/10 rounded-2xl font-black uppercase text-[10px] tracking-widest text-zinc-400 hover:bg-black hover:text-white transition-all"
          >
            <ArrowLeft className="inline mr-2" size={14} /> Back
          </button>
        </div>
      )}
    </div>
  );
}

// ══════════════════════════════════════
// STAGE 6: PRE-MORTEM (Risk Audit)
// ══════════════════════════════════════

function PreMortemStage({
  decision,
  dispatch,
  onComplete,
  onBack,
}: {
  decision: DecisionState;
  dispatch: React.Dispatch<Action>;
  onComplete: () => void;
  onBack: () => void;
}) {
  const topName = decision.topChoice?.name || 'this decision';
  const [completedRisks, setCompletedRisks] = useState<Risk[]>([]);
  const [currentRisk, setCurrentRisk] = useState<Partial<Risk>>({
    description: '',
    likelihood: undefined,
    impact: undefined,
    mitigation: '',
    theme: 'other',
  });
  const [showReview, setShowReview] = useState(false);

  // AI risk brainstorming
  const [aiRisks, setAiRisks] = useState<any[] | null>(null);
  const [aiRiskLoading, setAiRiskLoading] = useState(false);
  const [aiRisksDismissed, setAiRisksDismissed] = useState(false);
  const [selectedAiRisks, setSelectedAiRisks] = useState<Record<number, boolean>>({});

  useEffect(() => {
    if (!aiRisks && !aiRiskLoading && !aiRisksDismissed && decision.topChoice) {
      fetchAiRisks();
    }
  }, []);

  const fetchAiRisks = async () => {
    setAiRiskLoading(true);
    try {
      const risks = await geminiService.brainstormRisks(decision, decision.topChoice!);
      if (risks?.length) {
        setAiRisks(risks);
      } else {
        setAiRisksDismissed(true);
      }
    } catch {
      setAiRisksDismissed(true);
    } finally {
      setAiRiskLoading(false);
    }
  };

  const addSelectedAiRisks = () => {
    const toAdd: Risk[] = (aiRisks || [])
      .filter((_, i) => selectedAiRisks[i])
      .map((r: any) => ({
        description: r.description,
        theme: classifyRisk(r.description),
        likelihood: r.suggestedLikelihood || 'medium',
        impact: r.suggestedImpact || 'medium',
        mitigation: '',
      }));
    setCompletedRisks([...completedRisks, ...toAdd]);
    setAiRisksDismissed(true);
  };

  const isCurrentValid = currentRisk.description?.trim() && currentRisk.likelihood && currentRisk.impact;

  const addRiskAndNext = () => {
    if (!isCurrentValid) return;
    const newCompleted = [...completedRisks, currentRisk as Risk];
    setCompletedRisks(newCompleted);
    if (newCompleted.length >= 5) {
      setShowReview(true);
    } else {
      setCurrentRisk({ description: '', likelihood: undefined, impact: undefined, mitigation: '', theme: 'other' });
    }
  };

  const handleComplete = () => {
    dispatch({ type: 'SET', key: 'risks', value: completedRisks });
    onComplete();
  };

  if (showReview) {
    return (
      <div className="space-y-12">
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b-2 border-black/10">
                <th className="text-left p-3 mono text-[10px] text-zinc-400">RISK</th>
                <th className="text-center p-3 mono text-[10px] text-zinc-400">LIKELIHOOD</th>
                <th className="text-center p-3 mono text-[10px] text-zinc-400">IMPACT</th>
                <th className="text-left p-3 mono text-[10px] text-zinc-400">MITIGATION</th>
              </tr>
            </thead>
            <tbody>
              {completedRisks.map((r, i) => (
                <tr key={i} className="border-t border-black/5">
                  <td className="p-3 text-sm">{r.description}</td>
                  <td className="p-3 text-center">
                    <span
                      className={`px-2 py-1 rounded-full text-xs font-bold capitalize ${
                        r.likelihood === 'high'
                          ? 'bg-red-100 text-red-700'
                          : r.likelihood === 'medium'
                          ? 'bg-yellow-100 text-yellow-700'
                          : 'bg-green-100 text-green-700'
                      }`}
                    >
                      {r.likelihood}
                    </span>
                  </td>
                  <td className="p-3 text-center">
                    <span
                      className={`px-2 py-1 rounded-full text-xs font-bold capitalize ${
                        r.impact === 'high'
                          ? 'bg-red-100 text-red-700'
                          : r.impact === 'medium'
                          ? 'bg-yellow-100 text-yellow-700'
                          : 'bg-green-100 text-green-700'
                      }`}
                    >
                      {r.impact}
                    </span>
                  </td>
                  <td className="p-3 text-xs text-zinc-500">{r.mitigation || '\u2014'}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="pt-8 border-t border-black/5 flex justify-between">
          <button
            onClick={() => setShowReview(false)}
            className="px-10 py-5 border border-black/10 rounded-2xl font-black uppercase text-[10px] tracking-widest text-zinc-400 hover:bg-black hover:text-white transition-all"
          >
            <ArrowLeft className="inline mr-2" size={14} /> Add More
          </button>
          <button
            onClick={handleComplete}
            className="px-12 py-5 bg-black text-white rounded-2xl font-black uppercase text-[10px] tracking-widest hover:bg-yellow-500 hover:text-black transition-all flex items-center gap-4"
          >
            Generate Memo <ArrowRight size={14} />
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-12">
      <div className="p-6 bg-black/[0.02] rounded-2xl border border-black/5">
        <p className="text-sm text-zinc-600 leading-relaxed">
          <strong>Pre-Mortem Analysis:</strong> Imagine it's six months from now and choosing{' '}
          <strong>{topName}</strong> turned out to be a disaster. What went wrong?
        </p>
      </div>

      {/* AI Risk Suggestions */}
      {!aiRisksDismissed && (
        <div className="p-8 bg-yellow-500/5 rounded-3xl border border-yellow-500/10">
          <div className="flex items-center gap-3 mb-4">
            <AlertTriangle className="text-yellow-600" size={16} />
            <span className="mono text-[10px] uppercase font-black text-yellow-600">AI Risk Scan</span>
          </div>
          {aiRiskLoading && (
            <div className="flex items-center gap-3 py-4">
              <Loader2 className="animate-spin text-yellow-600" size={18} />
              <span className="text-sm text-zinc-500">Identifying common risks...</span>
            </div>
          )}
          {aiRisks && !aiRiskLoading && (
            <>
              <div className="space-y-2 mb-4">
                {aiRisks.map((risk: any, i: number) => (
                  <label
                    key={i}
                    className={`flex items-start gap-3 p-4 rounded-xl border cursor-pointer transition-all ${
                      selectedAiRisks[i]
                        ? 'border-yellow-500 bg-yellow-500/5'
                        : 'border-black/5 bg-white'
                    }`}
                  >
                    <input
                      type="checkbox"
                      checked={!!selectedAiRisks[i]}
                      onChange={() =>
                        setSelectedAiRisks((prev) => ({ ...prev, [i]: !prev[i] }))
                      }
                      className="mt-1"
                    />
                    <div>
                      <span className="text-sm">{risk.description}</span>
                      <div className="flex gap-2 mt-1">
                        <span className="text-[10px] px-2 py-0.5 rounded bg-black/5 text-zinc-400 capitalize">
                          {risk.category}
                        </span>
                        <span
                          className={`text-[10px] px-2 py-0.5 rounded capitalize ${
                            risk.suggestedLikelihood === 'high'
                              ? 'bg-red-100 text-red-700'
                              : risk.suggestedLikelihood === 'medium'
                              ? 'bg-yellow-100 text-yellow-700'
                              : 'bg-green-100 text-green-700'
                          }`}
                        >
                          {risk.suggestedLikelihood}
                        </span>
                      </div>
                    </div>
                  </label>
                ))}
              </div>
              <div className="flex gap-3">
                <button
                  onClick={addSelectedAiRisks}
                  disabled={Object.values(selectedAiRisks).filter(Boolean).length === 0}
                  className="mono text-[11px] font-black uppercase bg-black text-white px-6 py-3 rounded-full hover:bg-yellow-500 hover:text-black transition-all disabled:opacity-30"
                >
                  Add Selected
                </button>
                <button
                  onClick={() => setAiRisksDismissed(true)}
                  className="mono text-[11px] font-bold uppercase text-zinc-400 px-4 py-3 hover:text-black transition-all"
                >
                  Write My Own
                </button>
              </div>
            </>
          )}
        </div>
      )}

      {/* Manual risk entry */}
      {aiRisksDismissed && (
        <>
          {completedRisks.length > 0 && (
            <div className="space-y-2">
              {completedRisks.map((r, i) => (
                <div
                  key={i}
                  className="flex items-center gap-3 p-3 rounded-xl bg-black/[0.02] border border-black/5"
                >
                  <Check size={14} className="text-green-500" />
                  <span className="flex-1 text-sm truncate">{r.description}</span>
                  <span
                    className={`text-[10px] px-2 py-0.5 rounded capitalize ${
                      r.likelihood === 'high'
                        ? 'bg-red-100 text-red-700'
                        : r.likelihood === 'medium'
                        ? 'bg-yellow-100 text-yellow-700'
                        : 'bg-green-100 text-green-700'
                    }`}
                  >
                    {r.likelihood}
                  </span>
                </div>
              ))}
            </div>
          )}

          <div className="p-6 bg-white rounded-2xl border border-black/5 space-y-6">
            <h4 className="mono text-[10px] uppercase font-bold text-zinc-400">
              Risk {completedRisks.length + 1} of 5
            </h4>
            <textarea
              value={currentRisk.description || ''}
              onChange={(e) =>
                setCurrentRisk({ ...currentRisk, description: e.target.value, theme: classifyRisk(e.target.value) })
              }
              placeholder="What went wrong? e.g. Scope creep pushed budget to $220M+..."
              rows={2}
              className="w-full bg-black/5 p-4 rounded-xl text-sm outline-none resize-none"
            />
            <div>
              <label className="mono text-[10px] uppercase font-bold text-zinc-400 block mb-2">Likelihood</label>
              <div className="flex gap-2">
                {(['low', 'medium', 'high'] as const).map((level) => (
                  <button
                    key={level}
                    onClick={() => setCurrentRisk({ ...currentRisk, likelihood: level })}
                    className={`flex-1 px-3 py-2.5 rounded-xl text-sm font-bold capitalize transition-all ${
                      currentRisk.likelihood === level
                        ? 'bg-black text-white'
                        : 'bg-black/5 text-zinc-500'
                    }`}
                  >
                    {level}
                  </button>
                ))}
              </div>
            </div>
            <div>
              <label className="mono text-[10px] uppercase font-bold text-zinc-400 block mb-2">Impact</label>
              <div className="flex gap-2">
                {(['low', 'medium', 'high'] as const).map((level) => (
                  <button
                    key={level}
                    onClick={() => setCurrentRisk({ ...currentRisk, impact: level })}
                    className={`flex-1 px-3 py-2.5 rounded-xl text-sm font-bold capitalize transition-all ${
                      currentRisk.impact === level
                        ? 'bg-black text-white'
                        : 'bg-black/5 text-zinc-500'
                    }`}
                  >
                    {level}
                  </button>
                ))}
              </div>
            </div>
            <textarea
              value={currentRisk.mitigation || ''}
              onChange={(e) => setCurrentRisk({ ...currentRisk, mitigation: e.target.value })}
              placeholder="Mitigation strategy? (optional)"
              rows={2}
              className="w-full bg-black/5 p-4 rounded-xl text-sm outline-none resize-none"
            />
          </div>

          <div className="flex flex-wrap gap-3 justify-between">
            <button
              onClick={onBack}
              className="px-10 py-5 border border-black/10 rounded-2xl font-black uppercase text-[10px] tracking-widest text-zinc-400 hover:bg-black hover:text-white transition-all"
            >
              <ArrowLeft className="inline mr-2" size={14} /> Back
            </button>
            <div className="flex gap-3">
              {completedRisks.length >= 1 && (
                <button
                  onClick={() => {
                    if (isCurrentValid) {
                      setCompletedRisks([...completedRisks, currentRisk as Risk]);
                    }
                    setShowReview(true);
                  }}
                  className="px-8 py-5 border border-black/10 rounded-2xl font-black uppercase text-[10px] tracking-widest text-zinc-400 hover:bg-black hover:text-white transition-all"
                >
                  Review Risks
                </button>
              )}
              <button
                onClick={addRiskAndNext}
                disabled={!isCurrentValid}
                className="px-12 py-5 bg-black text-white rounded-2xl font-black uppercase text-[10px] tracking-widest hover:bg-yellow-500 hover:text-black transition-all flex items-center gap-4 disabled:opacity-30"
              >
                Add Risk <ArrowRight size={14} />
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

// ══════════════════════════════════════
// STAGE 7: SYNTHESIS (Decision Memo)
// ══════════════════════════════════════

// FIX 2 & 3 & 4: Headers bold not italic, no number prefixes; dash bullets + indented sub-items; numbered list spacing
function renderMarkdown(text: string): string {
  // Convert headers — bold only (not italic), strip leading number prefixes like "1. "
  let html = text
    .replace(/^### (.+)$/gm, (_, t) => `<h3 class="font-bold text-black mt-8 mb-2 text-lg">${t.replace(/^\d+\.\s*/, '')}</h3>`)
    .replace(/^## (.+)$/gm, (_, t) => `<h3 class="font-bold text-black mt-8 mb-2 text-lg">${t.replace(/^\d+\.\s*/, '')}</h3>`)
    .replace(/^# (.+)$/gm, (_, t) => `<h3 class="font-bold text-black mt-8 mb-2 text-xl">${t.replace(/^\d+\.\s*/, '')}</h3>`);
  // Convert bold and italic
  html = html
    .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
    .replace(/\*(.+?)\*/g, '<em>$1</em>');
  // Convert numbered lists — top-level only; sub-items handled as bullets
  html = html.replace(/((?:^\d+\. .+\n?)+)/gm, (block) => {
    const items = block.trim().split('\n').map(line => {
      const content = line.replace(/^\d+\. /, '');
      return `<li class="ml-4 mb-2">${content}</li>`;
    }).join('');
    return `<ol class="list-decimal ml-4 space-y-2 mt-2 mb-4">${items}</ol>`;
  });
  // Convert bullet lists — support both * and - bullets, including indented sub-items
  html = html.replace(/((?:^[ \t]*[-*] .+\n?)+)/gm, (block) => {
    const items = block.trim().split('\n').map(line => {
      const isIndented = /^[ \t]{2,}/.test(line);
      const content = line.replace(/^[ \t]*[-*] /, '');
      return isIndented
        ? `<li class="ml-8">${content}</li>`
        : `<li class="ml-4">${content}</li>`;
    }).join('');
    return `<ul class="list-disc ml-4 space-y-1 mt-2">${items}</ul>`;
  });
  // Convert paragraphs
  html = html.replace(/\n\n/g, '</p><p class="mt-4">');
  html = html.replace(/^(?!<)(.+)$/gm, '<p>$1</p>');
  return html;
}

function SynthesisStage({
  decision,
  onReset,
}: {
  decision: DecisionState;
  onReset: () => void;
}) {
  const memoRef = useRef<HTMLDivElement>(null);
  const [copyStatus, setCopyStatus] = useState('');
  const [refinedMemo, setRefinedMemo] = useState<string | null>(null);
  const [memoRefining, setMemoRefining] = useState(false);
  const [showRefined, setShowRefined] = useState(false);
  const [aiError, setAiError] = useState<string | null>(null);

  const rankings = useMemo(
    () => calculateRankings(decision.alternatives, decision.criteria, decision.scores),
    [decision.alternatives, decision.criteria, decision.scores]
  );

  const topAlt = rankings[0] || { name: 'N/A', score: 0 };
  const mc = decision.mcResult;

  const handleRefineWithAI = async () => {
    if (!memoRef.current) return;
    const rawText = memoRef.current.innerText;
    setMemoRefining(true);
    await new Promise(resolve => setTimeout(resolve, 0));
    try {
      const result = await geminiService.refineMemo(rawText);
      setRefinedMemo(result.trim());
      setShowRefined(true);
    } catch (err: any) {
      console.error('Refinement failed:', err);
      setAiError(err?.message || 'AI refinement failed. Check your API key configuration.');
      setTimeout(() => setAiError(null), 6000);
    } finally {
      setMemoRefining(false);
    }
  };

  const handleCopy = () => {
    let text: string;
    if (showRefined && refinedMemo) {
      text = refinedMemo;
    } else if (memoRef.current) {
      text = memoRef.current.innerText;
    } else {
      return;
    }
    navigator.clipboard.writeText(text).then(
      () => {
        setCopyStatus('Copied!');
        setTimeout(() => setCopyStatus(''), 2000);
      },
      () => {
        setCopyStatus('Failed');
        setTimeout(() => setCopyStatus(''), 2000);
      }
    );
  };

  return (
    <div className="space-y-12">
      <div id="memo-output" className="p-12 bg-white rounded-[2rem] border border-black/5 shadow-inner">
        <div className="flex justify-between items-start mb-12 border-b border-black/5 pb-12">
          <div>
            <h1 className="serif text-5xl font-black italic tracking-tighter mb-4">
              Structural Decision Memo.
            </h1>
            <div className="flex gap-4 mono text-[10px] uppercase font-bold text-zinc-400">
              <span>{new Date().toLocaleDateString()}</span>
              <div className="w-1 h-1 bg-zinc-200 rounded-full my-auto"></div>
              <span>Protocol v4.0.2</span>
            </div>
          </div>
          <div className="w-16 h-16 bg-black text-white rounded-2xl flex items-center justify-center font-black text-2xl">
            Y
          </div>
        </div>

        <div className="grid md:grid-cols-12 gap-12">
          <div className="md:col-span-4 space-y-12">
            <div>
              <span className="mono text-[9px] uppercase font-bold text-yellow-600 block mb-4">
                Core Analysis Result
              </span>
              <div className="p-6 bg-yellow-500 rounded-2xl text-black">
                <span className="mono text-[8px] uppercase font-black opacity-40">
                  Primary Recommendation
                </span>
                <h4 className="serif text-3xl font-black italic mt-2">{topAlt.name}</h4>
                <p className="mt-4 mono text-xs font-bold opacity-60">
                  Weighted Confidence: {topAlt.score.toFixed(1)} / 10
                </p>
              </div>
            </div>

            {mc && (
              <div>
                <span className="mono text-[9px] uppercase font-bold text-zinc-400 block mb-4">
                  Neural Uncertainty Range
                </span>
                <div className="space-y-4">
                  <div className="flex justify-between mono text-[10px]">
                    <span className="text-zinc-400">Expected Value</span>
                    <span className="font-bold">{fmt(mc.mean)}</span>
                  </div>
                  <div className="h-2 bg-black/5 rounded-full relative overflow-hidden">
                    <div
                      className="absolute top-0 h-full bg-black rounded-full"
                      style={{ left: '30%', width: '40%' }}
                    ></div>
                  </div>
                  <div className="flex justify-between mono text-[9px] text-zinc-300">
                    <span>P10: {fmt(mc.p10)}</span>
                    <span>P90: {fmt(mc.p90)}</span>
                  </div>
                  {mc.probLoss > 0 && (
                    <div className="mono text-[10px] text-red-500">
                      Loss Probability: {(mc.probLoss * 100).toFixed(0)}%
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>

          <div
            ref={memoRef}
            className="md:col-span-8 prose serif max-w-none"
            style={{ display: showRefined ? 'none' : 'block' }}
          >
            <h4 className="text-black font-black italic">Context Summary</h4>
            <p className="text-zinc-600 leading-relaxed">
              This decision evaluates {decision.statement.toLowerCase().replace(/\.$/, '')},{' '}
              a {THRESHOLD_OPTIONS.find((o) => o.value === decision.meta.threshold)?.label || 'significant'}-scale{' '}
              commitment with {decision.meta.reversibilityLabel?.toLowerCase() || 'moderate'} reversibility.{' '}
              {decision.objectives
                ? `Success is defined by: ${decision.objectives.toLowerCase().replace(/\.$/, '')}.`
                : 'No specific success criteria were defined.'}
            </p>

            <h4 className="text-black font-black italic mt-12">Analysis Results</h4>
            <div className="space-y-2 mt-4">
              {rankings.map((r, idx) => (
                <div
                  key={r.id}
                  className={`flex justify-between items-center py-3 border-b border-black/5 ${
                    idx === 0 ? 'font-bold' : ''
                  }`}
                >
                  <span className="text-sm uppercase mono tracking-widest">
                    {idx === 0 ? '\u{1F3C6} ' : `#${idx + 1} `}
                    {r.name}
                  </span>
                  <span className="mono text-xs text-zinc-400">{r.score.toFixed(1)} / 10</span>
                </div>
              ))}
            </div>

            <h4 className="text-black font-black italic mt-12">Criteria Weights</h4>
            <div className="space-y-2 mt-4">
              {[...decision.criteria]
                .sort((a, b) => b.weight - a.weight)
                .map((c) => (
                  <div key={c.id} className="flex justify-between items-center py-3 border-b border-black/5">
                    <span className="font-bold text-sm uppercase mono tracking-widest">{c.name}</span>
                    <span className="mono text-xs text-zinc-400">
                      {(c.weight * 100).toFixed(0)}% Priority
                    </span>
                  </div>
                ))}
            </div>

            {mc && (
              <>
                <h4 className="text-black font-black italic mt-12">Outcome Uncertainty</h4>
                <p className="text-zinc-600">
                  Based on Monte Carlo simulation (10,000 trials), the expected value of{' '}
                  <strong>{topAlt.name}</strong> is <strong className="mono">{fmt(mc.mean)}</strong>.
                  There's an 80% confidence that the outcome will fall between{' '}
                  <strong className="mono">{fmt(mc.p10)}</strong> (P10) and{' '}
                  <strong className="mono">{fmt(mc.p90)}</strong> (P90).
                  {mc.probLoss > 0 && (
                    <>
                      {' '}
                      Risk of loss: <strong>{(mc.probLoss * 100).toFixed(0)}%</strong> probability of
                      net negative outcome.
                    </>
                  )}
                </p>
              </>
            )}

            {decision.risks.length > 0 && (
              <>
                <h4 className="text-black font-black italic mt-12">Key Risks &amp; Mitigation</h4>
                <ul className="list-disc pl-5 space-y-2">
                  {decision.risks.map((r, i) => (
                    <li key={i}>
                      <strong>{r.description}</strong> (Likelihood: {r.likelihood}, Impact: {r.impact})
                      {r.mitigation && (
                        <>
                          {' \u2014 '}
                          <em>Mitigation:</em> {r.mitigation}
                        </>
                      )}
                    </li>
                  ))}
                </ul>
              </>
            )}

            <h4 className="text-black font-black italic mt-12">Next Steps</h4>
            <p className="text-zinc-600">
              1. Share this memo with key stakeholders for alignment
              <br />
              2. Validate assumptions, especially around{' '}
              {decision.criteria.length > 0 ? decision.criteria[0].name : 'key criteria'}
              <br />
              3. Implement mitigation plans for high-likelihood/high-impact risks
              <br />
              4. Set a review checkpoint at 90 days to reassess assumptions
            </p>
          </div>
        </div>

        {/* Refined memo display */}
        {showRefined && refinedMemo && (
          <div
            className="md:col-span-8 prose serif max-w-none mt-8"
            dangerouslySetInnerHTML={{ __html: renderMarkdown(refinedMemo) }}
          />
        )}
      </div>

      {/* AI Refinement + Actions */}
      {memoRefining && (
        <div className="flex items-center gap-3 p-4 rounded-xl bg-yellow-500/5 border border-yellow-500/10">
          <Loader2 className="animate-spin text-yellow-600" size={18} />
          <span className="text-sm text-zinc-500">Polishing memo for executive review...</span>
        </div>
      )}

      {aiError && (
        <div className="flex items-center gap-3 p-4 rounded-xl bg-red-500/5 border border-red-500/10">
          <AlertTriangle className="text-red-500 shrink-0" size={18} />
          <span className="text-sm text-red-600">{aiError}</span>
        </div>
      )}

      {refinedMemo && !memoRefining && (
        <div className="flex items-center gap-2">
          <button
            onClick={() => setShowRefined(false)}
            className={`text-xs px-4 py-2 rounded-lg font-bold transition-all ${
              !showRefined ? 'bg-black text-white' : 'bg-black/5 text-zinc-500'
            }`}
          >
            Original
          </button>
          <button
            onClick={() => setShowRefined(true)}
            className={`text-xs px-4 py-2 rounded-lg font-bold transition-all flex items-center gap-1 ${
              showRefined ? 'bg-black text-white' : 'bg-black/5 text-zinc-500'
            }`}
          >
            <Sparkles size={12} /> AI Refined
          </button>
        </div>
      )}

      <div className="flex flex-wrap gap-4 pt-8 justify-between">
        <div className="flex gap-4">
          {/* FIX 1: Print via new window (no layout gaps/stretching) + renamed to "Print Memo" */}
          <button
            onClick={() => {
              const memoEl = document.getElementById('memo-output');
              if (!memoEl) return;
              const pw = window.open('', '_blank');
              if (!pw) return;
              pw.document.write(`<!DOCTYPE html><html><head><title>Decision Memo</title><style>
                body { font-family: Georgia, serif; max-width: 800px; margin: 40px auto; padding: 0 20px; color: #000; font-size: 11pt; }
                h1 { font-size: 22pt; font-weight: 900; margin-bottom: 6px; }
                h3, h4 { font-size: 13pt; font-weight: bold; margin-top: 20px; margin-bottom: 6px; }
                ul, ol { padding-left: 20px; margin: 6px 0; }
                li { margin-bottom: 4px; line-height: 1.5; }
                p { line-height: 1.6; margin: 6px 0; }
                strong { font-weight: bold; }
                .bg-yellow-500 { background-color: #eab308; }
                .rounded-2xl { border-radius: 1rem; }
                .mono { font-family: monospace; }
              </style></head><body>${memoEl.innerHTML}</body></html>`);
              pw.document.close();
              pw.focus();
              setTimeout(() => { pw.print(); pw.close(); }, 600);
            }}
            className="px-8 py-4 bg-black text-white rounded-xl font-black uppercase text-[10px] tracking-widest flex items-center gap-2 hover:bg-zinc-800 transition-all"
          >
            <Printer size={14} /> Print Memo
          </button>
          <button
            onClick={handleCopy}
            className="px-8 py-4 bg-black/5 text-black rounded-xl font-black uppercase text-[10px] tracking-widest flex items-center gap-2 hover:bg-black/10 transition-all"
          >
            <Copy size={14} /> {copyStatus || 'Copy to Ledger'}
          </button>
          {!refinedMemo && !memoRefining && (
            <button
              onClick={handleRefineWithAI}
              className="px-8 py-4 bg-yellow-500/10 text-yellow-700 rounded-xl font-black uppercase text-[10px] tracking-widest flex items-center gap-2 hover:bg-yellow-500 hover:text-black transition-all"
            >
              <Sparkles size={14} /> Refine with AI
            </button>
          )}
        </div>
        <button
          onClick={onReset}
          className="px-8 py-4 border border-black/10 text-zinc-400 rounded-xl font-black uppercase text-[10px] tracking-widest flex items-center gap-2 hover:bg-black hover:text-white transition-all"
        >
          <RotateCcw size={14} /> Reset Lab
        </button>
      </div>
    </div>
  );
}

// ══════════════════════════════════════
// MAIN COMPONENT
// ══════════════════════════════════════

const DecisionLab: React.FC = () => {
  const [decision, dispatch] = useReducer(decisionReducer, INITIAL_STATE);
  const [currentStageIdx, setCurrentStageIdx] = useState(0);
  const [loading, setLoading] = useState(false);

  const shouldShowPreMortem = decision.meta.threshold > 100000;

  const goNext = useCallback(() => {
    setCurrentStageIdx((i) => {
      let next = Math.min(i + 1, STAGES.length - 1);
      if (STAGES[next].id === 'premortem' && !shouldShowPreMortem) {
        next = Math.min(next + 1, STAGES.length - 1);
      }
      return next;
    });
  }, [shouldShowPreMortem]);

  const goBack = useCallback(() => {
    setCurrentStageIdx((i) => {
      let prev = Math.max(i - 1, 0);
      if (STAGES[prev].id === 'premortem' && !shouldShowPreMortem) {
        prev = Math.max(prev - 1, 0);
      }
      return prev;
    });
  }, [shouldShowPreMortem]);

  const resetApp = useCallback(() => {
    dispatch({ type: 'RESET' });
    setCurrentStageIdx(0);
  }, []);

  useEffect(() => {
    const style = document.createElement('style');
    style.id = 'print-memo-styles';
    style.textContent = `
      @media print {
        body > * { visibility: hidden; }
        #memo-output { visibility: visible; position: fixed; top: 0; left: 0; width: 100%; padding: 40px; font-size: 11pt; }
        #memo-output * { visibility: visible; }
        #memo-output .shadow-inner,
        #memo-output .shadow-2xl { box-shadow: none; }
      }
    `;
    document.head.appendChild(style);
    return () => {
      const el = document.getElementById('print-memo-styles');
      if (el) el.remove();
    };
  }, []);

  const currentStage = STAGES[currentStageIdx];

  return (
    <section className="py-40 px-6 sm:px-12 bg-[#fbfaf8] relative border-y border-black/5 overflow-hidden">
      <div className="max-w-5xl mx-auto">
        {/* Progress System */}
        <div className="flex justify-between items-center mb-24 px-4 overflow-x-auto no-scrollbar gap-8">
          {STAGES.map((s, idx) => {
            if (s.id === 'premortem' && !shouldShowPreMortem) return null;
            return (
              <div key={s.id} className="flex flex-col items-center min-w-[60px] relative">
                <div
                  onClick={() => idx < currentStageIdx && setCurrentStageIdx(idx)}
                  className={`w-10 h-10 rounded-xl flex items-center justify-center transition-all z-10 ${
                    idx === currentStageIdx
                      ? 'bg-black text-white shadow-xl scale-110 cursor-default'
                      : idx < currentStageIdx
                      ? 'bg-yellow-500 text-black cursor-pointer'
                      : 'bg-black/5 text-zinc-300 cursor-default'
                  }`}
                >
                  {idx < currentStageIdx ? <Check size={18} /> : <s.icon size={18} />}
                </div>
                <span
                  className={`mono text-[9px] uppercase font-bold tracking-widest mt-4 ${
                    idx === currentStageIdx ? 'text-black' : idx < currentStageIdx ? 'text-zinc-600' : 'text-zinc-300'
                  }`}
                >
                  {s.label}
                </span>
                {idx < STAGES.length - 1 && (
                  <div className="absolute top-5 left-10 w-full h-[1px] bg-black/5 -z-0"></div>
                )}
              </div>
            );
          })}
        </div>

        {/* Stage Header */}
        <div className="relative animate-in fade-in slide-in-from-bottom-12 duration-700">
          <div className="mb-16">
            <div className="flex items-center gap-3 mb-6">
              <Scan size={14} className="text-yellow-600 animate-pulse" />
              <span className="mono text-[10px] uppercase font-bold tracking-[0.4em] text-zinc-400">
                Decision Protocol // {currentStage.label}
              </span>
            </div>
            <h2 className="serif text-6xl font-black italic tracking-tighter text-black">
              {currentStage.id === 'framing' && 'Context Architecture.'}
              {currentStage.id === 'alternatives' && 'Choice Parameters.'}
              {currentStage.id === 'criteria' && 'Valuation Logic.'}
              {currentStage.id === 'scoring' && 'Diagnostic Scores.'}
              {currentStage.id === 'uncertainty' && 'Neural Forecast.'}
              {currentStage.id === 'premortem' && 'Risk Audit.'}
              {currentStage.id === 'synthesis' && 'Final Refraction.'}
            </h2>
          </div>

          {/* Stage Content */}
          <div className="glass-card p-12 rounded-[3rem] shadow-2xl shadow-black/5 relative overflow-hidden">
            {currentStage.id === 'framing' && (
              <FramingStage decision={decision} dispatch={dispatch} onComplete={goNext} />
            )}
            {currentStage.id === 'alternatives' && (
              <AlternativesStage decision={decision} dispatch={dispatch} onComplete={goNext} onBack={goBack} />
            )}
            {currentStage.id === 'criteria' && (
              <CriteriaStage decision={decision} dispatch={dispatch} onComplete={goNext} onBack={goBack} />
            )}
            {currentStage.id === 'scoring' && (
              <ScoringStage decision={decision} dispatch={dispatch} onComplete={goNext} onBack={goBack} />
            )}
            {currentStage.id === 'uncertainty' && (
              <UncertaintyStage decision={decision} dispatch={dispatch} onComplete={goNext} onBack={goBack} />
            )}
            {currentStage.id === 'premortem' && shouldShowPreMortem && (
              <PreMortemStage decision={decision} dispatch={dispatch} onComplete={goNext} onBack={goBack} />
            )}
            {currentStage.id === 'synthesis' && (
              <SynthesisStage decision={decision} onReset={resetApp} />
            )}
          </div>
        </div>

        {/* Global Loading Overlay */}
        {loading && (
          <div className="fixed inset-0 bg-white/80 backdrop-blur-md z-[100] flex flex-col items-center justify-center space-y-8 animate-in fade-in duration-300">
            <div className="w-20 h-20 bg-black rounded-3xl flex items-center justify-center animate-bounce shadow-2xl">
              <Zap className="text-yellow-500 animate-pulse" size={40} />
            </div>
            <div className="text-center">
              <h3 className="serif text-3xl font-black italic mb-2">Neural Processing...</h3>
              <p className="mono text-[10px] text-zinc-400 uppercase tracking-[0.4em]">
                Stabilizing Cognitive Buffers
              </p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default DecisionLab;
