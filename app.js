const express = require('express');
const app = express();
const morgan = require('morgan');
const bodyParser = require('body-parser');

// CORS handling
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*'); // allow access to all with *
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept, Authorization'
  );
  if (req.method === 'OPTIONS') {
    res.header('Access-Control-ALlow-Methods', 'PUT, POST, GET, PATCH, DELETE');
    return res.status(200).json({});
  }
  next();
});

// Routes which should handle requests
const productRoutes = require('./api/routes/products');
const productOrders = require('./api/routes/orders');

// Morgan Logging
app.use(morgan('dev'));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use('/products', productRoutes);
app.use('/orders', productOrders);

module.exports = app;
