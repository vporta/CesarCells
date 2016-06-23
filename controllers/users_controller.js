var express = require('express');
var session = require('express-session');
var router = express.Router();
var bcrypt = require('bcryptjs');


router.get('/', function (req, res) {
  res.render('index');
});

router.get('/users/sign_up', function (req, res) {
  res.render('users/sign_up');
});

router.post('/users/sign_up', function(req, res) {
  //logic to input in database
  res.redirect('/users/details_new');
});

router.get('/users/details_new', function(req, res) {
  res.render('users/details_new');
});

router.post('/users/details_new', function(req, res) {
  //logic to input in database
  res.redirect('/');
});

router.post('/users/login', function (req, res) {
  res.redirect('/');
});

module.exports = router;

