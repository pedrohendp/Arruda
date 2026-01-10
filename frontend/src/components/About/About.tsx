import type { Developer } from '../../types';
import styles from './About.module.css';

interface AboutProps {
  developer: Developer | null;
}

export function About({ developer }: AboutProps) {
  return (
    <section id="about" className={styles.about}>
      <div className={styles.container}>
        <h2 className={styles.sectionTitle}>About Me</h2>

        <div className={styles.content}>
          <div className={styles.imageWrapper}>
            <div className={styles.imagePlaceholder}>
              <span className={styles.initials}>
                {developer?.name?.split(' ').map(n => n[0]).join('') || 'PA'}
              </span>
            </div>
            <div className={styles.imageDecor}></div>
          </div>

          <div className={styles.info}>
            <div className={styles.endpointHeader}>
              <span className={styles.methodBadge}>GET</span>
              <code>/api/developer</code>
              <span className={styles.status}>200 OK</span>
            </div>

            <div className={styles.responseBlock}>
              <p className={styles.bio}>
                {developer?.bio || 'Desenvolvedor backend apaixonado por criar soluções robustas e escaláveis.'}
              </p>

              <div className={styles.details}>
                <div className={styles.detailItem}>
                  <span className={styles.detailLabel}>Location:</span>
                  <span className={styles.detailValue}>{developer?.location || 'Brasil'}</span>
                </div>
                <div className={styles.detailItem}>
                  <span className={styles.detailLabel}>Organization:</span>
                  <span className={styles.detailValue}>{developer?.organization || '@eSolutionTecnologia'}</span>
                </div>
                <div className={styles.detailItem}>
                  <span className={styles.detailLabel}>Email:</span>
                  <a href={`mailto:${developer?.email}`} className={styles.detailValue}>
                    {developer?.email || 'pedrohendp@gmail.com'}
                  </a>
                </div>
              </div>
            </div>

            <div className={styles.stats}>
              <div className={styles.statItem}>
                <span className={styles.statNumber}>{developer?.stats.yearsOfExperience || 5}+</span>
                <span className={styles.statLabel}>Years Experience</span>
              </div>
              <div className={styles.statItem}>
                <span className={styles.statNumber}>{developer?.stats.projectsDelivered || 20}+</span>
                <span className={styles.statLabel}>Projects Delivered</span>
              </div>
              <div className={styles.statItem}>
                <span className={styles.statNumber}>{developer?.stats.technologiesMastered || 15}+</span>
                <span className={styles.statLabel}>Technologies</span>
              </div>
            </div>

            <a href="#contact" className={styles.downloadBtn}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4M7 10l5 5 5-5M12 15V3"/>
              </svg>
              Download CV
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
