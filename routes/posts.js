/*this is where form routes will be*/
import {sendWorkout} from '../controllers/controller.js';
var express = require('express');
var router = express.Router();
let title = 'Rocko Fitness';

router
.post('/workoutPlans', sendWorkout);