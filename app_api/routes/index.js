const express = require('express');
const router = express.Router();

const ctrlTrips = require('../controllers/trips');

// Get all trips and add a new trip
router
  .route('/trips')
  .get(ctrlTrips.tripsList)
  .post(ctrlTrips.tripsAddTrip);

// Get a single trip by code
router
  .route('/trips/:tripCode')
  .get(ctrlTrips.tripsFindByCode);

module.exports = router;