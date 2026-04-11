// controllers/bookingController.js
import pool from '../config/db.js';

export const getBookings = async (req, res) => {
  try {
    const result = await pool.query(`
      SELECT 
        bookings.*,
        products.name AS product_name
      FROM bookings
      LEFT JOIN products
      ON bookings.product_id = products.id
      ORDER BY bookings.created_at DESC
    `);

    res.json(result.rows);
  } catch (err) {
    console.error(err);
    res.status(500).json({
      message: 'Failed to fetch bookings',
    });
  }
};

export const createBooking = async (req, res) => {
  try {
    const {
      name,
      email,
      phone,
      productId,
      serviceType,
      days,
    } = req.body;

    const result = await pool.query(
      `
      INSERT INTO bookings
      (name, email, phone, product_id, service_type, days)
      VALUES ($1, $2, $3, $4, $5, $6)
      RETURNING *
      `,
      [name, email, phone, productId, serviceType, days]
    );

    res.status(201).json({
      message: 'Booking created successfully',
      booking: result.rows[0],
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({
      message: 'Failed to create booking',
    });
  }
};