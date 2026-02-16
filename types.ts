
export interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  link?: string;
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
}

export interface BiasAnalysis {
  biasName: string;
  explanation: string;
  mitigation: string;
}

export interface DecisionAnalysis {
  perspective: string;
  biases: BiasAnalysis[];
  recommendation: string;
}

export interface Alternative {
  id: string;
  name: string;
  score?: number;
}

export interface Criterion {
  id: string;
  name: string;
  weight: number;
}

export interface Risk {
  description: string;
  theme: 'execution' | 'market' | 'technical' | 'organizational' | 'financial' | 'other';
  likelihood: 'low' | 'medium' | 'high';
  impact: 'low' | 'medium' | 'high';
  mitigation: string;
}

export interface SimulationResult {
  mean: number;
  median: number;
  p10: number;
  p90: number;
  probLoss: number;
}

export interface DecisionState {
  statement: string;
  objectives: string;
  alternatives: Alternative[];
  criteria: Criterion[];
  scores: Record<string, Record<string, number>>;
  mcResult: SimulationResult | null;
  risks: Risk[];
  topChoice: { id: string; name: string; bestCase: number; mostLikely: number; worstCase: number } | null;
  meta: {
    threshold: number;
    reversibility: string;
    reversibilityLabel: string;
  };
}
