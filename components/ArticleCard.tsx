import Link from 'next/link';
import { getCategoryGradient, getCategoryIcon } from '@/lib/categoryColors';

interface Article {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
}

interface ArticleCardProps {
  article: Article;
  variant?: 'default' | 'compact';
}

export default function ArticleCard({ article, variant = 'default' }: ArticleCardProps) {
  const formattedDate = new Date(article.date).toLocaleDateString('fr-FR', {
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  });

  // Estimation du temps de lecture (environ 200 mots/min)
  // Moyenne d'un article : 600-800 mots = 3-4 min
  const readingTime = '3-5 min';

  // V2 : Gradient et icône par catégorie
  const gradient = getCategoryGradient(article.category);
  const icon = getCategoryIcon(article.category);

  return (
    <Link href={`/blog/${article.slug}`} className="article-card-v2">
      {/* Cover image avec gradient de la catégorie */}
      <div className="article-card-cover" style={{ background: gradient }}>
        <div className="article-card-icon">{icon}</div>
      </div>

      {/* Card body */}
      <div className="article-card-body">
        {/* Meta (catégorie + temps de lecture) */}
        <div className="article-card-meta">
          <span className="article-card-category">{article.category}</span>
          <span className="article-card-reading-time">⏱ {readingTime}</span>
        </div>

        {/* Titre */}
        <h3>{article.title}</h3>

        {/* Extrait */}
        <p>{article.excerpt}</p>

        {/* Footer (date + arrow) */}
        <div className="article-card-footer">
          <span className="article-card-date">{formattedDate}</span>
          <span className="article-card-arrow">→</span>
        </div>
      </div>
    </Link>
  );
}
