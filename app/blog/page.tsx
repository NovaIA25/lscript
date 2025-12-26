import { getAllArticles } from '@/lib/articles';
import ArticleCard from '@/components/ArticleCard';
import BeginnerCallout from '@/components/BeginnerCallout';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Articles',
  description: 'Tous les articles pour apprendre le développement web et mobile, expliqués simplement.',
};

export default async function BlogPage() {
  const articles = await getAllArticles();

  return (
    <div className="page-content">
      <div className="container">
        <div className="section-header" style={{ textAlign: 'left', marginBottom: '2rem' }}>
          <h1>Tous les articles</h1>
          <p style={{ maxWidth: '600px' }}>
            Des explications simples pour comprendre le développement web et mobile. 
            Un article = une question, une réponse claire.
          </p>
        </div>

        <BeginnerCallout />

        {articles.length === 0 ? (
          <div className="card" style={{ textAlign: 'center', padding: '4rem 2rem' }}>
            <p style={{ fontSize: '1.125rem', marginBottom: '1rem' }}>
              📝 Les articles arrivent bientôt !
            </p>
            <p>
              En attendant, explore les catégories pour découvrir les sujets à venir.
            </p>
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

