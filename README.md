# Who

<details>
<summary style="font-size: 25px">Table des matières 📖</summary>

- [On Meuble](#who)
  - [Description](#description)
  - [Installation](#installation)
  - [Demo](#demo)
  - [Suivi de projet](#suivi-de-projet)
  - [Technos](#technos)

</details>

## Description

<br/>
Imaginez-vous en train de parcourir vos sites web préférés, à la découverte d’articles variés et passionnants. Soudain, vous tombez sur le nom d'une personnalité dont vous ne connaissez rien. Cette information devient cruciale pour comprendre le reste de l'article.
C’est à ce moment que <strong>Who</strong> va devenir votre plus fidèle allier.
<br/>
<br/>
<strong>Who</strong> est une extension de navigateur qui, à partir d'un nom propre, vous fournit une brève biographie et une image associée à votre recherche. Si vous avez besoin de plus d'informations, <strong>Who</strong> vous redirige vers la page Wikipédia correspondante à votre recherche.
<br/>
<br/>
<br/>
Les informations sont obtenues en effectuant des requêtes à l'API <a href="https://www.mediawiki.org/wiki/API:Main_page/fr">MediaWiki</a>.

![-----](https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/solar.png)

## Installation

<br/>
<strong>1. Clonage du dépôt</strong> : Commencez par cloner le dépôt de l'extension sur votre machine.

 ```sh
  git clone https://github.com/NadDevCode/extension-navigateur-who.git
  ```

<br/>
<strong>2. Ouvrir la page des extensions dans Chrome</strong> : Pour accéder aux extensions de Chrome, vous avez deux options :

* Tapez *`chrome://extensions`* dans la barre d'URL de Chrome et appuyez sur Entrée.
* Cliquez sur les trois points en haut à droite du navigateur, sélectionnez "Extensions", puis "Gérer les extensions".

<br/>
<strong>3. Activer le mode développeur</strong> : Sur la page des extensions, activez le mode développeur en basculant le bouton en haut à droite de la page. Cela vous permettra d'accéder à des options supplémentaires.

<br/>
<br/>
<br/>
<strong>4. Charger l'extension</strong> : Cliquez sur le bouton "Charger l'extension non empaquetée", qui apparaît après avoir activé le mode développeur.
Naviguez jusqu'au dossier où vous avez cloné le dépôt de l'extension et sélectionnez-le. Chrome chargera l'extension et vous pourrez l'utiliser immédiatement, comme n'importe quelle autre déjà installée.

![-----](https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/solar.png)

## Demo

<br/>
 <img width="1000px" src='https://drive.google.com/uc?export=view&id=1q4iuEJapchpBAW5dy_wG5lTclGvnEQb_'  alt="Démonstration extension navigateur Who">

 ![-----](https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/solar.png)

## Suivi de projet

### Lundi 8 Janvier : premiers pas et exercices en mob

- colorier les balises `h1` de tous les sites en vert
- entourer toutes les images des sites avec une bordure rouge
- de changer la taille de la font utilisée sur les sites
- Remplacer toutes les images rencontrées par les images de votre choix
  EN MOB-PROGRAMMING (partage d'idées, création du repo Git)

### Mardi 9 janvier : Idée de l'extension et recherches

- Matinée : Mob-Programming et recherches +++ sur l'API de Wikipédia. (Difficile de trouver un lien vers le résumé d'une page avec les infos que l'on veut, aide de Laïla)
- Après-midi : Création du projet de base par Léa, petits conflits avec Git, recherche d'infos sur la bibliothèque JS Compromise
- Pause par écrit pour définir notre MVP et nos étapes !

### Mercredi 10 janvier : Blocage !

- Blocage depuis 11h et jusqu'à 17h sur la bibliothèque Compromise.js
- Recherche de méthodes pour l'appeler (via lien car hébergé sur unpkg.com, puis en la téléchargeant en local...)
- Après demande de conseils, il s'avère qu'on ne peut pas intégrer une bibliothèque à une extension sans "l'empaqueter' avec un "bundle" style Webpack... C'est une étape très compliqué donc après une journée et beaucoup de discussions, nous prenons la décision de changer un peu d'idée : l'utilisateur devra taper le nom qu'il recherche dans un input du pop-up, puis avec un appel d'API, on lui affichera les infos.

### Jeudi 11 janvier : Départ sur une idée adaptée sans Compromise !

- Séparation des tâches le matin : Léa bosse sur le HTML du pop-up, Aurélien sur le fetch de l'API et moi sur le manifest.json.
- Push sur Git à midi et travail sur l'affichage des premières infos dans la console
- Aprem : MOB PROGRAMMING sur les méthodes pour traiter let recherches individuels sur l'affichage des élèments dans le pop-up, fix des bugs et push du MVP sur Git en fin d'aprem : l'extension affiche le nom, la photo et un petit résumé sur la célébrité !

### Lundi 15 janvier

- Recherches pour implémenter une fonction : quand l'utilisateur fait un "copié" du nom qu'il souhaite rechercher, la recherche se lance automatiquement, et la pop-up s'ouvre pour l'afficher.
- Sans succés.

### Mardi 16 janvier

- Recherches toute la matinée sur la fonction du "copy" et de l'input qui reçoit les infos de l'API... Sans succès.
- On décide de partir sur l'amélioration de notre MVP avec :

* Traitement de l'erreur qui n'affiche pas les noms quand il y a plusieurs propositions
* ajout du style CSS en MOB

### Mercredi 17 janvier (aprem)

- Ajout des derniers éléments CSS (bouton, input)
- Ajout de certaines valeurs en dures
- Dernier push sur Git
- Début prépa démo

![-----](https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/solar.png)

## Technos

<p align="center"> 
    <a href="https://developer.mozilla.org/fr/docs/Web/HTML" target="_blank" rel="noreferrer">
        <img width="75px" src='https://drive.google.com/uc?export=view&id=1h0n8nbhB3bJXcUGRGHyHG7ZI2EZo6VhW'  alt="Logo JavaScript">
    </a>
     &nbsp &nbsp &nbsp &nbsp &nbsp
    <a href="https://developer.mozilla.org/fr/docs/Web/HTML" target="_blank" rel="noreferrer">
        <img width="75px" src='https://drive.google.com/uc?export=view&id=10K18tSqjh9QIOyjatPgJhNQXKkTlDZS8'  alt="Logo HTML">
    </a>
     &nbsp &nbsp &nbsp &nbsp &nbsp
    <a  href="https://developer.mozilla.org/fr/docs/Web/CSS" target="_blank" rel="noreferrer">
        <img width="75px" src='https://drive.google.com/uc?export=view&id=1RQZJzDAGW39RFxPbXlObZU4XY3a1e4n7'  alt="Logo CSS">
    </a>
</p>

![-----](https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/solar.png)

## Contributeuses(-eurs)

- [**Nadège PELCAT**](https://github.com/npelcat) - *Développeuse*
- [**Léa STATTNER**](https://github.com/Lea9723) - *Développeuse*
- [**Aurélien CARTIER**](https://github.com/NadDevCode) - *Développeur*
