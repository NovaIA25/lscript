import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { chapters, getChapterBySlug, getAdjacentChapters } from '@/lib/chapters';
import ChapterNav from '@/components/ChapterNav';
import FloatingTOC from '@/components/FloatingTOC';

// Chapter content (in a real app, this would come from MDX files)
const chapterContent: Record<string, string> = {
  introduction: `
    <h2>Bienvenue dans ce guide</h2>
    <p>
      Tu veux apprendre à coder, mais tu ne sais pas par où commencer. 
      Tu as essayé des tutoriels, mais tu te retrouves à copier-coller sans comprendre.
      Tu te sens perdu face à la quantité d'informations disponibles.
    </p>
    <p>
      <strong>Ce guide est fait pour toi.</strong>
    </p>
    <p>
      Pas de jargon inutile. Pas de raccourcis. Juste une explication claire, 
      progressive, du monde du développement informatique.
    </p>

    <h2>Ce que tu vas apprendre</h2>
    <p>En lisant ce guide du début à la fin, tu comprendras :</p>
    <ul>
      <li>Ce que signifie vraiment "programmer"</li>
      <li>Comment fonctionne un ordinateur</li>
      <li>Comment le web fonctionne (navigateur, serveur, requêtes)</li>
      <li>La différence entre frontend et backend</li>
      <li>Le rôle de JavaScript</li>
      <li>Les bases du développement mobile</li>
      <li>Comment devenir développeur dans la vraie vie</li>
    </ul>

    <h2>Comment lire ce guide</h2>
    <p>
      Ce guide est conçu pour être lu <strong>dans l'ordre</strong>. 
      Chaque chapitre s'appuie sur le précédent.
    </p>
    <p>
      Prends ton temps. Il n'y a pas de rush. 
      L'objectif n'est pas d'aller vite, mais de <strong>comprendre</strong>.
    </p>
    <p>
      Quand tu es prêt, passe au chapitre suivant.
    </p>
  `,
  programmer: `
    <h2>Programmer = donner des instructions</h2>
    <p>
      Imagine que tu veuilles expliquer à quelqu'un comment faire un gâteau. 
      Tu lui donnerais une liste d'étapes précises :
    </p>
    <ol>
      <li>Prends un bol</li>
      <li>Mets 200g de farine</li>
      <li>Ajoute 3 œufs</li>
      <li>Mélange bien</li>
      <li>Mets au four 30 minutes</li>
    </ol>
    <p>
      <strong>Programmer, c'est exactement ça</strong> — mais pour un ordinateur.
    </p>
    <p>
      Tu écris une liste d'instructions dans un langage que la machine comprend, 
      et elle les exécute une par une, dans l'ordre.
    </p>

    <h2>Pourquoi on dit "code" ?</h2>
    <p>
      Les ordinateurs ne comprennent pas le français. 
      Ils ont besoin qu'on leur parle dans un langage spécial, 
      qu'on appelle un <strong>langage de programmation</strong>.
    </p>
    <p>Il en existe beaucoup :</p>
    <ul>
      <li><strong>JavaScript</strong> — pour les sites web</li>
      <li><strong>Python</strong> — pour la science et l'automatisation</li>
      <li><strong>Swift</strong> — pour les apps iPhone</li>
    </ul>
    <p>
      Chaque langage a sa façon d'écrire les instructions, 
      mais le principe reste toujours le même.
    </p>

    <h2>Ce que fait vraiment un développeur</h2>
    <p>Un développeur, c'est quelqu'un qui :</p>
    <ol>
      <li><strong>Comprend un problème</strong> — "Je veux que les utilisateurs puissent se connecter"</li>
      <li><strong>Réfléchit à une solution</strong> — "Il faut un formulaire, une vérification..."</li>
      <li><strong>Écrit les instructions</strong> — Le fameux "code"</li>
      <li><strong>Teste</strong> — Vérifie que ça marche</li>
      <li><strong>Améliore</strong> — Corrige les bugs, optimise</li>
    </ol>
    <p>
      Ce n'est pas magique. C'est de la logique et de la pratique.
    </p>

    <h2>À retenir</h2>
    <div class="callout callout-summary">
      <div class="callout-title">🧭 En résumé</div>
      <p>
        Programmer = écrire des instructions pour un ordinateur.
        Un développeur résout des problèmes en écrivant du code.
        Il n'y a rien de magique, juste de la logique.
      </p>
    </div>
  `,
};

interface Props {
  params: { chapter: string };
}

export async function generateStaticParams() {
  return chapters.map((chapter) => ({ chapter: chapter.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const chapter = getChapterBySlug(params.chapter);
  if (!chapter) return { title: 'Chapitre non trouvé' };
  
  return {
    title: `${chapter.title} | Guide`,
    description: chapter.description,
  };
}

export default function ChapterPage({ params }: Props) {
  const chapter = getChapterBySlug(params.chapter);
  const adjacent = getAdjacentChapters(params.chapter);
  
  if (!chapter) {
    notFound();
  }

  const content = chapterContent[params.chapter] || `
    <h2>Chapitre en cours de rédaction</h2>
    <p>Ce chapitre sera bientôt disponible. En attendant, tu peux continuer avec les autres chapitres.</p>
  `;

  return (
    <div className="page-content">
      <div className="container">
        <div className="guide-layout">
          <div className="guide-content">
            {/* Chapter header */}
            <header className="article-header">
              <span 
                className="article-card-category" 
                style={{ marginBottom: '1rem', display: 'inline-block' }}
              >
                Chapitre {chapter.id}
              </span>
              <h1>{chapter.title}</h1>
            </header>

            {/* Chapter content */}
            <div 
              className="article-content"
              dangerouslySetInnerHTML={{ __html: content }}
            />

            {/* Chapter navigation */}
            <ChapterNav 
              prev={adjacent.prev}
              next={adjacent.next}
              currentIndex={adjacent.currentIndex}
              total={adjacent.total}
            />
          </div>

          {/* Floating TOC sidebar */}
          <aside className="guide-sidebar">
            <FloatingTOC />
          </aside>
        </div>
      </div>
    </div>
  );
}
