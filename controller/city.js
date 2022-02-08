const cityJson = require('../data-init/cities');
const City = require('../models/city');
const axios = require('axios');
const { APP_ID, W_URI } = process.env;

exports.getCities = async (req, res, next) => {
  const {skip, limit} = req.query;
  console.log(await City.countDocuments());
  let cityCount = await City.countDocuments();

  if (cityCount == 0) await City.insertMany(cityJson);

  cityCount = await City.countDocuments();

  const city = await City.find().skip(skip).limit(limit);
  return res.send({ city, count: cityCount });
};

exports.createCity = async (req, res) => {
  let city = await City.findOne(req.body);

  if (!city) {
    city = await City.create(req.body);
    return res.status(201).send(`${city.name} created`);
  }

  return res.status(409).send(`${city.name} already exists`);
};

exports.getCityByName = async (req, res) => {
    const { city } = req.params;
    const result = await axios.get(`${W_URI}?q=${city}&appid=${APP_ID}`);
    return res.send(result.data.list.splice(0, 5));
  }
