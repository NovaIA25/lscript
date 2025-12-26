# 📝 CHANGELOG — Lscript V2

## [2.0.0] - 2024-12-26

### 🎨 Refonte Visuelle Majeure

#### ✨ Ajouts

**Nouveau système de couleurs**
- Ajout de [`lib/categoryColors.ts`](lib/categoryColors.ts) — Système de gradients automatiques par catégorie
- 9 catégories avec gradients uniques et cohérents
- Icônes associées pour reconnaissance visuelle instantanée

**ArticleCard V2**
- Refonte complète du composant [`components/ArticleCard.tsx`](components/ArticleCard.tsx)
- Ajout de couvertures visuelles (gradient + icône par catégorie)
- Footer avec date et indicateur de lecture
- Micro-animations au hover (scale icon + apparition flèche)
- Hiérarchie visuelle renforcée

**Hero Section améliorée**
- Ajout d'un grid pattern subtil (style Linear/Stripe)
- Masque radial pour effet focal
- Amélioration de la profondeur visuelle

**Callouts pédagogiques enrichis**
- 3 nouveaux types : `example`, `key-point`, `info`
- Support des icônes personnalisées
- Styles CSS dédiés pour chaque type

**Badges de difficulté (Guide)**
- Classes CSS pour badges : `difficulty-beginner`, `difficulty-intermediate`, `difficulty-advanced`
- Classe `chapter-duration` pour temps estimé
- Design cohérent avec la charte graphique

**Visualisations valorisées**
- Styles premium pour cards de visualisation
- État "coming soon" élégant avec badge de date
- Liens alternatifs vers articles associés

**Polish & Micro-animations**
- Smooth scroll behavior
- Focus states améliorés (accessibilité)
- Animation fadeIn pour transitions de page
- Selection styling personnalisé (orange clair)
- Scrollbar personnalisée (webkit)
- Support `prefers-reduced-motion`

#### 🔧 Améliorations CSS

**Variables CSS enrichies**
```css
/* Nouvelles variables ajoutées */
--color-accent-vibrant: #f97316;
--color-gradient-primary: linear-gradient(135deg, #ea580c 0%, #f97316 100%);
--color-gradient-hero: radial-gradient(...);
--shadow-card-premium: ...;
--shadow-card-v2: ...;
--shadow-card-v2-hover: ...;
```

**Nouvelles sections CSS**
- `ARTICLE CARD V2` (lignes 1491-1644)
- `HERO GRID PATTERN V2` (lignes 1646-1662)
- `NEXT STEPS / LIRE ENSUITE V2` (lignes 1696-1755)
- `VISUALIZATIONS PAGE V2` (lignes 1009-1116)
- `POLISH & MICRO-ANIMATIONS V2` (lignes 1876-1996)

#### 📦 Nouveaux fichiers

- `lib/categoryColors.ts` — Système de couleurs par catégorie
- `REFONTE_V2_GUIDE.md` — Documentation complète de la refonte
- `CHANGELOG_V2.md` — Ce fichier

#### 🔄 Modifications

**components/ArticleCard.tsx**
- Import de `getCategoryGradient` et `getCategoryIcon`
- Ajout du paramètre `variant` (pour usage futur)
- Remplacement de la classe `article-card` par `article-card-v2`
- Ajout de la structure cover + body + footer

**app/page.tsx**
- Ajout de `<div className="hero-grid-pattern" />`
- Ajout de `position: relative` et `zIndex: 1` au container hero

**components/Callout.tsx**
- Extension des types acceptés (6 types au lieu de 3)
- Support du prop `icon` pour personnalisation
- Refactoring de la structure interne

**styles/globals.css**
- Ajout de ~500 lignes de CSS
- Enrichissement des variables
- Nouveaux styles pour cards, callouts, badges, etc.

---

## Impact Visuel

### Avant V2
- Cards neutres avec texte seul
- Hero basique avec gradient simple
- 3 types de callouts
- Visualisations discrètes

### Après V2
- **Cards premium** avec gradients colorés par catégorie
- **Hero moderne** avec grid pattern subtil
- **6 types de callouts** pour variété pédagogique
- **Visualisations valorisées** avec états élégants
- **Micro-animations** professionnelles

---

## Compatibilité

✅ **100% rétrocompatible**
- Anciennes classes CSS toujours fonctionnelles
- Aucune dépendance externe ajoutée
- Performance maintenue (CSS pur, animations GPU)

✅ **Accessibilité**
- Contraste WCAG AA respecté
- Focus states améliorés
- Support `prefers-reduced-motion`
- Keyboard navigation préservée

✅ **Responsive**
- Mobile-first conservé
- Breakpoints existants respectés
- Nouvelles media queries ajoutées où nécessaire

---

## Performance

**Aucun impact négatif :**
- Pas de nouvelle dépendance npm
- CSS pur (pas de JS pour les animations)
- Animations GPU-accelerated (`transform`, `opacity`)
- Lazy loading préservé

**Optimisations incluses :**
- `will-change` sur éléments animés
- Transitions optimisées (`transform` > `left/top`)
- Scrollbar personnalisée (webkit uniquement, fallback natif)

---

## Migration

**Aucune action requise** — La migration est **automatique** !

Les anciens composants utilisent automatiquement les nouveaux styles.

### Pour profiter pleinement de la V2 :

1. **Nouveaux callouts** (optionnel)
   ```tsx
   <Callout type="example">
     <p>Votre exemple...</p>
   </Callout>
   ```

2. **Badges de difficulté dans le Guide** (à implémenter)
   ```tsx
   <span className="difficulty-badge difficulty-beginner">
     🟢 Débutant
   </span>
   ```

---

## Prochaines versions

### v2.1.0 (planifiée)
- [ ] Intégration des badges de difficulté dans `lib/chapters.ts`
- [ ] Exemples d'utilisation des nouveaux callouts dans 3 articles
- [ ] Documentation des patterns de design dans Storybook (optionnel)

### v2.2.0 (planifiée)
- [ ] Mode sombre (dark mode)
- [ ] Illustrations SVG pour certaines catégories phares
- [ ] Previews vidéo pour les visualisations

---

## Remerciements

Refonte inspirée par :
- **Grafikart** (crédibilité, clarté)
- **Smashing Magazine** (lisibilité, typographie)
- **Ghost** (sobriété premium)
- **Linear / Stripe** (design moderne, grid patterns)

---

*Dernière mise à jour : 26 décembre 2024*
