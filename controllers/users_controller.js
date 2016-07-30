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
var helpers = require('../helpers/mail');


// === HOME PAGE ======
router.get('/', function (req, res) {

  res.render('index', {
    layout: 'main',
    user: req.user
  });
});

// ==== SIGN_UP BEGINS ====
router.get('/users/sign_up', function (req, res) {
    res.render('users/sign_up', {
      user: req.user
    });
});


// ==== SIGN-IN FORM ====
router.get('/users/sign-in', function(req, res) {
  res.render('users/sign_in', {
    user: req.user
  });
});



// ==== SIGN_UP & SIGN-IN PASSPORT AUTH ====
router.post('/users/sign_up', passport.authenticate('local.signup', {
  successRedirect: '/users/details_new',
  failureRedirect: '/users/sign_up',
  failureFlash: true
  // req.flash('signup', 'Thank You for Signing Up. You\'re almost there. Check your email inbox to confirm your email address!');
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
  })
);

// ==== PERSONAL USER DASHBOARD ====
router.get('/users/dashboard', function (req, res) {
  console.log(req.user.local.email);
  console.log('req.user: ' + req.user)
  var data = {};
  
  Trial.find({
  }).then(function(result) {
    // console.log('-------HEY NO------------------------' + result)
    data.trials = result;
  User.find({ 
  }).then(function(result) {
    data.users = result;
    // console.log('-------HEY NO--------------------------' + result)
    
    res.render('users/dashboard', {
      data: data,
      layout: 'dash',
      user: req.user,
      messages: req.flash('info') 

    });
   });
  });
});

// ==== SECOND SIGNUP FORM USER DETAILS FORM ====
router.get('/users/details_new', function(req, res) {
  
  res.render('users/details_new');
});

router.post('/users/details_new', function(req, res) {
  var firstname = req.body.fname;
  var lastname = req.body.lname;
  var age = req.body.userage;
  var sex = req.body.sexselectpicker;
  var dob = req.body.bday;
  var diagnosedStarg = req.body.diagnosedSelect;

// console.log(req.user);
  User.findOneAndUpdate({'_id': req.user._id}, {$set: {"firstname": firstname, "lastname": lastname, "age": age, "sex": sex, "birth_day": dob, "stargardtsDiagnosis": diagnosedStarg}}, {upsert: true}).exec(function(err){

    if(err){
      console.log(err);
    }

    else{
      // helpers.send(helloEmail());
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

// ==== VIEW RESULTS ====
router.get('/users/view-results', function (req, res) {
    var scores = [];

      Answer.find({user_id: req.user._id, trial_id: 0}, function(err, doc) {

        var arr = _.reduce(doc, function(total, num) { 
          return total + num.user_answer; 
        }, 0);

        var object = {
          trial_id:0,
          points: arr
        };
        scores.push(object);

    }).then(function(doc) {

        Answer.find({user_id: req.user._id, trial_id: 1}, function(err, doc) {
        
          var arr = _.reduce(doc, function(total, num) { 
            return total + num.user_answer; 
          }, 0);

          var object = {
            trial_id:1,
            points: arr
          };

        scores.push(object);
        // console.log('======== These are scores ==========='+ scores +'================');
      }).then(function(doc) {

        Answer.find({user_id: req.user._id, trial_id: 2}, function(err, doc) {

            var arr = _.reduce(doc, function(total, num) { 
              return total + num.user_answer; 
            }, 0);

            var object = {
              trial_id:2,
              points: arr
            };

          scores.push(object);

        }).then(function(doc) {

          Answer.find({user_id: req.user._id, trial_id: 3}, function(err, doc) {

              var arr = _.reduce(doc, function(total, num) { 
                return total + num.user_answer; 
              }, 0);

              var object = {
                trial_id:3,
                points: arr
              };

            scores.push(object);

          }).then(function(doc) {

            Answer.find({user_id: req.user._id, trial_id: 4}, function(err, doc) {

                var arr = _.reduce(doc, function(total, num) { 
                  return total + num.user_answer; 
                }, 0);

                var object = {
                  trial_id:4,
                  points: arr
                };

              scores.push(object);

            }).then(function(doc) {

              Answer.find({user_id: req.user._id, trial_id: 6}, function(err, doc) {

                  var arr = _.reduce(doc, function(total, num) { 
                    return total + num.user_answer; 
                  }, 0);

                  var object = {
                    trial_id:6,
                    points: arr
                  };

                scores.push(object);

              }).then(function(doc) {

                Answer.find({user_id: req.user._id, trial_id: 7}, function(err, doc) {

                    var arr = _.reduce(doc, function(total, num) { 
                      return total + num.user_answer; 
                    }, 0);

                    var object = {
                      trial_id:7,
                      points: arr
                    };

                  scores.push(object);
  // render a new users/results hbs page that will display the results of the assessment and tell the user if they have qualified or not. 
                  // res.json(scores);
                  res.render('users/assessment_results', {
                    scores: scores,
                    layout: 'dash'
                  });
              });
            });
          });
        });
      });
    }); //first one
  }); 
});

// ==== STARGARDT DISEASE REGISTRY FORM ====
router.get('/users/stargardt-disease-registry', function (req, res) {

  res.render('users/star_disease_reg', {
    layout: 'dash',
    user: req.user
  });
});

router.post('/users/submit-stargardt-disease-registry', function (req, res) {

  res.render('users/star_disease_reg', {
    layout: 'dash',
    user: req.user
  });
});


module.exports = router;
