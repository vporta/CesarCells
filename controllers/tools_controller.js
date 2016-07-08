var express = require('express');
var session = require('express-session');
var router = express.Router();
var bcrypt = require('bcryptjs');
var Trial = require('../models/Trial.js');
var User = require('../models/User.js');
var sequelize = require('../models/index.js');

router.get('/tools/start-health-assessment', function (req, res) {
  res.render('tools/start_assessment', {layout: 'dash'});
});

router.get('/tools/stemcell-assessment', function (req, res) {
  // models.Trial.findAll({
  // }).then(function(trials) {
    res.render('tools/stemcell_assessment', {
      layout: 'dash' 
      // trials: trials
    });
  // });
});

router.get('/tools/genetic', function (req, res) {
  res.render('tools/genetic_report', {layout: 'dash'});
});

router.get('/tools/all-trials', function (req, res) {
  res.render('tools/all_trials', {layout: 'dash'});
});

module.exports = router;