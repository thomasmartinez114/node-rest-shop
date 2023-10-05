const express = require('express');
const app = express();
const bodyParser = require('body-parser');

// Routes which should handle requests
const productRoutes = require('./api/routes/products');
const productOrders = require('./api/routes/orders');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use('/products', productRoutes);
app.use('/orders', productOrders);

module.exports = app;
