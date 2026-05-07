import express from 'express';
import { getAggregation, registerStudent } from '../controllers/studentController.js';
const r=express.Router();
r.post('/register',registerStudent);
r.get('/aggregation',getAggregation);
export default r;
