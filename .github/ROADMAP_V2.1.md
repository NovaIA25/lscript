# 🚀 Roadmap V2.1 — Lscript.fr

**Date de planification** : 26 décembre 2024
**Statut** : En planification
**Objectif** : Fonctionnalités avancées et expérience utilisateur enrichie

---

## 📋 Vue d'ensemble

La V2.1 se concentre sur trois axes majeurs :
1. **Mode sombre** — Confort visuel et accessibilité
2. **Table des matières interactive** — Navigation améliorée dans les articles
3. **Nouvelles visualisations** — Contenu interactif étendu

---

## 🌙 Axe 1 : Mode Sombre (Dark Mode)

### Objectif
Offrir un thème sombre pour améliorer le confort de lecture en conditions de faible luminosité et répondre aux préférences utilisateurs.

### Fonctionnalités

**1. Switch de thème**
- Toggle clair/sombre dans le header
- Icône soleil ☀️ / lune 🌙
- Animation de transition fluide
- Sauvegarde de la préférence (localStorage)
- Respect de `prefers-color-scheme`

**2. Palette de couleurs sombre**
```css
/* Couleurs dark mode */
--color-bg-dark: #0f172a;
--color-surface-dark: #1e293b;
--color-text-dark: #e2e8f0;
--color-text-muted-dark: #94a3b8;
--color-border-dark: #334155;
```

**3. Adaptation des composants**
- ArticleCard : fond sombre, ombres adaptées
- Hero : grid pattern atténué
- Callouts : couleurs ajustées pour le contraste
- Code blocks : thème syntaxe adapté

**4. Gradients adaptés**
- Gradients de catégories plus saturés en dark mode
- Contraste maintenu (WCAG AA minimum)

### Estimation
- **Développement** : 2-3 jours
- **Tests** : 1 jour (contraste, transitions, compatibilité)
- **Impact** : Engagement +15%, satisfaction utilisateur +25%

---

## 📑 Axe 2 : Table des Matières Interactive

### Objectif
Faciliter la navigation dans les articles longs avec une TOC fixe et dynamique.

### Fonctionnalités

**1. TOC flottante (desktop)**
- Position fixe à droite de l'article
- Liste des H2 et H3 cliquables
- Highlight de la section active (scroll spy)
- Smooth scroll vers les sections

**2. TOC repliable (mobile/tablet)**
- Bouton "📖 Sommaire" en haut de l'article
- Menu déroulant/drawer avec la TOC
- Fermeture automatique après sélection

**3. Génération automatique**
- Parsing des headings au build
- Création d'ancres ID uniques
- Support des emojis dans les titres

**4. Design**
```css
.toc {
  position: sticky;
  top: 100px;
  max-width: 250px;
  padding: var(--space-4);
  border-left: 2px solid var(--color-border);
}

.toc-link {
  color: var(--color-text-muted);
  transition: color var(--duration-fast);
}

.toc-link.active {
  color: var(--color-primary);
  font-weight: 600;
}
```

### Articles prioritaires
- Articles > 8 sections (Guide, articles longs)
- Activation automatique si 5+ headings
- Option de désactivation par article (frontmatter)

### Estimation
- **Développement** : 3-4 jours
- **Tests** : 1 jour (responsive, scroll behavior)
- **Impact** : Temps sur page +20%, bounce rate -15%

---

## 🎨 Axe 3 : Nouvelles Visualisations Interactives

### Objectif
Étendre la bibliothèque de visualisations 3D/interactives pour couvrir plus de concepts.

### Visualisations prioritaires

**1. C'est quoi une API ?** (🚧 En cours)
- Animation requête/réponse HTTP
- Visualisation JSON
- Exemples concrets (météo, GitHub)
- Temps estimé : 6 min

**2. Git : commits et branches**
- Arbre de commits animé
- Visualisation des branches
- Merge et conflits
- Temps estimé : 8 min

**3. Les bases de données SQL**
- Table visuelle interactive
- Requêtes SELECT animées
- Joins visuels
- Temps estimé : 7 min

**4. JavaScript asynchrone**
- Callback hell visualisé
- Promises en action
- Async/await expliqué
- Temps estimé : 6 min

**5. CSS Flexbox & Grid**
- Propriétés interactives
- Layouts en temps réel
- Cas d'usage courants
- Temps estimé : 5 min

### Technologie
- Three.js (3D)
- Framer Motion (animations)
- React hooks (interactivité)
- Canvas API (graphiques)

### Estimation par visualisation
- **Design** : 1 jour
- **Développement** : 2-3 jours
- **Contenu pédagogique** : 1 jour
- **Tests** : 0.5 jour

**Total pour 5 visualisations** : ~4 semaines

### Impact attendu
- Bibliothèque étendue : 2 → 7 visualisations
- Couverture concepts clés : +50%
- Engagement sur /visualisations : +100%

---

## 📅 Planning V2.1

### Phase 1 : Mode Sombre (Janvier 2025)
```
Semaine 1-2 : Développement mode sombre
- Design des couleurs dark
- Implementation du toggle
- Adaptation des composants
- Tests de contraste

Livrable : Dark mode fonctionnel
```

### Phase 2 : Table des Matières (Janvier-Février 2025)
```
Semaine 3-4 : TOC interactive
- Génération automatique
- Design desktop/mobile
- Scroll spy
- Tests responsive

Livrable : TOC sur articles longs
```

### Phase 3 : Visualisations (Février-Mars 2025)
```
Semaine 5-8 : Nouvelles visualisations
- API (déjà en cours)
- Git
- SQL
- JavaScript async
- CSS Flexbox/Grid

Livrable : 5 nouvelles visualisations
```

---

## 🎯 Métriques de Succès V2.1

| Métrique | Baseline V2.0 | Objectif V2.1 |
|----------|---------------|---------------|
| **Temps sur page** | Baseline | +25% |
| **Bounce rate** | Baseline | -20% |
| **Pages vues/session** | Baseline | +30% |
| **Satisfaction (sondage)** | - | 8.5/10 |
| **Retours utilisateurs** | - | 90% positifs |

### Tracking
- Google Analytics 4
- Vercel Analytics
- Hotjar (heatmaps)
- Sondage utilisateur (post-V2.1)

---

## ✅ Prérequis Techniques

**Mode Sombre**
- CSS Variables (déjà en place ✅)
- `prefers-color-scheme` media query
- localStorage API
- Theme provider (Context)

**Table des Matières**
- Parsing markdown headings
- Intersection Observer API
- Smooth scroll behavior
- Responsive breakpoints

**Visualisations**
- Three.js library
- Canvas/WebGL support
- Mobile touch events
- Performance optimization

---

## 🚧 Risques et Mitigations

### Risques

1. **Mode sombre : Contraste insuffisant**
   - Mitigation : Tests WCAG AAA, outils automatisés

2. **TOC : Performance sur mobile**
   - Mitigation : Lazy loading, debounce scroll events

3. **Visualisations : Complexité technique**
   - Mitigation : Prototypage rapide, simplification si nécessaire

4. **Délais de développement**
   - Mitigation : Livraison incrémentale par feature

---

## 🎁 Bonus (Si temps disponible)

### Fonctionnalités additionnelles
1. **Recherche globale améliorée**
   - Recherche full-text avec Algolia/MeiliSearch
   - Suggestions automatiques
   - Filtres avancés

2. **Profil utilisateur**
   - Progression sauvegardée (cloud)
   - Bookmarks/favoris
   - Historique de lecture

3. **Mode focus**
   - Lecture sans distractions
   - Typographie optimisée
   - Navigation minimale

4. **PWA (Progressive Web App)**
   - Installation sur mobile
   - Offline mode
   - Notifications push (nouveaux articles)

---

## 📊 Résumé Exécutif

**V2.1 en chiffres :**
- 🌙 1 mode sombre complet
- 📑 1 système de TOC interactive
- 🎨 5 nouvelles visualisations
- ⏱️ ~8 semaines de développement
- 📈 Impact : +25% engagement attendu

**Date de livraison estimée :** Mars 2025

**Priorité :**
1. Mode sombre (confort utilisateur)
2. TOC (navigation)
3. Visualisations (différenciation)

---

**Créé le** : 26 décembre 2024
**Dernière mise à jour** : 26 décembre 2024
**Statut** : 📝 En planification
