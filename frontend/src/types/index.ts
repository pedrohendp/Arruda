export interface Developer {
  name: string;
  title: string;
  subtitle: string;
  email: string;
  bio: string;
  location: string;
  organization: string;
  profileImage: string;
  resumeUrl: string;
  social: SocialLinks;
  stats: DeveloperStats;
}

export interface SocialLinks {
  linkedIn: string;
  gitHub: string;
  instagram: string;
  twitter: string;
}

export interface DeveloperStats {
  yearsOfExperience: number;
  projectsDelivered: number;
  technologiesMastered: number;
}

export interface SkillCategory {
  name: string;
  color: string;
  httpMethod: string;
  skills: Skill[];
}

export interface Skill {
  name: string;
  level: number;
  icon: string;
}

export interface Project {
  slug: string;
  name: string;
  description: string;
  longDescription: string;
  imageUrl: string;
  demoUrl: string;
  gitHubUrl: string;
  technologies: string[];
  status: string;
  featured: boolean;
}

export interface ContactMessage {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export interface ContactResponse {
  success: boolean;
  message: string;
}

export interface ContactInfo {
  email: string;
  linkedIn: string;
  gitHub: string;
  location: string;
}
