const express = require('express');

const {
  httpGetProperty,
  httpGetAllProperties,
  httpAddProperty,
  httpUpdateAmenities,
} = require('./properties.controller');

const propertiesRouter = express.Router();

propertiesRouter.get('/:id', httpGetProperty);
propertiesRouter.get('/', httpGetAllProperties);
propertiesRouter.post('/', httpAddProperty);
propertiesRouter.put('/:id', httpUpdateAmenities);

module.exports = propertiesRouter;