const express = require('express');
const app = express();
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const authRoutes = require('./routes/auth');
const cors = require('cors');
const donorRoutes = require('./routes/donors');
const prospectRoutes = require('./routes/prospect');


module.exports = app;
app.use(cors());

app.use(express.json());

app.use('/api/v1/auth',authRoutes);
app.use('/api/v1/donors',donorRoutes);
app.use('/api/v1/prospects',prospectRoutes);

dotenv.config({path:'./.env'});