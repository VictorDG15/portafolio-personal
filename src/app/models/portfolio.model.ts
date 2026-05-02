export interface Experience {
  role: string;
  company: string;
  period: string;
  description: string[];
  technologies: string[];
  type: 'fullstack' | 'backend' | 'frontend' | 'intern';
}

export interface Skill {
  name: string;
  level: number;
  icon?: string;
}

export interface SkillCategory {
  category: string;
  icon: string;
  items: Skill[];
}

export interface Project {
  id: number;
  name: string;
  description: string;
  longDescription: string;
  technologies: string[];
  image: string;
  demoUrl?: string;
  githubUrl?: string;
  featured: boolean;
  badge?: string;
}

export interface Education {
  institution: string;
  degree: string;
  period: string;
  honors?: string;
  icon: string;
}

export interface Certification {
  title: string;
  issuer: string;
  year: string;
  icon: string;
}
