---
title: "Comment déployer un site web ? (Guide complet 2025)"
date: "2025-01-15"
category: "Outils"
excerpt: "Déployer un site web gratuitement en 10 minutes avec Vercel, Netlify ou GitHub Pages. Guide complet avec exemples (React, Next.js, HTML/CSS) et nom de domaine personnalisé."
readingTime: "12 min"
keywords: ["déployer site web", "hébergement gratuit", "Vercel", "Netlify", "GitHub Pages", "déploiement", "hosting", "domaine"]
---

# Comment déployer un site web ?

Tu viens de terminer ton site web. Il fonctionne parfaitement sur `localhost:3000`... **mais personne ne peut le voir** ! 😅

**Déployer** = Mettre ton site en ligne pour que le monde entier puisse y accéder.

Ce guide va te montrer comment déployer **gratuitement** en 10 minutes avec les meilleures plateformes (Vercel, Netlify, GitHub Pages).

---

## 🤔 C'est quoi le déploiement ?

> **Déployer** = Héberger ton site sur un serveur accessible 24/7 avec une URL publique.

**Analogie** :
- **Développement local** : Tu cuisines chez toi (localhost)
- **Déploiement** : Tu ouvres un restaurant accessible à tous (domaine public)

**Exemple** :
```
Avant : http://localhost:3000 (toi seul)
Après  : https://mon-site.com (tout le monde)
```

---

## 🎯 Les 3 meilleures plateformes (gratuites)

| Plateforme | Idéal pour | Gratuit | Déploiement | Domaine perso |
|------------|------------|---------|-------------|---------------|
| **Vercel** | Next.js, React, Vue | ✅ | Auto (Git) | ✅ |
| **Netlify** | React, Vue, Hugo | ✅ | Auto (Git) | ✅ |
| **GitHub Pages** | HTML/CSS/JS | ✅ | Manuel/Auto | ✅ |

**Mon recommandation** :
- **Next.js / React** → Vercel
- **Vue / Nuxt** → Netlify
- **HTML statique** → GitHub Pages

---

## 🚀 Déployer avec Vercel (Next.js, React)

### Pourquoi Vercel ?

✅ **Déploiement ultra-rapide** (30 secondes)
✅ **Automatique** depuis GitHub
✅ **Gratuit illimité** (100 sites)
✅ **SSL gratuit** (HTTPS)
✅ **Domaine perso gratuit** (monsite.vercel.app)
✅ **Analytics intégré**

**Idéal pour** : Next.js (créé par Vercel), React, Vue, Svelte

### Étape 1 : Préparer ton projet

#### Vérifier que ton projet a un package.json

```json
{
  "name": "mon-site",
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start"
  }
}
```

**Important** : Il faut un script `build` qui génère les fichiers de production.

#### Tester le build localement

```bash
npm run build
npm run start
```

Si ça marche localement → ça marchera sur Vercel !

### Étape 2 : Pousser sur GitHub

```bash
# Si pas encore de repo Git
git init
git add .
git commit -m "Initial commit"

# Créer un repo sur GitHub, puis :
git remote add origin https://github.com/ton-username/mon-site.git
git branch -M main
git push -u origin main
```

### Étape 3 : Déployer sur Vercel

#### Option A : Interface web (recommandé pour débuter)

1. Va sur https://vercel.com
2. Clique **"Sign Up"** → Connecte-toi avec GitHub
3. Clique **"New Project"**
4. Sélectionne ton repo GitHub
5. Vercel détecte automatiquement Next.js :
   ```
   Framework Preset: Next.js
   Build Command: npm run build
   Output Directory: .next
   ```
6. Clique **"Deploy"**

**C'est tout !** ⏱️ Ton site est en ligne en 30 secondes.

#### Option B : CLI (pour les devs confirmés)

```bash
# Installer Vercel CLI
npm install -g vercel

# Se connecter
vercel login

# Déployer
vercel

# Production
vercel --prod
```

### Étape 4 : Vérifier le déploiement

Vercel te donne une URL :
```
✅ https://mon-site-xyz.vercel.app
```

**Teste** :
- Site accessible ✅
- Pas d'erreurs 404 ✅
- HTTPS activé (cadenas vert) ✅

### Étape 5 : Automatiser les déploiements

**Magie** : Chaque fois que tu push sur GitHub, Vercel redéploie automatiquement !

```bash
git add .
git commit -m "Mise à jour"
git push
# → Vercel redéploie automatiquement en 30 sec
```

**Branches** :
- `main` → Production (https://mon-site.com)
- Autres branches → Preview (https://mon-site-git-feature.vercel.app)

### Étape 6 : Ajouter un domaine personnalisé

**Gratuit** : Tu peux ajouter ton propre domaine (ex : monsite.com).

**Étapes** :
1. Dans Vercel → **Settings** → **Domains**
2. Entre ton domaine : `monsite.com`
3. Vercel te donne des DNS à configurer

**Chez ton registrar** (OVH, Gandi, Cloudflare) :
```
Type : CNAME
Name : www
Value : cname.vercel-dns.com
```

**Attends 10-30 min** → Ton site est sur `https://monsite.com` ! 🎉

---

## 🌐 Déployer avec Netlify (React, Vue, Hugo)

### Pourquoi Netlify ?

✅ **Drag & drop** (glisse-dépose ton dossier)
✅ **Formulaires gratuits** (sans backend)
✅ **Fonctions serverless** (AWS Lambda)
✅ **Redirects et headers** faciles
✅ **Split testing** (A/B testing)

**Idéal pour** : Sites statiques, React, Vue, Hugo, Gatsby

### Étape 1 : Préparer ton projet

#### Vérifier le build

```bash
npm run build
# Génère un dossier 'build' ou 'dist'
```

### Étape 2 : Déployer

#### Option A : Drag & Drop (ultra-simple)

1. Va sur https://app.netlify.com
2. Connecte-toi avec GitHub
3. Clique **"Sites"** → **"Add new site"** → **"Deploy manually"**
4. Glisse-dépose ton dossier `build/` ou `dist/`

**Terminé !** URL : `https://mon-site-xyz.netlify.app`

#### Option B : Git (automatisé)

1. **"Sites"** → **"Add new site"** → **"Import from Git"**
2. Sélectionne GitHub → Choisis ton repo
3. Configure :
   ```
   Build command: npm run build
   Publish directory: build
   ```
4. Clique **"Deploy"**

### Étape 3 : Variables d'environnement

Si ton site a des secrets (API keys) :

**Netlify → Site Settings → Environment variables**
```
REACT_APP_API_KEY=ma_cle_secrete
```

Netlify les injecte automatiquement au build !

### Étape 4 : Domaine personnalisé

**Netlify → Domain Settings → Add custom domain**

Entre ton domaine, configure le DNS (CNAME ou A record).

---

## 📄 Déployer avec GitHub Pages (HTML/CSS/JS)

### Pourquoi GitHub Pages ?

✅ **100% gratuit** (hébergement GitHub)
✅ **Simple** (juste du HTML/CSS/JS)
✅ **Intégré à GitHub**
✅ **Pas de build** nécessaire

**Idéal pour** : Sites statiques simples, portfolios HTML, landing pages

**Limite** : Pas de backend, pas de Node.js

### Méthode 1 : Depuis le repo (recommandé)

#### Étape 1 : Créer un repo GitHub

```
Nom du repo : mon-site
Public ✅
```

#### Étape 2 : Ajouter tes fichiers

```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/ton-username/mon-site.git
git push -u origin main
```

Structure :
```
mon-site/
├── index.html
├── style.css
└── script.js
```

#### Étape 3 : Activer GitHub Pages

1. **Settings** → **Pages**
2. **Source** : `main` branch
3. **Folder** : `/` (root)
4. Clique **"Save"**

**Résultat** : `https://ton-username.github.io/mon-site/`

### Méthode 2 : User/Organization Site

**Nom spécial du repo** : `ton-username.github.io`

```bash
# Créer un repo nommé EXACTEMENT :
username.github.io
```

**Résultat** : `https://username.github.io` (sans `/mon-site`)

**Exemple** :
```
Repo : johndoe.github.io
URL  : https://johndoe.github.io
```

### Méthode 3 : Avec GitHub Actions (React build)

Pour déployer du React sur GitHub Pages :

#### .github/workflows/deploy.yml

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [main]

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2

      - name: Install and Build
        run: |
          npm install
          npm run build

      - name: Deploy
        uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./build
```

**Résultat** : Build automatique + déploiement sur chaque push !

---

## 🔧 Autres plateformes de déploiement

### Railway (Backend + Frontend)

**Idéal pour** : Node.js + Postgres, fullstack apps

```bash
npm install -g railway
railway login
railway init
railway up
```

**Gratuit** : $5/mois de crédit (suffisant pour petits projets)

### Render (Alternative Heroku)

**Idéal pour** : Node.js, Python, Docker

**Gratuit** : Oui, mais instance se met en veille (30s de démarrage)

### Cloudflare Pages (ultra-rapide)

**Idéal pour** : Sites statiques, Workers (serverless)

**Gratuit** : Illimité + CDN global

### Firebase Hosting (Google)

**Idéal pour** : Apps avec Firebase (auth, firestore)

```bash
npm install -g firebase-tools
firebase login
firebase init hosting
firebase deploy
```

**Gratuit** : 10 GB stockage, 360 MB/jour de transfert

---

## 🌍 Acheter un nom de domaine

### Où acheter ?

| Registrar | Prix/an | Avantages |
|-----------|---------|-----------|
| **Namecheap** | ~$10 | Pas cher, interface simple |
| **Gandi** | ~$15 | RGPD-friendly, français |
| **OVH** | ~$8 | Français, support FR |
| **Cloudflare** | ~$10 | Prix coûtant (pas de marge) |

**Mon conseil** : Cloudflare (prix au plus juste + DNS ultra-rapides)

### Configurer le DNS

Une fois le domaine acheté :

#### Pour Vercel :
```
Type : CNAME
Name : www
Value : cname.vercel-dns.com

Type : A
Name : @
Value : 76.76.21.21
```

#### Pour Netlify :
```
Type : CNAME
Name : www
Value : mon-site.netlify.app

Type : A
Name : @
Value : 75.2.60.5
```

#### Pour GitHub Pages :
```
Type : CNAME
Name : www
Value : ton-username.github.io

Type : A
Name : @
Value : 185.199.108.153
```

**Attends 10-30 min** pour la propagation DNS.

---

## 🛡️ HTTPS / SSL (certificat sécurisé)

**Bonne nouvelle** : Vercel, Netlify, GitHub Pages donnent **HTTPS gratuit** automatiquement !

**Tu n'as rien à faire** ✅

**Résultat** : `https://` avec cadenas vert 🔒

---

## 🚀 Déploiement continu (CI/CD)

**Concept** : Chaque commit → Build → Test → Déploiement automatique

**Exemple avec Vercel** :

```bash
# Développement
git checkout -b feature-nouvelle
# ... coder ...
git add .
git commit -m "Nouvelle feature"
git push

# Vercel crée automatiquement une preview :
# https://mon-site-git-feature-nouvelle.vercel.app

# Tester la preview
# Si OK :
git checkout main
git merge feature-nouvelle
git push

# Vercel déploie automatiquement en production !
```

**Avantages** :
✅ Zéro downtime (bascule instantanée)
✅ Rollback facile (si bug, revenir à la version précédente)
✅ Preview par branche (tester avant de merger)

---

## ❌ Erreurs courantes

### 1. Page blanche après déploiement

**Cause** : Chemins d'assets incorrects

❌ **Mauvais** :
```html
<link href="/style.css" rel="stylesheet">
```

✅ **Bon (Next.js)** :
```javascript
import './style.css'; // Import relatif
```

### 2. API calls en erreur (CORS)

**Cause** : API en `http://localhost:3000` codée en dur

❌ **Mauvais** :
```javascript
fetch('http://localhost:3000/api/users')
```

✅ **Bon** :
```javascript
const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000';
fetch(`${API_URL}/api/users`)
```

### 3. Build qui échoue

**Cause** : Erreurs TypeScript, dépendances manquantes

**Solution** :
```bash
# Teste localement AVANT de push
npm run build

# Si erreurs → corrige-les
# Puis re-test
```

### 4. 404 sur les routes (React Router)

**Cause** : Server-side routing vs client-side

**Solution Netlify** : Créer `public/_redirects`
```
/*    /index.html   200
```

**Solution Vercel** : Créer `vercel.json`
```json
{
  "rewrites": [{ "source": "/(.*)", "destination": "/" }]
}
```

---

## 📊 Monitoring et analytics

### Vercel Analytics (recommandé)

**Installation** :
```bash
npm install @vercel/analytics
```

```javascript
// app/layout.tsx
import { Analytics } from '@vercel/analytics/react';

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
```

**Gratuit** : 100k events/mois

### Google Analytics

**Alternative gratuite** :
```html
<!-- Dans <head> -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
</script>
```

---

## 🎯 Checklist de déploiement

### Avant de déployer
- [ ] Build fonctionne localement (`npm run build`)
- [ ] Pas d'erreurs dans la console
- [ ] Variables d'environnement configurées
- [ ] Assets (images, CSS) chargent correctement
- [ ] Tests passent (si tu en as)

### Après déploiement
- [ ] Site accessible sur l'URL publique
- [ ] HTTPS activé (cadenas vert)
- [ ] Pas d'erreurs 404
- [ ] Images et CSS chargent
- [ ] Formulaires fonctionnent
- [ ] Analytics configuré
- [ ] Domaine personnalisé (optionnel)

### SEO post-déploiement
- [ ] Soumettre sitemap à Google Search Console
- [ ] Vérifier `robots.txt`
- [ ] Meta tags (title, description) corrects
- [ ] Balises Open Graph (partage social)

---

## 💡 Bonnes pratiques

### 1. Utilise des variables d'environnement

❌ **Danger** :
```javascript
const API_KEY = 'ma_cle_secrete_123';
```

✅ **Sécurisé** :
```javascript
const API_KEY = process.env.NEXT_PUBLIC_API_KEY;
```

### 2. Optimise les images

```bash
# Compresse les images avant déploiement
npm install sharp
# Ou utilise TinyPNG, Squoosh
```

### 3. Utilise un CDN

Vercel et Netlify ont un **CDN global** automatique → Ton site est rapide partout dans le monde !

### 4. Ajoute un fichier `.vercelignore` ou `.gitignore`

```
node_modules/
.env.local
.DS_Store
```

### 5. Teste sur mobile

Avant de déployer, teste sur :
- Chrome DevTools (mode mobile)
- Ton smartphone
- Différents navigateurs

---

## 🚀 Roadmap : De localhost à production

### Semaine 1 : Développement local
- [ ] Créer le site en local
- [ ] Tester sur localhost
- [ ] Pousser sur GitHub

### Semaine 2 : Premier déploiement
- [ ] Choisir plateforme (Vercel, Netlify, GitHub Pages)
- [ ] Déployer avec l'URL par défaut
- [ ] Tester que tout fonctionne

### Semaine 3 : Domaine personnalisé
- [ ] Acheter un nom de domaine
- [ ] Configurer le DNS
- [ ] HTTPS activé

### Semaine 4 : Monitoring
- [ ] Ajouter analytics
- [ ] Soumettre à Google Search Console
- [ ] Surveiller les performances

---

## 🔗 Ressources

### Documentation officielle
- [Vercel Docs](https://vercel.com/docs)
- [Netlify Docs](https://docs.netlify.com/)
- [GitHub Pages Docs](https://docs.github.com/en/pages)

### Tutoriels
- [How to Deploy Next.js](https://nextjs.org/docs/deployment)
- [React Deployment](https://create-react-app.dev/docs/deployment/)

---

## 💡 Conclusion

**Déployer un site**, c'est :
- 🚀 **Simple** : 10 minutes avec Vercel/Netlify
- 💰 **Gratuit** : Pas besoin de payer pour commencer
- 🔄 **Automatisé** : Chaque commit redéploie
- 🌍 **Mondial** : CDN = rapide partout

**Prochaine étape** : Déploie ton premier site AUJOURD'HUI !

Commence avec :
- **Next.js / React** → Vercel
- **Site statique** → GitHub Pages
- **Fullstack** → Railway

**Mon conseil** : Ne perds pas de temps à comparer. Choisis-en un, déploie, et ajuste ensuite. L'important c'est d'avoir ton site EN LIGNE ! 🎉

---

**Prêt à déployer ?**
👉 Lis [C'est quoi Vercel ?](/blog/vercel-cest-quoi) pour approfondir
👉 Découvre [Comment acheter un nom de domaine ?](/blog/acheter-nom-de-domaine) pour ton site