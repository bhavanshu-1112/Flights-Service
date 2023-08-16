const express = require('express');

const { Infocontroller } = require('../../controllers');

const airplaneRoutes = require('./airplane-routes');
const cityRoutes = require('./city-routes');

const router = express.Router();


router.use('/airplanes', airplaneRoutes);
router.use('/cities', cityRoutes);

router.get('/info', Infocontroller.info);

module.exports = router;
 