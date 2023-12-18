const express = require('express');

const {
  httpGetProperty,
  httpGetAllProperties,
  httpAddProperty,
} = require('./properties.controller');

const propertiesRouter = express.Router();

propertiesRouter.get('/:id', httpGetProperty);
propertiesRouter.get('/', httpGetAllProperties);
propertiesRouter.post('/', httpAddProperty)

module.exports = propertiesRouter;