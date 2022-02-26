/*this is where form routes will be*/
import {
    sendWorkout,
    sanitizeWorkout,
    sanitizeUser
} from '../controllers/controller.js';
const express = require('express');
const router = express.Router();
const title = 'Rocko Fitness';
const {body, validationResult } = require('express-validator');
router
.post('/workoutPlans', sanitizeWorkout, sendWorkout);