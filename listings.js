const listings = [
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
      {
        name: 'bedroom 1',
        beds: ['King']
      },
      {
        name: 'living room',
        beds: []
      },
      {
        name: 'bedroom 2',
        beds: ['Queen']
      },
      {
        name: 'garage',
        beds: []
      },
      {
        name: 'lanai',
        beds: []
      },
      {
        name: 'bedroom 3',
        beds: ['Twin', 'Twin', 'Queen']
      },
      {
        name: 'bedroom 4',
        beds: ['Twin bunk']
      },
      {
        name: 'kitchen',
        beds: []
      },
    ],
    propertyType: 'single family',
    floors: 1,
    lotSize: 2300,
    parkingSpots: 4,
    petFriendly: true,
    heatedPool: false,
    gatedCommunity: true,
    keylessEntry: true,
    securityCameras: true,
    ownerDescription: 'This is a 4 bedroom 2 bathroom house that sleeps 8 guests. 85 inch TV and large sectional for the whole family to gather around, fenced in back yard with a grill.',
    accountId: 113,
  },
  {
    amenities: [
      'gym',
      'pool table',
      'pack n play',
      'fire pit',
      'balcony',
    ],
    listingNumber: 2,
    propOwner: 'Jinny Kim',
    numOfRooms: 4,
    numOfBaths: 2,
    fullAddress: {
      street: '321 Emerson Dr',
      city: 'Denver',
      state: 'Colorado',
      zip: 80202,
    },
    sqFt: 2000,
    rooms: [
      {
        name: 'bedroom 1',
        beds: ['King']
      },
      {
        name: 'living room',
        beds: []
      },
      {
        name: 'bedroom 2',
        beds: ['Queen']
      },
      {
        name: 'garage',
        beds: []
      },
      {
        name: 'lanai',
        beds: []
      },
      {
        name: 'bedroom 3',
        beds: ['Twin', 'Twin', 'Queen']
      },
      {
        name: 'bedroom 4',
        beds: ['Twin bunk']
      },
      {
        name: 'kitchen',
        beds: []
      },
    ],
    propertyType: 'Townhouse',
    floors: 2,
    lotSize: 2300,
    parkingSpots: 8,
    petFriendly: false,
    heatedPool: false,
    gatedCommunity: true,
    keylessEntry: true,
    securityCameras: true,
    ownerDescription: 'This is a modern townown in Downtown Denver with city views',
    accountId: 824,
  },
  {
    amenities: [
      'fireplace',
      'home theater',
      'backyard',
      'patio',
      'game room',
    ],
    listingNumber: 3,
    propOwner: 'John Doe',
    numOfRooms: 3,
    numOfBaths: 2.5,
    fullAddress: {
      street: '123 Main St',
      city: 'Los Angeles',
      state: 'California',
      zip: 90001,
    },
    sqFt: 1800,
    rooms: [
      { name: 'master bedroom', beds: ['King'] },
      { name: 'living room', beds: ['Sofa bed', 'Chair'] },
      { name: 'guest bedroom', beds: ['Queen'] },
    ],
    propertyType: 'Single Family Home',
    floors: 1,
    lotSize: 2000,
    parkingSpots: 2,
    petFriendly: true,
    heatedPool: true,
    gatedCommunity: false,
    keylessEntry: true,
    securityCameras: false,
    ownerDescription: 'Beautiful single-family home with a spacious backyard and fireplace',
    accountId: 567,
  },
  {
    amenities: [
      'swimming pool',
      'garden',
      'security system',
      'home office',
      'gourmet kitchen',
    ],
    listingNumber: 4,
    propOwner: 'Alice Smith',
    numOfRooms: 5,
    numOfBaths: 3,
    fullAddress: {
      street: '456 Oak Lane',
      city: 'San Francisco',
      state: 'California',
      zip: 94110,
    },
    sqFt: 2500,
    rooms: [
      { name: 'master bedroom', beds: ['King'] },
      { name: 'bedroom 2', beds: ['Queen'] },
      { name: 'bedroom 3', beds: ['Double'] },
      { name: 'office', beds: [] },
      { name: 'family room', beds: ['Sofa bed'] },
    ],
    propertyType: 'Luxury Home',
    floors: 2,
    lotSize: 3000,
    parkingSpots: 3,
    petFriendly: true,
    heatedPool: true,
    gatedCommunity: true,
    keylessEntry: true,
    securityCameras: true,
    ownerDescription: 'Luxurious home with a beautiful garden and high-end amenities',
    accountId: 999,
  },
  {
    amenities: [
      'fitness center',
      'rooftop terrace',
      'concierge service',
      'private elevator',
      'wine cellar',
    ],
    listingNumber: 5,
    propOwner: 'Tim Bedsole',
    numOfRooms: 2,
    numOfBaths: 2.5,
    fullAddress: {
      street: '789 Pine Street',
      city: 'New York',
      state: 'New York',
      zip: 10001,
    },
    sqFt: 1800,
    rooms: [
      { name: 'master suite', beds: ['King'] },
      { name: 'living and dining area', beds: [] },
    ],
    propertyType: 'Luxury Condo',
    floors: 10,
    lotSize: 1000,
    parkingSpots: 1,
    petFriendly: false,
    heatedPool: false,
    gatedCommunity: true,
    keylessEntry: true,
    securityCameras: true,
    ownerDescription: 'Exclusive condo with top-notch amenities and breathtaking views',
    accountId: 113,
  },
];

const listingObject = {
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

module.exports = {
  listings,
  listingObject,
};