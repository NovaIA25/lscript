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

  return (
    <Link href={`/blog/${article.slug}`} className="card article-card">
      <span className="article-card-category">{article.category}</span>
      <h3>{article.title}</h3>
      <p>{article.excerpt}</p>
      <div className="article-card-meta">{formattedDate}</div>
    </Link>
  );
}
