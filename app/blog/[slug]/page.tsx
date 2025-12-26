import { getArticleBySlug, getAllArticles } from '@/lib/articles';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import type { Metadata } from 'next';
import NextSteps from '@/components/NextSteps';
import { AdInContent } from '@/components/AdUnit';

interface Props {
  params: { slug: string };
}

export async function generateStaticParams() {
  const articles = await getAllArticles();
  return articles.map((article) => ({ slug: article.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const article = await getArticleBySlug(params.slug);
  if (!article) return { title: 'Article non trouvé' };
  
  return {
    title: article.title,
    description: article.excerpt,
  };
}

export default async function ArticlePage({ params }: Props) {
  const article = await getArticleBySlug(params.slug);
  
  if (!article) {
    notFound();
  }

  const formattedDate = new Date(article.date).toLocaleDateString('fr-FR', {
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  });

  return (
    <div className="page-content article-page-premium">
      <div className="container">
        <article>
          <header className="article-header">
            <Link
              href={`/categories/${article.category}`}
              className="article-category-badge"
            >
              {article.category}
            </Link>
            <h1>{article.title}</h1>
            <p className="article-meta">
              {formattedDate}
            </p>
          </header>

          <div
            className="article-content"
            dangerouslySetInnerHTML={{ __html: article.content || '' }}
          />

          <div style={{ margin: 'var(--space-20) 0' }}>
            <AdInContent />
          </div>
        </article>

        {/* Navigation guidance */}
        <div style={{ maxWidth: '65ch', margin: '0 auto var(--space-16)' }}>
          <NextSteps category={article.category} currentSlug={params.slug} />
        </div>

        <div className="article-footer">
          <Link href="/blog" className="btn-premium">
            Voir tous les articles
          </Link>
        </div>
      </div>
    </div>
  );
}

