import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Visualisations 3D — Comprendre le web interactivement',
  description: 'Apprends le développement web avec des visualisations 3D interactives. Comprends comment fonctionne internet, les API et le frontend/backend visuellement.',
};

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
  return (
    <div className="page-content" style={{ paddingTop: 'var(--space-20)', paddingBottom: 'var(--space-24)' }}>
      <div className="container" style={{ maxWidth: '900px' }}>
        {/* Hero Section */}
        <div style={{
          textAlign: 'center',
          padding: '0 var(--space-6)',
          maxWidth: '800px',
          margin: '0 auto var(--space-20)'
        }}>
          <span className="article-category-badge" style={{ marginBottom: 'var(--space-8)' }}>
            Apprendre visuellement
          </span>

          <h1 style={{
            fontSize: 'var(--text-5xl)',
            marginBottom: 'var(--space-8)',
            letterSpacing: 'var(--tracking-tight)'
          }}>
            Visualisations interactives
          </h1>

          <p style={{
            fontSize: 'var(--text-xl)',
            color: 'var(--color-text-secondary)',
            lineHeight: '1.8',
            marginBottom: 'var(--space-12)',
            maxWidth: '700px',
            margin: '0 auto var(--space-12)'
          }}>
            Certains concepts sont difficiles à comprendre avec du texte. 
            Ces visualisations te montrent visuellement comment le web fonctionne — 
            étape par étape, à ton rythme.
          </p>

          {/* Why Visual Learning */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: 'var(--space-8)',
            textAlign: 'center',
            padding: 'var(--space-10)',
            background: 'var(--color-bg-subtle)',
            borderRadius: 'var(--radius-xl)',
            marginTop: 'var(--space-12)'
          }}>
            <div>
              <div style={{ fontSize: '2rem', marginBottom: 'var(--space-2)' }}>🎯</div>
              <div style={{ fontWeight: 'var(--weight-semibold)', marginBottom: 'var(--space-1)' }}>Concret</div>
              <div style={{ fontSize: 'var(--text-sm)', color: 'var(--color-text-muted)' }}>Pas de théorie abstraite</div>
            </div>
            <div>
              <div style={{ fontSize: '2rem', marginBottom: 'var(--space-2)' }}>⏱️</div>
              <div style={{ fontWeight: 'var(--weight-semibold)', marginBottom: 'var(--space-1)' }}>Rapide</div>
              <div style={{ fontSize: 'var(--text-sm)', color: 'var(--color-text-muted)' }}>5 min pour comprendre</div>
            </div>
            <div>
              <div style={{ fontSize: '2rem', marginBottom: 'var(--space-2)' }}>🧠</div>
              <div style={{ fontWeight: 'var(--weight-semibold)', marginBottom: 'var(--space-1)' }}>Mémorable</div>
              <div style={{ fontSize: 'var(--text-sm)', color: 'var(--color-text-muted)' }}>Tu retiens mieux</div>
            </div>
          </div>
        </div>

        {/* Visualizations Grid */}
        <div style={{ marginTop: 'var(--space-20)' }}>
          <h2 style={{
            fontSize: 'var(--text-2xl)',
            marginBottom: 'var(--space-12)',
            textAlign: 'center'
          }}>
            Explore les visualisations
          </h2>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: 'var(--space-8)'
          }}>
            {visualizations.map((viz) => (
              <div
                key={viz.slug}
                className="card-premium"
                style={{
                  opacity: viz.ready ? 1 : 0.7,
                }}
              >
                {/* Preview Area */}
                <div style={{
                  background: 'linear-gradient(135deg, rgba(0,0,0,0.02) 0%, rgba(0,0,0,0.01) 100%)',
                  padding: 'var(--space-10) var(--space-6)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: 'var(--space-4)',
                  minHeight: '120px'
                }}>
                  {viz.preview.map((item, i) => (
                    <span 
                      key={i} 
                      style={{ 
                        fontSize: i === 1 ? 'var(--text-xl)' : 'var(--text-4xl)',
                        opacity: i === 1 ? 0.5 : 1
                      }}
                    >
                      {item}
                    </span>
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
                      fontWeight: 'var(--weight-semibold)',
                      color: 'var(--color-text)'
                    }}>
                      {viz.title}
                    </h3>
                    {viz.ready && (
                      <span style={{
                        padding: 'var(--space-1) var(--space-3)',
                        background: 'rgba(0,0,0,0.04)',
                        color: 'var(--color-text-muted)',
                        borderRadius: 'var(--radius-full)',
                        fontSize: 'var(--text-xs)',
                        fontWeight: 600
                      }}>
                        {viz.duration}
                      </span>
                    )}
                  </div>
                  
                  <p style={{ 
                    fontSize: 'var(--text-base)', 
                    color: 'var(--color-text-muted)',
                    lineHeight: 'var(--leading-relaxed)',
                    marginBottom: 'var(--space-4)'
                  }}>
                    {viz.description}
                  </p>
                  
                  <Link
                    href={`/visualisations/${viz.slug}`}
                    className="btn-premium"
                    style={{ width: '100%', justifyContent: 'center', textAlign: 'center' }}
                  >
                    Lancer la visualisation
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="section-premium-cta" style={{ marginTop: 'var(--space-24)' }}>
          <div className="cta-premium-content">
            <h2 style={{ marginBottom: 'var(--space-4)' }}>Tu préfères lire ?</h2>
            <p style={{ lineHeight: '1.7', marginBottom: 'var(--space-6)' }}>
              Les visualisations complètent les articles. Tu peux aussi tout apprendre avec le guide complet.
            </p>
            <Link href="/guide" className="btn-premium">
              Voir le guide
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
