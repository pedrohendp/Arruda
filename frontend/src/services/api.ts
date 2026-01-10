import type { Developer, SkillCategory, Project, ContactMessage, ContactResponse } from '../types';
import { staticDeveloper, staticSkillCategories, staticProjects } from '../data/portfolio-data';

// Use environment variable or fallback to relative path for local dev
const API_BASE = import.meta.env.VITE_API_URL || '/api';

// Check if we should use static data (no API available)
const USE_STATIC_DATA = import.meta.env.VITE_USE_STATIC_DATA === 'true';

export async function getDeveloper(): Promise<Developer> {
  if (USE_STATIC_DATA) {
    return staticDeveloper;
  }

  try {
    const response = await fetch(`${API_BASE}/developer`);
    if (!response.ok) {
      throw new Error('Failed to fetch developer data');
    }
    return response.json();
  } catch {
    console.warn('API unavailable, using static data');
    return staticDeveloper;
  }
}

export async function getSkillCategories(): Promise<SkillCategory[]> {
  if (USE_STATIC_DATA) {
    return staticSkillCategories;
  }

  try {
    const response = await fetch(`${API_BASE}/skills`);
    if (!response.ok) {
      throw new Error('Failed to fetch skills');
    }
    return response.json();
  } catch {
    console.warn('API unavailable, using static data');
    return staticSkillCategories;
  }
}

export async function getProjects(): Promise<Project[]> {
  if (USE_STATIC_DATA) {
    return staticProjects;
  }

  try {
    const response = await fetch(`${API_BASE}/projects`);
    if (!response.ok) {
      throw new Error('Failed to fetch projects');
    }
    return response.json();
  } catch {
    console.warn('API unavailable, using static data');
    return staticProjects;
  }
}

export async function getProjectBySlug(slug: string): Promise<Project> {
  if (USE_STATIC_DATA) {
    const project = staticProjects.find(p => p.slug === slug);
    if (!project) throw new Error('Project not found');
    return project;
  }

  try {
    const response = await fetch(`${API_BASE}/projects/${slug}`);
    if (!response.ok) {
      throw new Error('Failed to fetch project');
    }
    return response.json();
  } catch {
    const project = staticProjects.find(p => p.slug === slug);
    if (!project) throw new Error('Project not found');
    return project;
  }
}

export async function sendContactMessage(message: ContactMessage): Promise<ContactResponse> {
  if (USE_STATIC_DATA) {
    // When using static data, simulate success and open email client
    const subject = encodeURIComponent(message.subject || 'Contato via Portfolio');
    const body = encodeURIComponent(`Nome: ${message.name}\nEmail: ${message.email}\n\n${message.message}`);
    window.open(`mailto:pedrohendp@gmail.com?subject=${subject}&body=${body}`);
    return {
      success: true,
      message: 'Redirecionando para seu cliente de email...'
    };
  }

  try {
    const response = await fetch(`${API_BASE}/contact`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(message),
    });
    if (!response.ok) {
      throw new Error('Failed to send contact message');
    }
    return response.json();
  } catch {
    // Fallback: open email client
    const subject = encodeURIComponent(message.subject || 'Contato via Portfolio');
    const body = encodeURIComponent(`Nome: ${message.name}\nEmail: ${message.email}\n\n${message.message}`);
    window.open(`mailto:pedrohendp@gmail.com?subject=${subject}&body=${body}`);
    return {
      success: true,
      message: 'Redirecionando para seu cliente de email...'
    };
  }
}
