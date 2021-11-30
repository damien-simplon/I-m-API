
# I'm API

Création d'une API pour une application mobile et une gestion administrateur via un Dashboard en version Web & Desktop.


## Variables d'environnement

Pour utiliser ce projet, vous allez avoir besoin d'ajouter ces variables d'environnement dans votre fichier .env

`MONGODB_URI`

`PORT`

`EMAIL`

`PASSWORD`


## Référence de l'API

#### Get toutes les alertes

```http
  GET /api/alert/
```

| Paramètre | Type     | Description                |
| :-------- | :------- | :------------------------- |
| aucun     | aucun    | Affiche toutes les alertes |

#### Get une alerte

```http
  GET /api/alert/:id
```

| Paramètre | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `integer`| **Requis**. Id de l'alerte        |

#### Post une alerte

```http
  POST /api/alert/
```

| Paramètre               | Type     | Description                                                                |
| :---------------------- | :------- | :------------------------------------------------------------------------- |
| `titreAlerte`           | `String` | **Requis**. Titre de l'alerte                                              |
| `descriptionAlerte`     | `String` | **Requis**. Description de l'alerte, doit faire entre 10 et 255 caractères |
| `dateAlerte`            | `String` | **Requis**. Date de l'alerte, au format DD:MM:YYYY                         |
| `horaireAlerte`         | `String` | **Requis**. Horaire de l'alerte, au format HH:MM:SS                        |
| `adresseAlerte`         | `String` | **Requis**. Adresse de l'alerte                                            |
| `photoAlerte            | `String` | **Requis**. Photo de l'alerte                                              |
| `nomUtilisateur`        | `String` | **Requis**. Nom de l'utilisateur, dois faire entre 2 et 20 caractères      |
| `prenomUtilisateur`     | `String` | **Requis**. Prénom de l'utilisateur, dois faire entre 2 et 20 caractères   |
| `adresseUtilisateur`    | `String` | **Requis**. Adresse de l'utilisateur                                       |
| `codePostalUtilisateur` | `String` | **Requis**. Code postal de l'utilisateur                                   |
| `villeUtilisateur`      | `String` | **Requis**. Ville de l'utilisateur                                         |
| `emailUtilisateur`      | `String` | **Requis**. Email de l'utilisateur                                         |
| `telephoneUtilisateur`  | `String` | **Requis**. Téléphone de l'utilisateur                                     |

#### Put une alerte

```http
  PUT /api/alert/:id
```

| Paramètre               | Type     | Description                                                                |
| :---------------------- | :------- | :------------------------------------------------------------------------- |
| `_id`                   | `integer`| **Requis**. Id de l'alerte                                                 |
| `titreAlert`            | `String` | **Requis**. Titre de l'alerte                                              |
| `descriptionAlerte`     | `String` | **Requis**. Description de l'alerte, doit faire entre 10 et 255 caractères |
| `dateAlerte`            | `String` | **Requis**. Date de l'alerte, YYYY:MM:DD par défault                       |
| `horaireAlerte`         | `String` | **Requis**. Horaire de l'alerte, HH:MM:SS par défault                      |
| `adresseAlerte`         | `String` | **Requis**. Adresse de l'alerte                                            |
| `photoAlerte            | `String` | **Requis**. Photo de l'alerte                                              |
| `nomUtilisateur`        | `String` | **Requis**. Nom de l'utilisateur, dois faire entre 2 et 20 caractères      |
| `prenomUtilisateur`     | `String` | **Requis**. Prénom de l'utilisateur, dois faire entre 2 et 20 caractères   |
| `adresseUtilisateur`    | `String` | **Requis**. Adresse de l'utilisateur                                       |
| `codePostalUtilisateur` | `String` | **Requis**. Code postal de l'utilisateur                                   |
| `villeUtilisateur`      | `String` | **Requis**. Ville de l'utilisateur                                         |
| `emailUtilisateur`      | `String` | **Requis**. Email de l'utilisateur                                         |
| `telephoneUtilisateur`  | `String` | **Requis**. Téléphone de l'utilisateur                                     |

#### Delete une alerte

```http
  Delete /api/alert/:id
```

| Paramètre               | Type     | Description                                                                |
| :---------------------- | :------- | :------------------------------------------------------------------------- |
| `_id`                   | `integer`| **Requis**. Id de l'alerte                                                 |

## Authors

- [@Damien Bellec](https://github.com/damien-simplon)

