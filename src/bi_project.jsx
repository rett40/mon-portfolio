// Projet BI VERMEG — page projet harmonisée (ProjectPage)
import React from "react";
import ProjectPage from "./ProjectPage";

import imgModelisation from "./screenshots/modelisation1.PNG";
import imgETL1 from "./screenshots/last_login2.PNG";
import imgETL2 from "./screenshots/fact1.PNG";
import imgDashboardUser from "./screenshots/dashboard11.PNG";
import imgDashboardLicence from "./screenshots/dashboard2.PNG";
import imgDashboardExterne from "./screenshots/dashboard3.PNG";
import imgPowerAppsHome from "./screenshots/page-acueil.PNG";
import imgLogin from "./screenshots/login_page.PNG";
import imgPowerAppsDash from "./screenshots/dashboardpowerapps.PNG";

const project = {
  hero: {
    title: {
      fr: "Projet BI – Optimisation des Licences Jira (VERMEG)",
      en: "BI Project – Jira License Optimization (VERMEG)"
    },
    subtitle: {
      fr: "Solution décisionnelle de bout en bout : de la collecte API au dashboard Power BI et à l'application Power Apps sécurisée.",
      en: "End-to-end BI solution: from API collection to Power BI dashboards and a secure Power Apps application."
    },
    chips: [
      {
        icon: "context",
        label: { fr: "Stage — VERMEG", en: "Internship — VERMEG" }
      }
    ],
    pitch: {
      fr: "Solution complète de Business Intelligence pour surveiller, optimiser et sécuriser l'usage des licences utilisateurs dans Jira Software : collecte via API REST, traitements ETL Talend, modélisation dimensionnelle (faits / dimensions) et visualisation dans des dashboards interactifs accessibles via une interface Power Apps sécurisée.",
      en: "Complete Business Intelligence solution to monitor, optimize and secure user license usage in Jira Software: REST API collection, Talend ETL processing, dimensional modeling (facts / dimensions) and interactive dashboards accessible through a secure Power Apps interface."
    },
    stack: [
      { name: "Power BI", icon: "📊", color: "#F2C811" },
      { name: "Talend", icon: "🛠️", color: "#FF6F00" },
      { name: "MySQL", icon: "🗄️", color: "#CC2927" },
      { name: "Power Apps", icon: "🧩", color: "#742774" },
      { name: "Jira API", icon: "🔗", color: "#0052CC" },
      { name: "Modélisation DW", icon: "🏗️", color: "#2E86C1" }
    ]
  },
  sections: [
    {
      type: "steps",
      title: { fr: "Processus du Projet", en: "Project Process" },
      steps: [
        {
          title: { fr: "Analyse des données Jira", en: "Jira data analysis" },
          desc: {
            fr: "Étude des données disponibles (utilisateurs, connexions, licences) et des besoins de gouvernance.",
            en: "Study of available data (users, logins, licenses) and governance requirements."
          }
        },
        {
          title: { fr: "Collecte via API REST", en: "REST API collection" },
          desc: {
            fr: "Extraction automatisée des données Jira et stockage en base relationnelle.",
            en: "Automated Jira data extraction and relational database storage."
          }
        },
        {
          title: { fr: "Modélisation dimensionnelle", en: "Dimensional modeling" },
          desc: {
            fr: "Conception du Data Warehouse en schéma faits / dimensions.",
            en: "Data Warehouse design with a facts / dimensions schema."
          }
        },
        {
          title: { fr: "Traitements ETL (Talend)", en: "ETL processing (Talend)" },
          desc: {
            fr: "Nettoyage, transformation (last_login, table de faits) et chargement des données.",
            en: "Data cleaning, transformation (last_login, fact table) and loading."
          }
        },
        {
          title: { fr: "Dashboards Power BI", en: "Power BI dashboards" },
          desc: {
            fr: "Vues Utilisateurs, Licences et Interne / Externe avec KPIs dynamiques.",
            en: "Users, Licenses and Internal / External views with dynamic KPIs."
          }
        },
        {
          title: { fr: "Interface Power Apps sécurisée", en: "Secure Power Apps interface" },
          desc: {
            fr: "Application avec authentification pour consulter les dashboards.",
            en: "Authenticated application to browse the dashboards."
          }
        }
      ]
    },
    {
      type: "stats",
      title: { fr: "Résultats & Impacts", en: "Results & Impact" },
      stats: [
        {
          value: "-30%",
          label: {
            fr: "de coûts de licences inutilisées grâce au suivi automatisé",
            en: "unused license costs thanks to automated monitoring"
          }
        },
        {
          value: "3",
          label: {
            fr: "dashboards Power BI interactifs (Utilisateurs, Licences, Interne/Externe)",
            en: "interactive Power BI dashboards (Users, Licenses, Internal/External)"
          }
        },
        {
          value: "100 %",
          label: {
            fr: "des accès gouvernés via l'interface Power Apps sécurisée",
            en: "of access governed through the secure Power Apps interface"
          }
        }
      ]
    },
    {
      type: "gallery",
      title: { fr: "Galerie du Projet", en: "Project Gallery" },
      categories: [
        {
          title: { fr: "Modélisation & ETL", en: "Modeling & ETL" },
          description: {
            fr: "Modèle dimensionnel du Data Warehouse et jobs Talend de transformation.",
            en: "Data Warehouse dimensional model and Talend transformation jobs."
          },
          screenshots: [
            { url: imgModelisation, alt: { fr: "Modélisation des données (DW)", en: "Data modeling (DW)" } },
            { url: imgETL1, alt: { fr: "ETL — Transformation last_login", en: "ETL — last_login transformation" } },
            { url: imgETL2, alt: { fr: "ETL — Table de faits", en: "ETL — Fact table" } }
          ]
        },
        {
          title: { fr: "Dashboards Power BI", en: "Power BI Dashboards" },
          description: {
            fr: "KPIs et analyses interactives des utilisateurs et des licences.",
            en: "KPIs and interactive user and license analyses."
          },
          screenshots: [
            { url: imgDashboardUser, alt: { fr: "Dashboard — Utilisateurs", en: "Dashboard — Users" } },
            { url: imgDashboardLicence, alt: { fr: "Dashboard — Licences", en: "Dashboard — Licenses" } },
            { url: imgDashboardExterne, alt: { fr: "Dashboard — Interne / Externe", en: "Dashboard — Internal / External" } }
          ]
        },
        {
          title: { fr: "Application Power Apps", en: "Power Apps Application" },
          description: {
            fr: "Interface sécurisée d'accès aux tableaux de bord.",
            en: "Secure interface to access the dashboards."
          },
          screenshots: [
            { url: imgPowerAppsHome, alt: { fr: "Power Apps — Page d'accueil", en: "Power Apps — Home page" } },
            { url: imgLogin, alt: { fr: "Page de connexion", en: "Login page" } },
            { url: imgPowerAppsDash, alt: { fr: "Dashboard intégré dans Power Apps", en: "Dashboard embedded in Power Apps" } }
          ]
        }
      ]
    },
    {
      type: "tags",
      title: { fr: "Tags", en: "Tags" },
      tags: {
        fr: ["Business Intelligence", "Optimisation coûts", "Data Warehouse", "Power Platform", "ETL"],
        en: ["Business Intelligence", "Cost Optimization", "Data Warehouse", "Power Platform", "ETL"]
      }
    }
  ]
};

export default function BIVermeg({ lang = "fr", theme = "light" }) {
  return <ProjectPage lang={lang} theme={theme} project={project} />;
}
