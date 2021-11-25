const alertController = require('../controllers/alertController');
const express = require('express');
const route = express.Router();

route.get('/', alertController.getAllAlert);

module.exports = route;