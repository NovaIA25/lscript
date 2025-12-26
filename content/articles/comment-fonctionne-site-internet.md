---
title: "Comment fonctionne un site internet ?"
excerpt: "Tu tapes une URL et une page s'affiche. Mais que se passe-t-il vraiment ?"
category: web
date: "2024-12-26"
tags: ["web", "concepts", "internet", "débutant", "architecture"]
---

# Comment fonctionne un site internet ?

Tu tapes "google.com" dans ton navigateur, et une page apparaît. Mais que s'est-il passé entre les deux ?

## Étape 1 : Tu fais une demande

Quand tu tapes une URL et appuies sur Entrée, ton navigateur (Chrome, Firefox, Safari...) envoie une **demande** à un serveur.

C'est comme envoyer une lettre : "Salut, je voudrais voir la page d'accueil de Google s'il te plaît."

## Étape 2 : Le serveur répond

Quelque part dans le monde, un ordinateur (le **serveur**) reçoit ta demande. Il cherche les fichiers correspondants et te les renvoie.

Ces fichiers sont :

- **HTML** — la structure de la page
- **CSS** — le style (couleurs, tailles)
- **JavaScript** — l'interactivité
- **Images, vidéos...** — le contenu média

## Étape 3 : Ton navigateur affiche

Ton navigateur reçoit tous ces fichiers et les **assemble** pour créer la page que tu vois.

C'est comme recevoir un kit IKEA : tu reçois les pièces, et ton navigateur les monte pour toi.

## Schéma simplifié

```
[Toi] → "Je veux google.com" → [Serveur]
                                    ↓
                              Cherche les fichiers
                                    ↓
[Toi] ← HTML + CSS + JS ← [Serveur]
    ↓
Le navigateur affiche la page
```

## Pourquoi c'est important de comprendre ça ?

Parce que quand tu vas créer ton propre site :

1. Tu vas écrire le HTML, CSS et JavaScript (le contenu)
2. Tu vas le mettre sur un serveur (l'hébergement)
3. Les visiteurs feront la même chose : demander, recevoir, afficher

Comprendre ce cycle, c'est comprendre le web.

---

**Prochain article :** [HTML ou CSS : quelle différence ?](/blog/html-ou-css-difference)
