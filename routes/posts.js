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
import User from '../backend/models/userModel';
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
})
.post('/signup', (req, res, next)=>{
    console.log(req);
    User.register(new User({
      _id: mongoose.Types.ObjectId(),
      fname: req.body.fname,
      lname: req.body.lname,
      email: req.body.email,
      username: req.body.username,
      password: req.body.password,
      phone: req.body.phone,
    }), req.body.password, ((err, user)=>{
      if(err){
        console.log(req.password);
        console.log(err);
        res.send('error signing up: ' + err);
      }else{
        console.log('sign up successful.');
        passport.authenticate('local', { 
          failureRedirect: '/error' 
        })(req, res, () => {
          //error = false;
          res.setHeader('Content-Type', 'application/json');
          res.send('successfully registered');

        });
      }
    })
  )})
  .post('/login', passport.authenticate('local', { failureRedirect: '/login' }), (req, res) => {
    //console.log(req);
    console.log('=-=-=-=-=-=-=Test=-=-=-=-=-=-');
    console.log('user id: ' + req.user.id);
    try{
      //console.log(JSON.stringify(req.headers));
      res.setHeader('Content-Type', 'application/x-www-form-urlencoded');
      res.statusCode = 200;
      res.send('logged in!');
      //window.location.reload();
  
    }catch(err){
      //var path = '/login';
      res.send('error loggin in: ' + err);
    }   
  });

module.exports = router;