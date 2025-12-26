---
title: "C'est quoi une API REST ? (Guide complet 2025)"
date: "2025-01-15"
category: "Backend"
excerpt: "Une API REST, c'est un serveur qui répond à des requêtes HTTP pour échanger des données. Découvre les principes REST (GET, POST, PUT, DELETE), les codes HTTP, et crée ta première API."
readingTime: "12 min"
keywords: ["API REST", "HTTP", "GET", "POST", "PUT", "DELETE", "JSON", "backend", "Express", "Node.js"]
---

# C'est quoi une API REST ?

Tu veux créer une application mobile qui affiche des tweets ? Un site e-commerce avec un panier ? Un dashboard qui affiche des statistiques ?

**Le problème** : Le frontend (ce que l'utilisateur voit) doit **communiquer** avec le backend (serveur + base de données).

**La solution** : Une **API REST** !

---

## 🤔 Définition simple

> **API REST** = Un **serveur** qui répond à des **requêtes HTTP** pour **échanger des données** (généralement en JSON).

**Décomposition** :
- **API** (Application Programming Interface) : Interface pour communiquer avec une application
- **REST** (Representational State Transfer) : Style d'architecture web (créé en 2000)

**Analogie du restaurant** :

| Restaurant | API REST |
|------------|----------|
| Client (toi) | Frontend (application) |
| Menu | Documentation API |
| Serveur | API REST |
| Cuisine | Backend + Base de données |
| Plat servi | Données JSON |

**Le processus** :
1. Tu regardes le menu (documentation) et commandes un plat (requête HTTP)
2. Le serveur (API) transmet en cuisine (backend)
3. La cuisine prépare le plat (traitement + BDD)
4. Le serveur t'apporte le plat (réponse JSON)

---

## 🎯 Pourquoi REST est partout ?

### Les avantages

✅ **Simplicité** : Basé sur HTTP (protocole du web, universel)
✅ **Flexibilité** : N'importe quel frontend peut consommer (web, mobile, IoT)
✅ **Scalabilité** : Facile d'ajouter des serveurs (stateless)
✅ **Standardisé** : Conventions communes (GET, POST, PUT, DELETE)
✅ **Indépendance** : Frontend et backend peuvent évoluer séparément

### Exemples concrets

**Twitter** :
```
GET https://api.twitter.com/tweets
→ Récupère les tweets

POST https://api.twitter.com/tweets
→ Crée un nouveau tweet
```

**Stripe (paiements)** :
```
POST https://api.stripe.com/charges
→ Effectue un paiement
```

**Google Maps** :
```
GET https://maps.googleapis.com/geocode?address=Paris
→ Obtient les coordonnées de Paris
```

---

## 📋 Les 5 principes REST

### 1. Client-Serveur

**Séparation des responsabilités** :
- **Client** : Affichage (React, Vue, mobile app)
- **Serveur** : Logique + Données (Node.js, Python, Java)

**Avantage** : Tu peux changer le frontend sans toucher au backend (et vice-versa).

### 2. Stateless (sans état)

Chaque requête est **indépendante** et contient **toutes les infos** nécessaires.

❌ **Avec état (stateful)** :
```
1. Client : login()
   Serveur : OK, je me souviens que tu es connecté
2. Client : getTweets()
   Serveur : OK, je sais que c'est toi
```

✅ **Sans état (stateless)** :
```
1. Client : login() → Reçoit un token
2. Client : getTweets(token)
   Serveur : Je vérifie le token à chaque fois
```

**Avantage** : Le serveur peut redémarrer sans perdre d'info. Scalabilité facile.

### 3. Cacheable

Les réponses peuvent être mises en cache (pour éviter de refaire la même requête).

```http
HTTP/1.1 200 OK
Cache-Control: max-age=3600
```

**Résultat** : Le navigateur garde la réponse 1h au lieu de refaire la requête.

### 4. Interface uniforme

**Convention** : Utilise les **méthodes HTTP** et des **URLs logiques**.

```
GET    /users       → Lire tous les users
GET    /users/123   → Lire le user 123
POST   /users       → Créer un user
PUT    /users/123   → Modifier le user 123
DELETE /users/123   → Supprimer le user 123
```

### 5. Système en couches

Tu peux avoir plusieurs serveurs (load balancer, cache, API gateway) entre le client et la base de données.

```
Client → Load Balancer → API Gateway → Serveur API → BDD
```

**Avantage** : Sécurité, performance, résilience.

---

## 🌐 Les méthodes HTTP (verbes)

### GET (Lire)

**Récupère** des données sans les modifier.

```javascript
// Requête
GET /api/posts

// Réponse (JSON)
[
  { "id": 1, "title": "Premier post", "author": "Jean" },
  { "id": 2, "title": "Deuxième post", "author": "Marie" }
]
```

**Idempotent** : Appeler 10 fois GET donne le même résultat.

### POST (Créer)

**Crée** une nouvelle ressource.

```javascript
// Requête
POST /api/posts
Content-Type: application/json

{
  "title": "Nouveau post",
  "content": "Contenu du post...",
  "author": "Paul"
}

// Réponse (201 Created)
{
  "id": 3,
  "title": "Nouveau post",
  "content": "Contenu du post...",
  "author": "Paul"
}
```

**Non idempotent** : Appeler 10 fois POST crée 10 posts différents.

### PUT (Modifier complètement)

**Remplace** une ressource existante.

```javascript
// Requête
PUT /api/posts/3
Content-Type: application/json

{
  "title": "Titre modifié",
  "content": "Nouveau contenu",
  "author": "Paul"
}

// Réponse (200 OK)
{
  "id": 3,
  "title": "Titre modifié",
  "content": "Nouveau contenu",
  "author": "Paul"
}
```

**Idempotent** : Appeler 10 fois PUT avec les mêmes données donne le même résultat.

### PATCH (Modifier partiellement)

**Modifie** seulement certains champs.

```javascript
// Requête
PATCH /api/posts/3
Content-Type: application/json

{
  "title": "Nouveau titre"
}

// Réponse (200 OK)
{
  "id": 3,
  "title": "Nouveau titre",
  "content": "Nouveau contenu", // Inchangé
  "author": "Paul" // Inchangé
}
```

### DELETE (Supprimer)

**Supprime** une ressource.

```javascript
// Requête
DELETE /api/posts/3

// Réponse (204 No Content)
// Pas de contenu (la ressource est supprimée)
```

**Idempotent** : Appeler 10 fois DELETE sur la même ressource donne le même résultat (elle est déjà supprimée).

---

## 📊 Les codes de statut HTTP

### 2xx : Succès

- **200 OK** : Requête réussie
- **201 Created** : Ressource créée (POST)
- **204 No Content** : Succès sans contenu (DELETE)

### 3xx : Redirection

- **301 Moved Permanently** : Ressource déplacée
- **304 Not Modified** : Ressource en cache (pas de changement)

### 4xx : Erreur client

- **400 Bad Request** : Requête invalide (données manquantes)
- **401 Unauthorized** : Non authentifié (pas de token)
- **403 Forbidden** : Authentifié mais pas autorisé
- **404 Not Found** : Ressource introuvable
- **422 Unprocessable Entity** : Données invalides (email déjà utilisé)

### 5xx : Erreur serveur

- **500 Internal Server Error** : Erreur générique du serveur
- **503 Service Unavailable** : Serveur temporairement indisponible

---

## 💻 Créer ta première API REST (Node.js + Express)

### 1️⃣ Installation

```bash
mkdir api-rest
cd api-rest
npm init -y
npm install express
```

### 2️⃣ Code complet (server.js)

```javascript
const express = require('express');
const app = express();

// Middleware pour parser le JSON
app.use(express.json());

// Données en mémoire (dans la vraie vie : BDD)
let posts = [
    { id: 1, title: 'Premier post', content: 'Contenu...', author: 'Jean' },
    { id: 2, title: 'Deuxième post', content: 'Autre contenu...', author: 'Marie' }
];

// ========== ROUTES ==========

// GET /api/posts - Lire tous les posts
app.get('/api/posts', (req, res) => {
    res.json(posts);
});

// GET /api/posts/:id - Lire un post par ID
app.get('/api/posts/:id', (req, res) => {
    const post = posts.find(p => p.id === parseInt(req.params.id));

    if (!post) {
        return res.status(404).json({ error: 'Post introuvable' });
    }

    res.json(post);
});

// POST /api/posts - Créer un post
app.post('/api/posts', (req, res) => {
    // Validation
    if (!req.body.title || !req.body.content) {
        return res.status(400).json({ error: 'Titre et contenu requis' });
    }

    const newPost = {
        id: posts.length + 1,
        title: req.body.title,
        content: req.body.content,
        author: req.body.author || 'Anonyme'
    };

    posts.push(newPost);
    res.status(201).json(newPost);
});

// PUT /api/posts/:id - Modifier un post (complet)
app.put('/api/posts/:id', (req, res) => {
    const post = posts.find(p => p.id === parseInt(req.params.id));

    if (!post) {
        return res.status(404).json({ error: 'Post introuvable' });
    }

    post.title = req.body.title;
    post.content = req.body.content;
    post.author = req.body.author;

    res.json(post);
});

// PATCH /api/posts/:id - Modifier un post (partiel)
app.patch('/api/posts/:id', (req, res) => {
    const post = posts.find(p => p.id === parseInt(req.params.id));

    if (!post) {
        return res.status(404).json({ error: 'Post introuvable' });
    }

    if (req.body.title) post.title = req.body.title;
    if (req.body.content) post.content = req.body.content;
    if (req.body.author) post.author = req.body.author;

    res.json(post);
});

// DELETE /api/posts/:id - Supprimer un post
app.delete('/api/posts/:id', (req, res) => {
    const index = posts.findIndex(p => p.id === parseInt(req.params.id));

    if (index === -1) {
        return res.status(404).json({ error: 'Post introuvable' });
    }

    posts.splice(index, 1);
    res.status(204).send();
});

// Middleware d'erreur (en dernier)
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ error: 'Erreur serveur' });
});

// Démarrer le serveur
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`🚀 API REST sur http://localhost:${PORT}`);
});
```

### 3️⃣ Lancer le serveur

```bash
node server.js
```

### 4️⃣ Tester l'API

**Avec curl** :

```bash
# Lire tous les posts
curl http://localhost:3000/api/posts

# Lire un post
curl http://localhost:3000/api/posts/1

# Créer un post
curl -X POST http://localhost:3000/api/posts \
  -H "Content-Type: application/json" \
  -d '{"title":"Nouveau post","content":"Contenu...","author":"Paul"}'

# Modifier un post (partiel)
curl -X PATCH http://localhost:3000/api/posts/1 \
  -H "Content-Type: application/json" \
  -d '{"title":"Titre modifié"}'

# Supprimer un post
curl -X DELETE http://localhost:3000/api/posts/1
```

**Avec Postman/Insomnia** :
Télécharge [Postman](https://www.postman.com/) pour tester visuellement.

---

## 🔒 Sécuriser ton API

### 1. Authentification JWT (JSON Web Token)

```bash
npm install jsonwebtoken bcryptjs
```

```javascript
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

const SECRET_KEY = 'ton_secret_ultra_securise';

// Middleware d'authentification
function authenticateToken(req, res, next) {
    const token = req.headers['authorization']?.split(' ')[1];

    if (!token) {
        return res.status(401).json({ error: 'Token manquant' });
    }

    jwt.verify(token, SECRET_KEY, (err, user) => {
        if (err) {
            return res.status(403).json({ error: 'Token invalide' });
        }
        req.user = user;
        next();
    });
}

// Route de login
app.post('/api/login', async (req, res) => {
    const { email, password } = req.body;

    // Vérifier user en BDD (simplifié ici)
    const user = users.find(u => u.email === email);
    if (!user) {
        return res.status(401).json({ error: 'Email ou mot de passe incorrect' });
    }

    // Vérifier le mot de passe
    const validPassword = await bcrypt.compare(password, user.password);
    if (!validPassword) {
        return res.status(401).json({ error: 'Email ou mot de passe incorrect' });
    }

    // Créer le token
    const token = jwt.sign({ id: user.id, email: user.email }, SECRET_KEY, { expiresIn: '1h' });
    res.json({ token });
});

// Route protégée
app.get('/api/protected', authenticateToken, (req, res) => {
    res.json({ message: 'Tu es authentifié !', user: req.user });
});
```

**Utilisation** :

```bash
# Login
curl -X POST http://localhost:3000/api/login \
  -H "Content-Type: application/json" \
  -d '{"email":"jean@email.com","password":"password123"}'

# Réponse : { "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6..." }

# Utiliser le token
curl http://localhost:3000/api/protected \
  -H "Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6..."
```

### 2. Rate Limiting

Limite le nombre de requêtes par IP (protection contre les attaques).

```bash
npm install express-rate-limit
```

```javascript
const rateLimit = require('express-rate-limit');

const limiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 100 // Max 100 requêtes par IP
});

app.use('/api/', limiter);
```

### 3. CORS (Cross-Origin Resource Sharing)

Autorise les requêtes depuis d'autres domaines.

```bash
npm install cors
```

```javascript
const cors = require('cors');

// Autoriser tous les domaines (dev uniquement)
app.use(cors());

// Production : restreindre aux domaines autorisés
app.use(cors({
    origin: 'https://monsite.com',
    optionsSuccessStatus: 200
}));
```

---

## 📁 Structure d'une API professionnelle

```
api-rest/
├── .env                 # Variables d'environnement
├── .gitignore
├── package.json
├── server.js            # Point d'entrée
├── config/
│   └── db.js            # Connexion BDD
├── routes/
│   ├── posts.js         # Routes posts
│   ├── users.js         # Routes users
│   └── auth.js          # Routes auth
├── controllers/
│   ├── postController.js
│   └── userController.js
├── models/
│   ├── Post.js          # Modèle Post
│   └── User.js          # Modèle User
├── middlewares/
│   ├── auth.js          # Authentification
│   └── errorHandler.js  # Gestion erreurs
└── utils/
    └── validators.js    # Validation données
```

### Exemple de route modulaire

**routes/posts.js** :

```javascript
const express = require('express');
const router = express.Router();
const postController = require('../controllers/postController');
const auth = require('../middlewares/auth');

router.get('/', postController.getAllPosts);
router.get('/:id', postController.getPostById);
router.post('/', auth, postController.createPost);
router.put('/:id', auth, postController.updatePost);
router.delete('/:id', auth, postController.deletePost);

module.exports = router;
```

**server.js** :

```javascript
const express = require('express');
const app = express();

app.use(express.json());
app.use('/api/posts', require('./routes/posts'));
app.use('/api/users', require('./routes/users'));

app.listen(3000, () => console.log('🚀 API démarrée'));
```

---

## 🎓 Bonnes pratiques REST

### 1. Versioning (versionner l'API)

```javascript
// v1
app.use('/api/v1/posts', require('./routes/v1/posts'));

// v2 (nouvelle version sans casser v1)
app.use('/api/v2/posts', require('./routes/v2/posts'));
```

**Avantage** : Tu peux faire évoluer l'API sans casser les anciennes applications.

### 2. Pagination

```javascript
app.get('/api/posts', (req, res) => {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 10;

    const startIndex = (page - 1) * limit;
    const endIndex = page * limit;

    const results = {
        totalCount: posts.length,
        page,
        limit,
        data: posts.slice(startIndex, endIndex)
    };

    if (endIndex < posts.length) {
        results.next = { page: page + 1, limit };
    }

    if (startIndex > 0) {
        results.previous = { page: page - 1, limit };
    }

    res.json(results);
});
```

**Utilisation** :
```
GET /api/posts?page=2&limit=20
```

### 3. Filtres et recherche

```javascript
app.get('/api/posts', (req, res) => {
    let filtered = posts;

    // Filtre par auteur
    if (req.query.author) {
        filtered = filtered.filter(p => p.author === req.query.author);
    }

    // Recherche par titre
    if (req.query.search) {
        filtered = filtered.filter(p =>
            p.title.toLowerCase().includes(req.query.search.toLowerCase())
        );
    }

    res.json(filtered);
});
```

**Utilisation** :
```
GET /api/posts?author=Jean&search=javascript
```

### 4. Tri

```javascript
app.get('/api/posts', (req, res) => {
    let sorted = [...posts];

    if (req.query.sort) {
        const sortField = req.query.sort;
        const sortOrder = req.query.order === 'desc' ? -1 : 1;

        sorted.sort((a, b) => {
            if (a[sortField] < b[sortField]) return -1 * sortOrder;
            if (a[sortField] > b[sortField]) return 1 * sortOrder;
            return 0;
        });
    }

    res.json(sorted);
});
```

**Utilisation** :
```
GET /api/posts?sort=title&order=asc
```

---

## 🌍 APIs publiques pour pratiquer

### 1. JSONPlaceholder (fake data)

```javascript
// Récupérer des posts de test
fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res => res.json())
    .then(data => console.log(data));
```

### 2. GitHub API

```javascript
// Récupérer les repos d'un utilisateur
fetch('https://api.github.com/users/octocat/repos')
    .then(res => res.json())
    .then(repos => console.log(repos));
```

### 3. OpenWeatherMap (météo)

```javascript
const API_KEY = 'ta_cle_api';
fetch(`https://api.openweathermap.org/data/2.5/weather?q=Paris&appid=${API_KEY}`)
    .then(res => res.json())
    .then(weather => console.log(weather));
```

### 4. The Cat API (images de chats)

```javascript
fetch('https://api.thecatapi.com/v1/images/search')
    .then(res => res.json())
    .then(cats => console.log(cats[0].url));
```

---

## ❌ Erreurs courantes

### 1. Oublier `express.json()`

❌ **Erreur** :
```javascript
app.post('/api/posts', (req, res) => {
    console.log(req.body); // undefined 😵
});
```

✅ **Solution** :
```javascript
app.use(express.json()); // Avant les routes !
```

### 2. Ne pas gérer les erreurs

❌ **Erreur** :
```javascript
app.get('/api/posts/:id', async (req, res) => {
    const post = await Post.findById(req.params.id); // Crash si BDD down
    res.json(post);
});
```

✅ **Solution** :
```javascript
app.get('/api/posts/:id', async (req, res) => {
    try {
        const post = await Post.findById(req.params.id);
        if (!post) return res.status(404).json({ error: 'Post introuvable' });
        res.json(post);
    } catch (err) {
        res.status(500).json({ error: 'Erreur serveur' });
    }
});
```

### 3. Mots de passe en clair

❌ **DANGER** :
```javascript
const user = { email: 'jean@email.com', password: 'password123' };
```

✅ **SÉCURISÉ** :
```javascript
const bcrypt = require('bcryptjs');
const hashedPassword = await bcrypt.hash('password123', 10);
const user = { email: 'jean@email.com', password: hashedPassword };
```

---

## 🎯 Roadmap : Maîtriser les APIs REST

### Niveau débutant (1-2 mois)
✅ Comprendre HTTP (GET, POST, PUT, DELETE)
✅ Créer une API simple avec Express
✅ Tester avec Postman/curl
✅ Connecter à une base de données

### Niveau intermédiaire (2-4 mois)
✅ Authentification (JWT, sessions)
✅ Validation des données (Joi, Zod)
✅ Pagination, filtres, tri
✅ Gestion des erreurs

### Niveau avancé (6+ mois)
✅ Architecture microservices
✅ Documentation (Swagger/OpenAPI)
✅ Tests (Jest, Supertest)
✅ Déploiement (Docker, AWS, Heroku)
✅ GraphQL (alternative à REST)

---

## 🔗 Ressources pour aller plus loin

### Documentation
- [MDN HTTP Methods](https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods)
- [Express.js Docs](https://expressjs.com/)
- [REST API Tutorial](https://restfulapi.net/)

### Tutoriels
- [FreeCodeCamp - APIs and Microservices](https://www.freecodecamp.org/learn/back-end-development-and-apis/)
- [The Odin Project - APIs](https://www.theodinproject.com/paths/full-stack-javascript/courses/nodejs)

### Outils
- [Postman](https://www.postman.com/) : Tester les APIs
- [Swagger](https://swagger.io/) : Documenter les APIs
- [Insomnia](https://insomnia.rest/) : Alternative à Postman

---

## 💡 Conclusion

Une API REST, c'est :
- 🌐 **Un serveur** qui répond à des requêtes HTTP
- 📦 **JSON** pour échanger des données
- 🛠️ **GET/POST/PUT/DELETE** pour gérer les ressources
- 🔒 **Sécurité** avec JWT, rate limiting, validation

**Prochaine étape** : Crée une API pour un projet perso (blog, TODO list, e-commerce). Connecte-la à un frontend (React, Vue) et tu auras un projet full-stack complet pour ton portfolio !

🚀 **Mon conseil** : Déploie ton API sur [Render](https://render.com), [Railway](https://railway.app) ou [Fly.io](https://fly.io) (gratuit). Avoir une API en ligne est un énorme + sur un CV !

---

**Prêt à continuer ?**
👉 Lis [C'est quoi Node.js ?](/blog/node-js-cest-quoi) pour créer ton serveur
👉 Découvre [C'est quoi une base de données ?](/blog/quest-ce-quune-base-de-donnees) pour stocker tes données