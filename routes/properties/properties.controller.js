const { 
  getProperty,
  getAllProperties,
  addProperty,
  updateAmenities,
} = require('../../models/properties.model');

async function httpGetProperty(req, res) {
  return res.status(200).json(await getProperty(req.params.id));
};

async function httpGetAllProperties(req, res) {
  return res.status(200).json(await getAllProperties())
};

async function httpAddProperty(req, res) {
  const property = req.body;
  console.log(`Property being passed in controller`);
  console.log(property);
  await addProperty(property);

  res.status(201).json({ message: 'Property added successfully', property });
};

async function httpUpdateAmenities(req, res) {
  const propertyId = req.params.id;
  const { addAmenities, removeAmenities } = req.body;
  
  return res.status(200).json(await updateAmenities(propertyId, addAmenities, removeAmenities));
};

module.exports = {
  httpGetProperty,
  httpGetAllProperties,
  httpAddProperty,
  httpUpdateAmenities,
};