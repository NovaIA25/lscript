import Link from 'next/link';
import { getAllArticles } from '@/lib/articles';
import ArticleCard from '@/components/ArticleCard';

const categories = [
  { slug: 'bases', icon: '🧱', name: 'Bases', description: 'Les fondamentaux du code' },
  { slug: 'web', icon: '🌐', name: 'Web', description: 'Créer des sites internet' },
  { slug: 'mobile', icon: '📱', name: 'Mobile', description: 'Faire des applications' },
];

export default async function HomePage() {
  const articles = await getAllArticles();
  const latestArticles = articles.slice(0, 3);

  return (
    <>
      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <div className="hero-content">
            <div className="hero-badge">
              🎓 Blog 100% gratuit
            </div>
            <h1>Apprendre à coder : guide complet pour débutants</h1>
            <p className="hero-lead">
              Découvre le <strong>développement web et mobile</strong> avec des explications simples et sans jargon technique. Articles gratuits, progressifs et adaptés aux débutants absolus. Commence maintenant et apprends à ton rythme.
            </p>
            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <Link href="/blog" className="btn btn-primary">
                Lire le premier article →
              </Link>
              <Link href="/categories" className="btn btn-secondary">
                Voir les catégories
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Commence ici Section */}
      <section className="section" style={{ background: 'var(--color-accent-light)' }}>
        <div className="container">
          <div className="section-header" style={{ textAlign: 'center', maxWidth: '640px', margin: '0 auto var(--space-8)' }}>
            <h2 style={{ fontSize: 'var(--text-3xl)', marginBottom: 'var(--space-3)' }}>🎯 Nouveau sur Lscript ? Commence ici</h2>
            <p>Suis ce parcours étape par étape pour apprendre les fondamentaux du développement.</p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 'var(--space-4)', maxWidth: '900px', margin: '0 auto' }}>
            <div style={{ padding: 'var(--space-5)', background: 'white', borderRadius: 'var(--radius-lg)', border: '2px solid var(--color-accent)' }}>
              <div style={{ fontSize: '2rem', marginBottom: 'var(--space-3)' }}>🧱</div>
              <h3 style={{ fontSize: 'var(--text-lg)', marginBottom: 'var(--space-2)' }}>1. Les Bases</h3>
              <p style={{ fontSize: 'var(--text-sm)', color: 'var(--color-text-muted)', marginBottom: 'var(--space-3)' }}>
                Commence par comprendre ce qu'est le code et la programmation.
              </p>
              <Link href="/categories/bases" className="btn btn-primary" style={{ width: '100%', fontSize: 'var(--text-sm)' }}>
                Commencer →
              </Link>
            </div>

            <div style={{ padding: 'var(--space-5)', background: 'white', borderRadius: 'var(--radius-lg)', border: '1px solid var(--color-border)' }}>
              <div style={{ fontSize: '2rem', marginBottom: 'var(--space-3)' }}>🌐</div>
              <h3 style={{ fontSize: 'var(--text-lg)', marginBottom: 'var(--space-2)' }}>2. Le Web</h3>
              <p style={{ fontSize: 'var(--text-sm)', color: 'var(--color-text-muted)', marginBottom: 'var(--space-3)' }}>
                Découvre comment fonctionnent les sites internet.
              </p>
              <Link href="/categories/web" className="btn btn-secondary" style={{ width: '100%', fontSize: 'var(--text-sm)' }}>
                Explorer
              </Link>
            </div>

            <div style={{ padding: 'var(--space-5)', background: 'white', borderRadius: 'var(--radius-lg)', border: '1px solid var(--color-border)' }}>
              <div style={{ fontSize: '2rem', marginBottom: 'var(--space-3)' }}>🎓</div>
              <h3 style={{ fontSize: 'var(--text-lg)', marginBottom: 'var(--space-2)' }}>3. Le Guide</h3>
              <p style={{ fontSize: 'var(--text-sm)', color: 'var(--color-text-muted)', marginBottom: 'var(--space-3)' }}>
                Suis un parcours complet et progressif.
              </p>
              <Link href="/guide" className="btn btn-secondary" style={{ width: '100%', fontSize: 'var(--text-sm)' }}>
                Voir le guide
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="section">
        <div className="container">
          <div className="two-columns">
            <div>
              <h2>On sait que c'est dur de commencer.</h2>
              <p style={{ marginTop: '1rem', fontSize: '1.125rem' }}>
                Trop de termes techniques. Trop de ressources qui supposent que
                tu sais déjà. Trop de choix entre les langages, les outils, les formations.
              </p>
              <p style={{ marginTop: '1rem' }}>
                Résultat : tu ne sais pas par où commencer. Et tu abandonnes.
              </p>
            </div>
            <div>
              <h2 style={{ color: 'var(--color-accent)' }}>Lscript, c'est différent.</h2>
              <p style={{ marginTop: '1rem', fontSize: '1.125rem' }}>
                Ici, chaque article répond à <strong>une seule question</strong>.
                Avec des mots simples. Des exemples concrets. Et zéro jugement.
              </p>
              <p style={{ marginTop: '1rem' }}>
                Tu peux apprendre à ton rythme, sans te sentir largué.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <h2>Par où commencer ?</h2>
            <p>Choisis un domaine qui t'intéresse et explore les articles.</p>
          </div>
          <div className="categories-grid">
            {categories.map((cat) => (
              <Link href={`/categories/${cat.slug}`} key={cat.slug} className="card category-card">
                <div className="category-icon">{cat.icon}</div>
                <h3>{cat.name}</h3>
                <p>{cat.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Latest Articles Section */}
      <section className="section" style={{ background: 'var(--color-secondary)' }}>
        <div className="container">
          <div className="section-header">
            <h2>Derniers articles</h2>
            <p>Les publications les plus récentes pour t'aider à progresser.</p>
          </div>
          <div className="articles-grid">
            {latestArticles.map((article) => (
              <ArticleCard key={article.slug} article={article} />
            ))}
          </div>
          <div style={{ textAlign: 'center', marginTop: '2rem' }}>
            <Link href="/blog" className="btn btn-primary">
              Voir tous les articles
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section cta-section">
        <div className="container">
          <h2>Prêt à commencer ?</h2>
          <p>
            Explore les articles et apprends le développement à ton rythme.
          </p>
          <Link href="/blog" className="btn btn-primary">
            Découvrir les articles →
          </Link>
        </div>
      </section>
    </>
  );
}
