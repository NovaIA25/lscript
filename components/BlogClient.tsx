'use client';

import { useState, useMemo } from 'react';
import ArticleCard from '@/components/ArticleCard';
import BeginnerCallout from '@/components/BeginnerCallout';

interface Article {
  slug: string;
  title: string;
  date: string;
  category: string;
  excerpt: string;
  tags?: string[];
  readingTime?: string;
}

interface BlogClientProps {
  articles: Article[];
  searchParams?: { tag?: string; q?: string };
}

const CATEGORIES = [
  { id: 'all', label: 'Tous les articles', icon: '📚' },
  { id: 'bases', label: 'Bases', icon: '🧱' },
  { id: 'web', label: 'Web', icon: '🌐' },
  { id: 'mobile', label: 'Mobile', icon: '📱' },
  { id: 'backend', label: 'Backend', icon: '⚙️' },
  { id: 'carriere', label: 'Carrière', icon: '💼' },
  { id: 'outils', label: 'Outils', icon: '🛠️' },
  { id: 'langages', label: 'Langages', icon: '💻' },
  { id: 'concepts', label: 'Concepts', icon: '🧠' },
  { id: 'orientation', label: 'Orientation', icon: '🧭' },
];

export default function BlogClient({ articles, searchParams }: BlogClientProps) {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState(searchParams?.q || '');
  const [selectedTag, setSelectedTag] = useState<string | null>(searchParams?.tag || null);

  // Compter les articles par catégorie
  const categoryCounts = useMemo(() => {
    const counts: Record<string, number> = { all: articles.length };

    articles.forEach(article => {
      const category = article.category || 'Autres';
      counts[category] = (counts[category] || 0) + 1;
    });

    return counts;
  }, [articles]);

  // Filtrer les articles
  const filteredArticles = useMemo(() => {
    let filtered = articles;

    // Filtre par tag
    if (selectedTag) {
      filtered = filtered.filter(article =>
        article.tags?.includes(selectedTag)
      );
    }

    // Filtre par catégorie
    if (selectedCategory !== 'all') {
      filtered = filtered.filter(article => article.category === selectedCategory);
    }

    // Filtre par recherche
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(article =>
        article.title.toLowerCase().includes(query) ||
        article.excerpt.toLowerCase().includes(query)
      );
    }

    return filtered;
  }, [articles, selectedCategory, searchQuery, selectedTag]);

  return (
    <div className="page-content" style={{ paddingTop: 'var(--space-20)', paddingBottom: 'var(--space-24)' }}>
      <div className="container" style={{ maxWidth: '1200px' }}>
        {/* Premium Header */}
        <div style={{
          textAlign: 'center',
          marginBottom: 'var(--space-20)',
          padding: '0 var(--space-6)'
        }}>
          <span className="article-category-badge" style={{ marginBottom: 'var(--space-8)' }}>
            ✍️ Articles & Tutoriels
          </span>
          <h1 style={{
            fontSize: 'var(--text-5xl)',
            marginBottom: 'var(--space-8)',
            letterSpacing: 'var(--tracking-tight)'
          }}>
            Tous les articles
          </h1>

          <div className="section-separator" />

          <p style={{
            fontSize: 'var(--text-xl)',
            color: 'var(--color-text-secondary)',
            lineHeight: '1.8',
            maxWidth: '700px',
            margin: '0 auto var(--space-12)'
          }}>
            Des explications simples pour comprendre le développement web et mobile.
            Un article = une question, une réponse claire.
          </p>
        </div>

        <BeginnerCallout />

        {/* Active Tag Filter Badge */}
        {selectedTag && (
          <div style={{
            maxWidth: '600px',
            margin: '0 auto var(--space-4)',
            display: 'flex',
            justifyContent: 'center',
          }}>
            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 'var(--space-2)',
              padding: 'var(--space-2) var(--space-4)',
              background: 'var(--color-accent-subtle)',
              border: '2px solid var(--color-accent)',
              borderRadius: 'var(--radius-full)',
              fontSize: 'var(--text-sm)',
              fontWeight: '500',
            }}>
              <span>Filtré par: #{selectedTag}</span>
              <button
                onClick={() => setSelectedTag(null)}
                aria-label="Supprimer le filtre de tag"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: '20px',
                  height: '20px',
                  padding: 0,
                  background: 'var(--color-accent)',
                  color: 'white',
                  border: 'none',
                  borderRadius: '50%',
                  cursor: 'pointer',
                  fontSize: '14px',
                  lineHeight: 1,
                }}
              >
                ×
              </button>
            </div>
          </div>
        )}

        {/* Premium Search Bar */}
        <div style={{
          marginBottom: 'var(--space-10)',
          maxWidth: '600px',
          margin: '0 auto var(--space-10)'
        }}>
          <div style={{
            position: 'relative',
            boxShadow: '0 2px 8px rgba(0,0,0,0.06), 0 4px 16px rgba(0,0,0,0.04)',
            borderRadius: 'var(--radius-xl)',
            overflow: 'hidden'
          }}>
            <input
              type="text"
              placeholder="🔍 Rechercher un article..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              style={{
                width: '100%',
                padding: 'var(--space-4) var(--space-6)',
                fontSize: 'var(--text-lg)',
                border: '2px solid var(--color-border)',
                borderRadius: 'var(--radius-xl)',
                transition: 'all 0.2s ease',
                background: 'var(--color-surface)',
                outline: 'none'
              }}
              onFocus={(e) => {
                e.target.style.borderColor = 'var(--color-accent)';
                e.target.style.boxShadow = '0 0 0 4px rgba(234, 88, 12, 0.1)';
              }}
              onBlur={(e) => {
                e.target.style.borderColor = 'var(--color-border)';
                e.target.style.boxShadow = 'none';
              }}
            />
          </div>
        </div>

        {/* Premium Category Filters */}
        <div style={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center',
          gap: 'var(--space-3)',
          marginBottom: 'var(--space-16)',
        }}>
          {CATEGORIES.map(category => {
            const count = categoryCounts[category.id] || 0;
            const isActive = selectedCategory === category.id;

            // Ne pas afficher les catégories sans articles (sauf "Tous")
            if (count === 0 && category.id !== 'all') return null;

            return (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                style={{
                  padding: 'var(--space-3) var(--space-5)',
                  fontSize: 'var(--text-sm)',
                  fontWeight: isActive ? 'var(--weight-semibold)' : 'var(--weight-medium)',
                  color: isActive ? 'white' : 'var(--color-text)',
                  background: isActive
                    ? 'var(--color-accent)'
                    : 'var(--color-surface)',
                  border: `2px solid ${isActive ? 'var(--color-accent)' : 'var(--color-border)'}`,
                  borderRadius: 'var(--radius-full)',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease',
                  boxShadow: isActive
                    ? '0 2px 8px rgba(234, 88, 12, 0.2)'
                    : '0 1px 3px rgba(0,0,0,0.04)',
                }}
                onMouseEnter={(e) => {
                  if (!isActive) {
                    e.currentTarget.style.borderColor = 'var(--color-accent)';
                    e.currentTarget.style.transform = 'translateY(-2px)';
                    e.currentTarget.style.boxShadow = '0 4px 12px rgba(0,0,0,0.1)';
                  }
                }}
                onMouseLeave={(e) => {
                  if (!isActive) {
                    e.currentTarget.style.borderColor = 'var(--color-border)';
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = '0 1px 3px rgba(0,0,0,0.04)';
                  }
                }}
              >
                {category.icon} {category.label} {count > 0 && `(${count})`}
              </button>
            );
          })}
        </div>

        {/* Résultats */}
        <div style={{ marginBottom: 'var(--space-4)' }}>
          <p style={{
            color: 'var(--color-text-muted)',
            fontSize: 'var(--text-sm)',
          }}>
            {filteredArticles.length === 0 ? (
              'Aucun article trouvé'
            ) : (
              <>
                {filteredArticles.length} article{filteredArticles.length > 1 ? 's' : ''}
                {selectedTag && ` avec le tag #${selectedTag}`}
                {searchQuery && ` pour "${searchQuery}"`}
                {selectedCategory !== 'all' && !searchQuery && !selectedTag && ` dans ${CATEGORIES.find(c => c.id === selectedCategory)?.label}`}
              </>
            )}
          </p>
        </div>

        {/* Grille d'articles */}
        {filteredArticles.length === 0 ? (
          <div className="card" style={{ textAlign: 'center', padding: '4rem 2rem' }}>
            <p style={{ fontSize: '1.125rem', marginBottom: '1rem' }}>
              {searchQuery ? '🔍 Aucun résultat trouvé' : '📝 Aucun article dans cette catégorie'}
            </p>
            <p style={{ color: 'var(--color-text-muted)' }}>
              {searchQuery
                ? 'Essaie avec d\'autres mots-clés ou explore toutes les catégories.'
                : 'Explore les autres catégories pour découvrir plus d\'articles.'
              }
            </p>
            {(searchQuery || selectedCategory !== 'all' || selectedTag) && (
              <button
                onClick={() => {
                  setSearchQuery('');
                  setSelectedCategory('all');
                  setSelectedTag(null);
                }}
                style={{
                  marginTop: 'var(--space-4)',
                  padding: 'var(--space-3) var(--space-6)',
                  background: 'var(--color-primary)',
                  color: 'white',
                  border: 'none',
                  borderRadius: 'var(--radius-md)',
                  cursor: 'pointer',
                  fontSize: 'var(--text-base)',
                  fontWeight: '500',
                }}
              >
                Voir tous les articles
              </button>
            )}
          </div>
        ) : (
          <div className="articles-grid">
            {filteredArticles.map((article) => (
              <ArticleCard key={article.slug} article={article} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}