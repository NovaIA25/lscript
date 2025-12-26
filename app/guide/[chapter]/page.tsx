import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { chapters, getChapterBySlug, getAdjacentChapters } from '@/lib/chapters';
import ChapterNav from '@/components/ChapterNav';
import FloatingTOC from '@/components/FloatingTOC';

// Chapter content (SEO-optimized long-form articles)
const chapterContent: Record<string, string> = {
  introduction: `
    <h2 id="bienvenue">Bienvenue dans ce guide</h2>
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

    <h2 id="ce-que-tu-vas-apprendre">Ce que tu vas apprendre</h2>
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

    <h2 id="comment-lire">Comment lire ce guide</h2>
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
    <p class="article-lead">
      "Programmer", "coder", "développer"... Ces mots peuvent sembler intimidants quand on débute. 
      Pourtant, le concept de base est d'une simplicité déconcertante. 
      Dans ce chapitre, on va démystifier tout ça ensemble.
    </p>

    <h2 id="definition">C'est quoi programmer, concrètement ?</h2>
    <p>
      <strong>Programmer, c'est donner des instructions à un ordinateur.</strong>
    </p>
    <p>
      Imagine que tu veuilles expliquer à quelqu'un comment faire un gâteau au chocolat. 
      Tu lui donnerais une liste d'étapes précises, dans un ordre logique :
    </p>
    <ol>
      <li>Prends un grand bol</li>
      <li>Mets 200 grammes de farine</li>
      <li>Ajoute 3 œufs</li>
      <li>Verse 150 grammes de sucre</li>
      <li>Fais fondre 100 grammes de chocolat</li>
      <li>Mélange le tout</li>
      <li>Verse dans un moule</li>
      <li>Mets au four à 180°C pendant 30 minutes</li>
    </ol>
    <p>
      <strong>Programmer, c'est exactement ça</strong> — mais au lieu de parler à un humain, 
      tu parles à une machine.
    </p>
    <p>
      La différence ? Un humain peut improviser s'il manque un ingrédient. 
      Un ordinateur, lui, fera <em>exactement</em> ce que tu lui dis. Ni plus, ni moins.
    </p>

    <div class="callout callout-tip">
      <div class="callout-title">💡 À retenir</div>
      <p>
        Un programme, c'est une recette pour ordinateur. 
        Tu écris les étapes, et la machine les exécute dans l'ordre.
      </p>
    </div>

    <h2 id="pourquoi-code">Pourquoi on dit "code" ?</h2>
    <p>
      Les ordinateurs ne comprennent pas le français, ni l'anglais, ni aucune langue humaine.
    </p>
    <p>
      Pour leur parler, on utilise des <strong>langages de programmation</strong> — 
      des langages spéciaux, avec leurs propres règles de grammaire et de syntaxe.
    </p>
    <p>
      On appelle ça du "code" parce que c'est comme un langage codé : 
      il a une logique précise que seuls ceux qui l'ont appris peuvent lire et écrire.
    </p>

    <h3 id="exemples-langages">Les langages les plus courants</h3>
    <p>Il existe des centaines de langages de programmation. Voici les plus utilisés :</p>
    
    <table class="article-table">
      <thead>
        <tr>
          <th>Langage</th>
          <th>Utilisé pour</th>
          <th>Exemple d'usage</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><strong>JavaScript</strong></td>
          <td>Sites web</td>
          <td>Animer un bouton, charger des données</td>
        </tr>
        <tr>
          <td><strong>Python</strong></td>
          <td>Science, automatisation</td>
          <td>Analyser des données, créer des bots</td>
        </tr>
        <tr>
          <td><strong>Swift</strong></td>
          <td>Applications iPhone</td>
          <td>Créer une app iOS</td>
        </tr>
        <tr>
          <td><strong>Java</strong></td>
          <td>Applications Android</td>
          <td>Créer une app Android</td>
        </tr>
        <tr>
          <td><strong>PHP</strong></td>
          <td>Sites web (serveur)</td>
          <td>WordPress, Symfony</td>
        </tr>
      </tbody>
    </table>

    <p>
      <strong>Bonne nouvelle :</strong> tu n'as pas besoin de tous les apprendre. 
      En maîtriser un ou deux suffit pour la plupart des projets.
    </p>

    <h2 id="exemple-concret">Un exemple de code concret</h2>
    <p>
      Voici un exemple simple en JavaScript. Ce code affiche "Bonjour !" à l'écran :
    </p>
    <pre><code>console.log("Bonjour !");</code></pre>
    <p>
      C'est tout. Une seule ligne. Et pourtant, c'est déjà du code.
    </p>
    <p>
      Décortiquons :
    </p>
    <ul>
      <li><code>console.log</code> → une instruction qui dit "affiche quelque chose"</li>
      <li><code>("Bonjour !")</code> → le texte à afficher</li>
      <li><code>;</code> → le point-virgule indique la fin de l'instruction</li>
    </ul>

    <div class="callout callout-warning">
      <div class="callout-title">⚠️ Erreur fréquente</div>
      <p>
        Beaucoup de débutants pensent que programmer = écrire des tonnes de code compliqué. 
        En réalité, même les logiciels les plus complexes sont composés de milliers de petites instructions simples.
      </p>
    </div>

    <h2 id="ce-que-fait-developpeur">Ce que fait vraiment un développeur</h2>
    <p>
      Un développeur, ce n'est pas quelqu'un qui tape du code à toute vitesse sur un écran noir 
      (même si ça arrive parfois).
    </p>
    <p>
      En réalité, un développeur passe la majorité de son temps à :
    </p>

    <h3 id="comprendre-probleme">1. Comprendre le problème</h3>
    <p>
      Avant d'écrire une seule ligne de code, il faut comprendre ce qu'on veut accomplir.
    </p>
    <p>Exemple : "Je veux que les utilisateurs puissent se connecter à mon site."</p>
    <p>Cette phrase simple cache beaucoup de questions :</p>
    <ul>
      <li>Comment s'identifient-ils ? Email ? Pseudo ?</li>
      <li>Où sont stockés les mots de passe ?</li>
      <li>Que se passe-t-il s'ils oublient leur mot de passe ?</li>
    </ul>

    <h3 id="concevoir-solution">2. Concevoir une solution</h3>
    <p>
      Une fois le problème bien compris, le développeur imagine comment le résoudre.
    </p>
    <p>
      C'est comme dessiner le plan d'une maison avant de poser les briques. 
      On ne code pas tout de suite — on réfléchit d'abord.
    </p>

    <h3 id="ecrire-code">3. Écrire le code</h3>
    <p>
      C'est la partie visible du travail. Le développeur traduit sa solution en instructions 
      que l'ordinateur peut comprendre.
    </p>

    <h3 id="tester">4. Tester</h3>
    <p>
      "Est-ce que ça marche ?" Le développeur vérifie que son code fonctionne correctement, 
      dans tous les cas possibles.
    </p>
    <p>
      Que se passe-t-il si l'utilisateur entre un mauvais mot de passe ? 
      Si le réseau coupe ? Si quelqu'un tente de pirater le système ?
    </p>

    <h3 id="ameliorer">5. Améliorer</h3>
    <p>
      Le premier code qui fonctionne est rarement le meilleur. 
      Le développeur revient souvent sur son travail pour le rendre plus rapide, 
      plus clair, plus sécurisé.
    </p>

    <div class="callout callout-tip">
      <div class="callout-title">💡 Réalité du métier</div>
      <p>
        Les développeurs passent environ 30% de leur temps à écrire du code, 
        et 70% à réfléchir, lire du code existant, et corriger des bugs.
      </p>
    </div>

    <h2 id="idees-recues">Les idées reçues sur la programmation</h2>

    <h3 id="mythe-maths">"Il faut être fort en maths"</h3>
    <p>
      <strong>Faux.</strong> La majorité du code ne nécessite pas de mathématiques avancées. 
      Savoir compter et faire de la logique de base suffit pour 90% des situations.
    </p>
    <p>
      Bien sûr, certains domaines (intelligence artificielle, jeux vidéo 3D, cryptographie) 
      demandent des maths poussées. Mais ce n'est pas la norme.
    </p>

    <h3 id="mythe-genie">"Il faut être un génie"</h3>
    <p>
      <strong>Faux.</strong> La programmation s'apprend. Comme le piano ou la cuisine. 
      Les meilleurs développeurs ne sont pas nés avec un don — ils ont pratiqué.
    </p>

    <h3 id="mythe-age">"C'est trop tard pour apprendre"</h3>
    <p>
      <strong>Faux.</strong> Des gens apprennent à coder à 40, 50, 60 ans et réussissent 
      à se reconvertir ou à créer leurs propres projets.
    </p>

    <h3 id="mythe-vitesse">"Un bon développeur code vite"</h3>
    <p>
      <strong>Faux.</strong> Un bon développeur écrit du code qui fonctionne, 
      qui est facile à comprendre, et qui ne plante pas. La vitesse vient avec l'expérience, 
      mais ce n'est jamais le critère principal.
    </p>

    <h2 id="premier-pas">Par où commencer ?</h2>
    <p>
      Si tu veux apprendre à programmer, voici les étapes recommandées :
    </p>
    <ol>
      <li><strong>Comprends les bases</strong> — C'est ce que tu fais en lisant ce guide</li>
      <li><strong>Choisis un langage</strong> — JavaScript est idéal pour débuter (on peut tout faire avec)</li>
      <li><strong>Pratique quotidiennement</strong> — Même 30 minutes par jour, c'est suffisant</li>
      <li><strong>Fais des projets</strong> — Crée quelque chose qui t'intéresse vraiment</li>
      <li><strong>Ne te décourage pas</strong> — Tout le monde galère au début. C'est normal.</li>
    </ol>

    <h2 id="resume">En résumé</h2>
    <div class="callout callout-summary">
      <div class="callout-title">🧭 Ce qu'il faut retenir</div>
      <ul>
        <li><strong>Programmer</strong> = écrire des instructions pour un ordinateur</li>
        <li>Un <strong>langage de programmation</strong> = la "langue" dans laquelle on écrit ces instructions</li>
        <li>Le travail d'un <strong>développeur</strong> = comprendre un problème, concevoir une solution, l'écrire en code, tester, améliorer</li>
        <li>Pas besoin d'être un <strong>génie en maths</strong> — de la logique et de la pratique suffisent</li>
        <li>Le plus important = <strong>comprendre</strong>, pas aller vite</li>
      </ul>
    </div>

    <p>
      Tu sais maintenant ce que signifie "programmer". 
      Dans le prochain chapitre, on va voir comment fonctionne réellement un ordinateur — 
    </p>
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
