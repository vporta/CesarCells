var express = require('express');
var session = require('express-session');
var router = express.Router();
var bcrypt = require('bcryptjs');



//<--home begins-->

router.get('/', function (req, res) {
  // router.get('/', function(req, res) {
  //   models.User.findAll({
  //     include: [ models.Trial ]
  //   }).then(function(user) {
  //     res.render('index', {
  //       user_id: req.session.user_id,
  //       email: req.session.user_email,
  //       logged_in: req.session.logged_in,
  //       user: user
  //     });
  //   });
  // })
  res.render('index');
})

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

router.get('/users/dashboard', function (req, res) {
  res.render('users/dashboard', {layout: 'dash'});
});

router.post('/users/dashboard', function (req, res) {
  res.render('users/dashboard', {layout: 'dash'});
});
//<--login form ends-->


//<--sign out begins-->

router.get('/users/sign-out', function(req, res) {
  res.redirect('/');
});

//<--sign out ends-->


//<--reset password form begins-->

router.get('/users/password_new', function(req, res) {
  res.render('users/password_new');
});

router.post('/users/password_new', function(req, res) {
  res.redirect('/');
});

//<--reset password form ends-->

//<-- homepage sign in-->

router.get('/users/sign-in', function(req, res) {
  res.render('users/sign_in');
});




module.exports = router;

