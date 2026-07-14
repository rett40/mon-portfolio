// Prédiction du niveau d'obésité — page projet harmonisée (ProjectPage)
import React from "react";
import ProjectPage from "./ProjectPage";

import knnImg from "./screenshots/myplot.png";
import nbImg from "./screenshots/myplot1.png";
import dtImg from "./screenshots/myplot2.png";
import barplotImg from "./screenshots/myplot3.png";
import heatmapImg from "./screenshots/myplot4.png";
import radarImg from "./screenshots/myplot5.png";
import accuracyImg from "./screenshots/myplot6.png";
import formImg from "./screenshots/obisité1.PNG";
import resultImg from "./screenshots/obisité2.PNG";

const project = {
  hero: {
    title: {
      fr: "Prédiction du Niveau d'Obésité",
      en: "Obesity Level Prediction"
    },
    subtitle: {
      fr: "Pipeline Machine Learning complet : de la préparation des données à une application web de prédiction.",
      en: "Complete Machine Learning pipeline: from data preparation to a web prediction app."
    },
    pitch: {
      fr: "Ce projet prédit le niveau d'obésité à partir des habitudes alimentaires et de l'activité physique. Trois modèles (KNN, Naive Bayes, Decision Tree) sont entraînés, comparés sur plusieurs métriques, puis le meilleur est exposé via une interface Flask permettant une prédiction en temps réel.",
      en: "This project predicts obesity level from eating habits and physical activity. Three models (KNN, Naive Bayes, Decision Tree) are trained, compared across several metrics, and the best one is served through a Flask interface for real-time prediction."
    },
    stack: [
      { name: "Python", icon: "🐍", color: "#3776AB" },
      { name: "Pandas", icon: "🧮", color: "#5b3cd5" },
      { name: "scikit-learn", icon: "📊", color: "#F7931E" },
      { name: "Flask", icon: "🌶️", color: "#8b4a4a" },
      { name: "Matplotlib", icon: "📈", color: "#11557c" },
      { name: "Seaborn", icon: "🌊", color: "#43b7ba" }
    ],
    links: [{ kind: "code", url: "https://github.com/rett40/formulaire1" }]
  },
  sections: [
    {
      type: "steps",
      title: { fr: "Démarche Data Science", en: "Data Science Workflow" },
      steps: [
        {
          title: { fr: "Préparation des données", en: "Data preparation" },
          desc: {
            fr: "Encodage des variables catégorielles et standardisation des features.",
            en: "Categorical variable encoding and feature standardization."
          }
        },
        {
          title: { fr: "Modélisation", en: "Modeling" },
          desc: {
            fr: "Entraînement de trois classifieurs : KNN, Naive Bayes et Decision Tree.",
            en: "Training three classifiers: KNN, Naive Bayes and Decision Tree."
          }
        },
        {
          title: { fr: "Évaluation comparative", en: "Comparative evaluation" },
          desc: {
            fr: "Matrices de confusion, précision, rappel et F1 comparés entre modèles.",
            en: "Confusion matrices, precision, recall and F1 compared across models."
          }
        },
        {
          title: { fr: "Déploiement web", en: "Web deployment" },
          desc: {
            fr: "Interface Flask avec formulaire de saisie et affichage du niveau prédit.",
            en: "Flask interface with an input form displaying the predicted level."
          }
        }
      ]
    },
    {
      type: "gallery",
      title: { fr: "Visualisations & Résultats", en: "Visualizations & Results" },
      categories: [
        {
          title: { fr: "Matrices de confusion", en: "Confusion Matrices" },
          description: {
            fr: "Performance de chaque modèle sur le jeu de test.",
            en: "Each model's performance on the test set."
          },
          screenshots: [
            { url: knnImg, alt: { fr: "Matrice de confusion — KNN", en: "Confusion matrix — KNN" } },
            { url: nbImg, alt: { fr: "Matrice de confusion — Naive Bayes", en: "Confusion matrix — Naive Bayes" } },
            { url: dtImg, alt: { fr: "Matrice de confusion — Decision Tree", en: "Confusion matrix — Decision Tree" } }
          ]
        },
        {
          title: { fr: "Comparaison des modèles", en: "Model Comparison" },
          description: {
            fr: "Métriques croisées, corrélations et radar des performances.",
            en: "Cross metrics, correlations and performance radar."
          },
          screenshots: [
            { url: barplotImg, alt: { fr: "Comparaison des métriques (barplot)", en: "Metrics comparison (barplot)" } },
            { url: accuracyImg, alt: { fr: "Précision par modèle", en: "Accuracy per model" } },
            { url: heatmapImg, alt: { fr: "Carte thermique des corrélations", en: "Correlation heatmap" } },
            { url: radarImg, alt: { fr: "Radar des performances", en: "Performance radar" } }
          ]
        },
        {
          title: { fr: "Interface Web (Flask)", en: "Web Interface (Flask)" },
          description: {
            fr: "Formulaire de saisie des habitudes et affichage du résultat de prédiction.",
            en: "Habit input form and prediction result display."
          },
          screenshots: [
            { url: formImg, alt: { fr: "Formulaire de prédiction", en: "Prediction form" } },
            { url: resultImg, alt: { fr: "Résultat de la prédiction", en: "Prediction result" } }
          ]
        }
      ]
    },
    {
      type: "tags",
      title: { fr: "Technologies Utilisées", en: "Technologies Used" },
      tags: ["Python", "Machine Learning", "KNN", "Naive Bayes", "Decision Tree", "Flask", "scikit-learn"]
    }
  ]
};

export default function ObesityProject({ lang = "fr", theme = "light" }) {
  return <ProjectPage lang={lang} theme={theme} project={project} />;
}
