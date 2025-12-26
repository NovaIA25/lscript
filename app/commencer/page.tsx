'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

const articlesDebutant = [
  {
    ordre: 1,
    slug: 'guide/programmer',
    titre: "C'est quoi programmer ?",
    description: 'Comprendre ce que signifie programmer avant de commencer.',
  },
  {
    ordre: 2,
    slug: 'guide/ordinateur',
    titre: "Comment fonctionne un ordinateur ?",
    description: 'Comprendre la machine sur laquelle tu vas coder.',
    soon: true,
  },
  {
    ordre: 3,
    slug: 'guide/web',
    titre: "Comment fonctionne le web ?",
    description: 'Sites, serveurs, navigateurs : tout comprendre.',
    soon: true,
  },
  {
    ordre: 4,
    slug: 'guide/frontend-backend',
    titre: 'Frontend vs Backend',
    description: 'Les deux côtés du développement web.',
    soon: true,
  },
  {
    ordre: 5,
    slug: 'guide/javascript',
    titre: 'À quoi sert JavaScript ?',
    description: 'Le langage qui rend les sites interactifs.',
    soon: true,
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.4,
      ease: [0.16, 1, 0.3, 1] as const,
    },
  },
};

export default function CommencerPage() {
  return (
    <div className="page-content">
      <div className="container">
        <div className="commencer-wrapper">
          {/* Hero */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="commencer-hero"
          >
            <span className="commencer-badge">🚀 Pour débutants</span>
            <h1>Par où commencer ?</h1>
            <p className="commencer-lead">
              Tu veux apprendre à coder mais tu ne sais pas par où commencer ?
              <br />
              <strong>Tu es au bon endroit.</strong>
            </p>
          </motion.div>

          {/* Conseil */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="commencer-callout"
          >
            <div className="commencer-callout-icon">💡</div>
            <div className="commencer-callout-content">
              <strong>Conseil</strong>
              <p>
                Lis les chapitres dans l'ordre. Chaque concept s'appuie sur le précédent.
                Pas besoin de prérequis — on part de zéro.
              </p>
            </div>
          </motion.div>

          {/* Parcours */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h2 className="commencer-section-title">Le parcours recommandé</h2>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="commencer-steps"
          >
            {articlesDebutant.map((article) => (
              <motion.div 
                key={article.slug} 
                variants={itemVariants}
                className={`commencer-step ${article.soon ? 'commencer-step-soon' : ''}`}
              >
                <div className={`commencer-step-number ${article.soon ? 'commencer-step-number-muted' : ''}`}>
                  {article.ordre}
                </div>
                <div className="commencer-step-content">
                  {article.soon ? (
                    <>
                      <h3>{article.titre}</h3>
                      <p>{article.description}</p>
                      <span className="commencer-soon-badge">Bientôt disponible</span>
                    </>
                  ) : (
                    <Link href={`/${article.slug}`} className="commencer-step-link">
                      <h3>{article.titre}</h3>
                      <p>{article.description}</p>
                      <span className="commencer-read-link">Lire →</span>
                    </Link>
                  )}
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* CTA */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="commencer-cta"
          >
            <p>Prêt à comprendre le développement ?</p>
            <Link href="/guide/programmer" className="btn btn-primary btn-large">
              Commencer le guide →
            </Link>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
