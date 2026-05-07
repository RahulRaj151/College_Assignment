import cors from 'cors';
import dotenv from 'dotenv';
import express from 'express';

import { connectDB } from './config/db.js';
import authRoutes from './routes/authRoutes.js';
import passwordRoutes from './routes/passwordRoutes.js';
import studentRoutes from './routes/studentRoutes.js';

dotenv.config();

const app = express();

app.use(
  cors({
    origin: process.env.CLIENT_URL,
    credentials: true
  })
);
app.use(express.json());

app.get('/', (req, res) => {
  res.json({ message: 'Secure Password Manager API is running' });
});

app.use('/api/auth', authRoutes);
app.use('/api/passwords', passwordRoutes);
app.use('/api/students', studentRoutes);

app.use((err, req, res, next) => {
  console.error(err);
  res.status(err.status || 500).json({
    message: err.message || 'Internal server error'
  });
});

const PORT = process.env.PORT || 5000;

connectDB()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`🚀 Server running on port ${PORT}`);
    });
  })
  .catch((error) => {
    console.error('Database connection failed:', error.message);
    process.exit(1);
  });
