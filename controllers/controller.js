       /*
this file will contain all calculations and logic applied
to our data
*/
const express = require('express');
import PlanForm from '../backend/models/planForm';
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

//saves form inout to DB
function sendWorkout(req, res){
    const workout = new PlanForm({
        _id: mongoose.Types.ObjectId(),
        body_type: req.body.bodyType, 
        time: req.body.time,
        goal: req.body.goal,
        user: req.session.passport.user
    });
    workout.save().then(result =>{
        try{
            //res.send(getWorkout(req, res));
            console.log('save successful');
        }catch(err){
            console.log(err);
        }
       
    }).catch(err => {
        console.log(err);
        //res.send(err);
    })
}

//retrieves workouts matching user input from DB
async function getWorkout(req, res){
    console.log('proof of connection: ' + db.collection('workout_plans'));
    let weights = +(req.body.goal);  //form input
    let times = +(req.body.time);
    let bodyType = req.body.bodyType;
    try{
        db.collection('workout_plans').find({weight_loss: { $lte: weights}, time: { $lte: times }}).toArray(function(err,resp){
            res.send(resp.length > 0 ? resp : 'no result');
        });
    }catch(err){
        res.send(err);
    }
}

//authentication middleware for workout page
function authUser(req, res, next){
	if (!req.session.hasOwnProperty('passport')){
		res.status(403);
		res.render('error', {
			message: 'You need to sign in!',
		})
		return res.send('You need to sign in');
	};

	next();
};
   
//gets display name
function whoIs(req){
    return req.session.hasOwnProperty('passport') ? req.session.passport.user : undefined;
}
    
module.exports = {
    sendWorkout,
    getWorkout,
    sanitizeUser,
    sanitizeWorkout,
    authUser,
    whoIs
};  //export all your functions when complete