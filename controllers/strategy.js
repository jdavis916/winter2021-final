var express = require('express');
const userModel = require('../backend/models/userModel')
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const mongoose = require('mongoose');
var db = mongoose.connection;
//var signInError = false;

//responsible for storing reference to user in the cookie
passport.serializeUser((user, done)=>{        //stores a token for the session in the browser cookie
	done(null, user.id);
});

passport.deserializeUser((id, done)=>{       //takes a token from the cookie and converts it to user id
	userModel.findById(id, (err, user)=> {
		done(err, user);
	});
});


//strategy for passport to handle sign in validation
passport.use(
	new LocalStrategy(
  	function(req, username, pw, done) {
        console.log('user : ' + user);
//finds a user by the info entered in. returns an error if user isn't found
  	  userModel.findOne({ username: username }, function (err, user) {
        
  	    if (err) { return done(err);}
  	    if (!user) { return done(null, false);}
  	    if (!user.verifyPassword(pw)) { return done(null, false); }
  	    return done(null, user);
  	  });
  	}
    )
);

module.exports = passport;