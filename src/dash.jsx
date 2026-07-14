// Dashboard Superstore — page harmonisée (ProjectPage)
import React from "react";
import ProjectPage from "./ProjectPage";

import dashKpi1 from "./screenshots/dash1.PNG";
import dashKpi2 from "./screenshots/dash2.PNG";
import topCustomers from "./screenshots/dash3.PNG";
import topProducts from "./screenshots/dash4.PNG";
import lossProducts from "./screenshots/dash5.PNG";
import categoryDistribution from "./screenshots/dash6.PNG";
import categoryComparison from "./screenshots/dash7.PNG";
import monthlyTrends from "./screenshots/dash8.PNG";
import dashboard1 from "./screenshots/Powerbi1.PNG";
import dashboard2 from "./screenshots/powerbi2.PNG";

const project = {
  hero: {
    title: {
      fr: "Dashboard Superstore – Python & Power BI",
      en: "Superstore Dashboard – Python & Power BI"
    },
    subtitle: {
      fr: "Analyse commerciale complète en deux approches comparées : dashboard interactif codé en Dash/Plotly et version Power BI.",
      en: "Complete business analysis through two compared approaches: an interactive Dash/Plotly dashboard and a Power BI version."
    },
    pitch: {
      fr: "Création d'un tableau de bord complet pour analyser les performances d'une entreprise de vente au détail (dataset Superstore) : KPIs dynamiques (CA, marge, commandes, clients), analyses produits et clients, tendances temporelles — implémenté en Python (Dash, Plotly, Pandas) puis en Power BI avec mesures DAX pour comparer les deux solutions.",
      en: "Building a complete dashboard to analyze a retail business's performance (Superstore dataset): dynamic KPIs (revenue, margin, orders, customers), product and customer analyses, time trends — implemented in Python (Dash, Plotly, Pandas) and then in Power BI with DAX measures to compare both solutions."
    },
    stack: [
      { name: "Python", icon: "🐍", color: "#3776AB" },
      { name: "Dash", icon: "📊", color: "#119DFF" },
      { name: "Plotly", icon: "📈", color: "#FF4B4B" },
      { name: "Pandas", icon: "🧮", color: "#5b3cd5" },
      { name: "Power BI", icon: "🟡", color: "#F2C811" },
      { name: "DAX", icon: "🧠", color: "#E97627" }
    ]
  },
  sections: [
    {
      type: "features",
      title: { fr: "Fonctionnalités Principales", en: "Main Features" },
      items: [
        {
          icon: "📌",
          title: { fr: "KPIs dynamiques", en: "Dynamic KPIs" },
          desc: {
            fr: "Chiffre d'affaires, marge, commandes et clients en temps réel.",
            en: "Revenue, margin, orders and customers in real time."
          }
        },
        {
          icon: "📦",
          title: { fr: "Analyse produits", en: "Product analysis" },
          desc: {
            fr: "Top produits, rentabilité et répartition par catégories.",
            en: "Top products, profitability and category distribution."
          }
        },
        {
          icon: "🧑‍💼",
          title: { fr: "Analyse clients", en: "Customer analysis" },
          desc: {
            fr: "Top clients, segmentation et analyse régionale.",
            en: "Top customers, segmentation and regional analysis."
          }
        },
        {
          icon: "📅",
          title: { fr: "Tendances temporelles", en: "Time trends" },
          desc: {
            fr: "Saisonnalité, comparaisons annuelles (YoY) et prévisions.",
            en: "Seasonality, year-over-year comparisons and forecasting."
          }
        }
      ]
    },
    {
      type: "steps",
      title: { fr: "Processus du Projet", en: "Project Process" },
      steps: [
        {
          title: { fr: "Exploration des données", en: "Data exploration" },
          desc: {
            fr: "Analyse exploratoire du dataset Superstore avec Pandas.",
            en: "Exploratory analysis of the Superstore dataset with Pandas."
          }
        },
        {
          title: { fr: "Préparation du dataset", en: "Dataset preparation" },
          desc: {
            fr: "Nettoyage, typage des colonnes et enrichissement des données.",
            en: "Cleaning, column typing and data enrichment."
          }
        },
        {
          title: { fr: "Dashboard Python", en: "Python dashboard" },
          desc: {
            fr: "Développement interactif avec Dash et visualisations Plotly.",
            en: "Interactive development with Dash and Plotly visualizations."
          }
        },
        {
          title: { fr: "Modèle Power BI", en: "Power BI model" },
          desc: {
            fr: "Modélisation et création des mesures DAX.",
            en: "Modeling and DAX measure creation."
          }
        },
        {
          title: { fr: "Comparaison des solutions", en: "Solution comparison" },
          desc: {
            fr: "Analyse comparative flexibilité (Python) vs accessibilité (Power BI).",
            en: "Comparative analysis: flexibility (Python) vs accessibility (Power BI)."
          }
        }
      ]
    },
    {
      type: "gallery",
      title: { fr: "Galerie du Projet", en: "Project Gallery" },
      categories: [
        {
          title: { fr: "Dashboards Power BI", en: "Power BI Dashboards" },
          description: {
            fr: "Vue d'ensemble et analyse détaillée avec mesures DAX.",
            en: "Overview and detailed analysis with DAX measures."
          },
          screenshots: [
            { url: dashboard1, alt: { fr: "Power BI — Vue d'ensemble", en: "Power BI — Overview" } },
            { url: dashboard2, alt: { fr: "Power BI — Analyse détaillée", en: "Power BI — Detailed analysis" } }
          ]
        },
        {
          title: { fr: "Dashboard Python — KPIs", en: "Python Dashboard — KPIs" },
          description: {
            fr: "Indicateurs clés du tableau de bord Dash/Plotly.",
            en: "Key indicators of the Dash/Plotly dashboard."
          },
          screenshots: [
            { url: dashKpi1, alt: { fr: "KPIs principaux (1/2)", en: "Main KPIs (1/2)" } },
            { url: dashKpi2, alt: { fr: "KPIs principaux (2/2)", en: "Main KPIs (2/2)" } }
          ]
        },
        {
          title: { fr: "Analyses Python", en: "Python Analyses" },
          description: {
            fr: "Top clients et produits, rentabilité, catégories et tendances mensuelles.",
            en: "Top customers and products, profitability, categories and monthly trends."
          },
          screenshots: [
            { url: topCustomers, alt: { fr: "Top clients", en: "Top customers" } },
            { url: topProducts, alt: { fr: "Top produits", en: "Top products" } },
            { url: lossProducts, alt: { fr: "Analyse de rentabilité", en: "Profitability analysis" } },
            { url: categoryDistribution, alt: { fr: "Répartition des catégories", en: "Category distribution" } },
            { url: categoryComparison, alt: { fr: "Comparaison des catégories", en: "Category comparison" } },
            { url: monthlyTrends, alt: { fr: "Tendances mensuelles", en: "Monthly trends" } }
          ]
        }
      ]
    },
    {
      type: "list",
      title: { fr: "Impact", en: "Impact" },
      items: {
        fr: [
          "Vision claire des indicateurs clés pour le pilotage commercial",
          "Démonstration de la complémentarité Python (flexibilité) / Power BI (accessibilité business)",
          "Dashboard web déployable et partageable avec les équipes métier"
        ],
        en: [
          "Clear view of key indicators for business steering",
          "Demonstrated complementarity of Python (flexibility) and Power BI (business accessibility)",
          "Deployable web dashboard shareable with business teams"
        ]
      }
    },
    {
      type: "tags",
      title: { fr: "Tags", en: "Tags" },
      tags: {
        fr: ["Data Visualization", "Business Intelligence", "Dashboard", "Python", "Power BI", "Plotly", "Pandas", "Analyse Commerciale"],
        en: ["Data Visualization", "Business Intelligence", "Dashboard", "Python", "Power BI", "Plotly", "Pandas", "Business Analytics"]
      }
    }
  ]
};

export default function SuperstoreDashboard({ lang = "fr", theme = "light" }) {
  return <ProjectPage lang={lang} theme={theme} project={project} />;
}
