var express = require('express');
var session = require('express-session');
var bcrypt = require('bcryptjs');
var passport = require('passport');
var flash = require('connect-flash');
var router = express.Router();
var LocalStrategy = require('passport-local').Strategy;
var FacebookStrategy = require('passport-facebook').Strategy;
var _ = require('underscore');
var User = require('../models/UserModel.js');
var Trial = require('../models/Trial.js');
var Answer = require('../models/Answers.js');
var sg = require('sendgrid').SendGrid(process.env.SENDGRID_API_KEY)
var helper = require('sendgrid').mail
var helpers = require('../helpers/mail');


// === HOME PAGE ======
router.get('/accounts/updateinfo', function (req, res) {

  res.render('account/updateinfo', {
    layout: 'dash',
    user: req.user
  });
});

router.get('/accounts/password', function (req, res) {

  res.render('account/password', {
    layout: 'dash',
    user: req.user
  });
});

router.get('/accounts/privacy', function (req, res) {

  res.render('account/privacy', {
    layout: 'dash',
    user: req.user
  });
});

router.get('/accounts/support', function (req, res) {

  res.render('account/support', {
    layout: 'dash',
    user: req.user
  });
});

router.post('/accounts/update-info', function (req, res) {

  // UPDATE USER.FINDONEANDUPDATE
  // ADD NEW FIELDS IN USER SCHEMA
  res.render('account/updateinfo', {
    layout: 'dash',
    user: req.user
  });
});
router.post('/accounts/password-update', function (req, res) {

  res.render('account/password', {
    layout: 'dash',
    user: req.user
  });
});


module.exports = router;
