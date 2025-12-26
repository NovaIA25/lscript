---
title: "Comment créer son premier site web de A à Z (guide pratique 2025)"
date: "2024-12-26"
category: "web"
excerpt: "Tu veux créer ton premier site web mais tu ne sais pas par où commencer ? Ce tutoriel te guide pas à pas : des fichiers de base jusqu'à la mise en ligne."
readingTime: "14 min"
keywords:
  [
    "créer site web",
    "premier site",
    "HTML CSS tutoriel",
    "héberger site",
    "site web débutant",
  ]
---

Tu veux créer ton **premier site web** ? Bonne nouvelle : c'est plus simple que tu ne le penses. Pas besoin de formation coûteuse ni de logiciel compliqué.

Dans ce guide, tu vas apprendre à créer un site web complet **de A à Z** — de la création des fichiers jusqu'à la mise en ligne sur internet.

---

## Ce que tu vas créer

À la fin de ce tutoriel, tu auras :

- Un site web fonctionnel avec plusieurs pages
- Un design propre et responsive (adapté mobile)
- Ton site en ligne, accessible à tous

**Prérequis :** Savoir utiliser un ordinateur. C'est tout.

---

## Étape 1 : Installer les outils

Tu as besoin de deux choses :

### Un éditeur de code

Télécharge **Visual Studio Code** (gratuit) :
👉 [code.visualstudio.com](https://code.visualstudio.com)

C'est l'éditeur le plus utilisé par les développeurs. Il colore le code et détecte les erreurs.

### Un navigateur moderne

Chrome, Firefox, ou Edge. Tu l'as déjà.

---

## Étape 2 : Créer le dossier du projet

1. Crée un dossier sur ton bureau appelé `mon-site`
2. Ouvre ce dossier dans VS Code (File → Open Folder)

Dans ce dossier, tu vas créer 3 fichiers :

- `index.html` — La page d'accueil
- `style.css` — Le design
- `about.html` — Une deuxième page

---

## Étape 3 : Créer ta première page HTML

Crée un fichier `index.html` et copie ce code :

```html
<!DOCTYPE html>
<html lang="fr">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Mon Premier Site</title>
    <link rel="stylesheet" href="style.css" />
  </head>
  <body>
    <header>
      <nav>
        <a href="index.html" class="logo">MonSite</a>
        <ul>
          <li><a href="index.html">Accueil</a></li>
          <li><a href="about.html">À propos</a></li>
        </ul>
      </nav>
    </header>

    <main>
      <section class="hero">
        <h1>Bienvenue sur mon site</h1>
        <p>Ceci est mon premier site web créé de zéro !</p>
        <a href="about.html" class="btn">En savoir plus →</a>
      </section>

      <section class="features">
        <h2>Ce que j'ai appris</h2>
        <div class="cards">
          <div class="card">
            <h3>HTML</h3>
            <p>La structure des pages web</p>
          </div>
          <div class="card">
            <h3>CSS</h3>
            <p>Le style et les couleurs</p>
          </div>
          <div class="card">
            <h3>Responsive</h3>
            <p>S'adapter à tous les écrans</p>
          </div>
        </div>
      </section>
    </main>

    <footer>
      <p>© 2025 MonSite. Créé avec ❤️</p>
    </footer>
  </body>
</html>
```

### Comprendre le code

- `<!DOCTYPE html>` — Dit au navigateur "c'est du HTML5"
- `<head>` — Informations sur la page (titre, CSS)
- `<body>` — Le contenu visible
- `<header>`, `<main>`, `<footer>` — Structure de la page
- `<h1>`, `<p>` — Titre et paragraphe
- `<a href="...">` — Lien cliquable

---

## Étape 4 : Ajouter le style CSS

Crée un fichier `style.css` et copie ce code :

```css
/* Reset et base */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  line-height: 1.6;
  color: #333;
}

/* Navigation */
nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background: #fff;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

.logo {
  font-size: 1.5rem;
  font-weight: bold;
  color: #2563eb;
  text-decoration: none;
}

nav ul {
  display: flex;
  list-style: none;
  gap: 2rem;
}

nav a {
  text-decoration: none;
  color: #333;
  transition: color 0.2s;
}

nav a:hover {
  color: #2563eb;
}

/* Hero */
.hero {
  text-align: center;
  padding: 6rem 2rem;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
}

.hero h1 {
  font-size: 3rem;
  margin-bottom: 1rem;
}

.hero p {
  font-size: 1.25rem;
  margin-bottom: 2rem;
  opacity: 0.9;
}

.btn {
  display: inline-block;
  padding: 1rem 2rem;
  background: white;
  color: #764ba2;
  text-decoration: none;
  border-radius: 8px;
  font-weight: 600;
  transition: transform 0.2s;
}

.btn:hover {
  transform: translateY(-2px);
}

/* Features */
.features {
  padding: 4rem 2rem;
  text-align: center;
}

.features h2 {
  font-size: 2rem;
  margin-bottom: 2rem;
}

.cards {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  max-width: 900px;
  margin: 0 auto;
}

.card {
  padding: 2rem;
  background: #f8f9fa;
  border-radius: 12px;
  transition: transform 0.2s, box-shadow 0.2s;
}

.card:hover {
  transform: translateY(-4px);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
}

.card h3 {
  color: #2563eb;
  margin-bottom: 0.5rem;
}

/* Footer */
footer {
  text-align: center;
  padding: 2rem;
  background: #333;
  color: white;
}

/* Responsive */
@media (max-width: 768px) {
  .hero h1 {
    font-size: 2rem;
  }

  nav {
    flex-direction: column;
    gap: 1rem;
  }

  nav ul {
    gap: 1rem;
  }
}
```

### Voir le résultat

1. Ouvre le fichier `index.html` dans ton navigateur (double-clic ou File → Open)
2. Tu devrais voir ta page avec le design !

---

## Étape 5 : Créer une deuxième page

Crée un fichier `about.html` :

```html
<!DOCTYPE html>
<html lang="fr">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>À propos - Mon Premier Site</title>
    <link rel="stylesheet" href="style.css" />
  </head>
  <body>
    <header>
      <nav>
        <a href="index.html" class="logo">MonSite</a>
        <ul>
          <li><a href="index.html">Accueil</a></li>
          <li><a href="about.html">À propos</a></li>
        </ul>
      </nav>
    </header>

    <main>
      <section class="about-content">
        <h1>À propos de moi</h1>
        <p>
          Je suis en train d'apprendre le développement web. Ce site est mon
          premier projet concret !
        </p>
        <p>
          J'ai commencé par apprendre HTML et CSS, et je continue à progresser
          chaque jour.
        </p>
        <a href="index.html" class="btn">← Retour à l'accueil</a>
      </section>
    </main>

    <footer>
      <p>© 2025 MonSite. Créé avec ❤️</p>
    </footer>
  </body>
</html>
```

Ajoute ce CSS à la fin de `style.css` :

```css
/* Page À propos */
.about-content {
  max-width: 700px;
  margin: 0 auto;
  padding: 4rem 2rem;
}

.about-content h1 {
  font-size: 2.5rem;
  margin-bottom: 1.5rem;
  color: #2563eb;
}

.about-content p {
  font-size: 1.1rem;
  margin-bottom: 1.5rem;
  color: #555;
}

.about-content .btn {
  background: #2563eb;
  color: white;
}
```

---

## Étape 6 : Personnaliser ton site

Maintenant que tu as la structure, personnalise :

### Changer les couleurs

Dans le CSS, remplace les couleurs :

- `#2563eb` (bleu) → ta couleur préférée
- `#764ba2` (violet) → une autre couleur

Utilise [coolors.co](https://coolors.co) pour trouver de belles palettes.

### Ajouter des images

```html
<img src="photo.jpg" alt="Description de l'image" />
```

Place l'image dans le même dossier que tes fichiers HTML.

### Ajouter d'autres pages

Crée de nouveaux fichiers `.html` et lie-les dans la navigation.

---

## Étape 7 : Mettre ton site en ligne

Ton site fonctionne en local. Maintenant, mettons-le sur internet !

### Option 1 : GitHub Pages (gratuit)

1. Crée un compte sur [github.com](https://github.com)
2. Crée un nouveau "repository" appelé `mon-site`
3. Upload tes fichiers
4. Va dans Settings → Pages → Source: main
5. Ton site sera sur `tonnom.github.io/mon-site`

### Option 2 : Netlify (gratuit, plus simple)

1. Va sur [netlify.com](https://netlify.com)
2. Crée un compte
3. Glisse-dépose ton dossier `mon-site`
4. Ton site est en ligne en 30 secondes !

### Option 3 : Vercel (gratuit)

Similaire à Netlify, parfait pour les projets web modernes.

---

## Étape 8 : Les prochaines étapes

Tu as créé ton premier site ! Voici comment aller plus loin :

### Apprendre JavaScript

Pour rendre ton site interactif :

- Formulaires qui réagissent
- Animations au scroll
- Menus qui s'ouvrent/ferment

### Découvrir les frameworks CSS

- **Tailwind CSS** — Classes utilitaires
- **Bootstrap** — Composants prêts à l'emploi

### Explorer les frameworks JavaScript

- **React** — Le plus populaire
- **Vue.js** — Plus simple à apprendre

---

## Récapitulatif

Ce que tu as appris :

1. **Créer des fichiers HTML** — Structure de la page
2. **Écrire du CSS** — Style et design
3. **Lier plusieurs pages** — Navigation
4. **Rendre le site responsive** — Media queries
5. **Mettre en ligne** — GitHub Pages, Netlify

---

## Erreurs courantes et solutions

### Le CSS ne s'applique pas

Vérifie que le lien est correct dans le `<head>` :

```html
<link rel="stylesheet" href="style.css" />
```

### Les liens ne marchent pas

Vérifie les noms de fichiers (majuscules/minuscules comptent).

### Le site est moche sur mobile

Ajoute cette ligne dans `<head>` :

```html
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
```

---

## Conclusion

Tu viens de créer ton premier site web ! 🎉

Ce n'est que le début. Avec ces bases, tu peux :

- Créer un portfolio personnel
- Faire un CV en ligne
- Commencer un blog
- Apprendre JavaScript et aller plus loin

L'important, c'est de **pratiquer**. Crée des projets, expérimente, casse des trucs et répare-les.

**Continue ton apprentissage :** [Découvre notre guide complet du développement web](/blog/developpement-web-debutant-guide-complet)
