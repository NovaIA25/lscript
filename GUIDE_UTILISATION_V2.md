# 🚀 Guide d'Utilisation — Lscript V2

Guide rapide pour utiliser les nouveaux composants et styles de la V2.

---

## 📋 Table des matières

1. [ArticleCard V2](#articlecard-v2)
2. [Callouts enrichis](#callouts-enrichis)
3. [Badges de difficulté](#badges-de-difficulté)
4. [Hero avec grid pattern](#hero-avec-grid-pattern)
5. [Visualisations premium](#visualisations-premium)
6. [Classes utilitaires](#classes-utilitaires)

---

## 1. ArticleCard V2

### ✅ Déjà activé automatiquement

Le composant [`ArticleCard`](components/ArticleCard.tsx) utilise maintenant automatiquement :
- Gradients colorés par catégorie
- Icônes représentatives
- Animations au hover

### Utilisation

```tsx
import ArticleCard from '@/components/ArticleCard';

// Usage basique (déjà en place partout)
<ArticleCard article={article} />

// Variante future (à implémenter si besoin)
<ArticleCard article={article} variant="compact" />
```

### Personnaliser les couleurs d'une catégorie

Éditez [`lib/categoryColors.ts`](lib/categoryColors.ts) :

```typescript
const categoryStyles: Record<string, CategoryStyle> = {
  'MaCategorie': {
    primary: '#ea580c',
    secondary: '#f97316',
    gradient: 'linear-gradient(135deg, #ea580c 0%, #f97316 100%)',
    icon: '🚀',
    textColor: '#fff',
  },
  // ...
};
```

---

## 2. Callouts enrichis

### Types disponibles

| Type | Icône | Couleur | Usage |
|------|-------|---------|-------|
| `tip` | 💡 | Vert | Conseil, astuce |
| `warning` | ⚠️ | Jaune | Erreur fréquente, attention |
| `summary` | 🧭 | Gris | Résumé, conclusion |
| `example` | ✨ | Bleu | Exemple concret |
| `key-point` | 🎯 | Orange | Point clé à retenir |
| `info` | ℹ️ | Bleu clair | Information bonus |

### Utilisation dans un article MDX

```tsx
import Callout from '@/components/Callout';

// Usage basique
<Callout type="tip">
  <p>Pense à toujours tester ton code avant de le déployer.</p>
</Callout>

// Avec titre personnalisé
<Callout type="example" title="Exemple : Commander une pizza">
  <p>Imagine que tu appelles une pizzeria...</p>
</Callout>

// Avec icône personnalisée
<Callout type="key-point" icon="🚀">
  <p>C'est LE concept le plus important de cet article.</p>
</Callout>

// Avec contenu structuré
<Callout type="summary">
  <p>En résumé :</p>
  <ul>
    <li>Point 1</li>
    <li>Point 2</li>
    <li>Point 3</li>
  </ul>
</Callout>
```

### Exemple concret dans un article

```tsx
## Comment fonctionne une API ?

Une API, c'est comme un serveur dans un restaurant...

<Callout type="example" title="Analogie : Le restaurant">
  <p>
    <strong>Client :</strong> Tu passes commande (requête)<br />
    <strong>Serveur :</strong> L'API transmet au chef<br />
    <strong>Chef :</strong> Le backend prépare les données<br />
    <strong>Serveur :</strong> L'API te ramène le plat (réponse)
  </p>
</Callout>

<Callout type="key-point">
  <p>Une API est un intermédiaire qui permet à deux applications de communiquer.</p>
</Callout>

<Callout type="warning" title="Erreur fréquente">
  <p>Ne confonds pas API et base de données — l'API est juste le messager !</p>
</Callout>
```

---

## 3. Badges de difficulté

### Classes CSS disponibles

```css
.difficulty-badge       /* Badge de base */
.difficulty-beginner    /* Vert - Débutant */
.difficulty-intermediate /* Jaune - Intermédiaire */
.difficulty-advanced    /* Rouge - Avancé */
.chapter-duration       /* Badge temps estimé */
```

### Utilisation dans le Guide

**À implémenter dans** [`lib/chapters.ts`](lib/chapters.ts) :

```typescript
export const chapters = [
  {
    id: 1,
    slug: 'introduction',
    title: 'Introduction au développement',
    description: 'Les bases du code expliquées simplement.',
    difficulty: 'beginner', // NOUVEAU
    duration: '8 min',       // NOUVEAU
  },
  // ...
];
```

**Puis dans** [`app/guide/page.tsx`](app/guide/page.tsx) :

```tsx
<Link href={`/guide/${chapter.slug}`} className="guide-chapter-card">
  <div className="guide-chapter-number">{chapter.id}</div>

  <div className="guide-chapter-content">
    <h3>{chapter.title}</h3>
    <p>{chapter.description}</p>

    {/* NOUVEAU : Meta badges */}
    <div className="guide-chapter-meta">
      <span className={`difficulty-badge difficulty-${chapter.difficulty}`}>
        {chapter.difficulty === 'beginner' && '🟢 Débutant'}
        {chapter.difficulty === 'intermediate' && '🟡 Intermédiaire'}
        {chapter.difficulty === 'advanced' && '🔴 Avancé'}
      </span>

      <span className="chapter-duration">⏱ {chapter.duration}</span>
    </div>
  </div>

  <div className="guide-chapter-arrow">→</div>
</Link>
```

### Résultat attendu

```
┌───────────────────────────────────────┐
│  1   Introduction au développement    │
│                                       │
│      Les bases du code...             │
│                                       │
│      🟢 Débutant    ⏱ 8 min           │
└───────────────────────────────────────┘
```

---

## 4. Hero avec grid pattern

### Déjà activé sur la homepage

Le grid pattern est automatiquement visible sur [`app/page.tsx`](app/page.tsx).

### Ajouter le pattern sur une autre page

```tsx
<section className="hero">
  {/* Ajout du grid pattern */}
  <div className="hero-grid-pattern" />

  {/* Container avec z-index pour passer devant le pattern */}
  <div className="container" style={{ position: 'relative', zIndex: 1 }}>
    <h1>Votre titre</h1>
    <p>Votre contenu...</p>
  </div>
</section>
```

**Important :** Le parent `.hero` doit avoir `position: relative` (déjà le cas dans le CSS).

---

## 5. Visualisations premium

### Styles disponibles

Les visualisations utilisent automatiquement les nouveaux styles.

### État "Coming soon" élégant

Pour une visualisation en cours de création :

```tsx
<div className="viz-card-coming-soon">
  <div className="viz-coming-soon-badge">
    <span>🚧 En cours</span>
    <span className="viz-eta">Sortie : Février 2025</span>
  </div>

  <p>En attendant, lis l'article associé :</p>
  <Link href="/blog/cest-quoi-une-api" className="btn-link">
    C'est quoi une API ? →
  </Link>
</div>
```

### Card de visualisation prête

```tsx
<Link href="/visualisations/comment-fonctionne-le-web" className="viz-card">
  {/* Preview area */}
  <div className="viz-preview" style={{
    background: 'linear-gradient(135deg, #ea580c 0%, #f97316 100%)'
  }}>
    <span style={{ fontSize: '3rem' }}>🌐</span>
    <span style={{ fontSize: '1.5rem', opacity: 0.5 }}>→</span>
    <span style={{ fontSize: '3rem' }}>🗄️</span>
  </div>

  {/* Content */}
  <div style={{ padding: 'var(--space-6)' }}>
    <h3>Comment fonctionne le web</h3>
    <p>Visualise le cycle requête/réponse...</p>

    <button className="btn btn-primary" style={{ marginTop: 'var(--space-4)' }}>
      Lancer la visualisation →
    </button>
  </div>
</Link>
```

---

## 6. Classes utilitaires

### Badges

```tsx
{/* Badge accent (orange) */}
<span className="badge badge-accent">
  🎓 100% gratuit
</span>

{/* Badge personnalisé */}
<span className="badge" style={{ background: '#f0f9ff', color: '#0369a1' }}>
  ℹ️ Info
</span>
```

### Liens "Lire ensuite"

```tsx
<a href="/blog/article-suivant" className="btn-link">
  Lire l'article suivant →
</a>
```

### État de chargement

```tsx
<div className="loading">
  {/* Contenu désactivé visuellement */}
  <p>Chargement en cours...</p>
</div>
```

---

## 🎨 Variables CSS utiles

### Couleurs

```css
var(--color-accent)         /* Orange principal */
var(--color-accent-vibrant) /* Orange plus vif */
var(--color-primary)        /* Noir/gris foncé pour CTA */
```

### Gradients

```css
var(--color-gradient-primary)  /* Gradient orange */
var(--color-gradient-subtle)   /* Gradient subtil clair */
var(--color-gradient-hero)     /* Radial pour hero */
```

### Ombres

```css
var(--shadow-card-v2)        /* Ombre card standard */
var(--shadow-card-v2-hover)  /* Ombre card au hover */
var(--shadow-card-premium)   /* Ombre premium avec accent */
```

### Espacements

```css
var(--space-1)  /*  4px */
var(--space-2)  /*  8px */
var(--space-3)  /* 12px */
var(--space-4)  /* 16px */
var(--space-6)  /* 24px */
var(--space-8)  /* 32px */
var(--space-10) /* 40px */
var(--space-12) /* 48px */
var(--space-16) /* 64px */
```

### Border radius

```css
var(--radius-sm)   /*  6px */
var(--radius-md)   /*  8px */
var(--radius-lg)   /* 12px */
var(--radius-xl)   /* 16px */
var(--radius-2xl)  /* 20px */
var(--radius-full) /* 9999px (pill) */
```

---

## 📝 Checklist pour un nouvel article

Utilise cette checklist pour enrichir un article avec la V2 :

- [ ] **Callouts variés**
  - [ ] Au moins 1 `example`
  - [ ] Au moins 1 `key-point`
  - [ ] 1 `summary` en fin d'article (optionnel)

- [ ] **Hiérarchie claire**
  - [ ] H1 unique
  - [ ] H2 pour sections principales
  - [ ] H3 pour sous-sections

- [ ] **NextSteps en fin d'article**
  - [ ] Le composant est automatiquement ajouté

- [ ] **Meta données**
  - [ ] Catégorie correcte (pour gradient adapté)
  - [ ] Date de publication
  - [ ] Excerpt accrocheur

---

## 🎯 Exemples complets

### Article type avec V2

```tsx
import Callout from '@/components/Callout';

export const metadata = {
  title: "C'est quoi une variable ?",
  category: "Bases",
  date: "2024-12-26",
  excerpt: "Comprends ce qu'est une variable en programmation avec des exemples simples.",
};

# C'est quoi une variable ?

Une variable, c'est comme une boîte qui stocke une information...

<Callout type="example" title="Analogie : La boîte">
  <p>
    Imagine une boîte avec une étiquette "age".
    Dedans, tu peux mettre le chiffre 25.
  </p>
</Callout>

## Comment créer une variable ?

En JavaScript, tu écris :

```js
let age = 25;
```

<Callout type="key-point">
  <p>
    Une variable a 3 éléments : un nom (age), un symbole (=), et une valeur (25).
  </p>
</Callout>

<Callout type="warning" title="Erreur fréquente">
  <p>N'oublie pas le point-virgule à la fin !</p>
</Callout>

<Callout type="summary">
  <p>En résumé :</p>
  <ul>
    <li>Une variable stocke une information</li>
    <li>Elle a un nom et une valeur</li>
    <li>On peut la modifier à tout moment</li>
  </ul>
</Callout>
```

---

## 🆘 Besoin d'aide ?

### Fichiers de référence

- 📘 [`REFONTE_V2_GUIDE.md`](REFONTE_V2_GUIDE.md) — Documentation complète
- 📝 [`CHANGELOG_V2.md`](CHANGELOG_V2.md) — Liste des changements
- 🎨 [`lib/categoryColors.ts`](lib/categoryColors.ts) — Couleurs par catégorie
- 🧩 [`components/Callout.tsx`](components/Callout.tsx) — Composant Callout
- 💅 [`styles/globals.css`](styles/globals.css) — Design system complet

### Questions fréquentes

**Q : Comment changer la couleur d'une catégorie ?**
→ Édite [`lib/categoryColors.ts`](lib/categoryColors.ts)

**Q : Comment ajouter un nouveau type de callout ?**
→ Ajoute le type dans [`components/Callout.tsx`](components/Callout.tsx) et son style dans [`styles/globals.css`](styles/globals.css)

**Q : Les anciennes cards fonctionnent encore ?**
→ Oui, la V2 est 100% rétrocompatible

**Q : Comment désactiver les animations ?**
→ Le CSS respecte automatiquement `prefers-reduced-motion`

---

**Bonne utilisation de la V2 ! 🚀**

*Dernière mise à jour : 26 décembre 2024*
