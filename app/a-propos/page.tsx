import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'À propos',
  description: 'Découvre qui est derrière Lscript et pourquoi ce blog existe.',
};

export default function AboutPage() {
  return (
    <div className="page-content">
      <div className="container">
        <div style={{ maxWidth: '700px' }}>
          <h1>À propos de Lscript</h1>
          
          <div className="article-content" style={{ marginTop: '2rem' }}>
            <h2>Pourquoi ce blog existe</h2>
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
              Chaque article répond à une seule question. Pas plus. L'objectif n'est 
              pas d'être exhaustif, mais d'être clair.
            </p>
            <ul>
              <li>Des mots simples, pas de jargon inutile</li>
              <li>Des exemples concrets du quotidien</li>
              <li>Zéro jugement si tu ne sais pas encore</li>
              <li>Un rythme adapté aux débutants</li>
            </ul>

            <h2>Pour qui ?</h2>
            <p>
              Ce blog est fait pour toi si tu es :
            </p>
            <ul>
              <li>Débutant complet, tu n'as jamais codé</li>
              <li>En reconversion, tu veux changer de métier</li>
              <li>Étudiant perdu, les cours vont trop vite</li>
              <li>Curieux, tu veux juste comprendre</li>
            </ul>

            <h2>Contact</h2>
            <p>
              Une question ? Une suggestion d'article ? 
              N'hésite pas à utiliser le <a href="/contact" style={{ color: 'var(--color-accent)' }}>formulaire de contact</a>.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
