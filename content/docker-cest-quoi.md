---
title: "C'est quoi Docker ? (Guide débutant 2025)"
date: "2025-01-15"
category: "Outils"
excerpt: "Docker te permet d'empaqueter ton app avec toutes ses dépendances dans un conteneur portable. Découvre comment ça marche, pourquoi c'est révolutionnaire, et crée ton premier conteneur."
readingTime: "11 min"
keywords: ["Docker", "conteneur", "container", "virtualisation", "DevOps", "déploiement", "image", "Dockerfile"]
---

# C'est quoi Docker ?

Tu as codé une app qui marche **parfaitement sur ton PC**. Tu l'envoies à ton collègue... **ça ne marche plus** 😱

**Le problème classique** :
- "Ça marche sur ma machine !" 🤷‍♂️
- Version de Node différente
- Dépendances manquantes
- Configuration différente

**La solution** : **Docker** ! 🐳

---

## 🤔 Définition simple

> **Docker** = Un outil qui **empaquette ton app + toutes ses dépendances** dans un **conteneur** portable qui fonctionne partout (dev, staging, prod).

**Analogie du container maritime** :
- **Avant** : Chaque marchandise nécessite un transport spécifique (fragile, liquide, etc.)
- **Avec conteneurs** : Tout est dans des boîtes standardisées → Un seul bateau transporte tout

**Docker, c'est pareil** :
- Ton app est dans un "conteneur" standardisé
- Le conteneur fonctionne sur n'importe quel serveur (Mac, Linux, Windows, cloud)

---

## 🎯 Le problème que Docker résout

### Sans Docker

```
Dev (MacOS, Node 18) → ✅ Fonctionne
Staging (Ubuntu, Node 16) → ❌ Crash
Production (CentOS, Node 20) → ❌ Comportement bizarre
```

**Causes** :
- Versions différentes (Node, Python, etc.)
- Dépendances système manquantes (librairies C++, etc.)
- Variables d'environnement différentes
- Fichiers de config différents

### Avec Docker

```
Dev → Conteneur Docker (Node 18 + dépendances) → ✅
Staging → Même conteneur Docker → ✅
Production → Même conteneur Docker → ✅
```

**Garantie** : Si ça marche en dev, ça marchera en prod (même environnement !).

---

## 🐳 Docker vs Machine Virtuelle

### Machine Virtuelle (VM)

```
Hardware (Serveur physique)
    ↓
Hypervisor (VMware, VirtualBox)
    ↓
VM 1: OS complet (5 GB) + App 1
VM 2: OS complet (5 GB) + App 2
VM 3: OS complet (5 GB) + App 3
```

**Poids total** : 15 GB + Apps

### Docker (Conteneurs)

```
Hardware (Serveur physique)
    ↓
OS (Linux, Windows, Mac)
    ↓
Docker Engine
    ↓
Conteneur 1: App 1 (100 MB)
Conteneur 2: App 2 (150 MB)
Conteneur 3: App 3 (80 MB)
```

**Poids total** : ~330 MB

### Comparatif

| Critère | VM | Docker |
|---------|-----|--------|
| **Poids** | 5-10 GB par VM | 50-500 MB par conteneur |
| **Démarrage** | 1-2 minutes | 1-2 secondes |
| **Isolation** | Forte (OS séparé) | Moyenne (processus isolé) |
| **Performance** | Overhead (hypervisor) | Quasi-native |
| **Portabilité** | Difficile | Excellente |

**Conclusion** : Docker est bien plus léger et rapide qu'une VM !

---

## 📦 Les concepts clés

### 1. Image Docker

**Définition** : Un **template** en lecture seule qui contient tout pour lancer ton app.

**Analogie** : Un moule à gâteau (tu peux créer plein de gâteaux identiques).

**Exemple** :
```
Image "node:18-alpine"
    ↓
Contient : Linux Alpine + Node.js 18 + npm
```

**Images populaires** :
- `node:18` : Node.js version 18
- `python:3.11` : Python 3.11
- `nginx:latest` : Serveur web Nginx
- `postgres:15` : Base de données PostgreSQL

### 2. Conteneur Docker

**Définition** : Une **instance en cours d'exécution** d'une image.

**Analogie** : Le gâteau réel fait à partir du moule.

**Exemple** :
```
Image "node:18" → Conteneur 1 (app frontend)
Image "node:18" → Conteneur 2 (app backend)
```

### 3. Dockerfile

**Définition** : Un fichier de **recette** qui décrit comment construire une image.

**Analogie** : Une recette de cuisine pour créer le moule.

**Exemple** :
```dockerfile
# Fichier : Dockerfile
FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 3000
CMD ["npm", "start"]
```

### 4. Docker Hub

**Définition** : Un **registry** (bibliothèque) d'images Docker publiques.

**Analogie** : Le npm pour Docker (des millions d'images prêtes à l'emploi).

**URL** : https://hub.docker.com

---

## 💻 Installer Docker

### Mac

Télécharge **Docker Desktop** :
🔗 https://www.docker.com/products/docker-desktop

Installe, lance, et vérifie :
```bash
docker --version
# Docker version 24.0.7
```

### Windows

**Prérequis** : Windows 10/11 Pro (avec WSL 2)

Télécharge **Docker Desktop** :
🔗 https://www.docker.com/products/docker-desktop

Active WSL 2, installe, vérifie :
```bash
docker --version
```

### Linux (Ubuntu)

```bash
# Mettre à jour
sudo apt update

# Installer Docker
sudo apt install docker.io

# Vérifier
docker --version

# Lancer Docker sans sudo (optionnel)
sudo usermod -aG docker $USER
# Déconnecte/reconnecte-toi
```

---

## 🚀 Ton premier conteneur Docker

### Exemple 1 : Hello World

```bash
docker run hello-world
```

**Ce qui se passe** :
1. Docker cherche l'image `hello-world` localement
2. Pas trouvée → Télécharge depuis Docker Hub
3. Crée un conteneur à partir de l'image
4. Lance le conteneur
5. Affiche "Hello from Docker!"

**Résultat** :
```
Hello from Docker!
This message shows that your installation appears to be working correctly.
```

### Exemple 2 : Serveur Nginx

```bash
docker run -d -p 8080:80 nginx
```

**Explications** :
- `docker run` : Lance un conteneur
- `-d` : Détaché (background)
- `-p 8080:80` : Map port 8080 (hôte) → 80 (conteneur)
- `nginx` : Image à utiliser

**Résultat** :
Ouvre http://localhost:8080 → Page Nginx ! 🎉

### Exemple 3 : Node.js interactif

```bash
docker run -it node:18 bash
```

**Tu es maintenant DANS le conteneur** :
```bash
node --version
# v18.19.0

npm --version
# 10.2.3

# Tester Node
node -e "console.log('Hello from Docker')"
# Hello from Docker

# Quitter
exit
```

---

## 🏗️ Créer ton propre conteneur

### Projet : API Node.js simple

#### 1️⃣ Créer l'app

**package.json** :
```json
{
  "name": "docker-demo",
  "version": "1.0.0",
  "main": "index.js",
  "scripts": {
    "start": "node index.js"
  },
  "dependencies": {
    "express": "^4.18.0"
  }
}
```

**index.js** :
```javascript
const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.json({ message: 'Hello from Docker!' });
});

app.listen(3000, () => {
  console.log('Server running on port 3000');
});
```

#### 2️⃣ Créer le Dockerfile

**Dockerfile** :
```dockerfile
# Image de base
FROM node:18-alpine

# Répertoire de travail
WORKDIR /app

# Copier package.json
COPY package*.json ./

# Installer dépendances
RUN npm install

# Copier le code source
COPY . .

# Exposer le port
EXPOSE 3000

# Commande de démarrage
CMD ["npm", "start"]
```

**Explications ligne par ligne** :
- `FROM` : Image de base (Node 18 sur Alpine Linux = ultra-léger)
- `WORKDIR` : Dossier de travail dans le conteneur
- `COPY package*.json ./` : Copie package.json (pour cache des dépendances)
- `RUN npm install` : Installe les dépendances
- `COPY . .` : Copie tout le code source
- `EXPOSE 3000` : Documente le port (info seulement)
- `CMD` : Commande exécutée au démarrage

#### 3️⃣ Construire l'image

```bash
docker build -t mon-api .
```

**Explications** :
- `docker build` : Construire une image
- `-t mon-api` : Tag (nom) de l'image
- `.` : Contexte (dossier actuel)

**Résultat** :
```
[+] Building 15.2s (10/10) FINISHED
 => [1/5] FROM docker.io/library/node:18-alpine
 => [2/5] WORKDIR /app
 => [3/5] COPY package*.json ./
 => [4/5] RUN npm install
 => [5/5] COPY . .
 => exporting to image
 => => naming to docker.io/library/mon-api
```

#### 4️⃣ Lancer le conteneur

```bash
docker run -d -p 3000:3000 --name api mon-api
```

**Explications** :
- `-d` : Détaché (background)
- `-p 3000:3000` : Map port 3000
- `--name api` : Nom du conteneur
- `mon-api` : Image à utiliser

**Tester** :
```bash
curl http://localhost:3000
# {"message":"Hello from Docker!"}
```

---

## 🛠️ Commandes Docker essentielles

### Gérer les conteneurs

```bash
# Lister les conteneurs actifs
docker ps

# Lister TOUS les conteneurs (actifs + arrêtés)
docker ps -a

# Arrêter un conteneur
docker stop mon-conteneur

# Démarrer un conteneur arrêté
docker start mon-conteneur

# Redémarrer
docker restart mon-conteneur

# Supprimer un conteneur
docker rm mon-conteneur

# Supprimer TOUS les conteneurs arrêtés
docker container prune
```

### Gérer les images

```bash
# Lister les images
docker images

# Télécharger une image
docker pull nginx

# Supprimer une image
docker rmi nginx

# Supprimer toutes les images non utilisées
docker image prune -a
```

### Logs et debug

```bash
# Voir les logs d'un conteneur
docker logs mon-conteneur

# Suivre les logs en temps réel
docker logs -f mon-conteneur

# Entrer dans un conteneur en cours d'exécution
docker exec -it mon-conteneur bash

# Voir les stats (CPU, RAM)
docker stats
```

### Inspecter

```bash
# Détails d'un conteneur
docker inspect mon-conteneur

# IP du conteneur
docker inspect -f '{{range .NetworkSettings.Networks}}{{.IPAddress}}{{end}}' mon-conteneur
```

---

## 🔗 Docker Compose (multi-conteneurs)

**Problème** : Une app = souvent plusieurs services (frontend + backend + BDD).

**Solution** : **Docker Compose** = Orchestrer plusieurs conteneurs.

### Exemple : App fullstack

**Structure** :
```
mon-app/
├── docker-compose.yml
├── frontend/
│   ├── Dockerfile
│   └── ... (code React)
└── backend/
    ├── Dockerfile
    └── ... (code Node.js)
```

**docker-compose.yml** :
```yaml
version: '3.8'

services:
  frontend:
    build: ./frontend
    ports:
      - "3000:3000"
    depends_on:
      - backend

  backend:
    build: ./backend
    ports:
      - "5000:5000"
    environment:
      - DATABASE_URL=postgres://user:pass@db:5432/mydb
    depends_on:
      - db

  db:
    image: postgres:15
    environment:
      - POSTGRES_USER=user
      - POSTGRES_PASSWORD=pass
      - POSTGRES_DB=mydb
    volumes:
      - db-data:/var/lib/postgresql/data

volumes:
  db-data:
```

**Lancer tout** :
```bash
docker-compose up -d
```

**Résultat** :
- Frontend sur http://localhost:3000
- Backend sur http://localhost:5000
- Postgres sur port 5432

**Arrêter tout** :
```bash
docker-compose down
```

---

## 🎨 .dockerignore (optimisation)

Évite de copier des fichiers inutiles dans l'image.

**.dockerignore** :
```
node_modules
npm-debug.log
.git
.env
.DS_Store
README.md
```

**Avantage** : Build plus rapide, image plus légère.

---

## 🚀 Déployer avec Docker

### 1. Docker Hub (public)

```bash
# Se connecter
docker login

# Tag l'image
docker tag mon-api ton-username/mon-api:v1.0

# Push
docker push ton-username/mon-api:v1.0
```

**Résultat** : Image disponible sur https://hub.docker.com

### 2. Serveur (VPS, AWS, etc.)

```bash
# Sur le serveur
docker pull ton-username/mon-api:v1.0
docker run -d -p 80:3000 ton-username/mon-api:v1.0
```

### 3. Plateformes cloud

**Render, Railway, Fly.io** détectent automatiquement le Dockerfile et déploient !

---

## 🔥 Cas d'usage réels

### 1. Développement local

**Problème** : Installer Postgres, Redis, MongoDB localement = galère.

**Solution** :
```bash
docker run -d -p 5432:5432 -e POSTGRES_PASSWORD=pass postgres
docker run -d -p 6379:6379 redis
docker run -d -p 27017:27017 mongo
```

**Résultat** : Bases de données prêtes en 10 secondes !

### 2. CI/CD (Tests automatiques)

**GitHub Actions** :
```yaml
jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - name: Build Docker image
        run: docker build -t mon-app .
      - name: Run tests
        run: docker run mon-app npm test
```

### 3. Microservices

**Architecture** :
```
Frontend (React) → Conteneur 1
Auth Service → Conteneur 2
API Gateway → Conteneur 3
User Service → Conteneur 4
Product Service → Conteneur 5
Database → Conteneur 6
```

Chaque service est indépendant et scalable.

---

## ❌ Erreurs courantes

### 1. Conteneur s'arrête immédiatement

**Cause** : Pas de processus en foreground.

❌ **Mauvais** :
```dockerfile
CMD ["npm", "install"] # S'arrête après install
```

✅ **Bon** :
```dockerfile
CMD ["npm", "start"] # Processus qui tourne en continu
```

### 2. Port déjà utilisé

**Erreur** :
```
Error: bind: address already in use
```

**Solution** : Change le port hôte :
```bash
docker run -p 8080:3000 mon-api # 8080 au lieu de 3000
```

### 3. Image trop grosse (2 GB+)

**Cause** : Utilise `node:18` au lieu de `node:18-alpine`.

**Solution** : Utilise les images `-alpine` (ultra-légères) :
```dockerfile
FROM node:18-alpine # 50 MB au lieu de 1 GB
```

### 4. Modifications du code ne se reflètent pas

**Cause** : Tu as modifié le code mais pas rebuild l'image.

**Solution** :
```bash
docker build -t mon-api . # Rebuild
docker stop mon-conteneur
docker rm mon-conteneur
docker run -d -p 3000:3000 mon-api
```

**Ou en dev, utilise un volume** :
```bash
docker run -v $(pwd):/app -p 3000:3000 mon-api
```

---

## 🎓 Bonnes pratiques

### 1. Images multi-stage (production)

**Problème** : Image de dev contient des outils inutiles en prod.

**Solution** :
```dockerfile
# Stage 1 : Build
FROM node:18 AS builder
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# Stage 2 : Production
FROM node:18-alpine
WORKDIR /app
COPY --from=builder /app/dist ./dist
COPY package*.json ./
RUN npm install --production
CMD ["node", "dist/index.js"]
```

**Résultat** : Image finale ultra-légère (seulement le code de prod).

### 2. Ne pas run en root

```dockerfile
RUN addgroup -S appgroup && adduser -S appuser -G appgroup
USER appuser
```

### 3. Healthcheck

```dockerfile
HEALTHCHECK --interval=30s --timeout=3s \
  CMD curl -f http://localhost:3000/health || exit 1
```

### 4. Layer caching

**Optimisation** : Copie `package.json` AVANT le code (cache npm install).

✅ **Bon** :
```dockerfile
COPY package*.json ./
RUN npm install # Cached si package.json n'a pas changé
COPY . .
```

❌ **Mauvais** :
```dockerfile
COPY . . # Tout copié → npm install relancé à chaque build
RUN npm install
```

---

## 🎯 Roadmap : Maîtriser Docker

### Niveau débutant (1-2 mois)
✅ Installer Docker
✅ Lancer des conteneurs préexistants (nginx, postgres)
✅ Comprendre images vs conteneurs
✅ Écrire un Dockerfile simple

### Niveau intermédiaire (2-4 mois)
✅ Docker Compose (multi-conteneurs)
✅ Volumes (persistance des données)
✅ Networks (communication entre conteneurs)
✅ Déployer sur cloud (Render, Railway)

### Niveau avancé (6+ mois)
✅ Multi-stage builds
✅ Kubernetes (orchestration à grande échelle)
✅ Docker Swarm
✅ CI/CD avec Docker

---

## 🔗 Ressources

### Documentation
- [Docker Docs](https://docs.docker.com/)
- [Docker Hub](https://hub.docker.com/)
- [Docker Compose Docs](https://docs.docker.com/compose/)

### Tutoriels
- [Play with Docker](https://labs.play-with-docker.com/) : Docker dans le navigateur
- [Docker for Beginners](https://docker-curriculum.com/)

---

## 💡 Conclusion

**Docker**, c'est :
- 🐳 **Empaqueter** ton app + dépendances dans un conteneur
- 🚀 **Portable** : Fonctionne partout (dev, staging, prod)
- ⚡ **Léger** : 10x plus léger qu'une VM
- 🔄 **Reproductible** : "Ça marche sur ma machine" → "Ça marche partout"

**Quand l'utiliser ?**
- ✅ Développement (bases de données locales)
- ✅ CI/CD (tests automatiques)
- ✅ Déploiement (production)
- ✅ Microservices

**Prochaine étape** : Dockerise ton premier projet ! Commence simple (une app Node.js), puis ajoute des services (Postgres, Redis).

🚀 **Mon conseil** : Teste Docker en local d'abord (lancer un Postgres dans un conteneur), puis dockerise une petite app. Tu comprendras vite la puissance !

---

**Prêt à dockeriser ?**
👉 Lis [Comment déployer un site web ?](/blog/comment-deployer-un-site-web) pour déployer ton conteneur
👉 Découvre [C'est quoi Kubernetes ?](/blog/kubernetes-cest-quoi) pour orchestrer des conteneurs à grande échelle