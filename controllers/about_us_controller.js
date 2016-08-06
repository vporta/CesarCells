var express = require('express');
var session = require('express-session');
var bcrypt = require('bcryptjs');
var passport = require('passport');
var router = express.Router();
var LocalStrategy = require('passport-local').Strategy;
var User = require('../models/UserModel.js');
var flash = require('connect-flash');
var helpers = require('../helpers/mail.js');



router.get('/contact_us/contact', function(req, res) {
  res.render('contact_us/contact');
});

router.get('/about_us/mission', function(req, res) {
  res.render('aboutus/mission');
});

router.get('/about_us/team', function(req, res) {
  res.render('aboutus/team');
});



module.exports = router;