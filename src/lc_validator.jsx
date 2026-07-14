// LC-Validator – Page projet (Mémoire de fin d'études, Excellia Solution 2026)
// Plateforme intelligente d'analyse de risque des lettres de crédit (XAI)
import React, { useState, useEffect } from "react";
import {
  FaArrowLeft,
  FaArrowRight,
  FaTimes,
  FaImages,
  FaRocket,
  FaFileInvoice,
  FaLayerGroup,
  FaBrain,
  FaDatabase,
  FaServer,
  FaDesktop,
  FaCloudUploadAlt,
  FaSearch,
  FaTags,
  FaExclamationTriangle,
  FaCheckCircle,
  FaPuzzlePiece,
  FaBolt,
  FaUserShield,
  FaChartPie,
  FaShieldAlt,
  FaBalanceScale,
  FaGlobe,
  FaLightbulb,
  FaMicrochip,
  FaExchangeAlt,
  FaFilePdf
} from "react-icons/fa";
import { useNavigate } from "react-router-dom";

// ====== Screenshots ======
import scAccueil from "./screenshots/capture_lc_validator/acceuil.PNG";
import scServices from "./screenshots/capture_lc_validator/nos_service.PNG";
import scLogin from "./screenshots/capture_lc_validator/login.PNG";
import scDepotMt700 from "./screenshots/capture_lc_validator/depot_mt700.PNG";
import scDepotComm from "./screenshots/capture_lc_validator/depo-document_comm.PNG";
import scEntites from "./screenshots/capture_lc_validator/entité-extracte.PNG";
import scClauses from "./screenshots/capture_lc_validator/clasification_des_clause.PNG";
import scValidChamp from "./screenshots/capture_lc_validator/validation_champ.PNG";
import scValidUcp from "./screenshots/capture_lc_validator/validation-ucp.PNG";
import scValidCoherence from "./screenshots/capture_lc_validator/validation_coherance1.PNG";
import scValidExterne from "./screenshots/capture_lc_validator/validation_extrene.PNG";
import scRisqueMl from "./screenshots/capture_lc_validator/risque-ml1.PNG";
import scRisqueMl2 from "./screenshots/capture_lc_validator/risque-ml2.PNG";
import scXaiScore from "./screenshots/capture_lc_validator/xia-score.PNG";
import scXaiRisque from "./screenshots/capture_lc_validator/xia-type_risque.PNG";
import scExtractInvoice from "./screenshots/capture_lc_validator/release2_extraction_invoice1.PNG";
import scExtractBl from "./screenshots/capture_lc_validator/release2_extraction_bl.PNG";
import scExtractPl from "./screenshots/capture_lc_validator/release2_extraction_pl1.PNG";
import scVueGlobalR2 from "./screenshots/capture_lc_validator/release2_vue_global.PNG";
import scSemantique from "./screenshots/capture_lc_validator/release2-sementique.PNG";
import scRegle from "./screenshots/capture_lc_validator/release2_regle.PNG";
import scContradiction from "./screenshots/capture_lc_validator/release2_contraduction.PNG";
import scCrossVal from "./screenshots/capture_lc_validator/coh-mt700-com.PNG";
import scCrossXai from "./screenshots/capture_lc_validator/coh-mt700_comm_xia1.PNG";
import scRapport from "./screenshots/capture_lc_validator/rapport_mt700.PNG";
import scVueGlobal from "./screenshots/capture_lc_validator/analyse-vue-global.PNG";
import scDashAdmin from "./screenshots/capture_lc_validator/dashboard_admin.PNG";
import scGestionAgent from "./screenshots/capture_lc_validator/gestion_agent.PNG";
import scRapportAdmin from "./screenshots/capture_lc_validator/gestion_rapport_admin.PNG";

// ====== Contenu bilingue ======
const content = {
  hero: {
    title: "LC-Validator",
    subtitle: {
      fr: "Plateforme intelligente d'analyse de risque et de validation des Lettres de Crédit documentaires (SWIFT MT700), basée sur l'Intelligence Artificielle Explicable (XAI).",
      en: "Intelligent platform for risk analysis and validation of documentary Letters of Credit (SWIFT MT700), powered by Explainable AI (XAI)."
    },
    role: {
      fr: "Data Scientist & Développeur Full-Stack AI",
      en: "Data Scientist & Full-Stack AI Developer"
    },
    context: {
      fr: "Mémoire de fin d'études (Master ISIDS) — Excellia Solution (2026)",
      en: "Master's graduation thesis (ISIDS) — Excellia Solution (2026)"
    },
    pitch: {
      fr: "Un écosystème complet de 8 microservices IA organisés en deux pipelines séquentiels : le premier valide le message SWIFT MT700 (extraction NER, conformité UCP 600, cohérence interne, screening des sanctions, scoring de risque ML), le second valide les documents commerciaux (connaissement, facture, packing list) et leur cohérence croisée avec le MT700. Chaque décision est expliquée par un moteur XAI (SHAP, valeurs de Shapley, graphe causal), garantissant l'auditabilité exigée en milieu bancaire.",
      en: "A complete ecosystem of 8 AI microservices organized into two sequential pipelines: the first validates the SWIFT MT700 message (NER extraction, UCP 600 compliance, internal consistency, sanctions screening, ML risk scoring), the second validates the commercial documents (Bill of Lading, invoice, packing list) and their cross-consistency with the MT700. Every decision is explained by an XAI engine (SHAP, Shapley values, causal graph), ensuring the auditability required in banking."
    }
  },
  stackGroups: [
    {
      domain: { fr: "Frontend", en: "Frontend" },
      color: "#22d3ee",
      techs: [{ name: "Angular", icon: "🅰️" }]
    },
    {
      domain: { fr: "Backend & Sécurité", en: "Backend & Security" },
      color: "#34d399",
      techs: [
        { name: "Spring Boot", icon: "🍃" },
        { name: "PostgreSQL (JSONB)", icon: "🐘" },
        { name: "JWT / RBAC", icon: "🔐" }
      ]
    },
    {
      domain: { fr: "Pipelines IA & NLP", en: "AI & NLP Pipelines" },
      color: "#a78bfa",
      techs: [
        { name: "Python", icon: "🐍" },
        { name: "BERT (NER)", icon: "📖" },
        { name: "LayoutLMv3", icon: "🧠" },
        { name: "DeBERTa (NLI)", icon: "⚖️" },
        { name: "Sentence-BERT", icon: "🔎" },
        { name: "XGBoost + SHAP", icon: "📊" },
        { name: "ResNet-18", icon: "🖼️" },
        { name: "Hugging Face", icon: "🤗" }
      ]
    },
    {
      domain: { fr: "Infra & MLOps", en: "Infra & MLOps" },
      color: "#fb923c",
      techs: [
        { name: "Docker", icon: "🐳" },
        { name: "MinIO", icon: "🗄️" },
        { name: "MLflow", icon: "📈" },
        { name: "DVC", icon: "🧬" },
        { name: "Evidently AI", icon: "📡" }
      ]
    }
  ],
  problem: {
    title: { fr: "Le Problème Métier", en: "The Business Problem" },
    intro: {
      fr: "En banque, la vérification des Lettres de Crédit et de leurs documents (facture, connaissement, packing list) est entièrement manuelle : 6 étapes successives exécutées par des documentalistes spécialisés, sous la contrainte du délai réglementaire de 5 jours ouvrables imposé par l'UCP 600.",
      en: "In banking, checking Letters of Credit and their documents (invoice, Bill of Lading, packing list) is entirely manual: 6 successive steps performed by specialized document examiners, under the regulatory 5-business-day deadline imposed by UCP 600."
    },
    before: {
      title: { fr: "Avant — Processus manuel", en: "Before — Manual process" },
      items: {
        fr: [
          "Plusieurs heures par dossier : délai de 5 jours UCP 600 difficile à tenir",
          "Plus de 70 % des premières présentations comportent au moins une discordance",
          "Interprétation hétérogène des règles UCP 600 selon les opérateurs",
          "Décisions de rejet insuffisamment documentées : manque d'auditabilité"
        ],
        en: [
          "Several hours per file: the 5-day UCP 600 deadline is hard to meet",
          "Over 70% of first presentations contain at least one discrepancy",
          "Inconsistent interpretation of UCP 600 rules across operators",
          "Poorly documented rejection decisions: lack of auditability"
        ]
      }
    },
    after: {
      title: { fr: "Après — LC-Validator", en: "After — LC-Validator" },
      items: {
        fr: [
          "Analyse complète d'un dossier en moins de 35 secondes via deux pipelines IA",
          "98,1 % des non-conformités UCP 600 détectées, screening sanctions à 100 %",
          "Décisions homogènes : moteur de règles + score de risque ML calibré",
          "Chaque décision expliquée (XAI SHAP / graphe causal) et tracée dans un rapport PDF"
        ],
        en: [
          "Full file analysis in under 35 seconds through two AI pipelines",
          "98.1% of UCP 600 non-conformities detected, 100% sanctions screening",
          "Consistent decisions: rules engine + calibrated ML risk score",
          "Every decision explained (XAI SHAP / causal graph) and traced in a PDF report"
        ]
      }
    }
  },
  architecture: {
    title: { fr: "Architecture du Système", en: "System Architecture" },
    subtitle: {
      fr: "Une architecture full-stack découplée : 8 microservices IA conteneurisés, orchestrés par un backend Spring Boot, avec un cycle de vie MLOps complet (versioning DVC, tracking MLflow, monitoring de dérive Evidently AI).",
      en: "A decoupled full-stack architecture: 8 containerized AI microservices orchestrated by a Spring Boot backend, with a full MLOps lifecycle (DVC versioning, MLflow tracking, Evidently AI drift monitoring)."
    },
    layers: [
      {
        icon: <FaDesktop />,
        color: "#22d3ee",
        tag: { fr: "Couche Présentation", en: "Presentation Layer" },
        tech: "Angular 17",
        desc: {
          fr: "Espace Agent (dépôt MT700 et documents, résultats d'analyse, rapport PDF) et Espace Administrateur (KPIs, gestion des agents, historique global), protégés par guards RBAC.",
          en: "Agent area (MT700 & document upload, analysis results, PDF report) and Admin area (KPIs, agent management, global history), protected by RBAC guards."
        }
      },
      {
        icon: <FaServer />,
        color: "#34d399",
        tag: { fr: "Couche Métier & Orchestration", en: "Business & Orchestration Layer" },
        tech: "Spring Boot / Java 17",
        desc: {
          fr: "API Gateway qui orchestre les deux pipelines, sécurise les accès (JWT cookie HttpOnly, BCrypt, RBAC) et impose la précondition métier : le Pipeline 2 n'est déclenché que si le MT700 est jugé recevable.",
          en: "API Gateway orchestrating both pipelines, securing access (HttpOnly JWT cookie, BCrypt, RBAC) and enforcing the business precondition: Pipeline 2 only runs if the MT700 is deemed admissible."
        }
      },
      {
        icon: <FaDatabase />,
        color: "#fb923c",
        tag: { fr: "Couche Données & Stockage", en: "Data & Storage Layer" },
        tech: "PostgreSQL + MinIO",
        desc: {
          fr: "PostgreSQL avec colonnes JSONB pour les données extraites du MT700, les résultats de validation et les journaux d'audit (conservés 5 ans). MinIO pour le stockage objet des PDF bruts et des rapports générés.",
          en: "PostgreSQL with JSONB columns for extracted MT700 data, validation results and audit logs (kept 5 years). MinIO for object storage of raw PDFs and generated reports."
        }
      },
      {
        icon: <FaBrain />,
        color: "#a78bfa",
        tag: { fr: "Couche Intelligence Artificielle", en: "AI Layer" },
        tech: "Python — 8 microservices",
        desc: {
          fr: "OCR (Tesseract/EasyOCR), NER (BERT fine-tuné), analyse sémantique (Sentence-BERT), NLI (DeBERTa), validation UCP 600, cohérence interne, scoring & XAI (XGBoost + SHAP), ETL réglementaire — chacun dans son conteneur Docker, modèles montés en volume (model swap sans rebuild).",
          en: "OCR (Tesseract/EasyOCR), NER (fine-tuned BERT), semantic analysis (Sentence-BERT), NLI (DeBERTa), UCP 600 validation, internal consistency, scoring & XAI (XGBoost + SHAP), regulatory ETL — each in its own Docker container, models mounted as volumes (model swap without rebuild)."
        }
      }
    ]
  },
  pipelines: {
    title: { fr: "Les Deux Pipelines IA — Le Cœur Technique", en: "The Two AI Pipelines — Technical Core" },
    subtitle: {
      fr: "Le système respecte la logique métier des crédits documentaires : le Pipeline 1 agit comme un filtre d'éligibilité sur le MT700 ; le Pipeline 2 n'est activé que si la lettre de crédit est jugée recevable.",
      en: "The system follows documentary credit business logic: Pipeline 1 acts as an eligibility filter on the MT700; Pipeline 2 only runs if the Letter of Credit is deemed admissible."
    },
    blocks: [
      {
        badge: { fr: "Pipeline 1", en: "Pipeline 1" },
        color: "#22d3ee",
        title: {
          fr: "Validation du message SWIFT MT700",
          en: "SWIFT MT700 message validation"
        },
        subtitle: {
          fr: "Filtre d'éligibilité : du dépôt du MT700 au verdict structuré (valide / réserves mineures / invalide) avec score de risque préliminaire.",
          en: "Eligibility filter: from MT700 upload to a structured verdict (valid / minor reservations / invalid) with a preliminary risk score."
        },
        steps: [
          {
            icon: <FaCloudUploadAlt />,
            color: "#22d3ee",
            title: {
              fr: "Ingestion & Extraction hybride OCR / NER",
              en: "Ingestion & Hybrid OCR / NER Extraction"
            },
            model: { fr: "BERT fine-tuné (swift-ner) — F1 95,95 %", en: "Fine-tuned BERT (swift-ner) — F1 95.95%" },
            action: {
              fr: "L'agent dépose le MT700 (PDF natif, scanné ou texte). Le fichier est poussé vers MinIO puis traité par OCR hybride (EasyOCR + Tesseract, choix par score de confiance).",
              en: "The agent uploads the MT700 (native PDF, scan or text). The file is pushed to MinIO then processed by hybrid OCR (EasyOCR + Tesseract, selected by confidence score)."
            },
            detail: {
              fr: "Un parser à règles (tags SWIFT, regex) et un modèle NER Transformer fine-tuné sur 1 000 MT700 annotés BIO (21 labels) extraient en parallèle les 10 entités critiques (montant, devise, parties, dates, ports...). Un FusionEngine retient la valeur au score de confiance maximal — la fusion réduit le taux d'erreur de 20 % par rapport à chaque approche isolée.",
              en: "A rules-based parser (SWIFT tags, regex) and a Transformer NER model fine-tuned on 1,000 BIO-annotated MT700s (21 labels) extract the 10 critical entities in parallel (amount, currency, parties, dates, ports...). A FusionEngine keeps the value with the highest confidence — fusion cuts the error rate by 20% versus either approach alone."
            },
            image: scEntites,
            imageAlt: { fr: "Entités extraites du MT700 (NER)", en: "Entities extracted from the MT700 (NER)" }
          },
          {
            icon: <FaTags />,
            color: "#34d399",
            title: {
              fr: "Classification des clauses & Validation UCP 600",
              en: "Clause Classification & UCP 600 Validation"
            },
            model: { fr: "Sentence-BERT + moteur 3 couches — détection 98,1 %", en: "Sentence-BERT + 3-layer engine — 98.1% detection" },
            action: {
              fr: "Classifier chaque clause du crédit (type fonctionnel + niveau de risque) et vérifier la conformité aux 39 articles pertinents de l'UCP 600.",
              en: "Classify every credit clause (functional type + risk level) and check compliance against the 39 relevant UCP 600 articles."
            },
            detail: {
              fr: "Défense en profondeur à trois couches : règles déterministes (regex, confiance 0,99), alignement sémantique clause ↔ article UCP 600 par similarité cosinus (MiniLM), et inférence NLI (CrossEncoder DeBERTa) pour les cas ambigus. Décision ACCEPT / REVIEW / REJECT avec seulement 3,4 % de faux positifs.",
              en: "Three-layer defense in depth: deterministic rules (regex, 0.99 confidence), semantic clause ↔ UCP 600 article alignment via cosine similarity (MiniLM), and NLI inference (DeBERTa CrossEncoder) for ambiguous cases. ACCEPT / REVIEW / REJECT decision with only 3.4% false positives."
            },
            image: scClauses,
            imageAlt: { fr: "Classification des clauses (UCP 600)", en: "Clause classification (UCP 600)" }
          },
          {
            icon: <FaGlobe />,
            color: "#fb923c",
            title: {
              fr: "Cohérence interne & Screening externe",
              en: "Internal Consistency & External Screening"
            },
            model: { fr: "DeBERTa NLI + ETL réglementaire — sanctions 100 %", en: "DeBERTa NLI + regulatory ETL — 100% sanctions" },
            action: {
              fr: "Détecter les contradictions logiques entre les tags du MT700 (dates, montants, parties, ports, devises) et contrôler pays et devises contre les référentiels internationaux.",
              en: "Detect logical contradictions between MT700 tags (dates, amounts, parties, ports, currencies) and screen countries and currencies against international watchlists."
            },
            detail: {
              fr: "Le moteur NLI (DeBERTa-v3) classe les paires de clauses en contradiction / neutre / implication (seuil 0,80) : 96,8 % des contradictions internes détectées. Un pipeline ETL agrège six sources réglementaires (OFAC, FATF, UE, ONU, Basel AML, ISO 4217) avec cache local pour un fonctionnement hors-ligne garanti.",
              en: "The NLI engine (DeBERTa-v3) classifies clause pairs as contradiction / neutral / entailment (0.80 threshold): 96.8% of internal contradictions detected. An ETL pipeline aggregates six regulatory sources (OFAC, FATF, EU, UN, Basel AML, ISO 4217) with a local cache guaranteeing offline operation."
            },
            image: scValidExterne,
            imageAlt: { fr: "Validation externe (OFAC, FATF, EU, UN)", en: "External validation (OFAC, FATF, EU, UN)" }
          },
          {
            icon: <FaChartPie />,
            color: "#f472b6",
            title: {
              fr: "Scoring de risque ML & Explicabilité XAI",
              en: "ML Risk Scoring & XAI Explainability"
            },
            model: { fr: "XGBoost calibré + SHAP — accuracy 92,5 %, AUC > 0,98", en: "Calibrated XGBoost + SHAP — 92.5% accuracy, AUC > 0.98" },
            action: {
              fr: "Produire une classification de risque triclasse (LOW / MEDIUM / HIGH) avec probabilités calibrées et détection d'anomalies.",
              en: "Produce a three-class risk label (LOW / MEDIUM / HIGH) with calibrated probabilities and anomaly detection."
            },
            detail: {
              fr: "XGBoost calibré (Platt) entraîné sur 30 000 LC synthétiques générées selon les règles UCP 600, complété par un Isolation Forest (anomalies) et un KMeans (segmentation). Le moteur de règles UCP peut court-circuiter le ML en cas de violation bloquante. Chaque prédiction est expliquée par un waterfall SHAP présenté à l'agent.",
              en: "Calibrated XGBoost (Platt) trained on 30,000 synthetic LCs generated from UCP 600 rules, complemented by an Isolation Forest (anomalies) and KMeans (segmentation). The UCP rules engine can override the ML on blocking violations. Every prediction is explained by a SHAP waterfall shown to the agent."
            },
            image: scRisqueMl,
            imageAlt: { fr: "Scoring de risque ML (XGBoost + SHAP)", en: "ML risk scoring (XGBoost + SHAP)" }
          }
        ]
      },
      {
        badge: { fr: "Pipeline 2", en: "Pipeline 2" },
        color: "#a78bfa",
        title: {
          fr: "Validation des documents commerciaux & Cohérence MT700",
          en: "Commercial documents validation & MT700 consistency"
        },
        subtitle: {
          fr: "Déclenché uniquement si le MT700 est recevable : classification, extraction, validation croisée inter-documents et concordance avec la lettre de crédit.",
          en: "Triggered only if the MT700 is admissible: classification, extraction, cross-document validation and reconciliation with the Letter of Credit."
        },
        steps: [
          {
            icon: <FaFileInvoice />,
            color: "#a78bfa",
            title: {
              fr: "Classification & Extraction multi-modale",
              en: "Classification & Multi-Modal Extraction"
            },
            model: { fr: "ResNet-18 (99,7 %) + LayoutLMv3 (F1 ≥ 0,95)", en: "ResNet-18 (99.7%) + LayoutLMv3 (F1 ≥ 0.95)" },
            action: {
              fr: "L'agent dépose 1 à 3 documents (facture, connaissement, packing list). Chaque document est identifié puis ses champs métier sont extraits automatiquement.",
              en: "The agent uploads 1 to 3 documents (invoice, Bill of Lading, packing list). Each document is identified and its business fields extracted automatically."
            },
            detail: {
              fr: "Un ResNet-18 (vote pondéré avec un classifieur par mots-clés) identifie le type de document à 99,72 %. Trois modèles LayoutLMv3 spécialisés (texte + layout + vision, 41 à 49 labels IOB2) extraient les entités via un pipeline à 4 passes (fenêtre glissante, segmentation, zones adaptatives, fusion par confiance).",
              en: "A ResNet-18 (weighted vote with a keyword classifier) identifies the document type at 99.72%. Three specialized LayoutLMv3 models (text + layout + vision, 41 to 49 IOB2 labels) extract entities through a 4-pass pipeline (sliding window, segmentation, adaptive zones, confidence fusion)."
            },
            image: scExtractInvoice,
            imageAlt: { fr: "Extraction LayoutLMv3 — Facture commerciale", en: "LayoutLMv3 extraction — Commercial invoice" }
          },
          {
            icon: <FaExchangeAlt />,
            color: "#22d3ee",
            title: {
              fr: "Validation inter-documents",
              en: "Cross-Document Validation"
            },
            model: { fr: "11 contrôles — Jaro-Winkler + MiniLM", en: "11 checks — Jaro-Winkler + MiniLM" },
            action: {
              fr: "Vérifier que les trois documents décrivent bien la même opération physique, avant toute référence au crédit.",
              en: "Verify that the three documents describe the same physical operation, before any reference to the credit."
            },
            detail: {
              fr: "11 points de concordance sur 3 paires de documents : vendeur/expéditeur et parties (matching hybride Jaro-Winkler ≥ 70 %), ports (normalisation + fuzzy matching), marchandises (similarité cosinus MiniLM ≥ 60 %), devise et Incoterm (ISO 4217), poids et volume CBM (écart ≤ 2 %).",
              en: "11 concordance checks across 3 document pairs: seller/shipper and parties (hybrid Jaro-Winkler matching ≥ 70%), ports (normalization + fuzzy matching), goods (MiniLM cosine similarity ≥ 60%), currency and Incoterm (ISO 4217), weight and CBM volume (deviation ≤ 2%)."
            },
            image: scRegle,
            imageAlt: { fr: "Règles métier inter-documents", en: "Cross-document business rules" }
          },
          {
            icon: <FaBalanceScale />,
            color: "#34d399",
            title: {
              fr: "Cross-validation avec le MT700",
              en: "Cross-Validation against the MT700"
            },
            model: { fr: "5 catégories pondérées + NLI croisé", en: "5 weighted categories + cross NLI" },
            action: {
              fr: "Confronter le dossier réconcilié aux contraintes contractuelles de la lettre de crédit et lever les divergences (discrepancies).",
              en: "Check the reconciled file against the Letter of Credit contractual constraints and raise discrepancies."
            },
            detail: {
              fr: "Score pondéré sur 5 catégories : Financier 35 % (devise stricte, montant dans la tolérance 39A), Marchandises 25 % (sémantique + couverture lexicale du champ 45A), Documentaire 20 % (46A/47A, 12 patterns contractuels), Logistique 10 % (dates 44C, ports, transbordement), Parties 10 %. Décision bancaire ACCEPT / DISCREPANT / REJECT.",
              en: "Weighted score across 5 categories: Financial 35% (strict currency, amount within 39A tolerance), Goods 25% (semantics + lexical coverage of field 45A), Documentary 20% (46A/47A, 12 contractual patterns), Logistics 10% (44C dates, ports, transhipment), Parties 10%. Banking decision ACCEPT / DISCREPANT / REJECT."
            },
            image: scCrossVal,
            imageAlt: { fr: "Cross-validation MT700 / documents commerciaux", en: "MT700 / commercial documents cross-validation" }
          },
          {
            icon: <FaLightbulb />,
            color: "#f472b6",
            title: {
              fr: "Moteur XAI causal & Rapport final",
              en: "Causal XAI Engine & Final Report"
            },
            model: { fr: "Shapley exact + DAG causal + contrefactuel", en: "Exact Shapley + causal DAG + counterfactual" },
            action: {
              fr: "Expliquer la décision, identifier les causes racines et fournir un plan de remédiation priorisé à l'agent.",
              en: "Explain the decision, identify root causes and give the agent a prioritized remediation plan."
            },
            detail: {
              fr: "6 niveaux d'explicabilité : valeurs de Shapley exactes par contrôle, waterfall de décomposition, explications en langage naturel citant les articles UCP 600, scoring probabiliste (Monte Carlo 1 500 tirages), graphe causal DAG (causes racines) et simulation contrefactuelle (« si je corrige X, la décision bascule-t-elle ? »). Rapport PDF consolidé généré en moins de 5 secondes.",
              en: "6 explainability levels: exact Shapley values per check, decomposition waterfall, natural-language explanations citing UCP 600 articles, probabilistic scoring (1,500-run Monte Carlo), causal DAG (root causes) and counterfactual simulation (\"if I fix X, does the decision flip?\"). Consolidated PDF report generated in under 5 seconds."
            },
            image: scCrossXai,
            imageAlt: { fr: "Analyse XAI de cohérence MT700 / commercial", en: "XAI consistency analysis MT700 / commercial" }
          }
        ]
      }
    ]
  },
  models: {
    title: { fr: "Les Points Forts IA du Projet", en: "AI Highlights of the Project" },
    subtitle: {
      fr: "Chaque brique a été fine-tunée, évaluée (méthodologie CRISP-DM) et déployée avec un cycle MLOps complet.",
      en: "Every component was fine-tuned, evaluated (CRISP-DM methodology) and deployed with a full MLOps lifecycle."
    },
    items: [
      {
        name: "BERT NER fine-tuné",
        metric: "F1 95,95 %",
        desc: {
          fr: "Modèle swift-ner fine-tuné sur 1 000 MT700 annotés BIO (21 labels). Fusion hybride parser à règles / NER par score de confiance.",
          en: "swift-ner model fine-tuned on 1,000 BIO-annotated MT700s (21 labels). Hybrid rules-parser / NER fusion by confidence score."
        }
      },
      {
        name: "LayoutLMv3 multi-modal",
        metric: "F1 ≥ 0,95",
        desc: {
          fr: "Texte + position + vision. 3 modèles spécialisés (BL, facture, packing list), pipeline d'extraction en 4 passes anti-perte d'entités.",
          en: "Text + layout + vision. 3 specialized models (BL, invoice, packing list), 4-pass extraction pipeline preventing entity loss."
        }
      },
      {
        name: "DeBERTa NLI",
        metric: { fr: "Contradictions 96,8 %", en: "96.8% contradictions" },
        desc: {
          fr: "Inférence en langage naturel (contradiction / neutre / implication, seuil 0,80) pour détecter les clauses contradictoires intra-MT700 et inter-documents.",
          en: "Natural language inference (contradiction / neutral / entailment, 0.80 threshold) detecting contradictory clauses within the MT700 and across documents."
        }
      },
      {
        name: "Sentence-BERT / MiniLM",
        metric: { fr: "Analyse sémantique", en: "Semantic analysis" },
        desc: {
          fr: "Similarité cosinus clause ↔ article UCP 600 et concordance des descriptions de marchandises (champ 45A vs facture).",
          en: "Cosine similarity clause ↔ UCP 600 article and goods description matching (field 45A vs invoice)."
        }
      },
      {
        name: "XGBoost calibré + SHAP/LIME",
        metric: "92,5 % · AUC > 0,98",
        desc: {
          fr: "Scoring de risque triclasse à probabilités calibrées (Platt, Brier < 0,06), Isolation Forest pour les anomalies, attributions SHAP par prédiction.",
          en: "Three-class risk scoring with calibrated probabilities (Platt, Brier < 0.06), Isolation Forest for anomalies, SHAP attributions per prediction."
        }
      },
      {
        name: "ResNet-18",
        metric: "99,72 %",
        desc: {
          fr: "Classification visuelle du type de document, entraînée sur 1 200 documents synthétiques couvrant 64 layouts paramétriques.",
          en: "Visual document type classification, trained on 1,200 synthetic documents covering 64 parametric layouts."
        }
      },
      {
        name: { fr: "Moteur XAI causal", en: "Causal XAI engine" },
        metric: { fr: "6 niveaux", en: "6 levels" },
        desc: {
          fr: "Valeurs de Shapley exactes, waterfall, explications citant l'UCP 600, Monte Carlo, graphe causal DAG et simulation contrefactuelle.",
          en: "Exact Shapley values, waterfall, explanations citing UCP 600, Monte Carlo, causal DAG and counterfactual simulation."
        }
      },
      {
        name: "MLOps",
        metric: "DVC · MLflow · Evidently",
        desc: {
          fr: "Versioning des données, tracking des expériences, registre de modèles, détection de dérive et model swap sans rebuild (volumes Docker).",
          en: "Data versioning, experiment tracking, model registry, drift detection and model swap without rebuild (Docker volumes)."
        }
      }
    ]
  },
  challenges: {
    title: { fr: "Défis Techniques & Solutions", en: "Technical Challenges & Solutions" },
    items: [
      {
        icon: <FaPuzzlePiece />,
        challenge: {
          fr: "Hétérogénéité des documents commerciaux",
          en: "Commercial document heterogeneity"
        },
        solution: {
          fr: "Puissance multi-modale de LayoutLMv3 (texte + layout + vision) entraîné sur 64 layouts paramétriques réalistes (armateurs, ports, Incoterms 2020), avec mécanisme de rattrapage géométrique pour les entités difficiles.",
          en: "LayoutLMv3's multi-modal power (text + layout + vision) trained on 64 realistic parametric layouts (carriers, ports, Incoterms 2020), with a geometric fallback mechanism for difficult entities."
        }
      },
      {
        icon: <FaDatabase />,
        challenge: {
          fr: "Absence de données réelles annotées (confidentialité bancaire)",
          en: "No annotated real data (banking confidentiality)"
        },
        solution: {
          fr: "Génération synthétique pilotée par les règles métier : 30 000 LC pour le scoring, 1 000 MT700 annotés BIO (Faker + gabarits + LLM) et 1 200 documents commerciaux, avec injection de bruit documentaire réaliste sur les jeux de test.",
          en: "Business-rule-driven synthetic generation: 30,000 LCs for scoring, 1,000 BIO-annotated MT700s (Faker + templates + LLM) and 1,200 commercial documents, with realistic documentary noise injected into the test sets."
        }
      },
      {
        icon: <FaBalanceScale />,
        challenge: {
          fr: "Explicabilité exigée par le contexte réglementaire",
          en: "Explainability required by the regulatory context"
        },
        solution: {
          fr: "XAI de bout en bout : le moteur de règles UCP 600 peut court-circuiter le ML (conformité absolue), et chaque score est décomposé (SHAP, Shapley exact, DAG causal, contrefactuel) en explications lisibles par un agent non technicien.",
          en: "End-to-end XAI: the UCP 600 rules engine can override the ML (absolute compliance), and every score is decomposed (SHAP, exact Shapley, causal DAG, counterfactual) into explanations readable by a non-technical agent."
        }
      },
      {
        icon: <FaBolt />,
        challenge: {
          fr: "Industrialisation & temps d'inférence des modèles",
          en: "Industrialization & model inference time"
        },
        solution: {
          fr: "Stack IA isolée en 8 microservices Python conteneurisés (Docker Compose, healthchecks, réseau isolé), modèles (~27 Go) montés en volumes pour un model swap sans rebuild — dossier complet traité en < 35 s.",
          en: "AI stack isolated into 8 containerized Python microservices (Docker Compose, healthchecks, isolated network), models (~27 GB) mounted as volumes for rebuild-free model swap — full file processed in < 35s."
        }
      }
    ]
  },
  results: {
    title: { fr: "Résultats & Impacts", en: "Results & Impact" },
    stats: [
      {
        value: "< 35 s",
        label: {
          fr: "pour analyser un dossier complet, contre plusieurs heures de traitement manuel",
          en: "to analyze a complete file, versus several hours of manual processing"
        }
      },
      {
        value: "95,95 %",
        label: {
          fr: "F1 du NER BERT fine-tuné sur l'extraction des entités du MT700",
          en: "F1 of the fine-tuned BERT NER on MT700 entity extraction"
        }
      },
      {
        value: "98,1 %",
        label: {
          fr: "des non-conformités UCP 600 détectées, avec moins de 3,4 % de faux positifs",
          en: "of UCP 600 non-conformities detected, with under 3.4% false positives"
        }
      },
      {
        value: "92,5 %",
        label: {
          fr: "d'accuracy du scoring de risque XGBoost calibré (AUC > 0,98 sur les 3 classes)",
          en: "accuracy of the calibrated XGBoost risk scoring (AUC > 0.98 on all 3 classes)"
        }
      },
      {
        value: "99,7 %",
        label: {
          fr: "de précision sur la classification des documents commerciaux (ResNet-18)",
          en: "accuracy on commercial document classification (ResNet-18)"
        }
      },
      {
        value: "100 %",
        label: {
          fr: "auditable : chaque décision expliquée (XAI) et tracée dans un rapport PDF généré en < 5 s",
          en: "auditable: every decision explained (XAI) and traced in a PDF report generated in < 5s"
        }
      }
    ]
  },
  gallery: {
    title: { fr: "Galerie du Projet", en: "Project Gallery" },
    categories: [
      {
        id: "interface",
        icon: <FaDesktop />,
        title: { fr: "Interface & Espace Client", en: "Interface & Client Area" },
        description: {
          fr: "Portail Angular : page d'accueil publique, présentation des services et authentification sécurisée (JWT / RBAC).",
          en: "Angular portal: public home page, services overview and secure authentication (JWT / RBAC)."
        },
        screenshots: [
          { url: scAccueil, alt: { fr: "Page d'accueil de la plateforme", en: "Platform home page" } },
          { url: scServices, alt: { fr: "Présentation des services", en: "Services overview" } },
          { url: scLogin, alt: { fr: "Authentification sécurisée", en: "Secure login" } }
        ]
      },
      {
        id: "p1-analyse",
        icon: <FaSearch />,
        title: { fr: "Pipeline 1 — Analyse du MT700", en: "Pipeline 1 — MT700 Analysis" },
        description: {
          fr: "Dépôt du message SWIFT, extraction NER, classification des clauses et validation des champs et de la conformité UCP 600.",
          en: "SWIFT message upload, NER extraction, clause classification, field validation and UCP 600 compliance."
        },
        screenshots: [
          { url: scDepotMt700, alt: { fr: "Dépôt du message MT700", en: "MT700 message upload" } },
          { url: scVueGlobal, alt: { fr: "Vue globale des résultats d'analyse", en: "Global analysis results view" } },
          { url: scEntites, alt: { fr: "Entités extraites (NER BERT)", en: "Extracted entities (BERT NER)" } },
          { url: scClauses, alt: { fr: "Classification des clauses", en: "Clause classification" } },
          { url: scValidChamp, alt: { fr: "Validation des champs SWIFT", en: "SWIFT field validation" } },
          { url: scValidUcp, alt: { fr: "Validation de conformité UCP 600", en: "UCP 600 compliance validation" } }
        ]
      },
      {
        id: "p1-risque",
        icon: <FaChartPie />,
        title: { fr: "Pipeline 1 — Cohérence, Risque ML & XAI", en: "Pipeline 1 — Consistency, ML Risk & XAI" },
        description: {
          fr: "Cohérence interne, screening des sanctions (OFAC, FATF, EU, UN), scoring XGBoost avec waterfall SHAP et score global XAI.",
          en: "Internal consistency, sanctions screening (OFAC, FATF, EU, UN), XGBoost scoring with SHAP waterfall and global XAI score."
        },
        screenshots: [
          { url: scValidCoherence, alt: { fr: "Cohérence interne du MT700", en: "MT700 internal consistency" } },
          { url: scValidExterne, alt: { fr: "Validation externe (sanctions)", en: "External validation (sanctions)" } },
          { url: scRisqueMl, alt: { fr: "Score de risque ML (XGBoost)", en: "ML risk score (XGBoost)" } },
          { url: scRisqueMl2, alt: { fr: "Waterfall SHAP — contribution des features", en: "SHAP waterfall — feature contributions" } },
          { url: scXaiScore, alt: { fr: "Score global XAI et résumé exécutif", en: "Global XAI score and executive summary" } },
          { url: scXaiRisque, alt: { fr: "Classification du type de risque", en: "Risk type classification" } }
        ]
      },
      {
        id: "p2-extraction",
        icon: <FaFileInvoice />,
        title: { fr: "Pipeline 2 — Extraction des Documents Commerciaux", en: "Pipeline 2 — Commercial Document Extraction" },
        description: {
          fr: "Dépôt multi-documents et extraction LayoutLMv3 sur la facture, le connaissement (Bill of Lading) et la packing list.",
          en: "Multi-document upload and LayoutLMv3 extraction on the invoice, Bill of Lading and packing list."
        },
        screenshots: [
          { url: scDepotComm, alt: { fr: "Dépôt des documents commerciaux", en: "Commercial documents upload" } },
          { url: scExtractInvoice, alt: { fr: "Extraction — Facture commerciale", en: "Extraction — Commercial invoice" } },
          { url: scExtractBl, alt: { fr: "Extraction — Bill of Lading", en: "Extraction — Bill of Lading" } },
          { url: scExtractPl, alt: { fr: "Extraction — Packing List", en: "Extraction — Packing List" } }
        ]
      },
      {
        id: "p2-coherence",
        icon: <FaExchangeAlt />,
        title: { fr: "Pipeline 2 — Cohérence & Cross-Validation MT700", en: "Pipeline 2 — Consistency & MT700 Cross-Validation" },
        description: {
          fr: "Validation sémantique, règles métier, détection des contradictions (NLI) et concordance croisée avec la lettre de crédit.",
          en: "Semantic validation, business rules, contradiction detection (NLI) and cross-reconciliation with the Letter of Credit."
        },
        screenshots: [
          { url: scVueGlobalR2, alt: { fr: "Vue globale des résultats Pipeline 2", en: "Pipeline 2 global results view" } },
          { url: scSemantique, alt: { fr: "Analyse sémantique des marchandises", en: "Semantic goods analysis" } },
          { url: scRegle, alt: { fr: "Règles métier inter-documents", en: "Cross-document business rules" } },
          { url: scContradiction, alt: { fr: "Contradictions détectées (NLI DeBERTa)", en: "Detected contradictions (DeBERTa NLI)" } },
          { url: scCrossVal, alt: { fr: "Cross-validation MT700 / documents", en: "MT700 / documents cross-validation" } },
          { url: scCrossXai, alt: { fr: "Analyse XAI de cohérence globale", en: "Global consistency XAI analysis" } }
        ]
      },
      {
        id: "rapports",
        icon: <FaFilePdf />,
        title: { fr: "Rapports & Auditabilité", en: "Reports & Auditability" },
        description: {
          fr: "Rapport de validation PDF généré automatiquement (< 5 s) : décision, anomalies, articles UCP 600 cités et plan de remédiation.",
          en: "Automatically generated PDF validation report (< 5s): decision, anomalies, cited UCP 600 articles and remediation plan."
        },
        screenshots: [
          { url: scRapport, alt: { fr: "Rapport de validation MT700 (PDF)", en: "MT700 validation report (PDF)" } }
        ]
      },
      {
        id: "admin",
        icon: <FaUserShield />,
        title: { fr: "Administration & Supervision (MLOps)", en: "Administration & Supervision (MLOps)" },
        description: {
          fr: "Back-office : tableau de bord des KPIs (détection de dérives de décision), gestion des comptes agents et historique global des rapports.",
          en: "Back-office: KPI dashboard (decision drift detection), agent account management and global report history."
        },
        screenshots: [
          { url: scDashAdmin, alt: { fr: "Tableau de bord administrateur", en: "Admin dashboard" } },
          { url: scGestionAgent, alt: { fr: "Gestion des agents", en: "Agent management" } },
          { url: scRapportAdmin, alt: { fr: "Historique et gestion des rapports", en: "Report history and management" } }
        ]
      }
    ]
  }
};

const ui = {
  back: { fr: "Retour aux projets", en: "Back to projects" },
  stack: { fr: "Stack Technologique", en: "Technology Stack" },
  observation: { fr: "Le constat", en: "The observation" },
  action: { fr: "Action", en: "Action" },
  mechanism: { fr: "Mécanisme", en: "How it works" },
  step: { fr: "Étape", en: "Step" },
  challenge: { fr: "Défi", en: "Challenge" },
  solution: { fr: "Solution", en: "Solution" }
};

// Helper : certains champs sont soit une string, soit un objet {fr, en}
const t = (val, lang) => (typeof val === "string" ? val : val[lang]);

// ====== Thèmes ======
const lightTheme = `
  .lcv-container.light {
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
  .lcv-container.dark {
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
  .lcv-container {
    min-height: 100vh;
    padding: 2rem;
    background: var(--bg-primary);
    color: var(--text-primary);
    transition: background 0.3s ease, color 0.3s ease;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  }

  .lcv-content {
    max-width: 1200px;
    margin: 0 auto;
    position: relative;
    z-index: 1;
  }

  .lcv-back-button {
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

  .lcv-back-button:hover {
    background: var(--accent-primary);
    color: #04141c;
    transform: translateX(-5px);
    border-color: var(--accent-primary);
  }

  /* ===== Hero ===== */
  .lcv-hero {
    position: relative;
    text-align: center;
    padding: 3.5rem 2rem 2.5rem;
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

  .lcv-hero::before {
    content: '';
    position: absolute;
    inset: 0 0 auto 0;
    height: 3px;
    background: linear-gradient(90deg, #22d3ee, #60a5fa, #a78bfa);
  }

  .lcv-hero h1 {
    font-size: 3.2rem;
    font-weight: 800;
    letter-spacing: -0.02em;
    margin: 0 0 0.75rem;
    background: linear-gradient(120deg, var(--accent-primary), var(--accent-secondary));
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }

  .lcv-hero .lcv-subtitle {
    font-size: 1.2rem;
    color: var(--text-secondary);
    max-width: 800px;
    margin: 0 auto 1.5rem;
    line-height: 1.55;
  }

  .lcv-meta {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 0.75rem;
    margin-bottom: 1.75rem;
  }

  .lcv-meta-chip {
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

  .lcv-meta-chip svg {
    color: var(--accent-primary);
  }

  .lcv-pitch {
    max-width: 860px;
    margin: 0 auto 2rem;
    padding: 1.25rem 1.5rem;
    border-left: 4px solid var(--accent-primary);
    border-radius: 0 14px 14px 0;
    background: var(--code-bg);
    color: var(--text-secondary);
    font-size: 1.02rem;
    line-height: 1.65;
    text-align: left;
  }

  /* ===== Stack badges ===== */
  .lcv-stack-title {
    font-size: 0.85rem;
    text-transform: uppercase;
    letter-spacing: 0.15em;
    color: var(--text-secondary);
    margin-bottom: 1rem;
    font-weight: 700;
  }

  .lcv-stack-groups {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 1rem;
  }

  .lcv-stack-group {
    border: 1px solid var(--card-border);
    border-radius: 14px;
    padding: 0.85rem 1rem;
    background: var(--bg-secondary);
    min-width: 180px;
    max-width: 340px;
    transition: transform 0.25s ease, box-shadow 0.25s ease, border-color 0.25s ease;
  }

  .lcv-stack-group:hover {
    transform: translateY(-4px);
    box-shadow: var(--shadow-md);
    border-color: var(--group-color);
  }

  .lcv-stack-domain {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    font-size: 0.78rem;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.08em;
    color: var(--group-color);
    margin-bottom: 0.6rem;
  }

  .lcv-stack-domain::before {
    content: '';
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: var(--group-color);
    box-shadow: 0 0 8px var(--group-color);
    flex-shrink: 0;
  }

  .lcv-stack-badges {
    display: flex;
    flex-wrap: wrap;
    gap: 0.4rem;
  }

  .lcv-badge {
    display: inline-flex;
    align-items: center;
    gap: 0.35rem;
    padding: 0.32rem 0.7rem;
    border-radius: 8px;
    font-size: 0.83rem;
    font-weight: 600;
    background: var(--code-bg);
    border: 1px solid var(--card-border);
    color: var(--text-primary);
    transition: all 0.25s ease;
  }

  .lcv-badge:hover {
    border-color: var(--group-color);
    color: var(--group-color);
  }

  /* ===== Sections ===== */
  .lcv-section {
    background: var(--card-bg);
    border: 1px solid var(--card-border);
    border-radius: 20px;
    padding: 2.25rem;
    margin-bottom: 2.5rem;
    box-shadow: var(--shadow-md);
  }

  .lcv-section-title {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    font-size: 1.6rem;
    font-weight: 700;
    margin: 0 0 0.5rem;
    color: var(--text-primary);
  }

  .lcv-section-title svg {
    color: var(--accent-primary);
    flex-shrink: 0;
  }

  .lcv-section-sub {
    color: var(--text-secondary);
    margin: 0 0 1.75rem;
    line-height: 1.6;
  }

  /* ===== Problème : Avant / Après ===== */
  .lcv-observation {
    padding: 1rem 1.25rem;
    border-radius: 12px;
    background: var(--code-bg);
    border: 1px dashed var(--card-border);
    color: var(--text-secondary);
    margin-bottom: 1.5rem;
    line-height: 1.6;
  }

  .lcv-observation strong {
    color: var(--text-primary);
  }

  .lcv-compare {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1.5rem;
  }

  .lcv-compare-card {
    border-radius: 16px;
    padding: 1.5rem;
    border: 1px solid var(--card-border);
    background: var(--bg-secondary);
    transition: transform 0.25s ease, box-shadow 0.25s ease;
  }

  .lcv-compare-card:hover {
    transform: translateY(-4px);
    box-shadow: var(--shadow-lg);
  }

  .lcv-compare-card.before {
    border-top: 4px solid var(--danger);
  }

  .lcv-compare-card.after {
    border-top: 4px solid var(--success);
  }

  .lcv-compare-header {
    display: flex;
    align-items: center;
    gap: 0.6rem;
    font-weight: 700;
    font-size: 1.1rem;
    margin-bottom: 1rem;
  }

  .lcv-compare-card.before .lcv-compare-header { color: var(--danger); }
  .lcv-compare-card.after .lcv-compare-header { color: var(--success); }

  .lcv-compare-list {
    list-style: none;
    padding: 0;
    margin: 0;
    display: grid;
    gap: 0.7rem;
  }

  .lcv-compare-list li {
    display: flex;
    gap: 0.6rem;
    align-items: flex-start;
    color: var(--text-secondary);
    font-size: 0.95rem;
    line-height: 1.55;
  }

  .lcv-compare-card.before .lcv-compare-list li::before {
    content: '✕';
    color: var(--danger);
    font-weight: 700;
    flex-shrink: 0;
  }

  .lcv-compare-card.after .lcv-compare-list li::before {
    content: '✓';
    color: var(--success);
    font-weight: 700;
    flex-shrink: 0;
  }

  /* ===== Architecture ===== */
  .lcv-arch {
    display: grid;
    gap: 0;
  }

  .lcv-arch-layer {
    display: flex;
    gap: 1.25rem;
    align-items: flex-start;
    padding: 1.4rem 1.5rem;
    border-radius: 14px;
    border: 1px solid var(--card-border);
    background: var(--bg-secondary);
    transition: transform 0.25s ease, border-color 0.25s ease, box-shadow 0.25s ease;
  }

  .lcv-arch-layer:hover {
    transform: translateX(8px);
    border-color: var(--layer-color);
    box-shadow: var(--shadow-md);
  }

  .lcv-arch-connector {
    width: 2px;
    height: 22px;
    margin-left: calc(1.5rem + 24px);
    background: linear-gradient(to bottom, var(--card-border), var(--accent-primary));
  }

  .lcv-arch-icon {
    width: 50px;
    height: 50px;
    border-radius: 12px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.4rem;
    flex-shrink: 0;
    color: var(--layer-color);
    background: color-mix(in srgb, var(--layer-color) 12%, transparent);
    border: 1px solid var(--layer-color);
  }

  .lcv-arch-body h3 {
    margin: 0 0 0.35rem;
    font-size: 1.1rem;
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    gap: 0.6rem;
  }

  .lcv-arch-tech {
    font-size: 0.72rem;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.06em;
    padding: 0.2rem 0.6rem;
    border-radius: 999px;
    color: var(--layer-color);
    border: 1px solid var(--layer-color);
  }

  .lcv-arch-body p {
    margin: 0;
    color: var(--text-secondary);
    font-size: 0.95rem;
    line-height: 1.6;
  }

  /* ===== Pipelines ===== */
  .lcv-pipeline-block {
    margin-bottom: 3rem;
  }

  .lcv-pipeline-block:last-child {
    margin-bottom: 0;
  }

  .lcv-pipeline-head {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    gap: 0.75rem;
    margin-bottom: 0.4rem;
  }

  .lcv-pipeline-badge {
    display: inline-flex;
    align-items: center;
    padding: 0.3rem 0.9rem;
    border-radius: 999px;
    font-size: 0.8rem;
    font-weight: 800;
    text-transform: uppercase;
    letter-spacing: 0.1em;
    color: #04141c;
    background: var(--block-color);
    box-shadow: 0 0 14px color-mix(in srgb, var(--block-color) 45%, transparent);
  }

  .lcv-pipeline-head h3 {
    margin: 0;
    font-size: 1.3rem;
    color: var(--text-primary);
  }

  .lcv-pipeline-sub {
    color: var(--text-secondary);
    font-size: 0.95rem;
    line-height: 1.6;
    margin: 0 0 1.5rem;
  }

  .lcv-pipeline {
    position: relative;
    display: grid;
    gap: 2rem;
    padding-left: 2.4rem;
  }

  .lcv-pipeline::before {
    content: '';
    position: absolute;
    left: 21px;
    top: 24px;
    bottom: 24px;
    width: 2px;
    background: linear-gradient(to bottom, #22d3ee, #34d399, #fb923c, #f472b6);
    opacity: 0.5;
  }

  .lcv-step {
    position: relative;
    border: 1px solid var(--card-border);
    border-radius: 16px;
    background: var(--bg-secondary);
    padding: 1.5rem;
    transition: transform 0.3s ease, border-color 0.3s ease, box-shadow 0.3s ease;
  }

  .lcv-step:hover {
    transform: translateY(-4px);
    border-color: var(--step-color);
    box-shadow: 0 10px 30px color-mix(in srgb, var(--step-color) 22%, transparent);
  }

  .lcv-step-node {
    position: absolute;
    left: -2.4rem;
    top: 1.4rem;
    width: 44px;
    height: 44px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.1rem;
    color: var(--step-color);
    background: var(--card-bg);
    border: 2px solid var(--step-color);
    box-shadow: 0 0 0 6px var(--bg-primary);
    transition: all 0.3s ease;
    z-index: 1;
  }

  .lcv-step:hover .lcv-step-node {
    background: var(--step-color);
    color: #04141c;
    box-shadow: 0 0 0 6px var(--bg-primary), 0 0 18px var(--step-color);
  }

  .lcv-step-head {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    gap: 0.75rem;
    margin-bottom: 0.9rem;
  }

  .lcv-step-number {
    font-size: 0.75rem;
    font-weight: 800;
    text-transform: uppercase;
    letter-spacing: 0.12em;
    color: var(--step-color);
  }

  .lcv-step-head h4 {
    margin: 0;
    font-size: 1.15rem;
    flex: 1 1 100%;
    color: var(--text-primary);
  }

  .lcv-step-model {
    display: inline-flex;
    align-items: center;
    gap: 0.4rem;
    font-size: 0.78rem;
    font-weight: 700;
    padding: 0.28rem 0.75rem;
    border-radius: 999px;
    color: var(--step-color);
    background: color-mix(in srgb, var(--step-color) 12%, transparent);
    border: 1px solid var(--step-color);
  }

  .lcv-step-grid {
    display: grid;
    grid-template-columns: 1.4fr 1fr;
    gap: 1.4rem;
    align-items: start;
  }

  .lcv-step-text p {
    margin: 0 0 0.8rem;
    color: var(--text-secondary);
    font-size: 0.95rem;
    line-height: 1.65;
  }

  .lcv-step-text p:last-child { margin-bottom: 0; }

  .lcv-step-label {
    font-size: 0.72rem;
    font-weight: 800;
    text-transform: uppercase;
    letter-spacing: 0.1em;
    color: var(--step-color);
    display: block;
    margin-bottom: 0.25rem;
  }

  .lcv-step-shot {
    border-radius: 12px;
    overflow: hidden;
    border: 1px solid var(--card-border);
    cursor: pointer;
    transition: transform 0.3s ease, border-color 0.3s ease;
    background: var(--code-bg);
    margin: 0;
  }

  .lcv-step-shot:hover {
    transform: scale(1.02);
    border-color: var(--step-color);
  }

  .lcv-step-shot img {
    width: 100%;
    height: 190px;
    object-fit: cover;
    object-position: top center;
    display: block;
  }

  .lcv-step-shot figcaption {
    padding: 0.5rem 0.75rem;
    font-size: 0.8rem;
    color: var(--text-secondary);
    border-top: 1px solid var(--card-border);
  }

  /* ===== Modèles / Points forts ===== */
  .lcv-models {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
    gap: 1.25rem;
  }

  .lcv-model-card {
    border: 1px solid var(--card-border);
    border-radius: 14px;
    padding: 1.3rem 1.4rem;
    background: var(--bg-secondary);
    transition: transform 0.25s ease, border-color 0.25s ease, box-shadow 0.25s ease;
  }

  .lcv-model-card:hover {
    transform: translateY(-5px);
    border-color: var(--accent-primary);
    box-shadow: var(--shadow-lg);
  }

  .lcv-model-metric {
    display: inline-block;
    font-size: 1.25rem;
    font-weight: 800;
    letter-spacing: -0.01em;
    margin-bottom: 0.4rem;
    background: linear-gradient(120deg, var(--accent-primary), var(--accent-secondary));
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }

  .lcv-model-card h3 {
    margin: 0 0 0.5rem;
    font-size: 1.02rem;
    color: var(--text-primary);
  }

  .lcv-model-card p {
    margin: 0;
    color: var(--text-secondary);
    font-size: 0.88rem;
    line-height: 1.55;
  }

  /* ===== Défis ===== */
  .lcv-challenges {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 1.5rem;
  }

  .lcv-challenge-card {
    border: 1px solid var(--card-border);
    border-radius: 16px;
    padding: 1.6rem;
    background: var(--bg-secondary);
    transition: transform 0.25s ease, border-color 0.25s ease, box-shadow 0.25s ease;
  }

  .lcv-challenge-card:hover {
    transform: translateY(-5px);
    border-color: var(--accent-primary);
    box-shadow: var(--shadow-lg);
  }

  .lcv-challenge-icon {
    width: 48px;
    height: 48px;
    border-radius: 12px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.3rem;
    color: var(--accent-primary);
    background: var(--hero-glow);
    border: 1px solid var(--accent-primary);
    margin-bottom: 1rem;
  }

  .lcv-challenge-label {
    font-size: 0.72rem;
    font-weight: 800;
    text-transform: uppercase;
    letter-spacing: 0.1em;
    display: block;
    margin-bottom: 0.3rem;
  }

  .lcv-challenge-label.problem { color: var(--danger); }
  .lcv-challenge-label.fix { color: var(--success); }

  .lcv-challenge-card h3 {
    margin: 0 0 1rem;
    font-size: 1.08rem;
  }

  .lcv-challenge-card p {
    margin: 0;
    color: var(--text-secondary);
    font-size: 0.93rem;
    line-height: 1.6;
  }

  /* ===== Résultats ===== */
  .lcv-stats {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
    gap: 1.5rem;
  }

  .lcv-stat {
    text-align: center;
    padding: 2rem 1.5rem;
    border-radius: 16px;
    border: 1px solid var(--card-border);
    background: var(--bg-secondary);
    transition: transform 0.25s ease, border-color 0.25s ease, box-shadow 0.25s ease;
  }

  .lcv-stat:hover {
    transform: translateY(-5px);
    border-color: var(--accent-primary);
    box-shadow: var(--shadow-lg);
  }

  .lcv-stat-value {
    display: block;
    font-size: 2.6rem;
    font-weight: 800;
    letter-spacing: -0.02em;
    margin-bottom: 0.5rem;
    background: linear-gradient(120deg, var(--accent-primary), var(--accent-secondary));
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }

  .lcv-stat-label {
    color: var(--text-secondary);
    font-size: 0.92rem;
    line-height: 1.5;
  }

  /* ===== Galerie ===== */
  .lcv-gallery-category {
    margin-bottom: 2rem;
    padding: 1.5rem;
    border-radius: 16px;
    border: 1px solid var(--card-border);
    background: var(--bg-secondary);
  }

  .lcv-gallery-category:last-child { margin-bottom: 0; }

  .lcv-category-header {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    margin-bottom: 0.35rem;
  }

  .lcv-category-header svg { color: var(--accent-primary); }

  .lcv-category-header h3 {
    margin: 0;
    font-size: 1.2rem;
    color: var(--accent-primary);
  }

  .lcv-category-desc {
    color: var(--text-secondary);
    font-size: 0.92rem;
    margin: 0 0 1.25rem;
    line-height: 1.5;
  }

  .lcv-shots-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
    gap: 1.25rem;
  }

  .lcv-shot {
    position: relative;
    border-radius: 12px;
    overflow: hidden;
    cursor: pointer;
    border: 1px solid var(--card-border);
    background: var(--code-bg);
    transition: transform 0.3s ease, border-color 0.3s ease, box-shadow 0.3s ease;
  }

  .lcv-shot:hover {
    transform: translateY(-5px);
    border-color: var(--accent-primary);
    box-shadow: var(--shadow-lg);
  }

  .lcv-shot img {
    width: 100%;
    height: 185px;
    object-fit: cover;
    object-position: top center;
    display: block;
    transition: transform 0.3s ease;
  }

  .lcv-shot:hover img { transform: scale(1.04); }

  .lcv-shot-caption {
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

  .lcv-shot:hover .lcv-shot-caption { transform: translateY(0); }

  /* ===== Lightbox ===== */
  .lcv-lightbox {
    position: fixed;
    inset: 0;
    background: rgba(3, 8, 15, 0.95);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 1000;
    backdrop-filter: blur(10px);
  }

  .lcv-lightbox-content {
    position: relative;
    max-width: 92%;
    max-height: 92%;
    background: var(--card-bg);
    border-radius: 16px;
    overflow: hidden;
    border: 1px solid var(--card-border);
    box-shadow: 0 25px 60px rgba(0, 0, 0, 0.6);
  }

  .lcv-lightbox-image {
    max-width: 100%;
    max-height: 74vh;
    object-fit: contain;
    display: block;
    margin: 0 auto;
  }

  .lcv-lightbox-caption {
    color: var(--text-primary);
    text-align: center;
    padding: 0.9rem 1rem;
    margin: 0;
    font-size: 1rem;
    border-top: 1px solid var(--card-border);
    background: var(--card-bg);
  }

  .lcv-close-button {
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

  .lcv-close-button:hover {
    background: rgba(255, 255, 255, 0.25);
    transform: rotate(90deg);
  }

  .lcv-nav-button {
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

  .lcv-nav-button:hover {
    background: rgba(255, 255, 255, 0.22);
    transform: translateY(-50%) scale(1.1);
  }

  .lcv-prev { left: 1.5rem; }
  .lcv-next { right: 1.5rem; }

  /* ===== Responsive ===== */
  @media (max-width: 900px) {
    .lcv-step-grid { grid-template-columns: 1fr; }
    .lcv-compare { grid-template-columns: 1fr; }
  }

  @media (max-width: 768px) {
    .lcv-container { padding: 1rem; }
    .lcv-hero h1 { font-size: 2.2rem; }
    .lcv-hero { padding: 2.5rem 1.25rem 2rem; }
    .lcv-section { padding: 1.5rem; }
    .lcv-pipeline { padding-left: 2.1rem; }
    .lcv-pipeline::before { left: 18px; }
    .lcv-step-node { left: -2.1rem; width: 38px; height: 38px; font-size: 0.95rem; }
    .lcv-nav-button { width: 46px; height: 46px; }
    .lcv-prev { left: 0.75rem; }
    .lcv-next { right: 0.75rem; }
    .lcv-stat-value { font-size: 2.1rem; }
  }
`;

export default function LcValidator({ lang = "fr", theme = "light" }) {
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

  const allImages = content.gallery.categories.flatMap((cat) => cat.screenshots);

  const openImage = (img) => {
    const idx = allImages.findIndex((i) => i.url === img.url);
    setSelectedImage(img);
    setCurrentImageIndex(idx >= 0 ? idx : 0);
  };

  const navigateImage = (direction) => {
    const len = allImages.length;
    const newIndex =
      direction === "prev"
        ? (currentImageIndex - 1 + len) % len
        : (currentImageIndex + 1) % len;
    setSelectedImage(allImages[newIndex]);
    setCurrentImageIndex(newIndex);
  };

  return (
    <div className={`lcv-container ${theme}`}>
      <div className="lcv-content">
        <button className="lcv-back-button" onClick={() => navigate(-1)}>
          <FaArrowLeft /> {ui.back[lang]}
        </button>

        {/* ===== SECTION 1 : HERO ===== */}
        <header className="lcv-hero">
          <h1>{content.hero.title}</h1>
          <p className="lcv-subtitle">{content.hero.subtitle[lang]}</p>

          <div className="lcv-meta">
            <span className="lcv-meta-chip">
              <FaUserShield /> {content.hero.role[lang]}
            </span>
            <span className="lcv-meta-chip">
              <FaFileInvoice /> {content.hero.context[lang]}
            </span>
          </div>

          <div className="lcv-pitch">{content.hero.pitch[lang]}</div>

          <div className="lcv-stack-title">{ui.stack[lang]}</div>
          <div className="lcv-stack-groups">
            {content.stackGroups.map((group) => (
              <div
                key={group.domain.en}
                className="lcv-stack-group"
                style={{ "--group-color": group.color }}
              >
                <div className="lcv-stack-domain">{group.domain[lang]}</div>
                <div className="lcv-stack-badges">
                  {group.techs.map((tech) => (
                    <span key={tech.name} className="lcv-badge">
                      <span>{tech.icon}</span> {tech.name}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </header>

        {/* ===== SECTION 2 : PROBLÈME MÉTIER ===== */}
        <section className="lcv-section">
          <h2 className="lcv-section-title">
            <FaExclamationTriangle /> {content.problem.title[lang]}
          </h2>
          <div className="lcv-observation">
            <strong>{ui.observation[lang]} : </strong>
            {content.problem.intro[lang]}
          </div>
          <div className="lcv-compare">
            <div className="lcv-compare-card before">
              <div className="lcv-compare-header">
                <FaTimes /> {content.problem.before.title[lang]}
              </div>
              <ul className="lcv-compare-list">
                {content.problem.before.items[lang].map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>
            <div className="lcv-compare-card after">
              <div className="lcv-compare-header">
                <FaCheckCircle /> {content.problem.after.title[lang]}
              </div>
              <ul className="lcv-compare-list">
                {content.problem.after.items[lang].map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* ===== SECTION 3 : ARCHITECTURE ===== */}
        <section className="lcv-section">
          <h2 className="lcv-section-title">
            <FaLayerGroup /> {content.architecture.title[lang]}
          </h2>
          <p className="lcv-section-sub">{content.architecture.subtitle[lang]}</p>
          <div className="lcv-arch">
            {content.architecture.layers.map((layer, i) => (
              <React.Fragment key={i}>
                {i > 0 && <div className="lcv-arch-connector" />}
                <div className="lcv-arch-layer" style={{ "--layer-color": layer.color }}>
                  <div className="lcv-arch-icon">{layer.icon}</div>
                  <div className="lcv-arch-body">
                    <h3>
                      {i + 1}. {layer.tag[lang]}
                      <span className="lcv-arch-tech">{layer.tech}</span>
                    </h3>
                    <p>{layer.desc[lang]}</p>
                  </div>
                </div>
              </React.Fragment>
            ))}
          </div>
        </section>

        {/* ===== SECTION 4 : LES DEUX PIPELINES IA ===== */}
        <section className="lcv-section">
          <h2 className="lcv-section-title">
            <FaBrain /> {content.pipelines.title[lang]}
          </h2>
          <p className="lcv-section-sub">{content.pipelines.subtitle[lang]}</p>

          {content.pipelines.blocks.map((block, bIdx) => (
            <div
              key={bIdx}
              className="lcv-pipeline-block"
              style={{ "--block-color": block.color }}
            >
              <div className="lcv-pipeline-head">
                <span className="lcv-pipeline-badge">{block.badge[lang]}</span>
                <h3>{block.title[lang]}</h3>
              </div>
              <p className="lcv-pipeline-sub">{block.subtitle[lang]}</p>

              <div className="lcv-pipeline">
                {block.steps.map((step, i) => (
                  <div key={i} className="lcv-step" style={{ "--step-color": step.color }}>
                    <div className="lcv-step-node">{step.icon}</div>
                    <div className="lcv-step-head">
                      <span className="lcv-step-number">
                        {ui.step[lang]} {String(i + 1).padStart(2, "0")}
                      </span>
                      <span className="lcv-step-model">🧠 {step.model[lang]}</span>
                      <h4>{step.title[lang]}</h4>
                    </div>
                    <div className="lcv-step-grid">
                      <div className="lcv-step-text">
                        <p>
                          <span className="lcv-step-label">{ui.action[lang]}</span>
                          {step.action[lang]}
                        </p>
                        <p>
                          <span className="lcv-step-label">{ui.mechanism[lang]}</span>
                          {step.detail[lang]}
                        </p>
                      </div>
                      <figure
                        className="lcv-step-shot"
                        onClick={() => openImage({ url: step.image, alt: step.imageAlt })}
                      >
                        <img src={step.image} alt={step.imageAlt[lang]} loading="lazy" />
                        <figcaption>{step.imageAlt[lang]}</figcaption>
                      </figure>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </section>

        {/* ===== SECTION 5 : POINTS FORTS IA ===== */}
        <section className="lcv-section">
          <h2 className="lcv-section-title">
            <FaMicrochip /> {content.models.title[lang]}
          </h2>
          <p className="lcv-section-sub">{content.models.subtitle[lang]}</p>
          <div className="lcv-models">
            {content.models.items.map((m, i) => (
              <div key={i} className="lcv-model-card">
                <span className="lcv-model-metric">{t(m.metric, lang)}</span>
                <h3>{t(m.name, lang)}</h3>
                <p>{m.desc[lang]}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ===== SECTION 6 : DÉFIS & SOLUTIONS ===== */}
        <section className="lcv-section">
          <h2 className="lcv-section-title">
            <FaShieldAlt /> {content.challenges.title[lang]}
          </h2>
          <div className="lcv-challenges">
            {content.challenges.items.map((item, i) => (
              <div key={i} className="lcv-challenge-card">
                <div className="lcv-challenge-icon">{item.icon}</div>
                <span className="lcv-challenge-label problem">
                  {ui.challenge[lang]} {i + 1}
                </span>
                <h3>{item.challenge[lang]}</h3>
                <span className="lcv-challenge-label fix">{ui.solution[lang]}</span>
                <p>{item.solution[lang]}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ===== SECTION 7 : RÉSULTATS ===== */}
        <section className="lcv-section">
          <h2 className="lcv-section-title">
            <FaRocket /> {content.results.title[lang]}
          </h2>
          <div className="lcv-stats">
            {content.results.stats.map((stat, i) => (
              <div key={i} className="lcv-stat">
                <span className="lcv-stat-value">{stat.value}</span>
                <span className="lcv-stat-label">{stat.label[lang]}</span>
              </div>
            ))}
          </div>
        </section>

        {/* ===== GALERIE ===== */}
        <section className="lcv-section">
          <h2 className="lcv-section-title">
            <FaImages /> {content.gallery.title[lang]}
          </h2>
          {content.gallery.categories.map((category) => (
            <div key={category.id} className="lcv-gallery-category">
              <div className="lcv-category-header">
                {category.icon}
                <h3>{category.title[lang]}</h3>
              </div>
              <p className="lcv-category-desc">{category.description[lang]}</p>
              <div className="lcv-shots-grid">
                {category.screenshots.map((img, i) => (
                  <div key={i} className="lcv-shot" onClick={() => openImage(img)}>
                    <img src={img.url} alt={img.alt[lang]} loading="lazy" />
                    <p className="lcv-shot-caption">{img.alt[lang]}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </section>
      </div>

      {/* ===== Lightbox ===== */}
      {selectedImage && (
        <div className="lcv-lightbox" onClick={() => setSelectedImage(null)}>
          <button
            className="lcv-nav-button lcv-prev"
            onClick={(e) => {
              e.stopPropagation();
              navigateImage("prev");
            }}
          >
            <FaArrowLeft />
          </button>

          <div className="lcv-lightbox-content" onClick={(e) => e.stopPropagation()}>
            <button
              className="lcv-close-button"
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
              className="lcv-lightbox-image"
            />
            <p className="lcv-lightbox-caption">{selectedImage.alt[lang]}</p>
          </div>

          <button
            className="lcv-nav-button lcv-next"
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
