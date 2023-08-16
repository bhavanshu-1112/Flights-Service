const express = require('express');
const { Airplanecontroller } = require('../../controllers');
const { AirplaneMiddlewares } = require('../../middlewares');

const router = express.Router();


// /api/v1/airplanes  POST request
router.post('/', AirplaneMiddlewares.validateCreateRequest, Airplanecontroller.createAirplane);


// /api/v1/airplanes  GET request
router.get('/',  Airplanecontroller.getAirplanes);

// /api/v1/airplanes/:id  GET request
router.get('/:id',  Airplanecontroller.getAirplane);

// /api/v1/airplanes/:id  DELETE request
router.delete('/:id',  Airplanecontroller.destroyAirplane);

module.exports = router;

