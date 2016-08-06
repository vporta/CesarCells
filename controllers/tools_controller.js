var express = require('express');
var session = require('express-session');
var router = express.Router();
var bcrypt = require('bcryptjs');
var path = require('path');
var passport = require('passport');
var Trial = require('../models/Trial.js');
var Amsler = require('../models/Amsler.js');
var User = require('../models/UserModel.js');
var flash = require('connect-flash');
var helpers = require('../helpers/mail.js');
var axios = require('axios');
// var $ = require("jquery");
var cheerio = require('cheerio');
var request = require('request');

router.get('/tools/start-health-assessment', function (req, res) {
console.log('assessmentTaken: '+ req.user.assessmentTaken);
  if (req.user && req.user.assessmentTaken) {
    // window.alert = null;
    // alert('test'); // fail
    // delete window.alert; // true
    // alert("You've already taken the assessment!");
    req.flash('taken', 'You\'ve already taken the assessment.')

    res.render('users/dashboard', {
      layout: 'dash',
      taken: req.flash('taken'),
      assessmentTaken: req.user.assessmentTaken
    });
  } else {
    res.render('tools/start_assessment', {layout: 'dash'}); 
  }
      
});


router.get('/tools/stemcell-assessment', function (req, res) {
 
    res.render('tools/stemcell_assessment', {
      layout: 'dash'
    });
});



router.get('/tools/genetic', function (req, res) {

  res.render('tools/genetic_report', {layout: 'dash'});
});


// grant_type=authorization_code&code=[CODE_FROM_STEP1]
//     &client_id=[APP_KEY]&client_secret=[APP_SECRET]
//     &redirect_uri=https%3A%2F%2Fclient%2Eexample%2Ecom%2Fcb
router.get('/receive_code/', function(req, res) {
  
  var client_id = "dd6b7f51cb19ee4bd93bfe59438f7956";
  var client_secret = "56d48e1817b9efd9b94db085a3f54164";
  var scope = 'rs2476601';
  var redirect_uri = 'http://localhost:3000/receive_code/';
  // var base_uri = 'https://api.23andme.com/1';
  var code = req.query.code;
  console.log('=======================' + code);


  axios.post('https://api.23andme.com/token/', {
    form: {
      client_id: client_id,
      client_secret: client_secret, 
      grant_type: 'authorization_code',
      code: req.query.code
    },
    redirect_uri: 'http://localhost:3000/receive_code/',
    scope: "=basic%20rs3094315"
    }).then(function (response) {
      console.log(response);

      res.send(response);
    }).catch(function (error) {
      console.log(error);
    });
      // res.render('tools/genetic_report', {layout: 'dash'});
});

// curl https://api.23andme.com/token/
//          -d client_id='dd6b7f51cb19ee4bd93bfe59438f7956' \
//          -d client_secret='56d48e1817b9efd9b94db085a3f54164' \
//          -d grant_type='authorization_code' \
//          -d code=99dc66d57e6f11d2bb8b48f233ebfc8e \
//          -d "redirect_uri=http://localhost:3000/receive_code/"
//          -d "scope=basic%20rs3094315"
router.get('/tools/all-trials', function (req, res) {
  
  var data = {};
  
  Trial.find({
  }).then(function(result) {
    
    data.trials = result;
   
   User.find({ 
   }).then(function(result) {

    data.users = result;
    res.render('tools/all_trials', {
      data: data,
      layout: 'dash'
    });
   })
  })
});

// AMSLER PAGE ROUTES
router.get('/tools/amsler-test', function (req, res) {
  var data = {};
  Amsler.find({user_id: req.user._id}).then(function(result) {
    data.notes = result;
    console.log('==========================000000====================' + result);
  })
  res.render('tools/amsler_test_page', {
    data: data,
    layout: 'dash'
  });
});

router.post('/tools/amsler-grid-results', function(req, res) {
  
  var usernote = req.body.textfield;
  var dateCreated = req.body.datefield;


  var newAmsler = new Amsler({ usernote: usernote, dateCreated: dateCreated, user_id: req.user._id});

  newAmsler.save(function(err) {

    if(err){
      console.log(err);
    }

    else {
      res.redirect('/tools/amsler-test');
    }
  });
});

router.delete('/delete-note/:_id', function (req, res) {
var deleteNote = req.params._id;
  if (req.user) {


  Amsler.find({user_id: req.user._id, _id: deleteNote}).then(function(notes) {

    debugger;
    Amsler.remove({_id: deleteNote}, function(err, removed) {
      if(err) {
        throw err;
      } else {
        res.redirect('/tools/amsler-test');
      }
    });
  });
  } else {
    res.send("Sorry You Can't Do That. You Must Be Logged In.");
  }
});

module.exports = router;