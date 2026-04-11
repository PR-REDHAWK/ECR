import pool from "../config/db.js";

export const getProducts = async (req, res) => {
  try {
    const result = await pool.query("SELECT * FROM products ORDER BY id DESC");
    res.json(result.rows);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Failed to fetch products" });
  }
};

export const createProduct = async (req, res) => {
  try {
    const {
      name,
      description,
      image,
      category,
      capacity,
      pricePerDay,
    } = req.body;

    const result = await pool.query(
      `
      INSERT INTO products
      (name, description, image, category, capacity, price_per_day)
      VALUES ($1, $2, $3, $4, $5, $6)
      RETURNING *
      `,
      [name, description, image, category, capacity, pricePerDay]
    );

    res.status(201).json(result.rows[0]);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Failed to create product" });
  }
};