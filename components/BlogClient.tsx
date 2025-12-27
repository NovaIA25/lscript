'use client';

import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
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
    <div className="page-content" style={{
      paddingTop: 'var(--space-20)',
      paddingBottom: 'var(--space-24)',
      background: 'var(--color-gradient-subtle)',
      minHeight: '100vh'
    }}>
      <div className="container" style={{ maxWidth: '1200px' }}>
        {/* Premium Header */}
        <motion.div
          style={{
            textAlign: 'center',
            marginBottom: 'var(--space-20)',
            padding: '0 var(--space-6)'
          }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <motion.span
            className="article-category-badge"
            style={{
              marginBottom: 'var(--space-8)',
              background: 'linear-gradient(135deg, var(--color-accent) 0%, var(--color-accent-hover) 100%)',
              color: 'white',
              padding: 'var(--space-2) var(--space-6)',
              boxShadow: '0 4px 20px rgba(249, 115, 22, 0.3)',
              display: 'inline-block'
            }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            ✍️ Articles & Tutoriels
          </motion.span>

          <motion.h1
            style={{
              fontSize: 'clamp(2.5rem, 5vw, 4rem)',
              marginBottom: 'var(--space-8)',
              letterSpacing: 'var(--tracking-tight)',
              background: 'linear-gradient(135deg, var(--color-text) 0%, var(--color-accent) 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              fontWeight: 'var(--weight-extrabold)'
            }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            Tous les articles
          </motion.h1>

          <div className="section-separator" style={{
            background: 'linear-gradient(90deg, transparent 0%, var(--color-accent) 50%, transparent 100%)',
            height: '2px'
          }} />

          <motion.p
            style={{
              fontSize: 'var(--text-xl)',
              color: 'var(--color-text-secondary)',
              lineHeight: '1.8',
              maxWidth: '700px',
              margin: '0 auto var(--space-12)'
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            Des explications simples pour comprendre le développement web et mobile.
            Un article = une question, une réponse <strong style={{ color: 'var(--color-accent)' }}>claire</strong>.
          </motion.p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
        >
          <BeginnerCallout />
        </motion.div>

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
        <motion.div
          style={{
            marginBottom: 'var(--space-10)',
            maxWidth: '600px',
            margin: '0 auto var(--space-10)'
          }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
        >
          <div style={{
            position: 'relative',
            boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
            borderRadius: 'var(--radius-2xl)',
            overflow: 'hidden'
          }}>
            <motion.input
              type="text"
              placeholder="🔍 Rechercher un article..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              style={{
                width: '100%',
                padding: 'var(--space-5) var(--space-6)',
                fontSize: 'var(--text-lg)',
                border: '2px solid var(--color-border)',
                borderRadius: 'var(--radius-2xl)',
                transition: 'all 0.3s ease',
                background: 'var(--color-surface)',
                outline: 'none',
                color: 'var(--color-text)',
                fontWeight: 'var(--weight-medium)'
              }}
              onFocus={(e) => {
                e.target.style.borderColor = 'var(--color-accent)';
                e.target.style.boxShadow = '0 0 0 4px rgba(249, 115, 22, 0.15), 0 8px 32px rgba(249, 115, 22, 0.2)';
              }}
              onBlur={(e) => {
                e.target.style.borderColor = 'var(--color-border)';
                e.target.style.boxShadow = 'none';
              }}
              whileFocus={{ scale: 1.02 }}
            />
          </div>
        </motion.div>

        {/* Premium Category Filters */}
        <motion.div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            gap: 'var(--space-3)',
            marginBottom: 'var(--space-16)',
          }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.6 }}
        >
          {CATEGORIES.map((category, index) => {
            const count = categoryCounts[category.id] || 0;
            const isActive = selectedCategory === category.id;

            // Ne pas afficher les catégories sans articles (sauf "Tous")
            if (count === 0 && category.id !== 'all') return null;

            return (
              <motion.button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                style={{
                  padding: 'var(--space-3) var(--space-5)',
                  fontSize: 'var(--text-sm)',
                  fontWeight: isActive ? 'var(--weight-bold)' : 'var(--weight-medium)',
                  color: isActive ? 'white' : 'var(--color-text)',
                  background: isActive
                    ? 'linear-gradient(135deg, var(--color-accent) 0%, var(--color-accent-hover) 100%)'
                    : 'var(--color-surface)',
                  border: `2px solid ${isActive ? 'var(--color-accent)' : 'var(--color-border)'}`,
                  borderRadius: 'var(--radius-full)',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  boxShadow: isActive
                    ? '0 4px 16px rgba(249, 115, 22, 0.3)'
                    : '0 2px 8px rgba(0,0,0,0.06)',
                }}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.7 + index * 0.05, duration: 0.3 }}
                whileHover={{
                  scale: 1.05,
                  y: -2,
                  boxShadow: isActive
                    ? '0 6px 20px rgba(249, 115, 22, 0.4)'
                    : '0 4px 16px rgba(0,0,0,0.12)'
                }}
                whileTap={{ scale: 0.95 }}
              >
                {category.icon} {category.label} {count > 0 && `(${count})`}
              </motion.button>
            );
          })}
        </motion.div>

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
        <AnimatePresence mode="wait">
          {filteredArticles.length === 0 ? (
            <motion.div
              key="no-results"
              className="card"
              style={{
                textAlign: 'center',
                padding: '4rem 2rem',
                background: 'var(--color-surface)',
                borderRadius: 'var(--radius-2xl)',
                border: '1px solid var(--color-border)',
                boxShadow: '0 10px 40px rgba(0, 0, 0, 0.08)'
              }}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.3 }}
            >
              <p style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>
                {searchQuery ? '🔍 Aucun résultat trouvé' : '📝 Aucun article dans cette catégorie'}
              </p>
              <p style={{ color: 'var(--color-text-muted)', fontSize: 'var(--text-lg)' }}>
                {searchQuery
                  ? 'Essaie avec d\'autres mots-clés ou explore toutes les catégories.'
                  : 'Explore les autres catégories pour découvrir plus d\'articles.'
                }
              </p>
              {(searchQuery || selectedCategory !== 'all' || selectedTag) && (
                <motion.button
                  onClick={() => {
                    setSearchQuery('');
                    setSelectedCategory('all');
                    setSelectedTag(null);
                  }}
                  style={{
                    marginTop: 'var(--space-6)',
                    padding: 'var(--space-4) var(--space-8)',
                    background: 'linear-gradient(135deg, var(--color-accent) 0%, var(--color-accent-hover) 100%)',
                    color: 'white',
                    border: 'none',
                    borderRadius: 'var(--radius-lg)',
                    cursor: 'pointer',
                    fontSize: 'var(--text-base)',
                    fontWeight: 'var(--weight-bold)',
                    boxShadow: '0 4px 16px rgba(249, 115, 22, 0.3)'
                  }}
                  whileHover={{ scale: 1.05, boxShadow: '0 6px 24px rgba(249, 115, 22, 0.4)' }}
                  whileTap={{ scale: 0.95 }}
                >
                  Voir tous les articles
                </motion.button>
              )}
            </motion.div>
          ) : (
            <motion.div
              key="results-grid"
              className="articles-grid"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              {filteredArticles.map((article, index) => (
                <motion.div
                  key={article.slug}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ delay: index * 0.05, duration: 0.4 }}
                >
                  <ArticleCard article={article} />
                </motion.div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}