'use strict';
module.exports = function(sequelize, DataTypes) {
  var Customer = sequelize.define('Customer', {
    name: DataTypes.STRING,
    email: DataTypes.STRING,
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      },
      findNoOrders: function() {
        const query = `SELECT c.id AS id, c.name AS name, c.email AS email
	       FROM Customers c
	       LEFT JOIN Orders p ON c.id = p.customer_id
	       WHERE p.customer_id is null`;
        return sequelize.query(query, { type: sequelize.QueryTypes.SELECT })
          .then(customers => {
            return customers;
          });
      }
    }
  });
  return Customer;
};
