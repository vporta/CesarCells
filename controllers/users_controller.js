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
var StargReg = require('../models/StargReg.js');
// var sg = require('sendgrid').SendGrid(process.env.SENDGRID_API_KEY)
var helper = require('sendgrid').mail
var async = require('async');
var crypto = require('crypto');
var pa = require('../config/passport');


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
      user: req.user,
      successFlash: 'You are now signed up!',
      failureFlash: 'Invalid email or password!'
    });
});


// ==== SIGN-IN FORM ====
router.get('/users/sign-in', function(req, res) {
  res.render('users/sign_in', {
    user: req.user,
    successFlash: 'You are now signed in!',
    failureFlash: 'Invalid email or password!'

  });
});



// ==== SIGN_UP & SIGN-IN PASSPORT AUTH ====
router.post('/users/sign_up', passport.authenticate('local.signup', {
  successRedirect: '/users/details_new',
  failureRedirect: '/users/sign_up',
  failureFlash: true,
  successFlash: true

  // req.flash('signup', 'Thank You for Signing Up. You\'re almost there. Check your email inbox to confirm your email address!');
}));

router.post('/users/dashboard', passport.authenticate('local.login', {

    successRedirect : '/users/dashboard', // redirect to the secure profile section
    failureRedirect : '/users/sign-in', // redirect back to the signup page if there is an error
    failureFlash : true, // allow flash messages
    successFlash: true

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
  // console.log(req.user.local.email);
  console.log('req.user: ' + req.user)
  var data = {};
  
  Trial.find({
  }).then(function(result) {
    data.trials = result;
  User.find({ 
  }).then(function(result) {
      
      data.users = result;
      // req.flash('success', 'Welcome back, ' + req.user.firstname)
      res.render('users/dashboard', {
      data: data,
      layout: 'dash',
      user: req.user,
      successFlash: 'Howdy, ' + req.user.firstname,
      failureFlash: 'Invalid email or password!'

      });
    });
  });
});

// ==== SECOND SIGNUP FORM USER DETAILS FORM ====
router.get('/users/details_new', function(req, res) {
  
  res.render('users/details_new', {
    successFlash: 'You are now signed up!',
    failureFlash: 'Invalid email or password!'
  });
});

router.post('/users/details_new', function(req, res) {
  var firstname = req.body.fname;
  var lastname = req.body.lname;
  var age = req.body.userage;
  var sex = req.body.sexselectpicker;
  var dob = req.body.bday;
  var diagnosedStarg = req.body.diagnosedSelect;
  var email = req.user.local.email;

// console.log(req.user);
  User.findOneAndUpdate({'_id': req.user._id}, {$set: {"firstname": firstname, "lastname": lastname, "age": age, "sex": sex, "birth_day": dob, "stargardtsDiagnosis": diagnosedStarg}}, {upsert: true}).exec(function(err){

    if(err){
      console.log(err);
    }

    else{
      // SEND WELCOME EMAIL HERE;
      var helper  = require('sendgrid').mail;
      from_email = new helper.Email(email)
      to_email = new helper.Email("vporta7@gmail.com")
      var subject = "Welcome To CesarCells!";
      var contents = "Hello " + firstname + ',\n\n' + 'The team here at CesarCells would like to welcome you on your journey to finding treatments for yourself, or your loved ones. We are here to help you succeed in finding the right treatment. There are several resources available to you on the site, but don\'t hesitate to reach out to us for any questions.\n\n' + 'Best,\n\n' + 'Vincent Porta\n\n' + 'Founder'
      content = new helper.Content("text/plain", contents)
      mail = new helper.Mail(from_email, subject, to_email, content)

      var sg = require('sendgrid').SendGrid('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')
      var requestBody = mail.toJSON()
      var request = sg.emptyRequest()
      request.method = 'POST'
      request.path = '/v3/mail/send'
      request.body = requestBody

      sg.API(request, function (response) {
        console.log(response.statusCode)
        console.log(response.body)
        console.log(response.headers)
        console.log(response)
  })
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
  res.render('users/password_new', {
    layout: 'main',
    user: req.user
  });
});

router.post('/users/password_new', function(req, res) {
  // SEND RESET PASSWORD EMAIL HERE
  console.log(req.body.email);
  var email = req.body.email;

  // GENERATE RANDOM TOKEN
  crypto.randomBytes(30, function(err, buf) {
    
    var token = buf.toString('hex');
    
    if (err) {
      throw err;
    }else {

      // console.log(token);

      User.findOne({'local.email': email}, function(err, user) {
        // console.log('Hello' + user.local);
        // console.log('Hello err' + err);

        if(!user) {
          req.flash('error', 'No account with that email address exists.');
          res.render('users/password_new', {
            layout: 'main',
            error: req.flash('error')
          })
        }else {
          user.resetPasswordToken = token;
          user.resetPasswordExpires = Date.now() + 3600000; // 1 hour

          user.save(function(err) {
            
          });
          // console.log(user + " ===========two=============");

        }
      }).then(function(user) {
          var name = 'CesarCells Password Reset';
          var contents = 'Hi ' +user.firstname + ',\n\n' + 'You are receiving this because you (or someone else) have requested the reset of the password for your account.\n\n' +
                'Please click on the following link, or paste this into your browser to complete the process:\n\n' +
                'http://' + req.headers.host + '/reset/' + token + '\n\n' +
                'If you did not request this, please ignore this email and your password will remain unchanged.\n';
          
          var helper  = require('sendgrid').mail;
          from_email = new helper.Email('passwordreset@cesarcells.com')
          to_email = new helper.Email(user.local.email)
          subject = name;
          content = new helper.Content("text/plain", contents)
          mail = new helper.Mail(from_email, subject, to_email, content)

          var sg = require('sendgrid').SendGrid('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')
          var requestBody = mail.toJSON()
          var request = sg.emptyRequest()
          request.method = 'POST'
          request.path = '/v3/mail/send'
          request.body = requestBody

          sg.API(request, function (response) {
            console.log(response.statusCode)
            console.log(response.body)
            console.log(response.headers)
            console.log(response)
          });
        }) //end promise

        req.flash('success', 'An email has been sent to ' +email+ ' with further instructions.');

        res.render('users/password_new', {
          layout: 'main',
          email: email,
          success: req.flash('success')
          
        });
    } //end first else statement
  }); 
});

router.get('/reset/:token', function(req, res) {
  User.findOne({ resetPasswordToken: req.params.token, resetPasswordExpires: { $gt: Date.now() } }, function(err, user) {
    if (!user) {
      req.flash('error', 'Password reset token is invalid or has expired.');
      return res.redirect('/users/password_new');
    }
    res.render('users/password_reset', {
      user: req.user,
      layout: 'main',
      token: req.params.token
    });
  });
});

router.post('/reset/:token', function(req, res) {
  var token = req.params.token;
  var newpassword = req.body.password;
  _newpassword = bcrypt.hashSync(newpassword);
  console.log(newpassword);
  
  User.findOneAndUpdate({ resetPasswordToken: token, resetPasswordExpires: { $gt: Date.now() }}, {$set: {'local.password': _newpassword, resetPasswordToken: undefined, resetPasswordExpires: undefined}}).then(function(user) {
    
    console.log("This is a user: " + user);

    var name = 'Your password has been changed';
    var contents = 'Hello,\n\n' + 'This is a confirmation that the password for your email ' + user.local.email + ' has just been changed.\n';

    var helper  = require('sendgrid').mail;
    from_email = new helper.Email('passwordreset@cesarcells.com')
    to_email = new helper.Email(user.local.email)
    subject = name;
    content = new helper.Content("text/plain", contents)
    mail = new helper.Mail(from_email, subject, to_email, content)

    var sg = require('sendgrid').SendGrid('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')
    var requestBody = mail.toJSON()
    var request = sg.emptyRequest()
    request.method = 'POST'
    request.path = '/v3/mail/send'
    request.body = requestBody

    sg.API(request, function (response) {
      console.log(response.statusCode)
      console.log(response.body)
      console.log(response.headers)
      console.log(response)
    })
  })
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

var newStargReg = new StargReg ({
  visualtrouble: req.body.visualtrouble,
  besteyevision: req.body.besteyevision,
  visiontoday: req.body.visiontoday,
  stargeneticallyconfirm: req.body.stargeneticallyconfirm,
  genemutation: req.body.genemutation,
  opthaname: req.body.opthaname,
  opthaemail: req.body.opthaemail,
  underlegalguardian: req.body.underlegalguardian,
  filledoutform: req.body.filledoutform,
  user_id: req.user._id
});

if (req.user && req.user.stargRegTaken) {
  req.flash('info', 'Form has already been submitted, ' + req.user.firstname + '!');

  res.render('users/star_disease_reg', {
    layout: 'dash',
    user: req.user,
    info: req.flash('info')
  });
}else {

  newStargReg.save(function(err) {

    if(err){
      console.log(err);
    }

    else {
      var istrue = true;
      
      User.findOneAndUpdate({_id: req.user._id}, {$set: {"stargRegTaken":istrue}}).exec(function(err) {
        
        if(err) {
          throw err;
        } else {
          req.flash('success', 'Thank you for submitting the form.');

          res.render('users/star_disease_reg', {
            layout: 'dash',
            user: req.user,
            success: req.flash('success')
          });
        }
      });
      
    }
  });
}
});

router.get('/users/my-appointments', function (req, res) {

  res.render('users/appointments', {
    layout: 'dash',
    user: req.user
  });
});


module.exports = router;
