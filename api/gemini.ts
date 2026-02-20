import type { VercelRequest, VercelResponse } from '@vercel/node';
import { GoogleGenerativeAI } from '@google/generative-ai';

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY || '');
const model = genAI.getGenerativeModel({ model: 'gemini-1.5-flash' });

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { action, data } = req.body;

  if (!process.env.GEMINI_API_KEY) {
    return res.status(500).json({ error: 'API key not configured' });
  }

  try {
    let prompt = '';

    if (action === 'brainstormAlternatives') {
      const { decision } = data;
      prompt = `You are a decision-making expert. Given this decision context:
Decision: ${decision.decisionStatement || ''}
Context: ${decision.context || ''}
Current alternatives: ${(decision.alternatives || []).join(', ')}

Suggest 3-5 additional creative alternatives not already listed. Return JSON only:
{"suggestions": ["alt1", "alt2", "alt3"], "rationale": "brief explanation"}`;
    }

    else if (action === 'generateScoringInsight') {
      const { decision, rankings } = data;
      const top = rankings?.[0]?.name || 'top option';
      prompt = `You are a decision analyst. The top-ranked option is "${top}" for this decision: "${decision.decisionStatement}".
Provide a 2-3 sentence insight on what this ranking reveals. Return JSON only:
{"insight": "your insight here"}`;
    }

    else if (action === 'brainstormRisks') {
      const { decision, topChoice } = data;
      prompt = `You are a risk analyst doing a pre-mortem. For this decision: "${decision.decisionStatement}"
Top choice: "${topChoice.name}"

Identify 3-4 key risks. Return JSON only:
{"risks": [{"title": "risk name", "description": "what could go wrong", "likelihood": "Low|Medium|High", "impact": "Low|Medium|High"}]}`;
    }

    else if (action === 'refineMemo') {
      const { rawText } = data;
      prompt = `Refine this decision memo into clear, professional prose. Keep all facts. Return JSON only:
{"refined": "refined memo text here"}

Memo: ${rawText}`;
    }

    else {
      return res.status(400).json({ error: 'Unknown action' });
    }

    const result = await model.generateContent(prompt);
    const text = result.response.text().replace(/```json\n?|\n?```/g, '').trim();
    const parsed = JSON.parse(text);

    return res.status(200).json({ result: parsed });

  } catch (error: any) {
    console.error('Gemini API error:', error);
    return res.status(500).json({ error: error.message || 'Internal server error' });
  }
}
