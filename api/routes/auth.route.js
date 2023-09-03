import express from 'express'
import { signup } from '../controllers/auth.controller.js';


const router = express.Router();

// Attach the 'signup' function to handle POST requests to '/signup'
router.post('/signup', signup);

export default router;