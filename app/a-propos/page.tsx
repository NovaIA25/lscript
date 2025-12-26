import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'À propos de Lscript — Apprendre le développement simplement',
  description: 'Découvre la mission de Lscript : rendre le développement web et mobile accessible à tous les débutants, sans jargon et 100% gratuit.',
};

export default function AboutPage() {
  return (
    <div className="page-content">
      <div className="container">
        <div style={{ maxWidth: '700px' }}>
          <h1>À propos de Lscript</h1>
          
          <div className="article-content" style={{ marginTop: '2rem' }}>
            
            {/* Mission */}
            <div style={{ 
              background: 'var(--color-accent-light)', 
              padding: 'var(--space-6)', 
              borderRadius: 'var(--radius-lg)',
              marginBottom: 'var(--space-8)',
              borderLeft: '4px solid var(--color-accent)'
            }}>
              <h2 style={{ marginTop: 0, fontSize: 'var(--text-xl)' }}>🎯 Notre mission</h2>
              <p style={{ marginBottom: 0, fontSize: 'var(--text-lg)' }}>
                <strong>Rendre le développement accessible à tous</strong>, sans jargon technique, 
                sans prérequis, et 100% gratuitement.
              </p>
            </div>

            <h2>Pourquoi Lscript existe</h2>
            <p>
              Quand on veut apprendre à coder, on se retrouve vite perdu. 
              Trop de ressources. Trop de jargon. Trop de formations qui supposent 
              qu'on sait déjà des choses qu'on ne sait pas.
            </p>
            <p>
              <strong>Lscript</strong> est né de cette frustration. L'idée est simple : 
              expliquer le développement avec des mots que tout le monde peut comprendre.
            </p>

            <h2>Notre approche</h2>
            <p>
              Chaque article répond à <strong>une seule question</strong>. Pas plus. 
              L'objectif n'est pas d'être exhaustif, mais d'être clair.
            </p>
            
            <div style={{ 
              display: 'grid', 
              gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', 
              gap: 'var(--space-4)',
              marginTop: 'var(--space-4)',
              marginBottom: 'var(--space-6)'
            }}>
              <div style={{ 
                padding: 'var(--space-4)', 
                background: 'var(--color-surface)', 
                borderRadius: 'var(--radius-md)',
                border: '1px solid var(--color-border)'
              }}>
                <span style={{ fontSize: '1.5rem' }}>💬</span>
                <p style={{ margin: 'var(--space-2) 0 0', fontWeight: 'var(--weight-medium)' }}>
                  Mots simples
                </p>
                <p style={{ margin: 0, fontSize: 'var(--text-sm)', color: 'var(--color-text-muted)' }}>
                  Pas de jargon inutile
                </p>
              </div>
              <div style={{ 
                padding: 'var(--space-4)', 
                background: 'var(--color-surface)', 
                borderRadius: 'var(--radius-md)',
                border: '1px solid var(--color-border)'
              }}>
                <span style={{ fontSize: '1.5rem' }}>🎯</span>
                <p style={{ margin: 'var(--space-2) 0 0', fontWeight: 'var(--weight-medium)' }}>
                  Exemples concrets
                </p>
                <p style={{ margin: 0, fontSize: 'var(--text-sm)', color: 'var(--color-text-muted)' }}>
                  Du quotidien, pas abstrait
                </p>
              </div>
              <div style={{ 
                padding: 'var(--space-4)', 
                background: 'var(--color-surface)', 
                borderRadius: 'var(--radius-md)',
                border: '1px solid var(--color-border)'
              }}>
                <span style={{ fontSize: '1.5rem' }}>🤝</span>
                <p style={{ margin: 'var(--space-2) 0 0', fontWeight: 'var(--weight-medium)' }}>
                  Zéro jugement
                </p>
                <p style={{ margin: 0, fontSize: 'var(--text-sm)', color: 'var(--color-text-muted)' }}>
                  Tout le monde peut apprendre
                </p>
              </div>
              <div style={{ 
                padding: 'var(--space-4)', 
                background: 'var(--color-surface)', 
                borderRadius: 'var(--radius-md)',
                border: '1px solid var(--color-border)'
              }}>
                <span style={{ fontSize: '1.5rem' }}>🆓</span>
                <p style={{ margin: 'var(--space-2) 0 0', fontWeight: 'var(--weight-medium)' }}>
                  100% gratuit
                </p>
                <p style={{ margin: 0, fontSize: 'var(--text-sm)', color: 'var(--color-text-muted)' }}>
                  Sans tracking intrusif
                </p>
              </div>
            </div>

            <h2>Pour qui ?</h2>
            <p>
              Ce blog est fait pour toi si tu es :
            </p>
            <ul>
              <li><strong>Débutant complet</strong> — tu n'as jamais codé</li>
              <li><strong>En reconversion</strong> — tu veux changer de métier</li>
              <li><strong>Étudiant perdu</strong> — les cours vont trop vite</li>
              <li><strong>Curieux</strong> — tu veux juste comprendre comment ça marche</li>
            </ul>

            <h2>Qui est derrière Lscript ?</h2>
            <p>
              Lscript est un projet indépendant, créé par un développeur passionné 
              qui a lui-même appris de façon autodidacte. L'objectif : partager cette 
              expérience et éviter aux autres les galères qu'on a connues.
            </p>
            <p>
              Le code source est disponible sur{' '}
              <a 
                href="https://github.com/NovaIA25/lscript" 
                target="_blank" 
                rel="noopener noreferrer"
                style={{ color: 'var(--color-accent)' }}
              >
                GitHub
              </a>.
            </p>

            <h2>Contact</h2>
            <p>
              Une question ? Une suggestion d'article ?{' '}
              N'hésite pas à utiliser le{' '}
              <Link href="/contact" style={{ color: 'var(--color-accent)' }}>
                formulaire de contact
              </Link>.
            </p>

            {/* CTA */}
            <div style={{ 
              marginTop: 'var(--space-8)', 
              padding: 'var(--space-6)', 
              background: 'var(--color-primary)',
              borderRadius: 'var(--radius-lg)',
              textAlign: 'center'
            }}>
              <h3 style={{ color: 'white', marginTop: 0 }}>Prêt à commencer ?</h3>
              <p style={{ color: 'rgba(255,255,255,0.9)', marginBottom: 'var(--space-4)' }}>
                Explore les articles et apprends à ton rythme.
              </p>
              <Link href="/blog" className="btn" style={{ 
                background: 'white', 
                color: 'var(--color-primary)',
                fontWeight: 'var(--weight-semibold)'
              }}>
                Voir les articles →
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

