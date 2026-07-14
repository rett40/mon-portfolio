// Système de Recommandation de Films — page harmonisée (ProjectPage)
import React from "react";
import ProjectPage from "./ProjectPage";

import img1 from "./screenshots/movie1.PNG";
import img2 from "./screenshots/movie2.PNG";
import img3 from "./screenshots/movie3.PNG";

const project = {
  hero: {
    title: {
      fr: "Système de Recommandation de Films",
      en: "Movie Recommender System"
    },
    subtitle: {
      fr: "Recommandations personnalisées par filtrage collaboratif (SVD), pour un utilisateur seul ou en couple.",
      en: "Personalized recommendations through collaborative filtering (SVD), for a single user or a couple."
    },
    pitch: {
      fr: "Application intelligente de recommandation de films développée avec Python et Streamlit : filtrage collaboratif par factorisation SVD, mode couple avec fusion des préférences des deux utilisateurs, filtres avancés (genre, année, note) et affiches récupérées en temps réel via l'API TMDB.",
      en: "Smart movie recommendation app built with Python and Streamlit: collaborative filtering with SVD factorization, a couple mode merging both users' preferences, advanced filters (genre, year, rating) and posters fetched in real time from the TMDB API."
    },
    stack: [
      { name: "Python", icon: "🐍", color: "#3776AB" },
      { name: "Streamlit", icon: "🚀", color: "#FF4B4B" },
      { name: "SVD", icon: "🔍", color: "#8E44AD" },
      { name: "TMDB API", icon: "🎥", color: "#01D277" },
      { name: "Pandas / NumPy", icon: "📊", color: "#5b3cd5" },
      { name: "Filtrage Collaboratif", icon: "👥", color: "#E67E22" }
    ],
    links: [{ kind: "code", url: "https://github.com/rett40/movie_recommender" }]
  },
  sections: [
    {
      type: "features",
      title: { fr: "Fonctionnalités Clés", en: "Key Features" },
      items: [
        {
          icon: "🎯",
          title: { fr: "Recommandations personnalisées", en: "Personalized recommendations" },
          desc: {
            fr: "Filtrage collaboratif SVD entraîné sur l'historique des notes.",
            en: "SVD collaborative filtering trained on rating history."
          }
        },
        {
          icon: "💑",
          title: { fr: "Mode couple", en: "Couple mode" },
          desc: {
            fr: "Fusion des préférences de deux utilisateurs pour des suggestions communes.",
            en: "Merging two users' preferences for shared suggestions."
          }
        },
        {
          icon: "🎛️",
          title: { fr: "Filtres avancés", en: "Advanced filters" },
          desc: {
            fr: "Filtrage par genre, année de sortie et note minimale.",
            en: "Filtering by genre, release year and minimum rating."
          }
        },
        {
          icon: "🖼️",
          title: { fr: "Affiches TMDB", en: "TMDB posters" },
          desc: {
            fr: "Récupération des affiches et métadonnées en temps réel via l'API TMDB.",
            en: "Real-time poster and metadata retrieval through the TMDB API."
          }
        }
      ]
    },
    {
      type: "steps",
      title: { fr: "Démarche du Projet", en: "Project Workflow" },
      steps: [
        {
          title: { fr: "Analyse des données", en: "Data analysis" },
          desc: {
            fr: "Exploration du dataset de films et enrichissement via l'API TMDB.",
            en: "Movie dataset exploration and enrichment through the TMDB API."
          }
        },
        {
          title: { fr: "Algorithme SVD", en: "SVD algorithm" },
          desc: {
            fr: "Implémentation du filtrage collaboratif par factorisation de matrice.",
            en: "Collaborative filtering implementation through matrix factorization."
          }
        },
        {
          title: { fr: "Interface Streamlit", en: "Streamlit interface" },
          desc: {
            fr: "Développement de l'interface utilisateur interactive.",
            en: "Interactive user interface development."
          }
        },
        {
          title: { fr: "Fusion des préférences", en: "Preference merging" },
          desc: {
            fr: "Création du système de recommandation pour couples.",
            en: "Building the couple recommendation system."
          }
        },
        {
          title: { fr: "Optimisation", en: "Optimization" },
          desc: {
            fr: "Filtres avancés et performances temps réel des recommandations.",
            en: "Advanced filters and real-time recommendation performance."
          }
        }
      ]
    },
    {
      type: "gallery",
      title: { fr: "Galerie du Projet", en: "Project Gallery" },
      categories: [
        {
          title: { fr: "Interface de Recommandation", en: "Recommendation Interface" },
          description: {
            fr: "Mode utilisateur unique, filtres du mode couple et résultats de recommandation.",
            en: "Single-user mode, couple mode filters and recommendation results."
          },
          screenshots: [
            { url: img1, alt: { fr: "Mode utilisateur unique", en: "Single user mode" } },
            { url: img2, alt: { fr: "Filtres du mode couple", en: "Couple mode filters" } },
            { url: img3, alt: { fr: "Recommandations de films", en: "Movie recommendations" } }
          ]
        }
      ]
    },
    {
      type: "list",
      title: { fr: "Impact", en: "Impact" },
      items: {
        fr: [
          "Expérience utilisateur personnalisée grâce au filtrage collaboratif",
          "Approche innovante de recommandation partagée pour les couples",
          "Recommandations en temps réel avec métadonnées enrichies (TMDB)"
        ],
        en: [
          "Personalized user experience through collaborative filtering",
          "Innovative shared recommendation approach for couples",
          "Real-time recommendations with enriched metadata (TMDB)"
        ]
      }
    },
    {
      type: "tags",
      title: { fr: "Tags", en: "Tags" },
      tags: {
        fr: ["Machine Learning", "Recommandation", "Streamlit", "API TMDB", "Filtrage Collaboratif", "SVD"],
        en: ["Machine Learning", "Recommendation", "Streamlit", "TMDB API", "Collaborative Filtering", "SVD"]
      }
    }
  ]
};

export default function MovieRecommender({ lang = "fr", theme = "light" }) {
  return <ProjectPage lang={lang} theme={theme} project={project} />;
}
