import express from 'express';
import { addPassword, viewPasswords } from '../controllers/passwordController.js';

const router = express.Router();
router.post('/password/add', addPassword);
router.get('/password/view/:userId', viewPasswords);

export default router;
