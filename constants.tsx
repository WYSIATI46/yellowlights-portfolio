
import { Project, BlogPost } from './types';

export const PROJECTS: Project[] = [
  {
    id: 'structural-audit-framework',
    title: 'The Logic Ledger',
    description: 'A structural diagnostic tool for high-stakes decision documenting. Built to capture the "ephemeral glass" of heuristic influence in institutional logic.',
    tags: ['Architecture', 'Logic'],
    link: '#'
  },
  {
    id: 'cognitive-mapping-01',
    title: 'Behavioral Cartography',
    description: 'An interactive mapping of 200+ cognitive vulnerabilities, visualizing the interplay between systemic load and individual choice performance.',
    tags: ['Science', 'UI'],
    link: '#'
  },
  {
    id: 'choice-ux-v3',
    title: 'Choice Flow Protocol',
    description: 'A design system focused on cognitive friction—optimizing user interfaces to encourage deliberation rather than automated clicks.',
    tags: ['UX', 'Behavioral'],
    link: '#'
  }
];

export const BLOG_POSTS: BlogPost[] = [
  {
    id: '1',
    title: 'The Yellow Light: In Praise of the Intentional Pause',
    excerpt: 'In a world calibrated for instant clicks, the most radical design intervention is a deliberate hesitation. Mapping the benefits of "Choice Sludge".',
    date: 'Feb 12, 2025',
    readTime: '11 min read'
  },
  {
    id: '2',
    title: 'Systemic Heuristics in Institutional Logic',
    excerpt: 'How organizations inherit the biases of their founders and architects. A structural analysis of decision-making inheritance.',
    date: 'Dec 18, 2024',
    readTime: '15 min read'
  },
  {
    id: '3',
    title: 'Designing for the Second Thought',
    excerpt: 'Why modern UX is failing human psychology by optimizing exclusively for speed, and how we can re-engineer friction.',
    date: 'Oct 02, 2024',
    readTime: '8 min read'
  }
];
