import { Project, EducationItem, Skill, Seminar } from './types';
import { BookOpen, Code, GraduationCap, Server, Smartphone, Users } from 'lucide-react';

export const PERSONAL_INFO = {
  name: "Zoen A. Aldueza",
  title: "Aspiring IT Professional & Web Developer",
  email: "alduezazoen77@gmail.com",
  phone: "09675187933",
  address: "247 Purok 2, Gulod, City of Cabuyao, Laguna",
  // INSTRUCTION: Put your photo in the 'public' folder and name it 'profile.jpg'
  photoUrl: "/profile.jpg", 
  // INSTRUCTION: Put your resume in the 'public' folder and name it 'resume.pdf'
  resumeUrl: "/resume.pdf", 
  bio: "I am a 4th-year BSIT student at Pamantasan ng Cabuyao. While I have achieved Dean's List recognition, I consider myself a student first, always eager to learn. I am looking for part-time or full-time work opportunities where I can apply my skills and gain practical industry experience.",
  aboutLong: "As an IT student, I have spent my college years learning the foundations of software development. Being on the Dean's List has encouraged me to keep studying, but I understand that school is different from the real world. I am still learning and building my skills in React, Tailwind CSS, PHP, and MySQL. I am hardworking, adaptable, and ready to listen to mentors who can help me grow into a professional developer."
};

export const SKILLS: Skill[] = [
  {
    category: "Frontend Development",
    items: ["React", "HTML5", "CSS3", "JavaScript (ES6+)", "Tailwind CSS", "Bootstrap"]
  },
  {
    category: "Backend & Database",
    items: ["PHP", "MySQL", "SQL Database Fundamentals", "Node.js (Basic)"]
  },
  {
    category: "Tools & Soft Skills",
    items: ["Git & GitHub", "Adaptability", "Continuous Learning", "Team Collaboration", "MS Office"]
  }
];

export const EDUCATION: EducationItem[] = [
  {
    school: "Pamantasan ng Cabuyao",
    degree: "Bachelor of Science in Information Technology (BSIT)",
    year: "2022 - Present",
    details: ["4th Year Student - Graduating Class", "1st Year - Dean's List Awardee", "2nd Year - Dean's List Awardee"]
  },
  {
    school: "Pamantasan ng Cabuyao",
    degree: "Senior High School (STEM/ICT)",
    year: "2019 - 2022",
    details: ["Grade 12 - Graduated With Honors"]
  },
  {
    school: "Gulod Elementary School",
    degree: "Primary Education",
    year: "2011 - 2016",
    details: ["Graduated with Awards"]
  }
];

export const PROJECTS: Project[] = [
  {
    title: "Web-Based Lot Management System",
    // Description updated to reflect role and specific Paymongo status
    description: "A collaborative Capstone project for Divine Life Memorial Park. I worked as a Full Stack Developer to help digitize the mapping and ownership management of memorial lots. We implemented a prototype integration of PayMongo to demonstrate online payment capabilities.",
    role: "Full Stack Developer",
    techStack: ["React", "Tailwind CSS", "PHP", "MySQL", "Google Maps API", "PayMongo (Test)"],
    // INSTRUCTION: Put a screenshot of your project in 'public' and name it 'capstone.jpg'
    image: "/capstone.jpg",
    link: "https://capstone-project-kappa-gules.vercel.app?_vercel_share=IB5G2MFGlYPzzN2AUi2lt0aejNfsBLNX",
    repo: "https://github.com/systemdlmp/CapstoneProject"
  },
  {
    title: "Personal Portfolio with AI",
    // Description updated to reflect learning status
    description: "My first exploration into integrating Artificial Intelligence. I built this portfolio to learn how to connect React with the Google Gemini API. It serves as a practical experiment to understand how AI tools can enhance user experience.",
    role: "Frontend Developer",
    techStack: ["React", "TypeScript", "Tailwind CSS", "Gemini API (Learning)"],
    // Using a generic coding background or you can add 'portfolio.jpg' to public
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1000&auto=format&fit=crop",
    repo: "https://github.com/ZAA-ZAA/MyPortfolio"
  }
];

export const SEMINARS: Seminar[] = [
  { title: "Let's Git Started: Version Control Mastery", date: "October 24, 2025" },
  { title: "Cabuyeño's Computer Literacy Program", date: "March 9, 2024" },
  { title: "Into the Computer Science: Modern Tech Trends", date: "September 23, 2023" },
  { title: "IEngage: Youth Empowerment Webinar", date: "October 1, 2022" }
];

export const SOCIAL_LINKS = {
  github: "https://github.com/", 
  linkedin: "https://linkedin.com/" 
};