import type { Developer, SkillCategory, Project, ContactMessage, ContactResponse } from '../types';

const API_BASE = '/api';

export async function getDeveloper(): Promise<Developer> {
  const response = await fetch(`${API_BASE}/developer`);
  if (!response.ok) {
    throw new Error('Failed to fetch developer data');
  }
  return response.json();
}

export async function getSkillCategories(): Promise<SkillCategory[]> {
  const response = await fetch(`${API_BASE}/skills`);
  if (!response.ok) {
    throw new Error('Failed to fetch skills');
  }
  return response.json();
}

export async function getProjects(): Promise<Project[]> {
  const response = await fetch(`${API_BASE}/projects`);
  if (!response.ok) {
    throw new Error('Failed to fetch projects');
  }
  return response.json();
}

export async function getProjectBySlug(slug: string): Promise<Project> {
  const response = await fetch(`${API_BASE}/projects/${slug}`);
  if (!response.ok) {
    throw new Error('Failed to fetch project');
  }
  return response.json();
}

export async function sendContactMessage(message: ContactMessage): Promise<ContactResponse> {
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
}
