
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
