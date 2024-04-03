Je modifie mon Fork

# extension-navigateur-extension_lea_aurelien_nadege

created by GitHub Classroom

## Lundi 8 Janvier : premiers pas et exercices en mob

- colorier les balises `h1` de tous les sites en vert
- entourer toutes les images des sites avec une bordure rouge
- de changer la taille de la font utilisée sur les sites
- Remplacer toutes les images rencontrées par les images de votre choix
  EN MOB-PROGRAMMING (partage d'idées, création du repo Git)

## Mardi 9 janvier : Idée de l'extension et recherches

- Matinée : Mob-Programming et recherches +++ sur l'API de Wikipédia. (Difficile de trouver un lien vers le résumé d'une page avec les infos que l'on veut, aide de Laïla)
- Après-midi : Création du projet de base par Léa, petits conflits avec Git, recherche d'infos sur la bibliothèque JS Compromise
- Pause par écrit pour définir notre MVP et nos étapes !

## Mercredi 10 janvier : Blocage !

- Blocage depuis 11h et jusqu'à 17h sur la bibliothèque Compromise.js
- Recherche de méthodes pour l'appeler (via lien car hébergé sur unpkg.com, puis en la téléchargeant en local...)
- Après demande de conseils, il s'avère qu'on ne peut pas intégrer une bibliothèque à une extension sans "l'empaqueter' avec un "bundle" style Webpack... C'est une étape très compliqué donc après une journée et beaucoup de discussions, nous prenons la décision de changer un peu d'idée : l'utilisateur devra taper le nom qu'il recherche dans un input du pop-up, puis avec un appel d'API, on lui affichera les infos.

## Jeudi 11 janvier : Départ sur une idée adaptée sans Compromise !

- Séparation des tâches le matin : Léa bosse sur le HTML du pop-up, Aurélien sur le fetch de l'API et moi sur le manifest.json.
- Push sur Git à midi et travail sur l'affichage des premières infos dans la console
- Aprem : MOB PROGRAMMING sur les méthodes pour traiter let recherches individuels sur l'affichage des élèments dans le pop-up, fix des bugs et push du MVP sur Git en fin d'aprem : l'extension affiche le nom, la photo et un petit résumé sur la célébrité !

## Lundi 15 janvier

- Recherches pour implémenter une fonction : quand l'utilisateur fait un "copié" du nom qu'il souhaite rechercher, la recherche se lance automatiquement, et la pop-up s'ouvre pour l'afficher.
- Sans succés.

## Mardi 16 janvier

- Recherches toute la matinée sur la fonction du "copy" et de l'input qui reçoit les infos de l'API... Sans succès.
- On décide de partir sur l'amélioration de notre MVP avec :

* Traitement de l'erreur qui n'affiche pas les noms quand il y a plusieurs propositions
* ajout du style CSS en MOB

## Mercredi 17 janvier (aprem)

- Ajout des derniers éléments CSS (bouton, input)
- Ajout de certaines valeurs en dures
- Dernier push sur Git
- Début prépa démo
