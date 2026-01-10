import { useState } from 'react';
import type { Project } from '../../types';
import styles from './Projects.module.css';

interface ProjectsProps {
  projects: Project[];
}

export function Projects({ projects }: ProjectsProps) {
  const [expandedSlug, setExpandedSlug] = useState<string | null>(null);
  const [filter, setFilter] = useState<string>('all');

  const technologies = ['all', ...new Set(projects.flatMap(p => p.technologies))];

  const filteredProjects = filter === 'all'
    ? projects
    : projects.filter(p => p.technologies.includes(filter));

  const toggleExpand = (slug: string) => {
    setExpandedSlug(expandedSlug === slug ? null : slug);
  };

  return (
    <section id="projects" className={styles.projects}>
      <div className={styles.container}>
        <h2 className={styles.sectionTitle}>Projects</h2>

        <div className={styles.filters}>
          {technologies.slice(0, 8).map((tech) => (
            <button
              key={tech}
              className={`${styles.filterBtn} ${filter === tech ? styles.active : ''}`}
              onClick={() => setFilter(tech)}
            >
              {tech === 'all' ? 'All Projects' : tech}
            </button>
          ))}
        </div>

        <div className={styles.grid}>
          {filteredProjects.map((project) => (
            <div
              key={project.slug}
              className={`${styles.projectCard} ${expandedSlug === project.slug ? styles.expanded : ''}`}
            >
              <div
                className={styles.cardHeader}
                onClick={() => toggleExpand(project.slug)}
              >
                <div className={styles.headerLeft}>
                  <span className={styles.methodBadge}>GET</span>
                  <code className={styles.endpoint}>/projects/{project.slug}</code>
                </div>
                <div className={styles.headerRight}>
                  <span className={`${styles.statusBadge} ${project.status === 'Concluído' ? styles.statusSuccess : styles.statusPending}`}>
                    {project.status}
                  </span>
                  <span className={styles.expandIcon}>
                    {expandedSlug === project.slug ? '−' : '+'}
                  </span>
                </div>
              </div>

              <div className={styles.cardBody}>
                <h3 className={styles.projectName}>{project.name}</h3>
                <p className={styles.projectDesc}>{project.description}</p>

                <div className={styles.techTags}>
                  {project.technologies.map((tech) => (
                    <span key={tech} className={styles.techTag}>{tech}</span>
                  ))}
                </div>
              </div>

              {expandedSlug === project.slug && (
                <div className={styles.cardExpanded}>
                  <div className={styles.responseBlock}>
                    <div className={styles.responseHeader}>
                      <span>Response body</span>
                      <span className={styles.responseStatus}>200 OK</span>
                    </div>
                    <p className={styles.longDesc}>{project.longDescription}</p>
                  </div>

                  <div className={styles.cardActions}>
                    {project.gitHubUrl && (
                      <a
                        href={project.gitHubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.actionBtn}
                      >
                        <svg viewBox="0 0 24 24" fill="currentColor">
                          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                        </svg>
                        View Code
                      </a>
                    )}
                    {project.demoUrl && (
                      <a
                        href={project.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`${styles.actionBtn} ${styles.actionPrimary}`}
                      >
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6v6M10 14L21 3"/>
                        </svg>
                        Live Demo
                      </a>
                    )}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
