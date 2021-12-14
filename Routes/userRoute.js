// imports du controller utilisateur et d'express
const controller = require("../Controllers/userController");
const express = require("express");
const route = express.Router();

// route pour obtenir tout les utilisateurs
route.get('/', controller.getAllUser);

// route pour otbenir un utilisateur par son id
route.get('/:id', controller.getUserById);

// route pour ajouter un utilisateur
route.post('/', controller.postUser);

// route pour modifier un utilisateur
route.put('/:id', controller.putUser);

// route pour supprimer un utilisateur
route.delete('/:id', controller.deleteUser);

// route pour se connecter
route.post('/login', controller.login);

// exportation des routes
module.exports = route;