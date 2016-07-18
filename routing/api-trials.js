var express = require('express');
var router = express.Router();
var session = require('express-session');
var bcrypt = require('bcryptjs');
var passport = require('passport');
var router = express.Router();
var LocalStrategy = require('passport-local').Strategy;
var Trial = require('../models/Trial');
var User = require('../models/UserModel');

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
    var trialID = parseInt(req.body.trialID);
    var answers = req.body.useranswers;
    console.log(req.user);
    User.findOneAndUpdate({'_id': req.user._id}, {$push: {user_answers: {trialID: trialID, answers: answers}}}).exec(function(err, doc){
      console.log(req.user);
        if(err){
          console.log(err);
        }
        else {
          // res.send(doc);
          res.json(doc);
        }
      })
  });
 

// retreive user answers: db.users.update({_id: ObjectId('578847fcdc29d8b37900a16d')}, {$push: {user_answers: {trialID:1, answers: ['Y', 'N', 'Y']}}})


module.exports = router;

// [{
//   trial:1,
//   questionNumber:1,
//   question:question
// }]


//within onclick, unshift first, hit api to save answer, 