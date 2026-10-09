const mongoose = require('mongoose');
const Trip = mongoose.model('trips');

// GET: /api/trips
// Returns all trips
const tripsList = async (req, res) => {
    try {
        const trips = await Trip.find({}).exec();

        if (!trips) {
            return res.status(404).json({
                message: 'Trips not found'
            });
        }

        return res.status(200).json(trips);
    } catch (err) {
        return res.status(500).json(err);
    }
};

// GET: /api/trips/:tripCode
// Returns a single trip
const tripsFindByCode = async (req, res) => {
    try {
        const trip = await Trip.findOne({
            code: req.params.tripCode
        }).exec();

        if (!trip) {
            return res.status(404).json({
                message: 'Trip not found'
            });
        }

        return res.status(200).json(trip);
    } catch (err) {
        return res.status(500).json(err);
    }
};

// POST: /api/trips
// Create a new trip
const tripsAddTrip = async (req, res) => {
  try {
    const {
      code,
      name,
      length,
      start,
      resort,
      perPerson,
      image,
      description
    } = req.body;

    // Validate required fields
    if (
      !code ||
      !name ||
      !length ||
      !start ||
      !resort ||
      !perPerson ||
      !image ||
      !description
    ) {
      return res.status(400).json({
        message: 'All fields are required'
      });
    }

    // Check whether the trip code already exists
    const existingTrip = await Trip.findOne({ code });

    if (existingTrip) {
      return res.status(409).json({
        message: 'Trip code already exists'
      });
    }

    // Create and save the trip
    const newTrip = await Trip.create({
      code,
      name,
      length,
      start,
      resort,
      perPerson,
      image,
      description
    });

    return res.status(201).json(newTrip);

  } catch (err) {
    console.error('Error adding trip:', err);

    return res.status(500).json({
      message: 'Error adding trip',
      error: err.message
    });
  }
};

// Export controller functions
module.exports = {
  tripsList,
  tripsFindByCode,
  tripsAddTrip
};;