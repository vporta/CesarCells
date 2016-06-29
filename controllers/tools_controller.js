var express = require('express');
var session = require('express-session');
var router = express.Router();
var bcrypt = require('bcryptjs');

router.get('/test', function (req, res) {
  res.render('tools/stemcell_assessment')
});

router.post('/tools/assessment', function (req, res) {
  res.redirect('/');
});

module.exports = router;