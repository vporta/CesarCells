var express = require('express');
var session = require('express-session');
var router = express.Router();
var bcrypt = require('bcryptjs');

router.get('/tools/start-health-assessment', function (req, res) {
  res.render('tools/start_assessment', {layout: 'dash'});
});

router.get('/tools/stemcell-assessment', function (req, res) {
  res.render('tools/stemcell_assessment', {layout: 'dash'});
});

module.exports = router;