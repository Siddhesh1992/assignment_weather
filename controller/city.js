const cityJson = require('../data-init/cities');
const City = require('../models/city');

exports.getCities = async (req, res, next) => {
  console.log(await City.countDocuments());
  const cityCount = await City.countDocuments();

  if (cityCount == 0) await City.insertMany(cityJson);

  const city = await City.find();
  res.send({ city, count: city.length });
};

exports.createCity = async (req, res) => {
  let city = await City.findOne(req.body);

  if (!city) {
    city = await City.create(req.body);
    return res.status(201).send(`${city.name} created`);
  }

  res.status(409).send(`${city.name} already exists`);
};

exports.getCityByName = async (req, res) => {
    const { city } = req.params;
    const result = await axios.get(`${W_URI}?q=${city}&appid=${APP_ID}`);
    res.send(result.data.list.splice(0, 5));
  }
