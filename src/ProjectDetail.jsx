// Système de Gestion POS — page projet harmonisée (ProjectPage)
import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import ProjectPage from "./ProjectPage";

import img2 from "./screenshots/2.PNG";
import img3 from "./screenshots/3.PNG";
import img4 from "./screenshots/4.PNG";
import img5 from "./screenshots/5.PNG";
import img6 from "./screenshots/6.PNG";
import img7 from "./screenshots/7.PNG";
import img8 from "./screenshots/8.PNG";
import img9 from "./screenshots/9.PNG";

const projects = {
  pos: {
    hero: {
      title: {
        fr: "Système de Gestion POS",
        en: "POS Management System"
      },
      subtitle: {
        fr: "Solution complète de gestion commerciale multi-magasins : ventes, stocks, caisse et reporting financier.",
        en: "Complete multi-store business management solution: sales, inventory, cash register and financial reporting."
      },
      pitch: {
        fr: "Application full-stack pour les entreprises multi-sites : suivi des ventes en temps réel, gestion des stocks par point de vente, système de caisse avec clôtures, et reporting complet exportable en PDF/Excel — le tout sécurisé par un système de rôles (Admin, Caissier).",
        en: "Full-stack application for multi-site businesses: real-time sales tracking, per-store inventory management, cash register system with closings, and comprehensive reporting exportable to PDF/Excel — all secured by a role system (Admin, Cashier)."
      },
      stack: [
        { name: "React.js", icon: "⚛️", color: "#61dafb" },
        { name: "Node.js", icon: "🟢", color: "#68a063" },
        { name: "Express", icon: "🚏", color: "#888888" },
        { name: "MySQL", icon: "🐬", color: "#4479A1" },
        { name: "JWT", icon: "🔐", color: "#00BFA5" },
        { name: "Chart.js", icon: "📈", color: "#FF6384" }
      ],
      links: [{ kind: "code", url: "https://github.com/rett40/caisse" }]
    },
    sections: [
      {
        type: "features",
        title: { fr: "Fonctionnalités Clés", en: "Key Features" },
        items: [
          {
            icon: "👥",
            title: { fr: "Gestion des utilisateurs", en: "User management" },
            desc: {
              fr: "Système de rôles Admin / Caissier avec authentification JWT.",
              en: "Admin / Cashier role system with JWT authentication."
            }
          },
          {
            icon: "🏬",
            title: { fr: "Multi-magasins", en: "Multi-store" },
            desc: {
              fr: "Produits et stocks spécifiques par point de vente.",
              en: "Store-specific products and inventory."
            }
          },
          {
            icon: "📊",
            title: { fr: "Dashboard analytique", en: "Analytical dashboard" },
            desc: {
              fr: "Indicateurs de performance et visualisations Chart.js.",
              en: "Performance indicators and Chart.js visualizations."
            }
          },
          {
            icon: "💳",
            title: { fr: "Système de caisse", en: "Cash register" },
            desc: {
              fr: "Gestion des transactions et clôtures de caisse.",
              en: "Transaction management and register closings."
            }
          },
          {
            icon: "🧾",
            title: { fr: "Reporting complet", en: "Full reporting" },
            desc: {
              fr: "Rapports de facturation avec export PDF / Excel.",
              en: "Billing reports with PDF / Excel export."
            }
          },
          {
            icon: "🕘",
            title: { fr: "Historique des ventes", en: "Sales history" },
            desc: {
              fr: "Traçabilité des factures et des clôtures.",
              en: "Invoice and closing traceability."
            }
          }
        ]
      },
      {
        type: "gallery",
        title: { fr: "Galerie du Projet", en: "Project Gallery" },
        categories: [
          {
            title: { fr: "Administration & Gestion", en: "Administration & Management" },
            description: {
              fr: "Gestion des utilisateurs, des produits, des catégories et des points de vente.",
              en: "User, product, category and store management."
            },
            screenshots: [
              { url: img2, alt: { fr: "Gestion des utilisateurs", en: "User management" } },
              { url: img3, alt: { fr: "Gestion des produits et catégories", en: "Product and category management" } },
              { url: img4, alt: { fr: "Gestion des points de vente", en: "Store management" } }
            ]
          },
          {
            title: { fr: "Ventes & Reporting", en: "Sales & Reporting" },
            description: {
              fr: "Tableau de bord, historique des factures, rapports globaux et espace caissier.",
              en: "Dashboard, invoice history, global reports and cashier area."
            },
            screenshots: [
              { url: img7, alt: { fr: "Tableau de bord analytique", en: "Analytics dashboard" } },
              { url: img5, alt: { fr: "Historique des factures", en: "Invoice history" } },
              { url: img6, alt: { fr: "Rapport de facturation globale", en: "Global billing report" } },
              { url: img8, alt: { fr: "Liste des clôtures de caisse", en: "Register closings list" } },
              { url: img9, alt: { fr: "Espace caissier", en: "Cashier area" } }
            ]
          }
        ]
      },
      {
        type: "tags",
        title: { fr: "Technologies Utilisées", en: "Technologies Used" },
        tags: ["React.js", "Node.js", "Express", "MySQL", "JWT", "Chart.js", "REST API"]
      }
    ]
  }
};

export default function ProjectDetail({ lang = "fr", theme = "light" }) {
  const { id } = useParams();
  const navigate = useNavigate();
  const project = projects[id];

  if (!project) {
    return (
      <div style={{ padding: "2rem" }}>
        <button
          onClick={() => navigate(-1)}
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "0.5rem",
            padding: "0.7rem 1.4rem",
            borderRadius: "12px",
            border: "1px solid #dbe7f0",
            cursor: "pointer"
          }}
        >
          <FaArrowLeft /> {lang === "fr" ? "Retour aux projets" : "Back to projects"}
        </button>
        <p style={{ marginTop: "1.5rem" }}>
          {lang === "fr" ? "Projet introuvable" : "Project not found"}
        </p>
      </div>
    );
  }

  return <ProjectPage lang={lang} theme={theme} project={project} />;
}
