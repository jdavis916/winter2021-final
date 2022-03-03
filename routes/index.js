import {
	dispName,
	phone,
	testimonials,
	email,
	about,
	address
} from '../stubs.js'; //importing stub data from stubs.js
import {  authUser, whoIs } from '../controllers/controller.js';  //authentication middleware and displayname
import session from 'express-session';
const mongoose = require('mongoose').set('debug', true);
var express = require('express');
var router = express.Router();
let title = 'Rocko Fitness';
const {body, validationResult } = require('express-validator');


router
/* GET home page */
.get('/', function(req, res, next) {
	console.log(req.passport);
  res.render('index', { 
  	title: title,
  	msg: 'Message',
  	pageMainClass: 'pgHome',
	who: whoIs(req)
  });
})
.get('/signin', function(req, res, next){
	res.render('signin', {
		title: title,
		pageTitle: 'Sign In',
		pageMainClass: 'pgSignin',
		who: whoIs(req)
	});
})
.get('/signup', function(req, res, next){
	res.render('signup', {
		title: title,
		pageTitle: 'Sign Up',
		pageMainClass: 'pgSignup',
		who: whoIs(req)
	});
})
.get('/workout', authUser, function(req, res, next){
	console.log(req.session);
	res.render('workout', {
		title: title,
		pageTitle: 'Workout Plans',
		pageMainClass: 'pgWorkout',
		who: whoIs(req)
	});
})
.get('/logout', (req, res) => {
	if (req.session) {
		console.log('before: ' + req.session);
	  req.session.destroy();
	  console.log('after: ' + req.session);
	  res.clearCookie('session-id');
	  res.redirect('/');
	}
	else {
	  var err = new Error('You are not logged in!');
	  err.status = 403;
	  next(err);
	}
})
.get('/error', function(req,res,next){
	res.render('error', {
		title: "Auth Error",
		pageTitle: 'Auth Error',
		pageMainClass: 'pgError',
		errMsg: "You need to sign in!",
		who: whoIs(req)
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
