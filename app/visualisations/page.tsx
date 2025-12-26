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
    description: 'Visualise le cycle requête/réponse entre ton navigateur et le serveur. Tu comprendras enfin ce qui se passe quand tu tapes une URL.',
    icon: '🌐',
    preview: ['🖥️', '→', '🗄️'],
    duration: '5 min',
    ready: true,
    color: '#ea580c',
  },
  {
    slug: 'frontend-backend',
    title: 'Frontend vs Backend',
    description: 'Découvre ce qui se passe côté client (navigateur) et côté serveur. La différence expliquée visuellement.',
    icon: '⚙️',
    preview: ['💻', '⟷', '🗃️'],
    duration: '6 min',
    ready: false,
    color: '#2563eb',
  },
  {
    slug: 'cest-quoi-une-api',
    title: "C'est quoi une API ?",
    description: 'Comment les applications communiquent entre elles ? Une visualisation simple pour comprendre les API.',
    icon: '🔗',
    preview: ['📱', '↔', '🌐'],
    duration: '4 min',
    ready: false,
    color: '#16a34a',
  },
];

export default function VisualisationsPage() {
  return (
    <div className="page-content">
      <div className="container">
        {/* Hero Section */}
        <div style={{ 
          textAlign: 'center', 
          padding: 'var(--space-16) 0 var(--space-12)',
          maxWidth: '800px',
          margin: '0 auto'
        }}>
          <span style={{
            display: 'inline-block',
            padding: 'var(--space-2) var(--space-4)',
            background: 'var(--color-accent-light)',
            color: 'var(--color-accent)',
            borderRadius: 'var(--radius-full)',
            fontSize: 'var(--text-sm)',
            fontWeight: 'var(--weight-semibold)',
            marginBottom: 'var(--space-6)'
          }}>
            ✨ Apprendre en visualisant
          </span>
          
          <h1 style={{ 
            fontSize: 'var(--text-5xl)', 
            marginBottom: 'var(--space-6)',
            letterSpacing: 'var(--tracking-tight)'
          }}>
            Visualisations interactives
          </h1>
          
          <p style={{ 
            fontSize: 'var(--text-xl)', 
            color: 'var(--color-text-secondary)',
            lineHeight: 'var(--leading-relaxed)',
            marginBottom: 'var(--space-8)'
          }}>
            Certains concepts sont difficiles à comprendre avec du texte. 
            Ces visualisations te montrent visuellement comment le web fonctionne — 
            étape par étape, à ton rythme.
          </p>

          {/* Why Visual Learning */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: 'var(--space-6)',
            textAlign: 'center',
            padding: 'var(--space-6)',
            background: 'var(--color-bg-subtle)',
            borderRadius: 'var(--radius-xl)',
            marginTop: 'var(--space-8)'
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
        <div style={{ marginTop: 'var(--space-8)' }}>
          <h2 style={{ 
            fontSize: 'var(--text-2xl)', 
            marginBottom: 'var(--space-6)',
            textAlign: 'center'
          }}>
            Explore les visualisations
          </h2>
          
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: 'var(--space-6)'
          }}>
            {visualizations.map((viz) => (
              <div 
                key={viz.slug} 
                style={{ 
                  background: 'var(--color-surface)',
                  borderRadius: 'var(--radius-2xl)',
                  overflow: 'hidden',
                  border: viz.ready ? `2px solid ${viz.color}` : '1px solid var(--color-border)',
                  boxShadow: viz.ready ? 'var(--shadow-card)' : 'none',
                  opacity: viz.ready ? 1 : 0.7,
                  transition: 'all 0.3s ease',
                }}
              >
                {/* Preview Area */}
                <div style={{
                  background: viz.ready 
                    ? `linear-gradient(135deg, ${viz.color}15 0%, ${viz.color}05 100%)`
                    : 'var(--color-bg-muted)',
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
                        background: '#dcfce7',
                        color: '#15803d',
                        borderRadius: 'var(--radius-full)',
                        fontSize: 'var(--text-xs)',
                        fontWeight: 'var(--weight-semibold)'
                      }}>
                        ⏱ {viz.duration}
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
                  
                  {viz.ready ? (
                    <Link 
                      href={`/visualisations/${viz.slug}`} 
                      className="btn btn-primary"
                      style={{ width: '100%', justifyContent: 'center' }}
                    >
                      Lancer la visualisation →
                    </Link>
                  ) : (
                    <div style={{ 
                      padding: 'var(--space-3)',
                      background: 'var(--color-bg-muted)',
                      borderRadius: 'var(--radius-lg)',
                      textAlign: 'center',
                      color: 'var(--color-text-muted)',
                      fontSize: 'var(--text-sm)'
                    }}>
                      🚧 En cours de création
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div style={{ 
          marginTop: 'var(--space-16)', 
          padding: 'var(--space-10)',
          background: 'var(--color-bg-subtle)',
          borderRadius: 'var(--radius-2xl)',
          textAlign: 'center'
        }}>
          <h3 style={{ fontSize: 'var(--text-2xl)', marginBottom: 'var(--space-4)' }}>
            Tu préfères lire ?
          </h3>
          <p style={{ 
            color: 'var(--color-text-muted)', 
            marginBottom: 'var(--space-6)',
            maxWidth: '500px',
            margin: '0 auto var(--space-6)'
          }}>
            Les visualisations complètent les articles, mais tu peux aussi tout apprendre en lisant le guide complet.
          </p>
          <Link href="/guide" className="btn btn-secondary btn-large">
            Voir le guide écrit →
          </Link>
        </div>
      </div>
    </div>
  );
}
