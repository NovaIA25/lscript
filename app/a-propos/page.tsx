'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

export default function AboutPage() {
  return (
    <div className="page-content article-page-premium" style={{
      paddingTop: 'var(--space-20)',
      paddingBottom: 'var(--space-24)',
      background: 'var(--color-gradient-subtle)',
      minHeight: '100vh'
    }}>
      <div className="container" style={{ maxWidth: '900px' }}>
        {/* Header */}
        <motion.header
          className="article-header"
          style={{
            marginBottom: 'var(--space-16)',
            textAlign: 'center',
            padding: '0 var(--space-6)'
          }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            style={{
              display: 'inline-block',
              marginBottom: 'var(--space-8)'
            }}
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <span style={{
              fontSize: '4rem',
              display: 'block',
              marginBottom: 'var(--space-4)'
            }}>
              📚
            </span>
          </motion.div>

          <motion.h1
            style={{
              marginBottom: 'var(--space-6)',
              fontSize: 'clamp(2.5rem, 5vw, 4rem)',
              background: 'linear-gradient(135deg, var(--color-text) 0%, var(--color-accent) 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              fontWeight: 'var(--weight-extrabold)'
            }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            À propos de Lscript
          </motion.h1>

          <motion.p
            className="article-meta"
            style={{
              fontSize: 'var(--text-2xl)',
              lineHeight: '1.6',
              color: 'var(--color-text-secondary)',
              maxWidth: '600px',
              margin: '0 auto'
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.6 }}
          >
            Apprendre le développement, <strong style={{ color: 'var(--color-accent)' }}>simplement</strong>.
          </motion.p>
        </motion.header>

        {/* Content */}
        <motion.div
          className="article-content"
          style={{ lineHeight: '1.8' }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.6 }}
        >
          <motion.section
            style={{
              background: 'var(--color-surface)',
              padding: 'var(--space-10)',
              borderRadius: 'var(--radius-2xl)',
              marginBottom: 'var(--space-12)',
              border: '1px solid var(--color-border)',
              boxShadow: '0 10px 40px rgba(0, 0, 0, 0.08)'
            }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.6 }}
          >
            <h2 style={{
              marginTop: 0,
              marginBottom: 'var(--space-6)',
              fontSize: 'var(--text-3xl)',
              color: 'var(--color-accent)'
            }}>
              🎯 Notre mission
            </h2>
            <p style={{
              marginBottom: 'var(--space-6)',
              fontSize: 'var(--text-lg)',
              lineHeight: '1.8'
            }}>
              <strong>Rendre le développement accessible à tous</strong>, sans jargon technique,
              sans prérequis, et 100% gratuitement.
            </p>

            <p style={{ marginBottom: 'var(--space-6)', fontSize: 'var(--text-lg)' }}>
              Quand on veut apprendre à coder, on se retrouve vite perdu.
              Trop de ressources. Trop de jargon. Trop de formations qui supposent
              qu'on sait déjà des choses qu'on ne sait pas.
            </p>

            <p style={{ marginBottom: 0, fontSize: 'var(--text-lg)' }}>
              <strong style={{ color: 'var(--color-accent)' }}>Lscript</strong> est né de cette frustration. L'idée est simple :
              expliquer le développement avec des mots que tout le monde peut comprendre.
            </p>
          </motion.section>

          <motion.section
            style={{ marginTop: 'var(--space-16)' }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
          >
            <h2 style={{
              marginBottom: 'var(--space-10)',
              fontSize: 'var(--text-3xl)',
              textAlign: 'center'
            }}>
              💡 Notre approche
            </h2>
            <p style={{
              marginBottom: 'var(--space-10)',
              fontSize: 'var(--text-lg)',
              textAlign: 'center',
              color: 'var(--color-text-secondary)'
            }}>
              Chaque article répond à <strong style={{ color: 'var(--color-accent)' }}>une seule question</strong>. Pas plus.
              L'objectif n'est pas d'être exhaustif, mais d'être <strong>clair</strong>.
            </p>

            <div className="cards-premium-grid" style={{
              margin: 'var(--space-12) 0 var(--space-16)',
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
              gap: 'var(--space-6)'
            }}>
              {[
                { icon: '💬', title: 'Mots simples', desc: 'Pas de jargon inutile. Des explications accessibles à tous.' },
                { icon: '🎨', title: 'Exemples concrets', desc: 'Du quotidien, pas abstrait. Des analogies que tu connais déjà.' },
                { icon: '🎁', title: '100% gratuit', desc: 'Sans publicité intrusive. Le savoir doit être accessible.' }
              ].map((item, i) => (
                <motion.div
                  key={i}
                  className="card-premium"
                  style={{
                    background: 'var(--color-surface)',
                    padding: 'var(--space-8)',
                    borderRadius: 'var(--radius-xl)',
                    border: '1px solid var(--color-border)',
                    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)',
                    textAlign: 'center'
                  }}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.9 + i * 0.1, duration: 0.5 }}
                  whileHover={{
                    y: -8,
                    boxShadow: '0 12px 40px rgba(249, 115, 22, 0.2)',
                    borderColor: 'var(--color-accent)'
                  }}
                >
                  <div style={{ fontSize: '3rem', marginBottom: 'var(--space-4)' }}>{item.icon}</div>
                  <h3 style={{
                    fontSize: 'var(--text-xl)',
                    fontWeight: 'var(--weight-bold)',
                    marginBottom: 'var(--space-3)',
                    color: 'var(--color-text)'
                  }}>
                    {item.title}
                  </h3>
                  <p style={{
                    fontSize: 'var(--text-base)',
                    color: 'var(--color-text-muted)',
                    lineHeight: '1.6',
                    margin: 0
                  }}>
                    {item.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.section>

          <motion.section
            style={{
              background: 'var(--color-surface)',
              padding: 'var(--space-10)',
              borderRadius: 'var(--radius-2xl)',
              marginTop: 'var(--space-16)',
              marginBottom: 'var(--space-12)',
              border: '1px solid var(--color-border)',
              boxShadow: '0 10px 40px rgba(0, 0, 0, 0.08)'
            }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.6 }}
          >
            <h2 style={{
              marginTop: 0,
              marginBottom: 'var(--space-6)',
              fontSize: 'var(--text-3xl)',
              color: 'var(--color-accent)'
            }}>
              👥 Pour qui ?
            </h2>
            <p style={{ marginBottom: 'var(--space-6)', fontSize: 'var(--text-lg)' }}>
              Ce site est fait pour toi si tu es :
            </p>
            <ul style={{ marginBottom: 0, paddingLeft: 'var(--space-6)' }}>
              {[
                '🎓 Débutant complet — tu n\'as jamais codé',
                '🔄 En reconversion — tu veux changer de métier',
                '🤔 Curieux — tu veux juste comprendre comment ça marche'
              ].map((item, i) => (
                <motion.li
                  key={i}
                  style={{
                    marginBottom: 'var(--space-4)',
                    fontSize: 'var(--text-lg)',
                    lineHeight: '1.8'
                  }}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 1.3 + i * 0.1, duration: 0.4 }}
                >
                  {item}
                </motion.li>
              ))}
            </ul>
          </motion.section>

          <motion.section
            style={{
              background: 'linear-gradient(135deg, var(--color-accent-light) 0%, var(--color-surface) 100%)',
              padding: 'var(--space-10)',
              borderRadius: 'var(--radius-2xl)',
              marginTop: 'var(--space-16)',
              marginBottom: 'var(--space-12)',
              border: '2px solid var(--color-accent)',
              boxShadow: '0 10px 40px rgba(249, 115, 22, 0.2)'
            }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.5, duration: 0.6 }}
          >
            <h2 style={{
              marginTop: 0,
              marginBottom: 'var(--space-6)',
              fontSize: 'var(--text-3xl)',
              color: 'var(--color-accent)'
            }}>
              🧑‍💻 Qui est derrière Lscript ?
            </h2>
            <p style={{ marginBottom: 'var(--space-6)', fontSize: 'var(--text-lg)' }}>
              Lscript est un projet indépendant, créé par un développeur passionné
              qui a lui-même appris de façon autodidacte.
            </p>

            <p style={{ marginBottom: 0, fontSize: 'var(--text-lg)' }}>
              Une question ? Une suggestion ?{' '}
              <Link
                href="/contact"
                style={{
                  color: 'var(--color-accent)',
                  fontWeight: 'var(--weight-bold)',
                  textDecoration: 'underline'
                }}
              >
                Contacte-moi
              </Link>.
            </p>
          </motion.section>
        </motion.div>

        {/* CTA */}
        <motion.div
          className="article-footer"
          style={{
            marginTop: 'var(--space-16)',
            textAlign: 'center'
          }}
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1.7, duration: 0.6 }}
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link
              href="/blog"
              style={{
                display: 'inline-block',
                padding: 'var(--space-5) var(--space-10)',
                background: 'linear-gradient(135deg, var(--color-accent) 0%, var(--color-accent-hover) 100%)',
                color: 'white',
                borderRadius: 'var(--radius-lg)',
                fontWeight: 'var(--weight-bold)',
                fontSize: 'var(--text-lg)',
                textDecoration: 'none',
                boxShadow: '0 8px 32px rgba(249, 115, 22, 0.3)'
              }}
            >
              📚 Voir tous les articles →
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}

