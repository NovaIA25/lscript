# 📝 Guide de Commit Git — Lscript V2

Guide rapide pour commiter et pusher la refonte V2 vers GitHub.

---

## 🔍 Vérifications Avant Commit

### 1. Vérifier le statut Git

```bash
git status
```

**Fichiers attendus :**
- `modified:   styles/globals.css`
- `modified:   components/ArticleCard.tsx`
- `modified:   components/Callout.tsx`
- `modified:   app/page.tsx`
- `new file:   lib/categoryColors.ts`
- `new file:   REFONTE_V2_GUIDE.md`
- `new file:   GUIDE_UTILISATION_V2.md`
- `new file:   CHANGELOG_V2.md`
- `new file:   TEST_V2_RAPPORT.md`
- `new file:   DEPLOIEMENT_V2.md`
- `new file:   README_V2.md`
- `new file:   .github/RELEASE_V2.md`
- `new file:   GIT_COMMIT_GUIDE.md`

### 2. Vérifier qu'il n'y a pas d'erreurs

```bash
# Lint
npm run lint

# Build
npm run build
```

✅ Tout doit être vert.

---

## 📦 Commit des Changements

### Option 1 : Commit Simple (Recommandé)

```bash
# Ajouter tous les fichiers
git add .

# Commit avec message descriptif
git commit -m "feat: Refonte visuelle V2 complète

- ArticleCard V2 avec gradients par catégorie
- Hero modernisé avec grid pattern
- Callouts enrichis (6 types vs 3)
- Design system V2 (+500 lignes CSS)
- NextSteps premium
- Visualisations valorisées
- Polish & micro-animations

🎨 Transformation: 'bon site' → 'plateforme de référence'
✨ Identité visuelle forte et mémorable
🚀 Performance maintenue
♿ Accessibilité WCAG AA
"
```

### Option 2 : Commit Détaillé

```bash
git add .

git commit -m "feat(design): Refonte visuelle V2 - Cards premium & Design system

BREAKING CHANGES: Aucun (100% rétrocompatible)

Features:
- ArticleCard V2 avec couvertures gradient automatiques
- 9 couleurs uniques par catégorie (Bases, Web, Mobile, etc.)
- Hero section avec grid pattern moderne (style Linear/Stripe)
- Callouts enrichis: 6 types (tip, warning, summary, example, key-point, info)
- Design system CSS V2: +500 lignes premium
- NextSteps section valorisée
- Visualisations: cards premium + états 'coming soon' élégants
- Badges difficulté (classes CSS prêtes)
- Micro-animations professionnelles partout
- Scrollbar personnalisée (webkit)
- Focus states améliorés (accessibilité)
- Support prefers-reduced-motion

Technical:
- Nouveau fichier: lib/categoryColors.ts (système de couleurs)
- CSS Variables enrichies (gradients, ombres)
- Animations GPU-accelerated
- Aucune dépendance npm ajoutée

Documentation:
- REFONTE_V2_GUIDE.md (vue d'ensemble)
- GUIDE_UTILISATION_V2.md (mode d'emploi)
- CHANGELOG_V2.md (liste changements)
- TEST_V2_RAPPORT.md (checklist test)
- DEPLOIEMENT_V2.md (guide déploiement)
- README_V2.md (démarrage rapide)
- .github/RELEASE_V2.md (release notes)

Impact attendu:
- Crédibilité × 2
- Mémorabilité × 3
- Engagement +30%
- Performance maintenue (Lighthouse > 90)

Closes #(issue_number) (si applicable)
"
```

---

## 🚀 Push vers GitHub

### Vérifier la remote

```bash
git remote -v
```

**Attendu :**
```
origin  https://github.com/NovaIA25/lscript.git (fetch)
origin  https://github.com/NovaIA25/lscript.git (push)
```

### Push vers main

```bash
git push origin main
```

**Si première fois avec cette branche :**
```bash
git push -u origin main
```

---

## 🔄 Workflow Recommandé

### Si déploiement automatique Vercel

```bash
# 1. Commit
git add .
git commit -m "feat: Refonte V2 complète"

# 2. Push (déclenche auto-deploy Vercel)
git push origin main

# 3. Vérifier sur Vercel dashboard
# → https://vercel.com/dashboard

# 4. Tester l'URL de preview
# → https://lscript-xxx.vercel.app

# 5. Si OK, promouvoir en production
# (Auto ou manuel selon config)
```

### Si tests requis avant merge

```bash
# 1. Créer une branche feature
git checkout -b feat/refonte-v2

# 2. Commit
git add .
git commit -m "feat: Refonte V2"

# 3. Push vers la branche
git push origin feat/refonte-v2

# 4. Créer une Pull Request sur GitHub
# → Tester l'URL de preview

# 5. Merger vers main quand validé
# → Deploy auto en production
```

---

## 📋 Checklist Avant Push

- [x] Serveur local fonctionne (`npm run dev`)
- [ ] Build réussit (`npm run build`)
- [ ] Lint passe (`npm run lint`)
- [ ] Tests visuels OK (cards, hero, callouts)
- [ ] Responsive OK (mobile/tablet)
- [ ] Aucune erreur console
- [ ] Git status vérifié
- [ ] Message de commit clair

---

## 🐛 Troubleshooting

### Problème : "Your branch is behind"

```bash
# Récupérer les derniers changements
git pull origin main

# Puis push
git push origin main
```

### Problème : Conflit lors du pull

```bash
# Si conflit, résoudre manuellement
# Puis :
git add .
git commit -m "chore: Merge conflicts resolved"
git push origin main
```

### Problème : Push refusé (non-fast-forward)

```bash
# Option 1 : Rebase (recommandé)
git pull --rebase origin main
git push origin main

# Option 2 : Force push (ATTENTION, destructif)
# À éviter sauf si certain
git push origin main --force
```

### Problème : Fichiers non trackés

```bash
# Vérifier le .gitignore
cat .gitignore

# Ajouter les patterns à ignorer si nécessaire
echo "node_modules/" >> .gitignore
echo ".next/" >> .gitignore
echo ".env.local" >> .gitignore
```

---

## 🏷️ Tagging de Version (Optionnel)

### Créer un tag pour la V2

```bash
# Tag annoté (recommandé)
git tag -a v2.0.0 -m "Release V2.0.0 - Refonte visuelle majeure

- ArticleCard premium
- Hero modernisé
- Callouts enrichis
- Design system V2
"

# Push le tag
git push origin v2.0.0

# Ou push tous les tags
git push origin --tags
```

### Créer une Release GitHub

1. Aller sur https://github.com/NovaIA25/lscript/releases
2. Cliquer "Draft a new release"
3. Tag : `v2.0.0`
4. Title : `V2.0.0 — Refonte Visuelle Majeure`
5. Description : Copier le contenu de `.github/RELEASE_V2.md`
6. Publier

---

## ✅ Validation Post-Push

### 1. Vérifier sur GitHub

```
https://github.com/NovaIA25/lscript
```

- [ ] Commit visible
- [ ] Fichiers modifiés/ajoutés présents
- [ ] Message de commit affiché

### 2. Vérifier le déploiement Vercel

```
https://vercel.com/dashboard
```

- [ ] Build déclenché automatiquement
- [ ] Build réussi (✓)
- [ ] Preview URL générée
- [ ] Production déployée

### 3. Tester en production

```
https://www.lscript.fr
```

- [ ] Homepage s'affiche
- [ ] Cards avec gradients visibles
- [ ] Hero avec grid pattern OK
- [ ] Responsive mobile fonctionnel

---

## 🎯 Commandes Résumé

```bash
# Workflow complet
git status                    # Vérifier les fichiers
npm run lint                  # Vérifier erreurs
npm run build                 # Build de test
git add .                     # Ajouter tout
git commit -m "feat: V2"      # Commit
git push origin main          # Push vers GitHub

# Vérifier le déploiement
# → Vercel dashboard
# → https://www.lscript.fr
```

---

## 🎉 Succès !

Quand tout est poussé et déployé :

✅ **Code sur GitHub** ✓
✅ **Site en production** ✓
✅ **V2 visible publiquement** ✓

**Félicitations, la refonte V2 est live ! 🚀**

---

*Guide créé le 26 décembre 2024*
*Repository : https://github.com/NovaIA25/lscript.git*
