const express = require('express');
const app = express();

// Routes which should handle requests
const productRoutes = require('./api/routes/products');
const productOrders = require('./api/routes/orders');

app.use('/products', productRoutes);
app.use('/orders', productOrders);

module.exports = app;
