const express = require('express');
const router = express.Router();
const tripsController = require('../controllers/trips');
const authenticationController = require('../controllers/authentication');
const authenticateJWT = require('../middleware/auth');

router.route('/trips')
  .get(tripsController.tripsList)
  .post(authenticateJWT, tripsController.tripsAddTrip);

router.route('/trips/:tripCode')
  .get(tripsController.tripsFindByCode)
  .put(authenticateJWT, tripsController.tripsUpdateTrip);

router.post('/login', authenticationController.login);

module.exports = router;