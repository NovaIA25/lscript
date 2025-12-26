---
title: "C'est quoi Git et GitHub ? Quelle différence ?"
date: "2025-01-22"
category: "Outils"
excerpt: "Découvre la différence entre Git et GitHub avec des explications simples. Comprends le versioning, la collaboration et comment utiliser ces outils essentiels pour tout développeur."
readingTime: "7 min"
keywords: ["git github différence", "c'est quoi git", "github débutant", "git pour les nuls"]
---

# C'est quoi Git et GitHub ? Quelle différence ?

Si tu débutes en programmation, tu as sûrement entendu parler de **Git** et **GitHub** sans vraiment comprendre la différence. Je vais t'expliquer ces deux outils essentiels avec des analogies simples et des exemples concrets.

## La différence en une phrase

**Git** = Logiciel de versioning (sur TON ordinateur)
**GitHub** = Plateforme en ligne pour héberger et partager du code versionné avec Git

**Analogie simple :**
- **Git** = Microsoft Word (l'application sur ton PC)
- **GitHub** = Google Drive (le cloud pour sauvegarder et partager)

Tu peux utiliser Git **sans** GitHub, mais GitHub **nécessite** Git.

## C'est quoi Git exactement ?

### Définition simple

**Git est un système de contrôle de version** (version control system) créé en 2005 par Linus Torvalds (le créateur de Linux).

**En clair :** Git enregistre l'historique de toutes les modifications de tes fichiers, comme un **système de sauvegarde ultra-intelligent**.

### Le problème que Git résout

**Sans Git, tu fais probablement ça :**

```
mon-projet/
├── index.html
├── index-v2.html
├── index-v2-final.html
├── index-v2-final-VRAIMENT-FINAL.html
├── index-v2-final-FINAL-v3.html
└── index-old-backup-20250115.html
```

**Problèmes :**
- ❌ Impossible de savoir quelle version est la bonne
- ❌ Aucune idée de ce qui a changé entre les versions
- ❌ Impossible de revenir à une version précise
- ❌ Collaboration cauchemardesque (qui a modifié quoi ?)

**Avec Git :**

```
mon-projet/
├── index.html
└── .git/ (historique complet invisible)
```

**Un seul fichier, mais Git conserve TOUT l'historique :**
- ✅ Toutes les versions précédentes
- ✅ Qui a fait quelle modification et quand
- ✅ Commentaire expliquant chaque changement
- ✅ Possibilité de revenir en arrière à tout moment

### L'analogie du voyage dans le temps

Imagine que Git est une **machine à remonter le temps** pour ton code :

1. **Lundi** : Tu crées un fichier → Git enregistre (commit)
2. **Mardi** : Tu ajoutes une fonctionnalité → Git enregistre
3. **Mercredi** : Tu casses tout en testant → Pas de panique !
4. **Git te ramène à Mardi** en 2 secondes

Tu peux **naviguer dans l'historique** comme si tu feuilletais un livre.

## Les concepts clés de Git

### 1. Le repository (dépôt)

**Repository (ou "repo")** = Dossier qui contient ton projet + l'historique Git.

**Créer un repository :**

```bash
cd mon-projet
git init
```

→ Crée un dossier caché `.git/` qui stocke tout l'historique.

### 2. Le commit (validation)

**Commit** = Une sauvegarde de l'état de ton projet à un instant T.

**Analogie :** C'est comme une **photo** de ton projet. Tu peux revenir à cette photo n'importe quand.

**Faire un commit :**

```bash
# 1. Ajouter les fichiers modifiés
git add index.html style.css

# 2. Créer le commit avec un message
git commit -m "Ajouter le header du site"
```

**Bonnes pratiques pour les messages de commit :**
- ✅ "Ajouter le formulaire de contact"
- ✅ "Corriger le bug du menu mobile"
- ❌ "changements" (trop vague)
- ❌ "test" (inutile)

### 3. Les branches

**Branch (branche)** = Version parallèle de ton projet.

**Analogie :** Imagine un arbre :
- **Tronc** (main/master) = Version stable et fonctionnelle
- **Branches** = Expérimentations sans risque

**Exemple concret :**

```bash
# Créer une branche pour une nouvelle fonctionnalité
git branch nouvelle-fonctionnalite

# Se déplacer sur cette branche
git checkout nouvelle-fonctionnalite

# Ou les 2 en une commande
git checkout -b nouvelle-fonctionnalite
```

**Utilité :**
- Tu testes des idées sans casser la version principale
- Plusieurs développeurs travaillent sur des fonctionnalités différentes en parallèle
- Tu peux abandonner une branche si l'expérience échoue

### 4. Le merge (fusion)

**Merge** = Fusionner deux branches.

**Scénario typique :**

1. Tu travailles sur la branche `nouvelle-fonctionnalite`
2. La fonctionnalité est prête et testée
3. Tu la fusionne dans `main` (version principale)

```bash
# Retourner sur la branche principale
git checkout main

# Fusionner la nouvelle fonctionnalité
git merge nouvelle-fonctionnalite
```

→ Les modifications de `nouvelle-fonctionnalite` sont maintenant dans `main`.

## C'est quoi GitHub exactement ?

### Définition simple

**GitHub est une plateforme web** qui héberge des repositories Git dans le cloud.

C'est comme :
- **Dropbox** pour tes fichiers
- **Google Drive** pour tes documents
- **GitHub** pour ton code

### Ce que GitHub ajoute à Git

Git seul = local (sur ton ordinateur uniquement)
Git + GitHub = cloud + collaboration + partage

**GitHub permet de :**

1. **Sauvegarder ton code en ligne** (si ton PC crash, rien n'est perdu)
2. **Collaborer avec d'autres** (plusieurs devs sur le même projet)
3. **Partager ton code** (portfolio public pour les recruteurs)
4. **Contribuer à l'open source** (Linux, React, VS Code sont sur GitHub)
5. **Héberger des sites gratuitement** (GitHub Pages)
6. **Gérer des issues** (bugs, tâches à faire)
7. **Code review** (relecture du code avant fusion)

### GitHub en chiffres (2025)

- 👥 **100+ millions** d'utilisateurs
- 📦 **420+ millions** de repositories
- 🏢 Utilisé par 90% des entreprises tech
- 💰 Racheté par Microsoft en 2018 (7,5 milliards $)

### Alternatives à GitHub

| Plateforme | Points forts | Utilisation |
|------------|--------------|-------------|
| **GitHub** | Le plus populaire, gratuit, communauté | Projets perso, open source |
| **GitLab** | CI/CD intégré, auto-hébergement possible | Entreprises, DevOps |
| **Bitbucket** | Intégration Atlassian (Jira, Trello) | Teams déjà sur Atlassian |

**Bon à savoir :** Toutes ces plateformes utilisent **Git**. Le choix n'affecte que l'interface web.

## Workflow Git + GitHub en pratique

### Scénario 1 : Créer un nouveau projet

**Sur ton ordinateur :**

```bash
# 1. Créer un dossier
mkdir mon-site
cd mon-site

# 2. Initialiser Git
git init

# 3. Créer des fichiers
echo "<h1>Mon site</h1>" > index.html

# 4. Ajouter et commiter
git add index.html
git commit -m "Premier commit : ajout index.html"
```

**Sur GitHub :**

1. Va sur [github.com](https://github.com)
2. Clique sur **New repository**
3. Nom : "mon-site"
4. Public ou Private
5. **Ne coche rien d'autre** (pas de README, .gitignore, etc.)
6. Crée le repository

**Lier ton repo local à GitHub :**

```bash
# Ajouter l'URL du repo GitHub
git remote add origin https://github.com/ton-nom/mon-site.git

# Envoyer ton code sur GitHub
git push -u origin main
```

**🎉 Ton code est maintenant sur GitHub !**

### Scénario 2 : Cloner un projet existant

Tu veux télécharger un projet depuis GitHub :

```bash
# Cloner le repository
git clone https://github.com/utilisateur/projet.git

# Entrer dans le dossier
cd projet

# Tu as tout l'historique et le code !
```

**Exemple concret :**

```bash
# Cloner React (framework JavaScript)
git clone https://github.com/facebook/react.git
```

### Scénario 3 : Workflow quotidien

**Chaque jour en tant que développeur :**

```bash
# 1. Récupérer les dernières modifications (si équipe)
git pull

# 2. Créer une branche pour ta tâche
git checkout -b ajout-formulaire-contact

# 3. Coder, coder, coder...
# (tu modifies des fichiers)

# 4. Voir ce qui a changé
git status

# 5. Ajouter les fichiers modifiés
git add .

# 6. Commiter avec un message clair
git commit -m "Ajouter formulaire de contact avec validation"

# 7. Envoyer sur GitHub
git push origin ajout-formulaire-contact
```

**Sur GitHub :**

8. Créer une **Pull Request** (demande de fusion)
9. Tes collègues relisent ton code
10. Après validation, fusion dans `main`

## Commandes Git essentielles

### Les 10 commandes à connaître absolument

```bash
# 1. Initialiser un repository
git init

# 2. Cloner un repository distant
git clone https://github.com/user/repo.git

# 3. Voir l'état des fichiers
git status

# 4. Ajouter des fichiers au prochain commit
git add fichier.html
git add .  # Ajouter tous les fichiers modifiés

# 5. Créer un commit
git commit -m "Message descriptif"

# 6. Voir l'historique des commits
git log
git log --oneline  # Version condensée

# 7. Créer une branche
git branch nom-branche

# 8. Changer de branche
git checkout nom-branche
git checkout -b nouvelle-branche  # Créer + changer

# 9. Fusionner une branche
git merge nom-branche

# 10. Envoyer vers GitHub
git push origin main
```

### Commandes intermédiaires utiles

```bash
# Récupérer les dernières modifications de GitHub
git pull

# Voir les différences non commitées
git diff

# Annuler les modifications d'un fichier
git checkout -- fichier.html

# Revenir au commit précédent (ATTENTION: perte de données!)
git reset --hard HEAD~1

# Voir les branches
git branch

# Supprimer une branche
git branch -d nom-branche

# Mettre de côté des modifications temporairement
git stash
git stash pop  # Récupérer les modifs
```

## Les fonctionnalités avancées de GitHub

### 1. Pull Request (PR)

**C'est quoi ?** Une demande pour fusionner ta branche dans `main`.

**Workflow :**
1. Tu codes sur ta branche
2. Tu push sur GitHub
3. Tu crées une Pull Request
4. Tes collègues commentent, suggèrent des modifs
5. Après validation, fusion dans `main`

**Avantage :** Code review avant intégration = moins de bugs.

### 2. Issues (tickets)

**C'est quoi ?** Système de suivi de bugs et tâches.

**Exemple d'issue :**
```
Titre : Bug - Menu ne s'affiche pas sur mobile
Description :
- Navigateur : Safari iOS
- Étapes : Ouvrir le site sur iPhone, cliquer sur hamburger
- Résultat attendu : Menu s'ouvre
- Résultat actuel : Rien ne se passe
```

### 3. GitHub Actions (CI/CD)

**Automatiser des tâches** :
- Lancer les tests automatiquement à chaque commit
- Déployer ton site en production après chaque merge
- Vérifier la qualité du code

### 4. GitHub Pages

**Héberger un site statique gratuitement.**

**Configuration :**
1. Repository public avec un `index.html`
2. Settings → Pages
3. Source : main branch
4. Save

→ Site accessible sur `https://ton-nom.github.io/nom-repo`

### 5. README.md

**Fichier d'accueil** de ton repository.

**Exemple de bon README :**

```markdown
# Mon Super Projet

Description courte et claire du projet.

## Installation

```bash
npm install
npm start
```

## Utilisation

Exemple de code ici.

## Contribuer

Pull requests bienvenues !

## Licence

MIT
```

## Pourquoi Git et GitHub sont indispensables ?

### 1. Essentiel pour travailler en équipe

**Sans Git :**
- Alice modifie `index.html`
- Bob modifie `index.html` en même temps
- Qui a la bonne version ? 🤷‍♂️

**Avec Git :**
- Alice et Bob travaillent sur des branches séparées
- Git fusionne automatiquement les modifications
- En cas de conflit, Git le détecte et demande de choisir

### 2. Portfolio pour les recruteurs

**Ton profil GitHub = ton CV de développeur**

Les recruteurs regardent :
- ✅ La régularité de tes commits (tu codes souvent ?)
- ✅ La qualité de ton code
- ✅ Tes projets personnels
- ✅ Tes contributions à l'open source

**Astuce :** Avoir 5-10 projets publics bien documentés vaut plus qu'un diplôme pour certains jobs.

### 3. Contribuer à l'open source

**Des millions de projets gratuits** :
- React (framework frontend)
- VS Code (éditeur de code)
- Linux (système d'exploitation)
- Python, Node.js, etc.

**Tu peux :**
- Signaler des bugs (issues)
- Proposer des améliorations (pull requests)
- Apprendre en lisant le code des meilleurs devs

### 4. Sauvegarder ton travail

**Ton ordinateur crash ?** Pas de problème, tout est sur GitHub.

**Tu changes d'ordinateur ?** `git clone` et tu reprends le travail.

## Installation et configuration de Git

### Installer Git

**Windows :**
1. Télécharge [git-scm.com](https://git-scm.com)
2. Installe (laisse les options par défaut)
3. Vérifie : `git --version`

**Mac :**
```bash
# Via Homebrew (recommandé)
brew install git

# Ou télécharge depuis git-scm.com
```

**Linux (Ubuntu/Debian) :**
```bash
sudo apt update
sudo apt install git
```

### Configurer Git

**Première utilisation (obligatoire) :**

```bash
# Ton nom (apparaîtra dans les commits)
git config --global user.name "Ton Nom"

# Ton email (idéalement celui de GitHub)
git config --global user.email "ton-email@example.com"

# Éditeur par défaut (optionnel)
git config --global core.editor "code --wait"  # VS Code
```

**Vérifier la config :**

```bash
git config --list
```

### Se connecter à GitHub

**Méthode 1 : HTTPS (simple mais demande mot de passe)**

```bash
git push https://github.com/ton-nom/mon-repo.git
```

**Méthode 2 : SSH (recommandé, plus sécurisé)**

**Générer une clé SSH :**

```bash
# 1. Générer la clé
ssh-keygen -t ed25519 -C "ton-email@example.com"

# 2. Copier la clé publique
cat ~/.ssh/id_ed25519.pub
```

**Sur GitHub :**
1. Settings → SSH and GPG keys
2. New SSH key
3. Colle ta clé publique
4. Save

**Tester la connexion :**

```bash
ssh -T git@github.com
# "Hi ton-nom! You've successfully authenticated..."
```

## Erreurs courantes et solutions

### ❌ Erreur 1 : "fatal: not a git repository"

**Cause :** Tu n'es pas dans un dossier Git.

**Solution :**
```bash
git init  # Initialiser Git dans ce dossier
```

### ❌ Erreur 2 : Conflit lors d'un merge

**Cause :** Deux personnes ont modifié les mêmes lignes.

**Solution :**
1. Ouvre le fichier en conflit
2. Cherche les marqueurs `<<<<<<<`, `=======`, `>>>>>>>`
3. Choisis quelle version garder
4. Supprime les marqueurs
5. `git add fichier` puis `git commit`

### ❌ Erreur 3 : "Your branch is ahead of 'origin/main'"

**Cause :** Tu as fait des commits locaux non envoyés sur GitHub.

**Solution :**
```bash
git push origin main
```

### ❌ Erreur 4 : Oublié de faire un commit avant de changer de branche

**Solution :**
```bash
# Mettre de côté les modifications
git stash

# Changer de branche
git checkout autre-branche

# Revenir et récupérer
git checkout branche-originale
git stash pop
```

## Bonnes pratiques Git/GitHub

### ✅ Commits fréquents et petits

**Mauvais :**
- 1 commit géant après 3 jours de travail
- Message : "changements"

**Bon :**
- Commits réguliers toutes les 30-60 min
- Messages clairs : "Ajouter validation email dans formulaire"

### ✅ Messages de commit clairs

**Convention recommandée :**

```
Type: Description courte

- feat: Nouvelle fonctionnalité
- fix: Correction de bug
- docs: Documentation
- style: Formatage (pas de changement de code)
- refactor: Refactorisation
- test: Ajout de tests

Exemples:
feat: Ajouter authentification avec JWT
fix: Corriger affichage menu sur Safari
docs: Mettre à jour le README avec installation
```

### ✅ Brancher pour chaque fonctionnalité

```bash
# Nouvelle fonctionnalité = nouvelle branche
git checkout -b feature/ajout-paiement-stripe

# Bug urgent = branche hotfix
git checkout -b hotfix/menu-mobile
```

### ✅ .gitignore (fichiers à ignorer)

Crée un fichier `.gitignore` pour ne pas commiter :

```
# Dépendances
node_modules/

# Fichiers système
.DS_Store
Thumbs.db

# Fichiers de config locaux
.env
config.local.js

# Build
dist/
build/
```

## Ce qu'il faut retenir

🎯 **Git = logiciel de versioning (local), GitHub = plateforme cloud pour Git**

**Git permet de :**
- Enregistrer l'historique complet de ton projet
- Revenir en arrière à tout moment
- Créer des branches pour expérimenter
- Collaborer sans conflits

**GitHub ajoute :**
- Sauvegarde en ligne
- Collaboration (pull requests, code review)
- Portfolio public (recruteurs)
- Hébergement gratuit (GitHub Pages)

**Commandes Git essentielles :**
```bash
git init       # Initialiser
git add .      # Ajouter fichiers
git commit     # Sauvegarder
git push       # Envoyer sur GitHub
git pull       # Récupérer de GitHub
```

**Pourquoi c'est indispensable :**
- 90% des entreprises tech utilisent Git
- Portfolio GitHub = CV moderne
- Open source = apprendre des meilleurs
- Collaboration = essentiel en équipe

## Et maintenant ?

Tu sais maintenant ce que sont Git et GitHub. Il est temps de **pratiquer** !

📚 **Articles recommandés :**
- [Comment créer un site web ?](/blog/comment-creer-un-site-web) (pour avoir un projet à versionner)
- [Comment devenir développeur web ?](/blog/comment-devenir-developpeur-web-2025)
- [Guide complet pour débutants](/guide)

🚀 **Prochaines étapes :**
1. **Aujourd'hui** : Installe Git et crée ton compte GitHub
2. **Cette semaine** : Crée ton premier repository et fais 5 commits
3. **Ce mois-ci** : Mets un projet en ligne avec GitHub Pages
4. **Dans 3 mois** : Contribue à un projet open source

**Plan d'action immédiat :**
```bash
# 1. Vérifie que Git est installé
git --version

# 2. Configure Git
git config --global user.name "Ton Nom"
git config --global user.email "email@example.com"

# 3. Crée ton premier repo
mkdir mon-premier-projet-git
cd mon-premier-projet-git
git init

# 4. Crée un fichier
echo "# Mon Premier Projet Git" > README.md

# 5. Ton premier commit !
git add README.md
git commit -m "Premier commit: ajout README"
```

**Bravo, tu es maintenant un utilisateur Git !** 🎉

Let's code! 🚀