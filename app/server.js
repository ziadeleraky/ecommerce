require('dotenv').config();
require("./database/connect");
const express = require('express');

const app = express();

const adminRoutes = require('../routes/admin.routes')
const userRoutes = require('../routes/user.routes')
app.use(express.urlencoded({ extended: true }));
app.use(express.json())
app.use('/admin',adminRoutes);

module.exports = app;