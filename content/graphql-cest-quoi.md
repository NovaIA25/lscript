---
title: "C'est quoi GraphQL ? L'API moderne qui remplace REST (2025)"
date: "2025-01-15"
category: "Concepts"
excerpt: "GraphQL est un langage de requête pour API créé par Facebook. Découvre comment il révolutionne la communication client-serveur et pourquoi il remplace REST."
readingTime: "11 min"
keywords: ["GraphQL", "API", "REST", "Apollo", "requête", "mutation", "schema", "Facebook"]
---

# C'est quoi GraphQL ?

Tu as probablement entendu parler de **REST API**. Mais depuis quelques années, un nouveau standard émerge : **GraphQL**.

**GraphQL** = Un langage de **requête** pour API qui te permet de demander **exactement** les données dont tu as besoin.

**Chiffres** :
- Créé par **Facebook** en 2012 (open-source en 2015)
- Utilisé par **Netflix, Shopify, GitHub, Twitter, Airbnb**
- **+300%** d'adoption depuis 2020

Si tu développes des applications modernes, **GraphQL** devient incontournable ! 🚀

---

## 🤔 Définition simple

> **GraphQL** = Un langage de requête pour API qui te permet de demander **précisément** les données dont tu as besoin.

**Analogie** :
- **REST** = Menu fixe au restaurant (entrée + plat + dessert, pas le choix)
- **GraphQL** = Menu à la carte (tu choisis exactement ce que tu veux)

**Exemple concret** :

**REST** :
```
GET /user/123        → { id, name, email, age, address, ... }
GET /user/123/posts  → [ { id, title, content, ... }, ... ]
```

Tu dois faire **2 requêtes** et tu reçois **trop de données** (over-fetching).

**GraphQL** :
```graphql
query {
  user(id: 123) {
    name
    email
    posts {
      title
    }
  }
}
```

**1 seule requête**, et tu reçois **exactement** ce que tu demandes ! ✨

---

## �� Pourquoi GraphQL existe ?

### Les problèmes de REST

**1. Over-fetching** (trop de données)
```
GET /user/123
→ { id, name, email, age, address, phone, bio, avatar, ... }
```

Tu veux juste le **nom**, mais tu reçois **tout** !

**2. Under-fetching** (pas assez de données)
```
GET /user/123  → Pas de posts
GET /user/123/posts → Liste des posts
GET /posts/1  → Détails d'un post
```

Tu dois faire **3 requêtes** pour avoir toutes les infos.

**3. Endpoints multiples**
```
GET /users
GET /users/:id
GET /users/:id/posts
GET /users/:id/followers
GET /posts
GET /posts/:id
GET /posts/:id/comments
...
```

**10+ endpoints** pour une app simple !

---

### La solution GraphQL

**1 seul endpoint** : `POST /graphql`

**Tu demandes exactement ce dont tu as besoin** :
```graphql
query {
  user(id: 123) {
    name
    email
    posts(limit: 5) {
      title
      comments {
        author
        text
      }
    }
  }
}
```

**Résultat** :
```json
{
  "data": {
    "user": {
      "name": "Jean Dupont",
      "email": "jean@example.com",
      "posts": [
        {
          "title": "Mon premier article",
          "comments": [
            { "author": "Marie", "text": "Super article !" }
          ]
        }
      ]
    }
  }
}
```

**1 seule requête**, **données exactes**, **pas de over-fetching** ! 🎉

---

## 🚀 Comment fonctionne GraphQL ?

### Architecture

```
┌─────────────┐
│   Client    │
│  (React)    │
└──────┬──────┘
       │ Query GraphQL
       ▼
┌─────────────────┐
│  Serveur GraphQL│
│   (Apollo)      │
└──────┬──────────┘
       │
       ▼
┌─────────────────┐
│  Base de données│
│  (PostgreSQL)   │
└─────────────────┘
```

**Étapes** :
1. Le client envoie une **query** GraphQL
2. Le serveur GraphQL **résout** la query
3. Le serveur retourne **exactement** les données demandées

---

## 📝 Les 3 opérations GraphQL

### 1. Query (lecture)

**Lire des données** (comme `GET` en REST).

```graphql
query {
  user(id: 123) {
    name
    email
  }
}
```

**Réponse** :
```json
{
  "data": {
    "user": {
      "name": "Jean Dupont",
      "email": "jean@example.com"
    }
  }
}
```

---

### 2. Mutation (écriture)

**Modifier des données** (comme `POST`, `PUT`, `DELETE` en REST).

```graphql
mutation {
  createUser(name: "Marie", email: "marie@example.com") {
    id
    name
  }
}
```

**Réponse** :
```json
{
  "data": {
    "createUser": {
      "id": 456,
      "name": "Marie"
    }
  }
}
```

---

### 3. Subscription (temps réel)

**Écouter des mises à jour** (WebSocket).

```graphql
subscription {
  messageAdded {
    id
    text
    author
  }
}
```

**Résultat** : Le client reçoit les nouveaux messages en temps réel ! 🔥

---

## 🛠️ Schema GraphQL

**Schema** = La définition des types de données disponibles.

**Exemple** :
```graphql
type User {
  id: ID!
  name: String!
  email: String!
  age: Int
  posts: [Post!]!
}

type Post {
  id: ID!
  title: String!
  content: String!
  author: User!
  comments: [Comment!]!
}

type Comment {
  id: ID!
  text: String!
  author: User!
}

type Query {
  user(id: ID!): User
  users: [User!]!
  post(id: ID!): Post
}

type Mutation {
  createUser(name: String!, email: String!): User
  deleteUser(id: ID!): Boolean
}
```

**Explications** :
- `!` = Champ obligatoire
- `[Post!]!` = Liste non-null de Posts non-null
- `ID` = Identifiant unique
- `Int`, `String`, `Boolean` = Types de base

---

## 🔧 Créer un serveur GraphQL (Node.js)

### Installation

```bash
npm install apollo-server graphql
```

---

### Serveur simple

**server.js** :
```javascript
const { ApolloServer, gql } = require('apollo-server');

// 1. Définir le schema
const typeDefs = gql`
  type User {
    id: ID!
    name: String!
    email: String!
  }

  type Query {
    users: [User!]!
    user(id: ID!): User
  }

  type Mutation {
    createUser(name: String!, email: String!): User
  }
`;

// 2. Fausses données (en vrai : BDD)
const users = [
  { id: '1', name: 'Jean Dupont', email: 'jean@example.com' },
  { id: '2', name: 'Marie Martin', email: 'marie@example.com' },
];

// 3. Résoudre les queries
const resolvers = {
  Query: {
    users: () => users,
    user: (parent, args) => users.find(user => user.id === args.id),
  },
  Mutation: {
    createUser: (parent, args) => {
      const newUser = {
        id: String(users.length + 1),
        name: args.name,
        email: args.email,
      };
      users.push(newUser);
      return newUser;
    },
  },
};

// 4. Créer le serveur
const server = new ApolloServer({ typeDefs, resolvers });

server.listen().then(({ url }) => {
  console.log(`🚀 Serveur GraphQL prêt sur ${url}`);
});
```

---

### Lancer le serveur

```bash
node server.js
```

Ouvre http://localhost:4000 → **Apollo Playground** ! 🎉

---

### Tester les queries

**Query 1** : Lister tous les utilisateurs
```graphql
query {
  users {
    id
    name
    email
  }
}
```

**Query 2** : Récupérer un utilisateur
```graphql
query {
  user(id: "1") {
    name
    email
  }
}
```

**Mutation** : Créer un utilisateur
```graphql
mutation {
  createUser(name: "Paul", email: "paul@example.com") {
    id
    name
  }
}
```

---

## 💻 Client GraphQL (React)

### Installation

```bash
npm install @apollo/client graphql
```

---

### Configuration Apollo Client

**index.js** :
```javascript
import React from 'react';
import ReactDOM from 'react-dom/client';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import App from './App';

// Créer le client Apollo
const client = new ApolloClient({
  uri: 'http://localhost:4000',
  cache: new InMemoryCache(),
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>
);
```

---

### Composant React avec query

**App.js** :
```javascript
import { useQuery, gql } from '@apollo/client';

// Définir la query
const GET_USERS = gql`
  query GetUsers {
    users {
      id
      name
      email
    }
  }
`;

function App() {
  const { loading, error, data } = useQuery(GET_USERS);

  if (loading) return <p>Chargement...</p>;
  if (error) return <p>Erreur : {error.message}</p>;

  return (
    <div>
      <h1>Utilisateurs</h1>
      <ul>
        {data.users.map(user => (
          <li key={user.id}>
            {user.name} - {user.email}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
```

**Résultat** : Liste des utilisateurs affichée ! ✨

---

### Mutation (créer un utilisateur)

```javascript
import { useMutation, gql } from '@apollo/client';
import { useState } from 'react';

const CREATE_USER = gql`
  mutation CreateUser($name: String!, $email: String!) {
    createUser(name: $name, email: $email) {
      id
      name
      email
    }
  }
`;

function CreateUser() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [createUser, { data, loading, error }] = useMutation(CREATE_USER);

  const handleSubmit = (e) => {
    e.preventDefault();
    createUser({ variables: { name, email } });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Nom"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <button type="submit" disabled={loading}>
        Créer
      </button>
      {data && <p>Utilisateur créé : {data.createUser.name}</p>}
      {error && <p>Erreur : {error.message}</p>}
    </form>
  );
}
```

---

## 🆚 GraphQL vs REST

| Critère | REST | GraphQL |
|---------|------|---------|
| **Endpoints** | Multiples (`/users`, `/posts`) | 1 seul (`/graphql`) |
| **Over-fetching** | ❌ Oui (trop de données) | ✅ Non |
| **Under-fetching** | ❌ Oui (requêtes multiples) | ✅ Non |
| **Versionning** | `/v1/users`, `/v2/users` | Pas de version (évolution schema) |
| **Documentation** | Manuelle | Auto-générée (introspection) |
| **Cache** | HTTP cache facile | Plus complexe |
| **Temps réel** | Difficile (polling, SSE) | Subscriptions natives |
| **Courbe apprentissage** | Facile | Moyenne |

---

## 🔥 Avantages GraphQL

✅ **1 seule requête** pour récupérer des données complexes
✅ **Pas de over-fetching** (économie de bande passante)
✅ **Pas de under-fetching** (performance mobile)
✅ **Documentation auto** (introspection)
✅ **Typage fort** (erreurs détectées avant exécution)
✅ **Évolution facile** (pas de versioning)
✅ **Temps réel** (subscriptions WebSocket)
✅ **Outils puissants** (Apollo, GraphQL Playground)

---

## ❌ Inconvénients GraphQL

❌ **Courbe d'apprentissage** (plus complexe que REST)
❌ **Cache HTTP difficile** (toujours `POST /graphql`)
❌ **Surcharge serveur** (queries complexes = lent)
❌ **Pas adapté pour fichiers** (uploads compliqués)
❌ **Overhead initial** (schema, resolvers)

---

## 🛠️ Écosystème GraphQL

### Serveurs

**Node.js** :
- **Apollo Server** (le plus populaire)
- **GraphQL Yoga**
- **Express GraphQL**

**Python** :
- **Graphene**
- **Strawberry**

**PHP** :
- **Lighthouse** (Laravel)

**Ruby** :
- **GraphQL Ruby**

---

### Clients

**JavaScript** :
- **Apollo Client** (React, Vue, Angular)
- **Relay** (Facebook, pour React)
- **urql** (léger)

**Mobile** :
- **Apollo iOS** (Swift)
- **Apollo Android** (Kotlin)

---

### Outils

**GraphQL Playground** : Interface pour tester les queries
**GraphiQL** : Alternative à Playground
**Apollo Studio** : Monitoring et analytics
**GraphQL Code Generator** : Génère du code TypeScript depuis le schema

---

## 🎯 Cas d'usage GraphQL

### ✅ Quand utiliser GraphQL ?

✅ **Applications mobiles** (économiser la bande passante)
✅ **SaaS complexes** (données relationnelles)
✅ **Dashboards** (agrégation de données)
✅ **Apps temps réel** (chat, notifications)
✅ **APIs publiques** (GitHub, Shopify)

**Exemples** :
- **GitHub API v4** = GraphQL
- **Shopify Storefront API** = GraphQL
- **Gatsby** (générateur de sites) = GraphQL

---

### ❌ Quand NE PAS utiliser GraphQL ?

❌ **CRUD simple** (REST suffit)
❌ **Upload de fichiers** (REST plus adapté)
❌ **Cache HTTP critique** (REST meilleur)
❌ **Équipe débutante** (REST plus facile)

---

## 🚀 Exemple complet : Blog GraphQL

### Schema

```graphql
type User {
  id: ID!
  name: String!
  email: String!
  posts: [Post!]!
}

type Post {
  id: ID!
  title: String!
  content: String!
  author: User!
  comments: [Comment!]!
  createdAt: String!
}

type Comment {
  id: ID!
  text: String!
  author: User!
  post: Post!
}

type Query {
  posts: [Post!]!
  post(id: ID!): Post
  user(id: ID!): User
}

type Mutation {
  createPost(title: String!, content: String!, authorId: ID!): Post
  deletePost(id: ID!): Boolean
  addComment(postId: ID!, text: String!, authorId: ID!): Comment
}

type Subscription {
  postAdded: Post
}
```

---

### Resolvers

```javascript
const resolvers = {
  Query: {
    posts: () => posts,
    post: (parent, args) => posts.find(p => p.id === args.id),
    user: (parent, args) => users.find(u => u.id === args.id),
  },

  Mutation: {
    createPost: (parent, args) => {
      const newPost = {
        id: String(posts.length + 1),
        title: args.title,
        content: args.content,
        authorId: args.authorId,
        createdAt: new Date().toISOString(),
      };
      posts.push(newPost);
      pubsub.publish('POST_ADDED', { postAdded: newPost });
      return newPost;
    },

    addComment: (parent, args) => {
      const newComment = {
        id: String(comments.length + 1),
        text: args.text,
        authorId: args.authorId,
        postId: args.postId,
      };
      comments.push(newComment);
      return newComment;
    },
  },

  Subscription: {
    postAdded: {
      subscribe: () => pubsub.asyncIterator(['POST_ADDED']),
    },
  },

  // Résoudre les relations
  Post: {
    author: (post) => users.find(u => u.id === post.authorId),
    comments: (post) => comments.filter(c => c.postId === post.id),
  },

  User: {
    posts: (user) => posts.filter(p => p.authorId === user.id),
  },

  Comment: {
    author: (comment) => users.find(u => u.id === comment.authorId),
    post: (comment) => posts.find(p => p.id === comment.postId),
  },
};
```

---

### Query complexe

```graphql
query {
  posts {
    id
    title
    author {
      name
      email
    }
    comments {
      text
      author {
        name
      }
    }
  }
}
```

**Résultat** : Tous les posts avec auteurs et commentaires en **1 seule requête** ! 🚀

---

## 💡 Astuces avancées

### 1. Fragments (réutiliser des champs)

```graphql
fragment UserFields on User {
  id
  name
  email
}

query {
  user(id: "1") {
    ...UserFields
    posts {
      title
      author {
        ...UserFields
      }
    }
  }
}
```

---

### 2. Variables

```graphql
query GetUser($userId: ID!) {
  user(id: $userId) {
    name
    email
  }
}
```

**Variables** :
```json
{
  "userId": "123"
}
```

---

### 3. Aliases (renommer les champs)

```graphql
query {
  user1: user(id: "1") {
    name
  }
  user2: user(id: "2") {
    name
  }
}
```

---

### 4. Directives (@include, @skip)

```graphql
query GetUser($withEmail: Boolean!) {
  user(id: "1") {
    name
    email @include(if: $withEmail)
  }
}
```

---

## 🎯 Roadmap : Maîtriser GraphQL

### Niveau débutant (2-3 semaines)
✅ Comprendre les concepts (query, mutation, schema)
✅ Créer un serveur GraphQL simple (Apollo Server)
✅ Tester avec Apollo Playground
✅ Client React avec Apollo Client

### Niveau intermédiaire (1-2 mois)
✅ Relations entre types
✅ Authentification (JWT)
✅ Pagination
✅ Error handling
✅ Subscriptions (temps réel)

### Niveau avancé (3+ mois)
✅ DataLoader (résoudre le problème N+1)
✅ Cache optimization
✅ Schema stitching (combiner plusieurs APIs)
✅ Performance monitoring (Apollo Studio)

---

## 💡 Conclusion

**GraphQL**, c'est :
- 🚀 Un **langage de requête** pour API
- ✅ **1 seule requête** pour des données complexes
- 📊 **Pas de over-fetching** (économie de bande passante)
- 🔥 **Temps réel** (subscriptions)
- 🛠️ Utilisé par **Netflix, Shopify, GitHub, Airbnb**

**Quand utiliser GraphQL ?**
- ✅ Applications mobiles
- ✅ SaaS complexes
- ✅ Apps temps réel
- ✅ APIs publiques

**Prochaine étape** : Crée ton premier serveur GraphQL avec Apollo Server !

🚀 **Mon conseil** : Si tu développes une app moderne avec React/Vue et beaucoup de données relationnelles, GraphQL est un **game-changer** ! Commence par un petit projet pour apprendre.

---

**Prêt à essayer GraphQL ?**
👉 Suis le [tutoriel Apollo Server](https://www.apollographql.com/docs/apollo-server/)
👉 Explore l'[API GitHub GraphQL](https://docs.github.com/en/graphql)
👉 Lis [GraphQL vs REST : Guide complet](/blog/graphql-vs-rest) pour approfondir