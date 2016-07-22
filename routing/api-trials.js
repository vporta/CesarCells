 var express = require('express');
var router = express.Router();
var session = require('express-session');
var bcrypt = require('bcryptjs');
var passport = require('passport');
var router = express.Router();
var LocalStrategy = require('passport-local').Strategy;
var _ = require('underscore');
var Trial = require('../models/Trial');
var User = require('../models/UserModel');
var Answer = require('../models/Answers');

require('../config/passport');

  router.get('/api/trials', function(req, res){
    Trial.find({}).exec(function(err, doc){

        if(err){
          console.log(err);
        }
        else {
          res.json(doc);
        }
      })
  });

  router.post('/api/trials-answers', function(req, res){
    console.log('hit line 25',req.body);

    var answers = req.body;
    answers.user_id = req.user._id;
    console.log(Answer);
    var newAnswer = new Answer(answers);
    console.log('//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////');
    console.log(newAnswer)
    // console.log(req.user, req.session.passport);
    
    newAnswer.save(function(err, doc){
      console.log(req.user);
        if(err){
          console.log(err);
        }
        else {
          // res.send(doc);
          res.json(doc);
        }
      });
    // console.log(Answer);
  });
  // hit line 25 { user_answer: 1, question_id: 4, trial_id: 1 }

// db.users.find( { status: "A", age: { $lt: 30 } } )

router.get('/after-test', function(req, res) {
  
  var scores = [];

  Answer.find({user_id: req.user._id, trial_id: 0}, function(err, doc) {
    console.log('============================RESPONSE===========================');

    var arr = _.reduce(doc, function(total, num) { 
      return total + num.user_answer; 
    }, 0);

    var object = {
      trial_id:0,
      points: arr
    };
    scores.push(object); 
  }).then(function(result) {

  Answer.find({user_id: req.user._id, trial_id: 1}, function(err, doc) {
    console.log('============================RESPONSE===========================');

    var arr = _.reduce(doc, function(total, num) { 
      return total + num.user_answer; 
    }, 0);

    var object = {
      trial_id:1,
      points: arr
    };
    scores.push(object); 
  })
  }).then(function(result) {

    Answer.find({user_id: req.user._id, trial_id: 2}, function(err, doc) {
      console.log('============================RESPONSE===========================');

      var arr = _.reduce(doc, function(total, num) { 
        return total + num.user_answer; 
      }, 0);

      var object = {
        trial_id:2,
        points: arr
      };
      scores.push(object); 
})
  }).then(function(result) {

    Answer.find({user_id: req.user._id, trial_id: 3}, function(err, doc) {
      console.log('============================RESPONSE===========================');

      var arr = _.reduce(doc, function(total, num) { 
        return total + num.user_answer; 
      }, 0);

      var object = {
        trial_id:3,
        points: arr
      };
      scores.push(object); 
})
  }).then(function(result) {

    Answer.find({user_id: req.user._id, trial_id: 4}, function(err, doc) {
      console.log('============================RESPONSE===========================');

      var arr = _.reduce(doc, function(total, num) { 
        return total + num.user_answer; 
      }, 0);

      var object = {
        trial_id:4,
        points: arr
      };
      scores.push(object); 
})
  }).then(function(result) {

    Answer.find({user_id: req.user._id, trial_id: 5}, function(err, doc) {
      console.log('============================RESPONSE===========================');

      var arr = _.reduce(doc, function(total, num) { 
        return total + num.user_answer; 
      }, 0);

      var object = {
        trial_id:5,
        points: arr
      };
      scores.push(object); 
})
  }).then(function(result) {

    Answer.find({user_id: req.user._id, trial_id: 6}, function(err, doc) {
      console.log('============================RESPONSE===========================');

      var arr = _.reduce(doc, function(total, num) { 
        return total + num.user_answer; 
      }, 0);

      var object = {
        trial_id:6,
        points: arr
      };
      scores.push(object); 
   })
  }).then(function(result) {

  Answer.find({user_id: req.user._id, trial_id: 7}, function(err, doc) {
    console.log('============================RESPONSE===========================');

    var arr = _.reduce(doc, function(total, num) { 
      return total + num.user_answer; 
    }, 0);

    var object = {
      trial_id:7,
      points: arr
    };
    scores.push(object); 
  })
  })
  // res.render('users/dashboard', {
  //   scores: scores,
  //   layout: 'dash'
  // });
  res.json(scores);
  });


module.exports = router;




//within onclick, unshift first, hit api to save answer, 