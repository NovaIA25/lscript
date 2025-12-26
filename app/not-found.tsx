import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="page-content" style={{
      minHeight: '70vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }}>
      <div className="container" style={{
        textAlign: 'center',
        maxWidth: '600px',
        padding: 'var(--space-10)'
      }}>
        <div style={{
          fontSize: '6rem',
          marginBottom: 'var(--space-6)',
          lineHeight: 1
        }}>
          404
        </div>

        <h1 style={{
          fontSize: 'var(--text-4xl)',
          marginBottom: 'var(--space-4)',
          fontWeight: 'var(--weight-bold)'
        }}>
          Page introuvable
        </h1>

        <div className="section-separator" />

        <p style={{
          fontSize: 'var(--text-lg)',
          color: 'var(--color-text-secondary)',
          marginBottom: 'var(--space-8)',
          lineHeight: '1.7'
        }}>
          Désolé, la page que tu cherches n'existe pas ou a été déplacée.
        </p>

        <div style={{
          display: 'flex',
          gap: 'var(--space-4)',
          justifyContent: 'center',
          flexWrap: 'wrap'
        }}>
          <Link href="/" className="btn-premium">
            Retour à l'accueil
          </Link>
          <Link href="/guide" className="btn btn-secondary">
            Voir le guide
          </Link>
        </div>

        <div style={{
          marginTop: 'var(--space-12)',
          padding: 'var(--space-6)',
          background: 'var(--color-bg-subtle)',
          borderRadius: 'var(--radius-lg)',
          border: '1px solid var(--color-border)'
        }}>
          <p style={{
            fontSize: 'var(--text-sm)',
            color: 'var(--color-text-muted)',
            marginBottom: 'var(--space-3)'
          }}>
            💡 Suggestions
          </p>
          <ul style={{
            listStyle: 'none',
            padding: 0,
            margin: 0,
            textAlign: 'left'
          }}>
            <li style={{ marginBottom: 'var(--space-2)' }}>
              <Link href="/blog" style={{
                color: 'var(--color-accent)',
                textDecoration: 'none',
                fontSize: 'var(--text-sm)'
              }}>
                → Parcourir tous les articles
              </Link>
            </li>
            <li style={{ marginBottom: 'var(--space-2)' }}>
              <Link href="/visualisations" style={{
                color: 'var(--color-accent)',
                textDecoration: 'none',
                fontSize: 'var(--text-sm)'
              }}>
                → Explorer les visualisations 3D
              </Link>
            </li>
            <li>
              <Link href="/contact" style={{
                color: 'var(--color-accent)',
                textDecoration: 'none',
                fontSize: 'var(--text-sm)'
              }}>
                → Signaler un problème
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
