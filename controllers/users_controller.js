var express = require('express');
var session = require('express-session');
var bcrypt = require('bcryptjs');
var passport = require('passport');
var router = express.Router();
var LocalStrategy = require('passport-local').Strategy;
var User = require('../models/UserModel.js');
var Trial = require('../models/Trial.js');


// === HOME PAGE ======
router.get('/', function (req, res) {
  res.render('index', {layout: 'main'});
});

// ==== SIGN_UP BEGINS ====
router.get('/users/sign_up', function (req, res) {
    res.render('users/sign_up');
});


// ==== SIGN-IN FORM ====
router.get('/users/sign-in', function(req, res) {
  res.render('users/sign_in');
});


// ==== SIGN_UP & SIGN-IN PASSPORT AUTH ====
router.post('/users/sign_up', passport.authenticate('local.signup', {
  successRedirect: '/users/details_new',
  failureRedirect: '/users/sign_up',
  failureFlash: true
}));

router.post('/users/dashboard', passport.authenticate('local.login', {

    successRedirect : '/users/dashboard', // redirect to the secure profile section
    failureRedirect : '/users/sign-in', // redirect back to the signup page if there is an error
    failureFlash : true // allow flash messages
}));

router.get('/auth/facebook', passport.authenticate('facebook'));

// CALLBACK FB AUTH
router.get('/auth/facebook/callback',
    passport.authenticate('facebook', {
        successRedirect : '/users/dashboard',
        failureRedirect : '/users/sign-in'
    }));

// ==== PERSONAL USER DASHBOARD ====
router.get('/users/dashboard', function (req, res) {
  console.log(req.user);
  var data = {};
  
  Trial.find({
  }).then(function(result) {
    console.log('-------HEY NO------------------------' + result)
    data.trials = result;
  User.find({ 
  }).then(function(result) {
    data.users = result;
    console.log('-------HEY NO--------------------------' + result)
    
    res.render('users/dashboard', {
      data: data,
      layout: 'dash'
    });
   });
  });
});

// ==== SECOND SIGNUP FORM USER DETAILS FORM ====
router.get('/users/details_new', function(req, res) {
  console.log('This is req.user: '+req.user);
  res.render('users/details_new');
});

router.post('/users/details_new', function(req, res) {
  var firstname = req.body.fname;
  var lastname = req.body.lname;
  var age = req.body.userage;
  var sex = req.body.sexselectpicker;
  var dob = req.body.bday;
  var diagnosedStarg = req.body.diagnosedSelect;

console.log(req.user);
//qualify users for certain studies now. 
  User.findOneAndUpdate({'_id': req.user._id}, {$set: {"firstname": firstname, "lastname": lastname, "age": age, "sex": sex, "birth_day": dob, "stargardtsDiagnosis": diagnosedStarg}}, {upsert: true}).exec(function(err){

    if(err){
      console.log(err);
    }

    else{
      res.redirect('/users/dashboard');
    }
  });
  
});

// ==== SIGNOUT ====
router.get('/users/sign-out', function(req, res) {
  req.logout();
  res.redirect('/');
});

// ==== RESET PASSWORD ====
router.get('/users/password_new', function(req, res) {
  res.render('users/password_new');
});

router.post('/users/password_new', function(req, res) {
  res.redirect('/');
});


module.exports = router;
