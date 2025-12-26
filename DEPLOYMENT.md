# 🚀 Guide de déploiement Lscript.fr

## Variables d'environnement requises

### Vercel Dashboard

Configure ces variables dans les settings de ton projet Vercel :

#### 1. **RESEND_API_KEY** (REQUIS pour newsletter)
```
RESEND_API_KEY=re_xxxxxxxxxxxxx
```

**Où l'obtenir :**
1. Crée un compte sur [Resend.com](https://resend.com)
2. Va dans API Keys
3. Crée une nouvelle clé
4. Configure le domaine `lscript.fr` dans Resend → Domains
5. Vérifie le domaine avec les DNS records fournis

**⚠️ IMPORTANT :** Sans cette clé, la newsletter fonctionne en "mode dev" (succès factice).

---

## Configuration domaine

### Vercel Domains

1. Ajoute les deux domaines dans Vercel :
   - `www.lscript.fr` (PRIMARY)
   - `lscript.fr` (redirect vers www)

2. Le fichier `vercel.json` redirige automatiquement `lscript.fr` → `www.lscript.fr` (301)

### DNS Records

Configure ces enregistrements DNS chez ton registrar :

```
# Pour www.lscript.fr
Type: CNAME
Name: www
Value: cname.vercel-dns.com

# Pour lscript.fr (root)
Type: A
Name: @
Value: 76.76.21.21

# Resend email (si tu utilises newsletter@lscript.fr)
Type: TXT
Name: _resend
Value: [fourni par Resend dashboard]
```

---

## Checklist avant déploiement

### ✅ Variables d'environnement
- [ ] RESEND_API_KEY configurée dans Vercel
- [ ] Domaine vérifié dans Resend

### ✅ Assets optimisés
- [x] og-image.jpg optimisé (65 KB)
- [x] Logos optimisés (logo48.png: 637 bytes, lscript32.png: 368 bytes)

### ✅ SEO
- [x] Sitemap configuré (`/sitemap.xml`)
- [x] robots.txt présent
- [x] Meta descriptions sur toutes les pages
- [x] Structured data (ArticleSchema, BreadcrumbSchema)

### ✅ Analytics
- [x] Google Tag Manager (GTM-PQQRJZPF)
- [x] Google AdSense (ca-pub-6312231252684715)
- [x] Vercel Analytics
- [x] Cookie consent

### ✅ Domaine standardisé
- [x] Toutes les URLs utilisent `https://www.lscript.fr`
- [x] Redirect 301 de `lscript.fr` → `www.lscript.fr`

---

## Commandes de déploiement

### Build local (test)
```bash
npm run build
npm run start
```

### Déploiement Vercel
```bash
# Preview deployment
vercel

# Production deployment
vercel --prod
```

---

## Après déploiement

### Tests à effectuer

1. **Newsletter**
   ```
   - Teste inscription depuis /
   - Vérifie réception email
   - Vérifie que l'email vient de newsletter@lscript.fr
   ```

2. **Contact**
   ```
   - Teste formulaire /contact
   - Vérifie réception via Formspree
   ```

3. **Domaine**
   ```
   - Visite http://lscript.fr → doit rediriger vers https://www.lscript.fr
   - Vérifie SSL actif
   ```

4. **OG Images**
   ```
   - Teste avec https://www.opengraph.xyz/?url=https://www.lscript.fr
   - Vérifie que og-image.jpg s'affiche (65 KB)
   ```

5. **SEO**
   ```
   - Teste sitemap : https://www.lscript.fr/sitemap.xml
   - Teste robots.txt : https://www.lscript.fr/robots.txt
   - Google Search Console : soumets le sitemap
   ```

---

## Support

**Email :** contact@lscript.fr
**Projet Vercel :** prj_9WBT1mLdKOnhhmG9NtJB3CfMfCKP

---

## Notes importantes

### Resend configuration
- Domaine : `lscript.fr`
- Email from : `newsletter@lscript.fr`
- Vérifie les DNS records DKIM/SPF pour éviter le spam

### Performance
- Images optimisées avec Sharp
- Next.js 14 avec App Router
- Compression activée
- Cache headers : 1 an pour assets statiques

### Sécurité
- HTTPS forcé
- Cookie consent RGPD compliant
- Headers de sécurité via Vercel
- Pas de secrets dans le code

