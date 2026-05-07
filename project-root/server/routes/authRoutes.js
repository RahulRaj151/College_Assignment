import express from 'express';
import { login, register, revalidate } from '../controllers/authController.js';
import { protect } from '../middleware/authMiddleware.js';
const r=express.Router();
r.post('/register',register);
r.post('/login',login);
r.post('/revalidate',protect,revalidate);
export default r;
