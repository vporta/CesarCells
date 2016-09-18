var express = require('express');
var session = require('express-session');
var bcrypt = require('bcryptjs');
var passport = require('passport');
var flash = require('connect-flash');
var router = express.Router();
var LocalStrategy = require('passport-local').Strategy;
var FacebookStrategy = require('passport-facebook').Strategy;
var _ = require('underscore');
var User = require('../models/UserModel.js');
var Trial = require('../models/Trial.js');
var Answer = require('../models/Answers.js');
var sg = require('sendgrid').SendGrid(process.env.SENDGRID_API_KEY)
var helper = require('sendgrid').mail
var async = require('async');


var ensureAuthenticated = function(req, res, next){
    if (req.isAuthenticated()) {
        return next();
    }
    res.redirect('/users/sign-in');
};

// === HOME PAGE ======
router.get('/accounts/updateinfo', ensureAuthenticated, function (req, res) {

  res.render('account/updateinfo', {
    layout: 'dash',
    user: req.user
  });
});

router.get('/accounts/password', ensureAuthenticated, function (req, res) {

  res.render('account/password', {
    layout: 'dash',
    user: req.user
  });
});

router.get('/accounts/privacy', ensureAuthenticated, function (req, res) {

  res.render('account/privacy', {
    layout: 'dash',
    user: req.user
  });
});

router.get('/accounts/privacy-home', ensureAuthenticated, function (req, res) {

  res.render('account/privacy', {
    layout: 'main',
    user: req.user
  });
});

router.get('/accounts/support', ensureAuthenticated, function (req, res) {

  res.render('account/support', {
    layout: 'dash',
    user: req.user
  });
});

router.post('/accounts/update-info', ensureAuthenticated, function (req, res) {

  var firstname = req.body.fname;
  var lastname = req.body.lname;
  var age = req.body.userage;
  var sex = req.body.sexselectpicker;
  var city = req.body.city;
  var address = req.body.streetaddy;
  var state = req.body.stateselectpicker;
  var zip = req.body.zipcode;
  var dob = req.body.bday;
  // var profileImage = req.file;
  var diagnosedDis = req.body.diagnosedSelect;
  var retinalDisease = req.body.retinalDisease;
  var userType = req.body.userType;

  // console.log(profileImage);

  User.findOneAndUpdate({'_id': req.user._id}, {$set: {"firstname": firstname, "lastname": lastname, "age": age, "sex": sex, "birth_day": dob, "retinalDiagnosis": diagnosedDis, "retinalDisease": retinalDisease, "city": city, "address": address, "state": state, "zipcode": zip, "userType": userType}}, {upsert: true}).exec(function(err){

    if(err){
      console.log(err);
    }

    else{
      // helpers.send(helloEmail());
      console.log(req.user);
      res.redirect('/users/dashboard');
    }
  });
});

router.post('/accounts/password-update', function (req, res, next) {
// var saltRounds = 8;
var password = req.body.oldpassword;
var newpassword = req.body.newpassword;
 _newpassword = bcrypt.hashSync(newpassword);


  if (!req.user) {
    req.flash('error', 'Wrong email or password');
    res.render('account/password', {
      layout: 'dash',
      error: req.flash('error')
    })
  }else {

    if (bcrypt.compareSync(password, req.user.local.password)) {
      // SEND EMAIL TO CONFIRM PASSWORD CHANGE
      _newpassword = bcrypt.hashSync(newpassword);

      User.findOneAndUpdate({'_id': req.user._id}, {$set: {'local.password': _newpassword}}).then(function(user) {

        req.flash('success', 'Your password has been updated!');
        
        res.render('account/password', {
          layout: 'dash',
          user: req.user,
          success: req.flash('success')
        });
      });
    }else {
      req.flash('error', 'Wrong email or password');
      res.render('account/password', {
        layout: 'dash',
        error: req.flash('error')
      })
    }
  }
    

});


module.exports = router;
