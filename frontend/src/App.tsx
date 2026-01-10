import { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { getDeveloper, getSkillCategories, getProjects } from './services/api';
import type { Developer, SkillCategory, Project } from './types';
import './styles/global.css';

function App() {
  const [developer, setDeveloper] = useState<Developer | null>(null);
  const [skillCategories, setSkillCategories] = useState<SkillCategory[]>([]);
  const [projects, setProjects] = useState<Project[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const [devData, skillsData, projectsData] = await Promise.all([
          getDeveloper(),
          getSkillCategories(),
          getProjects(),
        ]);
        setDeveloper(devData);
        setSkillCategories(skillsData);
        setProjects(projectsData);
      } catch (err) {
        console.error('Failed to fetch data:', err);
        setError('Failed to load portfolio data. Please make sure the API is running.');
      } finally {
        setIsLoading(false);
      }
    }

    fetchData();
  }, []);

  if (isLoading) {
    return (
      <div className="loading-screen">
        <div className="loading-content">
          <div className="loading-spinner"></div>
          <p>Loading portfolio...</p>
        </div>
        <style>{`
          .loading-screen {
            min-height: 100vh;
            display: flex;
            align-items: center;
            justify-content: center;
            background-color: #1a1a1a;
          }
          .loading-content {
            text-align: center;
            color: #b3b3b3;
          }
          .loading-spinner {
            width: 40px;
            height: 40px;
            border: 3px solid #3b3b3b;
            border-top-color: #49cc90;
            border-radius: 50%;
            margin: 0 auto 1rem;
            animation: spin 1s linear infinite;
          }
          @keyframes spin {
            to { transform: rotate(360deg); }
          }
        `}</style>
      </div>
    );
  }

  if (error) {
    return (
      <div className="error-screen">
        <div className="error-content">
          <h1>Connection Error</h1>
          <p>{error}</p>
          <code>Make sure to run: dotnet run</code>
        </div>
        <style>{`
          .error-screen {
            min-height: 100vh;
            display: flex;
            align-items: center;
            justify-content: center;
            background-color: #1a1a1a;
          }
          .error-content {
            text-align: center;
            color: #b3b3b3;
            max-width: 400px;
            padding: 2rem;
          }
          .error-content h1 {
            color: #f93e3e;
            margin-bottom: 1rem;
          }
          .error-content code {
            display: block;
            margin-top: 1rem;
            padding: 1rem;
            background-color: #252525;
            border-radius: 8px;
            color: #49cc90;
          }
        `}</style>
      </div>
    );
  }

  return (
    <>
      <Header />
      <main>
        <Hero developer={developer} />
        <About developer={developer} />
        <Skills skillCategories={skillCategories} />
        <Projects projects={projects} />
        <Contact developer={developer} />
      </main>
      <Footer developer={developer} />
    </>
  );
}

export default App;
