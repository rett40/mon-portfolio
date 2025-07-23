import React, { useState } from "react";
import { FaArrowLeft, FaGithub, FaImages, FaProjectDiagram, FaChartLine, FaTools, FaTimes } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

// Import des images
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
  title: {
    fr: "Projet RFM – Segmentation et Prédiction Clients",
    en: "RFM Project – Customer Segmentation & Prediction"
  },
  description: {
    fr: (
      <>
        <p>
          Analyse RFM (Récence, Fréquence, Montant) pour segmenter les clients avec <strong>KMeans</strong> et <strong>CAH</strong>, et prédiction des ventes via séries temporelles.
        </p>
        <h3>Objectifs du projet</h3>
        <ul>
          <li>Segmenter les clients selon leur comportement d'achat.</li>
          <li>Analyser et classifier les produits vendus.</li>
          <li>Prédire l’évolution des ventes et du nombre de clients.</li>
          <li>Visualiser les résultats dans une interface web .</li>
        </ul>
      </>
    ),
    en: (
      <>
        <p>
          RFM (Recency, Frequency, Monetary) analysis to segment customers with <strong>KMeans</strong> and <strong>Hierarchical Clustering</strong>, plus sales forecasting using time series.
        </p>
        <h3>Project objectives</h3>
        <ul>
          <li>Segment customers based on purchase behavior.</li>
          <li>Analyze and classify sold products.</li>
          <li>Predict sales and customer count trends.</li>
          <li>Visualize results on a web interface .</li>
        </ul>
      </>
    )
  },
  github: "https://github.com/rett40/rfm-app",
  screenshots: [
    { url: imgRfmOverview, alt: { fr: "Aperçu des clients RFM", en: "RFM Customer Overview" } },
    { url: imgRfmSegments, alt: { fr: "Répartition des segments (KMeans)", en: "Segment Distribution (KMeans)" } },
    { url: imgRfmKmeans, alt: { fr: "Segmentation KMeans des clients", en: "Customer Segmentation (KMeans)" } },
    { url: imgRfmDendrogram, alt: { fr: "Dendrogramme CAH", en: "Hierarchical Dendrogram" } },
    { url: imgProductClusters, alt: { fr: "Données produits avec cluster", en: "Clustered Product Data" } },
    { url: imgProductSummary, alt: { fr: "Résumé des clusters de produits", en: "Product Cluster Summary" } },
    { url: imgMonthlyView, alt: { fr: "Vue mensuelle (clients & ventes)", en: "Monthly View (Customers & Sales)" } },
    { url: imgForecastClients, alt: { fr: "Prévision : NbClients", en: "Forecast: Number of Clients" } },
    { url: imgForecastQuantity, alt: { fr: "Prévision : Quantité Totale", en: "Forecast: Total Quantity" } }
  ],
  process: {
    fr: [
      "Calcul et normalisation des scores RFM",
      "Segmentation avec KMeans et CAH",
      "Clustering des produits vendus",
      "Modélisation et prévision par séries temporelles",
      "Création d’une interface web avec Streamlit"
    ],
    en: [
      "Calculate and normalize RFM scores",
      "Segmentation using KMeans and hierarchical clustering",
      "Clustering of sold products",
      "Time series forecasting modeling",
      "Build web interface with Streamlit"
    ]
  },
  impact: {
    fr: "Cette segmentation a permis d’améliorer le ciblage marketing et d’anticiper les tendances des ventes.",
    en: "This segmentation improved marketing targeting and forecasted sales trends."
  },
  tags: {
    fr: ["Data Science", "Clustering", "Prévision", "Business Intelligence"],
    en: ["Data Science", "Clustering", "Forecasting", "Business Intelligence"]
  }
};

const ui = {
  back: { fr: "Retour aux projets", en: "Back to projects" },
  code: { fr: "Code source", en: "Source code" },
  gallery: { fr: "Galerie du projet", en: "Project Gallery" },
  process: { fr: "Processus du projet", en: "Project Process" },
  impact: { fr: "Impact", en: "Impact" },
  tags: { fr: "Tags", en: "Tags" }
};

export default function RfmProject({ lang = "fr", theme = "light" }) {
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
        <div className="project-description">
          {project.description[lang]}
          <h3>Technologies utilisées</h3>
          <div className="tech-tags">
            {["Python", "Scikit-learn", "Pandas", "Matplotlib", "Streamlit"].map((tech, index) => (
              <span key={index} className="tech-tag">{tech}</span>
            ))}
          </div>
        </div>

        <div className="project-links">
          <a href={project.github} target="_blank" rel="noopener noreferrer" className="project-link">
            <FaGithub /> {ui.code[lang]}
          </a>
        </div>

        <section className="screenshots-section">
          <h2><FaImages className="mr-2" />{ui.gallery[lang]}</h2>
          <div className="screenshots-grid">
            {project.screenshots.map((img, i) => (
              <div key={i} className="screenshot-item" onClick={() => setSelectedImage(img)}>
                <img src={img.url} alt={img.alt[lang]} className="screenshot-image" />
                <p className="screenshot-caption">{img.alt[lang]}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="screenshots-section">
          <h2><FaProjectDiagram className="mr-2" />{ui.process[lang]}</h2>
          <ul>
            {project.process[lang].map((step, idx) => (
              <li key={idx}>{step}</li>
            ))}
          </ul>
        </section>

        <section className="screenshots-section">
          <h2><FaChartLine className="mr-2" />{ui.impact[lang]}</h2>
          <div className="impact-block">
            <p>{project.impact[lang]}</p>
          </div>
        </section>

        <section className="screenshots-section">
          <h2><FaTools className="mr-2" />{ui.tags[lang]}</h2>
          <div className="tags-block">
            {project.tags[lang].map((tag, idx) => (
              <span key={idx} className="tag">{tag}</span>
            ))}
          </div>
        </section>
      </section>

      {selectedImage && (
        <div className="lightbox" onClick={() => setSelectedImage(null)}>
          <div className="lightbox-content" onClick={e => e.stopPropagation()}>
            <button aria-label="Close" className="close-button" onClick={() => setSelectedImage(null)}>
              <FaTimes />
            </button>
            <img src={selectedImage.url} alt={selectedImage.alt[lang]} className="lightbox-image" />
            <p className="lightbox-caption">{selectedImage.alt[lang]}</p>
          </div>
        </div>
      )}

      <style>{`
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
          background: #e0f7fa;
          color: #00838f;
          padding: 0.35rem 1rem;
          border-radius: 20px;
          font-weight: 600;
          font-size: 0.95rem;
          box-shadow: 0 1px 3px rgba(0,0,0,0.1);
          user-select: none;
        }
        .dark .tech-tag {
          background: #263445;
          color: #7fd8e7;
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
        .project-link:hover {
          transform: translateY(-3px);
          box-shadow: 0 5px 15px rgba(0,0,0,0.2);
          background: linear-gradient(135deg, #2980b9, #27ae60);
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
          gap: 1rem;
          margin-bottom: 3rem;
        }
        .tag {
          background: #3498db;
          color: white;
          padding: 0.5rem 1rem;
          border-radius: 20px;
          font-weight: 600;
          font-size: 0.95rem;
          user-select: none;
          box-shadow: 0 2px 6px rgba(0,0,0,0.15);
        }
        .dark .tag {
          background: #2a80b9;
        }
        /* Lightbox styles */
        .lightbox {
          position: fixed;
          top: 0;
          left: 0;
          background: rgba(0,0,0,0.9);
          width: 100%;
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 1000;
        }
        .lightbox-content {
          position: relative;
          max-width: 90vw;
          max-height: 90vh;
          overflow: auto;
          background: transparent;
        }
        .lightbox-image {
          max-width: 100%;
          max-height: 80vh;
          border-radius: 10px;
          box-shadow: 0 0 25px rgba(0,0,0,0.8);
        }
        .lightbox-caption {
          margin-top: 0.5rem;
          text-align: center;
          color: #f7f9fa;
          font-size: 1rem;
        }
        .close-button {
          position: absolute;
          top: -40px;
          right: 0;
          color: white;
          font-size: 2rem;
          background: none;
          border: none;
          cursor: pointer;
        }
      `}</style>
    </div>
  );
}
