export default async function handler(req: any, res: any) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const contentLength = parseInt(req.headers['content-length'] || '0');
  if (contentLength > 8192) {
    res.status(413).json({ error: 'Request too large' });
    return;
  }

  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) {
    return res.status(500).json({ error: 'API key not configured' });
  }
  const { action, data } = req.body;
  try {
    let prompt = '';
    if (action === 'brainstormAlternatives') {
      const { decision } = data;
      const safeStatement = (decision.statement || '').slice(0, 500);
      const safeObjectives = (decision.objectives || '').slice(0, 500);
      const safeAlternatives = (decision.alternatives || []).map((a: any) => (a.name || '').slice(0, 500)).join(', ').slice(0, 1500);
      prompt = `You are a decision-making expert. Given this decision context:
Decision: ${safeStatement}
Context: ${safeObjectives}
Current alternatives: ${safeAlternatives}
Suggest 3-5 additional creative alternatives not already listed. Return JSON only, no markdown:
{"suggestions": ["alt1", "alt2", "alt3"], "rationale": "brief explanation"}`;
    } else if (action === 'generateScoringInsight') {
      const { decision, rankings } = data;
      const safeTop = (rankings?.[0]?.name || 'top option').slice(0, 500);
      const safeStatement = (decision.statement || '').slice(0, 500);
      prompt = `You are a decision analyst. The top-ranked option is "${safeTop}" for this decision: "${safeStatement}".
Provide a 2-3 sentence insight. Return JSON only, no markdown:
{"insight": "your insight here"}`;
    } else if (action === 'brainstormRisks') {
      const { decision, topChoice } = data;
      const safeStatement = (decision.statement || '').slice(0, 500);
      const safeTopChoice = (topChoice.name || '').slice(0, 500);
      prompt = `You are a risk analyst. For this decision: "${safeStatement}", top choice: "${safeTopChoice}".
Identify 3-4 key risks. Return JSON only, no markdown:
{"risks": [{"title": "risk name", "description": "what could go wrong", "likelihood": "Low|Medium|High", "impact": "Low|Medium|High"}]}`;
    } else if (action === 'refineMemo') {
      const { rawText } = data;
      const safeRawText = (rawText || '').slice(0, 3000);
      prompt = `Refine this decision memo into clear professional prose. Always start numbered lists from 1. Use ## for section headers and ### for subsection headers. Return JSON only, no markdown:
{"refined": "refined memo text here"}
Memo: ${safeRawText}`;
    } else {
      return res.status(400).json({ error: 'Unknown action' });
    }
    const geminiRes = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${apiKey}`,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          contents: [{ parts: [{ text: prompt }] }]
        }),
      }
    );
    if (!geminiRes.ok) {
      const errText = await geminiRes.text();
      console.error('Gemini API error:', errText);
      return res.status(500).json({ error: `Gemini error: ${geminiRes.status}` });
    }
    const geminiData = await geminiRes.json();
    const text = geminiData.candidates?.[0]?.content?.parts?.[0]?.text || '';
    const clean = text.replace(/```json\n?|\n?```/g, '').trim();
    const parsed = JSON.parse(clean);
    return res.status(200).json({ result: parsed });
  } catch (error: any) {
    console.error('Handler error:', error);
    return res.status(500).json({ error: error.message || 'Internal server error' });
  }
}
