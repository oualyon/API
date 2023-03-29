
[![forthebadge](https://forthebadge.com/images/badges/made-with-javascript.svg)](https://forthebadge.com) 
[![forthebadge](https://forthebadge.com/images/badges/uses-git.svg)](https://forthebadge.com)

# API Express.js

Il s'agit d'une API simple Express.js qui sert un fichier GeoJSON et permet de filtrer par catégorie.

### Utilisation
1. Clonez le référentiel et installez les dépendances en exécutant npm install
2. Démarrez le serveur en exécutant npm start ou node server.js
3. L'API peut être accédée à l'adresse http://localhost:5000/geo
4. Pour filtrer par catégorie, ajoutez le nom de la catégorie à la fin de l'URL, par exemple http://localhost:5000/geo/parcs

### Structure de fichiers

* `server.js` est le point d'entrée de l'application. Il configure le serveur Express, configure CORS et configure les routes pour l'API.
* `routes/convert.js` contient la logique pour gérer les demandes à l'API. Il utilise le module `fs` pour lire le fichier GeoJSON et la `méthode JSON.parse()` pour le parser en un objet JavaScript. Il inclut également une fonction de filtrage pour ne renvoyer que les caractéristiques avec une catégorie correspondante.
### Dépendances

* Express pour créer le serveur et gérer le routage
* Cors pour activer le partage de ressources d'origine croisée (CORS)
* fs pour lire le fichier GeoJSON
* Le fichier GeoJSON est situé à file/Activities.geojson suivant : 

### Note

* Vous devez vous assurer d'avoir un fichier Activities.geojson dans le dossier file et vous pouvez utiliser ce fichier geojson pour tester votre code. Il est disponible via l'etl : https://github.com/oualyon/ETL.git
* Le code est capable de filtrer le fichier geojson par les propriétés de catégorie et de renvoyer les données filtrées.

## API ENDPOINT
| Routes                   | Type   | Parameter                                                      | Retour type | Accès user | Accès admin |
| ------------------------ | ------ | -------------------------------------------------------------- | ----------- | ---------- | ----------- |
| /geo                     | GET    |                                                                |   GeoJson   | NO         | NO          |
| /geo/:category           | GET    |                                                                |   GeoJson   | NO         | NO          |
| /Itinary/:type_itinary   | GET    |                                                                |   GeoJson   | NO         | NO          |
### Liste des ":category" géneré par l'etl oualyon
* FootBall
* BasketBall
* Gymnase
* Athlétisme
* Natation
* Tennis 
* Autres 
* Salle de sport ( requête : Salle%20de%20sport)
* Arts martieaux ( requete : Arts%20martiaux ) 
* VolleyBall
* Pétanque
* Tennis de table (requête : Tennis%20de%20table)
* Tir
* Danse
* Escalade
* Handball
* Course à pied ( requête : Course%20à%20pied ) 

## Contributors 

* **Stephane DUBOZE** _alias_ [@Black-Thor](https://github.com/Black-Thor)