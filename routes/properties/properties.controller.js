const { 
  getProperty,
  getAllProperties,
  addProperty,
  updateAmenities,
  updateRooms,
  updateDescription,
} = require('../../models/properties.model');

function validateUser(req) {
  const userType = req.get('User-Type');
  const accountId = req.get('Account-Id');

  if (userType === 'employee') {
    return {
      userType
    };
  } else if (userType === 'customer') {
    return {
      userType,
      accountId
    };
  } else if (!userType) {
    return {
      userType: null
    };
  }
};

async function handleCustomer(req) {
  const { userType, accountId } = await validateUser(req);
  const property = await getProperty(req.params.id);

  if (userType === 'customer' && accountId && accountId.toString() === property.accountId.toString()) {
    return true;
  }  
};

async function httpGetProperty(req, res) {
  const property = await getProperty(req.params.id);

  if (await handleCustomer(req) || req.get('User-Type') === 'employee') {
    return res.status(200).json(property); 
  } else {
    return res.status(403).json({
      error: 'Unauthorized access'
    })
  }
};

async function httpGetAllProperties(req, res) {
  const { userType } = await validateUser(req);

  if (userType !== 'employee') {
    return res.status(403).json({
      error: 'Unauthorized access'
    });
  }

  return res.status(200).json(await getAllProperties())
};

async function httpAddProperty(req, res) {
  const { userType, accountId } = await validateUser(req);
  
  if (userType !== 'customer') {
    return res.status(403).json({
      error: 'Must be a customer to create a new listing'
    })
  }
  
  const property = req.body;
  property.accountId = accountId;
  await addProperty(property);

  return res.status(201).json({
    message: 'Property added successfully',
    property
  });
};

async function httpUpdateAmenities(req, res) {
  const property = req.params.id;
  const { addAmenities, removeAmenities } = req.body;
  
  if (await handleCustomer(req)) {
    return res.status(200).json(await updateAmenities(property, addAmenities, removeAmenities));
  } else {
    return res.status(403).json({
      error: 'Unauthorized'
    });
  }
};

async function httpUpdateRooms(req, res) {
  const propertyId = req.params.id;
  const { addRooms, removeRooms, updatedRooms } = req.body;

  if (await handleCustomer(req)){
    return res.status(200).json(await updateRooms(propertyId, addRooms, removeRooms, updatedRooms));
  } else {
    return res.status(403).json({
      error: 'Unauthorized'
    });
  }
};

async function httpUpdateDescription(req, res) {
  const propertyId = req.params.id;
  const { description } = req.body;

  if (await handleCustomer(req)) {
    return res.status(200).json(await updateDescription(propertyId, description));
  } else {
    return res.status(403).json({
      error: 'Unauthorized'
    });
  }
};

module.exports = {
  httpGetProperty,
  httpGetAllProperties,
  httpAddProperty,
  httpUpdateAmenities,
  httpUpdateRooms,
  httpUpdateDescription,
};