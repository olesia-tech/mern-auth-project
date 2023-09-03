import express  from "express";
import { test } from "../controllers/user.controller.js";

const router = express.Router();
// Attach the 'test' function to handle GET requests to the root ('/') of this router
router.get('/', test);

export default router;