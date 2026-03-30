
import { Project, BlogPost } from './types';

export const PROJECTS: Project[] = [
  { id: 'heuristics-playground', title: 'Heuristics Playground', description: 'Interactive explorer of 20+ mental shortcuts — where they help, where they hurt, and how to deploy them deliberately.', tags: ['Science', 'UI'], link: 'https://yl-app-heuristics-playground.vercel.app' },
  { id: 'cognitive-mapping-01', title: 'PTCE Visualization Engine', description: 'Dynamic visualization of Prospect Theory\'s core curves with adjustable parameters and real-world scenario mapping.', tags: ['Science', 'UI'], link: 'https://periodic-table-of-cognitive-element.vercel.app' },
  { id: 'intuition-duel', title: 'AI vs Human Intuition Duel', description: 'A head-to-head challenge pitting your gut instincts against an AI baseline. Reveals where human intuition excels — and where it reliably fails.', tags: ['Behavioral', 'Science'], link: 'https://yl-app-intuition-duel.vercel.app' },
  { id: 'bias-scenario-lab', title: 'Bias Scenario Lab', description: 'Experiential simulations engineered to trigger specific cognitive biases. Identify the trap before it closes.', tags: ['Behavioral', 'Science'], link: 'https://yl-app-bias-scenario-lab.vercel.app' },
  { id: 'judgment-calibrator', title: 'The Judgment Calibrator', description: 'Measures the gap between your confidence and your accuracy. Build the habit of knowing what you know — and what you don\'t.', tags: ['Science', 'Logic'], link: 'https://yl-app-judgment-calibrator.vercel.app' },
  { id: 'reasoning-coach', title: 'Guided Reasoning Coach', description: 'Walks you through complex problems step by step, surfacing assumptions, alternatives, and blind spots at each stage.', tags: ['Logic', 'Architecture'], link: 'https://yl-app-reasoning-coach.vercel.app' },
  { id: 'second-opinion', title: 'Second Opinion Simulator', description: 'Generates a structured adversarial perspective on any decision. Forces genuine consideration of the alternative you\'re resisting.', tags: ['Behavioral', 'Logic'], link: 'https://yl-app-second-opinion.vercel.app' },
  { id: 'tradeoff-visualizer', title: 'Tradeoff Visualizer', description: 'Maps competing values onto a visual landscape, making the real costs of every option visible before you commit.', tags: ['Architecture', 'Logic'], link: 'https://yl-app-tradeoff-visualizer.vercel.app' },
  { id: 'decision-speed', title: 'Decision Speed Calibrator', description: 'Identifies when you\'re deciding too fast, too slow, or with the wrong deliberation level for the stakes at hand.', tags: ['Behavioral', 'Science'], link: 'https://yl-app-decision-speed.vercel.app' },
  { id: 'base-rate-finder', title: 'Base Rate Finder', description: 'Surfaces the statistical baseline before any prediction. Counters optimism bias by anchoring judgment in population-level evidence.', tags: ['Science', 'Logic'], link: 'https://yl-app-base-rate-finder.vercel.app' },
  { id: 'centaur-composer', title: 'Centaur Decision Composer', description: 'Maps which decision sub-tasks belong to human judgment and which belong to algorithmic processing.', tags: ['Architecture', 'AI'], link: 'https://yl-app-centaur-composer.vercel.app' },
  { id: 'values-compass', title: 'Values Clarification Compass', description: 'Surfaces and ranks your actual values — not the ones you assume you hold — before a high-stakes decision demands you choose.', tags: ['Architecture', 'Behavioral'], link: 'https://yl-app-values-compass.vercel.app' },
  { id: 'sunk-cost', title: 'Sunk Cost Escape Hatch', description: 'Reframes decisions held hostage by prior investment entirely around future value, severing the anchor of past cost.', tags: ['Behavioral', 'Architecture'], link: 'https://yl-app-sunk-cost.vercel.app' },
  { id: 'prospect-theory', title: 'Prospect Theory Lab', description: 'Interactive demo of loss aversion and reference dependence. Reveals how your value function systematically distorts choice.', tags: ['Science', 'Behavioral'], link: 'https://yl-app-prospect-theory.vercel.app' },
  { id: 'signal-noise', title: 'Signal vs. Noise Filter', description: 'Separates meaningful patterns from statistical noise in data, decisions, and incoming information.', tags: ['Science', 'Logic'], link: 'https://yl-app-signal-noise.vercel.app' },
  { id: 'experiencing-remembering', title: 'Experiencing vs. Remembering Self', description: 'Surfaces the gap between how an experience will feel and how it will be remembered. Design for both selves.', tags: ['Behavioral', 'Architecture'], link: 'https://yl-app-experiencing-remembering.vercel.app' },
  { id: 'premortem-studio', title: 'Pre-Mortem & Red Team Studio', description: 'Assume the decision has already failed, then reconstruct why — before you\'ve committed and while you can still change course.', tags: ['Logic', 'Architecture'], link: 'https://yl-app-premortem-studio.vercel.app' },
  { id: 'bayesian-translator', title: 'The Bayesian Translator', description: 'Converts any probability claim into Bayes\' theorem, natural frequencies, and icon arrays. Makes conditional probability intuitive.', tags: ['Science', 'Logic'], link: 'https://yl-app-bayesian-translator.vercel.app' },
];

export const BLOG_POSTS: BlogPost[] = [
  {
    id: '1',
    slug: 'yellow-light',
    title: 'The Yellow Light: In Praise of the Intentional Pause',
    excerpt: 'In a world built for instant responses, the pause is the most radical design choice available. A case for deliberate hesitation.',
    date: 'March 2026',
    readTime: '11 min read',
    tags: ['BEHAVIORAL', 'SCIENCE']
  },
  {
    id: '2',
    slug: 'designing-second-thought',
    title: 'Designing for the Second Thought',
    excerpt: "Modern UX is optimized for speed at the expense of judgment. Here's how to engineer friction that actually helps.",
    date: 'March 2026',
    readTime: '8 min read',
    tags: ['BEHAVIORAL', 'UI']
  },
  {
    id: '3',
    slug: 'systemic-heuristics',
    title: 'Systemic Heuristics in Institutional Logic',
    excerpt: "Organizations don't just inherit their founders' ideas — they inherit their biases. A structural analysis of how shortcuts become policy.",
    date: 'March 2026',
    readTime: '15 min read',
    tags: ['BEHAVIORAL', 'ARCHITECTURE']
  },
  {
    id: '4',
    slug: 'architects-of-judgment',
    title: 'The Architects of Judgment: A History of Decision Science',
    excerpt: "From Aristotle's phronesis to AI-augmented forecasting, the lineage of thinkers who built the science of how we choose.",
    date: 'March 2026',
    readTime: '14 min read',
    tags: ['HISTORY', 'SCIENCE']
  },
  {
    id: '5',
    slug: 'soldier-mapped-mind',
    title: 'The Soldier Who Mapped the Mind: A Portrait of Amos Tversky',
    excerpt: 'He was the most brilliant psychologist of his generation. He died at fifty-nine. History has been catching up ever since.',
    date: 'March 2026',
    readTime: '12 min read',
    tags: ['TRIBUTE', 'BEHAVIORAL']
  },
  {
    id: '6',
    slug: 'mind-behind-mirror',
    title: 'The Mind Behind the Mirror: A Portrait of Daniel Kahneman',
    excerpt: 'He spent his life mapping the flaws in human judgment. At ninety, he made his final decision. The most deliberate of all.',
    date: 'March 2026',
    readTime: '12 min read',
    tags: ['TRIBUTE', 'BEHAVIORAL']
  },
  {
    id: '7',
    slug: 'two-minds-one-idea',
    title: 'Two Minds, One Idea: The Collaboration That Rewired How We Think',
    excerpt: "For a decade, Kahneman and Tversky were inseparable. What they built changed economics, law, and medicine — and how any honest person looks at their own mind.",
    date: 'March 2026',
    readTime: '13 min read',
    tags: ['TRIBUTE', 'SCIENCE']
  },
  {
    id: '8',
    slug: 'running-old-software',
    title: "You're Not Irrational. You're Running Old Software.",
    excerpt: "Cognitive bias isn't a character flaw. It's an evolutionary mismatch — ancient hardware running in a modern environment.",
    date: 'March 2026',
    readTime: '10 min read',
    tags: ['BEHAVIORAL', 'SCIENCE']
  },
  {
    id: '9',
    slug: 'speed-trap',
    title: 'The Speed Trap: How Urgency Hijacks Your Best Thinking',
    excerpt: "Modern work culture rewards urgency. It penalizes deliberation. Here's the cognitive cost nobody's accounting for.",
    date: 'March 2026',
    readTime: '10 min read',
    tags: ['BEHAVIORAL', 'SCIENCE']
  },
  {
    id: '10',
    slug: 'confidence-not-accuracy',
    title: "Confidence Is Not Accuracy: A Field Guide to Knowing What You Don't Know",
    excerpt: 'The most dangerous thing a decision-maker can do is confuse how certain they feel with how right they are.',
    date: 'March 2026',
    readTime: '11 min read',
    tags: ['SCIENCE', 'LOGIC']
  },
  {
    id: '11',
    slug: 'pre-decision',
    title: 'The Pre-Decision: Why What Happens Before the Choice Matters Most',
    excerpt: 'The quality of most decisions is determined before deliberation begins. Everything is framing.',
    date: 'March 2026',
    readTime: '10 min read',
    tags: ['ARCHITECTURE', 'LOGIC']
  },
  {
    id: '12',
    slug: 'noise-not-hearing',
    title: "The Noise You're Not Hearing",
    excerpt: 'Everyone talks about bias. Almost no one is talking about the larger problem: random variability in judgments that should be identical.',
    date: 'March 2026',
    readTime: '11 min read',
    tags: ['SCIENCE', 'LOGIC']
  },
  {
    id: '13',
    slug: 'foxes-hedgehogs',
    title: 'Foxes, Hedgehogs, and the Discipline of Being Wrong Less Often',
    excerpt: 'Philip Tetlock spent decades studying expert prediction. What he found should unsettle anyone who trusts their own convictions.',
    date: 'March 2026',
    readTime: '11 min read',
    tags: ['SCIENCE', 'LOGIC']
  },
  {
    id: '14',
    slug: 'bias-always-bug',
    title: 'Is Bias Always a Bug? The Adaptive Case for Heuristics',
    excerpt: "The debiasing industry assumes your intuitions are the enemy. Gerd Gigerenzer disagrees — and so does the data.",
    date: 'March 2026',
    readTime: '11 min read',
    tags: ['SCIENCE', 'BEHAVIORAL']
  },
  {
    id: '15',
    slug: 'biased-oracle',
    title: 'The Biased Oracle: What LLMs Get Wrong About Judgment',
    excerpt: "AI doesn't just inherit human cognitive biases — in key domains, it amplifies them. The question isn't whether to use it. It's how.",
    date: 'March 2026',
    readTime: '12 min read',
    tags: ['SCIENCE', 'AI']
  },
  {
    id: '16',
    slug: 'decision-hygiene',
    title: 'Decision Hygiene as Organizational Infrastructure',
    excerpt: 'Training individuals to think better rarely works. Redesigning the environment they decide inside of usually does.',
    date: 'March 2026',
    readTime: '11 min read',
    tags: ['ARCHITECTURE', 'LOGIC']
  }
];
