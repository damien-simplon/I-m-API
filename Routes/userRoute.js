const controller = require("../Controllers/userController");
const express = require("express");
const route = express.Router();

route.get('/', controller.getAllUser);

route.get('/:id', controller.getUserById);

route.post('/', controller.postUser);

route.put('/:id', controller.putUser);

route.delete('/:id', controller.deleteUser);

route.post('/login', controller.login);

module.exports = route;