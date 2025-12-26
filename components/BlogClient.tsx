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
  readingTime?: string;
}

interface BlogClientProps {
  articles: Article[];
}

const CATEGORIES = [
  { id: 'all', label: 'Tous les articles', icon: '📚' },
  { id: 'Bases', label: 'Bases', icon: '🧱' },
  { id: 'Web', label: 'Web', icon: '🌐' },
  { id: 'Mobile', label: 'Mobile', icon: '📱' },
  { id: 'Backend', label: 'Backend', icon: '⚙️' },
  { id: 'Carrière', label: 'Carrière', icon: '💼' },
  { id: 'Outils', label: 'Outils', icon: '🛠️' },
  { id: 'Langages', label: 'Langages', icon: '💻' },
  { id: 'Concepts', label: 'Concepts', icon: '🧠' },
  { id: 'Orientation', label: 'Orientation', icon: '🧭' },
];

export default function BlogClient({ articles }: BlogClientProps) {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

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
  }, [articles, selectedCategory, searchQuery]);

  return (
    <div className="page-content">
      <div className="container">
        {/* Header */}
        <div className="section-header" style={{ textAlign: 'left', marginBottom: '2rem' }}>
          <h1>Tous les articles</h1>
          <p style={{ maxWidth: '600px' }}>
            Des explications simples pour comprendre le développement web et mobile.
            Un article = une question, une réponse claire.
          </p>
        </div>

        <BeginnerCallout />

        {/* Barre de recherche */}
        <div style={{ marginBottom: 'var(--space-6)' }}>
          <input
            type="text"
            placeholder="🔍 Rechercher un article..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            style={{
              width: '100%',
              padding: 'var(--space-3) var(--space-4)',
              fontSize: 'var(--text-base)',
              border: '2px solid var(--color-border)',
              borderRadius: 'var(--radius-md)',
              transition: 'border-color var(--duration-normal)',
            }}
            onFocus={(e) => e.target.style.borderColor = 'var(--color-primary)'}
            onBlur={(e) => e.target.style.borderColor = 'var(--color-border)'}
          />
        </div>

        {/* Filtres par catégorie */}
        <div style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: 'var(--space-2)',
          marginBottom: 'var(--space-8)',
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
                  padding: 'var(--space-2) var(--space-4)',
                  fontSize: 'var(--text-sm)',
                  fontWeight: isActive ? '600' : '500',
                  color: isActive ? 'white' : 'var(--color-text)',
                  background: isActive
                    ? 'var(--color-primary)'
                    : 'var(--color-surface)',
                  border: `2px solid ${isActive ? 'var(--color-primary)' : 'var(--color-border)'}`,
                  borderRadius: 'var(--radius-full)',
                  cursor: 'pointer',
                  transition: 'all var(--duration-fast)',
                }}
                onMouseEnter={(e) => {
                  if (!isActive) {
                    e.currentTarget.style.borderColor = 'var(--color-primary)';
                    e.currentTarget.style.transform = 'translateY(-2px)';
                  }
                }}
                onMouseLeave={(e) => {
                  if (!isActive) {
                    e.currentTarget.style.borderColor = 'var(--color-border)';
                    e.currentTarget.style.transform = 'translateY(0)';
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
                {searchQuery && ` pour "${searchQuery}"`}
                {selectedCategory !== 'all' && !searchQuery && ` dans ${CATEGORIES.find(c => c.id === selectedCategory)?.label}`}
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
            {(searchQuery || selectedCategory !== 'all') && (
              <button
                onClick={() => {
                  setSearchQuery('');
                  setSelectedCategory('all');
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