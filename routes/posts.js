/*this is where form routes will be*/
import {
    sendWorkout,
    sanitizeWorkout,
    sanitizeUser,
    getWorkout
} from '../controllers/controller.js';
const express = require('express');
const router = express.Router();
const title = 'Rocko Fitness';
const {body, validationResult } = require('express-validator');
import workoutSchema from '../backend/models/workoutModel';
import workoutForm from '../backend/models/planForm';
router
.post('/workoutPlans', sanitizeWorkout, function (req,res,next){
    //console.log(req.body);
    var err = validationResult(req);
    if (!err.isEmpty()) {
        res.send('error: invalid characters in form.')
        // you stop here 
    }else{
        getWorkout(req, res);
        sendWorkout(req, res);
    }
});

module.exports = router;