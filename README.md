# WTTJ Widget

Création d'un widget pour les entreprises sur @wttj - Test technique

Démo : [wttj.now.sh](https://wttj.now.sh) 👌

Projet en React, avec [create react app](https://github.com/facebook/create-react-app) et [styled-components](https://github.com/styled-components/styled-components) 💅

## Installation

### Installer le projet

`yarn`

### Lancer le projet

`yarn start`

L'application est disponible en environement de développement ici : [http://localhost:3000](http://localhost:3000)

### Lancer le build

`yarn build`

Création du build de production dans le dossier `build`.<br>

## Options

### columns

`https://wttj.now.sh/?columns=5`

Par défaut l'option est à 3, sur mobile (< 640px) l'option est toujours à 1.

### rows

`https://wttj.now.sh/?rows=5`

Par défaut l'option est à 2.

### autoplay

`https://wttj.now.sh/?autoplay=1`

Par défaut l'option est à false dans le composant Widget, seul `1` est autorisé pour que l'option passe à true. L'autoplay s'arrête lorsque l'on swipe, que l'on utilise les keyEvents ou les 2 boutons dans le header.

### keyEvents

Le widget est compatible avec les touches flèche gauche et flèche droite du clavier

## Compatibilité

Compatible navigateurs firefox, chrome safari de la version actuelle à < 2, ainsi que Edge (pas de IE).

Développé en ES6 et transpillé par babel.

## Tests

### Lancer les tests

`yarn test`

Le coverage minimal est de 90%. Pour tester le coverage `yarn coverage`.

Testé avec `jest`, `enzyme` et `jest-styled-components`

## Deploiement

`yarn deploy`

Pour la démo j'ai choisi `now.sh`, simple et rapide à mettre en place. Elle est disponible [ici](https://wttj.now.sh).

## Structure

L'application est basée sur react-create-app, c'est un choix pour rendre simple, rapide et stable la démo.

Ce qui nous intéresse est dans le dossier `src` :

- `assets` : j'y ai mis les assets de l'entreprise pour la démo, avec un logo et un json de configuration du widget. Il pourrait aussi y avoir toutes les assets globales de l'application, utlisées partout dans les pages.
- `components` : les composants globaux seront ici, ils sont utilisés dans toute l'application _(sauf pour le cas de la démo n'ayant qu'une page)_, par exemple le composant **Button**, **Icon**, ... ce sont le plus souvent des composant dit "dumb component", sans logique.
- `Widget`: je n'ai pas mis ici un dossier page, n'ayant pas mis en place de router. Le but était simplement de mettre un dossier Widget pour montrer la structure/découpe des composants. Le composant Widget à toute sa logique dans son **index.js**, d'autres sous-composants existent dans le dossier **components** afin de mieux découper et d'éviter un trop long code ainsi que de faciliter les tests unitaires. Les sous-composants ont beaucoup moins de logique voir dépouvus.
- `index.js`: seulement pour la démo, c'est la base de l'application, je récupère les queryparams de l'url ici pour le donner au composant Widget.

### Découpe d'un composant

Un composant à comme base un `index.js`.

Afin de créer des composants avec **styled-components**, et d'alléger l' index.js, je créé un fichier `styled.js` pour y mettre tous mes DOM elements et je les importent dans l' _index.js_.

Dans les composants _styled_ on peut mettre en place des utilitaires `utils.js` qui permettent d'alléger le code et faciliter les tests _(exemple dans le composant Button)_.

Si nous avons besoin de constants, un fichier `constants.js` sera créé.

Vous trouverez les tests dans le dossier `__tests__`

## Axes d'améliorations

- rendre plus fluide le swipe, plus naturel par rapport au natif des téléphones
- pouvoir agrandir les photos/vidéos et avoir un aperçu avant d'aller sur la page entreprise, cela dépends aussi de la statégie produit :)
- on pourrait aussi proposer un widget adapté à leur charte graphique : couleur, typographie, arrondi...
