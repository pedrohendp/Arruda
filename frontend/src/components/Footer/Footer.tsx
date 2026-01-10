import type { Developer } from '../../types';
import styles from './Footer.module.css';

interface FooterProps {
  developer: Developer | null;
}

export function Footer({ developer }: FooterProps) {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.brand}>
            <a href="#home" className={styles.logo}>
              <span className={styles.logoSymbol}>{'<'}</span>
              Pedro.Dev
              <span className={styles.logoSymbol}>{'/>'}</span>
            </a>
            <p className={styles.tagline}>Backend Developer | C# & .NET Specialist</p>
          </div>

          <div className={styles.links}>
            <div className={styles.linkGroup}>
              <h4 className={styles.linkTitle}>Navigation</h4>
              <nav className={styles.nav}>
                <a href="#home">Home</a>
                <a href="#about">About</a>
                <a href="#skills">Skills</a>
                <a href="#projects">Projects</a>
                <a href="#contact">Contact</a>
              </nav>
            </div>

            <div className={styles.linkGroup}>
              <h4 className={styles.linkTitle}>Connect</h4>
              <nav className={styles.nav}>
                {developer?.social.linkedIn && (
                  <a href={developer.social.linkedIn} target="_blank" rel="noopener noreferrer">
                    LinkedIn
                  </a>
                )}
                {developer?.social.gitHub && (
                  <a href={developer.social.gitHub} target="_blank" rel="noopener noreferrer">
                    GitHub
                  </a>
                )}
                {developer?.social.instagram && (
                  <a href={developer.social.instagram} target="_blank" rel="noopener noreferrer">
                    Instagram
                  </a>
                )}
                {developer?.social.twitter && (
                  <a href={developer.social.twitter} target="_blank" rel="noopener noreferrer">
                    Twitter / X
                  </a>
                )}
              </nav>
            </div>
          </div>
        </div>

        <div className={styles.bottom}>
          <p className={styles.copyright}>
            &copy; {currentYear} {developer?.name || 'Pedro Arruda'}. All rights reserved.
          </p>
          <p className={styles.madeWith}>
            Made with <span className={styles.heart}>C#</span> & React
          </p>
        </div>
      </div>
    </footer>
  );
}
