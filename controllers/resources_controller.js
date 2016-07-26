var express = require('express');
var session = require('express-session');
var bcrypt = require('bcryptjs');
var passport = require('passport');
var router = express.Router();
var LocalStrategy = require('passport-local').Strategy;
var User = require('../models/UserModel.js');
var flash = require('connect-flash');
var helpers = require('../helpers/mail.js');



router.get('/whats-stargardts-disease', function(req, res) {
  res.render('resources/whats_stargardts');
});

router.get('/stargardts-clinical-trials', function(req, res) {
  res.render('resources/clinical_trial_descr');
});

router.get('/stargardts-glossary', function(req, res) {
  res.render('resources/glossary');
});

router.get('/stargardts-stemcell-story', function(req, res) {
  res.render('resources/story_cesar');
});

router.get('/stargardts-assistive-technologies', function(req, res) {
  res.render('resources/assistive_tech_vendors');
});


module.exports = router;