import yellowLight from './articles/yellow-light.md?raw';
import systemicHeuristics from './articles/systemic-heuristics.md?raw';
import designingSecondThought from './articles/designing-second-thought.md?raw';
import architectsOfJudgment from './articles/architects-of-judgment.md?raw';
import soldierMappedMind from './articles/soldier-mapped-mind.md?raw';
import mindBehindMirror from './articles/mind-behind-mirror.md?raw';
import twoMindsOneIdea from './articles/two-minds-one-idea.md?raw';
import runningOldSoftware from './articles/running-old-software.md?raw';
import speedTrap from './articles/speed-trap.md?raw';
import confidenceNotAccuracy from './articles/confidence-not-accuracy.md?raw';
import preDecision from './articles/pre-decision.md?raw';
import noiseNotHearing from './articles/noise-not-hearing.md?raw';
import foxesHedgehogs from './articles/foxes-hedgehogs.md?raw';
import biasAlwaysBug from './articles/bias-always-bug.md?raw';
import biasedOracle from './articles/biased-oracle.md?raw';
import decisionHygiene from './articles/decision-hygiene.md?raw';

export interface Article {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  date: string;
  readTime: string;
  content: string;
}

export const ARTICLES: Article[] = [
  {
    id: '1',
    slug: 'yellow-light',
    title: 'The Yellow Light: In Praise of the Intentional Pause',
    subtitle: "In a world calibrated for instant clicks, the most radical design intervention is a deliberate hesitation. Mapping the benefits of \"Choice Sludge.\"",
    date: 'March 2026',
    readTime: '11 min read',
    content: yellowLight,
  },
  {
    id: '2',
    slug: 'systemic-heuristics',
    title: 'Systemic Heuristics in Institutional Logic',
    subtitle: 'How organizations inherit the biases of their founders and architects. A structural analysis of decision-making inheritance.',
    date: 'March 2026',
    readTime: '15 min read',
    content: systemicHeuristics,
  },
  {
    id: '3',
    slug: 'designing-second-thought',
    title: 'Designing for the Second Thought',
    subtitle: 'Why modern UX is failing human psychology by optimizing exclusively for speed, and how we can re-engineer friction.',
    date: 'March 2026',
    readTime: '8 min read',
    content: designingSecondThought,
  },
  {
    id: '4',
    slug: 'architects-of-judgment',
    title: 'The Architects of Judgment: A History of Decision Science',
    subtitle: "From Aristotle's phronesis to AI-augmented forecasting, the lineage of thinkers who built the science of how we choose.",
    date: 'March 2026',
    readTime: '14 min read',
    content: architectsOfJudgment,
  },
  {
    id: '5',
    slug: 'soldier-mapped-mind',
    title: 'The Soldier Who Mapped the Mind: A Portrait of Amos Tversky',
    subtitle: "He was the most brilliant psychologist of his generation. He died at fifty-nine. History has been catching up ever since.",
    date: 'March 2026',
    readTime: '12 min read',
    content: soldierMappedMind,
  },
  {
    id: '6',
    slug: 'mind-behind-mirror',
    title: 'The Mind Behind the Mirror: A Portrait of Daniel Kahneman',
    subtitle: "He spent his life mapping the flaws in human judgment. At ninety, he made his final decision. The most deliberate of all.",
    date: 'March 2026',
    readTime: '12 min read',
    content: mindBehindMirror,
  },
  {
    id: '7',
    slug: 'two-minds-one-idea',
    title: 'Two Minds, One Idea: The Collaboration That Rewired How We Think',
    subtitle: "For a decade, Kahneman and Tversky were inseparable. What they built changed economics, law, and medicine — and how any honest person looks at their own mind.",
    date: 'March 2026',
    readTime: '13 min read',
    content: twoMindsOneIdea,
  },
  {
    id: '8',
    slug: 'running-old-software',
    title: "You're Not Irrational. You're Running Old Software.",
    subtitle: "Cognitive bias isn't a character flaw. It's an evolutionary mismatch — ancient hardware running in a modern environment.",
    date: 'March 2026',
    readTime: '10 min read',
    content: runningOldSoftware,
  },
  {
    id: '9',
    slug: 'speed-trap',
    title: 'The Speed Trap: How Urgency Hijacks Your Best Thinking',
    subtitle: "Modern work culture rewards urgency. It penalizes deliberation. Here's the cognitive cost nobody's accounting for.",
    date: 'March 2026',
    readTime: '10 min read',
    content: speedTrap,
  },
  {
    id: '10',
    slug: 'confidence-not-accuracy',
    title: "Confidence Is Not Accuracy: A Field Guide to Knowing What You Don't Know",
    subtitle: "The most dangerous thing a decision-maker can do is confuse how certain they feel with how right they are.",
    date: 'March 2026',
    readTime: '11 min read',
    content: confidenceNotAccuracy,
  },
  {
    id: '11',
    slug: 'pre-decision',
    title: 'The Pre-Decision: Why What Happens Before the Choice Matters Most',
    subtitle: "The quality of most decisions is determined before deliberation begins. Everything is framing.",
    date: 'March 2026',
    readTime: '10 min read',
    content: preDecision,
  },
  {
    id: '12',
    slug: 'noise-not-hearing',
    title: "The Noise You're Not Hearing",
    subtitle: "Everyone talks about bias. Almost no one is talking about the larger problem: random variability in judgments that should be identical.",
    date: 'March 2026',
    readTime: '11 min read',
    content: noiseNotHearing,
  },
  {
    id: '13',
    slug: 'foxes-hedgehogs',
    title: 'Foxes, Hedgehogs, and the Discipline of Being Wrong Less Often',
    subtitle: "Philip Tetlock spent decades studying expert prediction. What he found should unsettle anyone who trusts their own convictions.",
    date: 'March 2026',
    readTime: '11 min read',
    content: foxesHedgehogs,
  },
  {
    id: '14',
    slug: 'bias-always-bug',
    title: 'Is Bias Always a Bug? The Adaptive Case for Heuristics',
    subtitle: "The debiasing industry assumes your intuitions are the enemy. Gerd Gigerenzer disagrees — and so does the data.",
    date: 'March 2026',
    readTime: '11 min read',
    content: biasAlwaysBug,
  },
  {
    id: '15',
    slug: 'biased-oracle',
    title: 'The Biased Oracle: What LLMs Get Wrong About Judgment',
    subtitle: "AI doesn't just inherit human cognitive biases — in key domains, it amplifies them. The question isn't whether to use it. It's how.",
    date: 'March 2026',
    readTime: '12 min read',
    content: biasedOracle,
  },
  {
    id: '16',
    slug: 'decision-hygiene',
    title: 'Decision Hygiene as Organizational Infrastructure',
    subtitle: "Training individuals to think better rarely works. Redesigning the environment they decide inside of usually does.",
    date: 'March 2026',
    readTime: '11 min read',
    content: decisionHygiene,
  },
];
