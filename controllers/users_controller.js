var express = require('express');
var session = require('express-session');
var bcrypt = require('bcryptjs');
var passport = require('passport');
var router = express.Router();
var LocalStrategy = require('passport-local').Strategy;
var User = require('../models/UserModel.js');


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

// ==== FACEBOOK AUTH ==== 
// route for facebook authentication and login
router.get('/auth/facebook', passport.authenticate('facebook', { scope : 'email' }));

// handle the callback after facebook has authenticated the user
router.get('/auth/facebook/callback',
    passport.authenticate('facebook', {
        successRedirect : '/users/dashboard',
        failureRedirect : '/users/sign-in'
    }));


// ==== PERSONAL USER DASHBOARD ====
router.get('/users/dashboard', function (req, res) {
  res.render('users/dashboard', {layout: 'dash'});
});


// ==== SECOND SIGNUP FORM USER DETAILS FORM ====
router.get('/users/details_new', function(req, res) {
  console.log('This is req.user: '+req.user);
  res.render('users/details_new');
});

router.post('/users/details_new', function(req, res) {

  var firstname = req.body.fname;
  var lastname = req.body.lname
  var sex = req.body.sexselectpicker;
  var dob = req.body.bday;
  var diagnosedStarg = req.body.diagnosedSelect;

console.log(req.user);

  User.update({'_id': req.user._id}, {$set: {"firstname": firstname, "lastname": lastname, "sex": sex, "birth_day": dob, "stargardtsDiagnosis": diagnosedStarg}}, {upsert: true}).exec(function(err){

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


// router.get('/whats-stargardts-disease', function(req, res) {
//   res.render('resources/whats_stargardts');
// });

// router.get('/stargardts-clinical-trials', function(req, res) {
//   res.render('resources/clinical_trial_descr');
// });

// router.get('/stargardts-glossary', function(req, res) {
//   res.render('resources/glossary');
// });

// router.get('/stargardts-stemcell-story', function(req, res) {
//   res.render('resources/story_cesar');
// });

module.exports = router;

