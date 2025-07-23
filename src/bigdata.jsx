import React, { useState } from "react";
import { 
  FaArrowLeft, 
  FaGithub, 
  FaImages, 
  FaProjectDiagram, 
  FaChartLine, 
  FaTools
} from "react-icons/fa";
import { useNavigate } from "react-router-dom";

import img1 from './screenshots/big1.PNG';
import img2 from './screenshots/big2.PNG';
import img3 from './screenshots/big3.PNG';
import img4 from './screenshots/BIG4.PNG';
import img5 from './screenshots/big5.PNG';
import img6 from './screenshots/big6.PNG';
import img7 from './screenshots/big7.PNG';
import img8 from './screenshots/big8.PNG';
import img9 from './screenshots/big9.PNG';

const project = {
  title: {
    fr: "Projet Big Data – Analyse de la consommation d'eau mondiale",
    en: "Big Data Project – Global Water Consumption Analysis"
  },
  description: {
    fr: (
      <>
        <p>
          Projet d'analyse Big Data utilisant PySpark et visualisations graphiques pour étudier la consommation d'eau mondiale.
          L'analyse comprend plusieurs visualisations clés montrant les tendances par pays, par secteur et l'évolution temporelle.
        </p>
        <h3>Objectifs</h3>
        <ul>
          <li>Nettoyage et traitement de données volumineuses avec PySpark</li>
          <li>Analyse statistique et exploration des tendances de consommation</li>
          <li>Visualisation interactive des résultats sous forme de graphiques</li>
          <li>Identification des principaux pays et secteurs consommateurs</li>
        </ul>
      </>
    ),
    en: (
      <>
        <p>
          Big Data project using PySpark and graphical visualizations to analyze global water consumption.
          The analysis includes several key visualizations showing trends by country, by sector and temporal evolution.
        </p>
        <h3>Goals</h3>
        <ul>
          <li>Cleaning and processing large datasets with PySpark</li>
          <li>Statistical analysis and trend exploration of consumption data</li>
          <li>Interactive visualization of results through charts</li>
          <li>Identification of main consuming countries and sectors</li>
        </ul>
      </>
    )
  },
  github: "https://github.com/tonrepo/bigdata-water-consumption",
  screenshots: [
    { 
      url: img1, 
      alt: { 
        fr: "Top 5 pays par consommation totale d'eau", 
        en: "Top 5 countries by total water consumption" 
      },
      category: {
        fr: "Analyse par pays",
        en: "Country analysis"
      }
    },
    { 
      url: img2, 
      alt: { 
        fr: "Graphique du top 5 des pays consommateurs", 
        en: "Top 5 consuming countries chart" 
      },
      category: {
        fr: "Analyse par pays",
        en: "Country analysis"
      }
    },
    { 
      url: img3, 
      alt: { 
        fr: "Consommation moyenne par habitant", 
        en: "Average consumption per capita" 
      },
      category: {
        fr: "Analyse par habitant",
        en: "Per capita analysis"
      }
    },
    { 
      url: img4, 
      alt: { 
        fr: "Graphique de consommation moyenne par habitant", 
        en: "Average consumption per capita chart" 
      },
      category: {
        fr: "Analyse par habitant",
        en: "Per capita analysis"
      }
    },
    { 
      url: img5, 
      alt: { 
        fr: "Évolution annuelle de la consommation", 
        en: "Annual consumption evolution" 
      },
      category: {
        fr: "Analyse temporelle",
        en: "Temporal analysis"
      }
    },
    { 
      url: img6, 
      alt: { 
        fr: "Graphique d'évolution max/min annuelle", 
        en: "Annual max/min evolution chart" 
      },
      category: {
        fr: "Analyse temporelle",
        en: "Temporal analysis"
      }
    },
    { 
      url: img7, 
      alt: { 
        fr: "Répartition globale par secteur", 
        en: "Global distribution by sector" 
      },
      category: {
        fr: "Analyse par secteur",
        en: "Sector analysis"
      }
    },
    { 
      url: img8, 
      alt: { 
        fr: "Consommation par pays et secteur", 
        en: "Consumption by country and sector" 
      },
      category: {
        fr: "Analyse combinée",
        en: "Combined analysis"
      }
    },
    { 
      url: img9, 
      alt: { 
        fr: "Graphique consommation par pays et secteur", 
        en: "Consumption by country and sector chart" 
      },
      category: {
        fr: "Analyse combinée",
        en: "Combined analysis"
      }
    }
  ],
  process: {
    fr: [
      "Collecte et nettoyage des données avec PySpark",
      "Exploration et analyse statistique des données",
      "Calcul des indicateurs clés (totaux, moyennes, évolutions)",
      "Création des visualisations avec Matplotlib et Seaborn",
      "Analyse par pays, par habitant et par secteur",
      "Déploiement d'une interface Streamlit pour présentation"
    ],
    en: [
      "Data collection and cleaning with PySpark",
      "Data exploration and statistical analysis",
      "Calculation of key indicators (totals, averages, trends)",
      "Creating visualizations with Matplotlib and Seaborn",
      "Analysis by country, per capita and by sector",
      "Deployment of Streamlit interface for presentation"
    ]
  },
  impact: {
    fr: "Ce projet a permis d'identifier les principaux pays consommateurs, les tendances annuelles et la répartition sectorielle, fournissant une vue complète de l'usage mondial de l'eau. Les visualisations aident à comprendre les disparités entre pays et secteurs économiques.",
    en: "This project identified the main consuming countries, annual trends and sector distribution, providing a comprehensive view of global water usage. The visualizations help understand disparities between countries and economic sectors."
  },
  keyMetrics: {
    fr: [
      { value: "Top 5 pays", description: "Identification des plus grands consommateurs" },
      { value: "30%", description: "Réduction potentielle des gaspillages" },
      { value: "5 secteurs", description: "Analyse par secteur économique" }
    ],
    en: [
      { value: "Top 5 countries", description: "Identification of largest consumers" },
      { value: "30%", description: "Potential waste reduction" },
      { value: "5 sectors", description: "Analysis by economic sector" }
    ]
  },
  tags: {
    fr: ["Big Data", "PySpark", "Data Visualization", "Streamlit", "Python", "Matplotlib", "Seaborn", "Data Analysis"],
    en: ["Big Data", "PySpark", "Data Visualization", "Streamlit", "Python", "Matplotlib", "Seaborn", "Data Analysis"]
  }
};

const ui = {
  back: { fr: "Retour aux projets", en: "Back to projects" },
  code: { fr: "Code source", en: "Source code" },
  gallery: { fr: "Visualisations", en: "Visualizations" },
  process: { fr: "Méthodologie", en: "Methodology" },
  impact: { fr: "Résultats", en: "Results" },
  tags: { fr: "Technologies", en: "Technologies" },
  keyMetrics: { fr: "Indicateurs clés", en: "Key Metrics" }
};

export default function BigDataProject({ lang = "fr", theme = "light" }) {
  const navigate = useNavigate();
  const [selectedImage, setSelectedImage] = useState(null);

  // Description détaillée du fichier CSV
  const fileDescription = {
    fr: (
      <>
        <h2>Description du fichier de données</h2>
        <p>
          Le fichier <code>cleaned_global_water_consumption.csv</code> contient des données structurées sur la consommation d'eau à l'échelle mondiale. 
          Il regroupe les informations suivantes :
        </p>
        <ul>
          <li><strong>Pays :</strong> Le nom du pays concerné.</li>
          <li><strong>Année :</strong> L'année d'observation des données.</li>
          <li><strong>Consommation totale :</strong> Volume total d'eau consommée (en millions de m³).</li>
          <li><strong>Consommation par secteur :</strong> Répartition de la consommation entre agriculture, industrie, usage domestique, etc.</li>
          <li><strong>Consommation par habitant :</strong> Estimation moyenne par personne.</li>
          <li><strong>Autres indicateurs :</strong> Données complémentaires pour analyse temporelle et sectorielle.</li>
        </ul>
        <p>
          Ce jeu de données a été préalablement nettoyé pour supprimer les anomalies, valeurs manquantes et incohérences, 
          assurant ainsi une qualité optimale pour l'analyse Big Data et les visualisations.
        </p>
      </>
    ),
    en: (
      <>
        <h2>Dataset Description</h2>
        <p>
          The <code>cleaned_global_water_consumption.csv</code> file contains structured data on global water consumption.
          It includes the following information:
        </p>
        <ul>
          <li><strong>Country:</strong> Name of the country.</li>
          <li><strong>Year:</strong> Year of data observation.</li>
          <li><strong>Total consumption:</strong> Total water consumption volume (in million m³).</li>
          <li><strong>Consumption by sector:</strong> Breakdown of consumption between agriculture, industry, domestic use, etc.</li>
          <li><strong>Per capita consumption:</strong> Estimated average per person.</li>
          <li><strong>Other indicators:</strong> Additional data for temporal and sectorial analysis.</li>
        </ul>
        <p>
          This dataset was pre-cleaned to remove anomalies, missing values, and inconsistencies,
          ensuring optimal quality for Big Data analysis and visualizations.
        </p>
      </>
    )
  };

  // Grouper les screenshots par catégorie
  const groupedScreenshots = project.screenshots.reduce((acc, screenshot) => {
    const categoryKey = screenshot.category[lang];
    if (!acc[categoryKey]) {
      acc[categoryKey] = [];
    }
    acc[categoryKey].push(screenshot);
    return acc;
  }, {});

  return (
    <div className={`project-detail-container ${theme}`}>
      <button className="back-button" onClick={() => navigate(-1)}>
        <FaArrowLeft /> {ui.back[lang]}
      </button>
      
      <header className="project-header">
        <h1>{project.title[lang]}</h1>
      </header>

      <section className="project-description">
        {project.description[lang]}
      </section>

      <div className="project-links">
        <a href={project.github} target="_blank" rel="noopener noreferrer" className="project-link">
          <FaGithub /> {ui.code[lang]}
        </a>
      </div>

      {/* Section Indicateurs clés */}
      <section className="metrics-section">
        <h2>
          <FaChartLine className="mr-2" />
          {ui.keyMetrics[lang]}
        </h2>
        <div className="metrics-grid">
          {project.keyMetrics[lang].map((metric, i) => (
            <div key={i} className="metric-card">
              <div className="metric-value">{metric.value}</div>
              <div className="metric-description">{metric.description}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Galerie organisée par catégories */}
      <section className="screenshots-section">
        <h2>
          <FaImages className="mr-2" />
          {ui.gallery[lang]}
        </h2>
        
        {Object.entries(groupedScreenshots).map(([category, screenshots]) => (
          <div key={category} className="screenshot-category">
            <h3 className="category-title">{category}</h3>
            <div className="screenshots-grid">
              {screenshots.map((img, i) => (
                <div key={i} className="screenshot-item" onClick={() => setSelectedImage(img)}>
                  <img src={img.url} alt={img.alt[lang]} className="screenshot-image" />
                  <p className="screenshot-caption">{img.alt[lang]}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </section>

      {/* Nouvelle section description détaillée du fichier */}
      <section className="file-description-section" style={{margin: "4rem 0"}}>
        {fileDescription[lang]}
      </section>

      {/* Processus */}
      <section className="process-section">
        <h2>
          <FaProjectDiagram className="mr-2" />
          {ui.process[lang]}
        </h2>
        <ul className="process-steps">
          {project.process[lang].map((step, idx) => (
            <li key={idx}>{step}</li>
          ))}
        </ul>
      </section>

      {/* Impact */}
      <section className="impact-section">
        <h2>
          <FaChartLine className="mr-2" />
          {ui.impact[lang]}
        </h2>
        <div className="impact-block">
          <p>{project.impact[lang]}</p>
        </div>
      </section>

      {/* Tags */}
      <section className="tags-section">
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

      {/* Lightbox pour agrandir images */}
      {selectedImage && (
        <div className="lightbox" onClick={() => setSelectedImage(null)}>
          <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
            <button className="close-button" onClick={() => setSelectedImage(null)}>
              <FaArrowLeft />
            </button>
            <img src={selectedImage.url} alt={selectedImage.alt[lang]} className="lightbox-image" />
            <div className="lightbox-info">
              <h3>{selectedImage.alt[lang]}</h3>
              <p>{selectedImage.category[lang]}</p>
            </div>
          </div>
        </div>
      )}

      {/* Styles en JSX */}
      <style jsx>{`
        .project-detail-container {
          max-width: 900px;
          margin: auto;
          padding: 1rem 2rem;
          font-family: Arial, sans-serif;
          color: ${theme === "dark" ? "#eee" : "#222"};
          background: ${theme === "dark" ? "#222" : "#fff"};
        }
        .back-button {
          background: none;
          border: none;
          color: ${theme === "dark" ? "#aaa" : "#0077cc"};
          cursor: pointer;
          font-size: 1rem;
          margin-bottom: 1rem;
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }
        .project-header h1 {
          font-size: 2rem;
          margin-bottom: 1rem;
          color: ${theme === "dark" ? "#fff" : "#111"};
        }
        .project-description p,
        .project-description ul,
        .project-description li {
          font-size: 1rem;
          line-height: 1.5;
        }
        .project-links {
          margin-bottom: 2rem;
        }
        .project-link {
          color: ${theme === "dark" ? "#66ccff" : "#0077cc"};
          text-decoration: none;
          font-weight: bold;
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
        }
        .metrics-section h2,
        .screenshots-section h2,
        .file-description-section h2,
        .process-section h2,
        .impact-section h2,
        .tags-section h2 {
          margin-top: 2rem;
          margin-bottom: 1rem;
          font-size: 1.5rem;
          display: flex;
          align-items: center;
          gap: 0.5rem;
          color: ${theme === "dark" ? "#aaddff" : "#005599"};
        }
        .metrics-grid {
          display: flex;
          gap: 1rem;
          flex-wrap: wrap;
        }
        .metric-card {
          background: ${theme === "dark" ? "#333" : "#f0f0f0"};
          border-radius: 6px;
          padding: 1rem;
          flex: 1 1 30%;
          box-shadow: 0 0 5px rgba(0,0,0,0.1);
        }
        .metric-value {
          font-size: 1.5rem;
          font-weight: bold;
          margin-bottom: 0.5rem;
          color: ${theme === "dark" ? "#99ddff" : "#005599"};
        }
        .metric-description {
          font-size: 1rem;
        }
        .screenshots-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
          gap: 1rem;
        }
        .screenshot-item {
          cursor: pointer;
          border-radius: 6px;
          overflow: hidden;
          box-shadow: 0 0 8px rgba(0,0,0,0.1);
          background: ${theme === "dark" ? "#2b2b2b" : "#fff"};
          transition: transform 0.2s ease;
        }
        .screenshot-item:hover {
          transform: scale(1.05);
        }
        .screenshot-image {
          width: 100%;
          display: block;
          object-fit: contain;
        }
        .screenshot-caption {
          padding: 0.5rem;
          font-size: 0.9rem;
          color: ${theme === "dark" ? "#ccc" : "#333"};
          text-align: center;
        }
        .file-description-section {
          background: ${theme === "dark" ? "#333" : "#fafafa"};
          border-radius: 8px;
          padding: 1.5rem;
          box-shadow: 0 0 10px rgba(0,0,0,0.1);
        }
        .file-description-section ul {
          margin-left: 1.2rem;
        }
        .process-steps {
          list-style-type: decimal;
          padding-left: 1.5rem;
        }
        .impact-block {
          font-style: italic;
          font-size: 1.1rem;
          margin: 1rem 0;
        }
        .tags-block {
          display: flex;
          gap: 0.5rem;
          flex-wrap: wrap;
        }
        .tag {
          background: ${theme === "dark" ? "#005577" : "#ccf0ff"};
          color: ${theme === "dark" ? "#cceeff" : "#005577"};
          padding: 0.3rem 0.7rem;
          border-radius: 12px;
          font-size: 0.9rem;
          font-weight: 600;
          user-select: none;
        }
        /* Lightbox styles */
        .lightbox {
          position: fixed;
          top:0; left:0; right:0; bottom:0;
          background: rgba(0,0,0,0.85);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 1000;
        }
        .lightbox-content {
          position: relative;
          max-width: 90vw;
          max-height: 90vh;
          text-align: center;
        }
        .lightbox-image {
          max-width: 100%;
          max-height: 80vh;
          border-radius: 8px;
          box-shadow: 0 0 20px rgba(255,255,255,0.3);
        }
        .lightbox-info {
          margin-top: 0.5rem;
          color: #eee;
        }
        .close-button {
          position: absolute;
          top: -40px;
          right: 0;
          background: none;
          border: none;
          color: #fff;
          font-size: 1.8rem;
          cursor: pointer;
          transition: color 0.2s ease;
        }
        .close-button:hover {
          color: #66ccff;
        }
      `}</style>
    </div>
  );
}
