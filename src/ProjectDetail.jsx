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

// Données du projet POS
const projects = [
  {
    id: "pos",
    title: "Système de Gestion de Points de Vente (POS)",
    description: (
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
    github: "https://github.com/tonrepo/pos-system",
    screenshots: [
      { url: img2, alt: "Gestion des utilisateurs" },
      { url: img3, alt: "Gestion des produits et catégories" },
      { url: img4, alt: "Gestion des points de vente" },
      { url: img5, alt: "Historique des factures" },
      { url: img6, alt: "Rapport de facturation globale" },
      { url: img7, alt: "Tableau de bord" },
      { url: img8, alt: "Liste des clôtures" },
      { url: img9, alt: "Espace caissier" }
    ]
  }
];

export default function ProjectDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const project = projects.find((p) => p.id === id);
  const [selectedImage, setSelectedImage] = useState(null);

  if (!project) {
    return (
      <div className="container">
        <button className="back-button" onClick={() => navigate(-1)}>
          <FaArrowLeft /> Retour
        </button>
        <p>Projet introuvable</p>
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
    <div className="project-detail-container">
      <button className="back-button" onClick={() => navigate(-1)}>
        <FaArrowLeft /> Retour aux projets
      </button>

      <header className="project-header">
        <h1>{project.title}</h1>
      </header>

      <section className="project-content">
        <div className="project-description">{project.description}</div>

        <div className="project-links">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="project-link"
          >
            <FaGithub /> Code source
          </a>
          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="project-link"
            >
              <FaExternalLinkAlt /> Voir la démo
            </a>
          )}
        </div>

        {project.screenshots && (
          <section className="screenshots-section">
            <h2>Captures d'écran</h2>
            <div className="screenshots-grid">
              {project.screenshots.map((screenshot, index) => (
                <div 
                  key={index} 
                  className="screenshot-item"
                  onClick={() => openImage(screenshot)}
                >
                  <img
                    src={screenshot.url}
                    alt={screenshot.alt}
                    className="screenshot-image"
                  />
                  <p className="screenshot-caption">{screenshot.alt}</p>
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
              alt={selectedImage.alt} 
              className="lightbox-image" 
            />
            <p className="lightbox-caption">{selectedImage.alt}</p>
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

        .screenshot-item:hover {
          transform: translateY(-5px);
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.15);
        }

        .screenshot-image {
          width: 200%;
          height: 400px;
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