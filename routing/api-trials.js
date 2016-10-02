var express = require('express');
var router = express.Router();
var session = require('express-session');
var bcrypt = require('bcryptjs');
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
var _ = require('underscore');
var axios = require('axios');
var Trial = require('../models/Trial');
var User = require('../models/UserModel');
var Answer = require('../models/Answers');

require('../config/passport');

  router.get('/api/trials', function(req, res){
    Trial.find().sort({_id: 1}).exec(function(err, doc){

        if(err){
          console.log(err);
        }
        else {
          res.json(doc);
        }
      })
  });

  router.post('/api/trials-answers', function(req, res){

    var answers = req.body;
    answers.user_id = req.user._id;
    var newAnswer = new Answer(answers);
    console.log('//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////');
    console.log(newAnswer)
    
    newAnswer.save(function(err, doc){
      console.log(req.user);
        if(err){
          console.log(err);
        }
        else {
          res.json(doc);
        }
      });
  });


router.get('/after-test', function(req, res) {
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
                // res.render('users/assessment_results', {
                //   scores: scores,
                //   layout: 'dash'
                // });
            }).then(function() {
              var istrue = true;
              
              User.findOneAndUpdate({_id: req.user._id}, {$set: {"assessmentTaken":istrue}}).exec(function(err) {
                
                if(err) {
                  throw err;
                } else {
                  res.render('users/assessment_results', {
                    scores: scores,
                    layout: 'dash'
                  });
                }
              });
            });
          });
        })
      });
    });
  }); //first one
}); 
});//router ends
 






module.exports = router;
