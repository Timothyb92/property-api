const express = require('express');

const {
  httpGetProperty,
  httpGetAllProperties,
  httpAddProperty,
  httpUpdateAmenities,
  httpUpdateRooms,
  httpUpdateDescription,
} = require('./properties.controller');

const propertiesRouter = express.Router();

propertiesRouter.get('/:id', httpGetProperty);
propertiesRouter.get('/', httpGetAllProperties);
propertiesRouter.post('/', httpAddProperty);
propertiesRouter.put('/:id/amenities', httpUpdateAmenities);
propertiesRouter.put('/:id/rooms', httpUpdateRooms);
propertiesRouter.put('/:id/description', httpUpdateDescription);

module.exports = propertiesRouter;