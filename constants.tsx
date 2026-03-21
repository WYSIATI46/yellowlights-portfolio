
import { Project, BlogPost } from './types';

export const PROJECTS: Project[] = [
  { id: 'intuition-duel', title: 'AI vs Human Intuition Duel', description: 'A head-to-head challenge pitting your gut instincts against an AI baseline. Reveals where human intuition excels — and where it reliably fails.', tags: ['Behavioral', 'Science'], link: 'https://yl-app-intuition-duel.vercel.app' },
  { id: 'bias-scenario-lab', title: 'Bias Scenario Lab', description: 'Experiential simulations engineered to trigger specific cognitive biases. Identify the trap before it closes.', tags: ['Behavioral', 'Science'], link: 'https://yl-app-bias-scenario-lab.vercel.app' },
  { id: 'judgment-calibrator', title: 'The Judgment Calibrator', description: 'Measures the gap between your confidence and your accuracy. Build the habit of knowing what you know — and what you don\'t.', tags: ['Science', 'Logic'], link: 'https://yl-app-judgment-calibrator.vercel.app' },
  { id: 'heuristics-playground', title: 'Heuristics Playground', description: 'Interactive explorer of 20+ mental shortcuts — where they help, where they hurt, and how to deploy them deliberately.', tags: ['Science', 'UI'], link: 'https://yl-app-heuristics-playground.vercel.app' },
  { id: 'reasoning-coach', title: 'Guided Reasoning Coach', description: 'Walks you through complex problems step by step, surfacing assumptions, alternatives, and blind spots at each stage.', tags: ['Logic', 'Architecture'], link: 'https://yl-app-reasoning-coach.vercel.app' },
  { id: 'tradeoff-visualizer', title: 'Tradeoff Visualizer', description: 'Maps competing values onto a visual landscape, making the real costs of every option visible before you commit.', tags: ['Architecture', 'Logic'], link: 'https://yl-app-tradeoff-visualizer.vercel.app' },
  { id: 'second-opinion', title: 'Second Opinion Simulator', description: 'Generates a structured adversarial perspective on any decision. Forces genuine consideration of the alternative you\'re resisting.', tags: ['Behavioral', 'Logic'], link: 'https://yl-app-second-opinion.vercel.app' },
  { id: 'decision-speed', title: 'Decision Speed Calibrator', description: 'Identifies when you\'re deciding too fast, too slow, or with the wrong deliberation level for the stakes at hand.', tags: ['Behavioral', 'Science'], link: 'https://yl-app-decision-speed.vercel.app' },
  { id: 'base-rate-finder', title: 'Base Rate Finder', description: 'Surfaces the statistical baseline before any prediction. Counters optimism bias by anchoring judgment in population-level evidence.', tags: ['Science', 'Logic'], link: 'https://yl-app-base-rate-finder.vercel.app' },
  { id: 'signal-noise', title: 'Signal vs. Noise Filter', description: 'Separates meaningful patterns from statistical noise in data, decisions, and incoming information.', tags: ['Science', 'Logic'], link: 'https://yl-app-signal-noise.vercel.app' },
  { id: 'sunk-cost', title: 'Sunk Cost Escape Hatch', description: 'Reframes decisions held hostage by prior investment entirely around future value, severing the anchor of past cost.', tags: ['Behavioral', 'Architecture'], link: 'https://yl-app-sunk-cost.vercel.app' },
  { id: 'values-compass', title: 'Values Clarification Compass', description: 'Surfaces and ranks your actual values — not the ones you assume you hold — before a high-stakes decision demands you choose.', tags: ['Architecture', 'Behavioral'], link: 'https://yl-app-values-compass.vercel.app' },
  { id: 'prospect-theory', title: 'Prospect Theory Lab', description: 'Interactive demo of loss aversion and reference dependence. Reveals how your value function systematically distorts choice.', tags: ['Science', 'Behavioral'], link: 'https://yl-app-prospect-theory.vercel.app' },
  { id: 'centaur-composer', title: 'Centaur Decision Composer', description: 'Maps which decision sub-tasks belong to human judgment and which belong to algorithmic processing.', tags: ['Architecture', 'AI'], link: 'https://yl-app-centaur-composer.vercel.app' },
  { id: 'experiencing-remembering', title: 'Experiencing vs. Remembering Self', description: 'Surfaces the gap between how an experience will feel and how it will be remembered. Design for both selves.', tags: ['Behavioral', 'Architecture'], link: 'https://yl-app-experiencing-remembering.vercel.app' },
  { id: 'mental-models', title: 'Mental Models & Biases Explorer', description: 'Navigable library of cognitive frameworks and biases, each with interactive examples and diagnostic questions.', tags: ['Science', 'UI'], link: 'https://yl-app-mental-models.vercel.app' },
  { id: 'cognitive-mapping-01', title: 'PTCE Visualization Engine', description: 'Dynamic visualization of Prospect Theory\'s core curves with adjustable parameters and real-world scenario mapping.', tags: ['Science', 'UI'], link: 'https://periodic-table-of-cognitive-element.vercel.app' },
  { id: 'bayesian-translator', title: 'The Bayesian Translator', description: 'Converts any probability claim into Bayes\' theorem, natural frequencies, and icon arrays. Makes conditional probability intuitive.', tags: ['Science', 'Logic'], link: 'https://yl-app-bayesian-translator.vercel.app' },
  { id: 'premortem-studio', title: 'Pre-Mortem & Red Team Studio', description: 'Assume the decision has already failed, then reconstruct why — before you\'ve committed and while you can still change course.', tags: ['Logic', 'Architecture'], link: 'https://yl-app-premortem-studio.vercel.app' },
];

export const BLOG_POSTS: BlogPost[] = [
  {
    id: '1',
    title: 'The Yellow Light: In Praise of the Intentional Pause',
    excerpt: 'In a world calibrated for instant clicks, the most radical design intervention is a deliberate hesitation. Mapping the benefits of "Choice Sludge".',
    date: 'Mar 20, 2026',
    readTime: '11 min read'
  },
  {
    id: '2',
    title: 'Systemic Heuristics in Institutional Logic',
    excerpt: 'How organizations inherit the biases of their founders and architects. A structural analysis of decision-making inheritance.',
    date: 'Mar 20, 2026',
    readTime: '15 min read'
  },
  {
    id: '3',
    title: 'Designing for the Second Thought',
    excerpt: 'Why modern UX is failing human psychology by optimizing exclusively for speed, and how we can re-engineer friction.',
    date: 'Mar 20, 2026',
    readTime: '8 min read'
  }
];
