'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Orders', [
      { customer_id: 1, price: 10, createdAt: '2017-06-13 08:50:00', updatedAt: '2017-06-13 08:50:00' },
      { customer_id: 1, price: 20, createdAt: '2017-06-13 08:50:00', updatedAt: '2017-06-13 08:50:00' },
      { customer_id: 3, price: 20, createdAt: '2017-06-13 08:50:00', updatedAt: '2017-06-13 08:50:00' },
      { customer_id: 4, price: 20, createdAt: '2017-06-13 08:50:00', updatedAt: '2017-06-13 08:50:00' }
    ], {});
  },

  down: function (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Orders');
  }
};
