/*
this file will contain all calculations and logic applied
to our data
*/
const express = require('express');
const { workoutSchema } = require('../backend/models/workoutModel');
const { workoutForm } = require('../backend/models/planForm')
const mongoose = require('mongoose').set('debug', true);
const db = mongoose.connection;
console.log(mongoose.collection);

/*TODO: complete this query*/
async function sendWorkout(req){
    const workout = new workoutForm({
        _id: mongoose.Types.ObjectId(),
        /*look at planForm.js for reference*/
        body_type: req.body.bodyType,     // req.body.<value of form field from html>
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
    getWorkout
};  //export all your functions when complete