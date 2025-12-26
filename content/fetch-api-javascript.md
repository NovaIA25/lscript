---
title: "Fetch API : Faire des requêtes HTTP en JavaScript (Guide 2025)"
date: "2025-01-15"
category: "Web"
excerpt: "Fetch API te permet de récupérer des données depuis une API en JavaScript. Découvre comment faire des requêtes GET, POST, PUT, DELETE, gérer les erreurs, et utiliser async/await."
readingTime: "10 min"
keywords: ["Fetch API", "JavaScript", "HTTP", "GET", "POST", "async await", "API", "JSON", "AJAX"]
---

# Fetch API : Faire des requêtes HTTP en JavaScript

Tu veux afficher la météo sur ton site ? Récupérer des tweets ? Soumettre un formulaire sans recharger la page ?

**Tu as besoin de communiquer avec une API** !

Avant, on utilisait `XMLHttpRequest` (complexe et verbeux). Aujourd'hui, on a **Fetch API** : moderne, simple, basé sur des Promises.

---

## 🤔 C'est quoi Fetch API ?

> **Fetch API** = Fonction JavaScript **native** pour faire des **requêtes HTTP** (récupérer ou envoyer des données à un serveur).

**Analogie** :
- **Ton site** = Un restaurant
- **Fetch** = Un serveur qui va chercher les plats
- **API** = La cuisine (backend)
- **Données** = Les plats servis (JSON)

**Syntaxe de base** :

```javascript
fetch('https://api.example.com/data')
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error('Erreur :', error));
```

---

## 🚀 Ta première requête GET

### Exemple 1 : Récupérer des utilisateurs

```javascript
// API de test gratuite
fetch('https://jsonplaceholder.typicode.com/users')
  .then(response => response.json()) // Convertir en JSON
  .then(users => {
    console.log(users);
    // Afficher les noms
    users.forEach(user => console.log(user.name));
  })
  .catch(error => console.error('Erreur :', error));
```

**Ce qui se passe** :
1. `fetch()` envoie une requête GET
2. Le serveur répond (format JSON)
3. `.json()` convertit la réponse en objet JavaScript
4. Tu peux utiliser les données

### Exemple 2 : Afficher dans le HTML

```html
<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <title>Fetch API</title>
</head>
<body>
    <h1>Utilisateurs</h1>
    <ul id="users-list"></ul>

    <script>
        fetch('https://jsonplaceholder.typicode.com/users')
          .then(response => response.json())
          .then(users => {
              const list = document.getElementById('users-list');
              users.forEach(user => {
                  const li = document.createElement('li');
                  li.textContent = `${user.name} (${user.email})`;
                  list.appendChild(li);
              });
          })
          .catch(error => console.error('Erreur :', error));
    </script>
</body>
</html>
```

---

## 🎯 Requêtes HTTP : GET, POST, PUT, DELETE

### GET : Récupérer des données

```javascript
// Récupérer tous les posts
fetch('https://jsonplaceholder.typicode.com/posts')
  .then(res => res.json())
  .then(posts => console.log(posts));

// Récupérer un post spécifique (ID 1)
fetch('https://jsonplaceholder.typicode.com/posts/1')
  .then(res => res.json())
  .then(post => console.log(post));
```

### POST : Créer une ressource

```javascript
fetch('https://jsonplaceholder.typicode.com/posts', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    title: 'Mon nouveau post',
    body: 'Contenu du post...',
    userId: 1
  })
})
  .then(res => res.json())
  .then(data => console.log('Post créé :', data))
  .catch(error => console.error('Erreur :', error));
```

**Explications** :
- `method: 'POST'` : Type de requête
- `headers` : Infos sur le format (ici, JSON)
- `body` : Données envoyées (converties en JSON avec `JSON.stringify()`)

### PUT : Modifier une ressource (complètement)

```javascript
fetch('https://jsonplaceholder.typicode.com/posts/1', {
  method: 'PUT',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    id: 1,
    title: 'Titre modifié',
    body: 'Contenu modifié',
    userId: 1
  })
})
  .then(res => res.json())
  .then(data => console.log('Post modifié :', data));
```

### PATCH : Modifier partiellement

```javascript
fetch('https://jsonplaceholder.typicode.com/posts/1', {
  method: 'PATCH',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    title: 'Juste le titre modifié'
  })
})
  .then(res => res.json())
  .then(data => console.log('Post mis à jour :', data));
```

### DELETE : Supprimer une ressource

```javascript
fetch('https://jsonplaceholder.typicode.com/posts/1', {
  method: 'DELETE'
})
  .then(res => {
    if (res.ok) {
      console.log('Post supprimé !');
    }
  })
  .catch(error => console.error('Erreur :', error));
```

---

## ⚡ Async/Await (syntaxe moderne)

Les Promises avec `.then()` peuvent devenir difficiles à lire (callback hell). **Async/await** rend le code plus lisible.

### Avant (Promises)

```javascript
fetch('https://jsonplaceholder.typicode.com/users')
  .then(response => response.json())
  .then(users => {
    console.log(users);
  })
  .catch(error => console.error(error));
```

### Après (Async/Await)

```javascript
async function getUsers() {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const users = await response.json();
    console.log(users);
  } catch (error) {
    console.error('Erreur :', error);
  }
}

getUsers();
```

**Avantages** :
✅ Plus lisible (comme du code synchrone)
✅ Gestion d'erreurs avec `try/catch`
✅ Pas de chaîne de `.then()`

---

## 🛡️ Gestion des erreurs

### Erreur réseau (serveur down)

```javascript
async function getUsers() {
  try {
    const response = await fetch('https://api-qui-nexiste-pas.com/users');
    const users = await response.json();
    console.log(users);
  } catch (error) {
    console.error('❌ Erreur réseau :', error);
    // Afficher un message à l'utilisateur
    alert('Impossible de se connecter au serveur');
  }
}
```

### Erreur HTTP (404, 500...)

**Piège** : `fetch()` ne rejette PAS la Promise si le serveur répond avec une erreur HTTP (404, 500).

❌ **Mauvais** :
```javascript
fetch('https://jsonplaceholder.typicode.com/users/999999') // Utilisateur inexistant
  .then(res => res.json())
  .then(data => console.log(data))
  .catch(error => console.log('Erreur')); // Ne s'exécute PAS !
```

✅ **Bon** :
```javascript
async function getUser(id) {
  try {
    const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);

    // Vérifier le statut HTTP
    if (!response.ok) {
      throw new Error(`Erreur HTTP : ${response.status}`);
    }

    const user = await response.json();
    console.log(user);
  } catch (error) {
    console.error('❌ Erreur :', error.message);
  }
}

getUser(999999); // ❌ Erreur HTTP : 404
```

**Explications** :
- `response.ok` : `true` si status 200-299, `false` sinon
- `response.status` : Code HTTP (200, 404, 500...)

### Vérifier tous les cas

```javascript
async function safeFetch(url) {
  try {
    const response = await fetch(url);

    // Vérifier le statut
    if (!response.ok) {
      throw new Error(`Erreur ${response.status} : ${response.statusText}`);
    }

    // Vérifier si c'est du JSON
    const contentType = response.headers.get('content-type');
    if (!contentType || !contentType.includes('application/json')) {
      throw new Error('La réponse n\'est pas en JSON');
    }

    return await response.json();
  } catch (error) {
    console.error('❌ Fetch failed :', error.message);
    throw error; // Propager l'erreur
  }
}

// Utilisation
safeFetch('https://jsonplaceholder.typicode.com/users')
  .then(users => console.log(users))
  .catch(error => alert('Erreur lors du chargement'));
```

---

## 🔧 Options de Fetch

### Headers (en-têtes)

```javascript
fetch('https://api.example.com/data', {
  headers: {
    'Content-Type': 'application/json',
    'Authorization': 'Bearer ton_token_jwt',
    'Accept-Language': 'fr-FR'
  }
})
```

### Mode CORS

```javascript
fetch('https://api.autre-domaine.com/data', {
  mode: 'cors', // Par défaut
  credentials: 'include' // Envoie les cookies
})
```

### Timeout (annuler après X secondes)

```javascript
const controller = new AbortController();
const signal = controller.signal;

// Annuler après 5 secondes
setTimeout(() => controller.abort(), 5000);

try {
  const response = await fetch('https://api.example.com/data', { signal });
  const data = await response.json();
  console.log(data);
} catch (error) {
  if (error.name === 'AbortError') {
    console.log('❌ Requête annulée (timeout)');
  }
}
```

### Cache

```javascript
fetch('https://api.example.com/data', {
  cache: 'no-cache' // Force à récupérer depuis le serveur
})
```

Options :
- `default` : Cache standard
- `no-cache` : Pas de cache
- `reload` : Ignore le cache
- `force-cache` : Utilise le cache même si expiré

---

## 💻 Exemples pratiques

### 1. Afficher la météo

```html
<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <title>Météo</title>
</head>
<body>
    <h1>Météo à Paris</h1>
    <div id="weather"></div>

    <script>
        async function getWeather() {
            const API_KEY = 'ta_cle_api'; // Obtiens-la sur openweathermap.org
            const city = 'Paris';
            const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric&lang=fr`;

            try {
                const response = await fetch(url);
                if (!response.ok) throw new Error('Ville introuvable');

                const data = await response.json();

                const weatherDiv = document.getElementById('weather');
                weatherDiv.innerHTML = `
                    <p>Température : ${data.main.temp}°C</p>
                    <p>Description : ${data.weather[0].description}</p>
                    <p>Humidité : ${data.main.humidity}%</p>
                `;
            } catch (error) {
                console.error('❌ Erreur :', error);
                document.getElementById('weather').textContent = 'Erreur de chargement';
            }
        }

        getWeather();
    </script>
</body>
</html>
```

### 2. Formulaire de contact (POST)

```html
<form id="contact-form">
    <input type="text" id="name" placeholder="Nom" required>
    <input type="email" id="email" placeholder="Email" required>
    <textarea id="message" placeholder="Message" required></textarea>
    <button type="submit">Envoyer</button>
</form>

<div id="result"></div>

<script>
    document.getElementById('contact-form').addEventListener('submit', async (e) => {
        e.preventDefault(); // Empêche le rechargement de la page

        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;

        try {
            const response = await fetch('https://api.example.com/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ name, email, message })
            });

            if (!response.ok) throw new Error('Erreur serveur');

            const data = await response.json();
            document.getElementById('result').textContent = '✅ Message envoyé !';
            document.getElementById('contact-form').reset();
        } catch (error) {
            document.getElementById('result').textContent = '❌ Erreur d\'envoi';
            console.error(error);
        }
    });
</script>
```

### 3. Recherche en temps réel

```html
<input type="text" id="search" placeholder="Rechercher un utilisateur...">
<ul id="results"></ul>

<script>
    const searchInput = document.getElementById('search');
    const resultsDiv = document.getElementById('results');

    searchInput.addEventListener('input', async (e) => {
        const query = e.target.value.trim();

        if (query.length < 2) {
            resultsDiv.innerHTML = '';
            return;
        }

        try {
            const response = await fetch(`https://jsonplaceholder.typicode.com/users`);
            const users = await response.json();

            // Filtrer les utilisateurs
            const filtered = users.filter(user =>
                user.name.toLowerCase().includes(query.toLowerCase())
            );

            // Afficher les résultats
            resultsDiv.innerHTML = filtered.map(user =>
                `<li>${user.name} (${user.email})</li>`
            ).join('');
        } catch (error) {
            console.error('Erreur :', error);
        }
    });
</script>
```

### 4. Upload de fichier

```html
<input type="file" id="file-input">
<button onclick="uploadFile()">Upload</button>
<div id="status"></div>

<script>
    async function uploadFile() {
        const fileInput = document.getElementById('file-input');
        const file = fileInput.files[0];

        if (!file) {
            alert('Sélectionne un fichier');
            return;
        }

        const formData = new FormData();
        formData.append('file', file);

        try {
            const response = await fetch('https://api.example.com/upload', {
                method: 'POST',
                body: formData // Pas de Content-Type (auto détecté)
            });

            if (!response.ok) throw new Error('Erreur upload');

            const data = await response.json();
            document.getElementById('status').textContent = '✅ Fichier uploadé !';
        } catch (error) {
            document.getElementById('status').textContent = '❌ Erreur upload';
            console.error(error);
        }
    }
</script>
```

---

## 🔥 Fetch vs Axios

**Axios** = Librairie populaire pour les requêtes HTTP (alternative à Fetch).

### Fetch (natif)

```javascript
// Fetch
async function getUsers() {
    const response = await fetch('https://api.example.com/users');
    if (!response.ok) throw new Error('Erreur HTTP');
    const data = await response.json();
    return data;
}
```

### Axios (librairie)

```javascript
// Axios
import axios from 'axios';

async function getUsers() {
    const response = await axios.get('https://api.example.com/users');
    return response.data; // Pas besoin de .json()
}
```

### Comparatif

| Critère | Fetch | Axios |
|---------|-------|-------|
| **Installation** | Natif (rien à installer) | `npm install axios` |
| **Taille** | 0 KB (natif) | ~13 KB |
| **JSON auto** | Non (.json() requis) | Oui (response.data) |
| **Erreurs HTTP** | Ne rejette pas (vérifier .ok) | Rejette automatiquement |
| **Timeout** | AbortController | `timeout: 5000` |
| **Interceptors** | Non | Oui (middleware) |
| **Support IE** | Non (polyfill requis) | Oui |

**Quand utiliser Axios ?**
- Projets complexes (auth, interceptors)
- Support navigateurs anciens
- Tu veux moins de code boilerplate

**Quand utiliser Fetch ?**
- Projets simples
- Pas de dépendance externe
- Navigateurs modernes uniquement

---

## ❌ Erreurs courantes

### 1. Oublier `await response.json()`

❌ **Erreur** :
```javascript
const data = await fetch('https://api.example.com/users');
console.log(data); // [object Response] 😵
```

✅ **Correct** :
```javascript
const response = await fetch('https://api.example.com/users');
const data = await response.json();
console.log(data); // [{ id: 1, name: 'Jean' }, ...] ✅
```

### 2. Ne pas vérifier `response.ok`

❌ **Erreur** :
```javascript
const response = await fetch('https://api.example.com/users/999999');
const data = await response.json(); // Crash si 404
```

✅ **Correct** :
```javascript
const response = await fetch('https://api.example.com/users/999999');
if (!response.ok) throw new Error(`Erreur ${response.status}`);
const data = await response.json();
```

### 3. Oublier `try/catch`

❌ **Erreur** :
```javascript
const response = await fetch('https://api-qui-nexiste-pas.com/data');
// Si erreur réseau → crash non géré
```

✅ **Correct** :
```javascript
try {
    const response = await fetch('https://api-qui-nexiste-pas.com/data');
    const data = await response.json();
} catch (error) {
    console.error('Erreur :', error);
}
```

### 4. Mauvais headers pour POST/PUT

❌ **Erreur** :
```javascript
fetch('https://api.example.com/posts', {
    method: 'POST',
    body: JSON.stringify({ title: 'Post' })
    // Pas de Content-Type → erreur serveur
})
```

✅ **Correct** :
```javascript
fetch('https://api.example.com/posts', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ title: 'Post' })
})
```

---

## 🎓 Bonnes pratiques

### 1. Créer une fonction wrapper

```javascript
async function apiRequest(url, options = {}) {
    try {
        const response = await fetch(url, {
            headers: {
                'Content-Type': 'application/json',
                ...options.headers
            },
            ...options
        });

        if (!response.ok) {
            throw new Error(`HTTP ${response.status} : ${response.statusText}`);
        }

        return await response.json();
    } catch (error) {
        console.error('❌ API Error :', error);
        throw error;
    }
}

// Utilisation
const users = await apiRequest('https://api.example.com/users');
```

### 2. Ajouter un loader

```javascript
async function loadUsers() {
    const loader = document.getElementById('loader');
    const content = document.getElementById('content');

    loader.style.display = 'block'; // Afficher loader

    try {
        const users = await apiRequest('https://api.example.com/users');
        content.innerHTML = users.map(u => `<p>${u.name}</p>`).join('');
    } catch (error) {
        content.innerHTML = '<p>Erreur de chargement</p>';
    } finally {
        loader.style.display = 'none'; // Cacher loader
    }
}
```

### 3. Débouncer les recherches

```javascript
let timeout;
searchInput.addEventListener('input', (e) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => {
        search(e.target.value); // Cherche après 300ms d'inactivité
    }, 300);
});
```

---

## 🔗 Ressources pour aller plus loin

### Documentation
- [MDN - Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API)
- [JavaScript.info - Fetch](https://javascript.info/fetch)

### APIs publiques pour pratiquer
- [JSONPlaceholder](https://jsonplaceholder.typicode.com/) : Fake data (users, posts, comments)
- [The Cat API](https://thecatapi.com/) : Images de chats
- [OpenWeatherMap](https://openweathermap.org/api) : Météo
- [GitHub API](https://api.github.com) : Repos, users

---

## 💡 Conclusion

**Fetch API**, c'est :
- 🌐 **Requêtes HTTP** en JavaScript (GET, POST, PUT, DELETE)
- ⚡ **Async/Await** pour un code lisible
- 🛡️ **Gestion d'erreurs** avec `try/catch` et vérification de `response.ok`
- 📦 **Natif** (pas de librairie externe)

**Prochaine étape** : Crée un petit projet (météo, recherche d'images, TODO list avec API) pour pratiquer. C'est en faisant des requêtes réelles que tu maîtriseras !

🚀 **Mon conseil** : Utilise [JSONPlaceholder](https://jsonplaceholder.typicode.com/) pour tester sans créer de backend. Une fois à l'aise, connecte-toi à une vraie API (météo, GitHub, etc.).

---

**Prêt à continuer ?**
👉 Lis [C'est quoi une API REST ?](/blog/api-rest-cest-quoi) pour comprendre comment créer ton propre serveur API
👉 Découvre [C'est quoi Node.js ?](/blog/node-js-cest-quoi) pour le backend