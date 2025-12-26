---
title: "C'est quoi le DOM ? Explication simple avec exemples"
date: "2025-01-26"
category: "Web"
excerpt: "Découvre le DOM, la structure qui permet à JavaScript de manipuler les pages web. Comprends comment modifier, ajouter et supprimer des éléments HTML dynamiquement."
readingTime: "6 min"
keywords: ["dom c'est quoi", "document object model", "dom javascript", "manipulation dom"]
---

# C'est quoi le DOM ? Explication simple avec exemples

Tu as entendu parler du **DOM** en JavaScript mais tu ne comprends pas vraiment ce que c'est ? Je vais t'expliquer ce concept fondamental avec des analogies simples et des exemples concrets.

## Définition simple du DOM

**DOM** = **Document Object Model** (Modèle d'Objet de Document)

**En clair :** Le DOM est une représentation de ta page HTML sous forme d'**arbre d'objets** que JavaScript peut manipuler.

### L'analogie de l'arbre généalogique

Imagine ta page HTML comme un **arbre généalogique** :

```html
<html>                          <!-- Grand-parent -->
  <body>                        <!-- Parent -->
    <h1>Titre</h1>             <!-- Enfant 1 -->
    <p>Paragraphe</p>          <!-- Enfant 2 -->
    <div>                       <!-- Enfant 3 (qui a des enfants) -->
      <button>Cliquez</button>  <!-- Petit-enfant -->
    </div>
  </body>
</html>
```

**Le DOM transforme ce HTML en structure d'arbre :**

```
                    Document
                       │
                     <html>
                       │
                     <body>
                  ┌────┼────┐
                <h1>  <p>  <div>
                             │
                         <button>
```

Chaque élément HTML devient un **nœud** (node) que JavaScript peut manipuler.

## Pourquoi le DOM existe ?

### Sans le DOM

**HTML** = Fichier statique, texte figé

Tu ne peux pas :
- ❌ Changer le texte d'un élément
- ❌ Ajouter/supprimer des éléments
- ❌ Réagir aux clics
- ❌ Modifier les styles

### Avec le DOM

**HTML + DOM + JavaScript** = Page interactive

Tu peux :
- ✅ Modifier le contenu en temps réel
- ✅ Créer/supprimer des éléments dynamiquement
- ✅ Réagir aux actions utilisateur (clics, saisie)
- ✅ Changer les styles CSS

**Exemple concret :**

```javascript
// Sans DOM : impossible
// Avec DOM :
document.querySelector('h1').textContent = 'Nouveau titre !';
// → Le titre change instantanément sans recharger la page
```

## Comment le DOM fonctionne

### 1. Le navigateur charge la page HTML

```html
<!DOCTYPE html>
<html>
<head>
    <title>Ma Page</title>
</head>
<body>
    <h1 id="titre">Bonjour</h1>
    <p class="texte">Bienvenue</p>
    <button id="btn">Cliquez</button>
</body>
</html>
```

### 2. Le navigateur crée le DOM (arbre d'objets)

```
Document
  └─ html
      ├─ head
      │   └─ title ("Ma Page")
      └─ body
          ├─ h1#titre ("Bonjour")
          ├─ p.texte ("Bienvenue")
          └─ button#btn ("Cliquez")
```

### 3. JavaScript peut maintenant interagir avec le DOM

```javascript
// Sélectionner un élément
const titre = document.querySelector('#titre');

// Modifier son contenu
titre.textContent = 'Salut !';

// Changer son style
titre.style.color = 'red';

// Ajouter un événement
const button = document.querySelector('#btn');
button.addEventListener('click', () => {
    alert('Bouton cliqué !');
});
```

**Résultat : La page change sans recharger !**

## Sélectionner des éléments du DOM

### Méthode 1 : querySelector (recommandée)

```javascript
// Par ID
const titre = document.querySelector('#titre');

// Par classe
const paragraphe = document.querySelector('.texte');

// Par balise
const premier_p = document.querySelector('p');

// Sélecteur CSS complexe
const lien_dans_div = document.querySelector('div a.active');
```

**Retourne :** Le **premier** élément qui correspond.

### Méthode 2 : querySelectorAll (plusieurs éléments)

```javascript
// Tous les paragraphes
const tous_les_p = document.querySelectorAll('p');

// Parcourir la liste
tous_les_p.forEach(p => {
    console.log(p.textContent);
});
```

**Retourne :** Une **NodeList** (liste de tous les éléments qui correspondent).

### Méthodes anciennes (moins recommandées)

```javascript
// Par ID (ancien)
const element = document.getElementById('titre');

// Par classe (ancien)
const elements = document.getElementsByClassName('texte');

// Par balise (ancien)
const paragraphes = document.getElementsByTagName('p');
```

**Pourquoi préférer querySelector ?**
- ✅ Syntaxe CSS familière
- ✅ Plus flexible
- ✅ Plus moderne

## Manipuler le contenu

### 1. Lire le contenu

```javascript
const titre = document.querySelector('h1');

// Texte uniquement
console.log(titre.textContent); // "Bonjour"

// HTML complet
console.log(titre.innerHTML); // "<strong>Bonjour</strong>"
```

### 2. Modifier le contenu

```javascript
// Changer le texte
titre.textContent = 'Nouveau titre';

// Changer le HTML
titre.innerHTML = '<strong>Titre en gras</strong>';
```

**Différence textContent vs innerHTML :**

```javascript
const div = document.querySelector('div');

// textContent : texte brut
div.textContent = '<strong>Texte</strong>';
// Résultat affiché : <strong>Texte</strong>

// innerHTML : interprète le HTML
div.innerHTML = '<strong>Texte</strong>';
// Résultat affiché : Texte (en gras)
```

### 3. Lire/modifier les attributs

```javascript
const lien = document.querySelector('a');

// Lire un attribut
console.log(lien.href);
console.log(lien.getAttribute('href'));

// Modifier un attribut
lien.href = 'https://www.google.com';
lien.setAttribute('target', '_blank');

// Supprimer un attribut
lien.removeAttribute('target');
```

## Manipuler les styles CSS

### 1. Modifier les styles inline

```javascript
const titre = document.querySelector('h1');

// Une propriété
titre.style.color = 'red';
titre.style.fontSize = '48px';
titre.style.backgroundColor = '#f0f0f0';

// Attention : kebab-case → camelCase
// CSS : background-color
// JS  : backgroundColor
```

### 2. Ajouter/retirer des classes CSS (recommandé)

**HTML :**

```html
<p class="texte">Paragraphe</p>
```

**CSS :**

```css
.highlight {
    background-color: yellow;
    font-weight: bold;
}
```

**JavaScript :**

```javascript
const p = document.querySelector('.texte');

// Ajouter une classe
p.classList.add('highlight');

// Retirer une classe
p.classList.remove('highlight');

// Alterner (toggle)
p.classList.toggle('highlight'); // Ajoute si absente, retire si présente

// Vérifier si une classe existe
if (p.classList.contains('highlight')) {
    console.log('Highlighted !');
}
```

**Pourquoi classList > style ?**
- ✅ Sépare structure (HTML) et style (CSS)
- ✅ Réutilisable
- ✅ Facile à maintenir

## Créer et supprimer des éléments

### 1. Créer un nouvel élément

```javascript
// Créer un paragraphe
const nouveauP = document.createElement('p');

// Ajouter du texte
nouveauP.textContent = 'Nouveau paragraphe créé dynamiquement';

// Ajouter une classe
nouveauP.classList.add('dynamique');

// Insérer dans le DOM
document.body.appendChild(nouveauP);
```

**Résultat :** Un nouveau `<p>` apparaît en bas de la page.

### 2. Insérer à un endroit précis

```javascript
const container = document.querySelector('#container');
const nouveauDiv = document.createElement('div');
nouveauDiv.textContent = 'Nouveau div';

// À la fin du container
container.appendChild(nouveauDiv);

// Au début du container
container.prepend(nouveauDiv);

// Avant le container
container.before(nouveauDiv);

// Après le container
container.after(nouveauDiv);
```

### 3. Supprimer un élément

```javascript
const elementASupprimer = document.querySelector('.a-supprimer');

// Méthode moderne
elementASupprimer.remove();

// Méthode ancienne
elementASupprimer.parentElement.removeChild(elementASupprimer);
```

## Événements DOM

### Les événements courants

| Événement | Quand ? | Exemple |
|-----------|---------|---------|
| `click` | Clic sur l'élément | Bouton cliqué |
| `dblclick` | Double-clic | |
| `mouseover` | Souris passe sur l'élément | Effet hover |
| `mouseout` | Souris quitte l'élément | |
| `keydown` | Touche du clavier enfoncée | Saisie texte |
| `keyup` | Touche relâchée | |
| `submit` | Formulaire soumis | Validation |
| `input` | Valeur d'input change | Recherche en temps réel |
| `change` | Valeur change (select, checkbox) | |
| `load` | Page/image chargée | |
| `scroll` | Scroll de la page | Effet parallax |

### Ajouter un événement

```javascript
const button = document.querySelector('#btn');

// Méthode moderne (recommandée)
button.addEventListener('click', function() {
    alert('Bouton cliqué !');
});

// Avec fonction fléchée
button.addEventListener('click', () => {
    alert('Bouton cliqué !');
});

// Fonction nommée (réutilisable)
function handleClick() {
    alert('Bouton cliqué !');
}

button.addEventListener('click', handleClick);
```

### L'objet event

```javascript
button.addEventListener('click', (event) => {
    console.log(event.target); // Élément cliqué
    console.log(event.type);   // Type d'événement ('click')

    // Empêcher le comportement par défaut
    event.preventDefault();

    // Empêcher la propagation
    event.stopPropagation();
});
```

## Projet pratique : To-Do List interactive

Créons une vraie to-do list avec manipulation du DOM.

**HTML (index.html) :**

```html
<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <title>To-Do List</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <div class="container">
        <h1>Ma To-Do List</h1>

        <div class="input-group">
            <input type="text" id="taskInput" placeholder="Ajouter une tâche...">
            <button id="addBtn">Ajouter</button>
        </div>

        <ul id="taskList"></ul>
    </div>

    <script src="script.js"></script>
</body>
</html>
```

**CSS (style.css) :**

```css
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: Arial, sans-serif;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 20px;
}

.container {
    background: white;
    border-radius: 15px;
    padding: 30px;
    box-shadow: 0 20px 60px rgba(0,0,0,0.3);
    max-width: 500px;
    width: 100%;
}

h1 {
    text-align: center;
    color: #333;
    margin-bottom: 30px;
}

.input-group {
    display: flex;
    gap: 10px;
    margin-bottom: 20px;
}

#taskInput {
    flex: 1;
    padding: 12px;
    border: 2px solid #ddd;
    border-radius: 8px;
    font-size: 16px;
}

#taskInput:focus {
    outline: none;
    border-color: #667eea;
}

#addBtn {
    padding: 12px 24px;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    color: white;
    border: none;
    border-radius: 8px;
    cursor: pointer;
    font-size: 16px;
    transition: transform 0.2s;
}

#addBtn:hover {
    transform: scale(1.05);
}

#taskList {
    list-style: none;
}

.task-item {
    background: #f8f9fa;
    padding: 15px;
    margin-bottom: 10px;
    border-radius: 8px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    transition: all 0.3s;
}

.task-item:hover {
    transform: translateX(5px);
    box-shadow: 0 4px 12px rgba(0,0,0,0.1);
}

.task-item.completed {
    opacity: 0.6;
    text-decoration: line-through;
}

.delete-btn {
    background: #e74c3c;
    color: white;
    border: none;
    padding: 8px 16px;
    border-radius: 5px;
    cursor: pointer;
    transition: background 0.3s;
}

.delete-btn:hover {
    background: #c0392b;
}
```

**JavaScript (script.js) :**

```javascript
// Sélectionner les éléments
const taskInput = document.querySelector('#taskInput');
const addBtn = document.querySelector('#addBtn');
const taskList = document.querySelector('#taskList');

// Fonction pour ajouter une tâche
function ajouterTache() {
    const texte = taskInput.value.trim();

    // Vérifier que le champ n'est pas vide
    if (texte === '') {
        alert('Veuillez entrer une tâche !');
        return;
    }

    // Créer les éléments
    const li = document.createElement('li');
    li.className = 'task-item';

    const span = document.createElement('span');
    span.textContent = texte;

    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Supprimer';
    deleteBtn.className = 'delete-btn';

    // Marquer comme complété au clic
    span.addEventListener('click', () => {
        li.classList.toggle('completed');
    });

    // Supprimer la tâche
    deleteBtn.addEventListener('click', () => {
        li.remove();
    });

    // Assembler les éléments
    li.appendChild(span);
    li.appendChild(deleteBtn);
    taskList.appendChild(li);

    // Vider le champ
    taskInput.value = '';
    taskInput.focus();
}

// Événement : Clic sur le bouton "Ajouter"
addBtn.addEventListener('click', ajouterTache);

// Événement : Touche Entrée dans le champ
taskInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        ajouterTache();
    }
});
```

**🎉 Résultat : Une to-do list complètement fonctionnelle !**

**Ce que tu apprends :**
- Sélectionner des éléments (`querySelector`)
- Créer des éléments (`createElement`)
- Modifier le contenu (`textContent`)
- Ajouter des classes (`classList`)
- Gérer des événements (`addEventListener`)
- Insérer dans le DOM (`appendChild`)
- Supprimer des éléments (`remove`)

## Parcourir le DOM (navigation)

### Relations parent/enfant

```javascript
const element = document.querySelector('.item');

// Parent
console.log(element.parentElement);

// Enfants
console.log(element.children); // HTMLCollection
console.log(element.firstElementChild); // Premier enfant
console.log(element.lastElementChild);  // Dernier enfant

// Frères et sœurs
console.log(element.nextElementSibling);     // Suivant
console.log(element.previousElementSibling); // Précédent
```

**Exemple :**

```html
<ul id="liste">
    <li>Item 1</li>
    <li class="actif">Item 2</li>
    <li>Item 3</li>
</ul>
```

```javascript
const actif = document.querySelector('.actif');

console.log(actif.parentElement);          // <ul id="liste">
console.log(actif.previousElementSibling); // <li>Item 1</li>
console.log(actif.nextElementSibling);     // <li>Item 3</li>
```

## Différence DOM vs Virtual DOM

### DOM classique

**Chaque modification = Redessiner la page**

```javascript
// 1000 modifications = 1000 repaints (lent!)
for (let i = 0; i < 1000; i++) {
    document.body.innerHTML += '<p>Texte</p>';
}
```

**Problème :** Très lent si beaucoup de modifications.

### Virtual DOM (React, Vue)

**Modifications en mémoire, puis 1 seul repaint**

1. Modifications dans le Virtual DOM (en mémoire, rapide)
2. Comparaison avec le DOM réel (diff)
3. Mise à jour uniquement des différences (efficient)

**Résultat :** Beaucoup plus rapide pour les apps complexes.

## Les erreurs courantes

### ❌ Erreur 1 : Sélectionner avant que le DOM soit chargé

```javascript
// MAUVAIS (script dans <head>)
const button = document.querySelector('#btn'); // null !
```

**Solutions :**

```javascript
// 1. Mettre le script avant </body>

// 2. Utiliser DOMContentLoaded
document.addEventListener('DOMContentLoaded', () => {
    const button = document.querySelector('#btn'); // OK !
});
```

### ❌ Erreur 2 : Oublier que querySelector retourne null si pas trouvé

```javascript
const element = document.querySelector('.inexistant');
element.textContent = 'Test'; // ❌ Erreur : Cannot read property 'textContent' of null
```

**Solution :**

```javascript
const element = document.querySelector('.inexistant');
if (element) {
    element.textContent = 'Test'; // ✅ OK
}
```

### ❌ Erreur 3 : Modifier innerHTML dans une boucle

```javascript
// MAUVAIS (très lent)
for (let i = 0; i < 1000; i++) {
    document.body.innerHTML += '<p>Texte</p>';
}

// BON (rapide)
let html = '';
for (let i = 0; i < 1000; i++) {
    html += '<p>Texte</p>';
}
document.body.innerHTML = html;
```

## Ce qu'il faut retenir

🎯 **DOM = Arbre d'objets représentant le HTML que JavaScript peut manipuler**

**Le DOM permet de :**
- Sélectionner des éléments
- Modifier le contenu et les styles
- Créer/supprimer des éléments dynamiquement
- Réagir aux événements (clics, saisie, etc.)

**Sélectionner des éléments :**
```javascript
document.querySelector('#id');
document.querySelector('.class');
document.querySelectorAll('p');
```

**Manipuler le contenu :**
```javascript
element.textContent = 'Texte';
element.innerHTML = '<strong>HTML</strong>';
```

**Manipuler les styles :**
```javascript
element.style.color = 'red';
element.classList.add('active');
```

**Créer/supprimer :**
```javascript
const div = document.createElement('div');
document.body.appendChild(div);
element.remove();
```

**Événements :**
```javascript
button.addEventListener('click', () => {
    // Code
});
```

## Et maintenant ?

Tu sais maintenant ce qu'est le DOM et comment le manipuler. Il est temps de **pratiquer** !

📚 **Articles recommandés :**
- [C'est quoi JavaScript ?](/blog/javascript-cest-quoi)
- [Comment créer un site web ?](/blog/comment-creer-un-site-web)
- [C'est quoi une fonction ?](/blog/fonction-programmation)
- [Guide complet pour débutants](/guide)

🚀 **Prochaines étapes :**
1. **Aujourd'hui** : Crée la to-do list du tutoriel
2. **Cette semaine** : Ajoute des fonctionnalités (éditer, filtrer, localStorage)
3. **Ce mois-ci** : Crée une calculatrice interactive avec le DOM
4. **Dans 3 mois** : Apprends React (utilise le Virtual DOM)

**Exercices pratiques :**
1. Change la couleur de tous les paragraphes en bleu au clic d'un bouton
2. Crée un compteur qui s'incrémente/décrémente
3. Affiche/masque un élément au clic
4. Crée un formulaire qui valide l'email en temps réel

**Commence dès maintenant : ouvre la console de ton navigateur (F12) et tape :**

```javascript
document.body.style.backgroundColor = 'lightblue';
```

**Félicitations, tu viens de manipuler le DOM !** 🎉

Let's code! 🚀