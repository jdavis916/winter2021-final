import {
	dispName,
	phone,
	testimonials,
	email,
	about,
	address
} from '../stubs.js';
var express = require('express');
var router = express.Router();
let title = 'Rocko Fitness';

/* GET home page */
router.get('/', function(req, res, next) {
  res.render('index', { 
  	title: title,
  	msg: 'Message',
  	pageMainClass: 'pgHome'
  });
})

//stub data debug, hit this route to see stubbed data
.get('/stub', function(req, res, next) {
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
});

module.exports = router;
