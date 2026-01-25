import React, { useState } from "react";
import { FaArrowLeft, FaGithub, FaImages, FaProjectDiagram, FaChartLine, FaTools, FaTimes, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

import imgModelisation from './screenshots/modelisation1.PNG';
import imgETL1 from './screenshots/last_login2.PNG';
import imgETL2 from './screenshots/fact1.PNG';
import imgDashboardUser from './screenshots/dashboard11.PNG';
import imgDashboardLicence from './screenshots/dashboard2.PNG';
import imgDashboardExterne from './screenshots/dashboard3.PNG';
import imgPowerAppsHome from './screenshots/page-acueil.PNG';
import imgLogin from './screenshots/login_page.PNG';
import imgPowerAppsDash from './screenshots/dashboardpowerapps.PNG';

const project = {
  title: {
    fr: "Projet BI – Optimisation des licences Jira (VERMEG)",
    en: "BI Project – Jira License Optimization (VERMEG)"
  },
  description: {
    fr: (
      <>
        <p>
          Solution complète de Business Intelligence pour le suivi et l'optimisation des licences utilisateurs dans Jira Software.
        </p>
        <h3>Objectif du projet</h3>
        <ul>
          <li>Surveiller, optimiser et sécuriser l'usage des licences utilisateurs dans Jira Software.</li>
          <li>Collecte via API, traitement ETL, modélisation et visualisation dans des dashboards interactifs.</li>
        </ul>
        <h3>Technologies utilisées</h3>
        <div className="tech-tags">
          {[
            { name: "Power BI", color: "#F2C811", icon: "📊" },
            { name: "Talend", color: "#FF6F00", icon: "🛠️" },
            { name: "MySQL", color: "#CC2927", icon: "🗄️" },
            { name: "Power Apps", color: "#742774", icon: "🧩" },
            { name: "Jira SoftWare", color: "#0052CC", icon: "🔗" },
            { name: "Modélisation DW", color: "#2E86C1", icon: "🏗️" }
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
        </div>
      </>
    ),
    en: (
      <>
        <p>
          Complete Business Intelligence solution for monitoring and optimizing user licenses in Jira Software.
        </p>
        <h3>Project Objective</h3>
        <ul>
          <li>Monitor, optimize, and secure user license usage in Jira Software.</li>
          <li>Data collection via API, ETL processing, modeling, and interactive dashboard visualization.</li>
        </ul>
        <h3>Technologies</h3>
        <div className="tech-tags">
          {[
            { name: "Power BI", color: "#F2C811", icon: "📊" },
            { name: "Talend", color: "#FF6F00", icon: "🛠️" },
            { name: "SQL Server", color: "#CC2927", icon: "🗄️" },
            { name: "Power Apps", color: "#742774", icon: "🧩" },
            { name: "Jira API", color: "#0052CC", icon: "🔗" },
            { name: "DW Modeling", color: "#2E86C1", icon: "🏗️" }
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
        </div>
      </>
    )
  },
  github: "https://github.com/tonrepo/bi-vermeg",
  screenshots: [
    { url: imgModelisation, alt: { fr: "Modélisation des données", en: "Data Modeling" } },
    { url: imgETL1, alt: { fr: "ETL - Transformation (last_login)", en: "ETL - Transformation (last_login)" } },
    { url: imgETL2, alt: { fr: "ETL - Table de faits", en: "ETL - Fact Table" } },
    { url: imgDashboardUser, alt: { fr: "Tableau de bord - Utilisateurs", en: "Dashboard - Users" } },
    { url: imgDashboardLicence, alt: { fr: "Tableau de bord - Licences", en: "Dashboard - Licenses" } },
    { url: imgDashboardExterne, alt: { fr: "Tableau de bord - Interne / Externe", en: "Dashboard - Internal / External" } },
    { url: imgPowerAppsHome, alt: { fr: "Power Apps - Page d'accueil", en: "Power Apps - Home Page" } },
    { url: imgLogin, alt: { fr: "Page de connexion", en: "Login Page" } },
    { url: imgPowerAppsDash, alt: { fr: "Dashboard dans Power Apps", en: "Dashboard in Power Apps" } },
  ],
  process: {
    fr: [
      "Analyse des données disponibles sur Jira",
      "Collecte via API REST et stockage dans SQL Server",
      "Modélisation dimensionnelle (faits/dimensions)",
      "Traitements ETL avec Talend",
      "Construction des dashboards Power BI",
      "Création d'une interface sécurisée Power Apps"
    ],
    en: [
      "Analysis of available Jira data",
      "Dimensional modeling (facts/dimensions)",
      "ETL processing with Talend",
      "Building Power BI dashboards",
      "Creating a secure Power Apps interface"
    ]
  },
  impact: {
    fr: "Ce projet a permis à VERMEG de réduire de 30% les coûts de licences inutilisées et d'améliorer la gouvernance des accès.",
    en: "This project enabled VERMEG to reduce unused license costs by 30% and improve access governance."
  },
  tags: {
    fr: [
      "Business Intelligence",
      "Optimisation coûts",
      "Data Warehouse",
      "Power Platform"
    ],
    en: [
      "Business Intelligence",
      "Cost Optimization",
      "Data Warehouse",
      "Power Platform"
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
  }
};

export default function BIVermeg({ lang, theme }) {
  const navigate = useNavigate();
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const openImage = (img) => {
    const index = project.screenshots.findIndex(s => s.url === img.url);
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
      setSelectedImage(project.screenshots[newIndex]);
      setCurrentIndex(newIndex);
    }
  };

  const showNext = (e) => {
    e.stopPropagation();
    if (currentIndex < project.screenshots.length - 1) {
      const newIndex = currentIndex + 1;
      setSelectedImage(project.screenshots[newIndex]);
      setCurrentIndex(newIndex);
    }
  };

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
        <section className="screenshots-section">
          <h2>
            <FaImages className="mr-2" />
            {ui.gallery[lang]}
          </h2>
          <div className="screenshots-grid">
            {project.screenshots.map((img, i) => (
              <div
                key={i}
                className="screenshot-item"
                onClick={() => openImage(img)}
              >
                <img
                  src={img.url}
                  alt={img.alt[lang]}
                  className="screenshot-image"
                />
                <p className="screenshot-caption">{img.alt[lang]}</p>
              </div>
            ))}
          </div>
        </section>
        <section className="screenshots-section">
          <h2>
            <FaProjectDiagram className="mr-2" />
            {ui.process[lang]}
          </h2>
          <ul>
            {project.process[lang].map((step, idx) => (
              <li key={idx}>{step}</li>
            ))}
          </ul>
        </section>
        <section className="screenshots-section">
          <h2>
            <FaChartLine className="mr-2" />
            {ui.impact[lang]}
          </h2>
          <div className="impact-block">
            <p>{project.impact[lang]}</p>
          </div>
        </section>
        <section className="screenshots-section">
          <h2>
            <FaTools className="mr-2" />
            {ui.tags[lang]}
          </h2>
          <div className="tags-block">
            {project.tags[lang].map((tag, idx) => (
              <span key={idx} className="tag">{tag}</span>
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
            <button className="close-button" onClick={closeImage} aria-label="Close">
              <FaTimes />
            </button>
            <img
              src={selectedImage.url}
              alt={selectedImage.alt[lang]}
              className="lightbox-image"
            />
            <p className="lightbox-caption">{selectedImage.alt[lang]}</p>
          </div>
          <button
            className="nav-button next"
            onClick={showNext}
            aria-label="Next image"
            style={{ display: currentIndex < project.screenshots.length - 1 ? "flex" : "none" }}
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
          display: flex;
          align-items: center;
          gap: 0.7rem;
        }
        .dark .screenshots-section h2 {
          color: #e0e6ed;
        }
        .screenshots-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
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
          color: #f7f9fa;
        }
        .screenshot-item:hover {
          transform: translateY(-5px);
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.15);
        }
        .screenshot-image {
          max-width: 480px;
          width: 100%;
          border-radius: 10px;
          box-shadow: 0 4px 12px rgba(0,0,0,0.08);
          cursor: pointer;
          transition: transform 0.2s;
        }
        .screenshot-image:hover {
          transform: scale(1.05);
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
        .impact-block {
          background: #e0f7fa;
          color: #00838f;
          padding: 1.2rem 2rem;
          border-radius: 12px;
          font-size: 1.1rem;
          font-weight: 500;
          margin-bottom: 2rem;
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
          box-shadow: 0 1px 3px rgba(0,0,0,0.1);
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
          transition: opacity 0.3s ease;
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
          position: absolute;
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
        .nav-button:hover {
          background: rgba(52, 152, 219, 0.6);
          transform: translateY(-50%) scale(1.1);
          opacity: 1;
          box-shadow: 0 6px 20px rgba(0, 0, 0, 0.4);
        }
        .nav-button.prev {
          left: 30px;
        }
        .nav-button.next {
          right: 30px;
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
          .project-links {
            flex-direction: column;
            gap: 1rem;
          }
          .project-link {
            justify-content: center;
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
      }
          `}</style>
    </div>
  );
}