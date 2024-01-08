const { properties, propertyObject } = require('../properties');

async function getProperty(listingNumber) {
  const property = properties[listingNumber - 1];
  
  if (properties.length < listingNumber) {
    return console.error(`Listing number does not exist`);
  }
  return await property;
};

async function getAllProperties(){
  return await properties;
}

async function addProperty(listing) {
  const currentListingNumber = properties.length + 1;
  const nullValues = [];

  const newListing = {
    ...propertyObject,
    ...listing,
    listingNumber: currentListingNumber,
  };

  for (const property in newListing) {
    if (newListing[property] === null) {
      nullValues.push(property);
    }
  }

  if (nullValues.length > 0) {
    throw new Error(`Missing property fields: ${nullValues}`);
  }

  properties.push(newListing);
  return newListing;
};

async function updateAmenities(listingNumber, addAmenities, removeAmenities) {
 const property = properties[listingNumber - 1];
 let currentAmenities = property.amenities;

 if (addAmenities && Array.isArray(addAmenities)) {
   property.amenities = [...new Set([...currentAmenities, ...addAmenities])];
 };

 if (removeAmenities && Array.isArray(removeAmenities)) {
  property.amenities = property.amenities.filter(
    (amenity) => !removeAmenities.includes(amenity)
  );
 };

 return await property;
};

 async function updateRooms(listingNumber, addRooms, removeRooms, updatedRooms) {
  const property = properties[listingNumber - 1];
  let currentRooms = property.rooms;

  if (addRooms && Array.isArray(addRooms)) {
    property.rooms = [...new Set([...currentRooms, ...addRooms])];
  };

  if (removeRooms && Array.isArray(removeRooms)) {
    property.rooms = property.rooms.filter(
      (room) => !removeRooms.includes(room.name)
    );
  };

  return await property;
 };

 async function updateDescription (listingNumber, description){
  property.ownerDescription = description;
  return await property.ownerDescription;
 }

module.exports = {
  getProperty,
  getAllProperties,
  addProperty,
  updateAmenities,
  updateRooms,
  updateDescription,
};