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


router.get('/tools/start-health-assessment', function (req, res) {

  if (req.user && req.user.assessmentTaken) {
    // window.alert = null;
    // alert('test'); // fail
    // delete window.alert; // true
    // alert("You've already taken the assessment!");
    req.flash('info', 'You\'ve already taken the assessment. Please contact support with any questions about your assessment.')

    res.redirect('/flash-already-taken');
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