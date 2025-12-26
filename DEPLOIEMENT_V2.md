# 🚀 Guide de Déploiement — Lscript V2

## Déploiement rapide de la refonte visuelle V2

---

## ✅ Prérequis

Avant de déployer, assure-toi que :

- [x] Le serveur local fonctionne (`npm run dev`)
- [ ] Tu as testé les pages principales (/, /blog, /guide)
- [ ] Aucune erreur dans la console du navigateur
- [ ] Le site est responsive (testé mobile/tablet/desktop)
- [ ] Les gradients des cards sont visibles

---

## 📦 Étape 1 : Build de Production

### Test du build en local

```bash
# Build du projet
npm run build

# Si succès, lancer en mode production
npm start

# Tester sur http://localhost:3000
```

### Vérifier qu'il n'y a pas d'erreurs

✅ **Succès** = Message `✓ Compiled successfully`
❌ **Erreur** = Lire les logs et corriger

---

## 🔍 Étape 2 : Vérifications Finales

### Checklist avant commit

- [ ] **Pas d'erreur TypeScript**
  ```bash
  npm run lint
  ```

- [ ] **Toutes les images/assets présents**
  - Vérifier que `/public` contient tout

- [ ] **Variables d'environnement OK**
  - `.env.local` configuré si nécessaire
  - Secrets Vercel à jour

- [ ] **Lighthouse score > 85**
  - Performance
  - Accessibility
  - Best Practices
  - SEO

---

## 💾 Étape 3 : Commit & Push

### Commit des changements

```bash
# Statut des fichiers modifiés
git status

# Ajouter tous les changements V2
git add .

# Commit avec message descriptif
git commit -m "feat: Refonte visuelle V2 complète

- ArticleCard V2 avec gradients par catégorie
- Hero modernisé avec grid pattern
- Callouts enrichis (6 types vs 3)
- NextSteps premium
- Visualisations valorisées
- Polish & micro-animations
- Design system V2 enrichi

🎨 Transformation : 'bon site sérieux' → 'plateforme de référence'
✨ +500 lignes CSS premium
🚀 Performance maintenue
♿ Accessibilité respectée"
```

### Push vers GitHub

```bash
# Push vers main (ou ta branche)
git push origin main
```

---

## 🌐 Étape 4 : Déploiement Vercel

### Déploiement automatique

Si ton projet est lié à Vercel :

1. **Push vers GitHub** → Déploiement auto déclenché
2. **Attendre 2-3 min** → Build sur Vercel
3. **Vérifier le dashboard Vercel** → Statut du déploiement

### URLs générées

- **Production** : https://lscript.fr (ou ton domaine)
- **Preview** : https://lscript-xxx.vercel.app

### Vérifier le déploiement

```bash
# Ouvrir le dashboard Vercel
vercel --prod

# Ou manuellement sur https://vercel.com/dashboard
```

---

## 🧪 Étape 5 : Tests en Production

### Tests post-déploiement

1. **Ouvrir le site en production**
   - https://lscript.fr

2. **Vérifier les pages clés**
   - [ ] Homepage (/)
   - [ ] Blog (/blog)
   - [ ] Guide (/guide)
   - [ ] Article exemple (/blog/cest-quoi-programmer)
   - [ ] Visualisations (/visualisations)

3. **Tester sur mobile**
   - Chrome DevTools → Mode responsive
   - Ou sur smartphone réel

4. **Vérifier Core Web Vitals**
   - Lighthouse en production
   - PageSpeed Insights : https://pagespeed.web.dev/
   - Vercel Analytics (si activé)

---

## 🐛 Rollback en Cas de Problème

### Si erreur critique en production

```bash
# Revenir au commit précédent
git revert HEAD

# Ou rollback complet
git reset --hard HEAD~1

# Push force (ATTENTION)
git push origin main --force
```

### Sur Vercel Dashboard

1. Aller sur **Deployments**
2. Trouver le déploiement précédent (avant V2)
3. Cliquer sur **"Promote to Production"**

---

## 📊 Monitoring Post-Déploiement

### Métriques à surveiller (7 jours)

1. **Performance**
   - Lighthouse score maintenu ?
   - Core Web Vitals stables ?
   - Temps de chargement < 2s ?

2. **Engagement**
   - Taux de rebond diminué ?
   - Temps sur page augmenté ?
   - Pages vues par session +20% ?

3. **SEO**
   - Positions Google maintenues ?
   - Crawl errors (Google Search Console)
   - Indexation correcte

4. **Erreurs**
   - Console errors (Sentry/Vercel)
   - 404 pages
   - Broken links

---

## 🔧 Troubleshooting

### Problème : Build échoue

**Erreur TypeScript**
```bash
# Vérifier les types
npm run lint

# Corriger les erreurs dans lib/categoryColors.ts ou components/
```

**Erreur de dépendance**
```bash
# Réinstaller node_modules
rm -rf node_modules
npm install
```

### Problème : Gradients ne s'affichent pas

**Cause possible** : Cache CSS

**Solution** :
1. Vider cache navigateur (Ctrl+Shift+R)
2. Vérifier que `lib/categoryColors.ts` est bien importé
3. Check console pour erreurs d'import

### Problème : Grid pattern invisible

**Cause possible** : Browser compatibility

**Solution** :
1. Tester sur Chrome (support garanti)
2. Vérifier `mask-image` CSS (webkit prefix)
3. Fallback : Pattern reste subtil donc non bloquant

### Problème : Performance dégradée

**Cause possible** : Trop d'animations

**Solution** :
1. Vérifier Lighthouse
2. Si score < 85, réduire animations
3. Check bundle size (`npm run build` → size report)

---

## 🎯 Checklist Finale de Déploiement

### Avant de déployer

- [x] Build réussit en local (`npm run build`)
- [ ] Tests visuels OK (cards, hero, callouts)
- [ ] Tests responsive OK (mobile/tablet/desktop)
- [ ] Lighthouse score > 85
- [ ] Aucune erreur console
- [ ] Git status clean (tous fichiers commités)

### Déploiement

- [ ] Commit avec message descriptif
- [ ] Push vers GitHub
- [ ] Déploiement Vercel déclenché
- [ ] Build Vercel réussi (vérifier dashboard)
- [ ] Preview URL testée
- [ ] Production déployée

### Post-déploiement

- [ ] Site production accessible (https://lscript.fr)
- [ ] Homepage s'affiche correctement
- [ ] Cards avec gradients visibles
- [ ] Mobile responsive OK
- [ ] Core Web Vitals verts (Google Search Console)
- [ ] SEO préservé (pas de régression)
- [ ] Analytics activés (Vercel + Google)

---

## 🚀 Commandes Rapides

```bash
# Build & test local
npm run build && npm start

# Lint
npm run lint

# Deploy (si Vercel CLI installé)
vercel --prod

# Statut Git
git status

# Commit rapide
git add . && git commit -m "feat: V2 refonte visuelle"

# Push
git push origin main
```

---

## 📞 Support

### En cas de problème

1. **Vérifier les logs Vercel**
   - Dashboard → Deployments → Logs

2. **Consulter la documentation**
   - [REFONTE_V2_GUIDE.md](REFONTE_V2_GUIDE.md)
   - [TEST_V2_RAPPORT.md](TEST_V2_RAPPORT.md)

3. **Rollback si critique**
   - Vercel Dashboard → Promote deployment précédent

---

## ✅ Validation Finale

**Quand tout est vert :**

🎉 **Lscript V2 est en production !**

- Site transformé visuellement ✨
- Performance maintenue 🚀
- Accessibilité respectée ♿
- SEO préservé 📈

**Prochaine étape :**
- Monitorer les métriques 7 jours
- Recueillir feedback utilisateurs
- Planifier V2.1 si nécessaire

---

*Guide créé le 26 décembre 2024*
*Déploiement simplifié pour Vercel*
