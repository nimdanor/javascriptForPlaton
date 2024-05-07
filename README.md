# JavaScriptForPlaton


## Description

Projet de partage de codes javascript pour les utiliser comme base de création d'exercices 
de javascript pour la plateforme platon.

Les fichiers doivent respecter la normal PLATON de splicode.


## Installation

Il faut installer un node.js sur votre machine.
Aller visiter la page [https://nodejs.org/en/download/package-manager/](Installation nodejs).
Ajoutez la ligne 

    npm install typescript --save-dev

Pour l'installation de tsc le compilateur typescript .


## Utilisation 

Normalement tout les fichiers.js  sont exécutables avec la commande:

    node fichier.js 

Pour les fichiers.ts il faut exécuter tsc.

    tsc fichier.ts 
    node fichier.js

Attention si la compilation du ts n'a pas marchée le fichier.js est vieux. 
il est conseillé d'utiliser une commande comme 

    tsc fichier.ts && node fichier.js

Qui s'assure que tsc c'est bien terminé avant de lancer node.


## Support

En cas de besoin envoyer moi un mail DRDR@gitlab.com


## Contributing

Les contributions sont de deux formes: 

- idée d'exercices sous forme d'issues 
- exercices fonctionnels : 

    python runtests.py myexo.js 

ou bien 

    python runtests.py myexo.ts 

Affiche des sorties raisonables pour évaluer le bon déroulement d'un exo.

Pour les exercices typescript attention de ne pas ajouter les .js au gitlab.


## Authors and acknowledgment
Show your appreciation to those who have contributed to the project.

## License
For open source projects, say how it is licensed. CeCile B.


## Project status

Un enseignant de Javascript serait le bienvenue.


