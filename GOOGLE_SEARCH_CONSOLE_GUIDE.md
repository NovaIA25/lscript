# 🔍 Guide complet Google Search Console - Lscript.fr

**Date** : 26 décembre 2024
**Objectif** : Indexer et monitorer 24 articles SEO sur Google

---

## 📋 Table des matières

1. [Qu'est-ce que Google Search Console ?](#quest-ce-que-google-search-console)
2. [Étape 1 : Créer un compte et ajouter la propriété](#étape-1--créer-un-compte-et-ajouter-la-propriété)
3. [Étape 2 : Vérifier la propriété](#étape-2--vérifier-la-propriété)
4. [Étape 3 : Soumettre le sitemap](#étape-3--soumettre-le-sitemap)
5. [Étape 4 : Demander l'indexation des pages clés](#étape-4--demander-lindexation-des-pages-clés)
6. [Étape 5 : Surveiller les performances](#étape-5--surveiller-les-performances)
7. [Étape 6 : Optimiser en continu](#étape-6--optimiser-en-continu)
8. [FAQ et dépannage](#faq-et-dépannage)

---

## Qu'est-ce que Google Search Console ?

**Google Search Console** (GSC) est un outil **gratuit** de Google qui te permet de :
- ✅ Soumettre ton site pour indexation
- ✅ Voir combien de pages sont indexées
- ✅ Surveiller tes positions dans Google
- ✅ Analyser les clics, impressions, CTR
- ✅ Détecter les erreurs techniques (404, pages lentes)
- ✅ Voir quels mots-clés génèrent du trafic

**Sans GSC** : Google indexe ton site... mais tu ne sais pas quand ni comment.
**Avec GSC** : Tu **accélères** l'indexation et tu **surveilles** tout !

---

## Étape 1 : Créer un compte et ajouter la propriété

### 1.1 Accéder à Google Search Console

🔗 **Lien** : https://search.google.com/search-console

- Connecte-toi avec ton compte Google
- Clique sur **"Commencer maintenant"**

### 1.2 Ajouter ta propriété

Tu as **2 options** :

#### Option A : Domaine (recommandée)
```
Domaine : lscript.fr
```
**Avantages** :
- ✅ Inclut www, http, https automatiquement
- ✅ Plus simple (un seul compte pour tout)

**Inconvénient** :
- ❌ Nécessite accès DNS (chez ton hébergeur/registrar)

#### Option B : Préfixe d'URL
```
Préfixe d'URL : https://lscript.fr
```
**Avantages** :
- ✅ Vérification plus simple (balise HTML)

**Inconvénient** :
- ❌ Doit être fait pour chaque variante (www, http, etc.)

### 1.3 Quelle option choisir ?

**Si tu as accès au DNS** : Choisis **Option A (Domaine)**
**Si tu préfères simple** : Choisis **Option B (Préfixe d'URL)**

---

## Étape 2 : Vérifier la propriété

Google doit vérifier que tu es bien le propriétaire du site.

### Méthode 1 : Vérification DNS (Option A)

**Étapes** :
1. Google te donne un enregistrement TXT (ex : `google-site-verification=abc123xyz`)
2. Va chez ton registrar de domaine (OVH, Gandi, Cloudflare, etc.)
3. Ajoute un enregistrement DNS **TXT** :
   ```
   Type : TXT
   Nom : @
   Valeur : google-site-verification=abc123xyz
   ```
4. Attends 5-10 minutes (propagation DNS)
5. Retourne sur GSC et clique **"Vérifier"**

**Exemple avec Cloudflare** :
```
Dashboard → DNS → Add Record
Type : TXT
Name : @
Content : google-site-verification=abc123xyz
TTL : Auto
```

### Méthode 2 : Balise HTML (Option B)

**Étapes** :
1. Google te donne une balise meta :
   ```html
   <meta name="google-site-verification" content="abc123xyz" />
   ```
2. Ajoute cette balise dans le `<head>` de ton site

**Pour Next.js (app/layout.tsx)** :
```tsx
export const metadata: Metadata = {
  // ... autres métadonnées
  verification: {
    google: 'abc123xyz', // Remplace par ton code
  },
};
```

3. Déploie sur Vercel
4. Retourne sur GSC et clique **"Vérifier"**

### Méthode 3 : Google Analytics (si déjà installé)

Si tu as Google Analytics 4 sur ton site, GSC peut vérifier automatiquement.

### Méthode 4 : Fichier HTML

Google te fournit un fichier `googleXXX.html` à mettre à la racine :
```
public/googleXXX.html
```

Déploie, puis clique **"Vérifier"**.

---

## Étape 3 : Soumettre le sitemap

### 3.1 Vérifier que ton sitemap fonctionne

Avant de soumettre, teste ton sitemap :

🔗 **URL** : https://lscript.fr/sitemap.xml

Tu devrais voir un XML avec toutes tes URLs (articles, pages, chapitres).

**Exemple de structure** :
```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://lscript.fr</loc>
    <lastmod>2024-12-26</lastmod>
    <changefreq>daily</changefreq>
    <priority>1.0</priority>
  </url>
  <url>
    <loc>https://lscript.fr/blog/comment-creer-application-mobile</loc>
    <lastmod>2024-12-26</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
  <!-- ... 24 articles au total -->
</urlset>
```

### 3.2 Soumettre le sitemap dans GSC

**Étapes** :
1. Dans Google Search Console, clique **"Sitemaps"** (menu gauche)
2. Entre l'URL du sitemap :
   ```
   https://lscript.fr/sitemap.xml
   ```
3. Clique **"Envoyer"**

**Résultat attendu** :
```
✅ Sitemap envoyé avec succès
📊 24 URLs découvertes
⏳ Indexation en cours...
```

### 3.3 Surveiller le statut

Google va crawler ton sitemap dans les **24-48h**.

**Dans GSC → Sitemaps** :
- **Découvertes** : Nombre d'URLs trouvées
- **Envoyées** : Soumises à Google
- **Indexées** : Apparaissent dans Google Search

**Timeline attendue** :
- Jour 1 : Sitemap découvert
- Jour 2-3 : Premières pages crawlées
- Semaine 1 : 5-10 pages indexées
- Semaine 2-4 : Toutes les pages indexées

---

## Étape 4 : Demander l'indexation des pages clés

**Pourquoi ?** Accélérer l'indexation au lieu d'attendre que Google crawle naturellement.

### 4.1 Pages à indexer en priorité

**TOP 10 des pages à indexer immédiatement** :

1. ✅ Homepage : `https://lscript.fr`
2. ✅ Guide : `https://lscript.fr/guide`
3. ✅ Blog : `https://lscript.fr/blog`
4. ✅ Comment créer un site web (5000/mois) : `/blog/comment-creer-un-site-web`
5. ✅ Application mobile (4000/mois) : `/blog/comment-creer-application-mobile`
6. ✅ Git GitHub (2500/mois) : `/blog/git-github-difference`
7. ✅ BDD (2000/mois) : `/blog/quest-ce-quune-base-de-donnees`
8. ✅ Algorithme (2000/mois) : `/blog/quest-ce-quun-algorithme`
9. ✅ JavaScript (2000/mois) : `/blog/javascript-cest-quoi`
10. ✅ CSS (1800/mois) : `/blog/css-cest-quoi`

### 4.2 Comment demander l'indexation ?

**Méthode** :
1. Dans GSC, en haut : barre de recherche
2. Entre l'URL complète (ex : `https://lscript.fr/blog/comment-creer-un-site-web`)
3. Clique **"Entrée"**

**Résultats possibles** :

#### Cas 1 : URL non indexée
```
❌ L'URL n'est pas dans Google
```
**Action** : Clique **"Demander l'indexation"**

#### Cas 2 : URL déjà indexée
```
✅ L'URL est dans Google
```
**Action** : Rien à faire (ou clique "Tester l'URL en direct" pour re-crawler)

#### Cas 3 : URL crawlée mais pas indexée
```
⚠️ URL découverte mais pas encore indexée
```
**Action** : Attends 1-2 semaines. Si toujours pas indexée, demande l'indexation.

### 4.3 Quota d'indexation

**Limite** : Environ **10-20 demandes par jour** (quota non officiel).

**Stratégie** :
- **Jour 1** : Homepage, /guide, /blog, top 7 articles
- **Jour 2** : 10 articles suivants
- **Jour 3** : Derniers articles + chapitres guide

---

## Étape 5 : Surveiller les performances

### 5.1 Rapport de performances (le plus important !)

**Menu GSC** : **"Performances"**

**Métriques clés** :

| Métrique | Description | Objectif Mois 1 |
|----------|-------------|-----------------|
| **Impressions** | Fois où ton site apparaît dans Google | 1,000+ |
| **Clics** | Utilisateurs qui cliquent | 50+ |
| **CTR** (Taux de clic) | Clics / Impressions | 3-5% |
| **Position moyenne** | Classement moyen dans Google | <50 |

### 5.2 Analyser les données

**Filtres utiles** :

#### Par page
Voir quels articles performent :
```
Performances → Onglet "Pages"
```
**Résultat** : Liste des URLs avec impressions/clics

**Exemple** :
```
/blog/comment-creer-un-site-web → 500 impressions, 25 clics
/blog/comment-creer-application-mobile → 300 impressions, 15 clics
```

#### Par requête
Voir quels mots-clés génèrent du trafic :
```
Performances → Onglet "Requêtes"
```
**Résultat** : Liste des mots-clés cherchés

**Exemple** :
```
"comment créer un site web" → Position 15, 200 impressions
"apprendre à coder" → Position 25, 150 impressions
```

#### Par pays
```
Performances → Onglet "Pays"
```
**Résultat** : France devrait dominer (site en français)

#### Par appareil
```
Performances → Onglet "Appareils"
```
**Résultat** : Mobile vs Desktop vs Tablette

### 5.3 Rapport de couverture

**Menu GSC** : **"Couverture"** (ou "Pages" dans la nouvelle interface)

**Ce que tu vois** :
- ✅ **Indexées** : Pages dans Google
- ⚠️ **Valides avec avertissement** : Indexées mais avec problèmes mineurs
- ❌ **Erreur** : Non indexées (problème technique)
- ⏸️ **Exclues** : Google a choisi de ne pas les indexer

**Objectif** : 24/24 pages dans "Indexées" ✅

### 5.4 Rapport d'expérience

**Menu GSC** : **"Expérience"** → **"Core Web Vitals"**

**Métriques** :
- **LCP** (Largest Contentful Paint) : <2.5s
- **FID** (First Input Delay) : <100ms
- **CLS** (Cumulative Layout Shift) : <0.1

**Objectif** : Toutes les pages en **"Vert"** (Bon)

---

## Étape 6 : Optimiser en continu

### 6.1 Analyse hebdomadaire (Semaines 1-4)

**Checklist hebdomadaire** :

#### Semaine 1
- [ ] Vérifier que le sitemap est bien crawlé
- [ ] Vérifier que les 10 pages clés sont indexées
- [ ] Surveiller les premières impressions

#### Semaine 2
- [ ] Vérifier que 15+ pages sont indexées
- [ ] Analyser les premiers mots-clés
- [ ] Identifier les pages qui ne s'indexent pas

#### Semaine 3
- [ ] Vérifier que 20+ pages sont indexées
- [ ] Analyser les positions (objectif <50)
- [ ] Optimiser les pages avec impressions mais peu de clics

#### Semaine 4
- [ ] Vérifier que 24/24 pages sont indexées
- [ ] Analyser les top 10 requêtes
- [ ] Optimiser les meta descriptions des pages avec CTR faible

### 6.2 Optimisations basées sur les données

#### Si CTR faible (<2%)
**Problème** : Beaucoup d'impressions mais peu de clics.

**Solutions** :
- ✅ Améliorer le **meta title** (plus accrocheur)
- ✅ Améliorer la **meta description** (appel à l'action)
- ✅ Ajouter des **emojis** dans le title (👉, ✅, 🚀)

**Exemple** :
```
❌ Mauvais title : "JavaScript - Guide"
✅ Bon title : "C'est quoi JavaScript ? (Guide débutant 2025)"
```

#### Si position moyenne > 50
**Problème** : Ton article est trop bas dans Google.

**Solutions** :
- ✅ Ajouter plus de contenu (viser 3000+ mots)
- ✅ Améliorer le maillage interne (liens entre articles)
- ✅ Obtenir des backlinks (partager sur Twitter, Reddit)
- ✅ Optimiser les mots-clés (ajouter variations)

#### Si pages non indexées
**Problème** : Google refuse d'indexer certaines pages.

**Solutions** :
- ✅ Vérifier le `robots.txt` (pas de `Disallow` sur ces pages)
- ✅ Vérifier qu'il n'y a pas de balise `noindex`
- ✅ Améliorer le contenu (contenu trop court = non indexé)
- ✅ Ajouter des liens internes vers ces pages

### 6.3 Analyse mensuelle (Mois 1, 2, 3)

**Tableau de suivi** :

| Mois | Pages indexées | Impressions | Clics | CTR | Position moy. |
|------|----------------|-------------|-------|-----|---------------|
| **Mois 1** | 20/24 | 1,000 | 50 | 5% | 45 |
| **Mois 2** | 24/24 | 5,000 | 200 | 4% | 30 |
| **Mois 3** | 24/24 | 15,000 | 600 | 4% | 20 |

**Actions selon les résultats** :

- **Si impressions stagnent** : Créer plus de contenu (PRIORITY 3)
- **Si CTR baisse** : Optimiser titles/descriptions
- **Si positions baissent** : Améliorer contenu, obtenir backlinks
- **Si tout monte** : Continue ! 🚀

---

## FAQ et dépannage

### ❓ Combien de temps avant que Google indexe mon site ?

**Réponse** :
- **Sitemap soumis** : 24-48h pour crawler
- **Première page indexée** : 3-7 jours
- **Toutes les pages** : 2-4 semaines

**Accélérateur** : Demander l'indexation manuelle (10 pages/jour)

### ❓ Mon sitemap est en erreur, pourquoi ?

**Causes fréquentes** :
1. Sitemap non accessible (404) → Vérifie `/sitemap.xml`
2. Format XML invalide → Vérifie avec https://www.xml-sitemaps.com/validate-xml-sitemap.html
3. URLs en erreur 404 dans le sitemap

**Solution** : Teste ton sitemap localement et corrige les erreurs.

### ❓ Certaines pages ne s'indexent pas, pourquoi ?

**Causes** :
1. **Contenu dupliqué** : Deux pages trop similaires
2. **Contenu court** : <500 mots (Google préfère 1000+)
3. **Balise noindex** : Vérifie qu'il n'y a pas de `<meta name="robots" content="noindex">`
4. **Crawl budget** : Google crawle lentement (attends 1-2 semaines)

**Solution** : Améliore le contenu, ajoute des liens internes.

### ❓ Mon CTR est de 1%, c'est normal ?

**Non** : CTR moyen = 3-5%.

**Solutions** :
- ✅ Titles plus accrocheurs (ajoute "Guide complet", "2025", emojis)
- ✅ Meta descriptions avec appel à l'action
- ✅ Dates dans title (montrer que c'est récent)

### ❓ Mon site n'apparaît pas dans Google, pourquoi ?

**Vérifications** :
1. Tape `site:lscript.fr` dans Google → Si rien, pas encore indexé
2. Vérifie GSC → "Couverture" → Erreurs ?
3. Vérifie `robots.txt` → Pas de `Disallow: /`
4. Attends 1-2 semaines (Google est lent au début)

### ❓ Faut-il soumettre chaque article individuellement ?

**Non obligatoire**, mais **recommandé** pour les 10 articles phares.

**Stratégie** :
- Articles haute priorité (5000/mois, 4000/mois) : Soumettre manuellement
- Autres articles : Laisser le sitemap faire le travail

### ❓ Mon concurrent est mieux classé, pourquoi ?

**Facteurs** :
1. **Ancienneté** : Domaine plus ancien (autorité)
2. **Backlinks** : Plus de sites pointent vers lui
3. **Contenu** : Plus long, plus complet
4. **UX** : Site plus rapide, meilleur design

**Solution** : Améliore ton contenu, obtiens des backlinks, patience !

---

## 🎯 Checklist de lancement GSC

### Setup initial (Jour 1)
- [ ] Créer compte Google Search Console
- [ ] Ajouter la propriété (domaine ou préfixe URL)
- [ ] Vérifier la propriété (DNS ou balise HTML)
- [ ] Soumettre le sitemap (`/sitemap.xml`)

### Indexation accélérée (Jour 1-3)
- [ ] Demander indexation de la homepage
- [ ] Demander indexation de `/guide`
- [ ] Demander indexation de `/blog`
- [ ] Demander indexation des 7 articles phares

### Surveillance (Semaine 1-4)
- [ ] Vérifier couverture chaque semaine
- [ ] Surveiller impressions/clics dans Performances
- [ ] Analyser quels mots-clés fonctionnent
- [ ] Optimiser CTR si <3%

### Optimisation (Mois 1-3)
- [ ] Analyser top 10 requêtes
- [ ] Améliorer titles/descriptions si CTR faible
- [ ] Créer plus de contenu si impressions stagnent
- [ ] Obtenir backlinks (Reddit, Twitter, forums)

---

## 📊 Dashboard de suivi (Google Sheets)

Crée un Google Sheets avec ce tableau :

| Date | Pages indexées | Impressions | Clics | CTR | Position moy. | Top requête | Notes |
|------|----------------|-------------|-------|-----|---------------|-------------|-------|
| 01/01/25 | 5/24 | 50 | 2 | 4% | 60 | "apprendre python" | Sitemap soumis |
| 08/01/25 | 10/24 | 200 | 8 | 4% | 55 | "créer site web" | 10 articles indexés |
| 15/01/25 | 15/24 | 500 | 20 | 4% | 50 | ... | ... |

**Met à jour chaque semaine** pour suivre la progression !

---

## 🚀 Prochaines étapes après GSC

Une fois GSC configuré :

1. **Attendre 2-4 semaines** pour les premières données
2. **Analyser** les top requêtes qui génèrent du trafic
3. **Optimiser** les pages avec impressions mais CTR faible
4. **Créer plus de contenu** (PRIORITY 3) sur les thèmes qui performent
5. **Obtenir des backlinks** (partager sur Twitter, Reddit, forums dev FR)

---

**📌 Ressources utiles**

- [Google Search Console](https://search.google.com/search-console)
- [Guide officiel Google](https://support.google.com/webmasters/answer/9128669)
- [Structured Data Testing Tool](https://validator.schema.org/)
- [PageSpeed Insights](https://pagespeed.web.dev/)

---

**✅ Tu es maintenant prêt à dominer Google !** 🚀

*Dernière mise à jour : 26 décembre 2024*