// Projet RFM — page projet harmonisée (ProjectPage)
import React from "react";
import ProjectPage from "./ProjectPage";

import imgRfmOverview from "./screenshots/rfm1.PNG";
import imgRfmSegments from "./screenshots/rfm2.PNG";
import imgRfmKmeans from "./screenshots/rfm3.PNG";
import imgRfmDendrogram from "./screenshots/rfm4.PNG";
import imgProductClusters from "./screenshots/rfm5.PNG";
import imgProductSummary from "./screenshots/rfm6.PNG";
import imgMonthlyView from "./screenshots/rfm7.PNG";
import imgForecastClients from "./screenshots/rfm8.PNG";
import imgForecastQuantity from "./screenshots/rfm9.PNG";

const project = {
  hero: {
    title: {
      fr: "Segmentation RFM & Prédiction Clients",
      en: "RFM Segmentation & Customer Forecasting"
    },
    subtitle: {
      fr: "Clustering des clients et des produits, et prévision des ventes par séries temporelles, dans une application Streamlit.",
      en: "Customer and product clustering plus time-series sales forecasting, in a Streamlit application."
    },
    pitch: {
      fr: "Analyse RFM (Récence, Fréquence, Montant) pour segmenter les clients avec KMeans et la Classification Ascendante Hiérarchique (CAH), clustering des produits vendus, et prédiction de l'évolution des ventes et du nombre de clients via séries temporelles — le tout visualisé dans une interface web Streamlit.",
      en: "RFM analysis (Recency, Frequency, Monetary) to segment customers with KMeans and Hierarchical Clustering, product clustering, and time-series forecasting of sales and customer counts — all visualized in a Streamlit web interface."
    },
    stack: [
      { name: "Python", icon: "🐍", color: "#3776AB" },
      { name: "scikit-learn", icon: "📊", color: "#F7931E" },
      { name: "Pandas", icon: "🧮", color: "#5b3cd5" },
      { name: "Matplotlib", icon: "📈", color: "#11557c" },
      { name: "Streamlit", icon: "🚀", color: "#FF4B4B" }
    ],
    links: [{ kind: "code", url: "https://github.com/rett40/rfm-app" }]
  },
  sections: [
    {
      type: "steps",
      title: { fr: "Démarche du Projet", en: "Project Workflow" },
      steps: [
        {
          title: { fr: "Scores RFM", en: "RFM scores" },
          desc: {
            fr: "Calcul et normalisation des scores Récence, Fréquence et Montant par client.",
            en: "Computing and normalizing Recency, Frequency and Monetary scores per customer."
          }
        },
        {
          title: { fr: "Segmentation clients", en: "Customer segmentation" },
          desc: {
            fr: "Clustering avec KMeans (choix du k) et validation par dendrogramme CAH.",
            en: "KMeans clustering (choosing k) validated by a hierarchical dendrogram."
          }
        },
        {
          title: { fr: "Clustering des produits", en: "Product clustering" },
          desc: {
            fr: "Regroupement des produits vendus selon leur comportement de vente.",
            en: "Grouping sold products by their sales behavior."
          }
        },
        {
          title: { fr: "Prévisions", en: "Forecasting" },
          desc: {
            fr: "Modélisation par séries temporelles du nombre de clients et des quantités vendues.",
            en: "Time-series modeling of customer counts and sold quantities."
          }
        },
        {
          title: { fr: "Interface web", en: "Web interface" },
          desc: {
            fr: "Application Streamlit interactive pour explorer segments et prévisions.",
            en: "Interactive Streamlit application to explore segments and forecasts."
          }
        }
      ]
    },
    {
      type: "gallery",
      title: { fr: "Galerie du Projet", en: "Project Gallery" },
      categories: [
        {
          title: { fr: "Segmentation Clients (RFM)", en: "Customer Segmentation (RFM)" },
          description: {
            fr: "Vue d'ensemble des scores RFM, répartition des segments KMeans et dendrogramme CAH.",
            en: "RFM score overview, KMeans segment distribution and hierarchical dendrogram."
          },
          screenshots: [
            { url: imgRfmOverview, alt: { fr: "Aperçu des clients RFM", en: "RFM customer overview" } },
            { url: imgRfmSegments, alt: { fr: "Répartition des segments (KMeans)", en: "Segment distribution (KMeans)" } },
            { url: imgRfmKmeans, alt: { fr: "Segmentation KMeans des clients", en: "KMeans customer segmentation" } },
            { url: imgRfmDendrogram, alt: { fr: "Dendrogramme CAH", en: "Hierarchical dendrogram" } }
          ]
        },
        {
          title: { fr: "Clustering des Produits", en: "Product Clustering" },
          description: {
            fr: "Classification des produits vendus et résumé par cluster.",
            en: "Sold product classification and per-cluster summary."
          },
          screenshots: [
            { url: imgProductClusters, alt: { fr: "Données produits avec cluster", en: "Clustered product data" } },
            { url: imgProductSummary, alt: { fr: "Résumé des clusters de produits", en: "Product cluster summary" } }
          ]
        },
        {
          title: { fr: "Prévisions (Séries Temporelles)", en: "Forecasting (Time Series)" },
          description: {
            fr: "Vue mensuelle et prévision du nombre de clients et des quantités vendues.",
            en: "Monthly view and forecast of customer counts and sold quantities."
          },
          screenshots: [
            { url: imgMonthlyView, alt: { fr: "Vue mensuelle (clients & ventes)", en: "Monthly view (customers & sales)" } },
            { url: imgForecastClients, alt: { fr: "Prévision — Nombre de clients", en: "Forecast — Number of clients" } },
            { url: imgForecastQuantity, alt: { fr: "Prévision — Quantité totale", en: "Forecast — Total quantity" } }
          ]
        }
      ]
    },
    {
      type: "list",
      title: { fr: "Impact", en: "Impact" },
      items: {
        fr: [
          "Ciblage marketing amélioré grâce à des segments clients actionnables",
          "Anticipation des tendances de ventes par les prévisions temporelles",
          "Exploration interactive des résultats via l'application Streamlit"
        ],
        en: [
          "Improved marketing targeting through actionable customer segments",
          "Sales trend anticipation through time-series forecasting",
          "Interactive result exploration through the Streamlit app"
        ]
      }
    },
    {
      type: "tags",
      title: { fr: "Tags", en: "Tags" },
      tags: {
        fr: ["Data Science", "Clustering", "KMeans", "CAH", "Prévision", "Business Intelligence"],
        en: ["Data Science", "Clustering", "KMeans", "Hierarchical Clustering", "Forecasting", "Business Intelligence"]
      }
    }
  ]
};

export default function RfmProject({ lang = "fr", theme = "light" }) {
  return <ProjectPage lang={lang} theme={theme} project={project} />;
}
