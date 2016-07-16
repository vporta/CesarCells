var express = require('express');
var router = express.Router();
//require controllers here and use a function
var trials = require('../data/trials.js');
var stargardtsQuestions = require('../data/stargardtsQuestions.js');

  router.get('/api/trials', function(req, res){
    res.json(trials);
  });

  // router.post('/api/trials', function(req, res) {
    
  // })

  router.get('/api/stargardtsQuestions', function(req, res){
    res.json(stargardtsQuestions);
  });

  router.post('/api/save-answers', function(req, res){
    var newClick = new Click(req.body);
    console.log(req.body);

    var clickID = req.body.clickID;
    var clicks = parseInt(req.body.clicks);

    // Note how this route utilizes the findOneAndUpdate function to update the clickCount.
    Click.findOneAndUpdate({"clickID": clickID}, {$set: {"clicks": clicks}}, {upsert: true}).exec(function(err){

      if(err){
        console.log(err);
      }

      else{
          res.send("Updated Click Count!");
      }
    });

  });


module.exports = router;