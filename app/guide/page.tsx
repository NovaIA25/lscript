'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { chapters } from '@/lib/chapters';
import { getReadChapters, isChapterRead } from '@/lib/progress';

export default function GuidePage() {
  const [readChapters, setReadChapters] = useState<string[]>([]);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    setReadChapters(getReadChapters());
  }, []);

  const progressPercentage = Math.round((readChapters.length / chapters.length) * 100);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,
        ease: [0.16, 1, 0.3, 1] as const,
      },
    },
  };

  return (
    <div className="page-content">
      <div className="container">
        <div className="guide-index">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            style={{ textAlign: 'center', marginBottom: '3rem' }}
          >
            <span className="guide-badge">📖 Guide complet</span>
            <h1 className="guide-title">Le Guide du Développement</h1>
            <p className="guide-subtitle">
              Tout ce que tu dois savoir pour comprendre le monde du développement.
              Un guide complet, progressif, sans jargon.
            </p>
          </motion.div>

          {/* Progress bar */}
          {isClient && readChapters.length > 0 && (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              style={{
                background: 'var(--color-surface)',
                border: '2px solid var(--color-border)',
                borderRadius: 'var(--radius-lg)',
                padding: 'var(--space-6)',
                marginBottom: 'var(--space-8)',
              }}
            >
              <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                marginBottom: 'var(--space-3)',
              }}>
                <div>
                  <p style={{
                    fontSize: 'var(--text-sm)',
                    fontWeight: 'var(--weight-semibold)',
                    color: 'var(--color-text)',
                    marginBottom: 'var(--space-1)',
                  }}>
                    📊 Ta progression
                  </p>
                  <p style={{
                    fontSize: 'var(--text-xs)',
                    color: 'var(--color-text-muted)',
                  }}>
                    {readChapters.length} / {chapters.length} chapitres terminés
                  </p>
                </div>
                <div style={{
                  fontSize: 'var(--text-2xl)',
                  fontWeight: 'var(--weight-bold)',
                  color: 'var(--color-primary)',
                }}>
                  {progressPercentage}%
                </div>
              </div>

              {/* Progress bar */}
              <div style={{
                width: '100%',
                height: '12px',
                background: 'var(--color-border)',
                borderRadius: 'var(--radius-full)',
                overflow: 'hidden',
              }}>
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${progressPercentage}%` }}
                  transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
                  style={{
                    height: '100%',
                    background: 'linear-gradient(90deg, var(--color-primary), var(--color-accent))',
                    borderRadius: 'var(--radius-full)',
                  }}
                />
              </div>

              {progressPercentage === 100 && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1 }}
                  style={{
                    marginTop: 'var(--space-4)',
                    padding: 'var(--space-3)',
                    background: 'linear-gradient(135deg, #f6d365 0%, #fda085 100%)',
                    borderRadius: 'var(--radius-md)',
                    textAlign: 'center',
                  }}
                >
                  <span style={{ fontSize: 'var(--text-lg)' }}>
                    🎉 Bravo ! Tu as terminé le guide complet !
                  </span>
                </motion.div>
              )}
            </motion.div>
          )}

          {/* Progress info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="guide-callout"
          >
            <div className="guide-callout-icon">💡</div>
            <div className="guide-callout-content">
              <strong>Comment lire ce guide ?</strong>
              <p>
                Lis les chapitres dans l'ordre. Chaque concept s'appuie sur le précédent.
                Prends ton temps — il n'y a pas de rush. Ta progression est sauvegardée automatiquement.
              </p>
            </div>
          </motion.div>

          {/* Chapters list */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="guide-chapters"
          >
            {chapters.map((chapter, index) => {
              const isRead = isClient && isChapterRead(chapter.slug);

              // Difficulty badge
              const difficultyConfig = {
                beginner: { label: 'Débutant', emoji: '🟢' },
                intermediate: { label: 'Intermédiaire', emoji: '🟡' },
                advanced: { label: 'Avancé', emoji: '🔴' },
              };

              const difficulty = chapter.difficulty && difficultyConfig[chapter.difficulty];

              return (
                <motion.div key={chapter.slug} variants={itemVariants}>
                  <Link
                    href={`/guide/${chapter.slug}`}
                    className="guide-chapter-card"
                    style={{
                      position: 'relative',
                      opacity: isRead ? 0.8 : 1,
                    }}
                  >
                    <div className="guide-chapter-number">
                      {chapter.id === 0 ? '👋' : chapter.id}
                    </div>
                    <div className="guide-chapter-content">
                      <h3>
                        {chapter.title}
                        {difficulty && (
                          <span className={`difficulty-badge difficulty-${chapter.difficulty}`}>
                            {difficulty.emoji} {difficulty.label}
                          </span>
                        )}
                        {isRead && (
                          <span style={{
                            marginLeft: 'var(--space-2)',
                            fontSize: 'var(--text-xs)',
                            padding: 'var(--space-1) var(--space-2)',
                            background: 'var(--color-success)',
                            color: 'white',
                            borderRadius: 'var(--radius-sm)',
                            fontWeight: 'var(--weight-medium)',
                          }}>
                            ✓ Terminé
                          </span>
                        )}
                      </h3>
                      <p>{chapter.description}</p>
                    </div>
                    <div className="guide-chapter-arrow">→</div>
                  </Link>
                </motion.div>
              );
            })}
          </motion.div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            style={{ textAlign: 'center', marginTop: '3rem' }}
          >
            <Link href="/guide/introduction" className="btn btn-primary btn-large">
              {isClient && readChapters.length > 0 ? 'Continuer le guide' : 'Commencer le guide'} →
            </Link>
          </motion.div>
        </div>
      </div>
    </div>
  );
}