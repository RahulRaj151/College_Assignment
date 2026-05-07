import express from 'express';
import { addPassword, deletePassword, getPasswords } from '../controllers/passwordController.js';
import { protect } from '../middleware/authMiddleware.js';
const r=express.Router();
r.post('/add',protect,addPassword);
r.get('/',protect,getPasswords);
r.delete('/:id',protect,deletePassword);
export default r;
