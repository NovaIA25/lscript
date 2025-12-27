'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { useState } from 'react';

const visualizations = [
  {
    slug: 'comment-fonctionne-le-web',
    title: 'Comment fonctionne le web',
    description: 'Visualise le cycle requête/réponse entre ton navigateur et le serveur.',
    preview: ['🖥️', '→', '🗄️'],
    duration: '5 min',
    ready: true,
  },
  {
    slug: 'frontend-backend',
    title: 'Frontend vs Backend',
    description: 'Découvre ce qui se passe côté client (navigateur) et côté serveur.',
    preview: ['💻', '⟷', '🗃️'],
    duration: '6 min',
    ready: true,
  },
  {
    slug: 'cest-quoi-une-api',
    title: 'C\'est quoi une API ?',
    description: 'Comprends comment les applications communiquent entre elles via les APIs.',
    preview: ['📱', '🔌', '⚡'],
    duration: '5 min',
    ready: true,
  },
  {
    slug: 'base-de-donnees-crud',
    title: 'Base de données et CRUD',
    description: 'Apprends les 4 opérations essentielles : Create, Read, Update, Delete.',
    preview: ['🗄️', '✏️', '🔍'],
    duration: '6 min',
    ready: true,
  },
];

export default function VisualisationsPage() {
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);

  return (
    <div className="page-content" style={{
      paddingTop: 'var(--space-20)',
      paddingBottom: 'var(--space-24)',
      background: 'var(--color-gradient-subtle)',
      minHeight: '100vh'
    }}>
      <div className="container" style={{ maxWidth: '1200px' }}>
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          style={{
            textAlign: 'center',
            padding: '0 var(--space-6)',
            maxWidth: '900px',
            margin: '0 auto var(--space-20)'
          }}
        >
          <motion.span
            className="article-category-badge"
            style={{
              marginBottom: 'var(--space-8)',
              background: 'linear-gradient(135deg, var(--color-accent) 0%, var(--color-accent-hover) 100%)',
              color: 'white',
              padding: 'var(--space-2) var(--space-6)',
              boxShadow: '0 4px 20px rgba(249, 115, 22, 0.3)'
            }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            ✨ Apprendre visuellement
          </motion.span>

          <motion.h1
            style={{
              fontSize: 'clamp(2.5rem, 5vw, 4rem)',
              marginBottom: 'var(--space-8)',
              letterSpacing: 'var(--tracking-tight)',
              background: 'linear-gradient(135deg, var(--color-text) 0%, var(--color-accent) 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              fontWeight: 'var(--weight-extrabold)'
            }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            Visualisations 3D Interactives
          </motion.h1>

          <div className="section-separator" style={{
            background: 'linear-gradient(90deg, transparent 0%, var(--color-accent) 50%, transparent 100%)',
            height: '2px'
          }} />

          <motion.p
            style={{
              fontSize: 'var(--text-xl)',
              color: 'var(--color-text-secondary)',
              lineHeight: '1.8',
              marginBottom: 'var(--space-12)',
              maxWidth: '700px',
              margin: '0 auto var(--space-12)'
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            Certains concepts sont difficiles à comprendre avec du texte.
            Ces visualisations te montrent <strong style={{ color: 'var(--color-accent)' }}>visuellement</strong> comment le web fonctionne —
            étape par étape, à ton rythme.
          </motion.p>

          {/* Why Visual Learning */}
          <motion.div
            className="viz-features-grid"
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
              gap: 'var(--space-6)',
              textAlign: 'center',
              padding: 'var(--space-10)',
              background: 'var(--color-surface)',
              borderRadius: 'var(--radius-2xl)',
              marginTop: 'var(--space-12)',
              border: '1px solid var(--color-border)',
              boxShadow: '0 10px 40px rgba(0, 0, 0, 0.08)'
            }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
          >
            {[
              { emoji: '🎯', title: 'Concret', desc: 'Pas de théorie abstraite' },
              { emoji: '⏱️', title: 'Rapide', desc: '5 min pour comprendre' },
              { emoji: '🧠', title: 'Mémorable', desc: 'Tu retiens mieux' }
            ].map((feature, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -5, scale: 1.05 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                <div style={{ fontSize: '2.5rem', marginBottom: 'var(--space-3)' }}>{feature.emoji}</div>
                <div style={{
                  fontWeight: 'var(--weight-bold)',
                  marginBottom: 'var(--space-2)',
                  fontSize: 'var(--text-lg)',
                  color: 'var(--color-text)'
                }}>
                  {feature.title}
                </div>
                <div style={{ fontSize: 'var(--text-sm)', color: 'var(--color-text-muted)' }}>
                  {feature.desc}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Visualizations Grid */}
        <div style={{ marginTop: 'var(--space-20)' }}>
          <motion.h2
            style={{
              fontSize: 'var(--text-3xl)',
              marginBottom: 'var(--space-12)',
              textAlign: 'center',
              fontWeight: 'var(--weight-bold)'
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
          >
            🚀 Explore les visualisations
          </motion.h2>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: 'var(--space-8)'
          }}>
            {visualizations.map((viz, index) => (
              <motion.div
                key={viz.slug}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9 + index * 0.1, duration: 0.5 }}
                onHoverStart={() => setHoveredCard(viz.slug)}
                onHoverEnd={() => setHoveredCard(null)}
                whileHover={{ y: -8 }}
              >
                <Link
                  href={`/visualisations/${viz.slug}`}
                  style={{ textDecoration: 'none', display: 'block' }}
                >
                  <div
                    className="card-premium corner-accent"
                    style={{
                      opacity: viz.ready ? 1 : 0.7,
                      position: 'relative',
                      overflow: 'hidden',
                      height: '100%',
                      background: hoveredCard === viz.slug
                        ? 'linear-gradient(135deg, var(--color-surface) 0%, var(--color-bg-subtle) 100%)'
                        : 'var(--color-surface)',
                      transition: 'all 0.3s ease',
                      border: hoveredCard === viz.slug
                        ? '1px solid var(--color-accent)'
                        : '1px solid var(--color-border)',
                      boxShadow: hoveredCard === viz.slug
                        ? '0 20px 60px rgba(249, 115, 22, 0.2)'
                        : '0 4px 20px rgba(0, 0, 0, 0.08)'
                    }}
                  >
                    {/* Preview Area with animated emojis */}
                    <div style={{
                      background: hoveredCard === viz.slug
                        ? 'linear-gradient(135deg, rgba(249, 115, 22, 0.1) 0%, rgba(251, 146, 60, 0.05) 100%)'
                        : 'linear-gradient(135deg, rgba(0,0,0,0.02) 0%, rgba(0,0,0,0.01) 100%)',
                      padding: 'var(--space-12) var(--space-6)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: 'var(--space-4)',
                      minHeight: '140px',
                      transition: 'all 0.3s ease'
                    }}>
                      {viz.preview.map((item, i) => (
                        <motion.span
                          key={i}
                          style={{
                            fontSize: i === 1 ? 'var(--text-2xl)' : 'var(--text-5xl)',
                            opacity: i === 1 ? 0.5 : 1
                          }}
                          animate={{
                            scale: hoveredCard === viz.slug ? [1, 1.1, 1] : 1,
                            rotate: hoveredCard === viz.slug && i !== 1 ? [0, 5, -5, 0] : 0
                          }}
                          transition={{
                            duration: 0.5,
                            repeat: hoveredCard === viz.slug ? Infinity : 0,
                            repeatDelay: 1
                          }}
                        >
                          {item}
                        </motion.span>
                      ))}
                    </div>

                    {/* Content */}
                    <div style={{ padding: 'var(--space-6)' }}>
                      <div style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'flex-start',
                        marginBottom: 'var(--space-3)'
                      }}>
                        <h3 style={{
                          fontSize: 'var(--text-xl)',
                          fontWeight: 'var(--weight-bold)',
                          color: 'var(--color-text)',
                          transition: 'color 0.3s ease'
                        }}>
                          {viz.title}
                        </h3>
                        {viz.ready && (
                          <span style={{
                            padding: 'var(--space-1) var(--space-3)',
                            background: hoveredCard === viz.slug
                              ? 'var(--color-accent-light)'
                              : 'var(--color-surface-hover)',
                            color: hoveredCard === viz.slug
                              ? 'var(--color-accent)'
                              : 'var(--color-text-muted)',
                            borderRadius: 'var(--radius-full)',
                            fontSize: 'var(--text-xs)',
                            fontWeight: 600,
                            transition: 'all 0.3s ease'
                          }}>
                            {viz.duration}
                          </span>
                        )}
                      </div>

                      <p style={{
                        fontSize: 'var(--text-base)',
                        color: 'var(--color-text-muted)',
                        lineHeight: 'var(--leading-relaxed)',
                        marginBottom: 'var(--space-6)'
                      }}>
                        {viz.description}
                      </p>

                      <motion.div
                        className="btn-premium"
                        style={{
                          width: '100%',
                          justifyContent: 'center',
                          textAlign: 'center',
                          display: 'flex',
                          alignItems: 'center',
                          gap: 'var(--space-2)'
                        }}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        Lancer la visualisation
                        <span style={{ fontSize: '1.2rem' }}>→</span>
                      </motion.div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <motion.div
          className="section-premium-cta"
          style={{
            marginTop: 'var(--space-24)',
            background: 'linear-gradient(135deg, var(--color-accent) 0%, var(--color-accent-hover) 100%)',
            borderRadius: 'var(--radius-2xl)',
            padding: 'var(--space-12)',
            textAlign: 'center',
            boxShadow: '0 20px 60px rgba(249, 115, 22, 0.3)'
          }}
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="cta-premium-content">
            <h2 style={{
              marginBottom: 'var(--space-4)',
              color: 'white',
              fontSize: 'var(--text-3xl)',
              fontWeight: 'var(--weight-bold)'
            }}>
              📚 Tu préfères lire ?
            </h2>
            <p style={{
              lineHeight: '1.7',
              marginBottom: 'var(--space-8)',
              color: 'rgba(255, 255, 255, 0.95)',
              fontSize: 'var(--text-lg)',
              maxWidth: '600px',
              margin: '0 auto var(--space-8)'
            }}>
              Les visualisations complètent les articles. Tu peux aussi tout apprendre avec le guide complet.
            </p>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                href="/guide"
                style={{
                  display: 'inline-block',
                  padding: 'var(--space-4) var(--space-8)',
                  background: 'white',
                  color: 'var(--color-accent)',
                  borderRadius: 'var(--radius-lg)',
                  fontWeight: 'var(--weight-bold)',
                  textDecoration: 'none',
                  fontSize: 'var(--text-lg)',
                  boxShadow: '0 10px 30px rgba(0, 0, 0, 0.2)'
                }}
              >
                Voir le guide complet →
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
