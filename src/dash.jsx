import React, { useState } from "react";
import { FaArrowLeft, FaArrowRight, FaTimes, FaGithub, FaImages, FaProjectDiagram, FaChartLine, FaTools, FaLightbulb } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

import dashKpi1 from './screenshots/dash1.PNG';
import dashKpi2 from './screenshots/dash2.PNG';
import topCustomers from './screenshots/dash3.PNG';
import topProducts from './screenshots/dash4.PNG';
import lossProducts from './screenshots/dash5.PNG';
import categoryDistribution from './screenshots/dash6.PNG';
import categoryComparison from './screenshots/dash7.PNG';
import monthlyTrends from './screenshots/dash8.PNG';
import dashboard1 from './screenshots/Powerbi1.PNG';
import dashboard2 from './screenshots/powerbi2.PNG';

const project = {
  title: {
    fr: "Dashboard Superstore – Analyse Commerciale",
    en: "Superstore Dashboard – Business Analytics"
  },
  description: {
    fr: (
      <>
        <p>
          Ce projet consiste en la création d'un dashboard complet pour analyser les performances 
          d'une entreprise de vente au détail (dataset Superstore). L'objectif était de fournir 
          une vision claire des indicateurs clés à travers deux approches : un dashboard interactif 
          codé en Python et une version Power BI pour comparaison.
        </p>
        <h3>Fonctionnalités principales</h3>
        <ul>
          <li>KPIs dynamiques (CA, marge, commandes, clients...)</li>
          <li>Analyse produits (top produits, rentabilité, catégories)</li>
          <li>Analyse clients (top clients, segmentation, régions)</li>
          <li>Tendances temporelles (saisonnalité, YOY, prévisions)</li>
        </ul>
        <h3>Technologies utilisées</h3>
        <div className="tech-tags">
          {[
            { name: "Python", color: "#3776AB", icon: "🐍" },
            { name: "Dash", color: "#119DFF", icon: "📊" },
            { name: "Plotly", color: "#FF4B4B", icon: "📈" },
            { name: "Pandas", color: "#4a31adff", icon: "🧮" },
            { name: "Power BI", color: "#F2C811", icon: "🟡" }
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
          This project involves building a comprehensive dashboard to analyze the performance of a retail business (Superstore dataset). The goal was to provide clear insights into key metrics through two approaches: an interactive Python-coded dashboard and a Power BI version for comparison.
        </p>
        <h3>Main Features</h3>
        <ul>
          <li>Dynamic KPIs (revenue, margin, orders, customers...)</li>
          <li>Product analysis (top products, profitability, categories)</li>
          <li>Customer analysis (top customers, segmentation, regions)</li>
          <li>Time trends (seasonality, YOY, forecasting)</li>
        </ul>
        <h3>Technologies</h3>
        <div className="tech-tags">
          {[
            { name: "Python", color: "#3776AB", icon: "🐍" },
            { name: "Dash", color: "#119DFF", icon: "📊" },
            { name: "Plotly", color: "#FF4B4B", icon: "📈" },
            { name: "Pandas", color: "#4a31adff", icon: "🧮" },
            { name: "Power BI", color: "#F2C811", icon: "🟡" }
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
  screenshots: [
    { url: dashboard1, alt: { fr: "Dashboard Power BI - Vue d'ensemble", en: "Power BI Dashboard - Overview" } },
    { url: dashboard2, alt: { fr: "Dashboard Power BI - Analyse détaillée", en: "Power BI Dashboard - Detailed Analysis" } },
    { url: dashKpi1, alt: { fr: "Tableau de bord Python - KPIs Principaux", en: "Python Dashboard - Main KPIs" } },
    { url: dashKpi2, alt: { fr: "Tableau de bord Python - KPIs Principaux", en: "Python Dashboard - Main KPIs" } },
    { url: topCustomers, alt: { fr: "Top Clients - Visualisation Python", en: "Top Customers - Python Visualization" } },
    { url: topProducts, alt: { fr: "Top Produits - Visualisation Python", en: "Top Products - Python Visualization" } },
    { url: lossProducts, alt: { fr: "Analyse Rentabilité - Visualisation Python", en: "Profitability Analysis - Python Visualization" } },
    { url: categoryDistribution, alt: { fr: "Répartition Catégories - Visualisation Python", en: "Category Distribution - Python Visualization" } },
    { url: categoryComparison, alt: { fr: "Comparaison Catégories - Python", en: "Category Comparison - Python" } },
    { url: monthlyTrends, alt: { fr: "Tendances Mensuelles - Python", en: "Monthly Trends - Python" } }
  ],
  process: {
    fr: [
      "Exploration des données avec Pandas",
      "Nettoyage et préparation du dataset",
      "Développement du dashboard interactif avec Dash/Plotly",
      "Création du modèle Power BI et mesures DAX",
      "Comparaison des deux solutions"
    ],
    en: [
      "Data exploration with Pandas",
      "Dataset cleaning and preparation",
      "Interactive dashboard development with Dash/Plotly",
      "Power BI model and DAX measures creation",
      "Comparison of both solutions"
    ]
  },
  impact: {
    fr: "Ce projet montre la complémentarité entre Python (flexibilité, personnalisation) et Power BI (rapidité, accessibilité business) pour la data viz.",
    en: "This project demonstrates the complementarity between Python (flexibility, customization) and Power BI (speed, business accessibility) for data viz."
  },
  tags: {
    fr: [
      "Data Visualization",
      "Business Intelligence",
      "Dashboard",
      "Python",
      "Power BI",
      "Plotly",
      "Pandas",
      "Analyse Commerciale"
    ],
    en: [
      "Data Visualization",
      "Business Intelligence",
      "Dashboard",
      "Python",
      "Power BI",
      "Plotly",
      "Pandas",
      "Business Analytics"
    ]
  }
};

const ui = {
  back: {
    fr: "Retour aux projets",
    en: "Back to projects"
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

export default function SuperstoreDashboard({ lang, theme }) {
  const navigate = useNavigate();
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const openImage = (img, index) => {
    setSelectedImage(img);
    setCurrentImageIndex(index);
  };

  const navigateImage = (direction) => {
    let newIndex;
    if (direction === 'prev') {
      newIndex = currentImageIndex === 0 ? project.screenshots.length - 1 : currentImageIndex - 1;
    } else {
      newIndex = currentImageIndex === project.screenshots.length - 1 ? 0 : currentImageIndex + 1;
    }
    setSelectedImage(project.screenshots[newIndex]);
    setCurrentImageIndex(newIndex);
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
                onClick={() => openImage(img, i)}
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
        <div className="lightbox" onClick={() => setSelectedImage(null)}>
          <button 
            className="nav-button prev-button" 
            onClick={(e) => {
              e.stopPropagation();
              navigateImage('prev');
            }}
          >
            <FaArrowLeft />
          </button>
          <div className="lightbox-content" onClick={e => e.stopPropagation()}>
            <button 
              className="close-button" 
              onClick={(e) => {
                e.stopPropagation();
                setSelectedImage(null);
              }}
            >
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
            className="nav-button next-button" 
            onClick={(e) => {
              e.stopPropagation();
              navigateImage('next');
            }}
          >
            <FaArrowRight />
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
          grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
          gap: 2rem;
        }
        .screenshot-item {
          background: white;
          border-radius: 10px;
          overflow: hidden;
          box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
          transition: all 0.3s ease;
          cursor: pointer;
          display: flex;
          flex-direction: column;
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
          width: 100%;
          height: auto;
          object-fit: cover;
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
          opacity: 0.8;
        }
        .close-button:hover {
          opacity: 1;
          transform: scale(1.1);
        }
        .nav-button {
          position: fixed;
          top: 50%;
          transform: translateY(-50%);
          background: rgba(255, 255, 255, 0.2);
          border: none;
          color: white;
          font-size: 2rem;
          width: 60px;
          height: 60px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: all 0.3s;
          opacity: 0.7;
        }
        .nav-button:hover {
          opacity: 1;
          background: rgba(255, 255, 255, 0.3);
          transform: translateY(-50%) scale(1.1);
        }
        .prev-button {
          left: 30px;
        }
        .next-button {
          right: 30px;
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
          .lightbox-content {
            max-width: 95%;
          }
          .lightbox-caption {
            font-size: 1rem;
          }
          .nav-button {
            width: 40px;
            height: 40px;
            font-size: 1.5rem;
          }
          .prev-button {
            left: 10px;
          }
          .next-button {
            right: 10px;
          }
        }
      `}</style>
    </div>
  );
}