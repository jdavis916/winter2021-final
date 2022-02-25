import {
	dispName,
	phone,
	testimonials,
	email,
	about,
	address
} from '../stubs.js'; //importing stub data from stubs.js
const mongoose = require('mongoose').set('debug', true);
var express = require('express');
var router = express.Router();
let title = 'Rocko Fitness';
/*const db = mongoose.connection;
console.log(db);*/

router
/* GET home page */
.get('/', function(req, res, next) {
  res.render('index', { 
  	title: title,
  	msg: 'Message',
  	pageMainClass: 'pgHome'
  });
})
.get('/signin', function(req, res, next){
	res.render('signin', {
		title: title,
		pageTitle: 'Sign In',
		pageMainClass: 'pgSignin'
	});
})
.get('/signup', function(req, res, next){
	res.render('signup', {
		title: title,
		pageTitle: 'Sign Up',
		pageMainClass: 'pgSignup'
	});
})
.get('/workout', function(req, res, next){
	res.render('workout', {
		title: title,
		pageTitle: 'Workout Plans',
		pageMainClass: 'pgWorkout'
	});
})
.get('/stub', function(req, res, next) {    //stub data debug, hit this route to see stubbed data
	res.render('index', { 
		title: title, //page title
		msg: 'Message',
		pageMainClass: 'pgHome',
		about: about, //about paragraph
		testimonials: testimonials, //testimonial quotes
		dispName: dispName, //display name
		email: email, //stub email
		phone: phone, //stub phone
		address: address //stub address

	});
})
;

module.exports = router;
