const express = require('express');
const app = express();
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const authRoutes = require('./routes/auth');


module.exports = app;
app.use(cors());

app.use(express.json());

app.use('/api/auth',require('./routes/auth'));