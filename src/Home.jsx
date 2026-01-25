import React, { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { FaCode, FaDatabase, FaChartLine, FaTools, FaTimes } from "react-icons/fa";
import img1 from './screenshots/1.jpg';
import img2 from './screenshots/2.jpg';
import img3 from './screenshots/3.jpeg';
import img4 from './screenshots/rfm.png';
import img5 from './screenshots/big0.jpg';
import img6 from './screenshots/movies.jfif';
import img7 from './screenshots/bi.jpg';
import imgJobMatcher from './screenshots/logo1.png';
import profilePhoto from './screenshots/profile.jpg';
import cvEn from './screenshots/cv_englais.pdf';
import cvFr from './screenshots/MohamedAzizBenMohamed.pdf';

// Multilingual content for projects and UI
const projects = [
  {
    id: "smart-job-matcher",
    title: {
      fr: "Smart Job Matcher – Plateforme de Recrutement Intelligent",
      en: "Smart Job Matcher – Intelligent Recruitment Platform"
    },
    image: imgJobMatcher,
    summary: {
      fr: "Plateforme intelligente pour matcher CV et offres d'emploi avec score de compatibilité et dashboard analytique.",
      en: "Intelligent platform to match CVs with job offers, calculate compatibility scores, and visualize matches on a dashboard."
    },
    tags: ["React", "Python", "NLP", "Firebase", "Tailwind CSS", "Dashboard"]
  },
  {
    id: "rfm-clustering",
    title: {
      fr: "Segmentation RFM & Prédiction",
      en: "RFM Clustering & Forecasting"
    },
    image: img4,
    summary: {
      fr: "Analyse RFM avec clustering client, segmentation produit et prévision du nombre de clients et des ventes.",
      en: "RFM analysis with customer segmentation, product clustering, and forecasting of customers and sales."
    },
    tags: ["Streamlit", "Python", "scikit-learn", "Pandas"]
  },
  {
    id: "machine-learning",
    title: {
      fr: "Prédiction du niveau d'obésité",
      en: "Obesity Level Prediction"
    },
    image: img2,
    summary: {
      fr: "Projet Data Science pour prédire le niveau d’obésité à partir des habitudes alimentaires et de l’activité physique.",
      en: "Data Science project to predict obesity level from eating habits and physical activity."
    },
    tags: ["Python", "Flask", "scikit-learn", "Machine Learning"]
  },
  {
    id: "water-consumption-analysis",
    title: {
      fr: "Analyse Consommation Mondiale d'Eau",
      en: "Global Water Consumption Analysis"
    },
    image: img5,
    summary: {
      fr: "Analyse des données de consommation d'eau dans le monde avec visualisations, segmentation et prévisions basées sur des données nettoyées.",
      en: "Analysis of global water consumption data with visualizations, segmentation, and forecasting based on cleaned datasets."
    },
    tags: ["Big Data", "PySpark", "Streamlit", "Python", "Matplotlib", "Seaborn"]
  },
  {
    id: "superstore-dashboard",
    title: {
      fr: "Dashboard Superstore – Python & Power BI",
      en: "Superstore Dashboard – Python & Power BI"
    },
    image: img7,
    summary: {
      fr: "Dashboard interactif construit avec Python (Dash, Plotly, Pandas) et Power BI pour l'analyse complète des ventes, bénéfices, segments, clients, produits et régions. KPIs dynamiques, visualisations géographiques, tendances et déploiement web.",
      en: "Interactive dashboard built with Python (Dash, Plotly, Pandas) and Power BI for comprehensive sales, profit, segment, customer, product, and region analysis. Dynamic KPIs, geo-visualizations, trends, and web deployment."
    },
    tags: ["Python", "Dash", "Plotly", "Pandas", "Power BI", "Data Viz", "KPI", "EDA"]
  },
  {
    id: "bi-vermeg",
    title: {
      fr: "Projet BI – Gestion Jira (VERMEG)",
      en: "BI Project – Jira Management (VERMEG)"
    },
    image: img3,
    summary: {
      fr: "Solution décisionnelle pour optimiser la gestion des licences Jira via Power BI, Talend et Power Apps.",
      en: "Business Intelligence solution to optimize Jira license management using Power BI, Talend and Power Apps."
    },
    tags: ["Power BI", "Talend", "MySQL", "Power Apps"]
  },
  {
    id: "movie-recommender",
    title: {
      fr: "Recommandateur de Films",
      en: "Movie Recommender"
    },
    image: img6,
    summary: {
      fr: "Application Streamlit pour recommander des films selon les goûts d’un ou deux utilisateurs, avec filtrage par genres, années, et notes, intégrant l’API TMDB pour les affiches.",
      en: "Streamlit app recommending movies for one or two users with filters by genre, year, rating and TMDB API integration for posters."
    },
    tags: ["Python", "Streamlit", "SVD", "TMDB API", "Recommandations"]
  },
  {
    id: "pos",
    title: {
      fr: "Système de Gestion POS",
      en: "POS Management System"
    },
    image: img1,
    summary: {
      fr: "Solution complète de gestion de points de vente avec tableau de bord analytique, gestion multi-magasins et système de reporting avancé.",
      en: "Comprehensive POS management solution with analytics dashboard, multi-store management, and advanced reporting system."
    },
    tags: ["React", "Node.js", "MySQL", "JWT"]
  }
];


// Multilingual UI texts
const texts = {
  fr: {
    name: "Aziz Ben Mohamed",
    subtitle: "Data analyst & Data Scientist",
    aboutTitle: "À Propos",
    about: "Diplômé en Informatique de Gestion et actuellement en master d'Ingénierie des Systèmes d'Information et Data Science, je suis passionné par l'analyse de données, la Business Intelligence et le développement web. Je maîtrise des outils et technologies tels que Power BI, SQL, React et Next.js, que j'utilise pour transformer les données en décisions stratégiques et créer des applications performantes.",
    skillsTitle: "Compétences Techniques",
    data: "Data Science",
    backend: "Backend",
    frontend: "Frontend",
    tools: "Outils",
    projectsTitle: "Projets Récents",
    cv: "Voir mon CV"
  },
  en: {
    name: "Aziz Ben Mohamed",
    subtitle: "Data analyst & Data Scientist",
    aboutTitle: "About",
    about: "Graduated in Management IT and currently pursuing a master's in Information Systems Engineering and Data Science, I am passionate about data analysis, Business Intelligence, and web development. I master tools and technologies such as Power BI, SQL, React, and Next.js, which I use to turn data into strategic decisions and create high-performance applications.",
    skillsTitle: "Technical Skills",
    data: "Data Science",
    backend: "Backend",
    frontend: "Frontend",
    tools: "Tools",
    projectsTitle: "Recent Projects",
    cv: "View my CV"
  }
};

export default function Home({ lang = "fr", theme = "light" }) {
  const navigate = useNavigate();
  const [showProfileModal, setShowProfileModal] = useState(false);
  const profileRef = useRef(null);
  const modalContentRef = useRef(null);
  const longPressTimer = useRef(null);
  const [isPressed, setIsPressed] = useState(false);

  // Handle touch/click start
  const handleStart = () => {
    setIsPressed(true);
    longPressTimer.current = setTimeout(() => {
      setShowProfileModal(true);
    }, 500); // 500ms delay for long press
  };

  // Handle touch/click end
  const handleEnd = () => {
    setIsPressed(false);
    if (longPressTimer.current) {
      clearTimeout(longPressTimer.current);
    }
  };

  // Close modal when clicking outside the image
  const handleModalClick = (e) => {
    if (modalContentRef.current && !modalContentRef.current.contains(e.target)) {
      setShowProfileModal(false);
    }
  };

  // Close modal on escape key
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.keyCode === 27) {
        setShowProfileModal(false);
      }
    };

    if (showProfileModal) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden'; // Prevent scrolling when modal is open
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [showProfileModal]);

  return (
    <div className={`container ${theme}`}>
      {/* Header Section */}
      <header className="header">
        <div 
          className="profile-container"
          ref={profileRef}
          onMouseDown={handleStart}
          onMouseUp={handleEnd}
          onMouseLeave={handleEnd}
          onTouchStart={handleStart}
          onTouchEnd={handleEnd}
          style={{ cursor: 'pointer' }}
        >
          <img
            src={profilePhoto}
            alt="Aziz Ben Mohamed"
            className="profile-photo"
            style={{ transform: isPressed ? 'scale(0.95)' : 'scale(1)' }}
          />
          {isPressed && <div className="zoom-hint">Maintenir pour zoomer</div>}
        </div>
        <h1 className="title">{texts[lang].name}</h1>
        <p className="subtitle">{texts[lang].subtitle}</p>
        
        {/* CV Button */}
        <a
          href={lang === "fr" ? cvFr : cvEn}
          target="_blank"
          rel="noopener noreferrer"
          className="cv-button"
        >
          <span style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "0.7rem",
            fontWeight: 600,
            fontSize: "1.08rem"
          }}>
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" style={{verticalAlign: "middle"}}>
              <rect x="4" y="2" width="16" height="20" rx="4" fill="#fff" stroke="#3498db" strokeWidth="2"/>
              <path d="M8 6h8M8 10h8M8 14h4" stroke="#3498db" strokeWidth="2" strokeLinecap="round"/>
            </svg>
            {texts[lang].cv}
          </span>
        </a>
      </header>

      {/* Profile Modal */}
      {showProfileModal && (
        <div className="profile-modal" onClick={handleModalClick}>
          <div className="profile-modal-content" ref={modalContentRef}>
            <button 
              className="profile-modal-close"
              onClick={() => setShowProfileModal(false)}
              aria-label="Fermer"
            >
              <FaTimes />
            </button>
            <div className="profile-modal-image-container">
              <img
                src={profilePhoto}
                alt="Aziz Ben Mohamed"
                className="profile-modal-image"
              />
            </div>
          </div>
        </div>
      )}

      {/* About Section */}
      <section className="section">
        <h2 className="section-title">{texts[lang].aboutTitle}</h2>
        <div className="about-content">
          <p>
            {texts[lang].about}
          </p>
        </div>
      </section>

      {/* Skills Section */}
      <section className="section">
        <h2 className="section-title">{texts[lang].skillsTitle}</h2>
        <div className="skills-grid">
          <div className="skill-card">
            <FaChartLine className="skill-icon" />
            <h3>{texts[lang].data}</h3>
            <ul>
              <li>Pandas / NumPy</li>
              <li>Machine Learning</li>
              <li>{lang === "fr" ? "Visualisation de données" : "Data visualization"}</li>
              <li>{lang === "fr" ? "SQL avancé" : "Advanced SQL"}</li>
            </ul>
          </div>
          <div className="skill-card">
            <FaDatabase className="skill-icon" />
            <h3>{texts[lang].backend}</h3>
            <ul>
              <li>Node.js / Express</li>
              <li>PHP / Laravel</li>
              <li>Python / Django</li>
              <li>RESTful APIs</li>
            </ul>
          </div>

          
          <div className="skill-card">
            <FaCode className="skill-icon" />
            <h3>{texts[lang].frontend}</h3>
            <ul>
              <li>React.js / Redux</li>
              <li>Vue.js</li>
              <li>HTML5 / CSS3 / Sass</li>
              <li>Tailwind CSS</li>
            </ul>
          </div>

          

          <div className="skill-card">
            <FaTools className="skill-icon" />
            <h3>{texts[lang].tools}</h3>
            <ul>
              <li>Git / GitHub</li>
              <li>Docker</li>
              <li>CI/CD</li>
              <li>Jira / Agile</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="section">
        <h2 className="section-title">{texts[lang].projectsTitle}</h2>
        <div className="projects-grid">
          {projects.map((project) => (
            <div
              key={project.id}
              className="project-card"
              onClick={() => {
                if (project.id === "machine-learning") {
                  navigate("/machine-learning");
                } else if (project.id === "bi-vermeg") {
                  navigate("/bi-vermeg");
                } else if (project.id === "rfm-clustering") {
                  navigate("/Rfmproject");
                }  else if (project.id === "water-consumption-analysis") {
                  navigate("/bigdata");
                }  else if (project.id === "movie-recommender") {
                  navigate("/movie-recommender");
                } else if (project.id === "superstore-dashboard") {
                  navigate("/dash");
                } else if (project.id === "smart-job-matcher") {
                  navigate("/smart-job-matcher");
                } else {
                  navigate(`/projet/${project.id}`);
                }
              }}
            >
              <div className="project-image-container">
                <img
                  src={project.image}
                  alt={project.title[lang]}
                  className="project-image"
                />
              </div>
              <div className="project-content">
                <h3 className="project-title">{project.title[lang]}</h3>
                <p className="project-summary">{project.summary[lang]}</p>
                <div className="project-tags">
                  {project.tags.map((tag, index) => (
                    <span key={index} className="tag">{tag}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CSS Styles */}
      <style jsx>{`
        .container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 2rem;
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
          color: #333;
          background: #f7f9fa;
          transition: background 0.3s, color 0.3s;
        }
        .dark.container {
          background: #181c22;
          color: #f7f9fa;
        }
        .section-title,
        .title {
          color: #2c3e50;
        }
        .dark .section-title,
        .dark .title {
          color: #e0e6ed;
        }
        .skill-card,
        .project-card {
          background: #fff;
          color: #222;
        }
        .dark .skill-card,
        .dark .project-card {
          background: #23272f;
          color: #f7f9fa;
        }
        .project-summary {
          color: #7f8c8d;
        }
        .dark .project-summary {
          color: #b0b8c1;
        }
        .header {
          text-align: center;
          margin-bottom: 3rem;
        }
        .profile-container {
          width: 150px;
          height: 150px;
          margin: 0 auto 1.5rem;
          border-radius: 50%;
          overflow: hidden;
          border: 4px solid #3498db;
          box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
          position: relative;
        }
        .profile-photo {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.3s ease;
        }
        .profile-container:hover .profile-photo {
          transform: scale(1.05);
        }
        .title {
          font-size: 2.5rem;
          color: #2c3e50;
          margin-bottom: 0.5rem;
        }
        .subtitle {
          font-size: 1.2rem;
          color: #7f8c8d;
          font-weight: 300;
        }
        .section {
          margin-bottom: 3rem;
        }
        .section-title {
          font-size: 1.8rem;
          color: #2c3e50;
          border-bottom: 2px solid #3498db;
          padding-bottom: 0.5rem;
          margin-bottom: 1.5rem;
        }
        .about-content {
          line-height: 1.6;
          font-size: 1.1rem;
        }
        .skills-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 1.5rem;
        }
        .skill-card {
          background: #fff;
          border-radius: 8px;
          padding: 1.5rem;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
          transition: transform 0.3s ease;
        }
        .dark .skill-card {
          background: #23272f;
          color: #f7f9fa;
        }
        .skill-card:hover {
          transform: translateY(-5px);
        }
        .skill-icon {
          font-size: 2rem;
          color: #3498db;
          margin-bottom: 1rem;
        }
        .skill-card h3 {
          color: #2c3e50;
          margin-bottom: 1rem;
        }
        .dark .skill-card h3 {
          color: #e0e6ed;
        }
        .skill-card ul {
          list-style-type: none;
          padding: 0;
        }
        .skill-card li {
          margin-bottom: 0.5rem;
          position: relative;
          padding-left: 1.5rem;
        }
        .skill-card li:before {
          content: "•";
          color: #3498db;
          position: absolute;
          left: 0;
        }
        .projects-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 2rem;
        }
        .project-card {
          background: #fff;
          border-radius: 8px;
          overflow: hidden;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
          transition: all 0.3s ease;
          cursor: pointer;
        }
        .dark .project-card {
          background: #23272f;
          color: #f7f9fa;
        }
        .project-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
        }
        .project-image-container {
          height: 200px;
          overflow: hidden;
        }
        .project-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.5s ease;
        }
        .project-card:hover .project-image {
          transform: scale(1.05);
        }
        .project-content {
          padding: 1.5rem;
        }
        .project-title {
          font-size: 1.3rem;
          color: #2c3e50;
          margin-bottom: 0.5rem;
        }
        .dark .project-title {
          color: #e0e6ed;
        }
        .project-summary {
          color: #7f8c8d;
          line-height: 1.5;
          margin-bottom: 1rem;
        }
        .dark .project-summary {
          color: #b0b8c1;
        }
        .project-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
        }
        .tag {
          background: #e0f7fa;
          color: #00838f;
          padding: 0.3rem 0.8rem;
          border-radius: 20px;
          font-size: 0.8rem;
          font-weight: 500;
        }
        .dark .tag {
          background: #263445;
          color: #7fd8e7;
        }
        
        .zoom-hint {
          position: absolute;
          bottom: 10px;
          left: 0;
          right: 0;
          text-align: center;
          background: rgba(0, 0, 0, 0.7);
          color: white;
          padding: 4px;
          font-size: 12px;
          border-radius: 0 0 75px 75px;
          opacity: 1;
          transition: opacity 0.2s;
        }
        
        .profile-modal {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-color: rgba(0, 0, 0, 0.85);
          display: flex;
          justify-content: center;
          align-items: center;
          z-index: 1000;
          cursor: pointer;
          backdrop-filter: blur(8px);
        }
        
        .profile-modal-content {
          position: relative;
          display: flex;
          justify-content: center;
          align-items: center;
          width: 100%;
          height: 100%;
          pointer-events: none;
        }
        
        .profile-modal-close {
          position: absolute;
          top: 20px;
          right: 20px;
          background: rgba(0, 0, 0, 0.5);
          border: none;
          color: white;
          font-size: 28px;
          width: 50px;
          height: 50px;
          border-radius: 50%;
          cursor: pointer;
          z-index: 1001;
          display: flex;
          justify-content: center;
          align-items: center;
          transition: background 0.3s;
          pointer-events: auto;
        }
        
        .profile-modal-close:hover {
          background: rgba(0, 0, 0, 0.7);
        }
        
        .profile-modal-image-container {
          width: 250px;
          height: 250px;
          border-radius: 50%;
          overflow: hidden;
          border: 4px solid rgba(255, 255, 255, 0.2);
          box-shadow: 0 0 40px rgba(52, 152, 219, 0.4);
          animation: zoomIn 0.3s ease-out;
          pointer-events: none;
        }
        
        .profile-modal-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          pointer-events: none;
        }
        
        @keyframes zoomIn {
          from {
            transform: scale(0.8);
            opacity: 0;
          }
          to {
            transform: scale(1);
            opacity: 1;
          }
        }
        
        @media (max-width: 768px) {
          .container {
            padding: 1.5rem;
          }
          .title {
            font-size: 2rem;
          }
          .section-title {
            font-size: 1.5rem;
          }
          .profile-container {
            width: 120px;
            height: 120px;
          }
          
          .profile-modal-image-container {
            width: 200px;
            height: 200px;
          }
          
          .profile-modal-close {
            top: 15px;
            right: 15px;
            width: 40px;
            height: 40px;
            font-size: 22px;
          }
        }
        
        @media (min-width: 1024px) {
          .profile-modal-image-container {
            width: 280px;
            height: 280px;
          }
        }
      `}</style>
      <style jsx>{`
        .cv-button {
          display: inline-block;
          margin-top: 1.2rem;
          background: linear-gradient(90deg, #3498db 0%, #2ecc71 100%);
          color: #fff;
          padding: 0.8rem 2.2rem;
          border-radius: 30px;
          font-size: 1.08rem;
          font-weight: 600;
          text-decoration: none;
          box-shadow: 0 4px 16px rgba(52,152,219,0.12);
          border: none;
          letter-spacing: 0.03em;
          transition: background 0.2s, transform 0.2s, box-shadow 0.2s;
          position: relative;
          overflow: hidden;
        }
        .cv-button:hover {
          background: linear-gradient(90deg, #217dbb 0%, #27ae60 100%);
          transform: translateY(-2px) scale(1.05);
          box-shadow: 0 8px 24px rgba(52,152,219,0.18);
        }
      `}</style>
    </div>
  );
}