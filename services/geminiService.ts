import { DecisionState } from '../types';

const GEMINI_ENDPOINT = 'https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent';

function getApiKey(): string {
  return (typeof process !== 'undefined' && process.env?.API_KEY) || 
         (typeof process !== 'undefined' && process.env?.GEMINI_API_KEY) || '';
}

async function callGeminiAPI(
  prompt: string,
  options: { timeout?: number; maxTokens?: number } = {}
): Promise<string> {
  const apiKey = getApiKey();
  if (!apiKey) throw new Error('Gemini API key not configured. Add GEMINI_API_KEY to .env.local');
  const timeout = options.timeout || 15000;
  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), timeout);
  try {
    const response = await fetch(`${GEMINI_ENDPOINT}?key=${apiKey}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        contents: [{ parts: [{ text: prompt }] }],
        generationConfig: {
          temperature: 0.7,
          maxOutputTokens: options.maxTokens || 1000,
          topP: 0.95,
        },
      }),
      signal: controller.signal,
    });
    clearTimeout(timeoutId);
    if (!response.ok) {
      const err = await response.json().catch(() => ({}));
      throw new Error((err as any)?.error?.message || `API error: ${response.status}`);
    }
    const data = await response.json();
    return (data as any).candidates?.[0]?.content?.parts?.[0]?.text || '';
  } catch (error: any) {
    clearTimeout(timeoutId);
    if (error.name === 'AbortError') throw new Error('Request timed out');
    throw error;
  }
}

function safeParseJSON(text: string): any {
  try {
    const match = text.match(/```(?:json)?\s*([\s\S]*?)```/);
    if (match) return JSON.parse(match[1].trim());
    const jsonMatch = text.match(/(\{[\s\S]*\}|\[[\s\S]*\])/);
    if (jsonMatch) return JSON.parse(jsonMatch[1]);
    return JSON.parse(text.trim());
  } catch {
    return null;
  }
}

const THRESHOLD_OPTIONS = [
  { label: 'Under $50K', value: 25000 },
  { label: '$50K - $100K', value: 75000 },
  { label: '$100K - $500K', value: 250000 },
  { label: '$500K - $1M', value: 750000 },
  { label: 'Over $1M', value: 1500000 },
];

function formatThreshold(threshold: number): string {
  const opt = THRESHOLD_OPTIONS.find((o) => o.value === threshold);
  return opt ? opt.label : 'Unknown';
}

function buildAlternativePrompt(decision: Partial<DecisionState>): string {
  return `You are a strategic decision advisor. A business leader is evaluating a decision.
DECISION CONTEXT:
- Statement: "${decision.statement}"
- Success criteria: "${decision.objectives}"
- Current alternatives: ${decision.alternatives?.map((a) => '"' + a.name + '"').join(', ')}
- Scale: ${formatThreshold(decision.meta?.threshold || 0)}
- Reversibility: ${decision.meta?.reversibilityLabel}
TASK: Suggest 2-3 additional alternatives they might not have considered.
Focus on: hybrid approaches, phased/staged strategies, non-obvious options.
OUTPUT FORMAT (JSON only, no markdown):
{"suggestions":["Alternative description here"],"rationale":"Brief 1-sentence explanation"}`;
}

function buildScoringInsightPrompt(
  decision: DecisionState,
  scores: Record<string, Record<string, number>>,
  rankings: any[]
): string {
  const rankedDetails = rankings
    .map((r: any) => {
      const altScores = decision.criteria
        .map((c) => c.name + ': ' + scores[r.id][c.id] + '/10 (weight: ' + (c.weight * 100).toFixed(0) + '%)')
        .join(', ');
      return '"' + r.name + '": Total ' + r.score.toFixed(1) + '/10 [' + altScores + ']';
    })
    .join('\n');
  return `Analyze multi-criteria decision scores:
${rankedDetails}
TOP: "${rankings[0].name}" (${rankings[0].score.toFixed(1)}/10)
RUNNER-UP: "${rankings[1]?.name}" (${rankings[1]?.score.toFixed(1)}/10)
GAP: ${(rankings[0].score - (rankings[1]?.score || 0)).toFixed(1)} points
Provide ONE insightful observation (2-3 sentences) about key trade-offs. Plain text, conversational.`;
}

function buildRiskBrainstormPrompt(decision: DecisionState, topChoice: { name: string }): string {
  return `Pre-mortem for: "${topChoice.name}". Decision: "${decision.statement}". Scale: ${formatThreshold(decision.meta.threshold)}. Reversibility: ${decision.meta.reversibilityLabel}. Objectives: "${decision.objectives}".
Generate 4-5 specific risks. JSON only:
{"risks":[{"description":"1-sentence risk","category":"Execution|Market|Technical|Organizational|Financial","suggestedLikelihood":"high|medium|low","suggestedImpact":"high|medium|low"}]}`;
}

function buildMemoRefinementPrompt(rawMemoText: string): string {
  return `Polish this decision memo for executive review. Add exec summary, tighten language, keep all data. Max 20% length increase. Return as plain text with markdown headers.
MEMO:
${rawMemoText}`;
}

export const geminiService = {
  async brainstormAlternatives(decision: Partial<DecisionState>): Promise<{ suggestions: string[]; rationale: string } | null> {
    const prompt = buildAlternativePrompt(decision);
    const raw = await callGeminiAPI(prompt, { timeout: 15000 });
    return safeParseJSON(raw);
  },
  async generateScoringInsight(decision: DecisionState, scores: Record<string, Record<string, number>>, rankings: any[]): Promise<string> {
    const prompt = buildScoringInsightPrompt(decision, scores, rankings);
    const result = await callGeminiAPI(prompt, { timeout: 15000 });
    return result.trim();
  },
  async brainstormRisks(decision: DecisionState, topChoice: { name: string }): Promise<any[] | null> {
    const prompt = buildRiskBrainstormPrompt(decision, topChoice);
    const raw = await callGeminiAPI(prompt, { timeout: 15000 });
    const parsed = safeParseJSON(raw);
    return parsed?.risks || null;
  },
  async refineMemo(rawText: string): Promise<string> {
    const prompt = buildMemoRefinementPrompt(rawText);
    return await callGeminiAPI(prompt, { timeout: 20000, maxTokens: 1500 });
  },
};
