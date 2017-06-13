const express = require('express');
const models = require('./models');
const fs = require('fs');
const path = require('path');

const app = express();

app.use(express.static('public'));

app.get('/', (req, res) => {
  res.send('Hello World!')
});

app.get('/api/customers', (req, res) => {
  models.Customer.findNoOrders().then((customers) => {
    res.json(customers);
  });
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
});
