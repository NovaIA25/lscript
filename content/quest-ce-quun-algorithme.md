---
title: "C'est quoi un algorithme ? Explication simple sans maths"
date: "2025-01-20"
category: "Bases"
excerpt: "Découvre ce qu'est un algorithme avec des exemples du quotidien. Comprends cette notion fondamentale sans jargon technique ni mathématiques compliquées."
readingTime: "5 min"
keywords: ["c'est quoi un algorithme", "algorithme définition simple", "algorithme pour les nuls", "comprendre algorithme"]
---

# C'est quoi un algorithme ? Explication simple sans maths

Tu entends parler d'**algorithmes** partout (Google, TikTok, Netflix...) mais tu ne sais pas vraiment ce que c'est ? Je vais t'expliquer ce concept fondamental avec des exemples simples de ta vie quotidienne. Zéro mathématiques compliquées, promis !

## Définition simple d'un algorithme

**Un algorithme, c'est une suite d'instructions précises pour accomplir une tâche.**

C'est aussi simple que ça. Comme une **recette de cuisine**, un **mode d'emploi IKEA**, ou les **étapes pour faire tes lacets**.

### L'analogie de la recette de cuisine

Prenons une recette de crêpes :

```
ALGORITHME : Faire des crêpes

1. Mélanger 250g de farine + 3 œufs + 50cl de lait
2. Laisser reposer 1h
3. Chauffer la poêle
4. Verser une louche de pâte
5. Attendre 2 minutes
6. Retourner la crêpe
7. Attendre 1 minute
8. Sortir la crêpe
9. SI il reste de la pâte ALORS retour à l'étape 4
10. FIN
```

**C'est un algorithme !** Des étapes dans un ordre précis qui, si tu les suis correctement, donnent toujours le même résultat.

### Les 3 caractéristiques d'un algorithme

Un bon algorithme doit être :

1. **Précis** : Chaque étape est claire et sans ambiguïté
2. **Fini** : Il y a un début et une fin
3. **Efficace** : Il résout le problème en un temps raisonnable

**Contre-exemple** (mauvais algorithme) :
```
1. Fais des crêpes
```

Trop vague ! Comment ? Avec quels ingrédients ? Dans quel ordre ?

## Les algorithmes dans ta vie quotidienne

Tu utilises des algorithmes **tous les jours** sans t'en rendre compte.

### 1. Utiliser un GPS

**Problème** : Aller de Paris à Lyon

**Algorithme du GPS** :
1. Trouver ta position actuelle (point A)
2. Trouver la destination (point B)
3. Calculer tous les chemins possibles
4. Sélectionner le plus rapide (ou le plus court)
5. Afficher les instructions étape par étape
6. Recalculer si tu te trompes de route

**Résultat** : Tu arrives à destination par le meilleur chemin.

### 2. Recommandations Netflix

**Problème** : Te proposer des films que tu vas aimer

**Algorithme simplifié** :
1. Analyser les films que tu as regardés
2. Trouver d'autres utilisateurs avec des goûts similaires
3. Identifier les films qu'ils ont aimés
4. Filtrer ceux que tu n'as pas encore vus
5. Afficher les recommandations

**Résultat** : Des suggestions personnalisées.

### 3. Moteur de recherche Google

**Problème** : Trouver les meilleurs résultats pour "recette crêpes"

**Algorithme (ultra-simplifié)** :
1. Chercher tous les sites contenant "recette" ET "crêpes"
2. Classer les résultats selon :
   - Pertinence du contenu
   - Autorité du site
   - Nombre de liens vers cette page
   - Fraîcheur de l'information
3. Afficher les 10 meilleurs résultats en premier

**Résultat** : Les réponses les plus pertinentes en haut de la page.

### 4. Faire ses lacets

**Algorithme que tu connais par cœur** :
1. Croiser les deux lacets
2. Passer l'un sous l'autre
3. Serrer
4. Faire une boucle avec le lacet droit
5. Enrouler le lacet gauche autour
6. Passer le lacet gauche dans le trou
7. Tirer les deux boucles

**Tu l'exécutes sans réfléchir**, mais c'est bien un algorithme !

## Les algorithmes en programmation

En programmation, un algorithme est la **logique** qui résout un problème, avant même d'écrire du code.

### Exemple : Trouver le plus grand nombre

**Problème** : Dans une liste de nombres, trouve le plus grand.

**Algorithme en langage naturel** :
```
1. Prendre le premier nombre et le mémoriser comme "le plus grand"
2. Pour chaque nombre suivant dans la liste :
   - SI ce nombre est plus grand que "le plus grand"
   - ALORS mémoriser ce nombre comme nouveau "le plus grand"
3. Afficher "le plus grand"
```

**En code JavaScript** :
```javascript
function trouverPlusGrand(nombres) {
    let plusGrand = nombres[0];

    for (let i = 1; i < nombres.length; i++) {
        if (nombres[i] > plusGrand) {
            plusGrand = nombres[i];
        }
    }

    return plusGrand;
}

// Utilisation
const resultat = trouverPlusGrand([3, 7, 2, 9, 1, 5]);
console.log(resultat); // 9
```

**Étape par étape** :
- `plusGrand = 3` (on commence par le premier)
- `7 > 3` ? Oui → `plusGrand = 7`
- `2 > 7` ? Non → on garde 7
- `9 > 7` ? Oui → `plusGrand = 9`
- `1 > 9` ? Non → on garde 9
- `5 > 9` ? Non → on garde 9
- **Résultat : 9**

### Exemple : Vérifier si un nombre est pair

**Algorithme** :
```
1. Diviser le nombre par 2
2. SI le reste est 0
   ALORS c'est un nombre pair
   SINON c'est un nombre impair
```

**En code Python** :
```python
def est_pair(nombre):
    if nombre % 2 == 0:
        return True
    else:
        return False

# Utilisation
print(est_pair(4))  # True
print(est_pair(7))  # False
```

**L'opérateur `%`** (modulo) donne le reste de la division.
- `4 % 2 = 0` (4 divisé par 2 = 2, reste 0) → pair
- `7 % 2 = 1` (7 divisé par 2 = 3, reste 1) → impair

## Les structures de base d'un algorithme

Tous les algorithmes sont construits avec 3 briques fondamentales.

### 1. Les séquences (instructions l'une après l'autre)

```
ALGORITHME : Se préparer le matin

1. Se réveiller
2. Prendre une douche
3. S'habiller
4. Prendre le petit-déjeuner
5. Partir au travail
```

**Les étapes se suivent dans l'ordre.**

### 2. Les conditions (prendre des décisions)

```
ALGORITHME : Sortir de chez soi

SI il pleut ALORS
    Prendre un parapluie
SINON
    Ne rien prendre

Sortir
```

**En code JavaScript** :
```javascript
if (ilPleut) {
    prendreParapluie();
} else {
    // Ne rien faire
}

sortir();
```

### 3. Les boucles (répéter des actions)

```
ALGORITHME : Compter jusqu'à 10

Pour i de 1 à 10 :
    Dire i

FIN
```

**En code Python** :
```python
for i in range(1, 11):
    print(i)
```

**Résultat** : Affiche 1, 2, 3, 4, 5, 6, 7, 8, 9, 10

## Exemples d'algorithmes célèbres

### 1. Algorithme de tri (trier une liste)

**Problème** : Trier des nombres du plus petit au plus grand.

**Tri à bulles (bubble sort)** :
```
Pour chaque paire de nombres voisins :
    SI le premier est plus grand que le second
    ALORS les échanger

Répéter jusqu'à ce qu'il n'y ait plus d'échanges
```

**Exemple** :
- Départ : [5, 2, 8, 1]
- Passe 1 : [2, 5, 1, 8] (on compare et échange)
- Passe 2 : [2, 1, 5, 8]
- Passe 3 : [1, 2, 5, 8] ✅ Trié !

### 2. Algorithme de recherche dichotomique

**Problème** : Trouver un mot dans un dictionnaire.

**Méthode naïve** : Lire page par page (lent !)

**Dichotomie (méthode intelligente)** :
```
1. Ouvrir le dictionnaire au milieu
2. SI le mot est avant cette page
   ALORS chercher dans la moitié gauche
   SINON chercher dans la moitié droite
3. Répéter jusqu'à trouver le mot
```

**Exemple** : Chercher "Python" dans 1000 pages
- Méthode naïve : jusqu'à 1000 vérifications
- Dichotomie : environ 10 vérifications (2^10 = 1024)

**Énorme gain de temps !**

### 3. Algorithme de recommandation

**Problème** : Suggérer des produits sur Amazon

**Algorithme de filtrage collaboratif (simplifié)** :
```
1. Trouver des utilisateurs qui ont acheté les mêmes produits que toi
2. Identifier les produits qu'ils ont aimés
3. Te recommander ces produits

Exemple :
- Toi : acheté iPhone + AirPods
- Alice : acheté iPhone + AirPods + Coque Apple
- Bob : acheté iPhone + AirPods + Apple Watch
→ Recommandation : Coque Apple, Apple Watch
```

## Algorithme vs Programme : la différence

### Algorithme = La recette

**L'idée, la logique, indépendante du langage.**

Exemple :
```
Calculer la somme de 2 nombres :
1. Prendre le premier nombre
2. Prendre le deuxième nombre
3. Les additionner
4. Afficher le résultat
```

### Programme = Le plat cuisiné

**L'algorithme écrit dans un langage spécifique.**

**En Python** :
```python
def somme(a, b):
    return a + b

print(somme(5, 3))  # 8
```

**En JavaScript** :
```javascript
function somme(a, b) {
    return a + b;
}

console.log(somme(5, 3));  // 8
```

**Même algorithme, deux langages différents.**

## Comment créer un algorithme ?

### Méthode en 4 étapes

**1. Comprendre le problème**

Quel est l'objectif ? Quelles sont les données d'entrée et de sortie ?

**2. Décomposer en sous-problèmes**

Diviser un gros problème en petits problèmes simples.

**3. Écrire l'algorithme en langage naturel**

Avant de coder, écris les étapes en français.

**4. Traduire en code**

Seulement après avoir bien réfléchi à la logique.

### Exemple pratique : Calculer la moyenne

**1. Comprendre**
- Entrée : Une liste de notes [15, 12, 18, 14]
- Sortie : La moyenne (14.75)

**2. Décomposer**
- Additionner toutes les notes
- Compter combien il y a de notes
- Diviser la somme par le nombre de notes

**3. Algorithme en français**
```
1. Initialiser somme = 0
2. Pour chaque note dans la liste :
   - Ajouter la note à somme
3. Calculer moyenne = somme / nombre de notes
4. Afficher moyenne
```

**4. Code JavaScript**
```javascript
function calculerMoyenne(notes) {
    let somme = 0;

    for (let note of notes) {
        somme += note;
    }

    let moyenne = somme / notes.length;
    return moyenne;
}

// Utilisation
const notes = [15, 12, 18, 14];
console.log(calculerMoyenne(notes));  // 14.75
```

## Pourquoi apprendre les algorithmes ?

### 1. Développer ta logique

Les algorithmes **entraînent ton cerveau** à décomposer des problèmes complexes en étapes simples.

### 2. Écrire du meilleur code

Comprendre les algorithmes = code plus **efficace**, plus **lisible**, plus **maintenable**.

### 3. Résoudre des problèmes au quotidien

Automatiser des tâches, optimiser des processus, même en dehors de la programmation.

### 4. Réussir les entretiens techniques

Les entreprises tech (Google, Facebook, Amazon) **testent ta logique algorithmique** lors des entretiens.

## Les algorithmes sont-ils difficiles ?

### Non, si tu commences simplement

**Ne commence PAS par :**
- ❌ Les algorithmes de tri complexes (quicksort, mergesort)
- ❌ Les graphes et arbres binaires
- ❌ La complexité algorithmique (O(n), O(log n))

**Commence par :**
- ✅ Boucles simples (compter, additionner)
- ✅ Conditions (trouver le maximum)
- ✅ Recherche dans une liste
- ✅ Problèmes du quotidien

### Les maths ne sont PAS obligatoires

90% des algorithmes de base **ne nécessitent pas de maths avancées**.

Tu as juste besoin de :
- Savoir additionner, soustraire, multiplier, diviser
- Comprendre "plus grand que", "plus petit que"
- Savoir compter

**C'est tout !**

## Exercices pratiques pour débutants

### Exercice 1 : Compter les nombres pairs

**Problème** : Dans la liste [1, 2, 3, 4, 5, 6], combien de nombres pairs ?

**Algorithme** :
```
1. Initialiser compteur = 0
2. Pour chaque nombre dans la liste :
   - SI le nombre est pair (nombre % 2 == 0)
   - ALORS compteur = compteur + 1
3. Afficher compteur
```

**Solution Python** :
```python
def compter_pairs(nombres):
    compteur = 0
    for nombre in nombres:
        if nombre % 2 == 0:
            compteur += 1
    return compteur

print(compter_pairs([1, 2, 3, 4, 5, 6]))  # 3 (2, 4, 6)
```

### Exercice 2 : Inverser un mot

**Problème** : Inverser "Bonjour" → "ruojnoB"

**Algorithme** :
```
1. Créer un mot vide
2. Pour chaque lettre du mot original (de la fin au début) :
   - Ajouter la lettre au mot vide
3. Afficher le mot inversé
```

**Solution JavaScript** :
```javascript
function inverser(mot) {
    let inverse = "";
    for (let i = mot.length - 1; i >= 0; i--) {
        inverse += mot[i];
    }
    return inverse;
}

console.log(inverser("Bonjour"));  // "ruojnoB"
```

### Exercice 3 : Table de multiplication

**Problème** : Afficher la table de 5

**Algorithme** :
```
Pour i de 1 à 10 :
    Afficher "5 x i = " + (5 * i)
```

**Solution Python** :
```python
for i in range(1, 11):
    print(f"5 x {i} = {5 * i}")
```

**Résultat** :
```
5 x 1 = 5
5 x 2 = 10
5 x 3 = 15
...
5 x 10 = 50
```

## Ce qu'il faut retenir

🎯 **Un algorithme = suite d'instructions précises pour résoudre un problème**

**Exemples quotidiens :**
- Recette de cuisine
- GPS (trouver le meilleur chemin)
- Recommandations Netflix

**Les 3 structures de base :**
1. Séquences (étapes l'une après l'autre)
2. Conditions (SI... ALORS... SINON)
3. Boucles (répéter des actions)

**Différence algorithme vs programme :**
- Algorithme = la logique (indépendante du langage)
- Programme = algorithme écrit dans un langage spécifique

**Pourquoi c'est important :**
- Développer ta logique
- Écrire du meilleur code
- Résoudre des problèmes efficacement

**Les maths ne sont PAS nécessaires** pour 90% des algorithmes de base !

## Et maintenant ?

Tu sais maintenant ce qu'est un algorithme. Il est temps de **pratiquer** avec de vrais exercices de programmation.

📚 **Articles recommandés :**
- [C'est quoi programmer ?](/blog/quest-ce-que-programmer)
- [C'est quoi un langage de programmation ?](/blog/quest-ce-quun-langage-de-programmation)
- [Guide complet pour débutants](/guide)

🚀 **Prochaines étapes :**
- [C'est quoi une fonction ?](/blog/fonction-programmation) (article à venir)
- [C'est quoi une boucle ?](/blog/boucle-programmation) (article à venir)
- [Exercices d'algorithmes pour débutants](/blog/exercices-algorithmes) (article à venir)

**Commence à penser en algorithmes dès aujourd'hui !** Essaie d'écrire l'algorithme de ta routine matinale, de ta recette préférée, ou de n'importe quelle tâche répétitive. 🧠

Let's code! 🚀