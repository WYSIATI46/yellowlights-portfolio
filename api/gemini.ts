module.exports = async function handler(req: any, res: any) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
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
      prompt = `You are a decision-making expert. Given this decision context:
Decision: ${decision.decisionStatement || ''}
Context: ${decision.context || ''}
Current alternatives: ${(decision.alternatives || []).join(', ')}

Suggest 3-5 additional creative alternatives not already listed. Return JSON only, no markdown:
{"suggestions": ["alt1", "alt2", "alt3"], "rationale": "brief explanation"}`;
    } else if (action === 'generateScoringInsight') {
      const { decision, rankings } = data;
      const top = rankings?.[0]?.name || 'top option';
      prompt = `You are a decision analyst. The top-ranked option is "${top}" for this decision: "${decision.decisionStatement}".
Provide a 2-3 sentence insight. Return JSON only, no markdown:
{"insight": "your insight here"}`;
    } else if (action === 'brainstormRisks') {
      const { decision, topChoice } = data;
      prompt = `You are a risk analyst. For this decision: "${decision.decisionStatement}", top choice: "${topChoice.name}".
Identify 3-4 key risks. Return JSON only, no markdown:
{"risks": [{"title": "risk name", "description": "what could go wrong", "likelihood": "Low|Medium|High", "impact": "Low|Medium|High"}]}`;
    } else if (action === 'refineMemo') {
      const { rawText } = data;
      prompt = `Refine this decision memo into clear professional prose. Return JSON only, no markdown:
{"refined": "refined memo text here"}

Memo: ${rawText}`;
    } else {
      return res.status(400).json({ error: 'Unknown action' });
    }

    const geminiRes = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${apiKey}`,
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
