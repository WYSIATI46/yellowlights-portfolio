import { DecisionState } from '../types';

// ══════════════════════════════════════
// SERVER-SIDE API CLIENT
// ══════════════════════════════════════

const API_ENDPOINT = '/api/gemini';

async function callServerAPI(action: string, data: any): Promise<any> {
  try {
    const response = await fetch(API_ENDPOINT, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ action, data }),
    });

    if (!response.ok) {
      const error = await response.json().catch(() => ({ error: 'Unknown error' }));

      if (response.status === 429) {
        const retryAfter = error.retryAfter || 60;
        throw new Error(`Rate limit exceeded. Please try again in ${retryAfter} seconds.`);
      }

      throw new Error(error.error || `API error: ${response.status}`);
    }

    const { result } = await response.json();
    return result;
  } catch (error: any) {
    if (error.message.includes('Failed to fetch')) {
      throw new Error('Unable to connect to AI service. Please check your connection.');
    }
    throw error;
  }
}

// ══════════════════════════════════════
// PUBLIC API
// ══════════════════════════════════════

export const geminiService = {
  async brainstormAlternatives(
    decision: Partial<DecisionState>
  ): Promise<{ suggestions: string[]; rationale: string } | null> {
    return await callServerAPI('brainstormAlternatives', { decision });
  },

  async generateScoringInsight(
    decision: DecisionState,
    scores: Record<string, Record<string, number>>,
    rankings: any[]
  ): Promise<string> {
    return await callServerAPI('generateScoringInsight', { decision, scores, rankings });
  },

  async brainstormRisks(
    decision: DecisionState,
    topChoice: { name: string }
  ): Promise<any[] | null> {
    return await callServerAPI('brainstormRisks', { decision, topChoice });
  },

  async refineMemo(rawText: string): Promise<string> {
    return await callServerAPI('refineMemo', { rawText });
  },
};
