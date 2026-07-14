// ProjectPage — Layout partagé pour toutes les pages projet du portfolio.
// Design system harmonisé sur LC-Validator : palette FinTech cyan/bleu,
// captures alignées (hauteur fixe, cadrage haut), lightbox unifiée.
import React, { useState, useEffect } from "react";
import {
  FaArrowLeft,
  FaArrowRight,
  FaTimes,
  FaImages,
  FaGithub,
  FaExternalLinkAlt,
  FaProjectDiagram,
  FaRocket,
  FaChartLine,
  FaTools,
  FaThLarge,
  FaFileAlt,
  FaUserShield,
  FaFileInvoice
} from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const ui = {
  back: { fr: "Retour aux projets", en: "Back to projects" },
  stack: { fr: "Stack Technologique", en: "Technology Stack" },
  code: { fr: "Code source", en: "Source code" },
  demo: { fr: "Voir la démo", en: "View demo" }
};

const sectionIcons = {
  overview: <FaFileAlt />,
  features: <FaThLarge />,
  steps: <FaProjectDiagram />,
  stats: <FaRocket />,
  list: <FaChartLine />,
  gallery: <FaImages />,
  tags: <FaTools />
};

const stepColors = ["#22d3ee", "#34d399", "#a78bfa", "#fb923c", "#f472b6", "#60a5fa"];

const lightTheme = `
  .pj-container.light {
    --bg-primary: #f4f8fb;
    --bg-secondary: #ffffff;
    --text-primary: #0f2436;
    --text-secondary: #46607a;
    --accent-primary: #0891b2;
    --accent-secondary: #2563eb;
    --card-bg: #ffffff;
    --card-border: #dbe7f0;
    --code-bg: #eef5fa;
    --hero-glow: rgba(8, 145, 178, 0.12);
    --success: #059669;
    --danger: #dc2626;
    --shadow-sm: 0 1px 3px rgba(15, 36, 54, 0.08);
    --shadow-md: 0 4px 12px rgba(15, 36, 54, 0.1);
    --shadow-lg: 0 12px 30px rgba(15, 36, 54, 0.12);
  }
`;

const darkTheme = `
  .pj-container.dark {
    --bg-primary: #0a1220;
    --bg-secondary: #101c2e;
    --text-primary: #e8f1f8;
    --text-secondary: #9fb4c8;
    --accent-primary: #22d3ee;
    --accent-secondary: #60a5fa;
    --card-bg: #101c2e;
    --card-border: #1e3048;
    --code-bg: #0d1727;
    --hero-glow: rgba(34, 211, 238, 0.1);
    --success: #34d399;
    --danger: #f87171;
    --shadow-sm: 0 1px 3px rgba(0, 0, 0, 0.4);
    --shadow-md: 0 4px 12px rgba(0, 0, 0, 0.45);
    --shadow-lg: 0 12px 30px rgba(0, 0, 0, 0.5);
  }
`;

const baseStyles = `
  .pj-container {
    min-height: 100vh;
    padding: 2rem;
    background: var(--bg-primary);
    color: var(--text-primary);
    transition: background 0.3s ease, color 0.3s ease;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  }

  .pj-content {
    max-width: 1200px;
    margin: 0 auto;
    position: relative;
    z-index: 1;
  }

  .pj-back-button {
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    padding: 0.75rem 1.5rem;
    background: var(--card-bg);
    border: 1px solid var(--card-border);
    border-radius: 12px;
    color: var(--text-primary);
    font-weight: 500;
    cursor: pointer;
    transition: all 0.3s ease;
    margin-bottom: 2rem;
    box-shadow: var(--shadow-sm);
  }

  .pj-back-button:hover {
    background: var(--accent-primary);
    color: #04141c;
    transform: translateX(-5px);
    border-color: var(--accent-primary);
  }

  /* ===== Hero ===== */
  .pj-hero {
    position: relative;
    text-align: center;
    padding: 3rem 2rem 2.25rem;
    border-radius: 24px;
    background:
      radial-gradient(ellipse at 20% 0%, var(--hero-glow), transparent 55%),
      radial-gradient(ellipse at 80% 100%, var(--hero-glow), transparent 55%),
      var(--card-bg);
    border: 1px solid var(--card-border);
    box-shadow: var(--shadow-lg);
    margin-bottom: 2.5rem;
    overflow: hidden;
  }

  .pj-hero::before {
    content: '';
    position: absolute;
    inset: 0 0 auto 0;
    height: 3px;
    background: linear-gradient(90deg, #22d3ee, #60a5fa, #a78bfa);
  }

  .pj-hero h1 {
    font-size: 2.6rem;
    font-weight: 800;
    letter-spacing: -0.02em;
    margin: 0 0 0.75rem;
    background: linear-gradient(120deg, var(--accent-primary), var(--accent-secondary));
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }

  .pj-hero .pj-subtitle {
    font-size: 1.15rem;
    color: var(--text-secondary);
    max-width: 760px;
    margin: 0 auto 1.4rem;
    line-height: 1.55;
  }

  .pj-meta {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 0.75rem;
    margin-bottom: 1.6rem;
  }

  .pj-meta-chip {
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    padding: 0.45rem 1rem;
    border-radius: 999px;
    font-size: 0.9rem;
    font-weight: 600;
    border: 1px solid var(--card-border);
    background: var(--code-bg);
    color: var(--text-primary);
  }

  .pj-meta-chip svg { color: var(--accent-primary); }

  .pj-pitch {
    max-width: 820px;
    margin: 0 auto 1.75rem;
    padding: 1.15rem 1.4rem;
    border-left: 4px solid var(--accent-primary);
    border-radius: 0 14px 14px 0;
    background: var(--code-bg);
    color: var(--text-secondary);
    font-size: 1rem;
    line-height: 1.65;
    text-align: left;
  }

  .pj-stack-title {
    font-size: 0.85rem;
    text-transform: uppercase;
    letter-spacing: 0.15em;
    color: var(--text-secondary);
    margin-bottom: 0.9rem;
    font-weight: 700;
  }

  .pj-stack {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 0.5rem;
    margin-bottom: 0.5rem;
  }

  .pj-badge {
    display: inline-flex;
    align-items: center;
    gap: 0.4rem;
    padding: 0.4rem 0.95rem;
    border-radius: 10px;
    font-size: 0.9rem;
    font-weight: 600;
    background: var(--code-bg);
    border: 1px solid var(--card-border);
    color: var(--text-primary);
    transition: all 0.25s ease;
  }

  .pj-badge:hover {
    transform: translateY(-3px);
    border-color: var(--tech-color, var(--accent-primary));
    color: var(--tech-color, var(--accent-primary));
    box-shadow: var(--shadow-sm);
  }

  .pj-links {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 1rem;
    margin-top: 1.5rem;
  }

  .pj-link {
    display: inline-flex;
    align-items: center;
    gap: 0.6rem;
    padding: 0.7rem 1.5rem;
    border-radius: 12px;
    font-weight: 600;
    font-size: 0.95rem;
    text-decoration: none;
    color: #04141c;
    background: linear-gradient(120deg, var(--accent-primary), var(--accent-secondary));
    box-shadow: var(--shadow-md);
    transition: transform 0.25s ease, box-shadow 0.25s ease;
  }

  .pj-link:hover {
    transform: translateY(-3px);
    box-shadow: var(--shadow-lg);
  }

  /* ===== Sections ===== */
  .pj-section {
    background: var(--card-bg);
    border: 1px solid var(--card-border);
    border-radius: 20px;
    padding: 2.25rem;
    margin-bottom: 2.5rem;
    box-shadow: var(--shadow-md);
  }

  .pj-section-title {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    font-size: 1.55rem;
    font-weight: 700;
    margin: 0 0 0.5rem;
    color: var(--text-primary);
  }

  .pj-section-title svg {
    color: var(--accent-primary);
    flex-shrink: 0;
  }

  .pj-section-sub {
    color: var(--text-secondary);
    margin: 0 0 1.6rem;
    line-height: 1.6;
  }

  /* ===== Overview ===== */
  .pj-overview p {
    color: var(--text-secondary);
    font-size: 1.02rem;
    line-height: 1.7;
    margin: 0 0 1rem;
  }

  .pj-overview p:last-child { margin-bottom: 0; }

  .pj-bullets {
    list-style: none;
    padding: 1.25rem 1.4rem;
    margin: 1.25rem 0 0;
    display: grid;
    gap: 0.7rem;
    border-radius: 14px;
    background: var(--code-bg);
    border: 1px dashed var(--card-border);
  }

  .pj-bullets li {
    display: flex;
    gap: 0.6rem;
    align-items: flex-start;
    color: var(--text-secondary);
    font-size: 0.97rem;
    line-height: 1.55;
  }

  .pj-bullets li::before {
    content: '▸';
    color: var(--accent-primary);
    font-weight: 700;
    flex-shrink: 0;
  }

  /* ===== Features ===== */
  .pj-features {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
    gap: 1.25rem;
  }

  .pj-feature-card {
    border: 1px solid var(--card-border);
    border-radius: 14px;
    padding: 1.4rem;
    background: var(--bg-secondary);
    text-align: center;
    transition: transform 0.25s ease, border-color 0.25s ease, box-shadow 0.25s ease;
  }

  .pj-feature-card:hover {
    transform: translateY(-5px);
    border-color: var(--accent-primary);
    box-shadow: var(--shadow-lg);
  }

  .pj-feature-icon {
    width: 48px;
    height: 48px;
    margin: 0 auto 0.9rem;
    border-radius: 12px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.4rem;
    color: var(--accent-primary);
    background: var(--hero-glow);
    border: 1px solid var(--accent-primary);
  }

  .pj-feature-card h3 {
    margin: 0 0 0.5rem;
    font-size: 1.05rem;
    color: var(--text-primary);
  }

  .pj-feature-card p {
    margin: 0;
    color: var(--text-secondary);
    font-size: 0.9rem;
    line-height: 1.55;
  }

  /* ===== Steps timeline ===== */
  .pj-steps {
    position: relative;
    display: grid;
    gap: 1.4rem;
    padding-left: 2.4rem;
  }

  .pj-steps::before {
    content: '';
    position: absolute;
    left: 21px;
    top: 22px;
    bottom: 22px;
    width: 2px;
    background: linear-gradient(to bottom, #22d3ee, #34d399, #a78bfa, #f472b6);
    opacity: 0.5;
  }

  .pj-step {
    position: relative;
    border: 1px solid var(--card-border);
    border-radius: 14px;
    background: var(--bg-secondary);
    padding: 1.2rem 1.4rem;
    transition: transform 0.3s ease, border-color 0.3s ease, box-shadow 0.3s ease;
  }

  .pj-step:hover {
    transform: translateY(-3px);
    border-color: var(--step-color);
    box-shadow: 0 8px 24px color-mix(in srgb, var(--step-color) 20%, transparent);
  }

  .pj-step-node {
    position: absolute;
    left: -2.4rem;
    top: 1.05rem;
    width: 44px;
    height: 44px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 0.95rem;
    font-weight: 800;
    color: var(--step-color);
    background: var(--card-bg);
    border: 2px solid var(--step-color);
    box-shadow: 0 0 0 6px var(--bg-primary);
    transition: all 0.3s ease;
    z-index: 1;
  }

  .pj-step:hover .pj-step-node {
    background: var(--step-color);
    color: #04141c;
    box-shadow: 0 0 0 6px var(--bg-primary), 0 0 16px var(--step-color);
  }

  .pj-step h3 {
    margin: 0 0 0.35rem;
    font-size: 1.05rem;
    color: var(--text-primary);
  }

  .pj-step p {
    margin: 0;
    color: var(--text-secondary);
    font-size: 0.93rem;
    line-height: 1.6;
  }

  /* ===== Stats ===== */
  .pj-stats {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
    gap: 1.5rem;
  }

  .pj-stat {
    text-align: center;
    padding: 1.9rem 1.4rem;
    border-radius: 16px;
    border: 1px solid var(--card-border);
    background: var(--bg-secondary);
    transition: transform 0.25s ease, border-color 0.25s ease, box-shadow 0.25s ease;
  }

  .pj-stat:hover {
    transform: translateY(-5px);
    border-color: var(--accent-primary);
    box-shadow: var(--shadow-lg);
  }

  .pj-stat-value {
    display: block;
    font-size: 2.4rem;
    font-weight: 800;
    letter-spacing: -0.02em;
    margin-bottom: 0.5rem;
    background: linear-gradient(120deg, var(--accent-primary), var(--accent-secondary));
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }

  .pj-stat-label {
    color: var(--text-secondary);
    font-size: 0.92rem;
    line-height: 1.5;
  }

  /* ===== Checklist (impact) ===== */
  .pj-list {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 1rem;
  }

  .pj-list-item {
    display: flex;
    gap: 0.7rem;
    align-items: flex-start;
    padding: 1rem 1.2rem;
    border-radius: 12px;
    border: 1px solid var(--card-border);
    border-left: 4px solid var(--success);
    background: var(--bg-secondary);
    color: var(--text-secondary);
    font-size: 0.95rem;
    line-height: 1.55;
    transition: transform 0.25s ease, box-shadow 0.25s ease;
  }

  .pj-list-item:hover {
    transform: translateX(5px);
    box-shadow: var(--shadow-md);
  }

  .pj-list-item::before {
    content: '✓';
    color: var(--success);
    font-weight: 800;
    flex-shrink: 0;
  }

  /* ===== Galerie ===== */
  .pj-gallery-category {
    margin-bottom: 2rem;
    padding: 1.5rem;
    border-radius: 16px;
    border: 1px solid var(--card-border);
    background: var(--bg-secondary);
  }

  .pj-gallery-category:last-child { margin-bottom: 0; }

  .pj-category-header {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    margin-bottom: 0.35rem;
  }

  .pj-category-header svg { color: var(--accent-primary); }

  .pj-category-header h3 {
    margin: 0;
    font-size: 1.2rem;
    color: var(--accent-primary);
  }

  .pj-category-desc {
    color: var(--text-secondary);
    font-size: 0.92rem;
    margin: 0 0 1.25rem;
    line-height: 1.5;
  }

  .pj-shots-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
    gap: 1.25rem;
  }

  .pj-shot {
    position: relative;
    border-radius: 12px;
    overflow: hidden;
    cursor: pointer;
    border: 1px solid var(--card-border);
    background: var(--code-bg);
    transition: transform 0.3s ease, border-color 0.3s ease, box-shadow 0.3s ease;
  }

  .pj-shot:hover {
    transform: translateY(-5px);
    border-color: var(--accent-primary);
    box-shadow: var(--shadow-lg);
  }

  .pj-shot img {
    width: 100%;
    height: 185px;
    object-fit: cover;
    object-position: top center;
    display: block;
    transition: transform 0.3s ease;
  }

  .pj-shot:hover img { transform: scale(1.04); }

  .pj-shot-caption {
    position: absolute;
    inset: auto 0 0 0;
    background: linear-gradient(to top, rgba(4, 12, 22, 0.92), transparent);
    color: #fff;
    padding: 1.4rem 0.9rem 0.7rem;
    margin: 0;
    font-size: 0.85rem;
    transform: translateY(100%);
    transition: transform 0.3s ease;
  }

  .pj-shot:hover .pj-shot-caption { transform: translateY(0); }

  /* ===== Tags ===== */
  .pj-tags {
    display: flex;
    flex-wrap: wrap;
    gap: 0.6rem;
  }

  .pj-tag {
    display: inline-flex;
    align-items: center;
    gap: 0.4rem;
    padding: 0.45rem 1.05rem;
    border-radius: 999px;
    font-size: 0.9rem;
    font-weight: 600;
    color: #04141c;
    background: linear-gradient(120deg, var(--accent-primary), var(--accent-secondary));
    box-shadow: var(--shadow-sm);
    transition: transform 0.25s ease;
  }

  .pj-tag:hover { transform: translateY(-3px); }

  .pj-tag::before {
    content: '#';
    opacity: 0.7;
  }

  /* ===== Lightbox ===== */
  .pj-lightbox {
    position: fixed;
    inset: 0;
    background: rgba(3, 8, 15, 0.95);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 1000;
    backdrop-filter: blur(10px);
  }

  .pj-lightbox-content {
    position: relative;
    max-width: 92%;
    max-height: 92%;
    background: var(--card-bg);
    border-radius: 16px;
    overflow: hidden;
    border: 1px solid var(--card-border);
    box-shadow: 0 25px 60px rgba(0, 0, 0, 0.6);
  }

  .pj-lightbox-image {
    max-width: 100%;
    max-height: 74vh;
    object-fit: contain;
    display: block;
    margin: 0 auto;
  }

  .pj-lightbox-caption {
    color: var(--text-primary);
    text-align: center;
    padding: 0.9rem 1rem;
    margin: 0;
    font-size: 1rem;
    border-top: 1px solid var(--card-border);
    background: var(--card-bg);
  }

  .pj-close-button {
    position: absolute;
    top: 0.9rem;
    right: 0.9rem;
    background: rgba(255, 255, 255, 0.12);
    border: none;
    color: #fff;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    font-size: 1.1rem;
    transition: all 0.3s ease;
    z-index: 2;
  }

  .pj-close-button:hover {
    background: rgba(255, 255, 255, 0.25);
    transform: rotate(90deg);
  }

  .pj-nav-button {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    background: rgba(255, 255, 255, 0.1);
    border: none;
    color: #fff;
    width: 56px;
    height: 56px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    font-size: 1.4rem;
    transition: all 0.3s ease;
    backdrop-filter: blur(5px);
  }

  .pj-nav-button:hover {
    background: rgba(255, 255, 255, 0.22);
    transform: translateY(-50%) scale(1.1);
  }

  .pj-prev { left: 1.5rem; }
  .pj-next { right: 1.5rem; }

  /* ===== Responsive ===== */
  @media (max-width: 900px) {
    .pj-compare { grid-template-columns: 1fr; }
  }

  @media (max-width: 768px) {
    .pj-container { padding: 1rem; }
    .pj-hero h1 { font-size: 1.9rem; }
    .pj-hero { padding: 2.25rem 1.25rem 1.75rem; }
    .pj-section { padding: 1.5rem; }
    .pj-steps { padding-left: 2.1rem; }
    .pj-steps::before { left: 18px; }
    .pj-step-node { left: -2.1rem; width: 38px; height: 38px; font-size: 0.85rem; }
    .pj-nav-button { width: 46px; height: 46px; }
    .pj-prev { left: 0.75rem; }
    .pj-next { right: 0.75rem; }
    .pj-stat-value { font-size: 2rem; }
  }
`;

export default function ProjectPage({ lang = "fr", theme = "light", project }) {
  const navigate = useNavigate();
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const styleSheet = document.createElement("style");
    styleSheet.textContent = baseStyles + (theme === "dark" ? darkTheme : lightTheme);
    document.head.appendChild(styleSheet);
    return () => {
      document.head.removeChild(styleSheet);
    };
  }, [theme]);

  const gallerySections = project.sections.filter((s) => s.type === "gallery");
  const allImages = gallerySections.flatMap((s) =>
    s.categories.flatMap((cat) => cat.screenshots)
  );

  const openImage = (img) => {
    const idx = allImages.findIndex((i) => i.url === img.url);
    setSelectedImage(img);
    setCurrentImageIndex(idx >= 0 ? idx : 0);
  };

  const navigateImage = (direction) => {
    const len = allImages.length;
    if (!len) return;
    const newIndex =
      direction === "prev"
        ? (currentImageIndex - 1 + len) % len
        : (currentImageIndex + 1) % len;
    setSelectedImage(allImages[newIndex]);
    setCurrentImageIndex(newIndex);
  };

  const { hero } = project;

  return (
    <div className={`pj-container ${theme}`}>
      <div className="pj-content">
        <button className="pj-back-button" onClick={() => navigate(-1)}>
          <FaArrowLeft /> {ui.back[lang]}
        </button>

        {/* ===== HERO ===== */}
        <header className="pj-hero">
          <h1>{hero.title[lang] || hero.title}</h1>
          {hero.subtitle && <p className="pj-subtitle">{hero.subtitle[lang]}</p>}

          {hero.chips && hero.chips.length > 0 && (
            <div className="pj-meta">
              {hero.chips.map((chip, i) => (
                <span key={i} className="pj-meta-chip">
                  {chip.icon === "role" ? <FaUserShield /> : <FaFileInvoice />}
                  {chip.label[lang]}
                </span>
              ))}
            </div>
          )}

          {hero.pitch && <div className="pj-pitch">{hero.pitch[lang]}</div>}

          {hero.stack && hero.stack.length > 0 && (
            <>
              <div className="pj-stack-title">{ui.stack[lang]}</div>
              <div className="pj-stack">
                {hero.stack.map((tech) => (
                  <span
                    key={tech.name}
                    className="pj-badge"
                    style={tech.color ? { "--tech-color": tech.color } : undefined}
                  >
                    {tech.icon && <span>{tech.icon}</span>} {tech.name}
                  </span>
                ))}
              </div>
            </>
          )}

          {hero.links && hero.links.length > 0 && (
            <div className="pj-links">
              {hero.links.map((link, i) => (
                <a
                  key={i}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="pj-link"
                >
                  {link.kind === "demo" ? <FaExternalLinkAlt /> : <FaGithub />}
                  {link.label ? link.label[lang] : ui[link.kind === "demo" ? "demo" : "code"][lang]}
                </a>
              ))}
            </div>
          )}
        </header>

        {/* ===== SECTIONS ===== */}
        {project.sections.map((section, sIdx) => (
          <section key={sIdx} className="pj-section">
            <h2 className="pj-section-title">
              {sectionIcons[section.type]}
              {section.title[lang]}
            </h2>
            {section.subtitle && (
              <p className="pj-section-sub">{section.subtitle[lang]}</p>
            )}

            {section.type === "overview" && (
              <div className="pj-overview">
                {(section.paragraphs?.[lang] || []).map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
                {section.bullets && (
                  <ul className="pj-bullets">
                    {section.bullets[lang].map((b, i) => (
                      <li key={i}>{b}</li>
                    ))}
                  </ul>
                )}
              </div>
            )}

            {section.type === "features" && (
              <div className="pj-features">
                {section.items.map((item, i) => (
                  <div key={i} className="pj-feature-card">
                    <div className="pj-feature-icon">
                      <span>{item.icon}</span>
                    </div>
                    <h3>{item.title[lang]}</h3>
                    <p>{item.desc[lang]}</p>
                  </div>
                ))}
              </div>
            )}

            {section.type === "steps" && (
              <div className="pj-steps">
                {section.steps.map((step, i) => (
                  <div
                    key={i}
                    className="pj-step"
                    style={{ "--step-color": stepColors[i % stepColors.length] }}
                  >
                    <div className="pj-step-node">
                      {String(i + 1).padStart(2, "0")}
                    </div>
                    <h3>{step.title[lang]}</h3>
                    {step.desc && <p>{step.desc[lang]}</p>}
                  </div>
                ))}
              </div>
            )}

            {section.type === "stats" && (
              <div className="pj-stats">
                {section.stats.map((stat, i) => (
                  <div key={i} className="pj-stat">
                    <span className="pj-stat-value">{stat.value}</span>
                    <span className="pj-stat-label">{stat.label[lang]}</span>
                  </div>
                ))}
              </div>
            )}

            {section.type === "list" && (
              <div className="pj-list">
                {section.items[lang].map((item, i) => (
                  <div key={i} className="pj-list-item">
                    {item}
                  </div>
                ))}
              </div>
            )}

            {section.type === "gallery" &&
              section.categories.map((category, cIdx) => {
                const shots = (
                  <div className="pj-shots-grid">
                    {category.screenshots.map((img, i) => (
                      <div key={i} className="pj-shot" onClick={() => openImage(img)}>
                        <img src={img.url} alt={img.alt[lang]} loading="lazy" />
                        <p className="pj-shot-caption">{img.alt[lang]}</p>
                      </div>
                    ))}
                  </div>
                );
                // Catégorie sans titre : grille simple, sans encadré
                if (!category.title) {
                  return <React.Fragment key={cIdx}>{shots}</React.Fragment>;
                }
                return (
                  <div key={cIdx} className="pj-gallery-category">
                    <div className="pj-category-header">
                      <FaImages />
                      <h3>{category.title[lang]}</h3>
                    </div>
                    {category.description && (
                      <p className="pj-category-desc">{category.description[lang]}</p>
                    )}
                    {shots}
                  </div>
                );
              })}

            {section.type === "tags" && (
              <div className="pj-tags">
                {(Array.isArray(section.tags) ? section.tags : section.tags[lang]).map(
                  (tag, i) => (
                    <span key={i} className="pj-tag">
                      {tag}
                    </span>
                  )
                )}
              </div>
            )}
          </section>
        ))}
      </div>

      {/* ===== Lightbox ===== */}
      {selectedImage && (
        <div className="pj-lightbox" onClick={() => setSelectedImage(null)}>
          <button
            className="pj-nav-button pj-prev"
            onClick={(e) => {
              e.stopPropagation();
              navigateImage("prev");
            }}
          >
            <FaArrowLeft />
          </button>

          <div className="pj-lightbox-content" onClick={(e) => e.stopPropagation()}>
            <button
              className="pj-close-button"
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
              className="pj-lightbox-image"
            />
            <p className="pj-lightbox-caption">{selectedImage.alt[lang]}</p>
          </div>

          <button
            className="pj-nav-button pj-next"
            onClick={(e) => {
              e.stopPropagation();
              navigateImage("next");
            }}
          >
            <FaArrowRight />
          </button>
        </div>
      )}
    </div>
  );
}
