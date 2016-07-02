var express = require('express');
var router = express.Router();

var trials = require('../data/trials.js');
var stargardtsQuestions = require('../data/stargardtsQuestions.js');

// ===============================================================================
// ROUTING
// ===============================================================================



  // API GET Requests
  // Below code handles when users "visit" a page. 
  // In each of the below cases when a user visits a link 
  // (ex: localhost:PORT/api/admin... they are shown a JSON of the data in the table) 
  // ---------------------------------------------------------------------------

  router.get('/api/trials', function(req, res){
    res.json(trials);
  });

  router.get('/api/stargardtsQuestions', function(req, res){
    res.json(stargardtsQuestions);
  });


  // API POST Requests
  // Below code handles when a user submits a form and thus submits data to the server.
  // In each of the below cases, when a user submits form data (a JSON object)
  // ...the JSON is pushed to the appropriate Javascript array
  // ---------------------------------------------------------------------------

  

module.exports = router;