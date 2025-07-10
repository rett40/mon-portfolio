import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { FaGithub, FaExternalLinkAlt, FaArrowLeft, FaTimes } from "react-icons/fa";

// Import des images depuis src/screenshots
import img2 from "./screenshots/2.PNG";
import img3 from "./screenshots/3.PNG";
import img4 from "./screenshots/4.PNG";
import img5 from "./screenshots/5.PNG";
import img6 from "./screenshots/6.PNG";
import img7 from "./screenshots/7.PNG";
import img8 from "./screenshots/8.PNG";
import img9 from "./screenshots/9.PNG";

// Données du projet POS avec support multilingue
const projects = [
  {
    id: "pos",
    title: {
      fr: "Système de Gestion de Points de Vente (POS)",
      en: "Point of Sale Management System (POS)"
    },
    description: {
      fr: (
        <>
          <p>
            Solution complète de gestion commerciale pour les entreprises multi-sites avec des fonctionnalités avancées de suivi des ventes, gestion des stocks et reporting financier.
          </p>
          <h3>Fonctionnalités clés :</h3>
          <ul>
            <li><strong>Gestion des utilisateurs</strong> avec système de rôles (Admin, Caissier)</li>
            <li><strong>Gestion multi-magasins</strong> avec produits spécifiques par point de vente</li>
            <li><strong>Tableau de bord analytique</strong> avec indicateurs de performance</li>
            <li><strong>Système de caisse</strong> avec gestion des transactions</li>
            <li><strong>Reporting complet</strong> avec export PDF/Excel</li>
            <li><strong>Historique des ventes</strong> et gestion des clôtures de caisse</li>
          </ul>
          <h3>Technologies utilisées :</h3>
          <div className="tech-tags">
            <span>React.js</span>
            <span>Node.js</span>
            <span>Express</span>
            <span>MySQL</span>
            <span>JWT</span>
            <span>Chart.js</span>
          </div>
        </>
      ),
      en: (
        <>
          <p>
            Complete business management solution for multi-site companies with advanced features for sales tracking, inventory management, and financial reporting.
          </p>
          <h3>Key Features:</h3>
          <ul>
            <li><strong>User management</strong> with role system (Admin, Cashier)</li>
            <li><strong>Multi-store management</strong> with store-specific products</li>
            <li><strong>Analytical dashboard</strong> with performance indicators</li>
            <li><strong>Cash register system</strong> with transaction management</li>
            <li><strong>Comprehensive reporting</strong> with PDF/Excel export</li>
            <li><strong>Sales history</strong> and cash register closing management</li>
          </ul>
          <h3>Technologies used:</h3>
          <div className="tech-tags">
            <span>React.js</span>
            <span>Node.js</span>
            <span>Express</span>
            <span>MySQL</span>
            <span>JWT</span>
            <span>Chart.js</span>
          </div>
        </>
      )
    },
    github: "https://github.com/tonrepo/pos-system",
    screenshots: [
      { url: img2, alt: { fr: "Gestion des utilisateurs", en: "User management" } },
      { url: img3, alt: { fr: "Gestion des produits et catégories", en: "Product and category management" } },
      { url: img4, alt: { fr: "Gestion des points de vente", en: "Store management" } },
      { url: img5, alt: { fr: "Historique des factures", en: "Invoice history" } },
      { url: img6, alt: { fr: "Rapport de facturation globale", en: "Global billing report" } },
      { url: img7, alt: { fr: "Tableau de bord", en: "Dashboard" } },
      { url: img8, alt: { fr: "Liste des clôtures", en: "Closings list" } },
      { url: img9, alt: { fr: "Espace caissier", en: "Cashier area" } }
    ]
  }
];

// Récupère la langue et le thème depuis les props, défaut "fr" et "light"
export default function ProjectDetail({ lang = "fr", theme = "light" }) {
  const { id } = useParams();
  const navigate = useNavigate();
  const project = projects.find((p) => p.id === id);
  const [selectedImage, setSelectedImage] = useState(null);

  // Textes multilingues pour l'UI
  const ui = {
    back: {
      fr: "Retour aux projets",
      en: "Back to projects"
    },
    notFound: {
      fr: "Projet introuvable",
      en: "Project not found"
    },
    code: {
      fr: "Code source",
      en: "Source code"
    },
    demo: {
      fr: "Voir la démo",
      en: "View demo"
    },
    screenshots: {
      fr: "Captures d'écran",
      en: "Screenshots"
    }
  };

  if (!project) {
    return (
      <div className={`container ${theme}`}>
        <button className="back-button" onClick={() => navigate(-1)}>
          <FaArrowLeft /> {ui.back[lang]}
        </button>
        <p>{ui.notFound[lang]}</p>
      </div>
    );
  }

  const openImage = (image) => {
    setSelectedImage(image);
    document.body.style.overflow = 'hidden'; // Empêche le défilement de la page
  };

  const closeImage = () => {
    setSelectedImage(null);
    document.body.style.overflow = 'auto'; // Réactive le défilement
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

        <div className="project-links">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="project-link"
          >
            <FaGithub /> {ui.code[lang]}
          </a>
          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="project-link"
            >
              <FaExternalLinkAlt /> {ui.demo[lang]}
            </a>
          )}
        </div>

        {project.screenshots && (
          <section className="screenshots-section">
            <h2>{ui.screenshots[lang]}</h2>
            <div className="screenshots-grid">
              {project.screenshots.map((screenshot, index) => (
                <div 
                  key={index} 
                  className="screenshot-item"
                  onClick={() => openImage(screenshot)}
                >
                  <img
                    src={screenshot.url}
                    alt={screenshot.alt[lang]}
                    className="screenshot-image"
                  />
                  <p className="screenshot-caption">{screenshot.alt[lang]}</p>
                </div>
              ))}
            </div>
          </section>
        )}
      </section>

      {selectedImage && (
        <div className="lightbox" onClick={closeImage}>
          <div className="lightbox-content" onClick={e => e.stopPropagation()}>
            <button className="close-button" onClick={closeImage}>
              <FaTimes />
            </button>
            <img 
              src={selectedImage.url} 
              alt={selectedImage.alt[lang]} 
              className="lightbox-image" 
            />
            <p className="lightbox-caption">{selectedImage.alt[lang]}</p>
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

        .project-header h1::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          width: 100px;
          height: 4px;
          background: linear-gradient(90deg, #3498db, #2ecc71);
          border-radius: 2px;
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

        .project-description p {
          margin-bottom: 1.5rem;
        }

        .project-description h3 {
          color: #2c3e50;
          margin: 2rem 0 1rem;
          font-size: 1.4rem;
          font-weight: 600;
        }
        .dark .project-description h3 {
          color: #e0e6ed;
        }

        .project-description ul {
          padding-left: 1.5rem;
          margin-bottom: 1.5rem;
        }

        .project-description li {
          margin-bottom: 0.7rem;
          position: relative;
          padding-left: 1.2rem;
        }

        .project-description li::before {
          content: '•';
          position: absolute;
          left: 0;
          color: #3498db;
          font-weight: bold;
        }

        .tech-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 0.8rem;
          margin-top: 1.5rem;
        }

        .tech-tags span {
          background: #e0f7fa;
          color: #00838f;
          padding: 0.4rem 1rem;
          border-radius: 20px;
          font-size: 0.9rem;
          font-weight: 600;
          box-shadow: 0 1px 3px rgba(0,0,0,0.1);
        }
        .dark .tech-tags span {
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

        .screenshots-section h2::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          width: 70px;
          height: 3px;
          background: #3498db;
          border-radius: 2px;
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
          max-width: 100%;
          max-height: 100%;
          object-fit: cover;
          border-bottom: 1px solid #eee;
          transition: transform 0.3s ease;
        }

        .screenshot-item:hover .screenshot-image {
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

        /* Lightbox styles */
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
          
          .screenshots-grid {
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