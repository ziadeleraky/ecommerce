require('dotenv').config();
require("./database/connect");
const express = require('express');

const app = express();

const adminRoutes = require('../routes/admin.routes')
const userRoutes = require('../routes/user.routes')
const productRoutes = require('../routes/product.routes')
const cartRoutes = require('../routes/cart.routes')
const orderRoutes = require('../routes/order.routes')


app.use(express.urlencoded({ extended: true }));
app.use(express.json())
app.use('/admin',adminRoutes);
app.use('/user',userRoutes);
app.use('/products',productRoutes);
app.use('/cart',cartRoutes);
app.use('/order',orderRoutes);




module.exports = app;