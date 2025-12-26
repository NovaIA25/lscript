---
title: "C'est quoi npm ? (Guide complet 2025)"
date: "2025-01-15"
category: "Outils"
excerpt: "npm est le gestionnaire de packages JavaScript le plus populaire au monde. Découvre comment installer des librairies, gérer les dépendances, et créer tes propres packages."
readingTime: "10 min"
keywords: ["npm", "Node Package Manager", "JavaScript", "packages", "dépendances", "node_modules", "package.json", "yarn"]
---

# C'est quoi npm ?

Tu veux ajouter React à ton projet ? Utiliser une librairie de datepicker ? Installer Express pour ton serveur ?

**Sans npm** : Tu télécharges manuellement chaque fichier, tu les copies, tu gères les versions... **C'est l'enfer** ! 😵

**Avec npm** :
```bash
npm install react
```

**Terminé** ! React est installé avec toutes ses dépendances. 🎉

---

## 🤔 Définition simple

> **npm** (Node Package Manager) = Le **gestionnaire de packages** JavaScript qui te permet d'installer, gérer et partager du code réutilisable.

**Analogie** :
- **npm** = App Store pour le code JavaScript
- **Package** = Une app dans l'App Store
- **`npm install`** = Télécharger une app

**Chiffres** :
- **2,5 millions de packages** disponibles
- **Plus grand écosystème** de packages au monde
- **30+ milliards** de téléchargements par semaine

---

## 🎯 À quoi sert npm ?

### 1. Installer des librairies

```bash
# Installer React
npm install react

# Installer plusieurs packages
npm install express mongoose dotenv

# Installer une version spécifique
npm install react@18.2.0
```

### 2. Gérer les dépendances

**package.json** garde la liste de tous les packages utilisés :

```json
{
  "dependencies": {
    "react": "^18.2.0",
    "express": "^4.18.0"
  }
}
```

**Avantage** : Ton collègue fait juste `npm install` et a TOUTES les dépendances !

### 3. Exécuter des scripts

```json
{
  "scripts": {
    "start": "node server.js",
    "dev": "nodemon server.js",
    "build": "webpack",
    "test": "jest"
  }
}
```

```bash
npm run dev
# Lance nodemon server.js
```

### 4. Publier tes propres packages

Tu as créé un utilitaire génial ? Publie-le sur npm pour que le monde entier l'utilise !

```bash
npm publish
```

---

## 🏗️ Les 3 composants de npm

### 1. CLI (Command Line Interface)

L'outil en ligne de commande pour installer/gérer des packages.

```bash
npm install
npm uninstall
npm update
npm run
```

### 2. Registry (npmjs.com)

La base de données géante de tous les packages.

🔗 https://www.npmjs.com

Tu peux chercher des packages, voir la documentation, les stats, etc.

### 3. package.json

Le fichier de configuration de ton projet (dépendances, scripts, métadonnées).

---

## 💻 Installer npm

**Bonne nouvelle** : npm est **inclus avec Node.js** !

### Installer Node.js (qui inclut npm)

**Mac** :
```bash
# Avec Homebrew
brew install node

# Ou télécharge depuis nodejs.org
```

**Windows** :
Télécharge l'installateur : https://nodejs.org

**Linux (Ubuntu)** :
```bash
sudo apt update
sudo apt install nodejs npm
```

### Vérifier l'installation

```bash
node --version
# v20.11.0

npm --version
# 10.2.4
```

---

## 📦 package.json : Le cœur de ton projet

### Créer un package.json

```bash
# Mode interactif
npm init

# Mode rapide (tout par défaut)
npm init -y
```

**Résultat (package.json)** :
```json
{
  "name": "mon-projet",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [],
  "author": "",
  "license": "ISC"
}
```

### Structure d'un package.json complet

```json
{
  "name": "mon-super-projet",
  "version": "1.0.0",
  "description": "Une app incroyable",
  "main": "index.js",
  "scripts": {
    "start": "node server.js",
    "dev": "nodemon server.js",
    "build": "webpack --mode production",
    "test": "jest"
  },
  "keywords": ["nodejs", "express", "api"],
  "author": "Ton Nom",
  "license": "MIT",
  "dependencies": {
    "express": "^4.18.2",
    "mongoose": "^7.6.0"
  },
  "devDependencies": {
    "nodemon": "^3.0.1",
    "jest": "^29.7.0"
  }
}
```

**Sections importantes** :

| Section | Description |
|---------|-------------|
| `name` | Nom du projet (unique sur npm si tu publies) |
| `version` | Version (suit semantic versioning) |
| `scripts` | Commandes personnalisées |
| `dependencies` | Packages nécessaires en production |
| `devDependencies` | Packages seulement pour le dev (tests, build) |

---

## 🚀 Commandes npm essentielles

### Installation

```bash
# Installer TOUTES les dépendances (lit package.json)
npm install
# Raccourci
npm i

# Installer un package
npm install express

# Installer en dev uniquement
npm install --save-dev nodemon
# Raccourci
npm i -D nodemon

# Installer globalement (disponible partout)
npm install -g create-react-app

# Installer une version spécifique
npm install react@18.2.0

# Installer depuis GitHub
npm install user/repo
```

### Désinstallation

```bash
# Désinstaller un package
npm uninstall express

# Désinstaller un package dev
npm uninstall --save-dev nodemon

# Désinstaller global
npm uninstall -g create-react-app
```

### Mise à jour

```bash
# Voir les packages obsolètes
npm outdated

# Mettre à jour tous les packages
npm update

# Mettre à jour un package spécifique
npm update react

# Mettre à jour npm lui-même
npm install -g npm@latest
```

### Gestion des scripts

```bash
# Lister les scripts disponibles
npm run

# Exécuter un script
npm run dev

# Scripts spéciaux (pas besoin de 'run')
npm start  # = npm run start
npm test   # = npm run test
```

### Informations

```bash
# Voir les infos d'un package
npm view express

# Voir les versions disponibles
npm view express versions

# Lister les packages installés
npm list

# Lister les packages globaux
npm list -g --depth=0

# Chercher un package
npm search react-datepicker
```

### Audit de sécurité

```bash
# Vérifier les vulnérabilités
npm audit

# Corriger automatiquement
npm audit fix

# Corriger même avec breaking changes
npm audit fix --force
```

---

## 📁 node_modules : Le dossier magique

Quand tu fais `npm install`, npm crée un dossier `node_modules/` avec TOUS les packages.

```
mon-projet/
├── node_modules/       ← Tous les packages
│   ├── express/
│   ├── react/
│   ├── ... (milliers de dossiers)
├── package.json
└── index.js
```

**Important** :
- ❌ **Ne JAMAIS commit `node_modules/` sur Git !**
- ✅ Ajoute-le à `.gitignore`

**.gitignore** :
```
node_modules/
```

**Pourquoi ?**
- Trop gros (peut faire 500 MB+)
- Inutile (on peut régénérer avec `npm install`)

---

## 🔒 package-lock.json : Le gardien des versions

**Problème** : `package.json` dit `"react": "^18.2.0"` (version flexible).

**`^18.2.0`** signifie : "n'importe quelle version 18.x.x compatible".

**Résultat** :
- Dev 1 installe : `18.2.0`
- Dev 2 installe (1 mois plus tard) : `18.3.5`
- **Versions différentes** → Bugs potentiels ! 😵

**Solution** : **package-lock.json**

Ce fichier **verrouille les versions exactes** de tous les packages (+ sous-dépendances).

```json
{
  "name": "mon-projet",
  "lockfileVersion": 3,
  "dependencies": {
    "react": {
      "version": "18.2.0",  ← Version EXACTE
      "resolved": "https://registry.npmjs.org/react/-/react-18.2.0.tgz",
      "integrity": "sha512-..."
    }
  }
}
```

**Avantages** :
✅ Tout le monde a les **mêmes versions exactes**
✅ Build reproductible
✅ Sécurité (intégrité vérifiée)

**À commit sur Git** : ✅ OUI (contrairement à `node_modules`)

---

## 🎯 Semantic Versioning (semver)

npm utilise le **semantic versioning** : `MAJOR.MINOR.PATCH`

**Exemple** : `18.2.5`
- **18** = MAJOR (breaking changes)
- **2** = MINOR (nouvelles features, rétrocompatible)
- **5** = PATCH (bugfixes)

### Symboles dans package.json

| Symbole | Signification | Exemple | Autorise |
|---------|---------------|---------|----------|
| Rien | Version exacte | `18.2.0` | Seulement 18.2.0 |
| `^` | MINOR + PATCH | `^18.2.0` | 18.2.x, 18.3.x (pas 19.x) |
| `~` | PATCH seulement | `~18.2.0` | 18.2.x (pas 18.3.x) |
| `*` | N'importe | `*` | Toute version (DANGER) |
| `>=` | Supérieur ou égal | `>=18.0.0` | 18.x, 19.x, etc. |

**Recommandation** : Utilise `^` (par défaut npm).

---

## 🛠️ Scripts npm : Automatiser les tâches

### Exemple complet

```json
{
  "scripts": {
    "start": "node server.js",
    "dev": "nodemon server.js",
    "build": "webpack --mode production",
    "test": "jest",
    "test:watch": "jest --watch",
    "lint": "eslint .",
    "format": "prettier --write .",
    "clean": "rm -rf node_modules package-lock.json && npm install"
  }
}
```

```bash
npm run dev      # Lance nodemon
npm test         # Lance les tests
npm run lint     # Vérifie le code
```

### Hooks (pré/post scripts)

npm exécute automatiquement `pre` et `post` scripts :

```json
{
  "scripts": {
    "pretest": "echo 'Avant les tests'",
    "test": "jest",
    "posttest": "echo 'Après les tests'"
  }
}
```

```bash
npm test
# Avant les tests
# (lance jest)
# Après les tests
```

### Passer des arguments

```json
{
  "scripts": {
    "dev": "node server.js"
  }
}
```

```bash
npm run dev -- --port=8080
# = node server.js --port=8080
```

---

## 🌍 npm vs yarn vs pnpm

### npm (par défaut)

✅ Inclus avec Node.js
✅ Le plus populaire
✅ Amélioration continue

### yarn

✅ Plus rapide que npm (historiquement)
✅ Workspaces (monorepos)
✅ Offline mode

```bash
npm install -g yarn
yarn install
yarn add express
```

### pnpm

✅ **Ultra-rapide** (partage global des packages)
✅ **Économise de l'espace** (pas de duplication)
✅ Strict (ne tolère pas les dépendances fantômes)

```bash
npm install -g pnpm
pnpm install
pnpm add express
```

### Comparatif

| Critère | npm | yarn | pnpm |
|---------|-----|------|------|
| **Vitesse** | Bonne | Très bonne | Excellente |
| **Espace disque** | Élevé | Élevé | Faible |
| **Popularité** | #1 | #2 | #3 |
| **Installation** | Inclus | À installer | À installer |

**Mon conseil** : Commence avec **npm** (par défaut), passe à **pnpm** si tu veux optimiser.

---

## 🚀 Publier ton propre package npm

### Étape 1 : Créer le package

```javascript
// index.js
function saluer(nom) {
    return `Bonjour ${nom} !`;
}

module.exports = { saluer };
```

```json
// package.json
{
  "name": "@ton-username/mon-package",
  "version": "1.0.0",
  "description": "Un package de salutation",
  "main": "index.js",
  "keywords": ["salutation", "hello"],
  "author": "Ton Nom",
  "license": "MIT"
}
```

### Étape 2 : Créer un compte npm

🔗 https://www.npmjs.com/signup

### Étape 3 : Se connecter

```bash
npm login
```

### Étape 4 : Publier

```bash
npm publish --access public
```

**Résultat** : Ton package est sur npm ! 🎉

### Étape 5 : Utiliser ton package

```bash
npm install @ton-username/mon-package
```

```javascript
const { saluer } = require('@ton-username/mon-package');
console.log(saluer('Jean')); // Bonjour Jean !
```

---

## 🔐 Sécurité avec npm

### 1. Vérifier les vulnérabilités

```bash
npm audit
```

**Résultat** :
```
found 3 vulnerabilities (1 moderate, 2 high)
```

**Correction automatique** :
```bash
npm audit fix
```

### 2. Vérifier un package avant installation

```bash
# Voir les infos
npm view express

# Voir le code source
npm repo express
```

### 3. Utiliser .npmrc pour la config

```bash
# ~/.npmrc
registry=https://registry.npmjs.org/
always-auth=true
```

---

## ❌ Erreurs courantes

### 1. EACCES (problème de permissions)

**Erreur** :
```
npm ERR! Error: EACCES: permission denied
```

**Solution** :
```bash
# Option 1 : Configurer npm sans sudo
mkdir ~/.npm-global
npm config set prefix '~/.npm-global'
# Ajouter à ~/.bashrc ou ~/.zshrc :
export PATH=~/.npm-global/bin:$PATH

# Option 2 : Utiliser nvm (Node Version Manager)
```

### 2. Package not found

**Erreur** :
```
npm ERR! 404 Not Found - GET https://registry.npmjs.org/react-domm
```

**Cause** : Typo dans le nom (`react-domm` au lieu de `react-dom`)

**Solution** : Vérifie l'orthographe sur npmjs.com

### 3. node_modules trop gros

**Problème** : `node_modules` fait 500 MB+

**Solutions** :
```bash
# Nettoyer les packages inutilisés
npm prune

# Utiliser pnpm (partage global)
npm install -g pnpm
pnpm install
```

### 4. Versions conflictuelles

**Erreur** :
```
npm ERR! peer dep missing: react@^18.0.0
```

**Cause** : Une librairie nécessite React 18 mais tu as React 17

**Solution** :
```bash
npm install react@^18.0.0
```

---

## 🎓 Bonnes pratiques

### 1. Utilise package-lock.json

✅ Commit `package-lock.json` sur Git
✅ Utilise `npm ci` en CI/CD (plus rapide et strict)

```bash
# Dev local
npm install

# CI/CD
npm ci
```

### 2. Spécifie les versions dans package.json

❌ **Dangereux** :
```json
"dependencies": {
  "react": "*"  // N'importe quelle version
}
```

✅ **Bon** :
```json
"dependencies": {
  "react": "^18.2.0"
}
```

### 3. Utilise les scripts pour tout

Au lieu de taper des commandes longues, crée des scripts :

```json
{
  "scripts": {
    "db:migrate": "knex migrate:latest",
    "db:seed": "knex seed:run",
    "deploy": "npm run build && npm run upload"
  }
}
```

### 4. Documente les scripts dans README

**README.md** :
```markdown
## Scripts

- `npm start` : Lance le serveur
- `npm run dev` : Mode développement avec hot reload
- `npm test` : Lance les tests
- `npm run build` : Build de production
```

---

## 🎯 Ressources

### Documentation
- [npm Docs](https://docs.npmjs.com/)
- [npm Registry](https://www.npmjs.com/)

### Alternatives
- [Yarn](https://yarnpkg.com/)
- [pnpm](https://pnpm.io/)

### Outils utiles
- [npx](https://www.npmjs.com/package/npx) : Exécuter des packages sans les installer
- [nvm](https://github.com/nvm-sh/nvm) : Gérer plusieurs versions de Node.js

---

## 💡 Conclusion

**npm**, c'est :
- 📦 **Le gestionnaire de packages** JavaScript (2,5 millions de packages)
- ⚡ **Installer des librairies** en 1 commande
- 🔧 **Gérer les dépendances** avec package.json
- 🚀 **Automatiser les tâches** avec des scripts

**Commandes à retenir** :
```bash
npm init -y           # Créer package.json
npm install express   # Installer un package
npm install           # Installer toutes les dépendances
npm run dev           # Lancer un script
npm audit fix         # Corriger les vulnérabilités
```

**Prochaine étape** : Utilise npm dans tous tes projets JavaScript ! C'est indispensable en 2025.

🚀 **Mon conseil** : Explore [npmjs.com](https://www.npmjs.com) régulièrement pour découvrir de nouveaux packages qui vont te faire gagner du temps !

---

**Prêt à maîtriser npm ?**
👉 Lis [C'est quoi Node.js ?](/blog/node-js-cest-quoi) pour comprendre l'écosystème
👉 Découvre [C'est quoi Webpack ?](/blog/webpack-cest-quoi) pour bundler tes packages