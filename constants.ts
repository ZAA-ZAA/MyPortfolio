import { EducationItem, ExperienceItem, Project, QuickFact, Skill, StrengthItem } from './types';

const withBaseUrl = (assetPath: string) => `${import.meta.env.BASE_URL}${assetPath.replace(/^\/+/, '')}`;

export const PERSONAL_INFO = {
  name: "Zoen A. Aldueza",
  title: "Junior Web Developer",
  email: "alduezazoen77@gmail.com",
  phone: "09675187933",
  location: "Cabuyao, Laguna, Philippines",
  photoUrl: withBaseUrl('profile.jpg'),
  resumeUrl: withBaseUrl('resume.pdf'),
  availability: "Open to junior web development opportunities",
  shortBio:
    "BSIT student at Pamantasan ng Cabuyao who recently completed an internship at Gleent Inc., building training projects and hands-on web applications around AI-assisted tools, internal workflows, and database-backed services using React, TypeScript, Python, and PostgreSQL.",
  about:
    "I enjoy building interfaces and application flows that feel clear, practical, and easy to understand. During my internship, I worked on guided projects focused on modern web development, AI-assisted features, and workflow-based systems, which helped me build stronger habits around structure, usability, and team-oriented development. I also gained working exposure to Python services, PostgreSQL-backed systems, and Agile-style collaboration, and I am continuing to grow in those areas.",
  lookingFor:
    "Right now, I am looking for a junior frontend or full-stack role where I can keep learning from experienced teammates, contribute to real product work, and continue improving through feedback and hands-on delivery."
};

export const SOCIAL_LINKS = {
  github: "https://github.com/ZAA-ZAA",
  linkedin: "https://www.linkedin.com/in/zoen-aldueza/"
};

export const QUICK_FACTS: QuickFact[] = [
  {
    label: "Recent experience",
    value: "Gleent Inc.",
    detail: "Internship completed from January 2026 to April 2026"
  },
  {
    label: "Stack growth",
    value: "Python + PostgreSQL",
    detail: "Used during OJT in Flask, FastAPI, and database-backed application work"
  },
  {
    label: "Current goal",
    value: "Entry-level development role",
    detail: "Open to collaborative teams and real production work"
  }
];

export const STRENGTHS: StrengthItem[] = [
  {
    title: "Product-minded interfaces",
    description: "I like turning requirements into screens that are clean, understandable, and useful for everyday users.",
    icon: "layout"
  },
  {
    title: "Workflow-oriented thinking",
    description: "I am comfortable with multi-step systems such as approvals, records, tracking flows, and operational logic.",
    icon: "workflow"
  },
  {
    title: "AI-assisted web features",
    description: "My internship exposed me to transcription, contextual chat, memory-based assistants, and workflow automation.",
    icon: "brain"
  }
];

export const SKILLS: Skill[] = [
  {
    category: "Frontend",
    description: "Tools I use to build responsive interfaces and structured user experiences.",
    items: ["React", "TypeScript", "JavaScript", "HTML5", "CSS3", "Tailwind CSS", "Bootstrap"]
  },
  {
    category: "Backend & Data",
    description: "Technologies I have used for application logic, APIs, and database-backed systems, including working exposure from OJT.",
    items: ["Python (working knowledge)", "Flask", "FastAPI", "PostgreSQL (working knowledge)", "MySQL", "REST APIs", "SQL Fundamentals"]
  },
  {
    category: "AI & Workflow",
    description: "Areas I explored during internship work involving assistants, automation, and process-driven products.",
    items: ["AI-assisted workflows", "Prompt-based product features", "Context handling", "Approval flows", "Automation thinking", "Transcript-driven experiences"]
  },
  {
    category: "Tools & Collaboration",
    description: "Habits and tools that support day-to-day delivery in a team setting.",
    items: ["Git", "GitHub", "Team collaboration", "Adaptability", "Continuous learning", "Documentation"]
  }
];

export const EXPERIENCE: ExperienceItem[] = [
  {
    company: "Gleent Inc.",
    role: "Intern",
    period: "January 2026 - April 2026",
    summary:
      "Completed my OJT through guided project work at Gleent Inc., where I built and studied modern web applications, AI-assisted experiences, and workflow-driven systems while gaining hands-on frontend and Python-backed development exposure.",
    bullets: [
      "Worked across six internship projects covering video intelligence, billing, affiliate tracking, AI assistants, AI workflows, and leave approval flows.",
      "Learned from mentor guidance, project walkthroughs, and Agile-style team practices that emphasized iteration, communication, and practical implementation choices.",
      "Strengthened my understanding of React and TypeScript on the frontend while also gaining working exposure to Python, FastAPI or Flask services, and PostgreSQL-backed workflows."
    ],
    stack: ["React", "TypeScript", "Python", "Flask", "FastAPI", "PostgreSQL", "REST APIs", "AI workflows"]
  }
];

export const EDUCATION: EducationItem[] = [
  {
    school: "Pamantasan ng Cabuyao",
    degree: "Bachelor of Science in Information Technology",
    year: "2022 - Present",
    details: [
      "Recent OJT completion at Gleent Inc.",
      "Focused on web development, software engineering, and database-backed systems."
    ]
  }
];

// Add or edit projects here.
// - Add a new object below to show another project on the portfolio.
// - Set `featured: true` if you want it included in the Featured section.
// - Add these fields to show a live button inside the modal:
//   liveUrl: 'https://your-live-demo-url.com',
//   liveLabel: 'View live demo',
export const PROJECTS: Project[] = [
  {
    title: "Fathom AI",
    summary:
      "A video intelligence platform focused on transcription, analysis, and AI chat experiences tied to video content.",
    role: "Intern Contributor",
    period: "OJT 2026",
    platform: "Web app",
    category: "ai",
    status: "Completed",
    visibility: "Public repository",
    featured: true,
    techStack: ["React", "FastAPI", "PostgreSQL", "OpenAI", "FFmpeg", "Cloudflare R2"],
    focusAreas: ["Transcription", "Video analysis", "AI chat", "User flow"],
    highlights: [
      "Combined a React frontend with FastAPI services for video ingestion, transcript analysis, and follow-up chat.",
      "Stored jobs, transcripts, summaries, timestamps, and chat history in PostgreSQL.",
      "Supported transcription with Whisper, analysis with GPT-4o, and optional video storage through Cloudflare R2."
    ],
    icon: "video",
    repo: "https://github.com/ZAA-ZAA/FathomAI_Final"
  },
  {
    title: "FreshBooks",
    summary:
      "An invoicing and billing web application covering clients, invoices, estimates, expenses, payments, reports, and AI-assisted features.",
    role: "Intern Contributor",
    period: "OJT 2026",
    platform: "Web app",
    category: "business",
    status: "Completed",
    visibility: "Public repository",
    featured: true,
    techStack: ["React", "TypeScript", "Python", "Flask", "PostgreSQL", "Docker"],
    focusAreas: ["Billing workflows", "Client records", "Reporting", "AI assistance"],
    highlights: [
      "Handled multiple business modules inside one product workflow, including invoices, estimates, expenses, payments, and reports.",
      "Used a Python or Flask backend with PostgreSQL together with a React frontend.",
      "Included practical business features such as PDF export, email actions, multi-tenant flows, and AI-assisted functionality."
    ],
    icon: "billing",
    repo: "https://github.com/ZAA-ZAA/FreshBooks"
  },
  {
    title: "Affiliate Marketing System",
    summary:
      "A partner management platform for affiliate signup and approval, affiliate link generation, click tracking, and conversion tracking.",
    role: "Intern Contributor",
    period: "OJT 2026",
    platform: "Web app",
    category: "business",
    status: "Completed",
    visibility: "Public repository",
    techStack: ["React", "Vite", "TypeScript", "Python", "Flask", "MySQL", "Docker"],
    focusAreas: ["Partner onboarding", "Approval flow", "Tracking", "Link management"],
    highlights: [
      "Included a React and Vite admin dashboard, a customer-facing demo form app, and a Python Flask backend.",
      "Covered partner signup, email verification, approval flow, affiliate link generation, and click or conversion analytics.",
      "Used MySQL for tracking and reporting data, with Docker used to run the full stack."
    ],
    icon: "affiliate",
    repo: "https://github.com/ZAA-ZAA/Affiliate-Marketing"
  },
  {
    title: "KAI - Knowledge & AI Assistant",
    summary:
      "A personal AI assistant web app with persistent memory, contextual conversations, user-specific storage, and multi-session recall.",
    role: "Intern Contributor",
    period: "OJT 2026",
    platform: "Web app",
    category: "ai",
    status: "Completed",
    visibility: "Public repository",
    featured: true,
    techStack: ["LibreChat", "FastAPI", "PostgreSQL + pgvector", "MongoDB", "Docker", "OpenAI"],
    focusAreas: ["Persistent memory", "Contextual chat", "User-specific recall", "Multi-session experience"],
    highlights: [
      "Focused on memory that persists across conversations instead of one-off prompt responses.",
      "Used a FastAPI memory service with PostgreSQL and pgvector, alongside LibreChat and MongoDB.",
      "Supported contextual conversations and user-specific memory recall across sessions."
    ],
    icon: "assistant",
    repo: "https://github.com/ZAA-ZAA/Personal_Agent"
  },
  {
    title: "Math AI Agent Workflow",
    summary:
      "An AI workflow focused on handling math-related tasks through structured steps, agent logic, and guided outputs.",
    role: "Intern Contributor",
    period: "OJT 2026",
    platform: "Workflow system",
    category: "workflow",
    status: "Completed",
    visibility: "Public project summary",
    techStack: ["Python", "AI workflow design", "Structured prompting", "Task orchestration"],
    focusAreas: ["AI workflow", "Structured reasoning", "Task orchestration", "Automation"],
    highlights: [
      "Approached math tasks through a defined agent workflow instead of a single prompt.",
      "Organized AI behavior into clearer steps and reusable logic.",
      "More workflow-driven than interface-driven, with emphasis on process design."
    ],
    icon: "math"
  },
  {
    title: "Leave Request Approval System",
    summary:
      "An employee leave filing and approval workflow that supported email-based requests and replies or REST API submission, pending approvals, and automated notifications.",
    role: "Intern Contributor",
    period: "OJT 2026",
    platform: "Workflow + API system",
    category: "workflow",
    status: "Completed",
    visibility: "Public repository",
    techStack: ["Python", "REST API", "Workflow automation", "Email integration", "Docker"],
    focusAreas: ["Approval flow", "Email integration", "REST APIs", "Notifications"],
    highlights: [
      "Handled leave filing, manager approval, and pending approval states.",
      "Supported both email-based interaction and API-based submission.",
      "Focused on automation and operational clarity rather than visual UI work."
    ],
    icon: "approval",
    repo: "https://github.com/ZAA-ZAA/workflow"
  }
];

export const PROJECT_NOTE =
  "Selected internship projects with public repositories and concise case-study details.";
