/*this is where form routes will be*/
import { sendWorkout, sanitizeWorkout, sanitizeUser, getWorkout } from '../controllers/controller.js';
const express = require('express');
const router = express.Router();
const title = 'Rocko Fitness';
const mongoose = require('mongoose').set('debug', true);
const {body, validationResult } = require('express-validator');
var passport = require('passport');
const bcrypt = require('bcrypt');
const saltRounds = 10;
import { makeUser } from '../controllers/signup.js'
router
.post('/workoutPlans', sanitizeWorkout, function (req,res,next){
    //console.log(req.body);
    var err = validationResult(req);
    if (!err.isEmpty()) {
        res.send('error: invalid characters in form.')
    }else{
        getWorkout(req, res);  //query that matches workouts in DB based on input
        sendWorkout(req, res);  //saves workout form data to DB
    }
})
.post('/signup', (req, res, next)=>{
    console.log(req);
    makeUser(req, res, next); //passport function that creates a new user. imported from signup,js
})
.post('/login', sanitizeUser, passport.authenticate('local', { failureRedirect: '/login' }), (req, res) => {
  try{
    res.setHeader('Content-Type', 'application/x-www-form-urlencoded');
    res.statusCode = 200;
    res.redirect('/workout');
  }catch(err){
    //var path = '/login';
    res.send('error loggin in: ' + err);
  }   
});

module.exports = router;