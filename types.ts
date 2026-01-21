export interface Project {
  title: string;
  description: string;
  role: string;
  techStack: string[];
  image?: string;
  link?: string;
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
  items: string[];
}

export interface Seminar {
  title: string;
  date: string;
}

export interface ChatMessage {
  id: string;
  role: 'user' | 'model';
  text: string;
  isError?: boolean;
}