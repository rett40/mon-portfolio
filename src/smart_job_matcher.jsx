// Import React & icons
import React, { useState, useEffect } from "react";
import { 
  FaArrowLeft, 
  FaArrowRight, 
  FaTimes, 
  FaImages, 
  FaProjectDiagram, 
  FaChartLine, 
  FaTools,
  FaUserLock,
  FaBriefcase,
  FaChartBar,
  FaCode,
  FaDatabase,
  FaServer,
  FaShieldAlt,
  FaRocket
} from "react-icons/fa";
import { useNavigate } from "react-router-dom";

// Import des screenshots
import auth1 from './screenshots/auth1.PNG';
import auth2 from './screenshots/auth2 (2).PNG';
import candidature1 from './screenshots/candidature1.PNG';
import candidature2 from './screenshots/candidature2.PNG';
import dashboardCandidat from './screenshots/dashboard_candidat.PNG';
import dashboardRecruteur from './screenshots/dashboard_recruteur.PNG';
import analyse1 from './screenshots/analyse1.PNG';

// Configuration du projet
const project = {
  title: {
    fr: "Smart Job Matcher – Plateforme de Recrutement Intelligent",
    en: "Smart Job Matcher – Intelligent Recruitment Platform"
  },
  subtitle: {
    fr: "Solution IA pour le recrutement avec MySQL",
    en: "AI-powered recruitment solution with MySQL"
  },
  description: {
    fr: (
      <>
        <div className="intro-block">
          <p className="intro-text">
            Plateforme complète de recrutement intelligent utilisant des algorithmes d'IA 
            pour analyser les CV et les offres d'emploi. Développée avec une architecture 
            robuste utilisant MySQL pour la gestion des données.
          </p>
          <div className="key-stats">
            <div className="stat-item">
              <span className="stat-number">40%</span>
              <span className="stat-label">Temps réduit</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">95%</span>
              <span className="stat-label">Précision matching</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">MySQL</span>
              <span className="stat-label">Base de données</span>
            </div>
          </div>
        </div>
        
        <div className="features-grid">
          <div className="feature-card">
            <div className="feature-icon">
              <FaShieldAlt />
            </div>
            <h4>Authentification Sécurisée</h4>
            <p>Système de connexion avec hachage des mots de passe et sessions MySQL</p>
          </div>
          
          <div className="feature-card">
            <div className="feature-icon">
              <FaCode />
            </div>
            <h4>Matching IA Avancé</h4>
            <p>Algorithmes NLP pour analyser CV et extraire compétences pertinentes</p>
          </div>
          
          <div className="feature-card">
            <div className="feature-icon">
              <FaChartBar />
            </div>
            <h4>Dashboard Analytique</h4>
            <p>Visualisations en temps réel avec données provenant de MySQL</p>
          </div>
          
          <div className="feature-card">
            <div className="feature-icon">
              <FaDatabase />
            </div>
            <h4>Base de Données MySQL</h4>
            <p>Structure relationnelle optimisée pour performances et scalabilité</p>
          </div>
        </div>
        
        <div className="tech-section">
          <h3 className="section-subtitle">Stack Technologique</h3>
          <div className="tech-stack">
            {[
              { 
                name: "React", 
                color: "#61dafb", 
                icon: "⚛️", 
                desc: "Interface utilisateur dynamique",
                category: "Frontend"
              },
              { 
                name: "Python", 
                color: "#3776AB", 
                icon: "🐍", 
                desc: "Backend Flask & algorithmes IA",
                category: "Backend"
              },
              { 
                name: "MySQL", 
                color: "#4479A1", 
                icon: "🐬", 
                desc: "Base de données relationnelle",
                category: "Database"
              },
              { 
                name: "NLP", 
                color: "#FF9900", 
                icon: "📝", 
                desc: "Traitement du langage naturel",
                category: "AI"
              },
              { 
                name: "Flask", 
                color: "#000000", 
                icon: "🔥", 
                desc: "Framework Python pour API REST",
                category: "Backend"
              },
              { 
                name: "Chart.js", 
                color: "#FF6384", 
                icon: "📈", 
                desc: "Visualisation des données",
                category: "Frontend"
              },
              { 
                name: "JWT", 
                color: "#00BFA5", 
                icon: "🔐", 
                desc: "Authentification sécurisée",
                category: "Security"
              },
              { 
                name: "Docker", 
                color: "#2496ED", 
                icon: "🐳", 
                desc: "Conteneurisation de l'application",
                category: "DevOps"
              }
            ].map(tech => (
              <div key={tech.name} className="tech-card">
                <div 
                  className="tech-icon" 
                  style={{ 
                    backgroundColor: tech.color + '15',
                    borderColor: tech.color,
                    color: tech.color
                  }}
                >
                  <span style={{ fontSize: "1.3em" }}>{tech.icon}</span>
                </div>
                <div className="tech-info">
                  <div className="tech-header">
                    <h4 style={{ color: tech.color }}>{tech.name}</h4>
                    <span className="tech-category">{tech.category}</span>
                  </div>
                  <p className="tech-desc">{tech.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </>
    ),
    en: (
      <>
        <div className="intro-block">
          <p className="intro-text">
            Complete intelligent recruitment platform using AI algorithms to analyze 
            CVs and job offers. Developed with a robust architecture using MySQL 
            for data management.
          </p>
          <div className="key-stats">
            <div className="stat-item">
              <span className="stat-number">40%</span>
              <span className="stat-label">Time reduced</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">95%</span>
              <span className="stat-label">Match accuracy</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">MySQL</span>
              <span className="stat-label">Database</span>
            </div>
          </div>
        </div>
        
        <div className="features-grid">
          <div className="feature-card">
            <div className="feature-icon">
              <FaShieldAlt />
            </div>
            <h4>Secure Authentication</h4>
            <p>Login system with password hashing and MySQL session management</p>
          </div>
          
          <div className="feature-card">
            <div className="feature-icon">
              <FaCode />
            </div>
            <h4>Advanced AI Matching</h4>
            <p>NLP algorithms to analyze CVs and extract relevant skills</p>
          </div>
          
          <div className="feature-card">
            <div className="feature-icon">
              <FaChartBar />
            </div>
            <h4>Analytical Dashboard</h4>
            <p>Real-time visualizations with data from MySQL</p>
          </div>
          
          <div className="feature-card">
            <div className="feature-icon">
              <FaDatabase />
            </div>
            <h4>MySQL Database</h4>
            <p>Optimized relational structure for performance and scalability</p>
          </div>
        </div>
        
        <div className="tech-section">
          <h3 className="section-subtitle">Technology Stack</h3>
          <div className="tech-stack">
            {[
              { 
                name: "React", 
                color: "#61dafb", 
                icon: "⚛️", 
                desc: "Dynamic user interface",
                category: "Frontend"
              },
              { 
                name: "Python", 
                color: "#3776AB", 
                icon: "🐍", 
                desc: "Flask backend & AI algorithms",
                category: "Backend"
              },
              { 
                name: "MySQL", 
                color: "#4479A1", 
                icon: "🐬", 
                desc: "Relational database",
                category: "Database"
              },
              { 
                name: "NLP", 
                color: "#FF9900", 
                icon: "📝", 
                desc: "Natural language processing",
                category: "AI"
              },
              { 
                name: "Flask", 
                color: "#000000", 
                icon: "🔥", 
                desc: "Python framework for REST API",
                category: "Backend"
              },
              { 
                name: "Chart.js", 
                color: "#FF6384", 
                icon: "📈", 
                desc: "Data visualization",
                category: "Frontend"
              },
              { 
                name: "JWT", 
                color: "#00BFA5", 
                icon: "🔐", 
                desc: "Secure authentication",
                category: "Security"
              },
              { 
                name: "Docker", 
                color: "#2496ED", 
                icon: "🐳", 
                desc: "Application containerization",
                category: "DevOps"
              }
            ].map(tech => (
              <div key={tech.name} className="tech-card">
                <div 
                  className="tech-icon" 
                  style={{ 
                    backgroundColor: tech.color + '15',
                    borderColor: tech.color,
                    color: tech.color
                  }}
                >
                  <span style={{ fontSize: "1.3em" }}>{tech.icon}</span>
                </div>
                <div className="tech-info">
                  <div className="tech-header">
                    <h4 style={{ color: tech.color }}>{tech.name}</h4>
                    <span className="tech-category">{tech.category}</span>
                  </div>
                  <p className="tech-desc">{tech.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </>
    )
  },
  screenshotCategories: [
    {
      id: "auth",
      title: { fr: "Authentification", en: "Authentication" },
      icon: <FaUserLock />,
      description: { 
        fr: "Système de connexion sécurisé avec gestion des sessions MySQL", 
        en: "Secure login system with MySQL session management" 
      },
      screenshots: [
        { url: auth1, alt: { fr: "Page d'inscription utilisateur", en: "User registration page" } },
        { url: auth2, alt: { fr: "Interface de connexion sécurisée", en: "Secure login interface" } }
      ]
    },
    {
      id: "jobs",
      title: { fr: "Gestion des Offres", en: "Job Management" },
      icon: <FaBriefcase />,
      description: { 
        fr: "Création et consultation des offres stockées en base MySQL", 
        en: "Job creation and consultation stored in MySQL database" 
      },
      screenshots: [
        { url: candidature1, alt: { fr: "Formulaire de création d'offre", en: "Job creation form" } },
        { url: candidature2, alt: { fr: "Liste des offres avec filtres", en: "Job list with filters" } }
      ]
    },
    {
      id: "dashboard",
      title: { fr: "Tableaux de Bord", en: "Dashboards" },
      icon: <FaChartBar />,
      description: { 
        fr: "Visualisations interactives avec données MySQL en temps réel", 
        en: "Interactive visualizations with real-time MySQL data" 
      },
      screenshots: [
        { url: dashboardCandidat, alt: { fr: "Dashboard candidat - Recommandations", en: "Candidate dashboard - Recommendations" } },
        { url: dashboardRecruteur, alt: { fr: "Dashboard recruteur - Analytics", en: "Recruiter dashboard - Analytics" } }
      ]
    },
    {
      id: "analytics",
      title: { fr: "Analyse & Rapports", en: "Analysis & Reports" },
      icon: <FaChartLine />,
      description: { 
        fr: "Rapports détaillés générés à partir des données MySQL", 
        en: "Detailed reports generated from MySQL data" 
      },
      screenshots: [
        { url: analyse1, alt: { fr: "Analyse des correspondances IA", en: "AI matching analysis" } }
      ]
    }
  ],
  process: {
    fr: [
      {
        step: "01",
        title: "Conception Base de Données",
        description: "Modélisation et création du schéma MySQL avec relations optimisées"
      },
      {
        step: "02",
        title: "Développement Backend",
        description: "API REST Flask avec connexion MySQL et algorithmes IA"
      },
      {
        step: "03",
        title: "Interface Frontend",
        description: "Développement React avec visualisation des données MySQL"
      },
      {
        step: "04",
        title: "Intégration & Tests",
        description: "Tests de performance avec données réelles MySQL"
      },
      {
        step: "05",
        title: "Déploiement",
        description: "Configuration serveur MySQL et déploiement application"
      }
    ],
    en: [
      {
        step: "01",
        title: "Database Design",
        description: "MySQL schema modeling with optimized relationships"
      },
      {
        step: "02",
        title: "Backend Development",
        description: "Flask REST API with MySQL connection and AI algorithms"
      },
      {
        step: "03",
        title: "Frontend Interface",
        description: "React development with MySQL data visualization"
      },
      {
        step: "04",
        title: "Integration & Testing",
        description: "Performance testing with real MySQL data"
      },
      {
        step: "05",
        title: "Deployment",
        description: "MySQL server configuration and application deployment"
      }
    ]
  },
  impact: {
    fr: [
      "Base de données MySQL optimisée pour 10k+ utilisateurs",
      "Requêtes SQL optimisées réduisant le temps de réponse de 60%",
      "Architecture scalable avec réplication MySQL possible",
      "Backup automatique et sécurité des données garantie"
    ],
    en: [
      "MySQL database optimized for 10k+ users",
      "Optimized SQL queries reducing response time by 60%",
      "Scalable architecture with possible MySQL replication",
      "Automatic backup and data security guaranteed"
    ]
  },
  tags: {
    fr: ["MySQL", "React", "Python", "NLP", "Flask", "IA", "Recrutement", "JWT", "Docker"],
    en: ["MySQL", "React", "Python", "NLP", "Flask", "AI", "Recruitment", "JWT", "Docker"]
  },
  dbSchema: {
    fr: [
      "Tables utilisateurs avec hachage de mots de passe",
      "Table offres d'emploi avec indexation full-text",
      "Table compétences avec relations many-to-many",
      "Table candidatures avec triggers MySQL",
      "Table logs pour audit et sécurité"
    ],
    en: [
      "Users table with password hashing",
      "Job offers table with full-text indexing",
      "Skills table with many-to-many relationships",
      "Applications table with MySQL triggers",
      "Logs table for audit and security"
    ]
  }
};

const ui = {
  back: { fr: "Retour aux projets", en: "Back to projects" },
  gallery: { fr: "Galerie du projet", en: "Project Gallery" },
  process: { fr: "Processus de développement", en: "Development Process" },
  impact: { fr: "Impact et performances", en: "Impact & Performance" },
  tags: { fr: "Technologies utilisées", en: "Technologies Used" },
  database: { fr: "Architecture MySQL", en: "MySQL Architecture" },
  viewScreenshots: { fr: "Voir les captures", en: "View Screenshots" }
};

// Styles CSS intégrés avec dark mode
const lightTheme = `
  .project-detail-container.light {
    --bg-primary: #f8fafc;
    --bg-secondary: #ffffff;
    --text-primary: #1e293b;
    --text-secondary: #475569;
    --accent-primary: #3b82f6;
    --accent-secondary: #8b5cf6;
    --card-bg: #ffffff;
    --card-border: #e2e8f0;
    --gradient-start: #3b82f6;
    --gradient-end: #8b5cf6;
    --shadow-sm: 0 1px 3px rgba(0,0,0,0.1);
    --shadow-md: 0 4px 6px rgba(0,0,0,0.1);
    --shadow-lg: 0 10px 25px rgba(0,0,0,0.1);
  }
`;

const darkTheme = `
  .project-detail-container.dark {
    --bg-primary: #0f172a;
    --bg-secondary: #1e293b;
    --text-primary: #f1f5f9;
    --text-secondary: #cbd5e1;
    --accent-primary: #60a5fa;
    --accent-secondary: #a78bfa;
    --card-bg: #1e293b;
    --card-border: #334155;
    --gradient-start: #60a5fa;
    --gradient-end: #a78bfa;
    --shadow-sm: 0 1px 3px rgba(0,0,0,0.3);
    --shadow-md: 0 4px 6px rgba(0,0,0,0.3);
    --shadow-lg: 0 10px 25px rgba(0,0,0,0.3);
  }
`;

const baseStyles = `
  .project-detail-container {
    min-height: 100vh;
    padding: 2rem;
    background: var(--bg-primary);
    color: var(--text-primary);
    transition: all 0.3s ease;
  }

  .project-detail-container::before {
    content: '';
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    height: 300px;
    background: linear-gradient(135deg, var(--gradient-start) 0%, var(--gradient-end) 100%);
    opacity: 0.1;
    z-index: 0;
  }

  .back-button {
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    padding: 0.75rem 1.5rem;
    background: var(--card-bg);
    border: 1px solid var(--card-border);
    border-radius: 12px;
    color: var(--text-primary);
    font-weight: 500;
    cursor: pointer;
    transition: all 0.3s ease;
    margin-bottom: 2rem;
    position: relative;
    z-index: 1;
    box-shadow: var(--shadow-sm);
  }

  .back-button:hover {
    background: var(--accent-primary);
    color: white;
    transform: translateX(-5px);
    border-color: var(--accent-primary);
  }

  .project-header {
    text-align: center;
    margin-bottom: 3rem;
    position: relative;
    z-index: 1;
  }

  .project-header h1 {
    font-size: 2.5rem;
    font-weight: 700;
    margin-bottom: 0.5rem;
    background: linear-gradient(135deg, var(--accent-primary), var(--accent-secondary));
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }

  .project-header .subtitle {
    font-size: 1.2rem;
    color: var(--text-secondary);
    max-width: 600px;
    margin: 0 auto;
  }

  .project-content {
    max-width: 1200px;
    margin: 0 auto;
    position: relative;
    z-index: 1;
  }

  .intro-block {
    background: var(--card-bg);
    padding: 2rem;
    border-radius: 20px;
    box-shadow: var(--shadow-lg);
    margin-bottom: 3rem;
    border: 1px solid var(--card-border);
  }

  .intro-text {
    font-size: 1.1rem;
    line-height: 1.6;
    color: var(--text-secondary);
    margin-bottom: 1.5rem;
  }

  .key-stats {
    display: flex;
    gap: 2rem;
    justify-content: center;
    flex-wrap: wrap;
    padding-top: 1.5rem;
    border-top: 1px solid var(--card-border);
  }

  .stat-item {
    text-align: center;
    min-width: 100px;
  }

  .stat-number {
    display: block;
    font-size: 2rem;
    font-weight: 700;
    color: var(--accent-primary);
    margin-bottom: 0.25rem;
  }

  .stat-label {
    font-size: 0.9rem;
    color: var(--text-secondary);
  }

  .features-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 1.5rem;
    margin-bottom: 3rem;
  }

  .feature-card {
    background: var(--card-bg);
    padding: 1.5rem;
    border-radius: 16px;
    box-shadow: var(--shadow-md);
    transition: all 0.3s ease;
    border: 1px solid var(--card-border);
    text-align: center;
  }

  .feature-card:hover {
    transform: translateY(-5px);
    box-shadow: var(--shadow-lg);
    border-color: var(--accent-primary);
  }

  .feature-icon {
    font-size: 2rem;
    color: var(--accent-primary);
    margin-bottom: 1rem;
  }

  .feature-card h4 {
    color: var(--text-primary);
    margin-bottom: 0.5rem;
    font-size: 1.1rem;
  }

  .feature-card p {
    color: var(--text-secondary);
    font-size: 0.9rem;
    line-height: 1.5;
  }

  .tech-section {
    margin-bottom: 3rem;
  }

  .section-subtitle {
    color: var(--text-primary);
    margin-bottom: 1.5rem;
    font-size: 1.5rem;
    position: relative;
    padding-left: 1rem;
  }

  .section-subtitle::before {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    width: 4px;
    background: linear-gradient(to bottom, var(--accent-primary), var(--accent-secondary));
    border-radius: 2px;
  }

  .tech-stack {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 1rem;
  }

  .tech-card {
    background: var(--card-bg);
    border-radius: 12px;
    padding: 1rem;
    display: flex;
    align-items: center;
    gap: 1rem;
    transition: all 0.3s ease;
    border: 1px solid var(--card-border);
  }

  .tech-card:hover {
    transform: translateY(-3px);
    box-shadow: var(--shadow-md);
    border-color: var(--accent-primary);
  }

  .tech-icon {
    width: 50px;
    height: 50px;
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 2px solid;
    flex-shrink: 0;
  }

  .tech-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 0.25rem;
  }

  .tech-info h4 {
    font-size: 1rem;
    margin: 0;
  }

  .tech-category {
    font-size: 0.7rem;
    padding: 0.2rem 0.5rem;
    background: var(--accent-primary);
    color: white;
    border-radius: 12px;
    font-weight: 500;
  }

  .tech-desc {
    font-size: 0.8rem;
    color: var(--text-secondary);
    margin: 0;
    line-height: 1.4;
  }

  .screenshot-category {
    background: var(--card-bg);
    border-radius: 20px;
    padding: 2rem;
    margin-bottom: 2rem;
    box-shadow: var(--shadow-lg);
    border: 1px solid var(--card-border);
  }

  .category-header {
    display: flex;
    align-items: center;
    gap: 1rem;
    margin-bottom: 1rem;
    color: var(--text-primary);
  }

  .category-header h2 {
    font-size: 1.5rem;
    margin: 0;
    color: var(--accent-primary);
  }

  .category-header svg {
    color: var(--accent-primary);
  }

  .category-description {
    color: var(--text-secondary);
    margin-bottom: 1.5rem;
    font-size: 0.95rem;
    line-height: 1.5;
  }

  .screenshots-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 1.5rem;
  }

  .screenshot-item {
    position: relative;
    border-radius: 12px;
    overflow: hidden;
    cursor: pointer;
    transition: all 0.3s ease;
    border: 1px solid var(--card-border);
  }

  .screenshot-item:hover {
    transform: translateY(-5px);
    box-shadow: var(--shadow-lg);
    border-color: var(--accent-primary);
  }

  .screenshot-image {
    width: 100%;
    height: 200px;
    object-fit: cover;
    transition: transform 0.3s ease;
  }

  .screenshot-item:hover .screenshot-image {
    transform: scale(1.05);
  }

  .screenshot-caption {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    background: linear-gradient(to top, rgba(0,0,0,0.9), transparent);
    color: white;
    padding: 1rem;
    margin: 0;
    font-size: 0.9rem;
    transform: translateY(100%);
    transition: transform 0.3s ease;
  }

  .screenshot-item:hover .screenshot-caption {
    transform: translateY(0);
  }

  .process-section,
  .impact-section,
  .database-section,
  .tags-section {
    background: var(--card-bg);
    border-radius: 20px;
    padding: 2rem;
    margin-bottom: 2rem;
    box-shadow: var(--shadow-lg);
    border: 1px solid var(--card-border);
  }

  .process-steps {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 1.5rem;
    margin-top: 1.5rem;
  }

  .process-step {
    background: var(--bg-secondary);
    padding: 1.5rem;
    border-radius: 12px;
    border-left: 4px solid var(--accent-primary);
    transition: all 0.3s ease;
  }

  .process-step:hover {
    transform: translateX(5px);
    border-left-color: var(--accent-secondary);
  }

  .process-step-number {
    font-size: 0.9rem;
    font-weight: 600;
    color: var(--accent-primary);
    margin-bottom: 0.5rem;
    display: inline-block;
    background: var(--accent-primary);
    color: white;
    padding: 0.25rem 0.75rem;
    border-radius: 20px;
  }

  .process-step h4 {
    color: var(--text-primary);
    margin: 0.5rem 0;
    font-size: 1.1rem;
  }

  .process-step p {
    color: var(--text-secondary);
    font-size: 0.9rem;
    line-height: 1.5;
    margin: 0;
  }

  .impact-list {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 1rem;
    margin-top: 1.5rem;
  }

  .impact-item {
    background: var(--bg-secondary);
    padding: 1rem;
    border-radius: 10px;
    border-left: 4px solid var(--accent-secondary);
    display: flex;
    align-items: center;
    gap: 1rem;
  }

  .impact-item::before {
    content: '✓';
    color: var(--accent-secondary);
    font-weight: bold;
    font-size: 1.2rem;
  }

  .database-list {
    list-style: none;
    padding: 0;
    margin-top: 1rem;
  }

  .database-list li {
    padding: 0.75rem 0;
    border-bottom: 1px solid var(--card-border);
    display: flex;
    align-items: center;
    gap: 1rem;
  }

  .database-list li:last-child {
    border-bottom: none;
  }

  .database-list li::before {
    content: '🗄️';
    color: var(--accent-primary);
  }

  .tags-container {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
    margin-top: 1rem;
  }

  .tag {
    background: linear-gradient(135deg, var(--accent-primary), var(--accent-secondary));
    color: white;
    padding: 0.5rem 1rem;
    border-radius: 20px;
    font-size: 0.9rem;
    font-weight: 500;
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }

  .tag::before {
    content: '#';
    opacity: 0.8;
  }

  .lightbox {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.95);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 1000;
    backdrop-filter: blur(10px);
  }

  .lightbox-content {
    position: relative;
    max-width: 90%;
    max-height: 90%;
    background: var(--card-bg);
    border-radius: 20px;
    overflow: hidden;
    box-shadow: 0 25px 50px rgba(0,0,0,0.5);
  }

  .lightbox-image {
    max-width: 100%;
    max-height: 70vh;
    object-fit: contain;
    display: block;
  }

  .close-button {
    position: absolute;
    top: 1rem;
    right: 1rem;
    background: rgba(255, 255, 255, 0.1);
    border: none;
    color: white;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    font-size: 1.2rem;
    transition: all 0.3s ease;
    backdrop-filter: blur(5px);
  }

  .close-button:hover {
    background: rgba(255, 255, 255, 0.2);
    transform: rotate(90deg);
  }

  .nav-button {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    background: rgba(255, 255, 255, 0.1);
    border: none;
    color: white;
    width: 60px;
    height: 60px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    font-size: 1.5rem;
    transition: all 0.3s ease;
    backdrop-filter: blur(5px);
  }

  .nav-button:hover {
    background: rgba(255, 255, 255, 0.2);
    transform: translateY(-50%) scale(1.1);
  }

  .prev-button {
    left: 2rem;
  }

  .next-button {
    right: 2rem;
  }

  .lightbox-caption {
    color: var(--text-primary);
    text-align: center;
    padding: 1rem;
    background: var(--card-bg);
    margin: 0;
    font-size: 1.1rem;
    border-top: 1px solid var(--card-border);
  }

  @media (max-width: 768px) {
    .project-detail-container {
      padding: 1rem;
    }
    
    .project-header h1 {
      font-size: 2rem;
    }
    
    .features-grid,
    .tech-stack,
    .screenshots-grid,
    .process-steps,
    .impact-list {
      grid-template-columns: 1fr;
    }
    
    .key-stats {
      gap: 1rem;
    }
    
    .nav-button {
      width: 50px;
      height: 50px;
    }
    
    .prev-button {
      left: 1rem;
    }
    
    .next-button {
      right: 1rem;
    }
    
    .tech-header {
      flex-direction: column;
      align-items: flex-start;
      gap: 0.25rem;
    }
    
    .tech-category {
      align-self: flex-start;
    }
  }

  @media (max-width: 480px) {
    .project-header h1 {
      font-size: 1.75rem;
    }
    
    .intro-block,
    .screenshot-category,
    .process-section,
    .impact-section,
    .database-section,
    .tags-section {
      padding: 1.5rem;
    }
    
    .feature-card,
    .tech-card {
      padding: 1rem;
    }
  }
`;

export default function SmartJobMatcher({ lang, theme = 'light' }) {
  const navigate = useNavigate();
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Injecter les styles
  useEffect(() => {
    const styleSheet = document.createElement("style");
    styleSheet.textContent = baseStyles + (theme === 'dark' ? darkTheme : lightTheme);
    document.head.appendChild(styleSheet);
    return () => {
      document.head.removeChild(styleSheet);
    };
  }, [theme]);

  const openImage = (img, categoryIndex, imgIndex) => {
    setSelectedImage(img);
    let globalIndex = 0;
    for (let i = 0; i < categoryIndex; i++) {
      globalIndex += project.screenshotCategories[i].screenshots.length;
    }
    globalIndex += imgIndex;
    setCurrentImageIndex(globalIndex);
  };

  const navigateImage = (direction) => {
    const allImages = project.screenshotCategories.flatMap(cat => cat.screenshots);
    const len = allImages.length;
    const newIndex = direction === 'prev'
      ? (currentImageIndex - 1 + len) % len
      : (currentImageIndex + 1) % len;
    
    let categoryIndex = 0;
    let imgIndex = newIndex;
    for (let i = 0; i < project.screenshotCategories.length; i++) {
      const catLength = project.screenshotCategories[i].screenshots.length;
      if (imgIndex < catLength) {
        categoryIndex = i;
        break;
      }
      imgIndex -= catLength;
    }
    
    setSelectedImage(project.screenshotCategories[categoryIndex].screenshots[imgIndex]);
    setCurrentImageIndex(newIndex);
  };

  return (
    <div className={`project-detail-container ${theme}`}>
      <button className="back-button" onClick={() => navigate(-1)}>
        <FaArrowLeft /> {ui.back[lang]}
      </button>
      
      <header className="project-header">
        <h1>{project.title[lang]}</h1>
        <p className="subtitle">{project.subtitle[lang]}</p>
      </header>

      <div className="project-content">
        {/* Description et fonctionnalités */}
        <section className="intro-section">
          {project.description[lang]}
        </section>

        {/* Galerie de screenshots par catégorie */}
        <section className="gallery-section">
          <h2 className="section-subtitle">
            <FaImages className="mr-2" />
            {ui.gallery[lang]}
          </h2>
          
          {project.screenshotCategories.map((category, catIndex) => (
            <div className="screenshot-category" key={category.id}>
              <div className="category-header">
                {category.icon}
                <h2>{category.title[lang]}</h2>
              </div>
              <p className="category-description">
                {category.description[lang]}
              </p>
              <div className="screenshots-grid">
                {category.screenshots.map((img, imgIndex) => (
                  <div 
                    key={imgIndex} 
                    className="screenshot-item"
                    onClick={() => openImage(img, catIndex, imgIndex)}
                  >
                    <img 
                      src={img.url} 
                      alt={img.alt[lang]} 
                      className="screenshot-image" 
                      loading="lazy" 
                    />
                    <p className="screenshot-caption">{img.alt[lang]}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </section>

        {/* Processus de développement */}
        <section className="process-section">
          <h2 className="section-subtitle">
            <FaProjectDiagram className="mr-2" />
            {ui.process[lang]}
          </h2>
          <div className="process-steps">
            {project.process[lang].map((phase, idx) => (
              <div key={idx} className="process-step">
                <div className="process-step-number">{phase.step}</div>
                <h4>{phase.title}</h4>
                <p>{phase.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Architecture MySQL */}
        <section className="database-section">
          <h2 className="section-subtitle">
            <FaDatabase className="mr-2" />
            {ui.database[lang]}
          </h2>
          <ul className="database-list">
            {project.dbSchema[lang].map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
        </section>

        {/* Impact et performances */}
        <section className="impact-section">
          <h2 className="section-subtitle">
            <FaRocket className="mr-2" />
            {ui.impact[lang]}
          </h2>
          <div className="impact-list">
            {project.impact[lang].map((item, idx) => (
              <div key={idx} className="impact-item">
                {item}
              </div>
            ))}
          </div>
        </section>

        {/* Tags technologies */}
        <section className="tags-section">
          <h2 className="section-subtitle">
            <FaTools className="mr-2" />
            {ui.tags[lang]}
          </h2>
          <div className="tags-container">
            {project.tags[lang].map((tag, idx) => (
              <span key={idx} className="tag">
                {tag}
              </span>
            ))}
          </div>
        </section>
      </div>

      {/* Lightbox pour les images */}
      {selectedImage && (
        <div className="lightbox" onClick={() => setSelectedImage(null)}>
          <button 
            className="nav-button prev-button" 
            onClick={(e) => { e.stopPropagation(); navigateImage('prev'); }}
          >
            <FaArrowLeft />
          </button>
          
          <div className="lightbox-content" onClick={e => e.stopPropagation()}>
            <button 
              className="close-button" 
              onClick={(e) => { e.stopPropagation(); setSelectedImage(null); }}
            >
              <FaTimes />
            </button>
            <img 
              src={selectedImage.url} 
              alt={selectedImage.alt[lang]} 
              className="lightbox-image" 
            />
            <p className="lightbox-caption">{selectedImage.alt[lang]}</p>
          </div>
          
          <button 
            className="nav-button next-button" 
            onClick={(e) => { e.stopPropagation(); navigateImage('next'); }}
          >
            <FaArrowRight />
          </button>
        </div>
      )}
    </div>
  );
}