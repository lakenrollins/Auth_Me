'use strict';
let options = {};
if (process.env.NODE_ENV === 'production') {
  options.schema = process.env.SCHEMA;  // define your schema in options object
}
module.exports = {
  up: async (queryInterface, Sequelize) => {
    const options = {};
    if (process.env.NODE_ENV === 'production') {
      options.schema = process.env.SCHEMA;
    }},
},
///1///
await queryInterface.createTable('Spots', [{
  id: 1,
  ownerId: 1,
  address: '39 E 29th St',
  city: 'Nomad New York',
  state: 'NY',
  country: 'USA',
  lat: 22.5556,
  lng:-22.5556,
  name: 'Penthouse',
  description: 'Beautiful Penthouse with skyline views for rent in Nomad New York',
  price: 600.00,
  createdAt: new Date(),
  updatedAt: new Date(),
}])
 ///2///
await queryInterface.bulkInsert('Spots', [{
  id:2,
  ownerId: 2,
  address: '277 5th Avenue',
  city: 'Nomad New York',
  state: 'NY',
  country: 'USA',
  lat: 22.5556,
  lng:-22.5556,
  name: 'Penthouse',
  description: 'See all of New York city from this luxurious Penthouse',
  price: 600.00,
  createdAt: new Date(),
  updatedAt: new Date(),
}])
///3///
await queryInterface.bulkInsert('Spots', [{
  id:2,
  ownerId: 2,
  address: '111 West 57th Street',
  city: 'Manhattan New York',
  state: 'NY',
  country: 'USA',
  lat: 22.5556,
  lng:-22.5556,
  name: 'Penthouse',
  description: 'Billionaire Row Apartment for rent',
  price: 600.00,
  createdAt: new Date(),
  updatedAt: new Date(),
}])
///4///
await queryInterface.bulkInsert('Spots', [{
  id: 3,
  ownerId: 3,
  address: '11 W 30th Street',
  city: 'Manhattan New York',
  state: 'NY',
  country: 'USA',
  lat: 22.5556,
  lng:-22.5556,
  name: 'Condo',
  description: 'Condo for rent close to the Empire State Building, modern and luxurious',
  price: 600.00,
  createdAt: new Date(),
  updatedAt: new Date(),
}])
///5///
await queryInterface.bulkInsert('Spots', [{
  id:2,
  ownerId: 2,
  address: '400 Park Avenue South',
  city: 'Manhattan New York',
  state: 'NY',
  country: 'USA',
  lat: 22.5556,
  lng:-22.5556,
  name: 'Penthouse',
  description: 'Enjoy panoramic views of the New York City Skyline from this lxurious and spacious apartment ',
  price: 600.00,
  createdAt: new Date(),
  updatedAt: new Date(),
}])
///6///
await queryInterface.bulkInsert('Spots', [{
  id:2,
  ownerId: 2,
  address: '111 West 57th Street',
  city: 'Manhattan New York',
  state: 'NY',
  country: 'USA',
  lat: 22.5556,
  lng:-22.5556,
  name: 'Penthouse',
  description: 'Billionaire Row Apartment for rent',
  price: 600.00,
  createdAt: new Date(),
  updatedAt: new Date(),
}])
///7///
await queryInterface.bulkInsert('Spots', [{
  id:2,
  ownerId: 2,
  address: '212 5th Ave',
  city: 'Manhattan New York',
  state: 'NY',
  country: 'USA',
  lat: 22.5556,
  lng:-22.5556,
  name: 'Penthouse',
  description: 'Stunning views of Bryant Park in this spacious apartment',
  price: 450.00,
  createdAt: new Date(),
  updatedAt: new Date(),
}])
///8///
await queryInterface.bulkInsert('Spots', [{
  id:2,
  ownerId: 2,
  address: '25 West 28th Street',
  city: 'Manhattan New York',
  state: 'NY',
  country: 'USA',
  lat: 22.5556,
  lng:-22.5556,
  name: 'Penthouse',
  description: 'Stunning Skyline Views of the most beautiful city in the world',
  price: 500.00,
  createdAt: new Date(),
  updatedAt: new Date(),
}])