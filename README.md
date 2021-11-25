
# I'm API

Création d'une API pour une application mobile et une gestion administrateur via un Dashboard en version Web & Desktop.


## Variables d'environnement

Pour utiliser ce projet, vous allez avoir besoin d'ajouter ces variables d'environnement dans votre fichier .env

`MONGODB_URI`

`PORT`


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

| Paramètre           | Type     | Description                                                                |
| :------------------ | :------- | :------------------------------------------------------------------------- |
| `titreAlert`        | `String` | **Requis**. Titre de l'alerte                                              |
| `descriptionAlerte` | `String` | **Requis**. Description de l'alerte, doit faire entre 10 et 255 caractères |
|

## Authors

- [@Damien Bellec](https://github.com/damien-simplon)

