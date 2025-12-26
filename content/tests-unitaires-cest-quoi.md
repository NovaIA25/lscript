---
title: "C'est quoi les tests unitaires ? (Guide complet 2025)"
date: "2025-01-15"
category: "Outils"
excerpt: "Les tests unitaires vérifient automatiquement que ton code fonctionne. Découvre pourquoi c'est essentiel, comment écrire des tests (Jest, Vitest), et les bonnes pratiques TDD."
readingTime: "11 min"
keywords: ["tests unitaires", "Jest", "Vitest", "TDD", "testing", "JavaScript", "Node.js", "React"]
---

# C'est quoi les tests unitaires ?

Tu viens de terminer une feature. Tu testes manuellement : **ça marche** ! ✅

Deux semaines plus tard, tu modifies une autre partie du code... **et la première feature est cassée** 😱

**Le problème** : Tu ne peux pas tout re-tester manuellement à chaque modification.

**La solution** : Les **tests unitaires** !

---

## 🤔 Définition simple

> **Un test unitaire** = Un petit programme qui **vérifie automatiquement** qu'une **fonction** fait ce qu'elle doit faire.

**Analogie** :
- **Sans tests** : Vérifier manuellement que ta voiture freine avant chaque trajet
- **Avec tests** : Un voyant sur le tableau de bord te dit si les freins fonctionnent

**Objectif** : Détecter les bugs **automatiquement** avant qu'ils arrivent en production.

---

## 🎯 Pourquoi écrire des tests ?

### Les avantages

✅ **Détecte les bugs avant la prod**
```javascript
// Sans tests : Bug découvert en prod par les users 😵
// Avec tests : Bug détecté en 2 secondes lors du commit ✅
```

✅ **Facilite le refactoring**
```javascript
// Tu modifies du code ? Les tests te disent si tu casses quelque chose
```

✅ **Documentation vivante**
```javascript
// Les tests montrent COMMENT utiliser tes fonctions
test('addition de 2 nombres', () => {
    expect(add(2, 3)).toBe(5);
});
```

✅ **Confiance dans ton code**
```javascript
// 100% de couverture de tests = Tu dors tranquille 😴
```

✅ **Travail en équipe facilité**
```javascript
// Nouveau dev ? Il modifie, les tests disent si ça casse
```

### Les chiffres (monde professionnel)

- **40% de bugs en moins** avec tests unitaires (IBM Research)
- **80%+ des projets** open-source populaires ont des tests
- **Requis** dans 90% des offres d'emploi senior

**Conclusion** : Pas de tests = Code amateur. Avec tests = Code pro.

---

## 💻 Ton premier test unitaire (Jest)

### 1️⃣ Installation

```bash
mkdir projet-tests
cd projet-tests
npm init -y
npm install --save-dev jest
```

### 2️⃣ Créer une fonction simple

```javascript
// math.js
function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

module.exports = { add, subtract };
```

### 3️⃣ Écrire le test

```javascript
// math.test.js
const { add, subtract } = require('./math');

test('addition de 2 + 3 donne 5', () => {
    expect(add(2, 3)).toBe(5);
});

test('soustraction de 5 - 3 donne 2', () => {
    expect(subtract(5, 3)).toBe(2);
});

test('addition avec nombres négatifs', () => {
    expect(add(-2, -3)).toBe(-5);
});
```

### 4️⃣ Configurer package.json

```json
{
  "scripts": {
    "test": "jest"
  }
}
```

### 5️⃣ Lancer les tests

```bash
npm test
```

**Résultat** :

```
 PASS  ./math.test.js
  ✓ addition de 2 + 3 donne 5 (2 ms)
  ✓ soustraction de 5 - 3 donne 2 (1 ms)
  ✓ addition avec nombres négatifs (1 ms)

Test Suites: 1 passed, 1 total
Tests:       3 passed, 3 total
Time:        1.234 s
```

**Bravo !** Tu as écrit tes premiers tests 🎉

---

## 🧪 Les différents types de tests

| Type | Description | Exemples |
|------|-------------|----------|
| **Tests unitaires** | Testent une **fonction isolée** | `add(2, 3)` → `5` |
| **Tests d'intégration** | Testent **plusieurs modules ensemble** | API + BDD |
| **Tests E2E** | Testent le **parcours utilisateur complet** | Selenium, Playwright |
| **Tests de performance** | Vérifient la **vitesse** | Lighthouse, k6 |

**Focus de cet article** : **Tests unitaires** (les plus courants).

---

## 📚 Jest : Syntaxe et matchers

### test() et describe()

```javascript
// Regrouper des tests
describe('Math functions', () => {
    test('addition fonctionne', () => {
        expect(add(2, 3)).toBe(5);
    });

    test('soustraction fonctionne', () => {
        expect(subtract(5, 3)).toBe(2);
    });
});
```

### Matchers courants

```javascript
// Égalité stricte
expect(2 + 2).toBe(4);

// Égalité d'objets/tableaux
expect({ name: 'Jean' }).toEqual({ name: 'Jean' });

// Vérifier undefined/null
expect(undefined).toBeUndefined();
expect(null).toBeNull();

// Booléens
expect(true).toBeTruthy();
expect(false).toBeFalsy();

// Nombres
expect(10).toBeGreaterThan(5);
expect(5).toBeLessThan(10);
expect(0.1 + 0.2).toBeCloseTo(0.3); // Évite erreurs virgule flottante

// Strings
expect('Hello World').toContain('World');
expect('test@email.com').toMatch(/\S+@\S+\.\S+/);

// Tableaux
expect([1, 2, 3]).toContain(2);
expect([1, 2, 3]).toHaveLength(3);

// Exceptions
expect(() => {
    throw new Error('Oops');
}).toThrow('Oops');
```

---

## 🔥 Exemples pratiques

### Test 1 : Fonction de validation d'email

```javascript
// validators.js
function isValidEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}

module.exports = { isValidEmail };
```

```javascript
// validators.test.js
const { isValidEmail } = require('./validators');

describe('Email validation', () => {
    test('email valide', () => {
        expect(isValidEmail('jean@example.com')).toBe(true);
    });

    test('email sans @', () => {
        expect(isValidEmail('jeanexample.com')).toBe(false);
    });

    test('email sans domaine', () => {
        expect(isValidEmail('jean@')).toBe(false);
    });

    test('string vide', () => {
        expect(isValidEmail('')).toBe(false);
    });
});
```

### Test 2 : Fonction avec API (mock)

```javascript
// user.js
async function fetchUser(id) {
    const response = await fetch(`https://api.example.com/users/${id}`);
    return response.json();
}

module.exports = { fetchUser };
```

```javascript
// user.test.js
const { fetchUser } = require('./user');

// Mock de fetch
global.fetch = jest.fn(() =>
    Promise.resolve({
        json: () => Promise.resolve({ id: 1, name: 'Jean' })
    })
);

test('fetchUser retourne un utilisateur', async () => {
    const user = await fetchUser(1);
    expect(user).toEqual({ id: 1, name: 'Jean' });
    expect(fetch).toHaveBeenCalledWith('https://api.example.com/users/1');
});
```

### Test 3 : Composant React

```javascript
// Button.jsx
export default function Button({ onClick, children }) {
    return <button onClick={onClick}>{children}</button>;
}
```

```javascript
// Button.test.jsx
import { render, screen, fireEvent } from '@testing-library/react';
import Button from './Button';

test('affiche le texte du bouton', () => {
    render(<Button>Cliquer</Button>);
    expect(screen.getByText('Cliquer')).toBeInTheDocument();
});

test('appelle onClick au clic', () => {
    const handleClick = jest.fn();
    render(<Button onClick={handleClick}>Cliquer</Button>);

    fireEvent.click(screen.getByText('Cliquer'));
    expect(handleClick).toHaveBeenCalledTimes(1);
});
```

---

## 🎨 TDD : Test-Driven Development

**TDD** = Écrire les **tests AVANT** le code.

### Le cycle Red-Green-Refactor

1. **Red** : Écris un test qui échoue (fonction pas encore écrite)
2. **Green** : Écris le code minimal pour passer le test
3. **Refactor** : Améliore le code (sans casser les tests)

### Exemple : Fonction `isPalindrome`

**Étape 1 : Red (test échoue)**

```javascript
// palindrome.test.js
const { isPalindrome } = require('./palindrome');

test('radar est un palindrome', () => {
    expect(isPalindrome('radar')).toBe(true);
});

// Test échoue : isPalindrome n'existe pas encore
```

**Étape 2 : Green (code minimal)**

```javascript
// palindrome.js
function isPalindrome(str) {
    return str === str.split('').reverse().join('');
}

module.exports = { isPalindrome };

// Test passe ✅
```

**Étape 3 : Refactor + autres tests**

```javascript
// Ajouter plus de tests
test('kayak est un palindrome', () => {
    expect(isPalindrome('kayak')).toBe(true);
});

test('hello n\'est pas un palindrome', () => {
    expect(isPalindrome('hello')).toBe(false);
});

test('ignorer la casse : Radar', () => {
    expect(isPalindrome('Radar'.toLowerCase())).toBe(true);
});
```

**Avantages TDD** :
✅ Design du code pensé dès le début
✅ 100% de couverture de tests garantie
✅ Moins de bugs

**Inconvénient** :
❌ Plus long au début (mais tu gagnes du temps après)

---

## 🛠️ Outils de testing JavaScript

### Jest (le plus populaire)

```bash
npm install --save-dev jest
```

**Avantages** :
✅ Tout-en-un (mocking, coverage, assertions)
✅ Zéro config
✅ Énorme communauté

**Cas d'usage** : Node.js, React

### Vitest (moderne, ultra-rapide)

```bash
npm install --save-dev vitest
```

**Avantages** :
✅ Compatible Vite
✅ Ultra-rapide (HMR)
✅ Syntaxe compatible Jest

**Cas d'usage** : Vite + Vue/React

### Mocha + Chai (flexible)

```bash
npm install --save-dev mocha chai
```

**Avantages** :
✅ Très flexible
✅ Écosystème riche (plugins)

**Inconvénient** :
❌ Configuration manuelle

---

## 📊 Couverture de code (Code Coverage)

**Couverture** = Pourcentage du code testé.

### Activer la couverture avec Jest

```bash
npm test -- --coverage
```

**Résultat** :

```
----------|---------|----------|---------|---------|
File      | % Stmts | % Branch | % Funcs | % Lines |
----------|---------|----------|---------|---------|
math.js   |     100 |      100 |     100 |     100 |
----------|---------|----------|---------|---------|
```

### Objectif de couverture

- **70-80%** : Minimum acceptable
- **80-90%** : Bon (projets pro)
- **90-100%** : Excellent (mais pas obligatoire partout)

**Important** : 100% de couverture ≠ 0 bugs ! Qualité des tests > Quantité.

---

## 💡 Bonnes pratiques

### 1. Nommer clairement les tests

❌ **Mauvais** :
```javascript
test('test 1', () => { ... });
```

✅ **Bon** :
```javascript
test('addition de 2 nombres positifs retourne la somme', () => { ... });
```

### 2. Un test = Un seul concept

❌ **Mauvais** :
```javascript
test('toutes les math functions', () => {
    expect(add(2, 3)).toBe(5);
    expect(subtract(5, 3)).toBe(2);
    expect(multiply(2, 3)).toBe(6); // Trop de choses
});
```

✅ **Bon** :
```javascript
test('addition fonctionne', () => {
    expect(add(2, 3)).toBe(5);
});

test('soustraction fonctionne', () => {
    expect(subtract(5, 3)).toBe(2);
});
```

### 3. Tester les cas limites

```javascript
test('division par zéro retourne Infinity', () => {
    expect(divide(10, 0)).toBe(Infinity);
});

test('tableau vide retourne 0', () => {
    expect(sum([])).toBe(0);
});

test('string vide est invalide', () => {
    expect(isValidEmail('')).toBe(false);
});
```

### 4. Ne pas tester les librairies externes

❌ **Inutile** :
```javascript
test('fetch fonctionne', async () => {
    const res = await fetch('https://api.example.com');
    expect(res.ok).toBe(true); // Tu testes fetch, pas ton code
});
```

✅ **Utile** :
```javascript
test('fetchUser appelle l\'API avec le bon ID', async () => {
    await fetchUser(123);
    expect(fetch).toHaveBeenCalledWith('https://api.example.com/users/123');
});
```

### 5. Utiliser beforeEach / afterEach

```javascript
describe('Database tests', () => {
    let db;

    beforeEach(() => {
        db = createDatabase(); // Setup avant chaque test
    });

    afterEach(() => {
        db.close(); // Cleanup après chaque test
    });

    test('insert fonctionne', () => {
        db.insert({ name: 'Jean' });
        expect(db.count()).toBe(1);
    });

    test('delete fonctionne', () => {
        db.insert({ name: 'Jean' });
        db.delete(1);
        expect(db.count()).toBe(0);
    });
});
```

---

## ❌ Erreurs courantes

### 1. Tester l'implémentation, pas le comportement

❌ **Mauvais** :
```javascript
test('utilise la méthode split', () => {
    const spy = jest.spyOn(String.prototype, 'split');
    isPalindrome('radar');
    expect(spy).toHaveBeenCalled(); // Teste l'implémentation
});
```

✅ **Bon** :
```javascript
test('radar est un palindrome', () => {
    expect(isPalindrome('radar')).toBe(true); // Teste le résultat
});
```

### 2. Tests trop couplés

❌ **Fragile** :
```javascript
test('tableau de users', () => {
    const users = getUsers();
    expect(users[0].name).toBe('Jean'); // Si ordre change → test casse
});
```

✅ **Robuste** :
```javascript
test('contient un user nommé Jean', () => {
    const users = getUsers();
    expect(users.some(u => u.name === 'Jean')).toBe(true);
});
```

### 3. Oublier les async/await

❌ **Erreur** :
```javascript
test('fetchUser fonctionne', () => {
    const user = fetchUser(1); // Oubli de await
    expect(user).toEqual({ id: 1, name: 'Jean' }); // user = Promise
});
```

✅ **Correct** :
```javascript
test('fetchUser fonctionne', async () => {
    const user = await fetchUser(1);
    expect(user).toEqual({ id: 1, name: 'Jean' });
});
```

---

## 🚀 Intégration dans le workflow

### 1. Pre-commit hook (Husky)

```bash
npm install --save-dev husky
npx husky install
npx husky add .husky/pre-commit "npm test"
```

**Résultat** : Les tests tournent automatiquement avant chaque commit.

### 2. CI/CD (GitHub Actions)

```yaml
# .github/workflows/test.yml
name: Tests

on: [push, pull_request]

jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - name: Install dependencies
        run: npm install
      - name: Run tests
        run: npm test
```

**Résultat** : Tests automatiques sur chaque push GitHub.

---

## 🎯 Roadmap : Maîtriser les tests

### Niveau débutant (1-2 mois)
✅ Écrire des tests unitaires simples (fonctions pures)
✅ Comprendre Jest/Vitest
✅ Atteindre 50%+ de couverture

### Niveau intermédiaire (2-4 mois)
✅ Mocking (API, modules)
✅ Tests de composants React/Vue
✅ TDD (Red-Green-Refactor)
✅ 80%+ de couverture

### Niveau avancé (6+ mois)
✅ Tests d'intégration
✅ Tests E2E (Playwright, Cypress)
✅ Snapshot testing
✅ Performance testing

---

## 🔗 Ressources

### Documentation
- [Jest Docs](https://jestjs.io/)
- [Vitest Docs](https://vitest.dev/)
- [Testing Library](https://testing-library.com/)

### Tutoriels
- [Testing JavaScript](https://testingjavascript.com/) (Kent C. Dodds)
- [FreeCodeCamp - Testing Guide](https://www.freecodecamp.org/news/testing-in-javascript/)

---

## 💡 Conclusion

**Les tests unitaires**, c'est :
- ✅ **Automatiser** la vérification de ton code
- 🛡️ **Détecter les bugs** avant la prod
- 🔄 **Refactorer** en toute confiance
- 📚 **Documenter** comment utiliser tes fonctions

**Quand les écrire ?**
- ✅ Projets pro (obligatoire)
- ✅ Apps critiques (e-commerce, finance)
- ✅ Travail en équipe

**Quand les éviter ?**
- ❌ Prototypes jetables
- ❌ Scripts one-shot

**Prochaine étape** : Prends un de tes projets et écris 5 tests. Même simples. C'est en pratiquant que tu comprendras la valeur !

🚀 **Mon conseil** : Commence par tester les fonctions critiques (paiement, auth). Pas besoin de 100% de couverture dès le début. 50-70% c'est déjà énorme !

---

**Prêt à continuer ?**
👉 Lis [C'est quoi une API REST ?](/blog/api-rest-cest-quoi) pour tester des APIs
👉 Découvre [React Testing Library](https://testing-library.com/react) pour tester React