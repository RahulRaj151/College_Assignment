import express from 'express';
import { loginUser, registerUser, revalidateMasterPassword } from '../controllers/authController.js';

const router = express.Router();
router.post('/register', registerUser);
router.post('/login', loginUser);
router.post('/revalidate', revalidateMasterPassword);

export default router;
