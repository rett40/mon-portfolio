// Projet Big Data — Consommation d'eau mondiale — page harmonisée (ProjectPage)
import React from "react";
import ProjectPage from "./ProjectPage";

import img1 from "./screenshots/big1.PNG";
import img2 from "./screenshots/big2.PNG";
import img3 from "./screenshots/big3.PNG";
import img4 from "./screenshots/BIG4.PNG";
import img5 from "./screenshots/big5.PNG";
import img6 from "./screenshots/big6.PNG";
import img7 from "./screenshots/big7.PNG";
import img8 from "./screenshots/big8.PNG";
import img9 from "./screenshots/big9.PNG";

const project = {
  hero: {
    title: {
      fr: "Big Data – Consommation d'Eau Mondiale",
      en: "Big Data – Global Water Consumption"
    },
    subtitle: {
      fr: "Traitement de données volumineuses avec PySpark et visualisations analytiques par pays, secteur et période.",
      en: "Large-scale data processing with PySpark and analytical visualizations by country, sector and period."
    },
    pitch: {
      fr: "Projet d'analyse Big Data utilisant PySpark pour nettoyer et traiter les données de consommation d'eau mondiale, puis Matplotlib/Seaborn pour visualiser les tendances : principaux pays consommateurs, consommation par habitant, évolution annuelle et répartition sectorielle — présenté dans une interface Streamlit.",
      en: "Big Data analysis project using PySpark to clean and process global water consumption data, then Matplotlib/Seaborn to visualize trends: top consuming countries, per-capita consumption, annual evolution and sector distribution — presented in a Streamlit interface."
    },
    stack: [
      { name: "PySpark", icon: "⚡", color: "#E25A1C" },
      { name: "Python", icon: "🐍", color: "#3776AB" },
      { name: "Matplotlib", icon: "📈", color: "#11557c" },
      { name: "Seaborn", icon: "🌊", color: "#43b7ba" },
      { name: "Streamlit", icon: "🚀", color: "#FF4B4B" }
    ]
  },
  sections: [
    {
      type: "steps",
      title: { fr: "Processus du Projet", en: "Project Process" },
      steps: [
        {
          title: { fr: "Collecte & nettoyage (PySpark)", en: "Collection & cleaning (PySpark)" },
          desc: {
            fr: "Ingestion du dataset mondial et nettoyage distribué des données volumineuses.",
            en: "Global dataset ingestion and distributed cleaning of large data."
          }
        },
        {
          title: { fr: "Exploration statistique", en: "Statistical exploration" },
          desc: {
            fr: "Analyse exploratoire des tendances de consommation par pays et secteur.",
            en: "Exploratory analysis of consumption trends by country and sector."
          }
        },
        {
          title: { fr: "Indicateurs clés", en: "Key indicators" },
          desc: {
            fr: "Calcul des totaux, moyennes par habitant et évolutions max/min annuelles.",
            en: "Computing totals, per-capita averages and annual max/min trends."
          }
        },
        {
          title: { fr: "Visualisations", en: "Visualizations" },
          desc: {
            fr: "Graphiques Matplotlib et Seaborn par pays, habitant et secteur.",
            en: "Matplotlib and Seaborn charts by country, capita and sector."
          }
        },
        {
          title: { fr: "Déploiement Streamlit", en: "Streamlit deployment" },
          desc: {
            fr: "Interface web de présentation des résultats.",
            en: "Web interface presenting the results."
          }
        }
      ]
    },
    {
      type: "gallery",
      title: { fr: "Visualisations & Résultats", en: "Visualizations & Results" },
      categories: [
        {
          title: { fr: "Pays Consommateurs", en: "Consuming Countries" },
          description: {
            fr: "Top 5 des pays par consommation totale d'eau.",
            en: "Top 5 countries by total water consumption."
          },
          screenshots: [
            { url: img1, alt: { fr: "Top 5 pays par consommation totale", en: "Top 5 countries by total consumption" } },
            { url: img2, alt: { fr: "Graphique du top 5 des pays", en: "Top 5 countries chart" } }
          ]
        },
        {
          title: { fr: "Consommation par Habitant", en: "Per-Capita Consumption" },
          description: {
            fr: "Moyennes par habitant et comparaisons entre pays.",
            en: "Per-capita averages and country comparisons."
          },
          screenshots: [
            { url: img3, alt: { fr: "Consommation moyenne par habitant", en: "Average consumption per capita" } },
            { url: img4, alt: { fr: "Graphique par habitant", en: "Per-capita chart" } }
          ]
        },
        {
          title: { fr: "Évolution Temporelle", en: "Temporal Evolution" },
          description: {
            fr: "Tendances annuelles et évolutions max/min de la consommation.",
            en: "Annual trends and max/min consumption evolution."
          },
          screenshots: [
            { url: img5, alt: { fr: "Évolution annuelle de la consommation", en: "Annual consumption evolution" } },
            { url: img6, alt: { fr: "Évolution max/min annuelle", en: "Annual max/min evolution" } }
          ]
        },
        {
          title: { fr: "Répartition Sectorielle", en: "Sector Distribution" },
          description: {
            fr: "Répartition globale et croisement pays × secteur.",
            en: "Global distribution and country × sector breakdown."
          },
          screenshots: [
            { url: img7, alt: { fr: "Répartition globale par secteur", en: "Global distribution by sector" } },
            { url: img8, alt: { fr: "Consommation par pays et secteur", en: "Consumption by country and sector" } },
            { url: img9, alt: { fr: "Graphique pays × secteur", en: "Country × sector chart" } }
          ]
        }
      ]
    },
    {
      type: "list",
      title: { fr: "Impact", en: "Impact" },
      items: {
        fr: [
          "Identification des principaux pays consommateurs et des disparités entre régions",
          "Vue complète de l'usage mondial de l'eau par secteur économique",
          "Tendances annuelles mises en évidence pour anticiper les évolutions"
        ],
        en: [
          "Identification of the main consuming countries and regional disparities",
          "Comprehensive view of global water usage by economic sector",
          "Annual trends highlighted to anticipate future evolution"
        ]
      }
    },
    {
      type: "tags",
      title: { fr: "Tags", en: "Tags" },
      tags: ["Big Data", "PySpark", "Data Visualization", "Streamlit", "Python", "Matplotlib", "Seaborn", "EDA"]
    }
  ]
};

export default function BigDataProject({ lang = "fr", theme = "light" }) {
  return <ProjectPage lang={lang} theme={theme} project={project} />;
}
