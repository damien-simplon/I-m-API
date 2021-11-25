
# I'm API

Création d'une API pour une application mobile et une gestion administrateur via un Dashboard en version Web & Desktop.


## Variables d'environnement

Pour utiliser ce projet, vous allez avoir besoin d'ajouter ces variables d'environnement dans votre fichier .env

`MONGODB_URI`

`PORT`


## Référence de l'API

#### Get all items

```http
  GET /api/alerts
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `api_key` | `string` | **Required**. Your API key |

#### Get item

```http
  GET /api/items/${id}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Id of item to fetch |

#### add(num1, num2)

Takes two numbers and returns the sum.


## Authors

- [@Damien Bellec](https://github.com/damien-simplon)

