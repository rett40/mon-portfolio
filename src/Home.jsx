// Page d'accueil du portfolio — design harmonisé avec les pages projet (FinTech cyan/bleu)
import React, { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  FaBrain,
  FaDatabase,
  FaCode,
  FaTools,
  FaTimes,
  FaGithub,
  FaEnvelope,
  FaFileDownload,
  FaGraduationCap,
  FaBriefcase,
  FaMapMarkerAlt,
  FaStar
} from "react-icons/fa";
import img1 from "./screenshots/1.jpg";
import img2 from "./screenshots/2.jpg";
import img3 from "./screenshots/3.jpeg";
import img4 from "./screenshots/rfm.png";
import img5 from "./screenshots/big0.jpg";
import img6 from "./screenshots/movies.jfif";
import img7 from "./screenshots/bi.jpg";
import imgJobMatcher from "./screenshots/logo1.png";
import imgLcValidator from "./screenshots/capture_lc_validator/acceuil.PNG";
import profilePhoto from "./screenshots/profile.jpg";
import cvEn from "./screenshots/cv-mohamedaziz-eng.pdf";
import cvFr from "./screenshots/cv-mohamedaziz-fr.pdf";

// ====== Projets ======
const projects = [
  {
    id: "lc-validator",
    route: "/lc-validator",
    featured: true,
    title: {
      fr: "LC-Validator – Analyse de Risque des Lettres de Crédit par IA Explicable (XAI)",
      en: "LC-Validator – Letter of Credit Risk Analysis with Explainable AI (XAI)"
    },
    image: imgLcValidator,
    summary: {
      fr: "Plateforme à deux pipelines IA validant le SWIFT MT700 (NER BERT fine-tuné, UCP 600, scoring XGBoost + SHAP) puis les documents commerciaux et leur cohérence (LayoutLMv3, DeBERTa NLI). 8 microservices Docker + MLOps. Mémoire de fin d'études chez Excellia Solution.",
      en: "Two-pipeline AI platform validating the SWIFT MT700 (fine-tuned BERT NER, UCP 600, XGBoost + SHAP scoring) then the commercial documents and their consistency (LayoutLMv3, DeBERTa NLI). 8 Docker microservices + MLOps. Graduation thesis at Excellia Solution."
    },
    tags: ["Angular", "Spring Boot", "BERT NER", "LayoutLMv3", "DeBERTa NLI", "XGBoost", "XAI / SHAP", "Docker", "MLOps"]
  },
  {
    id: "smart-job-matcher",
    route: "/smart-job-matcher",
    title: {
      fr: "Smart Job Matcher – Plateforme de Recrutement Intelligent",
      en: "Smart Job Matcher – Intelligent Recruitment Platform"
    },
    image: imgJobMatcher,
    summary: {
      fr: "Plateforme IA de matching CV ↔ offres d'emploi : algorithmes NLP, score de compatibilité et dashboards analytiques candidat / recruteur.",
      en: "AI platform matching CVs to job offers: NLP algorithms, compatibility scoring and candidate / recruiter analytical dashboards."
    },
    tags: ["React", "Python", "Flask", "NLP", "MySQL", "JWT", "Docker"]
  },
  {
    id: "rfm-clustering",
    route: "/rfmProject",
    title: {
      fr: "Segmentation RFM & Prédiction",
      en: "RFM Clustering & Forecasting"
    },
    image: img4,
    summary: {
      fr: "Analyse RFM avec clustering clients (KMeans, CAH), segmentation produits et prévision des ventes par séries temporelles.",
      en: "RFM analysis with customer clustering (KMeans, hierarchical), product segmentation and time-series sales forecasting."
    },
    tags: ["Python", "scikit-learn", "KMeans", "Streamlit", "Pandas"]
  },
  {
    id: "machine-learning",
    route: "/machine-learning",
    title: {
      fr: "Prédiction du Niveau d'Obésité",
      en: "Obesity Level Prediction"
    },
    image: img2,
    summary: {
      fr: "Pipeline Machine Learning : comparaison de trois classifieurs (KNN, Naive Bayes, Decision Tree) et déploiement Flask.",
      en: "Machine Learning pipeline: comparison of three classifiers (KNN, Naive Bayes, Decision Tree) with Flask deployment."
    },
    tags: ["Python", "scikit-learn", "Flask", "Machine Learning"]
  },
  {
    id: "water-consumption-analysis",
    route: "/bigdata",
    title: {
      fr: "Big Data – Consommation Mondiale d'Eau",
      en: "Big Data – Global Water Consumption"
    },
    image: img5,
    summary: {
      fr: "Traitement Big Data avec PySpark et visualisations analytiques : pays consommateurs, par habitant, tendances et secteurs.",
      en: "Big Data processing with PySpark and analytical visualizations: consuming countries, per capita, trends and sectors."
    },
    tags: ["Big Data", "PySpark", "Streamlit", "Matplotlib", "Seaborn"]
  },
  {
    id: "superstore-dashboard",
    route: "/dash",
    title: {
      fr: "Dashboard Superstore – Python & Power BI",
      en: "Superstore Dashboard – Python & Power BI"
    },
    image: img7,
    summary: {
      fr: "Dashboard commercial complet en deux approches comparées : Dash/Plotly (Python) et Power BI avec mesures DAX.",
      en: "Complete business dashboard through two compared approaches: Dash/Plotly (Python) and Power BI with DAX measures."
    },
    tags: ["Python", "Dash", "Plotly", "Power BI", "DAX", "KPI"]
  },
  {
    id: "bi-vermeg",
    route: "/bi-vermeg",
    title: {
      fr: "Projet BI – Licences Jira (VERMEG)",
      en: "BI Project – Jira Licenses (VERMEG)"
    },
    image: img3,
    summary: {
      fr: "Solution décisionnelle de bout en bout : collecte API, ETL Talend, Data Warehouse, dashboards Power BI et Power Apps sécurisé.",
      en: "End-to-end BI solution: API collection, Talend ETL, Data Warehouse, Power BI dashboards and secure Power Apps."
    },
    tags: ["Power BI", "Talend", "MySQL", "Power Apps", "ETL"]
  },
  {
    id: "movie-recommender",
    route: "/movie-recommender",
    title: {
      fr: "Recommandateur de Films",
      en: "Movie Recommender"
    },
    image: img6,
    summary: {
      fr: "Filtrage collaboratif SVD avec mode couple (fusion des préférences), filtres avancés et affiches via l'API TMDB.",
      en: "SVD collaborative filtering with a couple mode (preference merging), advanced filters and posters through the TMDB API."
    },
    tags: ["Python", "Streamlit", "SVD", "TMDB API"]
  },
  {
    id: "pos",
    route: "/projet/pos",
    title: {
      fr: "Système de Gestion POS",
      en: "POS Management System"
    },
    image: img1,
    summary: {
      fr: "Gestion de points de vente multi-magasins : caisse, stocks, clôtures, reporting PDF/Excel et rôles sécurisés.",
      en: "Multi-store point-of-sale management: register, inventory, closings, PDF/Excel reporting and secure roles."
    },
    tags: ["React", "Node.js", "MySQL", "JWT"]
  }
];

// ====== Textes UI ======
const texts = {
  fr: {
    name: "Aziz Ben Mohamed",
    subtitle: "Data Scientist & Développeur Full-Stack AI",
    tagline:
      "Je conçois des solutions data de bout en bout : pipelines IA (NLP, Deep Learning, XAI), Business Intelligence et applications web full-stack — de l'exploration des données au déploiement conteneurisé.",
    chips: {
      degree: "Master ISIDS — Université de Tunis El Manar",
      work: "Mémoire IA — Excellia Solution (2026)",
      location: "Tunis, Tunisie"
    },
    aboutTitle: "À Propos",
    about1:
      "Diplômé en Informatique de Gestion et en fin de Master professionnel en Ingénierie des Systèmes d'Information et Data Science (ISIDS), je réalise actuellement mon mémoire de fin d'études chez Excellia Solution : une plateforme d'analyse de risque des lettres de crédit basée sur l'IA explicable (NER BERT fine-tuné, LayoutLMv3, DeBERTa NLI, XGBoost + SHAP), déployée en microservices Docker avec un cycle MLOps complet.",
    about2:
      "Mon profil hybride couvre toute la chaîne de valeur de la donnée : analyse et modélisation (Machine Learning, NLP), Business Intelligence (Power BI, Talend, Data Warehouse) et développement d'applications (React, Angular, Spring Boot, Flask). J'aime transformer des problèmes métier complexes en produits data fiables, explicables et déployés.",
    skillsTitle: "Compétences Techniques",
    skills: {
      ia: "Data Science & IA",
      data: "Data Engineering & BI",
      dev: "Développement Full-Stack",
      tools: "Outils & MLOps"
    },
    projectsTitle: "Projets Récents",
    featured: "Projet phare",
    cv: "Télécharger mon CV",
    contactTitle: "Contact",
    contactText:
      "Un projet data, une opportunité ou une question ? Discutons-en.",
    footer: "Portfolio — Aziz Ben Mohamed"
  },
  en: {
    name: "Aziz Ben Mohamed",
    subtitle: "Data Scientist & Full-Stack AI Developer",
    tagline:
      "I build end-to-end data solutions: AI pipelines (NLP, Deep Learning, XAI), Business Intelligence and full-stack web applications — from data exploration to containerized deployment.",
    chips: {
      degree: "ISIDS Master — University of Tunis El Manar",
      work: "AI Thesis — Excellia Solution (2026)",
      location: "Tunis, Tunisia"
    },
    aboutTitle: "About",
    about1:
      "Graduated in Management IT and finishing a professional Master's in Information Systems Engineering and Data Science (ISIDS), I am currently completing my graduation thesis at Excellia Solution: a Letter of Credit risk analysis platform based on Explainable AI (fine-tuned BERT NER, LayoutLMv3, DeBERTa NLI, XGBoost + SHAP), deployed as Docker microservices with a full MLOps lifecycle.",
    about2:
      "My hybrid profile covers the whole data value chain: analysis and modeling (Machine Learning, NLP), Business Intelligence (Power BI, Talend, Data Warehouse) and application development (React, Angular, Spring Boot, Flask). I enjoy turning complex business problems into reliable, explainable and deployed data products.",
    skillsTitle: "Technical Skills",
    skills: {
      ia: "Data Science & AI",
      data: "Data Engineering & BI",
      dev: "Full-Stack Development",
      tools: "Tools & MLOps"
    },
    projectsTitle: "Recent Projects",
    featured: "Featured project",
    cv: "Download my CV",
    contactTitle: "Contact",
    contactText: "A data project, an opportunity or a question? Let's talk.",
    footer: "Portfolio — Aziz Ben Mohamed"
  }
};

// ====== Compétences ======
const skillGroups = [
  {
    key: "ia",
    icon: <FaBrain />,
    color: "#a78bfa",
    items: {
      fr: [
        "Machine Learning (scikit-learn, XGBoost)",
        "Deep Learning & NLP (BERT, LayoutLMv3, DeBERTa, Hugging Face)",
        "IA Explicable — XAI (SHAP, LIME)",
        "Pandas / NumPy · Séries temporelles"
      ],
      en: [
        "Machine Learning (scikit-learn, XGBoost)",
        "Deep Learning & NLP (BERT, LayoutLMv3, DeBERTa, Hugging Face)",
        "Explainable AI — XAI (SHAP, LIME)",
        "Pandas / NumPy · Time series"
      ]
    }
  },
  {
    key: "data",
    icon: <FaDatabase />,
    color: "#22d3ee",
    items: {
      fr: [
        "Power BI (DAX) · Dash / Plotly",
        "ETL Talend · Data Warehouse",
        "PySpark · Big Data",
        "SQL avancé (PostgreSQL, MySQL, JSONB)"
      ],
      en: [
        "Power BI (DAX) · Dash / Plotly",
        "Talend ETL · Data Warehouse",
        "PySpark · Big Data",
        "Advanced SQL (PostgreSQL, MySQL, JSONB)"
      ]
    }
  },
  {
    key: "dev",
    icon: <FaCode />,
    color: "#34d399",
    items: {
      fr: [
        "React · Angular",
        "Spring Boot (Java) · Node.js",
        "Flask / FastAPI (Python)",
        "APIs REST · JWT / RBAC"
      ],
      en: [
        "React · Angular",
        "Spring Boot (Java) · Node.js",
        "Flask / FastAPI (Python)",
        "REST APIs · JWT / RBAC"
      ]
    }
  },
  {
    key: "tools",
    icon: <FaTools />,
    color: "#fb923c",
    items: {
      fr: [
        "Docker · Git / GitHub",
        "MLOps : MLflow, DVC, Evidently AI",
        "MinIO (stockage objet)",
        "Jira · Agile / Scrum · CRISP-DM"
      ],
      en: [
        "Docker · Git / GitHub",
        "MLOps: MLflow, DVC, Evidently AI",
        "MinIO (object storage)",
        "Jira · Agile / Scrum · CRISP-DM"
      ]
    }
  }
];

// ====== Thèmes ======
const lightTheme = `
  .home-container.light {
    --bg-primary: #f4f8fb;
    --bg-secondary: #ffffff;
    --text-primary: #0f2436;
    --text-secondary: #46607a;
    --accent-primary: #0891b2;
    --accent-secondary: #2563eb;
    --card-bg: #ffffff;
    --card-border: #dbe7f0;
    --code-bg: #eef5fa;
    --hero-glow: rgba(8, 145, 178, 0.12);
    --shadow-sm: 0 1px 3px rgba(15, 36, 54, 0.08);
    --shadow-md: 0 4px 12px rgba(15, 36, 54, 0.1);
    --shadow-lg: 0 12px 30px rgba(15, 36, 54, 0.12);
  }
`;

const darkTheme = `
  .home-container.dark {
    --bg-primary: #0a1220;
    --bg-secondary: #101c2e;
    --text-primary: #e8f1f8;
    --text-secondary: #9fb4c8;
    --accent-primary: #22d3ee;
    --accent-secondary: #60a5fa;
    --card-bg: #101c2e;
    --card-border: #1e3048;
    --code-bg: #0d1727;
    --hero-glow: rgba(34, 211, 238, 0.1);
    --shadow-sm: 0 1px 3px rgba(0, 0, 0, 0.4);
    --shadow-md: 0 4px 12px rgba(0, 0, 0, 0.45);
    --shadow-lg: 0 12px 30px rgba(0, 0, 0, 0.5);
  }
`;

const baseStyles = `
  .home-container {
    min-height: 100vh;
    padding: 2rem;
    background: var(--bg-primary);
    color: var(--text-primary);
    transition: background 0.3s ease, color 0.3s ease;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  }

  .home-content {
    max-width: 1200px;
    margin: 0 auto;
  }

  /* ===== Hero ===== */
  .home-hero {
    position: relative;
    text-align: center;
    padding: 4rem 2rem 2.75rem;
    border-radius: 24px;
    background:
      radial-gradient(ellipse at 20% 0%, var(--hero-glow), transparent 55%),
      radial-gradient(ellipse at 80% 100%, var(--hero-glow), transparent 55%),
      var(--card-bg);
    border: 1px solid var(--card-border);
    box-shadow: var(--shadow-lg);
    margin-bottom: 2.5rem;
    overflow: hidden;
  }

  .home-hero::before {
    content: '';
    position: absolute;
    inset: 0 0 auto 0;
    height: 3px;
    background: linear-gradient(90deg, #22d3ee, #60a5fa, #a78bfa);
  }

  .home-profile {
    position: relative;
    display: inline-block;
    cursor: pointer;
    margin-bottom: 1.4rem;
  }

  .home-profile-photo {
    width: 150px;
    height: 150px;
    border-radius: 50%;
    object-fit: cover;
    border: 3px solid var(--accent-primary);
    box-shadow: 0 0 0 6px var(--hero-glow), var(--shadow-lg);
    transition: transform 0.25s ease, box-shadow 0.25s ease;
  }

  .home-profile:hover .home-profile-photo {
    transform: scale(1.04);
    box-shadow: 0 0 0 8px var(--hero-glow), 0 0 24px var(--accent-primary);
  }

  .home-zoom-hint {
    position: absolute;
    bottom: -8px;
    left: 50%;
    transform: translateX(-50%);
    background: var(--accent-primary);
    color: #04141c;
    font-size: 0.72rem;
    font-weight: 700;
    padding: 0.2rem 0.7rem;
    border-radius: 999px;
    white-space: nowrap;
  }

  .home-hero h1 {
    font-size: 2.8rem;
    font-weight: 800;
    letter-spacing: -0.02em;
    margin: 0 0 0.4rem;
    background: linear-gradient(120deg, var(--accent-primary), var(--accent-secondary));
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }

  .home-subtitle {
    font-size: 1.25rem;
    font-weight: 600;
    color: var(--text-primary);
    margin: 0 0 1.1rem;
  }

  .home-tagline {
    max-width: 720px;
    margin: 0 auto 1.6rem;
    color: var(--text-secondary);
    font-size: 1.02rem;
    line-height: 1.65;
  }

  .home-chips {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 0.75rem;
    margin-bottom: 1.8rem;
  }

  .home-chip {
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    padding: 0.45rem 1rem;
    border-radius: 999px;
    font-size: 0.88rem;
    font-weight: 600;
    border: 1px solid var(--card-border);
    background: var(--code-bg);
    color: var(--text-primary);
  }

  .home-chip svg { color: var(--accent-primary); }

  .home-actions {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 1rem;
  }

  .home-btn {
    display: inline-flex;
    align-items: center;
    gap: 0.6rem;
    padding: 0.75rem 1.6rem;
    border-radius: 12px;
    font-weight: 600;
    font-size: 0.98rem;
    text-decoration: none;
    cursor: pointer;
    transition: transform 0.25s ease, box-shadow 0.25s ease;
  }

  .home-btn.primary {
    color: #04141c;
    background: linear-gradient(120deg, var(--accent-primary), var(--accent-secondary));
    box-shadow: var(--shadow-md);
    border: none;
  }

  .home-btn.secondary {
    color: var(--text-primary);
    background: var(--card-bg);
    border: 1px solid var(--card-border);
    box-shadow: var(--shadow-sm);
  }

  .home-btn:hover {
    transform: translateY(-3px);
    box-shadow: var(--shadow-lg);
  }

  .home-btn.secondary:hover {
    border-color: var(--accent-primary);
    color: var(--accent-primary);
  }

  /* ===== Sections ===== */
  .home-section {
    background: var(--card-bg);
    border: 1px solid var(--card-border);
    border-radius: 20px;
    padding: 2.25rem;
    margin-bottom: 2.5rem;
    box-shadow: var(--shadow-md);
  }

  .home-section-title {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    font-size: 1.55rem;
    font-weight: 700;
    margin: 0 0 1.5rem;
    color: var(--text-primary);
  }

  .home-section-title::before {
    content: '';
    width: 5px;
    height: 1.6rem;
    border-radius: 3px;
    background: linear-gradient(to bottom, var(--accent-primary), var(--accent-secondary));
  }

  /* ===== À propos ===== */
  .home-about p {
    color: var(--text-secondary);
    font-size: 1.02rem;
    line-height: 1.75;
    margin: 0 0 1rem;
  }

  .home-about p:last-child { margin-bottom: 0; }

  .home-about strong { color: var(--text-primary); }

  /* ===== Compétences ===== */
  .home-skills {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 1.25rem;
  }

  .home-skill-card {
    border: 1px solid var(--card-border);
    border-radius: 16px;
    padding: 1.5rem;
    background: var(--bg-secondary);
    transition: transform 0.25s ease, border-color 0.25s ease, box-shadow 0.25s ease;
  }

  .home-skill-card:hover {
    transform: translateY(-5px);
    border-color: var(--skill-color);
    box-shadow: var(--shadow-lg);
  }

  .home-skill-icon {
    width: 48px;
    height: 48px;
    border-radius: 12px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.35rem;
    color: var(--skill-color);
    background: color-mix(in srgb, var(--skill-color) 12%, transparent);
    border: 1px solid var(--skill-color);
    margin-bottom: 1rem;
  }

  .home-skill-card h3 {
    margin: 0 0 0.9rem;
    font-size: 1.08rem;
    color: var(--text-primary);
  }

  .home-skill-card ul {
    list-style: none;
    padding: 0;
    margin: 0;
    display: grid;
    gap: 0.55rem;
  }

  .home-skill-card li {
    display: flex;
    gap: 0.55rem;
    align-items: flex-start;
    color: var(--text-secondary);
    font-size: 0.9rem;
    line-height: 1.5;
  }

  .home-skill-card li::before {
    content: '▸';
    color: var(--skill-color);
    font-weight: 700;
    flex-shrink: 0;
  }

  /* ===== Projets ===== */
  .home-projects {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
    gap: 1.5rem;
  }

  .home-project-card {
    position: relative;
    display: flex;
    flex-direction: column;
    border: 1px solid var(--card-border);
    border-radius: 16px;
    overflow: hidden;
    background: var(--bg-secondary);
    cursor: pointer;
    transition: transform 0.3s ease, border-color 0.3s ease, box-shadow 0.3s ease;
  }

  .home-project-card:hover {
    transform: translateY(-6px);
    border-color: var(--accent-primary);
    box-shadow: var(--shadow-lg);
  }

  .home-project-image-wrap {
    position: relative;
    height: 185px;
    overflow: hidden;
    background: var(--code-bg);
    border-bottom: 1px solid var(--card-border);
  }

  .home-project-image {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: top center;
    display: block;
    transition: transform 0.35s ease;
  }

  .home-project-card:hover .home-project-image {
    transform: scale(1.05);
  }

  .home-featured-badge {
    position: absolute;
    top: 0.8rem;
    left: 0.8rem;
    display: inline-flex;
    align-items: center;
    gap: 0.4rem;
    padding: 0.3rem 0.8rem;
    border-radius: 999px;
    font-size: 0.75rem;
    font-weight: 800;
    text-transform: uppercase;
    letter-spacing: 0.06em;
    color: #04141c;
    background: linear-gradient(120deg, #22d3ee, #60a5fa);
    box-shadow: 0 0 14px rgba(34, 211, 238, 0.5);
    z-index: 1;
  }

  .home-project-body {
    display: flex;
    flex-direction: column;
    flex: 1;
    padding: 1.3rem 1.4rem 1.4rem;
  }

  .home-project-title {
    margin: 0 0 0.55rem;
    font-size: 1.08rem;
    font-weight: 700;
    color: var(--text-primary);
    line-height: 1.4;
  }

  .home-project-summary {
    margin: 0 0 1rem;
    color: var(--text-secondary);
    font-size: 0.9rem;
    line-height: 1.6;
    flex: 1;
  }

  .home-project-tags {
    display: flex;
    flex-wrap: wrap;
    gap: 0.4rem;
  }

  .home-project-tag {
    padding: 0.25rem 0.7rem;
    border-radius: 999px;
    font-size: 0.75rem;
    font-weight: 600;
    color: var(--accent-primary);
    background: var(--code-bg);
    border: 1px solid var(--card-border);
    transition: all 0.25s ease;
  }

  .home-project-card:hover .home-project-tag {
    border-color: var(--accent-primary);
  }

  /* ===== Contact / Footer ===== */
  .home-contact {
    text-align: center;
  }

  .home-contact .home-section-title {
    justify-content: center;
  }

  .home-contact p {
    color: var(--text-secondary);
    margin: 0 0 1.5rem;
    font-size: 1rem;
  }

  .home-footer {
    text-align: center;
    color: var(--text-secondary);
    font-size: 0.85rem;
    padding: 1rem 0 0.5rem;
  }

  /* ===== Modal photo ===== */
  .home-modal {
    position: fixed;
    inset: 0;
    background: rgba(3, 8, 15, 0.95);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 1000;
    backdrop-filter: blur(10px);
  }

  .home-modal-content {
    position: relative;
    max-width: 90%;
    max-height: 90%;
  }

  .home-modal-image {
    max-width: 100%;
    max-height: 80vh;
    border-radius: 16px;
    border: 1px solid var(--card-border);
    box-shadow: 0 25px 60px rgba(0, 0, 0, 0.6);
  }

  .home-modal-close {
    position: absolute;
    top: -48px;
    right: 0;
    background: rgba(255, 255, 255, 0.12);
    border: none;
    color: #fff;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    font-size: 1.1rem;
    transition: all 0.3s ease;
  }

  .home-modal-close:hover {
    background: rgba(255, 255, 255, 0.25);
    transform: rotate(90deg);
  }

  /* ===== Responsive ===== */
  @media (max-width: 768px) {
    .home-container { padding: 1rem; }
    .home-hero { padding: 4.5rem 1.25rem 2rem; }
    .home-hero h1 { font-size: 2.1rem; }
    .home-subtitle { font-size: 1.05rem; }
    .home-section { padding: 1.5rem; }
    .home-projects { grid-template-columns: 1fr; }
  }
`;

export default function Home({ lang = "fr", theme = "light" }) {
  const navigate = useNavigate();
  const t = texts[lang];
  const [showProfileModal, setShowProfileModal] = useState(false);
  const modalContentRef = useRef(null);
  const longPressTimer = useRef(null);
  const [isPressed, setIsPressed] = useState(false);

  // Injection des styles (même mécanisme que ProjectPage)
  useEffect(() => {
    const styleSheet = document.createElement("style");
    styleSheet.textContent = baseStyles + (theme === "dark" ? darkTheme : lightTheme);
    document.head.appendChild(styleSheet);
    return () => {
      document.head.removeChild(styleSheet);
    };
  }, [theme]);

  // Zoom photo : appui long
  const handleStart = () => {
    setIsPressed(true);
    longPressTimer.current = setTimeout(() => {
      setShowProfileModal(true);
    }, 500);
  };

  const handleEnd = () => {
    setIsPressed(false);
    if (longPressTimer.current) {
      clearTimeout(longPressTimer.current);
    }
  };

  const handleModalClick = (e) => {
    if (modalContentRef.current && !modalContentRef.current.contains(e.target)) {
      setShowProfileModal(false);
    }
  };

  useEffect(() => {
    const handleEscape = (e) => {
      if (e.keyCode === 27) setShowProfileModal(false);
    };
    if (showProfileModal) {
      document.addEventListener("keydown", handleEscape);
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "unset";
    };
  }, [showProfileModal]);

  return (
    <div className={`home-container ${theme}`}>
      <div className="home-content">
        {/* ===== Hero ===== */}
        <header className="home-hero">
          <div
            className="home-profile"
            onMouseDown={handleStart}
            onMouseUp={handleEnd}
            onMouseLeave={handleEnd}
            onTouchStart={handleStart}
            onTouchEnd={handleEnd}
          >
            <img
              src={profilePhoto}
              alt="Aziz Ben Mohamed"
              className="home-profile-photo"
              style={{ transform: isPressed ? "scale(0.95)" : undefined }}
            />
            {isPressed && (
              <div className="home-zoom-hint">
                {lang === "fr" ? "Maintenir pour zoomer" : "Hold to zoom"}
              </div>
            )}
          </div>

          <h1>{t.name}</h1>
          <p className="home-subtitle">{t.subtitle}</p>
          <p className="home-tagline">{t.tagline}</p>

          <div className="home-chips">
            <span className="home-chip">
              <FaGraduationCap /> {t.chips.degree}
            </span>
            <span className="home-chip">
              <FaBriefcase /> {t.chips.work}
            </span>
            <span className="home-chip">
              <FaMapMarkerAlt /> {t.chips.location}
            </span>
          </div>

          <div className="home-actions">
            <a
              href={lang === "fr" ? cvFr : cvEn}
              target="_blank"
              rel="noopener noreferrer"
              className="home-btn primary"
            >
              <FaFileDownload /> {t.cv}
            </a>
            <a
              href="https://github.com/rett40"
              target="_blank"
              rel="noopener noreferrer"
              className="home-btn secondary"
            >
              <FaGithub /> GitHub
            </a>
          </div>
        </header>

        {/* ===== Modal photo ===== */}
        {showProfileModal && (
          <div className="home-modal" onClick={handleModalClick}>
            <div className="home-modal-content" ref={modalContentRef}>
              <button
                className="home-modal-close"
                onClick={() => setShowProfileModal(false)}
                aria-label="Fermer"
              >
                <FaTimes />
              </button>
              <img
                src={profilePhoto}
                alt="Aziz Ben Mohamed"
                className="home-modal-image"
              />
            </div>
          </div>
        )}

        {/* ===== À propos ===== */}
        <section className="home-section">
          <h2 className="home-section-title">{t.aboutTitle}</h2>
          <div className="home-about">
            <p>{t.about1}</p>
            <p>{t.about2}</p>
          </div>
        </section>

        {/* ===== Compétences ===== */}
        <section className="home-section">
          <h2 className="home-section-title">{t.skillsTitle}</h2>
          <div className="home-skills">
            {skillGroups.map((group) => (
              <div
                key={group.key}
                className="home-skill-card"
                style={{ "--skill-color": group.color }}
              >
                <div className="home-skill-icon">{group.icon}</div>
                <h3>{t.skills[group.key]}</h3>
                <ul>
                  {group.items[lang].map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* ===== Projets ===== */}
        <section className="home-section">
          <h2 className="home-section-title">{t.projectsTitle}</h2>
          <div className="home-projects">
            {projects.map((project) => (
              <div
                key={project.id}
                className="home-project-card"
                onClick={() => navigate(project.route)}
              >
                <div className="home-project-image-wrap">
                  {project.featured && (
                    <span className="home-featured-badge">
                      <FaStar /> {t.featured}
                    </span>
                  )}
                  <img
                    src={project.image}
                    alt={project.title[lang]}
                    className="home-project-image"
                    loading="lazy"
                  />
                </div>
                <div className="home-project-body">
                  <h3 className="home-project-title">{project.title[lang]}</h3>
                  <p className="home-project-summary">{project.summary[lang]}</p>
                  <div className="home-project-tags">
                    {project.tags.map((tag, index) => (
                      <span key={index} className="home-project-tag">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ===== Contact ===== */}
        <section className="home-section home-contact">
          <h2 className="home-section-title">{t.contactTitle}</h2>
          <p>{t.contactText}</p>
          <div className="home-actions">
            <a
              href="mailto:aziz40benmohamed@gmail.com"
              className="home-btn primary"
            >
              <FaEnvelope /> aziz40benmohamed@gmail.com
            </a>
            <a
              href="https://github.com/rett40"
              target="_blank"
              rel="noopener noreferrer"
              className="home-btn secondary"
            >
              <FaGithub /> github.com/rett40
            </a>
          </div>
        </section>

        <footer className="home-footer">
          © {new Date().getFullYear()} {t.footer}
        </footer>
      </div>
    </div>
  );
}
