import express from 'express';
import userController from './users.controller.js';

const router = express.Router();

// Register new user
router.post('/register', userController.register.bind(userController));

// Login user
router.post('/login', userController.login.bind(userController));

export default router;
