import React from "react";
import { useNavigate } from "react-router-dom";
import { FaCode, FaDatabase, FaChartLine, FaTools } from "react-icons/fa";
import img1 from './screenshots/1.jpg';
import profilePhoto from './screenshots/profile.jpg';

const projects = [
  {
    id: "pos",
    title: "Système de Gestion POS",
    image: img1,
    summary: "Solution complète de gestion de points de vente avec tableau de bord analytique, gestion multi-magasins et système de reporting avancé.",
    tags: ["React", "Node.js", "MySQL", "JWT"]
  },
  {
    id: "data-analysis",
    title: "Plateforme d'Analyse de Données",
    image: img1,
    summary: "Outil de visualisation et d'analyse de données avec intégration de machine learning.",
    tags: ["Python", "Django", "TensorFlow", "D3.js"]
  }
];

export default function Home() {
  const navigate = useNavigate();

  return (
    <div className="container">
      {/* Header Section */}
      <header className="header">
        <div className="profile-container">
          <img 
            src={profilePhoto} 
            alt="Aziz Ben Mohamed" 
            className="profile-photo"
          />
        </div>
        <h1 className="title">Aziz Ben Mohamed</h1>
        <p className="subtitle">Développeur Full-Stack & Data Scientist</p>
      </header>

      {/* About Section */}
      <section className="section">
        <h2 className="section-title">À Propos</h2>
        <div className="about-content">
          <p>
            Diplômé en Informatique de Gestion et actuellement en master d'Ingénierie des Systèmes d'Information et Data Science, je suis passionné par l'analyse de données, la Business Intelligence et le développement web. Je maîtrise des outils et technologies tels que Power BI, SQL, React et Next.js, que j'utilise pour transformer les données en décisions stratégiques et créer des applications performantes.
          </p>
        </div>
      </section>

      {/* Skills Section */}
      <section className="section">
        <h2 className="section-title">Compétences Techniques</h2>
        <div className="skills-grid">
          <div className="skill-card">
            <FaCode className="skill-icon" />
            <h3>Frontend</h3>
            <ul>
              <li>React.js / Redux</li>
              <li>Vue.js</li>
              <li>HTML5 / CSS3 / Sass</li>
              <li>Tailwind CSS</li>
            </ul>
          </div>
          
          <div className="skill-card">
            <FaDatabase className="skill-icon" />
            <h3>Backend</h3>
            <ul>
              <li>Node.js / Express</li>
              <li>PHP / Laravel</li>
              <li>Python / Django</li>
              <li>RESTful APIs</li>
            </ul>
          </div>
          
          <div className="skill-card">
            <FaChartLine className="skill-icon" />
            <h3>Data Science</h3>
            <ul>
              <li>Pandas / NumPy</li>
              <li>Machine Learning</li>
              <li>Visualisation de données</li>
              <li>SQL avancé</li>
            </ul>
          </div>
          
          <div className="skill-card">
            <FaTools className="skill-icon" />
            <h3>Outils</h3>
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
        <h2 className="section-title">Projets Récents</h2>
        <div className="projects-grid">
          {projects.map((project) => (
            <div 
              key={project.id} 
              className="project-card"
              onClick={() => navigate(`/projet/${project.id}`)}
            >
              <div className="project-image-container">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="project-image"
                />
              </div>
              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-summary">{project.summary}</p>
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
        
        .project-summary {
          color: #7f8c8d;
          line-height: 1.5;
          margin-bottom: 1rem;
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