// Smart Job Matcher — page harmonisée (ProjectPage)
import React from "react";
import ProjectPage from "./ProjectPage";

import auth1 from "./screenshots/auth1.PNG";
import auth2 from "./screenshots/auth2 (2).PNG";
import candidature1 from "./screenshots/candidature1.PNG";
import candidature2 from "./screenshots/candidature2.PNG";
import dashboardCandidat from "./screenshots/dashboard_candidat.PNG";
import dashboardRecruteur from "./screenshots/dashboard_recruteur.PNG";
import analyse1 from "./screenshots/analyse1.PNG";

const project = {
  hero: {
    title: {
      fr: "Smart Job Matcher – Recrutement Intelligent",
      en: "Smart Job Matcher – Intelligent Recruitment"
    },
    subtitle: {
      fr: "Plateforme IA de matching CV ↔ offres d'emploi avec score de compatibilité et dashboards analytiques.",
      en: "AI platform matching CVs to job offers with compatibility scoring and analytical dashboards."
    },
    pitch: {
      fr: "Plateforme complète de recrutement intelligent : des algorithmes NLP analysent les CV et les offres pour calculer un score de compatibilité, avec des espaces dédiés candidat et recruteur, des dashboards analytiques en temps réel et une architecture robuste basée sur MySQL et une API Flask sécurisée par JWT.",
      en: "Complete intelligent recruitment platform: NLP algorithms analyze CVs and job offers to compute a compatibility score, with dedicated candidate and recruiter areas, real-time analytical dashboards and a robust architecture built on MySQL and a JWT-secured Flask API."
    },
    stack: [
      { name: "React", icon: "⚛️", color: "#61dafb" },
      { name: "Python", icon: "🐍", color: "#3776AB" },
      { name: "Flask", icon: "🔥", color: "#8b4a4a" },
      { name: "NLP", icon: "📝", color: "#FF9900" },
      { name: "MySQL", icon: "🐬", color: "#4479A1" },
      { name: "JWT", icon: "🔐", color: "#00BFA5" },
      { name: "Chart.js", icon: "📈", color: "#FF6384" },
      { name: "Docker", icon: "🐳", color: "#2496ED" }
    ]
  },
  sections: [
    {
      type: "features",
      title: { fr: "Fonctionnalités Clés", en: "Key Features" },
      items: [
        {
          icon: "🛡️",
          title: { fr: "Authentification sécurisée", en: "Secure authentication" },
          desc: {
            fr: "Connexion avec hachage des mots de passe, JWT et sessions MySQL.",
            en: "Login with password hashing, JWT and MySQL sessions."
          }
        },
        {
          icon: "🤖",
          title: { fr: "Matching IA avancé", en: "Advanced AI matching" },
          desc: {
            fr: "Algorithmes NLP pour analyser les CV et extraire les compétences pertinentes.",
            en: "NLP algorithms analyzing CVs and extracting relevant skills."
          }
        },
        {
          icon: "📊",
          title: { fr: "Dashboards analytiques", en: "Analytical dashboards" },
          desc: {
            fr: "Visualisations temps réel côté candidat et côté recruteur.",
            en: "Real-time visualizations for both candidates and recruiters."
          }
        },
        {
          icon: "🗄️",
          title: { fr: "Base MySQL optimisée", en: "Optimized MySQL database" },
          desc: {
            fr: "Structure relationnelle (index full-text, triggers) pensée pour la scalabilité.",
            en: "Relational structure (full-text indexes, triggers) built for scalability."
          }
        }
      ]
    },
    {
      type: "stats",
      title: { fr: "Résultats & Performances", en: "Results & Performance" },
      stats: [
        {
          value: "-40%",
          label: {
            fr: "de temps de présélection grâce au matching automatique",
            en: "screening time thanks to automatic matching"
          }
        },
        {
          value: "95 %",
          label: {
            fr: "de précision du score de compatibilité CV ↔ offre",
            en: "accuracy of the CV ↔ offer compatibility score"
          }
        },
        {
          value: "-60%",
          label: {
            fr: "de temps de réponse grâce aux requêtes SQL optimisées",
            en: "response time thanks to optimized SQL queries"
          }
        },
        {
          value: "10k+",
          label: {
            fr: "utilisateurs supportés par l'architecture MySQL scalable",
            en: "users supported by the scalable MySQL architecture"
          }
        }
      ]
    },
    {
      type: "steps",
      title: { fr: "Processus de Développement", en: "Development Process" },
      steps: [
        {
          title: { fr: "Conception de la base de données", en: "Database design" },
          desc: {
            fr: "Modélisation du schéma MySQL avec relations optimisées et indexation full-text.",
            en: "MySQL schema modeling with optimized relationships and full-text indexing."
          }
        },
        {
          title: { fr: "Développement backend", en: "Backend development" },
          desc: {
            fr: "API REST Flask avec connexion MySQL et algorithmes de matching IA.",
            en: "Flask REST API with MySQL connection and AI matching algorithms."
          }
        },
        {
          title: { fr: "Interface frontend", en: "Frontend interface" },
          desc: {
            fr: "Développement React avec visualisation des données en temps réel.",
            en: "React development with real-time data visualization."
          }
        },
        {
          title: { fr: "Intégration & tests", en: "Integration & testing" },
          desc: {
            fr: "Tests de performance avec des données réelles.",
            en: "Performance testing with real data."
          }
        },
        {
          title: { fr: "Déploiement", en: "Deployment" },
          desc: {
            fr: "Conteneurisation Docker et configuration du serveur MySQL.",
            en: "Docker containerization and MySQL server configuration."
          }
        }
      ]
    },
    {
      type: "gallery",
      title: { fr: "Galerie du Projet", en: "Project Gallery" },
      categories: [
        {
          title: { fr: "Authentification", en: "Authentication" },
          description: {
            fr: "Inscription et connexion sécurisées avec gestion des sessions.",
            en: "Secure registration and login with session management."
          },
          screenshots: [
            { url: auth1, alt: { fr: "Page d'inscription", en: "Registration page" } },
            { url: auth2, alt: { fr: "Interface de connexion sécurisée", en: "Secure login interface" } }
          ]
        },
        {
          title: { fr: "Gestion des Offres", en: "Job Management" },
          description: {
            fr: "Création et consultation des offres d'emploi avec filtres.",
            en: "Job offer creation and browsing with filters."
          },
          screenshots: [
            { url: candidature1, alt: { fr: "Formulaire de création d'offre", en: "Job creation form" } },
            { url: candidature2, alt: { fr: "Liste des offres avec filtres", en: "Job list with filters" } }
          ]
        },
        {
          title: { fr: "Tableaux de Bord", en: "Dashboards" },
          description: {
            fr: "Espaces candidat (recommandations) et recruteur (analytics) en temps réel.",
            en: "Real-time candidate (recommendations) and recruiter (analytics) areas."
          },
          screenshots: [
            { url: dashboardCandidat, alt: { fr: "Dashboard candidat — Recommandations", en: "Candidate dashboard — Recommendations" } },
            { url: dashboardRecruteur, alt: { fr: "Dashboard recruteur — Analytics", en: "Recruiter dashboard — Analytics" } }
          ]
        },
        {
          title: { fr: "Analyse & Matching", en: "Analysis & Matching" },
          description: {
            fr: "Analyse des correspondances IA entre CV et offres.",
            en: "AI matching analysis between CVs and offers."
          },
          screenshots: [
            { url: analyse1, alt: { fr: "Analyse des correspondances IA", en: "AI matching analysis" } }
          ]
        }
      ]
    },
    {
      type: "list",
      title: { fr: "Impact & Architecture", en: "Impact & Architecture" },
      items: {
        fr: [
          "Base MySQL optimisée : tables utilisateurs, offres (full-text), compétences (many-to-many)",
          "Triggers MySQL sur les candidatures et table de logs pour l'audit",
          "Backup automatique et sécurité des données garantie",
          "Architecture scalable avec réplication MySQL possible"
        ],
        en: [
          "Optimized MySQL database: users, offers (full-text), skills (many-to-many) tables",
          "MySQL triggers on applications and a log table for auditing",
          "Automatic backup and guaranteed data security",
          "Scalable architecture with possible MySQL replication"
        ]
      }
    },
    {
      type: "tags",
      title: { fr: "Technologies Utilisées", en: "Technologies Used" },
      tags: {
        fr: ["MySQL", "React", "Python", "NLP", "Flask", "IA", "Recrutement", "JWT", "Docker"],
        en: ["MySQL", "React", "Python", "NLP", "Flask", "AI", "Recruitment", "JWT", "Docker"]
      }
    }
  ]
};

export default function SmartJobMatcher({ lang = "fr", theme = "light" }) {
  return <ProjectPage lang={lang} theme={theme} project={project} />;
}
