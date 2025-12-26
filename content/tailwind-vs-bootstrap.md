---
title: "Tailwind CSS vs Bootstrap : Quel framework CSS choisir en 2025 ?"
date: "2025-01-15"
category: "Outils"
excerpt: "Tailwind CSS ou Bootstrap ? Découvre les différences, avantages, inconvénients, et quel framework CSS choisir pour ton projet en 2025."
readingTime: "10 min"
keywords: ["Tailwind CSS", "Bootstrap", "framework CSS", "CSS", "utility-first", "responsive design", "component library"]
---

# Tailwind CSS vs Bootstrap

**La question** : Dois-je apprendre **Tailwind CSS** ou **Bootstrap** pour mes projets web ?

**La réponse courte** :
- **Bootstrap** = Framework CSS **complet** avec composants pré-faits (2013)
- **Tailwind CSS** = Framework CSS **utility-first** moderne (2019)

**Tendance 2025** : Tailwind CSS explose (+300% d'usage depuis 2020) et devient le choix #1 des développeurs modernes.

---

## 🤔 Définitions simples

### Bootstrap

> **Bootstrap** = Un framework CSS **complet** avec des composants préconçus (boutons, cartes, navbar, etc.).

**Créé par** : Twitter en 2011
**Philosophie** : Classes de composants prêts à l'emploi

**Exemple** :
```html
<!-- Bootstrap : classe unique pour un bouton -->
<button class="btn btn-primary btn-lg">
  Cliquer ici
</button>
```

**Résultat** : Bouton bleu stylisé automatiquement.

---

### Tailwind CSS

> **Tailwind CSS** = Un framework CSS **utility-first** où tu combines de petites classes pour créer tes designs.

**Créé par** : Adam Wathan en 2017
**Philosophie** : Classes utilitaires atomiques

**Exemple** :
```html
<!-- Tailwind : composition de classes utilitaires -->
<button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
  Cliquer ici
</button>
```

**Résultat** : Le même bouton bleu, mais construit avec des classes utilitaires.

---

## 🎯 Comparaison rapide

| Critère | Bootstrap | Tailwind CSS |
|---------|-----------|--------------|
| **Philosophie** | Composants pré-faits | Utility-first |
| **Popularité** | 170M téléchargements/an | 100M téléchargements/an |
| **Taille** | ~200 KB (minifié) | ~10 KB (avec PurgeCSS) |
| **Courbe apprentissage** | Facile | Moyenne |
| **Personnalisation** | Limitée (SASS variables) | Totale (config JS) |
| **Design final** | Sites se ressemblent | Design unique |
| **JavaScript** | Inclus (dropdown, modals) | Pas inclus (Headless UI séparé) |
| **Tendance 2025** | Stable | En forte croissance |

---

## 🚀 Bootstrap : Le framework classique

### Avantages

✅ **Rapide à démarrer** : Composants prêts (navbar, cards, modals)
✅ **Documentation excellente** : Tutoriels partout
✅ **JavaScript inclus** : Dropdown, carousel, tooltips
✅ **Grille responsive** : Système de colonnes facile
✅ **Icônes Bootstrap** : 1800+ icônes gratuites
✅ **Grande communauté** : Beaucoup de templates
✅ **Facile pour débutants**

### Inconvénients

❌ **Design générique** : Tous les sites Bootstrap se ressemblent
❌ **Lourd** : ~200 KB (beaucoup de CSS inutilisé)
❌ **Personnalisation complexe** : Faut override avec SASS
❌ **Classes verbales** : `btn btn-primary btn-lg` vs Tailwind
❌ **Moins flexible** : Difficile de sortir du "Bootstrap look"

---

### Installation Bootstrap

#### CDN (le plus rapide)

```html
<!DOCTYPE html>
<html lang="fr">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Bootstrap Demo</title>

  <!-- Bootstrap CSS -->
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet">
</head>
<body>

  <h1 class="text-center text-primary">Hello Bootstrap!</h1>

  <!-- Bootstrap JS (pour les composants interactifs) -->
  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js"></script>
</body>
</html>
```

#### npm

```bash
npm install bootstrap
```

```javascript
// Dans ton fichier JS
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
```

---

### Exemple : Carte Bootstrap

```html
<div class="card" style="width: 18rem;">
  <img src="image.jpg" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">Titre de la carte</h5>
    <p class="card-text">Une description courte du contenu.</p>
    <a href="#" class="btn btn-primary">En savoir plus</a>
  </div>
</div>
```

**Résultat** : Carte stylisée avec image, texte, bouton.

---

### Système de grille Bootstrap

```html
<div class="container">
  <div class="row">
    <div class="col-md-4">Colonne 1</div>
    <div class="col-md-4">Colonne 2</div>
    <div class="col-md-4">Colonne 3</div>
  </div>
</div>
```

**Résultat** : 3 colonnes égales sur desktop, empilées sur mobile.

**Breakpoints** :
- `col-sm` : ≥576px (mobile)
- `col-md` : ≥768px (tablette)
- `col-lg` : ≥992px (desktop)
- `col-xl` : ≥1200px (grand écran)

---

## ⚡ Tailwind CSS : Le framework moderne

### Avantages

✅ **Design unique** : Chaque site a son propre style
✅ **Ultra-léger** : ~10 KB en production (avec PurgeCSS)
✅ **Très flexible** : Personnalisation infinie
✅ **Pas de CSS custom** : Tout en classes utilitaires
✅ **Dark mode facile** : `dark:bg-gray-900`
✅ **Responsive simple** : `md:text-lg lg:text-xl`
✅ **Productivité** : Pas de changement de contexte (HTML/CSS)
✅ **Tendance 2025** : Adopté par Next.js, Laravel, Vue

### Inconvénients

❌ **Courbe d'apprentissage** : Beaucoup de classes à mémoriser
❌ **HTML verbeux** : `class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"`
❌ **Pas de JavaScript** : Faut utiliser Headless UI ou Radix UI
❌ **Configuration requise** : Faut setup `tailwind.config.js`
❌ **Pas adapté pour débutants** : Faut déjà connaître CSS

---

### Installation Tailwind CSS

#### Avec npm (recommandé)

```bash
# Installer Tailwind
npm install -D tailwindcss
npx tailwindcss init
```

**tailwind.config.js** :
```javascript
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

**styles.css** :
```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

**Compiler** :
```bash
npx tailwindcss -i ./src/styles.css -o ./dist/output.css --watch
```

---

### Exemple : Carte Tailwind CSS

```html
<div class="max-w-sm rounded overflow-hidden shadow-lg">
  <img class="w-full" src="image.jpg" alt="Image">
  <div class="px-6 py-4">
    <div class="font-bold text-xl mb-2">Titre de la carte</div>
    <p class="text-gray-700 text-base">
      Une description courte du contenu.
    </p>
  </div>
  <div class="px-6 pt-4 pb-2">
    <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
      En savoir plus
    </button>
  </div>
</div>
```

**Résultat** : La même carte que Bootstrap, mais 100% personnalisable.

---

### Système de grille Tailwind

```html
<div class="container mx-auto px-4">
  <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
    <div class="bg-blue-500 p-4">Colonne 1</div>
    <div class="bg-blue-500 p-4">Colonne 2</div>
    <div class="bg-blue-500 p-4">Colonne 3</div>
  </div>
</div>
```

**Breakpoints Tailwind** :
- `sm:` : ≥640px
- `md:` : ≥768px
- `lg:` : ≥1024px
- `xl:` : ≥1280px
- `2xl:` : ≥1536px

---

## 🎨 Comparaison concrète : Navbar

### Bootstrap Navbar

```html
<nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Logo</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link active" href="#">Accueil</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">À propos</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Contact</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
```

**Avantages** :
✅ Collapse automatique sur mobile
✅ JavaScript inclus
✅ Accessible (ARIA)

---

### Tailwind Navbar

```html
<nav class="bg-white shadow-lg">
  <div class="max-w-7xl mx-auto px-4">
    <div class="flex justify-between items-center h-16">
      <div class="flex-shrink-0">
        <a href="#" class="text-xl font-bold">Logo</a>
      </div>
      <div class="hidden md:block">
        <div class="flex space-x-4">
          <a href="#" class="text-gray-900 hover:text-blue-500 px-3 py-2">Accueil</a>
          <a href="#" class="text-gray-900 hover:text-blue-500 px-3 py-2">À propos</a>
          <a href="#" class="text-gray-900 hover:text-blue-500 px-3 py-2">Contact</a>
        </div>
      </div>
      <!-- Mobile menu button (faut ajouter JavaScript) -->
      <div class="md:hidden">
        <button class="text-gray-900 focus:outline-none">
          <svg class="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
    </div>
  </div>
</nav>
```

**Inconvénients** :
❌ Faut coder le menu mobile en JavaScript
❌ Plus verbeux
❌ Faut gérer l'accessibilité manuellement

---

## 🔥 Comparaison : Boutons

### Bootstrap

```html
<!-- Styles prédéfinis -->
<button class="btn btn-primary">Primary</button>
<button class="btn btn-secondary">Secondary</button>
<button class="btn btn-success">Success</button>
<button class="btn btn-danger">Danger</button>
<button class="btn btn-warning">Warning</button>
<button class="btn btn-info">Info</button>

<!-- Tailles -->
<button class="btn btn-primary btn-sm">Small</button>
<button class="btn btn-primary btn-lg">Large</button>
```

**Résultat** : Boutons cohérents, mais look "Bootstrap".

---

### Tailwind CSS

```html
<!-- Boutons personnalisés -->
<button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
  Primary
</button>
<button class="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded">
  Secondary
</button>
<button class="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
  Success
</button>

<!-- Tailles -->
<button class="bg-blue-500 text-white py-1 px-2 rounded text-sm">Small</button>
<button class="bg-blue-500 text-white py-3 px-6 rounded text-lg">Large</button>
```

**Résultat** : Boutons uniques, style contrôlé à 100%.

---

## 📊 Dark Mode

### Bootstrap

**Pas de dark mode natif** ! Faut utiliser des variables SASS ou JavaScript.

```css
/* Faut écrire du CSS custom */
@media (prefers-color-scheme: dark) {
  body {
    background-color: #1a202c;
    color: white;
  }
}
```

---

### Tailwind CSS

**Dark mode intégré** ! 🌙

**tailwind.config.js** :
```javascript
module.exports = {
  darkMode: 'class', // ou 'media'
  // ...
}
```

**HTML** :
```html
<div class="bg-white dark:bg-gray-900 text-black dark:text-white">
  <h1 class="text-2xl">Coucou !</h1>
</div>
```

**Activer le dark mode** :
```javascript
// Ajouter la classe 'dark' au <html>
document.documentElement.classList.add('dark');
```

**Résultat** : Dark mode en quelques lignes ! ✨

---

## 🛠️ Personnalisation

### Bootstrap

**Méthode 1** : Override CSS
```css
/* style.css */
.btn-primary {
  background-color: #ff6b6b !important;
}
```

**Méthode 2** : Variables SASS
```scss
// custom.scss
$primary: #ff6b6b;
$secondary: #4ecdc4;

@import "bootstrap/scss/bootstrap";
```

**Inconvénient** : Faut recompiler Bootstrap.

---

### Tailwind CSS

**tailwind.config.js** :
```javascript
module.exports = {
  theme: {
    extend: {
      colors: {
        primary: '#ff6b6b',
        secondary: '#4ecdc4',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      spacing: {
        '128': '32rem',
      },
    },
  },
}
```

**Utilisation** :
```html
<button class="bg-primary hover:bg-secondary text-white py-2 px-4 rounded">
  Mon bouton custom
</button>
```

**Résultat** : Personnalisation ultra-facile !

---

## 🚀 Performance

### Taille du fichier CSS

**Bootstrap** :
- CSS complet : ~200 KB (minifié)
- JavaScript : ~60 KB

**Tailwind CSS** :
- Sans PurgeCSS : ~3 MB (⚠️ jamais en production !)
- Avec PurgeCSS : ~10 KB (✅ ultra-léger !)

**PurgeCSS** = Supprime les classes CSS inutilisées.

**tailwind.config.js** :
```javascript
module.exports = {
  content: [
    "./src/**/*.{html,js,jsx,ts,tsx}",
  ],
  // PurgeCSS activé automatiquement en production
}
```

**Résultat** : Tailwind = 20x plus léger que Bootstrap en prod !

---

## 💡 Composants réutilisables

### Bootstrap

**Avantage** : Composants pré-faits (Navbar, Card, Modal, Carousel).

```html
<!-- Modal Bootstrap -->
<button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#myModal">
  Ouvrir modal
</button>

<div class="modal fade" id="myModal" tabindex="-1">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title">Titre du modal</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
      </div>
      <div class="modal-body">
        Contenu du modal.
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Fermer</button>
      </div>
    </div>
  </div>
</div>
```

**Résultat** : Modal fonctionnel sans JavaScript custom.

---

### Tailwind CSS

**Pas de composants JS** ! Faut utiliser :
- **Headless UI** (par Tailwind Labs)
- **Radix UI**
- **DaisyUI** (composants Tailwind)

**Exemple avec Headless UI** :
```bash
npm install @headlessui/react
```

```jsx
import { Dialog } from '@headlessui/react';
import { useState } from 'react';

function MyModal() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button onClick={() => setIsOpen(true)} className="bg-blue-500 text-white py-2 px-4 rounded">
        Ouvrir modal
      </button>

      <Dialog open={isOpen} onClose={() => setIsOpen(false)} className="relative z-50">
        <div className="fixed inset-0 bg-black/30" aria-hidden="true" />
        <div className="fixed inset-0 flex items-center justify-center p-4">
          <Dialog.Panel className="bg-white rounded max-w-sm mx-auto p-6">
            <Dialog.Title className="text-lg font-bold">Titre du modal</Dialog.Title>
            <p className="mt-2">Contenu du modal.</p>
            <button onClick={() => setIsOpen(false)} className="mt-4 bg-gray-500 text-white py-2 px-4 rounded">
              Fermer
            </button>
          </Dialog.Panel>
        </div>
      </Dialog>
    </>
  );
}
```

**Résultat** : Modal accessible, mais faut du JavaScript.

---

## 🎯 Quand utiliser Bootstrap ?

✅ **Projets rapides** (MVP, prototypes)
✅ **Débutants en CSS**
✅ **Sites admin/dashboard**
✅ **Besoin de composants JS** (modal, dropdown, carousel)
✅ **Équipe qui connaît déjà Bootstrap**

**Cas d'usage** :
- Backoffice d'entreprise
- Site vitrine simple
- Projet scolaire/étudiant

---

## 🎯 Quand utiliser Tailwind CSS ?

✅ **Design unique et moderne**
✅ **Performance critique** (10 KB vs 200 KB)
✅ **Projets React/Vue/Next.js**
✅ **Contrôle total du style**
✅ **Dark mode**
✅ **Développeurs qui maîtrisent CSS**

**Cas d'usage** :
- SaaS moderne
- Application web complexe
- E-commerce premium
- Portfolio/Landing page

---

## 🔥 Tendances 2025

### Popularité (npm downloads)

- **Bootstrap** : 4M téléchargements/semaine (stable)
- **Tailwind CSS** : 3M téléchargements/semaine (+300% depuis 2020)

### Adoption par les frameworks

**Next.js** : Tailwind CSS par défaut
**Laravel** : Tailwind CSS par défaut
**Vue 3** : Tailwind CSS recommandé

**Conclusion** : Tailwind CSS devient le standard pour les projets modernes.

---

## 🆚 Comparaison finale

| Critère | Bootstrap | Tailwind CSS |
|---------|-----------|--------------|
| **Rapidité** | ⭐⭐⭐⭐⭐ | ⭐⭐⭐ |
| **Flexibilité** | ⭐⭐ | ⭐⭐⭐⭐⭐ |
| **Performance** | ⭐⭐ | ⭐⭐⭐⭐⭐ |
| **Design unique** | ⭐ | ⭐⭐⭐⭐⭐ |
| **Courbe apprentissage** | ⭐⭐⭐⭐⭐ | ⭐⭐⭐ |
| **Composants JS** | ⭐⭐⭐⭐⭐ | ⭐ |
| **Dark mode** | ⭐ | ⭐⭐⭐⭐⭐ |
| **Tendance 2025** | ⭐⭐⭐ | ⭐⭐⭐⭐⭐ |

---

## 💡 Mon conseil

### Débutant en CSS ?
👉 **Bootstrap** pour apprendre vite.

### Développeur intermédiaire/avancé ?
👉 **Tailwind CSS** pour la flexibilité et les perfs.

### Projet professionnel moderne ?
👉 **Tailwind CSS** (adopté par Next.js, Laravel, Vercel).

### Projet rapide/prototype ?
👉 **Bootstrap** pour gagner du temps.

---

## 🚀 Roadmap : Maîtriser les deux

### Semaine 1-2 : Bootstrap
✅ Installer Bootstrap
✅ Utiliser la grille (container, row, col)
✅ Boutons, cartes, navbar
✅ Créer un site complet

### Semaine 3-4 : Tailwind CSS
✅ Installer Tailwind
✅ Apprendre les classes utilitaires
✅ Responsive design (`md:`, `lg:`)
✅ Dark mode
✅ Refaire le même site en Tailwind

**Résultat** : Tu pourras choisir le bon outil selon le projet !

---

## 💡 Conclusion

**Bootstrap** :
- ✅ Framework CSS **classique** et **rapide**
- ✅ Composants pré-faits
- ❌ Design générique
- ❌ Lourd (200 KB)

**Tailwind CSS** :
- ✅ Framework CSS **moderne** et **flexible**
- ✅ Ultra-léger (10 KB)
- ✅ Design unique
- ❌ Courbe d'apprentissage
- ❌ Pas de JavaScript inclus

**Tendance 2025** : **Tailwind CSS** devient le standard des projets modernes (Next.js, Laravel, SaaS).

**Ma recommandation** : Apprends **Bootstrap** pour comprendre les bases, puis passe à **Tailwind CSS** pour tes projets sérieux.

---

**Prêt à choisir ton framework CSS ?**
👉 Commence avec [Bootstrap](https://getbootstrap.com) si tu débutes
👉 Ou fonce sur [Tailwind CSS](https://tailwindcss.com) pour des designs modernes
👉 Lis [Le guide complet Tailwind CSS](/blog/tailwind-guide) pour maîtriser le framework