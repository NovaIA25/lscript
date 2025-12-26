---
title: "Comment créer un site web ? Guide complet débutant 2025"
date: "2025-01-21"
category: "Web"
excerpt: "Guide pas à pas pour créer ton premier site web en 2025. HTML, CSS, JavaScript, hébergement gratuit : tout ce qu'il faut savoir pour débuter sans expérience."
readingTime: "10 min"
keywords: ["comment créer un site web", "créer site web débutant", "faire un site internet", "créer site web gratuit"]
---

# Comment créer un site web ? Guide complet débutant 2025

Tu veux **créer ton premier site web** mais tu ne sais pas par où commencer ? Tu es au bon endroit. Je vais te montrer exactement comment passer de zéro à un site en ligne, étape par étape, sans aucune connaissance préalable.

## Ce que tu vas apprendre

À la fin de ce guide, tu sauras :
- ✅ Les 3 langages essentiels pour créer un site (HTML, CSS, JavaScript)
- ✅ Comment structurer ton premier site
- ✅ Mettre ton site en ligne **gratuitement**
- ✅ Les outils dont tu as besoin (tous gratuits)

**Temps nécessaire** : 2-4 heures pour ton premier site simple.

## Qu'est-ce qu'un site web exactement ?

### Les 3 composantes d'un site web

Un site web, c'est comme une maison :

| Composante | Analogie | Langage | Rôle |
|------------|----------|---------|------|
| **Structure** | Les murs, pièces | HTML | Contenu et organisation |
| **Design** | Peinture, déco | CSS | Apparence et style |
| **Interactivité** | Électricité, portes automatiques | JavaScript | Fonctionnalités dynamiques |

### Comment fonctionne un site web ?

**Circuit simple** :

1. Tu tapes une URL dans ton navigateur (ex: google.com)
2. Ton navigateur envoie une **requête** au **serveur** qui héberge le site
3. Le serveur renvoie les fichiers HTML, CSS, JavaScript
4. Ton navigateur **affiche** la page

**Serveur** = Ordinateur toujours allumé qui stocke ton site et le rend accessible 24h/24.

## Ce dont tu as besoin pour commencer

### 1. Un éditeur de code (gratuit)

**Recommandation : VS Code**

Pourquoi ?
- ✅ Gratuit et open-source
- ✅ Le plus populaire (utilisé par des millions de développeurs)
- ✅ Extensions pratiques (auto-complétion, coloration syntaxe)
- ✅ Fonctionne sur Windows, Mac, Linux

**Installation** :
1. Va sur [code.visualstudio.com](https://code.visualstudio.com)
2. Télécharge et installe
3. C'est prêt !

**Alternatives** :
- Sublime Text (simple et rapide)
- Atom (par GitHub)
- Notepad++ (Windows uniquement)

### 2. Un navigateur web moderne

Tu en as déjà un ! Chrome, Firefox, Edge ou Safari.

**Astuce pro** : Utilise les **DevTools** (F12 ou clic droit → Inspecter) pour voir le code de n'importe quel site.

### 3. Une connexion internet

Pour télécharger des ressources et mettre ton site en ligne.

**C'est tout ! Aucun logiciel payant nécessaire.**

## Étape 1 : Créer ta première page HTML

### C'est quoi le HTML ?

**HTML** (HyperText Markup Language) = Le squelette de ton site.

Il structure le contenu avec des **balises** :
- `<h1>` = Titre principal
- `<p>` = Paragraphe
- `<img>` = Image
- `<a>` = Lien

### Créer ton premier fichier HTML

**1. Crée un dossier** pour ton site (ex: "mon-premier-site")

**2. Crée un fichier** `index.html` dans ce dossier

**3. Copie ce code** :

```html
<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Mon Premier Site</title>
</head>
<body>
    <h1>Bienvenue sur mon site !</h1>
    <p>Ceci est mon premier site web créé avec HTML.</p>

    <h2>À propos de moi</h2>
    <p>Je m'appelle [Ton nom] et j'apprends à créer des sites web.</p>

    <h2>Mes hobbies</h2>
    <ul>
        <li>Lecture</li>
        <li>Musique</li>
        <li>Programmation</li>
    </ul>

    <a href="https://www.google.com">Visiter Google</a>
</body>
</html>
```

**4. Ouvre le fichier** dans ton navigateur (double-clic sur index.html)

**🎉 Félicitations, tu viens de créer ta première page web !**

### Comprendre la structure HTML

```html
<!DOCTYPE html>  <!-- Déclare que c'est un document HTML5 -->
<html lang="fr"> <!-- Début du document, langue française -->
<head>           <!-- En-tête (infos invisibles sur la page) -->
    <meta charset="UTF-8">  <!-- Encodage des caractères -->
    <title>Mon Premier Site</title>  <!-- Titre de l'onglet -->
</head>
<body>           <!-- Corps du document (contenu visible) -->
    <!-- Ton contenu ici -->
</body>
</html>
```

### Les balises HTML essentielles

| Balise | Utilisation | Exemple |
|--------|-------------|---------|
| `<h1>` à `<h6>` | Titres (h1 = plus grand) | `<h1>Titre principal</h1>` |
| `<p>` | Paragraphe | `<p>Texte normal</p>` |
| `<a href="">` | Lien | `<a href="https://...">Cliquez ici</a>` |
| `<img src="">` | Image | `<img src="photo.jpg" alt="Description">` |
| `<ul>` et `<li>` | Liste à puces | `<ul><li>Item 1</li></ul>` |
| `<div>` | Conteneur générique | `<div>Contenu groupé</div>` |
| `<button>` | Bouton | `<button>Cliquez</button>` |

### Ajouter une image

**1. Télécharge une image** et mets-la dans ton dossier

**2. Ajoute cette ligne** dans ton HTML :

```html
<img src="mon-image.jpg" alt="Description de l'image">
```

**Attributs importants** :
- `src` = chemin vers l'image
- `alt` = description (pour accessibilité et SEO)

## Étape 2 : Styliser avec le CSS

### C'est quoi le CSS ?

**CSS** (Cascading Style Sheets) = La décoration de ton site.

Il contrôle :
- Couleurs
- Tailles de texte
- Espacement
- Mise en page
- Animations

### Ajouter du CSS

**Méthode 1 : CSS interne (dans le HTML)**

Ajoute ceci dans la balise `<head>` de ton index.html :

```html
<style>
    body {
        font-family: Arial, sans-serif;
        background-color: #f0f0f0;
        margin: 0;
        padding: 20px;
    }

    h1 {
        color: #2c3e50;
        text-align: center;
    }

    p {
        color: #34495e;
        line-height: 1.6;
    }

    a {
        color: #3498db;
        text-decoration: none;
    }

    a:hover {
        text-decoration: underline;
    }
</style>
```

**Méthode 2 : CSS externe (recommandé pour les gros projets)**

**1. Crée un fichier** `style.css` dans ton dossier

**2. Mets ton CSS dedans** (le code ci-dessus, sans les balises `<style>`)

**3. Lie le CSS au HTML** en ajoutant dans `<head>` :

```html
<link rel="stylesheet" href="style.css">
```

### Exemples de styles CSS

**Changer les couleurs** :

```css
h1 {
    color: #e74c3c; /* Rouge */
    background-color: #ecf0f1; /* Gris clair */
    padding: 10px;
}
```

**Centrer un élément** :

```css
.center {
    text-align: center;
}
```

Puis dans le HTML :
```html
<p class="center">Ce texte est centré</p>
```

**Créer un bouton stylisé** :

```css
button {
    background-color: #3498db; /* Bleu */
    color: white;
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    font-size: 16px;
}

button:hover {
    background-color: #2980b9; /* Bleu plus foncé au survol */
}
```

### Mise en page avec Flexbox

**Flexbox** = Système moderne pour organiser les éléments.

**Exemple : 3 colonnes côte à côte**

**HTML** :
```html
<div class="container">
    <div class="box">Colonne 1</div>
    <div class="box">Colonne 2</div>
    <div class="box">Colonne 3</div>
</div>
```

**CSS** :
```css
.container {
    display: flex;
    gap: 20px;
}

.box {
    flex: 1;
    background-color: #3498db;
    color: white;
    padding: 20px;
    text-align: center;
}
```

**Résultat** : 3 boîtes bleues alignées horizontalement avec espacement.

## Étape 3 : Ajouter de l'interactivité avec JavaScript

### C'est quoi JavaScript ?

**JavaScript** = Le langage qui rend ton site **interactif**.

Exemples :
- Réagir aux clics
- Valider des formulaires
- Créer des animations
- Modifier le contenu dynamiquement

### Ton premier script JavaScript

**Ajoute ceci avant la balise de fermeture `</body>` :**

```html
<script>
    // Afficher un message quand on clique sur le bouton
    function direBonjour() {
        alert("Bonjour ! Bienvenue sur mon site 👋");
    }
</script>

<button onclick="direBonjour()">Clique-moi !</button>
```

**Résultat** : Quand tu cliques sur le bouton, une popup s'affiche.

### Changer le contenu de la page

**HTML** :
```html
<p id="message">Texte original</p>
<button onclick="changerTexte()">Changer le texte</button>

<script>
    function changerTexte() {
        document.getElementById("message").textContent = "Le texte a changé !";
    }
</script>
```

### Compteur de clics

```html
<p>Tu as cliqué <span id="compteur">0</span> fois</p>
<button onclick="incrementer()">Clique !</button>

<script>
    let clics = 0;

    function incrementer() {
        clics++;
        document.getElementById("compteur").textContent = clics;
    }
</script>
```

## Projet complet : Site portfolio personnel

Créons un vrai site portfolio avec tout ce que tu as appris.

### Structure de fichiers

```
mon-portfolio/
├── index.html
├── style.css
└── photo.jpg (ta photo)
```

### index.html

```html
<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Portfolio - [Ton Nom]</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <!-- En-tête -->
    <header>
        <h1>Portfolio de [Ton Nom]</h1>
        <p>Développeur Web Débutant</p>
    </header>

    <!-- Navigation -->
    <nav>
        <a href="#about">À propos</a>
        <a href="#skills">Compétences</a>
        <a href="#projects">Projets</a>
        <a href="#contact">Contact</a>
    </nav>

    <!-- Section À propos -->
    <section id="about">
        <h2>À propos de moi</h2>
        <img src="photo.jpg" alt="Ma photo" class="profile-img">
        <p>
            Je suis un développeur web débutant passionné par la création de sites internet.
            J'apprends HTML, CSS et JavaScript pour réaliser mes projets.
        </p>
    </section>

    <!-- Section Compétences -->
    <section id="skills">
        <h2>Mes compétences</h2>
        <div class="skills-grid">
            <div class="skill-card">
                <h3>HTML</h3>
                <p>Structure de pages web</p>
            </div>
            <div class="skill-card">
                <h3>CSS</h3>
                <p>Design et mise en page</p>
            </div>
            <div class="skill-card">
                <h3>JavaScript</h3>
                <p>Interactivité</p>
            </div>
        </div>
    </section>

    <!-- Section Projets -->
    <section id="projects">
        <h2>Mes projets</h2>
        <div class="project">
            <h3>Site Portfolio</h3>
            <p>Mon premier site web créé avec HTML, CSS et JavaScript</p>
        </div>
    </section>

    <!-- Section Contact -->
    <section id="contact">
        <h2>Contact</h2>
        <p>Email : <a href="mailto:ton-email@example.com">ton-email@example.com</a></p>
        <p>LinkedIn : <a href="#">Ton profil LinkedIn</a></p>
        <p>GitHub : <a href="#">Ton GitHub</a></p>
    </section>

    <!-- Pied de page -->
    <footer>
        <p>&copy; 2025 [Ton Nom]. Tous droits réservés.</p>
    </footer>
</body>
</html>
```

### style.css

```css
/* Reset et styles de base */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    line-height: 1.6;
    color: #333;
}

/* En-tête */
header {
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    color: white;
    text-align: center;
    padding: 60px 20px;
}

header h1 {
    font-size: 2.5rem;
    margin-bottom: 10px;
}

header p {
    font-size: 1.2rem;
    opacity: 0.9;
}

/* Navigation */
nav {
    background-color: #2c3e50;
    padding: 15px;
    text-align: center;
    position: sticky;
    top: 0;
    z-index: 100;
}

nav a {
    color: white;
    text-decoration: none;
    margin: 0 15px;
    font-weight: 500;
    transition: color 0.3s;
}

nav a:hover {
    color: #3498db;
}

/* Sections */
section {
    max-width: 1000px;
    margin: 60px auto;
    padding: 0 20px;
}

section h2 {
    font-size: 2rem;
    margin-bottom: 30px;
    color: #2c3e50;
    text-align: center;
}

/* Photo de profil */
.profile-img {
    width: 200px;
    height: 200px;
    border-radius: 50%;
    display: block;
    margin: 0 auto 20px;
    object-fit: cover;
    border: 5px solid #667eea;
}

/* Grille de compétences */
.skills-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 20px;
    margin-top: 30px;
}

.skill-card {
    background-color: #ecf0f1;
    padding: 30px;
    border-radius: 10px;
    text-align: center;
    transition: transform 0.3s, box-shadow 0.3s;
}

.skill-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 20px rgba(0,0,0,0.1);
}

.skill-card h3 {
    color: #667eea;
    margin-bottom: 10px;
}

/* Projets */
.project {
    background-color: #f8f9fa;
    padding: 25px;
    border-radius: 10px;
    margin-bottom: 20px;
    border-left: 4px solid #667eea;
}

.project h3 {
    color: #2c3e50;
    margin-bottom: 10px;
}

/* Contact */
#contact a {
    color: #3498db;
    text-decoration: none;
}

#contact a:hover {
    text-decoration: underline;
}

/* Footer */
footer {
    background-color: #2c3e50;
    color: white;
    text-align: center;
    padding: 20px;
    margin-top: 60px;
}

/* Responsive (mobile) */
@media (max-width: 768px) {
    header h1 {
        font-size: 2rem;
    }

    nav a {
        display: block;
        margin: 5px 0;
    }

    .skills-grid {
        grid-template-columns: 1fr;
    }
}
```

**🎉 Tu as maintenant un site portfolio professionnel !**

## Étape 4 : Mettre ton site en ligne (gratuitement)

### Option 1 : GitHub Pages (recommandé)

**Avantages** :
- ✅ 100% gratuit
- ✅ Hébergement illimité
- ✅ Domaine personnalisé possible
- ✅ Utilisé par des millions de développeurs

**Étapes** :

**1. Crée un compte GitHub** ([github.com](https://github.com))

**2. Crée un nouveau repository**
- Nom : `ton-nom-utilisateur.github.io` (remplace par ton vrai nom)
- Public
- Sans README

**3. Upload tes fichiers**
- Glisse-dépose index.html, style.css, etc. dans le repository

**4. Active GitHub Pages**
- Settings → Pages
- Source : main branch
- Save

**5. Ton site est en ligne !**
- URL : `https://ton-nom-utilisateur.github.io`

**Délai** : 2-5 minutes pour que le site soit accessible.

### Option 2 : Netlify

**Avantages** :
- Déploiement ultra simple (glisser-déposer)
- HTTPS automatique
- Domaine personnalisé gratuit

**Étapes** :

1. Va sur [netlify.com](https://www.netlify.com)
2. Crée un compte (avec GitHub recommandé)
3. "Add new site" → "Deploy manually"
4. Glisse-dépose ton dossier
5. Site en ligne en 30 secondes !

### Option 3 : Vercel

Même principe que Netlify, excellent pour les sites Next.js plus tard.

## Optimiser ton site

### 1. Rendre ton site responsive (mobile-friendly)

**Ajoute dans `<head>` :**

```html
<meta name="viewport" content="width=device-width, initial-scale=1.0">
```

**CSS responsive avec media queries** :

```css
/* Desktop par défaut */
.container {
    display: flex;
}

/* Mobile (écrans < 768px) */
@media (max-width: 768px) {
    .container {
        display: block; /* Passe en colonne sur mobile */
    }
}
```

### 2. Améliorer la vitesse

- Compresse tes images ([tinypng.com](https://tinypng.com))
- Minifie ton CSS/JS ([minifier.org](https://www.minifier.org))
- Utilise des polices web légères

### 3. SEO (référencement Google)

**Balises meta importantes** :

```html
<head>
    <title>Portfolio - [Ton Nom] | Développeur Web</title>
    <meta name="description" content="Portfolio de [Ton Nom], développeur web spécialisé en HTML, CSS et JavaScript.">
    <meta name="keywords" content="développeur web, HTML, CSS, JavaScript, portfolio">
</head>
```

**Balises sémantiques** :
```html
<header>, <nav>, <main>, <section>, <article>, <footer>
```

Plutôt que tout en `<div>`.

## Les erreurs de débutant à éviter

### ❌ Erreur 1 : Oublier de fermer les balises

```html
<!-- MAUVAIS -->
<p>Texte
<p>Autre texte

<!-- BON -->
<p>Texte</p>
<p>Autre texte</p>
```

### ❌ Erreur 2 : Utiliser des espaces dans les noms de fichiers

```
<!-- MAUVAIS -->
Mon Site.html

<!-- BON -->
mon-site.html
```

### ❌ Erreur 3 : Mettre le CSS/JS inline partout

```html
<!-- MAUVAIS (difficile à maintenir) -->
<p style="color: red; font-size: 16px;">Texte</p>

<!-- BON (CSS séparé) -->
<p class="texte-rouge">Texte</p>
```

### ❌ Erreur 4 : Ne pas tester sur mobile

50%+ du trafic web vient du mobile. Teste toujours ton site sur téléphone !

**Outil** : Mode responsive dans Chrome DevTools (F12 → icône mobile)

## Aller plus loin

### Apprendre JavaScript en profondeur

- [JavaScript.info](https://javascript.info) (tutoriel complet gratuit)
- [freeCodeCamp](https://www.freecodecamp.org) (exercices interactifs)

### Découvrir les frameworks

Une fois HTML/CSS/JS maîtrisés (3-6 mois), explore :
- **React** (frontend, le plus populaire)
- **Vue.js** (frontend, plus simple que React)
- **Next.js** (fullstack, génial pour les sites modernes)

### Backend et bases de données

Pour créer des sites dynamiques (inscription, login, stockage de données) :
- **Node.js** (JavaScript côté serveur)
- **MongoDB** ou **PostgreSQL** (bases de données)

## Ce qu'il faut retenir

✅ **Créer un site web = HTML (structure) + CSS (style) + JavaScript (interactivité)**

**Les 3 langages essentiels :**
1. **HTML** : Balises pour organiser le contenu
2. **CSS** : Styles pour rendre le site beau
3. **JavaScript** : Code pour rendre le site interactif

**Outils gratuits nécessaires :**
- Éditeur de code (VS Code recommandé)
- Navigateur web
- Hébergement gratuit (GitHub Pages, Netlify, Vercel)

**Étapes pour créer un site :**
1. Écrire le HTML (structure)
2. Styliser avec CSS
3. Ajouter de l'interactivité (JS)
4. Mettre en ligne

**Erreurs à éviter :**
- Balises non fermées
- Espaces dans les noms de fichiers
- Ne pas tester sur mobile

## Et maintenant ?

Tu as toutes les clés pour créer ton premier site web. **La prochaine étape ? Passer à l'action !**

📚 **Articles recommandés :**
- [C'est quoi JavaScript ?](/blog/javascript-c-est-quoi) (article à venir)
- [C'est quoi le CSS ?](/blog/css-c-est-quoi) (article à venir)
- [Comment devenir développeur web ?](/blog/comment-devenir-developpeur-web-2025)
- [Guide complet pour débutants](/guide)

🚀 **Prochaines étapes :**
1. **Aujourd'hui** : Crée ta première page HTML
2. **Cette semaine** : Termine ton site portfolio
3. **Ce mois-ci** : Mets-le en ligne sur GitHub Pages
4. **Dans 3 mois** : Apprends React pour des sites plus avancés

**N'attends pas d'être "prêt". Commence dès maintenant, apprends en faisant, et améliore ton site au fur et à mesure.** 💪

Let's code! 🚀