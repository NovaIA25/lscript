import { getArticlesByCategory, getAllCategories } from '@/lib/articles';
import ArticleCard from '@/components/ArticleCard';
import Link from 'next/link';
import type { Metadata } from 'next';

interface Props {
  params: { slug: string };
}

export function generateStaticParams() {
  const categories = getAllCategories();
  return categories.map((cat) => ({ slug: cat.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const categories = getAllCategories();
  const category = categories.find((c) => c.slug === params.slug);
  
  return {
    title: category?.name || 'Catégorie',
    description: category?.description || '',
  };
}

export default async function CategoryPage({ params }: Props) {
  const categories = getAllCategories();
  const category = categories.find((c) => c.slug === params.slug);
  const articles = await getArticlesByCategory(params.slug);

  if (!category) {
    return (
      <div className="page-content">
        <div className="container">
          <h1>Catégorie non trouvée</h1>
          <Link href="/categories" className="btn btn-secondary">
            Voir toutes les catégories
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="page-content">
      <div className="container">
        <div className="section-header" style={{ textAlign: 'left', marginBottom: '3rem' }}>
          <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>{category.icon}</div>
          <h1>{category.name}</h1>
          <p style={{ maxWidth: '600px' }}>{category.description}</p>
        </div>

        {articles.length === 0 ? (
          <div className="card" style={{ textAlign: 'center', padding: '4rem 2rem' }}>
            <p style={{ fontSize: '1.125rem', marginBottom: '1rem' }}>
              📝 Les articles de cette catégorie arrivent bientôt !
            </p>
            <Link href="/categories" className="btn btn-secondary">
              Voir les autres catégories
            </Link>
          </div>
        ) : (
          <div className="articles-grid">
            {articles.map((article) => (
              <ArticleCard key={article.slug} article={article} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
