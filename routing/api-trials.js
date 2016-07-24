 var express = require('express');
var router = express.Router();
var session = require('express-session');
var bcrypt = require('bcryptjs');
var passport = require('passport');
var router = express.Router();
var LocalStrategy = require('passport-local').Strategy;
var _ = require('underscore');
var axios = require('axios');
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
                res.render('users/assessment_results', {
                  scores: scores,
                  layout: 'dash'
                });
            });
          });
        })
      });
    });
  }); //first one
}); 
});//router ends
 
var uri = "https://api.23andme.com/authorize/";
var client_id = "dd6b7f51cb19ee4bd93bfe59438f7956";
var client_secret = "56d48e1817b9efd9b94db085a3f54164";
var redirect_uri = "http://localhost:3000/receive_code/";
'https://api.23andme.com/authorize/?redirect_uri=http://localhost:3000/receive_code/&response_type=code&client_id=dd6b7f51cb19ee4bd93bfe59438f7956&scope=basic rs121909205 rs62645958 analyses'

router.get('/receive_code', function(req, res) {

  // axios.post('https://api.23andme.com/token/&client_id=dd6b7f51cb19ee4bd93bfe59438f7956&client_secret=56d48e1817b9efd9b94db085a3f54164&grant_type=authorization_code&code=zzz&redirect_uri=http://localhost:3000/receive_code&scope=rs3094315');
  
// axios({
//   method: 'post',
//   url: 'https://api.23andme.com/token/',
//   data: {
//    client_id: client_id,
//     client_secret: client_secret,
//     grant_type: 'authorization_code',
//     code: 'zzz',
//     redirect_uri: 'http://localhost:3000/receive_code',
//     scope: 'rs3094315'
//   }
// }).then(function(result) {

//   res.json(result);
// })

  res.render('tools/genetic_report', {layout: 'dash'});

});





module.exports = router;
