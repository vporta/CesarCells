var express = require('express');
var session = require('express-session');
var bcrypt = require('bcryptjs');
var passport = require('passport');
var router = express.Router();
var LocalStrategy = require('passport-local').Strategy;
var User = require('../models/UserModel.js');
var flash = require('connect-flash');
var helpers = require('../helpers/mail.js');
var sendbird = require('sendbird');






//DISCUSSION CHAT ROOM
router.get('/chat/discuss', function(req, res) {
  
  res.render('chat/discuss', {
    layout: 'dash'
  });
});




module.exports = router;