import { getAllTags } from '@/lib/articles';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Tags — Tous les sujets',
  description: 'Explore tous les tags et sujets abordés dans les articles de Lscript. Trouve facilement les articles par thème.',
};

export default async function TagsPage() {
  const tags = await getAllTags();

  return (
    <div className="page-content" style={{ paddingTop: 'var(--space-20)', paddingBottom: 'var(--space-24)' }}>
      <div className="container" style={{ maxWidth: '1000px' }}>
        {/* Header */}
        <div style={{
          textAlign: 'center',
          marginBottom: 'var(--space-16)'
        }}>
          <span style={{
            display: 'inline-block',
            padding: 'var(--space-2) var(--space-4)',
            background: 'var(--color-accent-subtle)',
            color: 'var(--color-accent)',
            borderRadius: 'var(--radius-full)',
            fontSize: 'var(--text-sm)',
            fontWeight: 'var(--weight-semibold)',
            marginBottom: 'var(--space-4)',
            textTransform: 'uppercase',
            letterSpacing: 'var(--tracking-wide)'
          }}>
            🏷️ Tous les tags
          </span>
          <h1 style={{
            fontSize: 'var(--text-5xl)',
            marginBottom: 'var(--space-6)',
            letterSpacing: 'var(--tracking-tight)'
          }}>
            Explore par thème
          </h1>

          <p style={{
            fontSize: 'var(--text-xl)',
            color: 'var(--color-text-secondary)',
            lineHeight: '1.8',
            maxWidth: '700px',
            margin: '0 auto'
          }}>
            Trouve facilement les articles qui t'intéressent en naviguant par tag.
            Chaque tag regroupe des articles sur un même sujet.
          </p>
        </div>

        {/* Tags Grid */}
        {tags.length === 0 ? (
          <div className="card" style={{ textAlign: 'center', padding: '4rem 2rem' }}>
            <p style={{ fontSize: '1.125rem', color: 'var(--color-text-muted)' }}>
              Aucun tag disponible pour le moment.
            </p>
          </div>
        ) : (
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
            gap: 'var(--space-4)',
          }}>
            {tags.map(({ tag, count }) => (
              <Link
                key={tag}
                href={`/blog?tag=${encodeURIComponent(tag)}`}
                className="card"
                style={{
                  padding: 'var(--space-6)',
                  textAlign: 'center',
                  textDecoration: 'none',
                  transition: 'all 0.2s ease',
                  border: '2px solid var(--color-border)',
                  cursor: 'pointer',
                }}
              >
                <div style={{
                  fontSize: 'var(--text-lg)',
                  fontWeight: 'var(--weight-semibold)',
                  color: 'var(--color-accent)',
                  marginBottom: 'var(--space-2)',
                }}>
                  #{tag}
                </div>
                <div style={{
                  fontSize: 'var(--text-sm)',
                  color: 'var(--color-text-muted)',
                }}>
                  {count} article{count > 1 ? 's' : ''}
                </div>
              </Link>
            ))}
          </div>
        )}

        {/* Back to Blog Link */}
        <div style={{
          textAlign: 'center',
          marginTop: 'var(--space-12)'
        }}>
          <Link
            href="/blog"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 'var(--space-2)',
              padding: 'var(--space-3) var(--space-6)',
              background: 'var(--color-surface)',
              border: '2px solid var(--color-border)',
              borderRadius: 'var(--radius-full)',
              color: 'var(--color-text)',
              textDecoration: 'none',
              fontSize: 'var(--text-base)',
              fontWeight: '500',
              transition: 'all 0.2s ease',
            }}
          >
            ← Retour aux articles
          </Link>
        </div>
      </div>
    </div>
  );
}
