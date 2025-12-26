import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Visualisations',
  description: 'Visualisations 3D interactives pour comprendre le développement.',
};

const visualizations = [
  {
    slug: 'comment-fonctionne-le-web',
    title: 'Comment fonctionne le web',
    description: 'Comprendre le cycle requête/réponse entre navigateur et serveur.',
    icon: '🌐',
    ready: true,
  },
  {
    slug: 'frontend-backend',
    title: 'Frontend vs Backend',
    description: 'Visualiser ce qui se passe côté client et côté serveur.',
    icon: '⚙️',
    ready: false,
  },
  {
    slug: 'cest-quoi-une-api',
    title: "C'est quoi une API ?",
    description: 'Voir comment les applications communiquent entre elles.',
    icon: '🔗',
    ready: false,
  },
];

export default function VisualisationsPage() {
  return (
    <div className="page-content">
      <div className="container">
        <div className="section-header" style={{ textAlign: 'left', marginBottom: '2rem' }}>
          <h1>🎮 Visualisations interactives</h1>
          <p style={{ maxWidth: '600px' }}>
            Des scènes 3D pour comprendre visuellement comment le web fonctionne.
            Pas de gadget — juste des explications qui ont du sens.
          </p>
        </div>

        <div className="categories-grid">
          {visualizations.map((viz) => (
            <div 
              key={viz.slug} 
              className="card category-card"
              style={{ opacity: viz.ready ? 1 : 0.5 }}
            >
              <div className="category-icon">{viz.icon}</div>
              <h3>{viz.title}</h3>
              <p>{viz.description}</p>
              {viz.ready ? (
                <Link 
                  href={`/visualisations/${viz.slug}`} 
                  className="btn btn-primary"
                  style={{ marginTop: '1rem' }}
                >
                  Voir →
                </Link>
              ) : (
                <span 
                  style={{ 
                    marginTop: '1rem', 
                    display: 'inline-block',
                    color: 'var(--color-text-muted)',
                    fontSize: '0.875rem'
                  }}
                >
                  Bientôt disponible
                </span>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
