const alertController = require('../controllers/alertController');
const express = require('express');
const route = express.Router();

route.get('/', alertController.getAllAlert);

route.get('/:id', alertController.getAlertById);

route.post('/', alertController.postAlert);

route.put('/:id', alertController.putAlert);

route.delete('/:id', alertController.deleteAlert);

module.exports = route;