---
title: "C'est quoi TypeScript ? JavaScript avec typage (Guide 2025)"
date: "2025-01-15"
category: "Langages"
excerpt: "TypeScript = JavaScript + typage statique. Découvre pourquoi les dev l'adorent, comment ça fonctionne, et crée ton premier projet TypeScript (avec exemples concrets)."
readingTime: "10 min"
keywords: ["TypeScript", "JavaScript", "typage", "types", "interface", "enum", "frontend", "backend"]
---

# C'est quoi TypeScript ?

Tu codes en JavaScript et tu tombes constamment sur des bugs du genre :

```javascript
function calculer(a, b) {
    return a + b;
}

calculer(5, '10'); // "510" au lieu de 15 😵
calculer(null, 5); // NaN 🤯
```

**Le problème** : JavaScript ne vérifie pas les types. Tu découvres les erreurs **en prod**, pas en dev.

**La solution** : **TypeScript** !

---

## 🤔 Définition simple

> **TypeScript** = **JavaScript** + **typage statique** (vérification des types avant exécution).

**Créateur** : Microsoft (2012)

**Slogan** : "JavaScript that scales"

**Analogie** :
- **JavaScript** : Langage où tu écris "5" ou 5 et ça marche... jusqu'au bug
- **TypeScript** : Langage qui te dit **AVANT** d'exécuter : "Hé, tu mélanges string et number !"

---

## 🚀 TypeScript en 2 minutes

### JavaScript (sans types)

```javascript
function saluer(nom) {
    return 'Bonjour ' + nom;
}

saluer('Jean');        // "Bonjour Jean" ✅
saluer(123);           // "Bonjour 123" ❌ Bizarre mais fonctionne
saluer(null);          // "Bonjour null" ❌ WTF?
saluer();              // "Bonjour undefined" ❌
```

**Problème** : Aucune erreur, mais le résultat est bizarre.

### TypeScript (avec types)

```typescript
function saluer(nom: string): string {
    return 'Bonjour ' + nom;
}

saluer('Jean');        // "Bonjour Jean" ✅
saluer(123);           // ❌ ERREUR : Argument de type 'number' n'est pas assignable à 'string'
saluer(null);          // ❌ ERREUR
saluer();              // ❌ ERREUR : Argument manquant
```

**Résultat** : Tu vois les erreurs **dans ton éditeur**, avant même d'exécuter !

---

## 🎯 Pourquoi TypeScript est indispensable en 2025 ?

### Les chiffres

- **78%** des développeurs JS utilisent ou veulent utiliser TypeScript (State of JS 2024)
- **Top 5** des langages les plus aimés (Stack Overflow 2024)
- **Adopté par** : Google, Microsoft, Airbnb, Slack, Stripe, Shopify...

### Les avantages concrets

✅ **Détection d'erreurs avant exécution**
```typescript
let age: number = 25;
age = "vingt-cinq"; // ❌ Erreur détectée AVANT d'exécuter
```

✅ **Autocomplétion intelligente**
```typescript
interface User {
    name: string;
    email: string;
}

const user: User = { name: 'Jean', email: 'jean@email.com' };
user. // Ton IDE te propose : name, email ✨
```

✅ **Refactoring sécurisé**
```typescript
// Si tu renommes une fonction, TS trouve TOUTES les utilisations
function calculerTotal() { ... }
// Rename → calculerMontantTotal : Toutes les références mises à jour !
```

✅ **Documentation vivante**
```typescript
// Les types = documentation toujours à jour
function envoyerEmail(destinataire: string, sujet: string, corps: string): boolean {
    // Tu sais exactement quoi passer !
}
```

✅ **Code plus maintenable**
- Projets de 100k+ lignes de code sans galère
- Onboarding de nouveaux devs facilité
- Moins de bugs en production

---

## 💻 Installer TypeScript

### 1️⃣ Installation globale

```bash
npm install -g typescript

# Vérifier
tsc --version
# Version 5.3.3
```

### 2️⃣ Ou installation locale (projet)

```bash
mkdir mon-projet
cd mon-projet
npm init -y
npm install --save-dev typescript
```

### 3️⃣ Initialiser un projet TypeScript

```bash
npx tsc --init
```

Ça crée `tsconfig.json` :

```json
{
  "compilerOptions": {
    "target": "ES2020",
    "module": "commonjs",
    "strict": true,
    "esModuleInterop": true,
    "skipLibCheck": true,
    "forceConsistentCasingInFileNames": true
  }
}
```

---

## 🔧 Ton premier fichier TypeScript

### 1️⃣ Créer `hello.ts`

```typescript
// hello.ts
function saluer(nom: string): string {
    return `Bonjour ${nom} !`;
}

const message = saluer('Jean');
console.log(message);

// saluer(123); // ❌ Erreur de compilation
```

### 2️⃣ Compiler en JavaScript

```bash
tsc hello.ts
```

Ça génère `hello.js` :

```javascript
// hello.js (code généré)
function saluer(nom) {
    return "Bonjour " + nom + " !";
}
var message = saluer('Jean');
console.log(message);
```

**Important** : TypeScript **compile** en JavaScript (navigateurs ne comprennent pas TS).

### 3️⃣ Exécuter

```bash
node hello.js
# Bonjour Jean !
```

---

## 📚 Les types de base

### Types primitifs

```typescript
// String
let nom: string = 'Jean';
nom = 123; // ❌ Erreur

// Number
let age: number = 25;
age = '25'; // ❌ Erreur

// Boolean
let estConnecte: boolean = true;
estConnecte = 'oui'; // ❌ Erreur

// Null et Undefined
let valeurNulle: null = null;
let valeurIndefinie: undefined = undefined;
```

### Tableaux

```typescript
// Tableau de nombres
let nombres: number[] = [1, 2, 3];
nombres.push(4); // ✅
nombres.push('5'); // ❌ Erreur

// Alternative (syntaxe générique)
let noms: Array<string> = ['Jean', 'Marie'];
```

### Tuples (tableaux fixes)

```typescript
// Tuple : [string, number]
let user: [string, number] = ['Jean', 25];

user[0]; // "Jean" (string)
user[1]; // 25 (number)

user = [25, 'Jean']; // ❌ Erreur (ordre incorrect)
```

### Enum (énumérations)

```typescript
enum Role {
    Admin,
    User,
    Guest
}

let userRole: Role = Role.Admin;

if (userRole === Role.Admin) {
    console.log('Accès complet');
}
```

### Any (évite si possible !)

```typescript
let truc: any = 'Hello';
truc = 123; // ✅ Pas d'erreur (any accepte tout)
truc = true; // ✅

// ⚠️ Évite 'any' : tu perds les avantages de TypeScript !
```

### Unknown (version safe de any)

```typescript
let valeur: unknown = 'Hello';

// Tu dois vérifier le type avant d'utiliser
if (typeof valeur === 'string') {
    console.log(valeur.toUpperCase()); // ✅ OK
}

console.log(valeur.toUpperCase()); // ❌ Erreur (type inconnu)
```

### Void (pas de retour)

```typescript
function afficher(message: string): void {
    console.log(message);
    // Pas de return
}
```

### Never (jamais de retour)

```typescript
function erreurFatale(message: string): never {
    throw new Error(message);
    // Cette fonction ne termine jamais normalement
}
```

---

## 🏗️ Interfaces et Types

### Interface (objets)

```typescript
interface User {
    id: number;
    name: string;
    email: string;
    age?: number; // ? = optionnel
}

const user: User = {
    id: 1,
    name: 'Jean',
    email: 'jean@email.com'
    // age optionnel (peut être omis)
};

user.name; // "Jean"
user.age; // undefined (optionnel)
```

### Type Alias (union, intersection)

```typescript
// Union (OU)
type ID = number | string;

let userId: ID = 123;    // ✅
userId = 'abc123';       // ✅
userId = true;           // ❌ Erreur

// Intersection (ET)
type Admin = {
    name: string;
    privileges: string[];
};

type Employee = {
    name: string;
    startDate: Date;
};

type ElevatedEmployee = Admin & Employee;

const emp: ElevatedEmployee = {
    name: 'Jean',
    privileges: ['create-user'],
    startDate: new Date()
};
```

### Interface vs Type

```typescript
// Interface : Préféré pour les objets
interface Person {
    name: string;
}

// Type : Plus flexible (union, intersection)
type Status = 'pending' | 'success' | 'error';
```

**Recommandation** : Utilise `interface` pour les objets, `type` pour le reste.

---

## 🔥 Fonctions avec types

### Typage des paramètres et retour

```typescript
function addition(a: number, b: number): number {
    return a + b;
}

addition(5, 10);     // 15 ✅
addition('5', 10);   // ❌ Erreur
```

### Paramètres optionnels

```typescript
function saluer(nom: string, titre?: string): string {
    if (titre) {
        return `Bonjour ${titre} ${nom}`;
    }
    return `Bonjour ${nom}`;
}

saluer('Dupont');              // "Bonjour Dupont"
saluer('Dupont', 'Dr.');       // "Bonjour Dr. Dupont"
```

### Paramètres par défaut

```typescript
function creerUser(name: string, role: string = 'user'): void {
    console.log(`${name} - ${role}`);
}

creerUser('Jean');           // "Jean - user"
creerUser('Marie', 'admin'); // "Marie - admin"
```

### Fonction fléchée typée

```typescript
const multiplier = (a: number, b: number): number => a * b;

multiplier(5, 10); // 50 ✅
```

### Callbacks typés

```typescript
function fetchData(callback: (data: string) => void): void {
    const data = 'Hello';
    callback(data);
}

fetchData((data) => {
    console.log(data.toUpperCase()); // "HELLO"
});
```

---

## 🎨 Classes avec TypeScript

```typescript
class User {
    // Propriétés
    public name: string;
    private email: string;
    protected age: number;

    // Constructeur
    constructor(name: string, email: string, age: number) {
        this.name = name;
        this.email = email;
        this.age = age;
    }

    // Méthode
    public getInfo(): string {
        return `${this.name} (${this.age} ans)`;
    }

    // Getter
    public getEmail(): string {
        return this.email;
    }
}

const user = new User('Jean', 'jean@email.com', 25);
console.log(user.name);        // ✅ "Jean" (public)
console.log(user.getEmail());  // ✅ "jean@email.com" (méthode)
console.log(user.email);       // ❌ Erreur (private)
```

### Modificateurs d'accès

- `public` : Accessible partout (par défaut)
- `private` : Accessible uniquement dans la classe
- `protected` : Accessible dans la classe et les sous-classes

### Héritage

```typescript
class Admin extends User {
    private privileges: string[];

    constructor(name: string, email: string, age: number, privileges: string[]) {
        super(name, email, age);
        this.privileges = privileges;
    }

    public showPrivileges(): void {
        console.log(this.privileges);
    }
}

const admin = new Admin('Marie', 'marie@email.com', 30, ['create-user', 'delete-user']);
admin.showPrivileges(); // ['create-user', 'delete-user']
```

---

## ⚡ Generics (types génériques)

Écrire du code réutilisable avec différents types.

```typescript
// Sans generics (répétitif)
function getFirstNumber(arr: number[]): number {
    return arr[0];
}

function getFirstString(arr: string[]): string {
    return arr[0];
}

// Avec generics (réutilisable)
function getFirst<T>(arr: T[]): T {
    return arr[0];
}

getFirst<number>([1, 2, 3]);        // 1 (number)
getFirst<string>(['a', 'b', 'c']);  // "a" (string)
getFirst([true, false]);            // true (boolean, inféré)
```

### Contraintes

```typescript
// T doit avoir une propriété 'length'
function getLength<T extends { length: number }>(item: T): number {
    return item.length;
}

getLength('Hello');      // 5 ✅
getLength([1, 2, 3]);    // 3 ✅
getLength(123);          // ❌ Erreur (number n'a pas 'length')
```

---

## 💼 TypeScript en pratique

### React + TypeScript

```typescript
import React from 'react';

interface Props {
    name: string;
    age: number;
}

const UserCard: React.FC<Props> = ({ name, age }) => {
    return (
        <div>
            <h2>{name}</h2>
            <p>Âge : {age}</p>
        </div>
    );
};

// Utilisation
<UserCard name="Jean" age={25} />
<UserCard name="Marie" age="30" /> // ❌ Erreur (age doit être number)
```

### Node.js + Express + TypeScript

```typescript
import express, { Request, Response } from 'express';

const app = express();

interface User {
    id: number;
    name: string;
}

const users: User[] = [
    { id: 1, name: 'Jean' },
    { id: 2, name: 'Marie' }
];

app.get('/users', (req: Request, res: Response) => {
    res.json(users);
});

app.listen(3000, () => {
    console.log('Serveur démarré sur http://localhost:3000');
});
```

---

## 🛠️ Configuration tsconfig.json

### Essentiel

```json
{
  "compilerOptions": {
    "target": "ES2020",           // Version JS générée
    "module": "commonjs",         // Système de modules
    "strict": true,               // Mode strict (recommandé !)
    "outDir": "./dist",           // Dossier de sortie
    "rootDir": "./src",           // Dossier source
    "esModuleInterop": true,      // Compatibilité imports
    "skipLibCheck": true          // Ignorer erreurs dans node_modules
  },
  "include": ["src/**/*"],
  "exclude": ["node_modules"]
}
```

### Mode strict (recommandé)

```json
"strict": true
```

Active :
- `strictNullChecks` : null/undefined doivent être explicites
- `strictFunctionTypes` : Vérification stricte des types de fonctions
- `noImplicitThis` : `this` doit avoir un type explicite

---

## ❌ Erreurs courantes

### 1. Oublier de compiler

❌ **Erreur** :
```bash
node hello.ts
# SyntaxError: Unexpected token ':'
```

✅ **Solution** :
```bash
tsc hello.ts  # Compile d'abord
node hello.js # Exécute le JS généré
```

### 2. Utiliser `any` partout

❌ **Mauvais** :
```typescript
let data: any = fetchData();
data.truc.machin.chose; // Aucune erreur, mais crash en prod
```

✅ **Bon** :
```typescript
interface Data {
    users: User[];
}

let data: Data = fetchData();
data.users.forEach(user => console.log(user.name)); // Autocomplétion ✨
```

### 3. Ignorer les erreurs TypeScript

❌ **Dangereux** :
```typescript
// @ts-ignore
const result = functionQuiNexistePas();
```

✅ **Comprendre et corriger** :
```typescript
// Si la fonction n'existe vraiment pas, la créer ou importer
import { functionQuiExiste } from './utils';
```

---

## 🚀 Migration JavaScript → TypeScript

### Étape 1 : Renommer .js → .ts

```bash
mv app.js app.ts
```

### Étape 2 : Ajouter types progressivement

```typescript
// Avant (JS)
function calculer(a, b) {
    return a + b;
}

// Après (TS)
function calculer(a: number, b: number): number {
    return a + b;
}
```

### Étape 3 : Activer `strict` progressivement

```json
{
  "compilerOptions": {
    "strict": false, // Commencer
    "noImplicitAny": true, // Puis activer un par un
    "strictNullChecks": true
  }
}
```

---

## 💡 Conclusion

**TypeScript**, c'est :
- ✅ **JavaScript + types** : Détecte les erreurs AVANT l'exécution
- 🛠️ **Meilleur IDE support** : Autocomplétion, refactoring
- 📚 **Documentation vivante** : Les types = doc toujours à jour
- 🚀 **Indispensable** pour les gros projets (100k+ lignes)

**Quand l'utiliser ?**
- ✅ Projets moyens/gros (> 5k lignes de code)
- ✅ Travail en équipe
- ✅ Apps critiques (e-commerce, finance)

**Quand l'éviter ?**
- ❌ Scripts rapides (< 100 lignes)
- ❌ Prototypes jetables
- ❌ Si l'équipe refuse d'apprendre

**Prochaine étape** : Convertis un de tes projets JS en TS. Commence par un fichier, puis généralise. Tu verras la différence !

🚀 **Mon conseil** : Utilise **strict mode** dès le début. C'est dur au début, mais tu auras un code ultra-robuste !

---

**Prêt à continuer ?**
👉 Lis [C'est quoi JavaScript ?](/blog/javascript-cest-quoi) pour maîtriser les bases avant TypeScript
👉 Découvre [React + TypeScript](https://react.dev/learn/typescript) pour le frontend typé