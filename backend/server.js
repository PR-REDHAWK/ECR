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

// Allow requests from your deployed frontend and local development
app.use(
  cors({
    origin: [
      'http://localhost:5173',
      'https://ecr-9giv.onrender.com'
    ],
    credentials: true
  })
);

app.use(express.json());

// Health + root routes
app.get('/', (req, res) => {
  res.send('Backend is running!');
});

app.get('/health', (req, res) => {
  res.json({
    status: 'ok',
    message: 'Backend is running'
  });
});

// API routes
app.use('/api/products', productRoutes);
app.use('/api/recommendation', recommendationRoutes);
app.use('/api/bookings', bookingRoutes);
app.use('/api/auth', authRoutes);

// 404 handler for unknown API routes
app.use((req, res) => {
  res.status(404).json({
    error: 'Route not found'
  });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
