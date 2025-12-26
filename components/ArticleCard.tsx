import Link from 'next/link';

interface Article {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
}

interface ArticleCardProps {
  article: Article;
}

export default function ArticleCard({ article }: ArticleCardProps) {
  const formattedDate = new Date(article.date).toLocaleDateString('fr-FR', {
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  });

  // Estimation du temps de lecture (environ 200 mots/min)
  // Moyenne d'un article : 600-800 mots = 3-4 min
  const readingTime = '3-5 min';

  return (
    <Link href={`/blog/${article.slug}`} className="card article-card">
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 'var(--space-2)' }}>
        <span className="article-card-category">{article.category}</span>
        <span style={{ fontSize: 'var(--text-xs)', color: 'var(--color-text-placeholder)' }}>
          ⏱ {readingTime}
        </span>
      </div>
      <h3>{article.title}</h3>
      <p>{article.excerpt}</p>
      <div style={{ fontSize: 'var(--text-xs)', color: 'var(--color-text-placeholder)', marginTop: 'var(--space-3)' }}>
        {formattedDate}
      </div>
    </Link>
  );
}
