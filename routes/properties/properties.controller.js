const { 
  getProperty,
  getAllProperties,
  addProperty,
  updateAmenities,
  updateRooms,
  updateDescription,
} = require('../../models/properties.model');

async function validateUser(req) {
  const userType = req.get('User-Type');
  const accountId = req.get('Account-Id');

  // console.log(`Running validateUser in the controller. userType is: ${userType} and accountId is ${accountId}`);

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
}

async function httpGetProperty(req, res) {
  const { userType, accountId } = await validateUser(req);
  const property = await getProperty(req.params.id);

  if (userType === 'customer' && accountId.toString() === property.accountId.toString()) {
    console.log(`Hitting if statement in httpGetProperty. userType is ${userType}, account ID is ${accountId}, property account ID is ${property.accountId}`);
    return res.status(200).json(property);
  } else {
    console.log(`Hitting else statement in httpGetProperty. userType is ${userType}, account ID is ${accountId}, property account ID is ${property.accountId}`);
    return res.status(403).json({ error: 'Unauthorized'} );
  }
};

async function httpGetAllProperties(req, res) {
  const { userType } = await validateUser(req);

  if (userType !== 'employee') {
    return res.status(403).json({ error: 'Unauthorized access' });
  }

  return res.status(200).json(await getAllProperties())
};

async function httpAddProperty(req, res) {
  const { userType, accountId } = await validateUser(req);
  
  if (userType === 'employee') {
    throw new Error('Cannot create new listing as an employee');
  }
  
  const property = req.body;
  property.ownerId = accountId;
  await addProperty(property);

  res.status(201).json({ message: 'Property added successfully', property });
};

async function httpUpdateAmenities(req, res) {
  const propertyId = req.params.id;
  const { addAmenities, removeAmenities } = req.body;
  
  return res.status(200).json(await updateAmenities(propertyId, addAmenities, removeAmenities));
};

async function httpUpdateRooms(req, res) {
  const propertyId = req.params.id;
  const { addRooms, removeRooms, updatedRooms } = req.body;

  return res.status(200).json(await updateRooms(propertyId, addRooms, removeRooms, updatedRooms));
};

async function httpUpdateDescription(req, res) {
  const propertyId = req.params.id;
  const { description } = req.body;

  return res.status(200).json(await updateDescription(propertyId, description));
};

module.exports = {
  httpGetProperty,
  httpGetAllProperties,
  httpAddProperty,
  httpUpdateAmenities,
  httpUpdateRooms,
  httpUpdateDescription,
};