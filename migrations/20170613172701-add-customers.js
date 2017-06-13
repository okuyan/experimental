'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Customers', [
      { name: 'customer1', email: 'dgdgjdgd@bills.com', createdAt: '2017-06-13', updatedAt: '2017-06-13' },
    	{ name: 'customer2', email: 'gfkdfgk@bills.com', createdAt: '2017-06-13', updatedAt: '2017-06-13' },
    	{ name: 'customer3', email: 'bviweahi34t@bills.com', createdAt: '2017-06-13', updatedAt: '2017-06-13' },
    	{ name: 'customer4', email: 'vwuhgvf@bills.com', createdAt: '2017-06-13', updatedAt: '2017-06-13' },
    	{ name: 'customer5', email: 'qdfgwuhyyw@bills.com', createdAt: '2017-06-13', updatedAt: '2017-06-13' }
    ], {});
  },

  down: function (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Customers');
  }
};
