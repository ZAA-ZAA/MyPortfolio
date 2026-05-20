export interface Project {
  title: string;
  summary: string;
  role: string;
  period: string;
  platform: string;
  category: 'ai' | 'business' | 'workflow';
  status: string;
  visibility: string;
  featured?: boolean;
  techStack: string[];
  focusAreas: string[];
  highlights: string[];
  icon: 'video' | 'billing' | 'affiliate' | 'assistant' | 'math' | 'approval';
  liveLabel?: string;
  liveUrl?: string;
  repo?: string;
}

export interface EducationItem {
  school: string;
  degree: string;
  year: string;
  details: string[];
}

export interface Skill {
  category: string;
  description: string;
  items: string[];
}

export interface ExperienceItem {
  company: string;
  role: string;
  period: string;
  summary: string;
  bullets: string[];
  stack: string[];
}

export interface StrengthItem {
  title: string;
  description: string;
  icon: 'layout' | 'workflow' | 'brain';
}

export interface QuickFact {
  label: string;
  value: string;
  detail: string;
}

export interface ChatMessage {
  id: string;
  role: 'user' | 'model';
  text: string;
  isError?: boolean;
}
