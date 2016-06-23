var express = require('express');
var session = require('express-session');
var router = express.Router();
var bcrypt = require('bcryptjs');



//<--home begins-->

router.get('/', function (req, res) {
  res.render('index');
});

//<--home ends-->


//<--sign up begins -->

router.get('/users/sign_up', function (req, res) {
  res.render('users/sign_up');
});

router.post('/users/sign_up', function(req, res) {
  //logic to input in database
  res.redirect('/users/details_new');
});

//<--sign up ends-->


//<--details form begins-->

router.get('/users/details_new', function(req, res) {
  res.render('users/details_new');
});

router.post('/users/details_new', function(req, res) {
  //logic to input in database
  res.redirect('/');
});

//<--details form ends-->


//<--login form begins-->

router.post('/users/login', function (req, res) {
  res.redirect('/');
});

//<--login form ends-->


//<--sign out begins-->

router.get('/users/sign-out', function(req, res) {
  res.redirect('/');
});

//<--sign out ends-->


//<--reset password form begins-->

// router.get('/users/password-new', function(req, res) {
//   res.render('users/password-new');
// });

router.post('/users/password-new', function(req, res) {
  res.redirect('/');
});

router.get('/users/password-new', function(req, res) {
  res.render('users/password-new');
});
//<--reset password form begins-->






module.exports = router;

