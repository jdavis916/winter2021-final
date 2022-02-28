var passport = require('passport');
import User from '../backend/models/userModel';
const mongoose = require('mongoose').set('debug', true);
const bcrypt = require('bcrypt');
const saltRounds = 10;

function makeUser(req, res, next){
    bcrypt.hash(req.body.password, saltRounds)
    .then(function(hashedPw){
    User.register(new User({
        _id: mongoose.Types.ObjectId(),
        fname: req.body.fname,
        lname: req.body.lname,
        email: req.body.email,
        username: req.body.username,
        password: hashedPw,
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
    )
  })
}

module.exports = {makeUser};