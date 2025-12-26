import { getArticleBySlug, getAllArticles } from '@/lib/articles';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import type { Metadata } from 'next';
import NextSteps from '@/components/NextSteps';

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
    <div className="page-content">
      <div className="container">
        <article>
          <header className="article-header">
            <Link 
              href={`/categories/${article.category}`}
              className="article-card-category"
              style={{ marginBottom: '1rem', display: 'inline-block' }}
            >
              {article.category}
            </Link>
            <h1>{article.title}</h1>
            <p style={{ marginTop: '1rem', color: 'var(--color-text-muted)' }}>
              Publié le {formattedDate}
            </p>
          </header>
          
          <div 
            className="article-content"
            dangerouslySetInnerHTML={{ __html: article.content || '' }}
          />
        </article>

        {/* Navigation guidance */}
        <div style={{ maxWidth: '65ch', margin: '0 auto' }}>
          <NextSteps category={article.category} currentSlug={params.slug} />
        </div>

        <div style={{ 
          marginTop: '2rem', 
          paddingTop: '2rem', 
          borderTop: '1px solid rgba(255,255,255,0.1)',
          textAlign: 'center'
        }}>
          <Link href="/blog" className="btn btn-secondary">
            ← Retour aux articles
          </Link>
        </div>
      </div>
    </div>
  );
}

