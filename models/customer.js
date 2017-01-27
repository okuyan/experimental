'use strict';
module.exports = function(sequelize, DataTypes) {
  var Customer = sequelize.define('Customer', {
    name: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      },
      findNoPurchase: function() {
        const query = `SELECT c.id AS id, c.name AS name
	       FROM customers c
	       LEFT JOIN purchases p ON c.id = p.customer_id
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
