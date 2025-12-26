---
title: "C'est quoi Redux ? State management React (Guide 2025)"
date: "2025-01-15"
category: "Web"
excerpt: "Redux est une librairie de gestion d'état pour React. Découvre comment centraliser l'état de ton app, éviter le prop drilling, et maîtriser Redux Toolkit."
readingTime: "10 min"
keywords: ["Redux", "React", "state management", "Redux Toolkit", "store", "actions", "reducers"]
---

# C'est quoi Redux ?

Tu codes une app React. Tu as du state dans `Header`, dans `Sidebar`, dans `ProductList`... et tu dois **passer des props sur 5 niveaux** pour accéder à une donnée. **C'est l'enfer** ! 😵

**Le problème** : **Prop drilling** (faire passer des props à travers plein de composants).

**La solution** : **Redux** ! Un **store global** accessible partout.

---

## 🤔 Définition simple

> **Redux** = Une librairie de **gestion d'état globale** pour React (et autres frameworks).

**État (state)** = Les données de ton app (user connecté, panier, posts, etc.).

**Analogie** :
- **Sans Redux** : Chaque personne a son propre stock de nourriture (prop drilling)
- **Avec Redux** : Un frigo central accessible par tous (store global)

---

## 🎯 Le problème que Redux résout

### Sans Redux (prop drilling)

```jsx
// App.jsx
function App() {
  const [user, setUser] = useState({ name: 'Jean' });

  return <Header user={user} />;
}

// Header.jsx
function Header({ user }) {
  return <Nav user={user} />;
}

// Nav.jsx
function Nav({ user }) {
  return <UserMenu user={user} />;
}

// UserMenu.jsx
function UserMenu({ user }) {
  return <div>Hello {user.name}</div>;
}
```

**Problème** : `user` traverse 3 composants juste pour arriver à `UserMenu` ! 😤

### Avec Redux

```jsx
// UserMenu.jsx
function UserMenu() {
  const user = useSelector(state => state.user);
  return <div>Hello {user.name}</div>;
}
```

**Magie** : Accès direct au `user` depuis n'importe où ! ✨

---

## 🏗️ Les 3 principes de Redux

### 1. Une seule source de vérité (Single Source of Truth)

**Tout l'état** de l'app est dans **un seul objet** appelé **store**.

```javascript
// Le store (objet global)
{
  user: { name: 'Jean', email: 'jean@example.com' },
  cart: [{ id: 1, name: 'Product A', qty: 2 }],
  posts: [...]
}
```

### 2. L'état est en lecture seule

Tu ne **modifies jamais** l'état directement.

❌ **Interdit** :
```javascript
state.user.name = 'Marie';
```

✅ **Correct** :
```javascript
dispatch({ type: 'user/setName', payload: 'Marie' });
```

### 3. Les changements via des fonctions pures (reducers)

**Reducer** = Fonction pure qui retourne un **nouvel état**.

```javascript
function userReducer(state, action) {
  if (action.type === 'user/setName') {
    return { ...state, name: action.payload };
  }
  return state;
}
```

---

## 🧩 Les concepts clés de Redux

### 1. Store

**Le store** = L'objet global qui contient tout l'état.

```javascript
import { createStore } from 'redux';

const store = createStore(rootReducer);
```

### 2. Actions

**Une action** = Un objet qui décrit **ce qui s'est passé**.

```javascript
// Action : "L'utilisateur a cliqué sur login"
{
  type: 'user/login',
  payload: { name: 'Jean', email: 'jean@example.com' }
}
```

**Action creator** (fonction qui crée une action) :
```javascript
function login(user) {
  return {
    type: 'user/login',
    payload: user
  };
}
```

### 3. Reducers

**Un reducer** = Fonction qui **calcule le nouvel état** en fonction de l'action.

```javascript
const initialState = { name: null, email: null };

function userReducer(state = initialState, action) {
  switch (action.type) {
    case 'user/login':
      return action.payload;
    case 'user/logout':
      return initialState;
    default:
      return state;
  }
}
```

### 4. Dispatch

**Dispatcher une action** = Envoyer une action au store pour modifier l'état.

```javascript
store.dispatch({ type: 'user/login', payload: { name: 'Jean' } });
```

### 5. Selector

**Sélectionner** = Lire une partie du state.

```javascript
const user = useSelector(state => state.user);
```

---

## 💻 Redux classique (l'ancienne façon)

### Installation

```bash
npm install redux react-redux
```

### Setup complet

**store.js** :
```javascript
import { createStore } from 'redux';

// Reducer
const initialState = { count: 0 };

function counterReducer(state = initialState, action) {
  switch (action.type) {
    case 'INCREMENT':
      return { count: state.count + 1 };
    case 'DECREMENT':
      return { count: state.count - 1 };
    default:
      return state;
  }
}

// Créer le store
const store = createStore(counterReducer);

export default store;
```

**App.jsx** :
```javascript
import { Provider } from 'react-redux';
import store from './store';
import Counter from './Counter';

function App() {
  return (
    <Provider store={store}>
      <Counter />
    </Provider>
  );
}
```

**Counter.jsx** :
```javascript
import { useSelector, useDispatch } from 'react-redux';

function Counter() {
  const count = useSelector(state => state.count);
  const dispatch = useDispatch();

  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={() => dispatch({ type: 'INCREMENT' })}>+</button>
      <button onClick={() => dispatch({ type: 'DECREMENT' })}>-</button>
    </div>
  );
}
```

**Problème** : Beaucoup de boilerplate (code répétitif) ! 😅

---

## 🔥 Redux Toolkit (la façon moderne - recommandée)

**Redux Toolkit** = La façon **officielle et moderne** d'utiliser Redux.

**Avantages** :
✅ **Moins de code** (plus de boilerplate)
✅ **Immer intégré** (mutations apparentes)
✅ **DevTools** configurés automatiquement
✅ **Best practices** par défaut

### Installation

```bash
npm install @reduxjs/toolkit react-redux
```

### Setup Redux Toolkit

**store.js** :
```javascript
import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './counterSlice';

const store = configureStore({
  reducer: {
    counter: counterReducer
  }
});

export default store;
```

**counterSlice.js** :
```javascript
import { createSlice } from '@reduxjs/toolkit';

const counterSlice = createSlice({
  name: 'counter',
  initialState: { value: 0 },
  reducers: {
    increment: (state) => {
      state.value += 1; // Mutation OK avec Immer !
    },
    decrement: (state) => {
      state.value -= 1;
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload;
    }
  }
});

export const { increment, decrement, incrementByAmount } = counterSlice.actions;
export default counterSlice.reducer;
```

**Counter.jsx** :
```javascript
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, incrementByAmount } from './counterSlice';

function Counter() {
  const count = useSelector(state => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={() => dispatch(increment())}>+1</button>
      <button onClick={() => dispatch(decrement())}>-1</button>
      <button onClick={() => dispatch(incrementByAmount(5))}>+5</button>
    </div>
  );
}
```

**Résultat** : **50% moins de code** qu'avec Redux classique ! 🎉

---

## 🚀 Exemple complet : TODO List avec Redux Toolkit

**todosSlice.js** :
```javascript
import { createSlice } from '@reduxjs/toolkit';

const todosSlice = createSlice({
  name: 'todos',
  initialState: [],
  reducers: {
    addTodo: (state, action) => {
      state.push({
        id: Date.now(),
        text: action.payload,
        completed: false
      });
    },
    toggleTodo: (state, action) => {
      const todo = state.find(t => t.id === action.payload);
      if (todo) todo.completed = !todo.completed;
    },
    deleteTodo: (state, action) => {
      return state.filter(t => t.id !== action.payload);
    }
  }
});

export const { addTodo, toggleTodo, deleteTodo } = todosSlice.actions;
export default todosSlice.reducer;
```

**store.js** :
```javascript
import { configureStore } from '@reduxjs/toolkit';
import todosReducer from './todosSlice';

export const store = configureStore({
  reducer: {
    todos: todosReducer
  }
});
```

**TodoList.jsx** :
```javascript
import { useSelector, useDispatch } from 'react-redux';
import { addTodo, toggleTodo, deleteTodo } from './todosSlice';
import { useState } from 'react';

function TodoList() {
  const todos = useSelector(state => state.todos);
  const dispatch = useDispatch();
  const [input, setInput] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.trim()) {
      dispatch(addTodo(input));
      setInput('');
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Nouvelle tâche"
        />
        <button type="submit">Ajouter</button>
      </form>

      <ul>
        {todos.map(todo => (
          <li key={todo.id}>
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={() => dispatch(toggleTodo(todo.id))}
            />
            <span style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
              {todo.text}
            </span>
            <button onClick={() => dispatch(deleteTodo(todo.id))}>❌</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
```

---

## 🌐 Redux avec API (async)

**Problème** : Fetch est asynchrone, Redux est synchrone.

**Solution** : **createAsyncThunk** (Redux Toolkit).

**usersSlice.js** :
```javascript
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// Thunk async
export const fetchUsers = createAsyncThunk(
  'users/fetchUsers',
  async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    return response.json();
  }
);

const usersSlice = createSlice({
  name: 'users',
  initialState: {
    users: [],
    loading: false,
    error: null
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchUsers.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.loading = false;
        state.users = action.payload;
      })
      .addCase(fetchUsers.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  }
});

export default usersSlice.reducer;
```

**UsersList.jsx** :
```javascript
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchUsers } from './usersSlice';

function UsersList() {
  const { users, loading, error } = useSelector(state => state.users);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  if (loading) return <p>Chargement...</p>;
  if (error) return <p>Erreur : {error}</p>;

  return (
    <ul>
      {users.map(user => (
        <li key={user.id}>{user.name}</li>
      ))}
    </ul>
  );
}
```

---

## 🛠️ Redux DevTools

**Extension navigateur** qui permet de :
- ✅ Voir tout le state en temps réel
- ✅ Voir toutes les actions dispatchées
- ✅ Time-travel debugging (revenir en arrière)

**Installation** :
🔗 [Redux DevTools Extension](https://chrome.google.com/webstore/detail/redux-devtools)

**Déjà activé** avec Redux Toolkit ! Pas de config.

---

## 🆚 Redux vs Context API

| Critère | Redux | Context API |
|---------|-------|-------------|
| **Setup** | Complexe | Simple |
| **Performance** | Optimisé | Re-renders fréquents |
| **DevTools** | Excellents | Basiques |
| **Middleware** | Oui (thunks, sagas) | Non |
| **Courbe apprentissage** | Élevée | Faible |
| **Cas d'usage** | Apps moyennes/grandes | Apps petites |

**Quand utiliser Redux ?**
- ✅ App moyenne/grande (10+ composants)
- ✅ State complexe (multi-niveaux)
- ✅ Besoin de time-travel debugging
- ✅ Beaucoup d'actions async (API)

**Quand utiliser Context ?**
- ✅ App simple (5-10 composants)
- ✅ State simple (user, theme)
- ✅ Pas besoin de debugging avancé

---

## 🎓 Bonnes pratiques Redux

### 1. Structure des dossiers (feature-based)

```
src/
├── features/
│   ├── counter/
│   │   ├── Counter.jsx
│   │   └── counterSlice.js
│   ├── todos/
│   │   ├── TodoList.jsx
│   │   └── todosSlice.js
│   └── users/
│       ├── UsersList.jsx
│       └── usersSlice.js
└── app/
    └── store.js
```

### 2. Normaliser les données

❌ **Mauvais** (données imbriquées) :
```javascript
{
  posts: [
    { id: 1, title: 'Post 1', author: { id: 1, name: 'Jean' } },
    { id: 2, title: 'Post 2', author: { id: 1, name: 'Jean' } } // Duplication
  ]
}
```

✅ **Bon** (normalisé) :
```javascript
{
  posts: {
    1: { id: 1, title: 'Post 1', authorId: 1 },
    2: { id: 2, title: 'Post 2', authorId: 1 }
  },
  authors: {
    1: { id: 1, name: 'Jean' }
  }
}
```

### 3. Utilise createEntityAdapter (Redux Toolkit)

Pour gérer des collections (CRUD) :

```javascript
import { createSlice, createEntityAdapter } from '@reduxjs/toolkit';

const postsAdapter = createEntityAdapter();

const postsSlice = createSlice({
  name: 'posts',
  initialState: postsAdapter.getInitialState(),
  reducers: {
    addPost: postsAdapter.addOne,
    updatePost: postsAdapter.updateOne,
    deletePost: postsAdapter.removeOne
  }
});
```

---

## ❌ Erreurs courantes

### 1. Modifier le state directement

❌ **Interdit (Redux classique)** :
```javascript
state.user.name = 'Marie';
```

✅ **OK (Redux Toolkit avec Immer)** :
```javascript
state.user.name = 'Marie'; // Immer gère l'immutabilité
```

### 2. Trop de state dans Redux

**Pas besoin de mettre** :
- ❌ État local d'un formulaire
- ❌ UI temporaire (modal ouvert/fermé)
- ❌ Données dérivées (calculables)

**Mettre dans Redux** :
- ✅ User connecté
- ✅ Panier e-commerce
- ✅ Liste de posts (API)

### 3. Oublier Provider

❌ **Erreur** :
```javascript
<App />
```

✅ **Correct** :
```javascript
<Provider store={store}>
  <App />
</Provider>
```

---

## 💡 Conclusion

**Redux**, c'est :
- 🗃️ **Store global** pour l'état de ton app
- 🔄 **Actions + Reducers** pour modifier l'état
- ⚡ **Redux Toolkit** (moderne, moins de code)
- 🛠️ **DevTools** puissants (time-travel)

**Quand l'utiliser ?**
- ✅ Apps moyennes/grandes
- ✅ State complexe partagé
- ✅ Beaucoup d'async (API)

**Alternatives** :
- **Context API** (petites apps)
- **Zustand** (simple et moderne)
- **Jotai** / **Recoil** (atomic state)

**Prochaine étape** : Crée une TODO app avec Redux Toolkit pour comprendre le flow !

🚀 **Mon conseil** : Utilise **Redux Toolkit**, pas Redux classique. C'est la façon officielle et moderne en 2025 !

---

**Prêt à maîtriser Redux ?**
👉 Lis [C'est quoi React ?](/blog/react-cest-quoi) pour les bases de React
👉 Découvre [Zustand vs Redux](/blog/zustand-vs-redux) pour comparer les alternatives