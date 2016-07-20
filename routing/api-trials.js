var express = require('express');
var router = express.Router();
var session = require('express-session');
var bcrypt = require('bcryptjs');
var passport = require('passport');
var router = express.Router();
var LocalStrategy = require('passport-local').Strategy;
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
          // res.send(doc);
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
    console.log('//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////')
    console.log(newAnswer)
    console.log(req.user, req.session.passport);
    
    newAnswer.save(function(err, doc){
      console.log(req.user);
        if(err){
          console.log(err);
        }
        else {
          // res.send(doc);
          res.json(doc);
        }
      })
    console.log(Answer);

  });
 
// retreive user answers: db.users.update({_id: ObjectId('578847fcdc29d8b37900a16d')}, {$push: {user_answers: {trialID:1, answers: ['Y', 'N', 'Y']}}})


module.exports = router;

// [{
//   trial:1,
//   questionNumber:1,
//   question:question
// }]


//within onclick, unshift first, hit api to save answer, 