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
 ///2///
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
///5///
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
///8///
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