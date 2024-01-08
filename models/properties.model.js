const { listings, listingObject } = require('../listings');

async function getListing(listingNumber) {
  const listing = listings[listingNumber - 1];
  
  if (listings.length < listingNumber) {
    return console.error(`Listing number does not exist`);
  }
  return await listing;
};

async function getAllListings(){
  return await listings;
}

async function addListing(listing) {
  const currentListingNumber = listings.length + 1;
  const nullValues = [];

  const newListing = {
    ...listingObject,
    ...listing,
    listingNumber: currentListingNumber,
  };

  for (const listing in newListing) {
    if (newListing[listing] === null) {
      nullValues.push(listing);
    }
  }

  if (nullValues.length > 0) {
    throw new Error(`Missing listing fields: ${nullValues}`);
  }

  listings.push(newListing);
  return newListing;
};

async function updateAmenities(listingNumber, addAmenities, removeAmenities) {
 const listing = listings[listingNumber - 1];
 let currentAmenities = listing.amenities;

 if (addAmenities && Array.isArray(addAmenities)) {
   listing.amenities = [...new Set([...currentAmenities, ...addAmenities])];
 };

 if (removeAmenities && Array.isArray(removeAmenities)) {
  listing.amenities = listing.amenities.filter(
    (amenity) => !removeAmenities.includes(amenity)
  );
 };

 return await listing;
};

 async function updateRooms(listingNumber, addRooms, removeRooms, updatedRooms) {
  const listing = listings[listingNumber - 1];
  let currentRooms = listing.rooms;

  if (addRooms && Array.isArray(addRooms)) {
    listing.rooms = [...new Set([...currentRooms, ...addRooms])];
  };

  if (removeRooms && Array.isArray(removeRooms)) {
    listing.rooms = listing.rooms.filter(
      (room) => !removeRooms.includes(room.name)
    );
  };

  return await listing;
 };

 async function updateDescription (listingNumber, description){
  const listing = listings[listingNumber - 1];
  
  listing.ownerDescription = description;
  
  return await listing.ownerDescription;
 }

module.exports = {
  getListing,
  getAllListings,
  addListing,
  updateAmenities,
  updateRooms,
  updateDescription,
};