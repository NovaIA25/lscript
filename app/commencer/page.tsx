import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Par où commencer ?',
  description: 'Tu débutes en développement ? Voici le parcours recommandé pour apprendre sans te perdre.',
};

const articlesDebutant = [
  {
    ordre: 1,
    slug: 'cest-quoi-le-code',
    titre: "C'est quoi le code ?",
    description: 'Comprendre ce que signifie "coder" avant de commencer.',
  },
  {
    ordre: 2,
    slug: 'cest-quoi-une-variable',
    titre: "C'est quoi une variable ?",
    description: 'Le premier concept fondamental à maîtriser.',
  },
  {
    ordre: 3,
    slug: 'cest-quoi-une-fonction',
    titre: "C'est quoi une fonction ?",
    description: 'Organiser son code de manière réutilisable.',
    soon: true,
  },
  {
    ordre: 4,
    slug: 'html-ou-css-difference',
    titre: 'HTML ou CSS : quelle différence ?',
    description: 'Comprendre les deux piliers du web.',
  },
  {
    ordre: 5,
    slug: 'comment-creer-premier-site',
    titre: 'Comment créer son premier site ?',
    description: 'Passer à la pratique et voir un résultat concret.',
    soon: true,
  },
];

export default function CommencerPage() {
  return (
    <div className="page-content">
      <div className="container">
        <div style={{ maxWidth: '700px' }}>
          {/* Introduction rassurante */}
          <div style={{ marginBottom: '3rem' }}>
            <h1>Par où commencer ?</h1>
            <p style={{ 
              fontSize: '1.25rem', 
              marginTop: '1.5rem',
              color: 'var(--color-text)'
            }}>
              Si tu débutes totalement, <strong style={{ color: 'var(--color-accent)' }}>tu es au bon endroit</strong>.
            </p>
            <p style={{ marginTop: '1rem' }}>
              Pas besoin de prérequis. Pas besoin de savoir quoi que ce soit.
              On va y aller étape par étape, dans l'ordre.
            </p>
          </div>

          {/* Conseil */}
          <div className="card" style={{ 
            marginBottom: '3rem',
            background: 'rgba(255, 107, 53, 0.1)',
            border: '1px solid rgba(255, 107, 53, 0.2)'
          }}>
            <p style={{ margin: 0 }}>
              💡 <strong>Conseil :</strong> Lis les articles dans l'ordre. 
              Chaque concept s'appuie sur le précédent.
            </p>
          </div>

          {/* Parcours recommandé */}
          <h2 style={{ marginBottom: '1.5rem' }}>Le parcours recommandé</h2>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {articlesDebutant.map((article) => (
              <div 
                key={article.slug}
                className="card"
                style={{ 
                  display: 'flex', 
                  gap: '1.5rem', 
                  alignItems: 'flex-start',
                  opacity: article.soon ? 0.6 : 1
                }}
              >
                <div style={{
                  width: '40px',
                  height: '40px',
                  borderRadius: '50%',
                  background: article.soon 
                    ? 'var(--color-surface-hover)' 
                    : 'var(--color-accent)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontWeight: 700,
                  flexShrink: 0
                }}>
                  {article.ordre}
                </div>
                <div style={{ flex: 1 }}>
                  {article.soon ? (
                    <>
                      <h3 style={{ marginBottom: '0.25rem' }}>{article.titre}</h3>
                      <p style={{ margin: 0, fontSize: '0.9375rem' }}>{article.description}</p>
                      <span style={{ 
                        fontSize: '0.75rem', 
                        color: 'var(--color-text-muted)',
                        marginTop: '0.5rem',
                        display: 'inline-block'
                      }}>
                        📝 Bientôt disponible
                      </span>
                    </>
                  ) : (
                    <Link href={`/blog/${article.slug}`} style={{ display: 'block' }}>
                      <h3 style={{ marginBottom: '0.25rem', color: 'var(--color-text)' }}>
                        {article.titre}
                      </h3>
                      <p style={{ margin: 0, fontSize: '0.9375rem' }}>{article.description}</p>
                    </Link>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div style={{ marginTop: '3rem', textAlign: 'center' }}>
            <p style={{ marginBottom: '1.5rem', fontSize: '1.125rem' }}>
              Prêt à commencer ?
            </p>
            <Link href="/blog/cest-quoi-le-code" className="btn btn-primary">
              Lire le premier article →
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
