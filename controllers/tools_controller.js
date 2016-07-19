var express = require('express');
var session = require('express-session');
var router = express.Router();
var bcrypt = require('bcryptjs');

var User = require('../models/UserModel.js');

router.get('/tools/start-health-assessment', function (req, res) {
  res.render('tools/start_assessment', {layout: 'dash'});
});

router.get('/tools/stemcell-assessment', function (req, res) {
 
    res.render('tools/stemcell_assessment', {
      layout: 'dash' 
    });
    // res.sendFile('indexOne');

});



router.get('/tools/genetic', function (req, res) {
  res.render('tools/genetic_report', {layout: 'dash'});
});

router.get('/tools/all-trials', function (req, res) {
  res.render('tools/all_trials', {layout: 'dash'});
});

router.get('/tools/amsler-test', function (req, res) {
  res.render('tools/amsler_test_page', {layout: 'dash'});
});

// router.get('/tools/all-tools', function (req, res) {
//   res.render('tools/all_tools', {layout: 'dash'});
// });
module.exports = router;