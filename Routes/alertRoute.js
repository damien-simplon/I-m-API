// imports du controller d'alerte et d'express
const alertController = require('../controllers/alertController');
const express = require('express');
const route = express.Router();

// route pour obtenir toutes les alertes
route.get('/', alertController.getAllAlert);

// route pour obtenir une alerte par son id
route.get('/:id', alertController.getAlertById);

// route pour créer une alerte
route.post('/', alertController.postAlert);

// route pour modifier une alerte
route.put('/:id', alertController.putAlert);

// route pour supprimer une alerte
route.delete('/:id', alertController.deleteAlert);

// exportations des routes
module.exports = route;