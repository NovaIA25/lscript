---
title: "C'est quoi SASS/SCSS ? Le préprocesseur CSS indispensable (2025)"
date: "2025-01-15"
category: "Concepts"
excerpt: "SASS/SCSS est un préprocesseur CSS qui ajoute des variables, fonctions, mixins et imbrication. Découvre pourquoi 80% des développeurs l'utilisent."
readingTime: "10 min"
keywords: ["SASS", "SCSS", "CSS", "préprocesseur", "variables", "mixins", "nesting", "frontend"]
---

# C'est quoi SASS/SCSS ?

Tu écris du **CSS** et tu te retrouves à copier-coller les mêmes couleurs, répéter les mêmes styles, et perdre du temps ?

**SASS/SCSS** = La solution ! Un **préprocesseur CSS** qui ajoute des **variables**, **fonctions**, **mixins**, et bien plus.

**Chiffres** :
- **80%** des développeurs utilisent un préprocesseur CSS
- **SASS** est le plus populaire (avant LESS, Stylus)
- Utilisé par **Bootstrap**, **Bulma**, **Foundation**

Si tu veux écrire du CSS comme un pro, **SASS** est incontournable ! 🚀

---

## 🤔 Définition simple

> **SASS** (Syntactically Awesome Style Sheets) = Un **préprocesseur CSS** qui ajoute des fonctionnalités puissantes au CSS classique.

**Préprocesseur** = Un outil qui transforme du **SASS** en **CSS** normal.

**Analogie** :
- **CSS** = Calculatrice basique
- **SASS** = Calculatrice scientifique (variables, fonctions, conditions)

**Exemple** :

**CSS classique** :
```css
.button-primary {
  background-color: #3490dc;
  color: white;
  padding: 10px 20px;
  border-radius: 5px;
}

.button-secondary {
  background-color: #6c757d;
  color: white;
  padding: 10px 20px;
  border-radius: 5px;
}
```

**SCSS** (avec variables et mixins) :
```scss
$primary-color: #3490dc;
$secondary-color: #6c757d;

@mixin button($bg-color) {
  background-color: $bg-color;
  color: white;
  padding: 10px 20px;
  border-radius: 5px;
}

.button-primary {
  @include button($primary-color);
}

.button-secondary {
  @include button($secondary-color);
}
```

**Résultat** : Code plus **court**, **réutilisable**, et **maintenable** ! ✨

---

## 🆚 SASS vs SCSS

**SASS** a **2 syntaxes** :

### 1. SASS (syntaxe indentée)

**Extension** : `.sass`

```sass
$primary-color: #3490dc

.button
  background-color: $primary-color
  color: white
  padding: 10px 20px
```

**Caractéristiques** :
- Pas de `{}` ni `;`
- Indentation stricte (comme Python)
- Plus rare aujourd'hui

---

### 2. SCSS (Sassy CSS)

**Extension** : `.scss`

```scss
$primary-color: #3490dc;

.button {
  background-color: $primary-color;
  color: white;
  padding: 10px 20px;
}
```

**Caractéristiques** :
- Syntaxe **identique au CSS** (avec `{}` et `;`)
- **Plus populaire** (99% des projets)
- Compatible avec le CSS existant

**Mon conseil** : Utilise **SCSS** (c'est la norme en 2025).

---

## 💻 Installation SASS

### Node.js (recommandé)

```bash
npm install -g sass
```

**Compiler un fichier** :
```bash
sass input.scss output.css
```

**Mode watch** (recompile automatiquement) :
```bash
sass --watch input.scss:output.css
```

---

### VSCode Extension

**Extension** : **Live Sass Compiler**

1. Installe l'extension
2. Crée un fichier `styles.scss`
3. Clique sur "Watch Sass" en bas
4. Le fichier `styles.css` est généré automatiquement ! ✨

---

## 🎨 Les fonctionnalités SASS

### 1. Variables

**Problème CSS** : Répéter les couleurs partout.

**CSS classique** :
```css
.header {
  background-color: #3490dc;
}

.button {
  background-color: #3490dc;
}

.link {
  color: #3490dc;
}
```

**Solution SCSS** :
```scss
$primary-color: #3490dc;
$secondary-color: #6c757d;
$text-color: #333;
$spacing: 16px;

.header {
  background-color: $primary-color;
}

.button {
  background-color: $primary-color;
  padding: $spacing;
}

.link {
  color: $primary-color;
}
```

**Avantage** : Change `$primary-color` une fois → tout est mis à jour !

---

### 2. Nesting (imbrication)

**Problème CSS** : Répéter les sélecteurs.

**CSS classique** :
```css
nav {
  background-color: #333;
}

nav ul {
  list-style: none;
}

nav ul li {
  display: inline-block;
}

nav ul li a {
  color: white;
  text-decoration: none;
}

nav ul li a:hover {
  color: #3490dc;
}
```

**SCSS** :
```scss
nav {
  background-color: #333;

  ul {
    list-style: none;

    li {
      display: inline-block;

      a {
        color: white;
        text-decoration: none;

        &:hover {
          color: #3490dc;
        }
      }
    }
  }
}
```

**`&`** = Référence au parent (`a:hover`).

**Résultat** : Code **plus lisible** et **mieux organisé** ! ✨

---

### 3. Partials (fichiers partiels)

**Problème** : Un seul gros fichier CSS = difficile à maintenir.

**Solution** : Diviser en **plusieurs fichiers**.

**Structure** :
```
styles/
├── _variables.scss
├── _mixins.scss
├── _buttons.scss
├── _navbar.scss
└── main.scss
```

**_variables.scss** :
```scss
$primary-color: #3490dc;
$secondary-color: #6c757d;
$spacing: 16px;
```

**_buttons.scss** :
```scss
.button {
  background-color: $primary-color;
  color: white;
  padding: $spacing;
  border-radius: 5px;
}
```

**main.scss** :
```scss
@import 'variables';
@import 'mixins';
@import 'buttons';
@import 'navbar';
```

**Compiler** :
```bash
sass main.scss output.css
```

**Résultat** : Un seul fichier `output.css` avec tout dedans !

**Note** : Le `_` indique que c'est un partial (pas compilé seul).

---

### 4. Mixins (fonctions réutilisables)

**Problème** : Répéter les mêmes styles.

**SCSS** :
```scss
@mixin flexbox-center {
  display: flex;
  justify-content: center;
  align-items: center;
}

.header {
  @include flexbox-center;
  height: 100vh;
}

.card {
  @include flexbox-center;
  padding: 20px;
}
```

**Résultat CSS** :
```css
.header {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

.card {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
}
```

---

### Mixins avec paramètres

```scss
@mixin button($bg-color, $text-color: white) {
  background-color: $bg-color;
  color: $text-color;
  padding: 10px 20px;
  border-radius: 5px;
  border: none;
  cursor: pointer;

  &:hover {
    background-color: darken($bg-color, 10%);
  }
}

.button-primary {
  @include button(#3490dc);
}

.button-success {
  @include button(#38c172);
}

.button-danger {
  @include button(#e3342f);
}
```

**Fonction `darken()`** : Assombrit une couleur de 10% au hover ! 🔥

---

### 5. Extend (héritage)

**Partager des styles** entre sélecteurs.

```scss
.message {
  border: 1px solid #ccc;
  padding: 10px;
  border-radius: 5px;
}

.success {
  @extend .message;
  border-color: #38c172;
  background-color: #d4edda;
}

.error {
  @extend .message;
  border-color: #e3342f;
  background-color: #f8d7da;
}
```

**Résultat CSS** :
```css
.message, .success, .error {
  border: 1px solid #ccc;
  padding: 10px;
  border-radius: 5px;
}

.success {
  border-color: #38c172;
  background-color: #d4edda;
}

.error {
  border-color: #e3342f;
  background-color: #f8d7da;
}
```

---

### 6. Fonctions

**SASS** inclut des **fonctions natives** :

```scss
$primary-color: #3490dc;

.button {
  background-color: $primary-color;

  &:hover {
    background-color: darken($primary-color, 10%); // Assombrir
  }

  &:active {
    background-color: lighten($primary-color, 10%); // Éclaircir
  }
}

.text {
  color: rgba($primary-color, 0.5); // Transparence
}

.complement {
  background-color: complement($primary-color); // Couleur complémentaire
}
```

**Fonctions couleurs** :
- `darken($color, $amount)` : Assombrir
- `lighten($color, $amount)` : Éclaircir
- `saturate($color, $amount)` : Saturer
- `desaturate($color, $amount)` : Désaturer
- `rgba($color, $alpha)` : Ajouter transparence
- `mix($color1, $color2)` : Mélanger 2 couleurs

---

### 7. Opérateurs mathématiques

```scss
$base-spacing: 16px;

.container {
  padding: $base-spacing * 2; // 32px
  margin: $base-spacing / 2;  // 8px
}

.grid-column {
  width: 100% / 3; // 33.333%
}
```

---

### 8. Conditions (@if, @else)

```scss
$theme: dark;

.header {
  @if $theme == dark {
    background-color: #333;
    color: white;
  } @else {
    background-color: white;
    color: #333;
  }
}
```

---

### 9. Boucles (@for, @each)

**@for** :
```scss
@for $i from 1 through 5 {
  .col-#{$i} {
    width: 20% * $i;
  }
}
```

**Résultat CSS** :
```css
.col-1 { width: 20%; }
.col-2 { width: 40%; }
.col-3 { width: 60%; }
.col-4 { width: 80%; }
.col-5 { width: 100%; }
```

---

**@each** :
```scss
$colors: (
  primary: #3490dc,
  success: #38c172,
  danger: #e3342f,
  warning: #f6993f
);

@each $name, $color in $colors {
  .btn-#{$name} {
    background-color: $color;
  }
}
```

**Résultat CSS** :
```css
.btn-primary { background-color: #3490dc; }
.btn-success { background-color: #38c172; }
.btn-danger { background-color: #e3342f; }
.btn-warning { background-color: #f6993f; }
```

---

## 🚀 Exemple complet : Système de design

### _variables.scss

```scss
// Couleurs
$primary: #3490dc;
$secondary: #6c757d;
$success: #38c172;
$danger: #e3342f;
$warning: #f6993f;

// Espacements
$spacing-xs: 4px;
$spacing-sm: 8px;
$spacing-md: 16px;
$spacing-lg: 24px;
$spacing-xl: 32px;

// Typographie
$font-family: 'Inter', sans-serif;
$font-size-base: 16px;
$font-size-lg: 20px;
$font-size-xl: 24px;

// Breakpoints
$mobile: 576px;
$tablet: 768px;
$desktop: 1024px;
```

---

### _mixins.scss

```scss
@mixin respond-to($breakpoint) {
  @if $breakpoint == mobile {
    @media (min-width: $mobile) { @content; }
  }
  @else if $breakpoint == tablet {
    @media (min-width: $tablet) { @content; }
  }
  @else if $breakpoint == desktop {
    @media (min-width: $desktop) { @content; }
  }
}

@mixin button($bg, $text: white) {
  background-color: $bg;
  color: $text;
  padding: $spacing-sm $spacing-md;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: $font-size-base;

  &:hover {
    background-color: darken($bg, 10%);
  }

  &:active {
    transform: scale(0.98);
  }
}
```

---

### _buttons.scss

```scss
.btn {
  @include button($secondary);
}

.btn-primary {
  @include button($primary);
}

.btn-success {
  @include button($success);
}

.btn-danger {
  @include button($danger);
}
```

---

### main.scss

```scss
@import 'variables';
@import 'mixins';
@import 'buttons';

body {
  font-family: $font-family;
  font-size: $font-size-base;
  margin: 0;
  padding: $spacing-md;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: $spacing-lg;

  @include respond-to(mobile) {
    padding: $spacing-md;
  }

  @include respond-to(tablet) {
    padding: $spacing-lg;
  }

  @include respond-to(desktop) {
    padding: $spacing-xl;
  }
}
```

---

## 🔥 SASS vs CSS Variables

**CSS Variables** (natives depuis 2016) :
```css
:root {
  --primary-color: #3490dc;
}

.button {
  background-color: var(--primary-color);
}
```

**SCSS Variables** :
```scss
$primary-color: #3490dc;

.button {
  background-color: $primary-color;
}
```

**Différences** :

| Critère | SASS Variables | CSS Variables |
|---------|----------------|---------------|
| **Compilation** | Compile en CSS statique | Natif (pas de compilation) |
| **Modification runtime** | ❌ Non | ✅ Oui (via JavaScript) |
| **Fonctions** | ✅ Oui (darken, lighten) | ❌ Non |
| **Compatibilité** | ✅ Tous les navigateurs | ✅ Navigateurs modernes |
| **Dark mode** | ❌ Difficile | ✅ Facile |

**Mon conseil** : Utilise **SASS variables** pour la compilation + **CSS variables** pour le dark mode dynamique.

---

## 🛠️ SASS avec frameworks

### Avec React

```bash
npm install sass
```

**Renomme** `App.css` en `App.scss` :
```scss
$primary: #3490dc;

.App {
  background-color: $primary;
  color: white;
}
```

**Importe** dans `App.js` :
```javascript
import './App.scss';
```

**Résultat** : SASS fonctionne automatiquement avec Create React App ! ✨

---

### Avec Next.js

```bash
npm install sass
```

**Renomme** `styles/globals.css` en `styles/globals.scss`.

**Importe** dans `_app.js` :
```javascript
import '../styles/globals.scss';
```

---

### Avec Vue.js

**Component.vue** :
```vue
<template>
  <div class="container">
    <h1>Hello SASS</h1>
  </div>
</template>

<style lang="scss">
$primary: #3490dc;

.container {
  background-color: $primary;
  color: white;
}
</style>
```

---

## 🎯 Bonnes pratiques SASS

### 1. Organisation des fichiers

```
styles/
├── abstracts/
│   ├── _variables.scss
│   ├── _mixins.scss
│   └── _functions.scss
├── base/
│   ├── _reset.scss
│   └── _typography.scss
├── components/
│   ├── _buttons.scss
│   ├── _cards.scss
│   └── _navbar.scss
├── layout/
│   ├── _header.scss
│   ├── _footer.scss
│   └── _grid.scss
├── pages/
│   ├── _home.scss
│   └── _about.scss
└── main.scss
```

**main.scss** :
```scss
@import 'abstracts/variables';
@import 'abstracts/mixins';

@import 'base/reset';
@import 'base/typography';

@import 'components/buttons';
@import 'components/cards';

@import 'layout/header';
@import 'layout/footer';

@import 'pages/home';
```

---

### 2. Nommer les variables

```scss
// ❌ Mauvais
$color1: #3490dc;
$s: 16px;

// ✅ Bon
$primary-color: #3490dc;
$spacing-base: 16px;
```

---

### 3. Éviter l'imbrication trop profonde

```scss
// ❌ Mauvais (trop profond)
nav {
  ul {
    li {
      a {
        span {
          color: white;
        }
      }
    }
  }
}

// ✅ Bon (max 3 niveaux)
nav {
  ul {
    list-style: none;
  }

  a {
    color: white;
  }
}
```

---

### 4. Utiliser BEM avec SASS

**BEM** = Block Element Modifier

```scss
.card {
  background: white;
  padding: 20px;

  &__title {
    font-size: 24px;
    font-weight: bold;
  }

  &__content {
    color: #333;
  }

  &--featured {
    border: 2px solid gold;
  }
}
```

**Résultat CSS** :
```css
.card { ... }
.card__title { ... }
.card__content { ... }
.card--featured { ... }
```

---

## 💡 Conclusion

**SASS/SCSS**, c'est :
- 🎨 Un **préprocesseur CSS** puissant
- 📦 **Variables**, **mixins**, **fonctions**
- 🔄 **Imbrication** (nesting)
- 🛠️ Utilisé par **80% des développeurs**
- ✅ Compatible avec **React**, **Vue**, **Next.js**

**Pourquoi utiliser SASS ?**
- ✅ Code plus **maintenable**
- ✅ **Réutilisabilité** (mixins, extends)
- ✅ **Organisation** (partials)
- ✅ **Productivité** (variables, fonctions)

**Prochaine étape** : Crée un fichier `styles.scss` et teste les variables et mixins !

🚀 **Mon conseil** : Si tu fais du CSS sérieusement, **SASS est incontournable**. Commence par les variables et le nesting, puis explore les mixins et fonctions.

---

**Prêt à maîtriser SASS ?**
👉 Installe [SASS](https://sass-lang.com/install)
👉 Teste sur [SassMeister](https://www.sassmeister.com) (playground en ligne)
👉 Lis [Le guide complet SASS](/blog/sass-guide) pour approfondir