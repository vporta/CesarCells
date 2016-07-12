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

module.exports = router;