const properties = [
  {
    amenities: [
      'grill',
      'fully equipped kitchen',
      'wifi',
      'smart tv',
    ],
    listingNumber: 1,
    propOwner: 'Tim Bedsole',
    numOfRooms: 4,
    numOfBaths: 2,
    fullAddress: {
      street: '2420 Roygaris St NW',
      city: 'Palm Bay',
      state: 'Florida',
      zip: 32907,
    },
    sqFt: 2000,
    rooms: [
      'bedroom 1',
      'living room',
      'bedroom 2',
      'garage',
      'lanai',
      'bedroom 3',
      'bedroom 4',
      'kitchen',
    ],
    //houseTheme: string,
    propertyType: 'single family',
    floors: 1,
    lotSize: 2300,
    parkingSpots: 4,
    //interior features: string[],
    //exterior features: string[],
    petFriendly: true,
    heatedPool: false,
    gatedCommunity: true,
    keylessEntry: true,
    securityCameras: true,
    ownerDescription: 'This is a 4 bedroom 2 bathroom house that sleeps 8 guests. 85 inch TV and large sectional for the whole family to gather around, fenced in back yard with a grill.',
  },
  {
    listingNumber: 2,
    propOwner: 'Jinny',
    address: '777 Corona',
  }
];

const propertyObject = {
  amenities: null,
  listingNumber: null,
  propOwner: null,
  numOfRooms: null,
  numOfBaths: null,
  fullAddress: null,
  sqFt: null,
  rooms: null,
  propertyType: null,
  floors: null,
  lotSize: null,
  parkingSpots: null,
  petFriendly: null,
  heatedPool: null,
  gatedCommunity: null,
  keylessEntry: null,
  securityCameras: null,
  ownerDescription: null,
};

async function getProperty(listingNumber) {
  console.log(`Listing owned by ${properties[listingNumber - 1].propOwner}`);
  return await properties[listingNumber - 1];
};

async function getAllProperties(){
  return await properties;
}

async function addProperty(listing) {
  const nullValues = [];
  const newListng = Object.assign(propertyObject, listing);

  for (const property in newListng) {
    if (newListng[property] === null) {
      nullValues.push(property);
    }
  };

  if (nullValues.length > 0) {
    throw new Error(`Missing property fields: ${nullValues}`);
  };

  console.log(`Running addProperty in properties model`);
  properties.push(newListng);
  return newListng;
};

module.exports = {
  getProperty,
  getAllProperties,
  addProperty,
};