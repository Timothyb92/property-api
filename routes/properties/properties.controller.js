const { 
  getListing,
  getAllListings,
  addListing,
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
  const listing = await getListing(req.params.id);

  if (userType === 'customer' && accountId && accountId.toString() === listing.accountId.toString()) {
    return true;
  }  
};

async function httpGetListing(req, res) {
  const listing = await getListing(req.params.id);

  if (await handleCustomer(req) || req.get('User-Type') === 'employee') {
    return res.status(200).json(listing); 
  } else {
    return res.status(403).json({
      error: 'Unauthorized access'
    })
  }
};

async function httpGetAllListings(req, res) {
  const { userType } = await validateUser(req);

  if (userType !== 'employee') {
    return res.status(403).json({
      error: 'Unauthorized access'
    });
  }

  return res.status(200).json(await getAllListings())
};

async function httpAddListing(req, res) {
  const { userType, accountId } = await validateUser(req);
  
  if (userType !== 'customer') {
    return res.status(403).json({
      error: 'Must be a customer to create a new listing'
    })
  }
  
  const listing = req.body;
  listing.accountId = accountId;
  await addListing(listing);

  return res.status(201).json({
    message: 'Listing added successfully',
    listing
  });
};

async function httpUpdateAmenities(req, res) {
  const listing = req.params.id;
  const { addAmenities, removeAmenities } = req.body;
  
  if (await handleCustomer(req)) {
    return res.status(200).json(await updateAmenities(listing, addAmenities, removeAmenities));
  } else {
    return res.status(403).json({
      error: 'Unauthorized'
    });
  }
};

async function httpUpdateRooms(req, res) {
  const listingId = req.params.id;
  const { addRooms, removeRooms, updatedRooms } = req.body;

  if (await handleCustomer(req)){
    return res.status(200).json(await updateRooms(listingId, addRooms, removeRooms, updatedRooms));
  } else {
    return res.status(403).json({
      error: 'Unauthorized'
    });
  }
};

async function httpUpdateDescription(req, res) {
  const listingId = req.params.id;
  const { description } = req.body;

  if (await handleCustomer(req)) {
    return res.status(200).json(await updateDescription(listingId, description));
  } else {
    return res.status(403).json({
      error: 'Unauthorized'
    });
  }
};

module.exports = {
  httpGetListing,
  httpGetAllListings,
  httpAddListing,
  httpUpdateAmenities,
  httpUpdateRooms,
  httpUpdateDescription,
};