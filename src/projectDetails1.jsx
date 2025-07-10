import React, { useState } from "react";
import { FaGithub, FaArrowLeft, FaTimes } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

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
  title: {
    fr: "Prédiction du niveau d'obésité",
    en: "Obesity Level Prediction"
  },
  description: {
    fr: (
      <>
        <p>
          Ce projet prédit le niveau d'obésité à partir des habitudes alimentaires et de l'activité physique.
        </p>
        <h3>Objectifs</h3>
        <ul>
          <li>Encodage, standardisation des données</li>
          <li>Modélisation avec KNN, Naive Bayes, Decision Tree</li>
          <li>Comparaison des performances</li>
          <li>Interface Flask pour la prédiction</li>
        </ul>
        <h3>Technologies</h3>
        <div className="tech-tags">
  {[
    { name: "Python", color: "#3776AB", icon: "🐍" },
    { name: "Pandas", color: "#150458", icon: "🦄" },
    { name: "scikit-learn", color: "#F7931E", icon: "📊" },
    { name: "Flask", color: "#000", icon: "🌶️" },
    { name: "Matplotlib", color: "#11557c", icon: "📈" },
    { name: "Seaborn", color: "#43b7ba", icon: "🌊" }
  ].map((tech, idx) => (
    <span
      key={tech.name}
      className="tech-tag"
      style={{
        background: tech.color + "22",
        color: tech.color,
        border: `1px solid ${tech.color}`,
        display: "inline-flex",
        alignItems: "center",
        gap: "0.4em"
      }}
    >
      <span style={{ fontSize: "1.1em" }}>{tech.icon}</span>
      {tech.name}
    </span>
  ))}
  <style jsx>{`
    .tech-tags {
      display: flex;
      flex-wrap: wrap;
      gap: 0.7rem;
      margin-top: 0.7rem;
      margin-bottom: 1.5rem;
    }
    .tech-tag {
      padding: 0.35rem 1rem;
      border-radius: 20px;
      font-size: 0.98rem;
      font-weight: 600;
      background: #e0f7fa;
      transition: background 0.2s, color 0.2s, box-shadow 0.2s;
      box-shadow: 0 2px 8px rgba(0,0,0,0.06);
      cursor: default;
      user-select: none;
    }
    .tech-tag:hover {
      background: #fff;
      box-shadow: 0 4px 16px rgba(0,0,0,0.10);
    }
    .dark .tech-tag {
      background: #23272f;
      color: #7fd8e7 !important;
      border: 1px solid #263445;
    }
    .dark .tech-tag:hover {
      background: #263445;
      }
  `}</style>
</div>
      </>
    ),
    en: (
      <>
        <p>
          This project predicts obesity level from eating habits and physical activity.
        </p>
        <h3>Objectives</h3>
        <ul>
          <li>Data encoding and standardization</li>
          <li>Modeling with KNN, Naive Bayes, Decision Tree</li>
          <li>Performance comparison</li>
          <li>Flask interface for prediction</li>
        </ul>
                <div className="tech-tags">
  {[
    { name: "Python", color: "#3776AB", icon: "🐍" },
    { name: "Pandas", color: "#150458", icon: "🦄" },
    { name: "scikit-learn", color: "#F7931E", icon: "📊" },
    { name: "Flask", color: "#000", icon: "🌶️" },
    { name: "Matplotlib", color: "#11557c", icon: "📈" },
    { name: "Seaborn", color: "#43b7ba", icon: "🌊" }
  ].map((tech, idx) => (
    <span
      key={tech.name}
      className="tech-tag"
      style={{
        background: tech.color + "22",
        color: tech.color,
        border: `1px solid ${tech.color}`,
        display: "inline-flex",
        alignItems: "center",
        gap: "0.4em"
      }}
    >
      <span style={{ fontSize: "1.1em" }}>{tech.icon}</span>
      {tech.name}
    </span>
  ))}
  <style jsx>{`
    .tech-tags {
      display: flex;
      flex-wrap: wrap;
      gap: 0.7rem;
      margin-top: 0.7rem;
      margin-bottom: 1.5rem;
    }
    .tech-tag {
      padding: 0.35rem 1rem;
      border-radius: 20px;
      font-size: 0.98rem;
      font-weight: 600;
      background: #e0f7fa;
      transition: background 0.2s, color 0.2s, box-shadow 0.2s;
      box-shadow: 0 2px 8px rgba(0,0,0,0.06);
      cursor: default;
      user-select: none;
    }
    .tech-tag:hover {
      background: #fff;
      box-shadow: 0 4px 16px rgba(0,0,0,0.10);
    }
    .dark .tech-tag {
      background: #23272f;
      color: #7fd8e7 !important;
      border: 1px solid #263445;
    }
    .dark .tech-tag:hover {
      background: #263445;
      }
  `}</style>
</div>
      </>
    )
  },
  github: "https://github.com/tonrepo/obesity-prediction",
  visualizations: [
    {
      title: { fr: "Matrices de confusion", en: "Confusion Matrices" },
      images: [
        { url: knnImg, alt: { fr: "KNN", en: "KNN" } },
        { url: nbImg, alt: { fr: "Naive Bayes", en: "Naive Bayes" } },
        { url: dtImg, alt: { fr: "Decision Tree", en: "Decision Tree" } }
      ]
    },
    {
      title: { fr: "Comparaison des métriques", en: "Metrics Comparison" },
      images: [
        { url: barplotImg, alt: { fr: "Barplot", en: "Barplot" } },
        { url: accuracyImg, alt: { fr: "Précision", en: "Accuracy" } }
      ]
    },
    {
      title: { fr: "Carte thermique", en: "Heatmap" },
      images: [
        { url: heatmapImg, alt: { fr: "Carte thermique", en: "Heatmap" } }
      ]
    },
    {
      title: { fr: "Radar des performances", en: "Performance Radar" },
      images: [
        { url: radarImg, alt: { fr: "Radar", en: "Radar" } }
      ]
    }
  ],
  interface: [
    {
      title: { fr: "Formulaire", en: "Form" },
      url: formImg,
      alt: { fr: "Formulaire", en: "Form" }
    },
    {
      title: { fr: "Résultat", en: "Result" },
      url: resultImg,
      alt: { fr: "Résultat", en: "Result" }
    }
  ]
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
  visualizations: {
    fr: "Visualisations",
    en: "Visualizations"
  },
  interface: {
    fr: "Interface Web",
    en: "Web Interface"
  }
};

export default function ObesityProject({ lang = "fr", theme = "light" }) {
  const navigate = useNavigate();
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <div className={`project-detail-container ${theme}`}>
      <button className="back-button" onClick={() => navigate(-1)}>
        <FaArrowLeft /> {ui.back[lang]}
      </button>
      <header className="project-header">
        <h1>{project.title[lang]}</h1>
      </header>
      <section className="project-content">
        <div className="project-description">{project.description[lang]}</div>
        <div className="project-links">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="project-link"
          >
            <FaGithub /> {ui.code[lang]}
          </a>
        </div>
        <section className="screenshots-section">
          <h2>{ui.visualizations[lang]}</h2>
          {project.visualizations.map((viz, idx) => (
            <div key={idx} className="viz-block">
              <h3 className="viz-title">{viz.title[lang]}</h3>
              <div className="viz-images">
                {viz.images.map((img, i) => (
                  <img
                    key={i}
                    src={img.url}
                    alt={img.alt[lang]}
                    className="viz-image"
                    onClick={() => setSelectedImage(img)}
                  />
                ))}
              </div>
            </div>
          ))}
        </section>
        <section className="screenshots-section">
          <h2>{ui.interface[lang]}</h2>
          <div className="interface-grid">
            {project.interface.map((item, i) => (
              <div key={i} className="interface-block">
                <h3 className="interface-title">{item.title[lang]}</h3>
                <img
                  src={item.url}
                  alt={item.alt[lang]}
                  className="interface-image"
                  onClick={() => setSelectedImage(item)}
                />
              </div>
            ))}
          </div>
        </section>
      </section>
      {selectedImage && (
        <div className="lightbox" onClick={() => setSelectedImage(null)}>
          <div className="lightbox-content" onClick={e => e.stopPropagation()}>
            <button className="close-button" onClick={() => setSelectedImage(null)}>
              <FaTimes />
            </button>
            <img
              src={selectedImage.url || selectedImage.img}
              alt={selectedImage.alt ? selectedImage.alt[lang] : ""}
              className="lightbox-image"
            />
            <p className="lightbox-caption">
              {selectedImage.alt ? selectedImage.alt[lang] : ""}
            </p>
          </div>
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
          color: #f7f9fa;
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
        .project-description {
          line-height: 1.7;
          margin-bottom: 2rem;
          font-size: 1.1rem;
          color: #333;
        }
        .dark .project-description {
          color: #e0e6ed;
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
        .screenshots-section {
          margin-top: 4rem;
        }
        .screenshots-section h2 {
          font-size: 2rem;
          color: #2c3e50;
          margin-bottom: 2rem;
          font-weight: 600;
          position: relative;
          padding-bottom: 0.5rem;
        }
        .dark .screenshots-section h2 {
          color: #e0e6ed;
        }
        .viz-block {
          margin-bottom: 2.5rem;
        }
        .viz-title {
          font-size: 1.3rem;
          font-weight: 600;
          margin-bottom: 1rem;
          color: #3498db;
        }
        .viz-images {
          display: flex;
          flex-wrap: wrap;
          gap: 1.5rem;
          margin-bottom: 1rem;
        }
        .viz-image {
          max-width: 480px;
          width: 100%;
          border-radius: 10px;
          box-shadow: 0 4px 12px rgba(0,0,0,0.08);
          cursor: pointer;
          transition: transform 0.2s;
        }
        .viz-image:hover {
          transform: scale(1.05);
        }
        .interface-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
          gap: 2rem;
          margin-top: 2rem;
        }
        .interface-block {
          text-align: center;
        }
        .interface-title {
          font-size: 1.1rem;
          font-weight: 500;
          margin-bottom: 1rem;
          color: #2c3e50;
        }
        .dark .interface-title {
          color: #e0e6ed;
        }
        .interface-image {
          max-width: 100%;
          border-radius: 10px;
          box-shadow: 0 4px 12px rgba(0,0,0,0.08);
          cursor: pointer;
          transition: transform 0.2s;
        }
        .interface-image:hover {
          transform: scale(1.05);
        }
        .lightbox {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(0, 0, 0, 0.9);
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
          box-shadow: 0 0 20px rgba(0, 0, 0, 0.6);
        }
        .lightbox-caption {
          color: white;
          margin-top: 1rem;
          font-size: 1.2rem;
          text-align: center;
          max-width: 800px;
        }
        .close-button {
          position: absolute;
          top: -40px;
          right: 0;
          background: transparent;
          border: none;
          color: white;
          font-size: 1.8rem;
          cursor: pointer;
          transition: transform 0.2s;
        }
        .close-button:hover {
          transform: rotate(90deg);
        }
        @media (max-width: 768px) {
          .project-detail-container {
            padding: 1.5rem;
          }
          .project-header h1 {
            font-size: 2rem;
          }
          .viz-images {
            flex-direction: column;
            gap: 1rem;
          }
          .interface-grid {
            grid-template-columns: 1fr;
          }
          .lightbox-content {
            max-width: 95%;
          }
          .lightbox-caption {
            font-size: 1rem;
          }
        }
      `}</style>
      </div>
  );
}