const express = require('express');
const axios = require('axios');
const app = express();
require('dotenv').config();
require('./config/db');
const cityRouter = require('./routes/city');

const { PORT, APP_ID, W_URI } = process.env;

app.use(express.json());

app.use(cityRouter)

app.use((err, req, res, next) => {
  console.log(err);
});

app.listen(PORT, () => {
  console.log(`Listening on ${PORT}`);
});
