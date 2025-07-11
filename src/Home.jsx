import React from "react";
import { useNavigate } from "react-router-dom";
import { FaCode, FaDatabase, FaChartLine, FaTools } from "react-icons/fa";
import img1 from './screenshots/1.jpg';
import img2 from './screenshots/2.jpg';
import img3 from './screenshots/3.jpeg';
import profilePhoto from './screenshots/profile.jpg';


// Multilingual content for projects and UI
const projects = [
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
    frontend: "Frontend",
    backend: "Backend",
    data: "Data Science",
    tools: "Outils",
    projectsTitle: "Projets Récents"
  },
  en: {
    name: "Aziz Ben Mohamed",
    subtitle: "Data analyst & Data Scientist",
    aboutTitle: "About",
    about: "Graduated in Management IT and currently pursuing a master's in Information Systems Engineering and Data Science, I am passionate about data analysis, Business Intelligence, and web development. I master tools and technologies such as Power BI, SQL, React, and Next.js, which I use to turn data into strategic decisions and create high-performance applications.",
    skillsTitle: "Technical Skills",
    frontend: "Frontend",
    backend: "Backend",
    data: "Data Science",
    tools: "Tools",
    projectsTitle: "Recent Projects"
  }
};

export default function Home({ lang = "fr", theme = "light" }) {
  const navigate = useNavigate();

  return (
    <div className={`container ${theme}`}>
      {/* Header Section */}
      <header className="header">
        <div className="profile-container">
          <img 
            src={profilePhoto} 
            alt="Aziz Ben Mohamed" 
            className="profile-photo"
          />
        </div>
        <h1 className="title">{texts[lang].name}</h1>
        <p className="subtitle">{texts[lang].subtitle}</p>
      </header>

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
        }
      `}</style>
      </div>
  );
}