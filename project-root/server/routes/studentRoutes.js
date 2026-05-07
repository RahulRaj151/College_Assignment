import express from 'express';
import { aggregateStudents, createStudent } from '../controllers/studentController.js';

const router = express.Router();
router.post('/students', createStudent);
router.get('/students/aggregate', aggregateStudents);

export default router;
