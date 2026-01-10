import type { SkillCategory } from '../../types';
import styles from './Skills.module.css';

interface SkillsProps {
  skillCategories: SkillCategory[];
}

const methodColors: Record<string, string> = {
  GET: 'methodGet',
  POST: 'methodPost',
  PUT: 'methodPut',
  PATCH: 'methodPatch',
  DELETE: 'methodDelete',
};

export function Skills({ skillCategories }: SkillsProps) {
  return (
    <section id="skills" className={styles.skills}>
      <div className={styles.container}>
        <h2 className={styles.sectionTitle}>Skills & Technologies</h2>

        <div className={styles.grid}>
          {skillCategories.map((category) => (
            <div key={category.name} className={styles.categoryCard}>
              <div className={styles.categoryHeader}>
                <span className={`${styles.methodBadge} ${styles[methodColors[category.httpMethod] || 'methodGet']}`}>
                  {category.httpMethod}
                </span>
                <h3 className={styles.categoryName}>{category.name}</h3>
              </div>

              <div className={styles.skillsList}>
                {category.skills.map((skill) => (
                  <div key={skill.name} className={styles.skillItem}>
                    <div className={styles.skillHeader}>
                      <span className={styles.skillName}>{skill.name}</span>
                      <span className={styles.skillLevel}>{skill.level}%</span>
                    </div>
                    <div className={styles.progressBar}>
                      <div
                        className={styles.progressFill}
                        style={{
                          width: `${skill.level}%`,
                          backgroundColor: category.color,
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className={styles.tools}>
          <h3 className={styles.toolsTitle}>
            <span className={styles.methodBadge + ' ' + styles.methodPut}>PUT</span>
            Tools & Workflow
          </h3>
          <div className={styles.toolsGrid}>
            {['Visual Studio 2022', 'DBeaver', 'Git', 'Notion', 'Jira', 'Postman'].map((tool) => (
              <span key={tool} className={styles.toolTag}>{tool}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
