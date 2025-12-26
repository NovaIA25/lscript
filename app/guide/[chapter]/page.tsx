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
  ordinateur: `
    <p class="article-lead">
      Un ordinateur peut sembler magique. Tu cliques, et des choses se passent. 
      Mais comment ça fonctionne vraiment à l'intérieur ? Démystifions la machine.
    </p>

    <h2 id="composants">Les composants essentiels</h2>
    <p>Un ordinateur, c'est essentiellement 4 composants qui travaillent ensemble :</p>

    <h3 id="processeur">Le processeur (CPU)</h3>
    <p>
      C'est le <strong>cerveau</strong> de l'ordinateur. Il exécute les instructions de tes programmes, 
      une par une, à une vitesse vertigineuse (des milliards par seconde).
    </p>

    <h3 id="memoire">La mémoire vive (RAM)</h3>
    <p>
      C'est la <strong>mémoire de travail</strong>. Elle stocke temporairement les données 
      que le processeur utilise en ce moment. Quand tu éteins l'ordinateur, elle s'efface.
    </p>

    <h3 id="stockage">Le stockage (SSD/Disque dur)</h3>
    <p>
      C'est la <strong>mémoire permanente</strong>. Tes fichiers, tes applications, tout est ici. 
      Ces données restent même quand l'ordinateur est éteint.
    </p>

    <h3 id="carte-mere">La carte mère</h3>
    <p>
      C'est le <strong>système nerveux</strong> qui connecte tous les composants entre eux 
      et leur permet de communiquer.
    </p>

    <div class="callout callout-tip">
      <div class="callout-title">💡 Analogie</div>
      <p>
        Imagine une cuisine : le chef (CPU) a besoin d'un plan de travail (RAM) pour préparer les plats, 
        d'un réfrigérateur (stockage) pour garder les ingrédients, et d'une cuisine équipée (carte mère) 
        pour tout connecter.
      </p>
    </div>

    <h2 id="binaire">Le langage binaire</h2>
    <p>
      À la base, un ordinateur ne comprend qu'une seule chose : <strong>le courant électrique</strong>.
    </p>
    <p>
      Soit le courant passe (1), soit il ne passe pas (0). C'est le <strong>langage binaire</strong>.
    </p>
    <p>
      Tout ce que tu vois sur ton écran — texte, images, vidéos — est représenté par des combinaisons 
      de 0 et de 1. Par exemple, la lettre "A" s'écrit 01000001 en binaire.
    </p>

    <div class="callout callout-summary">
      <div class="callout-title">🧭 Ce qu'il faut retenir</div>
      <ul>
        <li>Le <strong>processeur</strong> exécute les instructions</li>
        <li>La <strong>RAM</strong> stocke les données temporaires</li>
        <li>Le <strong>stockage</strong> garde les données en permanence</li>
        <li>Tout est représenté en <strong>binaire</strong> (0 et 1)</li>
      </ul>
    </div>
  `,
  web: `
    <p class="article-lead">
      Tu utilises le web tous les jours. Mais que se passe-t-il vraiment quand tu tapes une adresse 
      dans ton navigateur ? Voyons ça ensemble.
    </p>

    <h2 id="client-serveur">Le modèle client-serveur</h2>
    <p>
      Le web fonctionne sur un principe simple : <strong>demande et réponse</strong>.
    </p>
    <ul>
      <li>Ton navigateur (Chrome, Firefox) est le <strong>client</strong> — il demande des pages</li>
      <li>Un ordinateur distant est le <strong>serveur</strong> — il répond avec le contenu</li>
    </ul>

    <h2 id="url">Que contient une URL ?</h2>
    <p>Prenons l'exemple : <code>https://lscript.fr/guide</code></p>
    <ul>
      <li><code>https://</code> → le protocole sécurisé</li>
      <li><code>lscript.fr</code> → le nom de domaine (l'adresse du serveur)</li>
      <li><code>/guide</code> → le chemin vers une page spécifique</li>
    </ul>

    <h2 id="requete-http">Comment fonctionne une requête</h2>
    <ol>
      <li>Tu tapes une URL dans ton navigateur</li>
      <li>Le navigateur trouve l'adresse IP du serveur (grâce au DNS)</li>
      <li>Il envoie une <strong>requête HTTP</strong> au serveur</li>
      <li>Le serveur traite la demande et renvoie une <strong>réponse</strong></li>
      <li>Le navigateur affiche le contenu (HTML, CSS, JavaScript)</li>
    </ol>

    <div class="callout callout-tip">
      <div class="callout-title">💡 En pratique</div>
      <p>
        Tout ça se passe en quelques millisecondes. Quand tu cliques sur un lien, 
        des dizaines de requêtes sont envoyées pour charger la page complète.
      </p>
    </div>

    <div class="callout callout-summary">
      <div class="callout-title">🧭 Ce qu'il faut retenir</div>
      <ul>
        <li>Le web fonctionne en <strong>client-serveur</strong></li>
        <li>Le navigateur envoie des <strong>requêtes HTTP</strong></li>
        <li>Le serveur répond avec du <strong>HTML, CSS, JavaScript</strong></li>
      </ul>
    </div>
  `,
  'frontend-backend': `
    <p class="article-lead">
      Frontend, backend... Ces termes reviennent constamment. Quelle est la différence ? 
      Et pourquoi est-ce important de les distinguer ?
    </p>

    <h2 id="frontend">Le Frontend (côté client)</h2>
    <p>
      Le frontend, c'est tout ce que l'utilisateur <strong>voit et touche</strong> directement.
    </p>
    <p>Technologies principales :</p>
    <ul>
      <li><strong>HTML</strong> → la structure de la page</li>
      <li><strong>CSS</strong> → le style et le design</li>
      <li><strong>JavaScript</strong> → l'interactivité</li>
    </ul>

    <h2 id="backend">Le Backend (côté serveur)</h2>
    <p>
      Le backend, c'est tout ce qui se passe <strong>derrière le rideau</strong>, côté serveur.
    </p>
    <p>Il gère :</p>
    <ul>
      <li>La <strong>logique métier</strong> (calculs, règles)</li>
      <li>La <strong>base de données</strong> (stockage des informations)</li>
      <li>La <strong>sécurité</strong> (authentification, permissions)</li>
    </ul>

    <div class="callout callout-tip">
      <div class="callout-title">💡 Analogie restaurant</div>
      <p>
        Le frontend, c'est la salle du restaurant (ce que le client voit). 
        Le backend, c'est la cuisine (où tout est préparé).
      </p>
    </div>

    <h2 id="fullstack">Et le Fullstack ?</h2>
    <p>
      Un développeur <strong>fullstack</strong> maîtrise les deux. Il peut créer une application 
      complète de A à Z.
    </p>

    <div class="callout callout-summary">
      <div class="callout-title">🧭 Ce qu'il faut retenir</div>
      <ul>
        <li><strong>Frontend</strong> = interface visible (HTML, CSS, JS)</li>
        <li><strong>Backend</strong> = serveur et base de données</li>
        <li><strong>Fullstack</strong> = les deux compétences réunies</li>
      </ul>
    </div>
  `,
  javascript: `
    <p class="article-lead">
      JavaScript est LE langage du web. Il est partout : sites web, applications mobiles, 
      serveurs... Pourquoi est-il si populaire ?
    </p>

    <h2 id="role">Le rôle de JavaScript</h2>
    <p>
      À l'origine, JavaScript servait à ajouter de l'<strong>interactivité</strong> aux pages web :
    </p>
    <ul>
      <li>Animer un menu déroulant</li>
      <li>Valider un formulaire avant envoi</li>
      <li>Charger du contenu sans rafraîchir la page</li>
    </ul>

    <h2 id="evolution">L'évolution de JavaScript</h2>
    <p>
      Aujourd'hui, JavaScript peut faire bien plus :
    </p>
    <ul>
      <li><strong>Frontend</strong> → avec React, Vue, Angular</li>
      <li><strong>Backend</strong> → avec Node.js</li>
      <li><strong>Mobile</strong> → avec React Native</li>
      <li><strong>Desktop</strong> → avec Electron</li>
    </ul>

    <div class="callout callout-tip">
      <div class="callout-title">💡 Pourquoi JavaScript ?</div>
      <p>
        C'est le seul langage que tous les navigateurs comprennent nativement. 
        Et grâce à Node.js, on peut aussi l'utiliser côté serveur.
      </p>
    </div>

    <h2 id="exemple">Exemple de code</h2>
    <pre><code>// Afficher un message
alert("Bienvenue sur Lscript !");

// Changer le contenu d'un élément
document.querySelector("h1").textContent = "Hello World";</code></pre>

    <div class="callout callout-summary">
      <div class="callout-title">🧭 Ce qu'il faut retenir</div>
      <ul>
        <li>JavaScript rend les pages <strong>interactives</strong></li>
        <li>Il fonctionne côté <strong>client ET serveur</strong></li>
        <li>C'est le langage idéal pour <strong>débuter</strong></li>
      </ul>
    </div>
  `,
  backend: `
    <p class="article-lead">
      Le backend, c'est la partie invisible mais essentielle de toute application. 
      Serveurs, APIs, bases de données... Explorons ce monde.
    </p>

    <h2 id="serveur">Qu'est-ce qu'un serveur ?</h2>
    <p>
      Un serveur, c'est simplement un ordinateur qui <strong>écoute et répond</strong> 
      aux requêtes des clients 24h/24.
    </p>

    <h2 id="api">Les APIs</h2>
    <p>
      Une API (Application Programming Interface) permet à différentes applications 
      de <strong>communiquer entre elles</strong>.
    </p>
    <p>Exemple : quand tu te connectes avec Google sur un site, le site utilise l'API de Google.</p>

    <h2 id="bdd">Les bases de données</h2>
    <p>
      Les bases de données stockent toutes les informations de manière organisée :
    </p>
    <ul>
      <li><strong>SQL</strong> (MySQL, PostgreSQL) → données structurées en tables</li>
      <li><strong>NoSQL</strong> (MongoDB) → données plus flexibles</li>
    </ul>

    <div class="callout callout-tip">
      <div class="callout-title">💡 Langages backend populaires</div>
      <p>
        Node.js (JavaScript), Python, PHP, Java, Go, Ruby... 
        Chacun a ses forces selon le projet.
      </p>
    </div>

    <div class="callout callout-summary">
      <div class="callout-title">🧭 Ce qu'il faut retenir</div>
      <ul>
        <li>Le <strong>serveur</strong> traite les requêtes</li>
        <li>Les <strong>APIs</strong> permettent la communication</li>
        <li>Les <strong>bases de données</strong> stockent les informations</li>
      </ul>
    </div>
  `,
  mobile: `
    <p class="article-lead">
      Créer une application mobile est le rêve de beaucoup de débutants. 
      Quelles sont les options ? Par où commencer ?
    </p>

    <h2 id="natif">Le développement natif</h2>
    <p>
      Développer <strong>spécifiquement</strong> pour chaque plateforme :
    </p>
    <ul>
      <li><strong>iOS</strong> → Swift ou Objective-C</li>
      <li><strong>Android</strong> → Kotlin ou Java</li>
    </ul>
    <p>Avantages : performances optimales, accès à toutes les fonctionnalités.</p>
    <p>Inconvénient : il faut maintenir 2 codes différents.</p>

    <h2 id="cross-platform">Le cross-platform</h2>
    <p>
      Un seul code pour les deux plateformes :
    </p>
    <ul>
      <li><strong>React Native</strong> → JavaScript</li>
      <li><strong>Flutter</strong> → Dart</li>
      <li><strong>Expo</strong> → JavaScript simplifié</li>
    </ul>

    <div class="callout callout-tip">
      <div class="callout-title">💡 Recommandation pour débuter</div>
      <p>
        React Native avec Expo est idéal pour débuter. Tu codes en JavaScript 
        et tu peux tester directement sur ton téléphone.
      </p>
    </div>

    <h2 id="pwa">Les PWA (Progressive Web Apps)</h2>
    <p>
      Une PWA est un site web qui se comporte comme une application. 
      Pas besoin de passer par les stores !
    </p>

    <div class="callout callout-summary">
      <div class="callout-title">🧭 Ce qu'il faut retenir</div>
      <ul>
        <li><strong>Natif</strong> = meilleures performances, plus complexe</li>
        <li><strong>Cross-platform</strong> = un code pour tout</li>
        <li><strong>React Native + Expo</strong> = idéal pour débuter</li>
      </ul>
    </div>
  `,
  metier: `
    <p class="article-lead">
      Le métier de développeur fait rêver. Mais quelle est la réalité du terrain ? 
      Salaires, formations, débouchés... Faisons le point.
    </p>

    <h2 id="parcours">Les parcours possibles</h2>
    <ul>
      <li><strong>École d'ingénieurs</strong> → 5 ans, très technique</li>
      <li><strong>Université</strong> → Licence/Master informatique</li>
      <li><strong>Bootcamp</strong> → 3-6 mois intensifs</li>
      <li><strong>Autodidacte</strong> → à ton rythme, avec des ressources en ligne</li>
    </ul>

    <div class="callout callout-tip">
      <div class="callout-title">💡 La vérité</div>
      <p>
        Le diplôme compte moins que les compétences. Beaucoup de développeurs 
        en poste sont autodidactes ou sortent de bootcamps.
      </p>
    </div>

    <h2 id="salaires">Les salaires</h2>
    <p>En France, en 2024 :</p>
    <ul>
      <li><strong>Junior</strong> (0-2 ans) → 32-42k€/an</li>
      <li><strong>Confirmé</strong> (2-5 ans) → 42-55k€/an</li>
      <li><strong>Senior</strong> (5+ ans) → 55-80k€/an</li>
    </ul>
    <p>Les salaires varient selon la ville, la technologie et l'entreprise.</p>

    <h2 id="realite">La réalité du métier</h2>
    <p>Ce qu'on ne te dit pas toujours :</p>
    <ul>
      <li>Tu vas passer beaucoup de temps à <strong>chercher des bugs</strong></li>
      <li>La technologie évolue vite, tu <strong>apprends constamment</strong></li>
      <li>Le travail en équipe est <strong>essentiel</strong></li>
      <li>La communication compte autant que le code</li>
    </ul>

    <div class="callout callout-summary">
      <div class="callout-title">🧭 Ce qu'il faut retenir</div>
      <ul>
        <li>Plusieurs parcours mènent au métier de dev</li>
        <li>Les compétences comptent plus que le diplôme</li>
        <li>C'est un métier de formation continue</li>
        <li>Les opportunités sont nombreuses</li>
      </ul>
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
