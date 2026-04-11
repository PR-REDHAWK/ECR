import db from '../config/db.js';

export const createBooking = async (req, res) => {
  try {
    const { productId, serviceType, days } = req.body;

    const [result] = await db.query(
      `INSERT INTO bookings
      (user_id, product_id, service_type, days)
      VALUES (?, ?, ?, ?)`,
      [req.user.id, productId, serviceType, days]
    );

    res.status(201).json({
      id: result.insertId,
      user_id: req.user.id,
      product_id: productId,
      service_type: serviceType,
      days,
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      message: 'Failed to create booking',
    });
  }
};

export const getMyBookings = async (req, res) => {
  try {
    const [bookings] = await db.query(
      `SELECT b.*, p.name AS product_name, p.image
       FROM bookings b
       JOIN products p ON b.product_id = p.id
       WHERE b.user_id = ?
       ORDER BY b.id DESC`,
      [req.user.id]
    );

    res.json(bookings);
  } catch (error) {
    console.error(error);

    res.status(500).json({
      message: 'Failed to fetch bookings',
    });
  }
};