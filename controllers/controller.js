       /*
this file will contain all calculations and logic applied
to our data
*/
const express = require('express');
const { workoutSchema } = require('../backend/models/workoutModel');
const { workoutForm } = require('../backend/models/planForm')
const mongoose = require('mongoose').set('debug', true);
const db = mongoose.connection;
const {body, validationResult } = require('express-validator');

//validator middlewares
let sanitizeWorkout = [
    body('bodyType').matches(/^[a-zA-Z0-9 ]*$/).trim(),
    body('time').matches(/^[0-9]*$/).trim(),
    body('goal').matches(/^[0-9]*$/).trim()
];
let sanitizeUser = [
    body('fname').matches(/^[a-zA-Z0-9 ]*$/).trim(),
    body('lname').matches(/^[a-zA-Z0-9 ]*$/).trim(),
    body('email').isEmail().normalizeEmail([{gmail_remove_dots: true}]).trim(),
    body('phone').matches(/^[a-zA-Z0-9 ]*$/).trim(),
    body('dispName').matches(/^[a-zA-Z0-9 ]*$/).trim()
];

/*TODO: complete this query*/
async function sendWorkout(req){
    const workout = new workoutForm({
        _id: mongoose.Types.ObjectId(),
        /*look at planForm.js for reference*/
        body_type: req.body.bodyType, 
             time: req.body.time,
             goal: req.body.goal,
             user: req.user.id
            // req.body.<value of form field from html>
        /*complete the rest of the save object. Look at planForm.js for reference*/

        /*dont work below this line*/
    });
    workout.save().then(res =>{
        console.log('save successful');
    }).catch(err => {
        console.log(err)
    })
}

async function getWorkout(req, res){
    let weight = req.body.weight;  //form input
    let time = req.body.time;
    let bodyType = req.body.bodyType;
    /*write a query to find plans that match the weight, time, and bodytype fromt the request*/
    let workout = db.collection('workout_plans')/*work on this line*/.find({  }).then((resp)=>{
    /*dont work below this line*/
        try{
            console.log(workout);
        }catch(err){
            console.log(err);
        }  
    })
    /*.catch((err)=>{
        console.log(err)
    })*/
}

/*function(req,res,next){
    const rental = new RideModel({
    _id: mongoose.Types.ObjectId(),
    user: req.user._id,
    start: req.body.startTime,
    end: req.body.endTime,
    //price: req.body.,
    car: req.body.car,
    start_location: req.body.pickupLocation,
    payment: req.body.payment
    });
    rental.save()
    .then(result => {   
        res.render('thankyou', {
          pageMainClass: 'thankYou',
          title: 'Thanks! Your rental has been successfully placed.',
          details: details,
          path: '/'
        });
    })
    .catch(err => {
        res.send(err);
        console.log(err);
    })
  }*/
module.exports = {
    sendWorkout,
    getWorkout,
    sanitizeUser,
    sanitizeWorkout
};  //export all your functions when complete