
export interface SkillItem {
  name: string;
  icon?: string;
}

export interface SkillGroup {
  category: string;
  items: string[];
  icon: string;
}

export interface Experience {
  company: string;
  role: string;
  period: string;
  description: string[];
}

export interface Education {
  degree: string;
  institution: string;
  year?: string;
  location?: string;
  result?: string;
}

export interface Project {
  title: string;
  description: string;
  tags: string[];
  icon: 'wrench' | 'cpu' | 'shield' | 'zap';
}
