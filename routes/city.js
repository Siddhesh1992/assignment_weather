const express = require('express');
const router = express.Router();
const cityController = require('../controller/city');

router.get('/', cityController.getCities);

router.post('/', cityController.createCity);

router.get('/getByCity/:city', cityController.getCityByName);

module.exports = router;
