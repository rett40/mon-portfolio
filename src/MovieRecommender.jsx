import React, { useState } from "react";
import { 
  FaArrowLeft, 
  FaGithub, 
  FaImages, 
  FaProjectDiagram, 
  FaChartLine, 
  FaTools,
  FaTimes,
  FaChevronLeft,
  FaChevronRight
} from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import img1 from "./screenshots/movie1.PNG";
import img2 from "./screenshots/movie2.PNG";
import img3 from "./screenshots/movie3.PNG";

const project = {
  id: "movie-recommender",
  title: {
    fr: "🎬 Système de Recommandation de Films",
    en: "🎬 Movie Recommender System"
  },
  description: {
    fr: (
      <>
        <p>
          Une application intelligente de recommandation de films pour les individus et les couples.
          Développée avec <strong>Python</strong> et <strong>Streamlit</strong>, ce projet utilise
          le filtrage collaboratif (SVD) et l'API TMDB pour fournir des recommandations personnalisées.
        </p>
        <h3>Objectifs du projet</h3>
        <ul>
          <li>Fournir des recommandations personnalisées pour les utilisateurs individuels</li>
          <li>Créer un système de recommandation pour couples avec fusion des préférences</li>
          <li>Intégrer des filtres avancés (genre, année, notation)</li>
        </ul>
      </>
    ),
    en: (
      <>
        <p>
          A smart movie recommendation application for both individuals and couples.
          Built with <strong>Python</strong> and <strong>Streamlit</strong>, this project uses
          collaborative filtering (SVD) and the TMDB API to provide personalized recommendations.
        </p>
        <h3>Project Goals</h3>
        <ul>
          <li>Provide personalized recommendations for individual users</li>
          <li>Create a couple recommendation system with preference merging</li>
          <li>Implement advanced filters (genre, year, rating)</li>
        </ul>
      </>
    )
  },
  technologies: {
    fr: [
      { name: "Python", color: "#3776AB", icon: "🐍" },
      { name: "Streamlit", color: "#FF4B4B", icon: "🚀" },
      { name: "SVD Algorithm", color: "#8E44AD", icon: "🔍" },
      { name: "TMDB API", color: "#01D277", icon: "🎥" },
      { name: "Pandas/Numpy", color: "#5b3cd5ff", icon: "📊" },
      { name: "Collaborative Filtering", color: "#E67E22", icon: "👥" }
    ],
    en: [
      { name: "Python", color: "#3776AB", icon: "🐍" },
      { name: "Streamlit", color: "#FF4B4B", icon: "🚀" },
      { name: "SVD Algorithm", color: "#8E44AD", icon: "🔍" },
      { name: "TMDB API", color: "#01D277", icon: "🎥" },
      { name: "Pandas/Numpy", color: "#5b3cd5ff", icon: "📊" },
      { name: "Collaborative Filtering", color: "#E67E22", icon: "👥" }
    ]
  },
  github: "https://github.com/rett40/movie_recommender",
  screenshots: [
    { url: img1, alt: { fr: "Mode Utilisateur Unique", en: "Single User Mode" } },
    { url: img2, alt: { fr: "Filtres Mode Couple", en: "Couple Mode Filters" } },
    { url: img3, alt: { fr: "Recommandations de Films", en: "Movie Recommendations" } }
  ],
  process: {
    fr: [
      "Analyse des données de films via l'API TMDB",
      "Implémentation de l'algorithme SVD pour le filtrage collaboratif",
      "Développement de l'interface utilisateur avec Streamlit",
      "Création du système de fusion des préférences pour les couples",
      "Intégration des filtres avancés (genre, année, notation)",
      "Optimisation des performances pour des recommandations en temps réel"
    ],
    en: [
      "Analysis of movie data via TMDB API",
      "Implementation of SVD algorithm for collaborative filtering",
      "User interface development with Streamlit",
      "Creation of preference merging system for couples",
      "Integration of advanced filters (genre, year, rating)",
      "Performance optimization for real-time recommendations"
    ]
  },
  impact: {
    fr: "Ce projet démontre comment les algorithmes de recommandation peuvent être appliqués pour créer des expériences utilisateur personnalisées, avec une approche innovante pour les couples.",
    en: "This project demonstrates how recommendation algorithms can be applied to create personalized user experiences, with an innovative approach for couples."
  },
  tags: {
    fr: [
      "Machine Learning",
      "Recommandation",
      "Streamlit",
      "API TMDB",
      "Filtrage Collaboratif"
    ],
    en: [
      "Machine Learning",
      "Recommendation",
      "Streamlit",
      "TMDB API",
      "Collaborative Filtering"
    ]
  }
};

const ui = {
  back: {
    fr: "Retour aux projets",
    en: "Back to projects"
  },
  code: {
    fr: "Code source",
    en: "Source code"
  },
  gallery: {
    fr: "Galerie du projet",
    en: "Project Gallery"
  },
  process: {
    fr: "Processus du projet",
    en: "Project Process"
  },
  impact: {
    fr: "Impact",
    en: "Impact"
  },
  tags: {
    fr: "Tags",
    en: "Tags"
  },
  technologies: {
    fr: "Technologies",
    en: "Technologies"
  }
};

export default function MovieRecommender({ lang = "fr", theme = "light" }) {
  const navigate = useNavigate();
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const currentLang = ['fr', 'en'].includes(lang) ? lang : 'fr';
  const screenshots = project.screenshots || [];
  const processSteps = project.process?.[currentLang] || [];
  const tags = project.tags?.[currentLang] || [];
  const technologies = project.technologies?.[currentLang] || [];

  const openImage = (img) => {
    const index = screenshots.findIndex(s => s.url === img.url);
    setSelectedImage(img);
    setCurrentIndex(index);
    document.body.style.overflow = 'hidden';
  };

  const closeImage = () => {
    setSelectedImage(null);
    document.body.style.overflow = 'auto';
  };

  const showPrev = (e) => {
    e.stopPropagation();
    if (currentIndex > 0) {
      const newIndex = currentIndex - 1;
      setSelectedImage(screenshots[newIndex]);
      setCurrentIndex(newIndex);
    }
  };

  const showNext = (e) => {
    e.stopPropagation();
    if (currentIndex < screenshots.length - 1) {
      const newIndex = currentIndex + 1;
      setSelectedImage(screenshots[newIndex]);
      setCurrentIndex(newIndex);
    }
  };

  return (
    <div className={`project-detail-container ${theme}`}>
      <button className="back-button" onClick={() => navigate(-1)}>
        <FaArrowLeft /> {ui.back[currentLang]}
      </button>
      <header className="project-header">
        <h1>{project.title[currentLang]}</h1>
      </header>
      <section className="project-content">
        <div className="project-description">
          {project.description[currentLang]}
          <h3>{ui.technologies[currentLang]}</h3>
          <div className="tech-tags">
            {technologies.map((tech, idx) => (
              <span
                key={`${tech.name}-${idx}`}
                className="tech-tag"
                style={{
                  background: `${tech.color}22`,
                  color: tech.color,
                  border: `1px solid ${tech.color}`
                }}
              >
                <span className="tech-icon">{tech.icon}</span>
                {tech.name}
              </span>
            ))}
          </div>
        </div>
        <div className="project-links">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="project-link"
          >
            <FaGithub /> {ui.code[currentLang]}
          </a>
        </div>
        <section className="project-section">
          <h2>
            <FaImages className="section-icon" />
            {ui.gallery[currentLang]}
          </h2>
          <div className="screenshots-grid">
            {screenshots.map((img, i) => (
              <div
                key={`screenshot-${i}`}
                className="screenshot-item"
                onClick={() => openImage(img)}
              >
                <img
                  src={img.url}
                  alt={img.alt[currentLang]}
                  className="screenshot-image"
                />
                <p className="screenshot-caption">{img.alt[currentLang]}</p>
              </div>
            ))}
          </div>
        </section>
        <section className="project-section">
          <h2>
            <FaProjectDiagram className="section-icon" />
            {ui.process[currentLang]}
          </h2>
          <ul className="process-list">
            {processSteps.map((step, idx) => (
              <li key={`step-${idx}`} className="process-item">
                {step}
              </li>
            ))}
          </ul>
        </section>
        <section className="project-section">
          <h2>
            <FaChartLine className="section-icon" />
            {ui.impact[currentLang]}
          </h2>
          <div className="impact-block">
            <p>{project.impact[currentLang]}</p>
          </div>
        </section>
        <section className="project-section">
          <h2>
            <FaTools className="section-icon" />
            {ui.tags[currentLang]}
          </h2>
          <div className="tags-block">
            {tags.map((tag, idx) => (
              <span key={`tag-${idx}`} className="tag">
                {tag}
              </span>
            ))}
          </div>
        </section>
      </section>
      {selectedImage && (
        <div className="lightbox" onClick={closeImage}>
          <button
            className="nav-button prev"
            onClick={showPrev}
            aria-label="Previous image"
            style={{ display: currentIndex > 0 ? "flex" : "none" }}
          >
            <FaChevronLeft />
          </button>
          <div className="lightbox-content" onClick={e => e.stopPropagation()}>
            <button 
              className="close-button" 
              onClick={closeImage}
              aria-label="Close"
            >
              <FaTimes />
            </button>
            <img
              src={selectedImage.url}
              alt={selectedImage.alt[currentLang]}
              className="lightbox-image"
            />
            <p className="lightbox-caption">{selectedImage.alt[currentLang]}</p>
          </div>
          <button
            className="nav-button next"
            onClick={showNext}
            aria-label="Next image"
            style={{ display: currentIndex < screenshots.length - 1 ? "flex" : "none" }}
          >
            <FaChevronRight />
          </button>
        </div>
      )}
      <style jsx>{`
        .project-detail-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 2rem;
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
          color: #333;
          background: #f7f9fa;
          transition: background 0.3s, color 0.3s;
        }
        .dark.project-detail-container {
          background: #181c22;
          color: #e0e6ed;
        }
        .back-button {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          background: #2c3e50;
          color: white;
          border: none;
          padding: 0.7rem 1.2rem;
          border-radius: 6px;
          cursor: pointer;
          margin-bottom: 2rem;
          transition: all 0.2s;
          font-weight: 500;
          box-shadow: 0 2px 4px rgba(0,0,0,0.1);
        }
        .back-button:hover {
          background: #1a252f;
          transform: translateY(-2px);
          box-shadow: 0 4px 8px rgba(0,0,0,0.15);
        }
        .project-header h1 {
          font-size: 2.5rem;
          color: #2c3e50;
          margin-bottom: 2rem;
          font-weight: 700;
          position: relative;
          padding-bottom: 0.5rem;
        }
        .dark .project-header h1 {
          color: #e0e6ed;
        }
        .project-content {
          line-height: 1.7;
        }
        .project-description {
          margin-bottom: 2rem;
          font-size: 1.1rem;
          color: #333;
        }
        .dark .project-description {
          color: #e0e6ed;
        }
        .project-description h3 {
          font-size: 1.5rem;
          margin: 1.5rem 0 1rem;
          color: #2c3e50;
        }
        .dark .project-description h3 {
          color: #e0e6ed;
        }
        .tech-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 0.7rem;
          margin: 1rem 0 2rem;
        }
        .tech-tag {
          padding: 0.35rem 1rem;
          border-radius: 20px;
          font-size: 0.98rem;
          font-weight: 600;
          transition: all 0.2s;
          box-shadow: 0 2px 8px rgba(0,0,0,0.06);
          display: inline-flex;
          align-items: center;
          gap: 0.4em;
        }
        .tech-icon {
          font-size: 1.1em;
        }
        .project-links {
          display: flex;
          gap: 1.5rem;
          margin: 3rem 0;
        }
        .project-link {
          display: inline-flex;
          align-items: center;
          gap: 0.7rem;
          background: linear-gradient(135deg, #3498db, #2ecc71);
          color: white;
          padding: 0.8rem 1.5rem;
          border-radius: 6px;
          text-decoration: none;
          transition: all 0.3s;
          font-weight: 500;
          box-shadow: 0 2px 5px rgba(0,0,0,0.1);
        }
        .dark .project-link {
          background: linear-gradient(135deg, #263445, #2ecc71);
          color: #f7f9fa;
        }
        .project-link:hover {
          transform: translateY(-3px);
          box-shadow: 0 5px 15px rgba(0,0,0,0.2);
          background: linear-gradient(135deg, #2980b9, #27ae60);
        }
        .dark .project-link:hover {
          background: linear-gradient(135deg, #1a252f, #27ae60);
        }
        .project-section {
          margin-top: 4rem;
        }
        .project-section h2 {
          font-size: 1.8rem;
          color: #2c3e50;
          margin-bottom: 1.5rem;
          font-weight: 600;
          display: flex;
          align-items: center;
          gap: 0.7rem;
        }
        .dark .project-section h2 {
          color: #e0e6ed;
        }
        .section-icon {
          font-size: 1.2em;
        }
        .screenshots-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 2rem;
        }
        .screenshot-item {
          background: white;
          border-radius: 10px;
          overflow: hidden;
          box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
          transition: all 0.3s ease;
          cursor: pointer;
        }
        .dark .screenshot-item {
          background: #23272f;
        }
        .screenshot-item:hover {
          transform: translateY(-5px);
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.15);
        }
        .screenshot-image {
          width: 100%;
          height: auto;
          display: block;
          border-radius: 10px 10px 0 0;
        }
        .screenshot-caption {
          padding: 1.2rem;
          margin: 0;
          font-size: 0.95rem;
          color: #555;
          text-align: center;
          background: #f9f9f9;
        }
        .dark .screenshot-caption {
          background: #23272f;
          color: #e0e6ed;
        }
        .process-list {
          list-style-type: none;
          padding: 0;
          margin: 0;
        }
        .process-item {
          padding: 0.8rem 0;
          position: relative;
          padding-left: 1.8rem;
          line-height: 1.6;
        }
        .process-item:before {
          content: "•";
          color: #3498db;
          font-size: 1.5rem;
          position: absolute;
          left: 0;
          top: 0.2rem;
        }
        .dark .process-item:before {
          color: #7fd8e7;
        }
        .impact-block {
          background: #e0f7fa;
          color: #00838f;
          padding: 1.5rem;
          border-radius: 12px;
          font-size: 1.1rem;
          line-height: 1.6;
        }
        .dark .impact-block {
          background: #23272f;
          color: #7fd8e7;
        }
        .tags-block {
          display: flex;
          flex-wrap: wrap;
          gap: 0.7rem;
        }
        .tag {
          background: #e0f7fa;
          color: #00838f;
          padding: 0.4rem 1rem;
          border-radius: 20px;
          font-size: 0.9rem;
          font-weight: 600;
        }
        .dark .tag {
          background: #263445;
          color: #7fd8e7;
        }

        /* Lightbox styles */
        .lightbox {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(0, 0, 0, 0.95);
          display: flex;
          justify-content: center;
          align-items: center;
          z-index: 1000;
          padding: 2rem;
          box-sizing: border-box;
        }
        .lightbox-content {
          position: relative;
          max-width: 90%;
          max-height: 90%;
          display: flex;
          flex-direction: column;
          align-items: center;
        }
        .lightbox-image {
          max-width: 100%;
          max-height: 80vh;
          object-fit: contain;
          border-radius: 8px;
          box-shadow: 0 0 30px rgba(0, 0, 0, 0.8);
        }
        .lightbox-caption {
          color: white;
          margin-top: 1rem;
          font-size: 1.2rem;
          text-align: center;
          max-width: 800px;
          padding: 0.5rem 1rem;
          background: rgba(0, 0, 0, 0.7);
          border-radius: 4px;
        }
        .close-button {
          position: absolute;
          top: -50px;
          right: -10px;
          background: rgba(0, 0, 0, 0.5);
          border: none;
          color: white;
          font-size: 1.5rem;
          width: 40px;
          height: 40px;
          border-radius: 50%;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.3s ease;
          opacity: 0.8;
        }
        .close-button:hover {
          opacity: 1;
          background: rgba(255, 0, 0, 0.7);
          transform: scale(1.1);
        }
        .nav-button {
          position: fixed;
          top: 50%;
          transform: translateY(-50%);
          background: rgba(255, 255, 255, 0.1);
          border: none;
          color: white;
          font-size: 1.8rem;
          width: 60px;
          height: 60px;
          border-radius: 50%;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.3s ease;
          backdrop-filter: blur(10px);
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.3);
          opacity: 0.9;
          z-index: 10;
        }
        .nav-button.prev {
          left: 30px;
        }
        .nav-button.next {
          right: 30px;
        }
        .nav-button:hover {
          background: rgba(52, 152, 219, 0.6);
          transform: translateY(-50%) scale(1.1);
          opacity: 1;
          box-shadow: 0 6px 20px rgba(0, 0, 0, 0.4);
        }
        .nav-button:focus {
          outline: 2px solid rgba(52, 152, 219, 0.8);
          outline-offset: 2px;
        }

        @media (max-width: 768px) {
          .project-detail-container {
            padding: 1.5rem;
          }
          .project-header h1 {
            font-size: 2rem;
          }
          .screenshots-grid {
            grid-template-columns: 1fr;
          }
          .nav-button {
            width: 50px;
            height: 50px;
            font-size: 1.5rem;
          }
          .nav-button.prev {
            left: 15px;
          }
          .nav-button.next {
            right: 15px;
          }
          .lightbox-content {
            max-width: 95%;
          }
          .lightbox-caption {
            font-size: 1rem;
          }
        }

        @media (max-width: 480px) {
          .project-header h1 {
            font-size: 1.8rem;
          }
          .project-section h2 {
            font-size: 1.5rem;
          }
          .tech-tags {
            gap: 0.5rem;
          }
          .tech-tag {
            font-size: 0.85rem;
            padding: 0.3rem 0.8rem;
          }
          .nav-button {
            width: 40px;
            height: 40px;
            font-size: 1.2rem;
          }
          .nav-button.prev {
            left: 10px;
          }
          .nav-button.next {
            right: 10px;
          }
        `}</style>
    </div>
  );
}