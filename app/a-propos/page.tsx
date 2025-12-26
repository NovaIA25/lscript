import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'À propos de Lscript — Apprendre le développement simplement',
  description: 'Découvre la mission de Lscript : rendre le développement web et mobile accessible à tous les débutants, sans jargon et 100% gratuit.',
};

export default function AboutPage() {
  return (
    <div className="page-content article-page-premium">
      <div className="container">
        {/* Header */}
        <header className="article-header">
          <h1>À propos de Lscript</h1>
          <p className="article-meta">
            Apprendre le développement, simplement.
          </p>
        </header>

        {/* Content */}
        <div className="article-content">
          <h2>Notre mission</h2>
          <p>
            <strong>Rendre le développement accessible à tous</strong>, sans jargon technique,
            sans prérequis, et 100% gratuitement.
          </p>

          <p>
            Quand on veut apprendre à coder, on se retrouve vite perdu.
            Trop de ressources. Trop de jargon. Trop de formations qui supposent
            qu'on sait déjà des choses qu'on ne sait pas.
          </p>

          <p>
            <strong>Lscript</strong> est né de cette frustration. L'idée est simple :
            expliquer le développement avec des mots que tout le monde peut comprendre.
          </p>

          <h2>Notre approche</h2>
          <p>
            Chaque article répond à <strong>une seule question</strong>. Pas plus.
            L'objectif n'est pas d'être exhaustif, mais d'être clair.
          </p>

          <div className="cards-premium-grid" style={{ margin: 'var(--space-10) 0' }}>
            <div className="card-premium">
              <h3>Mots simples</h3>
              <p>Pas de jargon inutile. Des explications accessibles à tous.</p>
            </div>
            <div className="card-premium">
              <h3>Exemples concrets</h3>
              <p>Du quotidien, pas abstrait. Des analogies que tu connais déjà.</p>
            </div>
            <div className="card-premium">
              <h3>100% gratuit</h3>
              <p>Sans publicité intrusive. Le savoir doit être accessible.</p>
            </div>
          </div>

          <h2>Pour qui ?</h2>
          <p>Ce site est fait pour toi si tu es :</p>
          <ul>
            <li>Débutant complet — tu n'as jamais codé</li>
            <li>En reconversion — tu veux changer de métier</li>
            <li>Curieux — tu veux juste comprendre comment ça marche</li>
          </ul>

          <h2>Qui est derrière Lscript ?</h2>
          <p>
            Lscript est un projet indépendant, créé par un développeur passionné
            qui a lui-même appris de façon autodidacte.
          </p>
          <p>
            Le code source est disponible sur{' '}
            <a
              href="https://github.com/NovaIA25/lscript"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>.
          </p>

          <p>
            Une question ? Une suggestion ?{' '}
            <Link href="/contact">Contacte-moi</Link>.
          </p>
        </div>

        {/* CTA */}
        <div className="article-footer">
          <Link href="/blog" className="btn-premium">
            Voir tous les articles
          </Link>
        </div>
      </div>
    </div>
  );
}

