import express from 'express';
import {
  createBooking,
  getMyBookings,
} from '../controllers/bookingController.js';

import { protect } from '../middleware/authMiddleware.js';

const router = express.Router();

// create a booking
router.post('/', protect, createBooking);

// get only current user's bookings
router.get('/my-bookings', protect, getMyBookings);

export default router;