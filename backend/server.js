import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

import './config/db.js';

import productRoutes from './routes/productRoutes.js';
import recommendationRoutes from './routes/recommendationRoutes.js';
import bookingRoutes from './routes/bookingRoutes.js';
import authRoutes from './routes/authRoutes.js';

const app = express();

app.use(cors());
app.use(express.json());

app.use('/api/products', productRoutes);
app.use('/api/recommendation', recommendationRoutes);
app.use('/api/bookings', bookingRoutes);
app.use('/api/auth', authRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});