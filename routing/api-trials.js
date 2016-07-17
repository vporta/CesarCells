var express = require('express');
var router = express.Router();

// var trials = require('../data/trials.js');
var stargardtsQuestions = require('../data/stargardtsQuestions.js');
var Trial = require('../models/Trial');


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

  // router.get('/api/stargardtsQuestions', function(req, res){
  //   res.json(stargardtsQuestions);
  // });

//retreive user answers: db.users.update({_id: ObjectId('578847fcdc29d8b37900a16d')}, {$push: {user_answers: {trialID:1, answers: ['Y', 'N', 'Y']}}})


module.exports = router;

// [{
//   trial:1,
//   questionNumber:1,
//   question:question
// }]


//within onclick, unshift first, hit api to save answer, 