const express = require('express');

const {
  httpGetListing,
  httpGetAllListings,
  httpAddListing,
  httpUpdateAmenities,
  httpUpdateRooms,
  httpUpdateDescription,
} = require('./properties.controller');

const propertiesRouter = express.Router();

propertiesRouter.get('/:id', httpGetListing);
propertiesRouter.get('/', httpGetAllListings);
propertiesRouter.post('/', httpAddListing);
propertiesRouter.put('/:id/amenities', httpUpdateAmenities);
propertiesRouter.put('/:id/rooms', httpUpdateRooms);
propertiesRouter.put('/:id/description', httpUpdateDescription);

module.exports = propertiesRouter;