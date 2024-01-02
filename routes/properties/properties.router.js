const express = require('express');

const {
  httpGetProperty,
  httpGetAllProperties,
  httpAddProperty,
  httpUpdateAmenities,
  httpUpdateRooms,
} = require('./properties.controller');

const propertiesRouter = express.Router();

propertiesRouter.get('/:id', httpGetProperty);
propertiesRouter.get('/', httpGetAllProperties);
propertiesRouter.post('/', httpAddProperty);
propertiesRouter.put('/:id/amenities', httpUpdateAmenities);
propertiesRouter.put('/:id/rooms', httpUpdateRooms);

module.exports = propertiesRouter;