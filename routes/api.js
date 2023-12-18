const express = require('express');

const propertiesRouter = require('./properties/properties.router');

const api = express.Router();

api.use('/properties', propertiesRouter);

module.exports = api;