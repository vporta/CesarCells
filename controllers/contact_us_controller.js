var express = require('express');
var session = require('express-session');
var bcrypt = require('bcryptjs');
var passport = require('passport');
var router = express.Router();
var LocalStrategy = require('passport-local').Strategy;
var _ = require('underscore');
var User = require('../models/UserModel.js');
var Trial = require('../models/Trial.js');
var Answer = require('../models/Answers.js');
var sendgrid = require('../helpers/mail');
var flash = require('connect-flash');
var helpers = require('../helpers/mail.js')

// ==== CONTACT-US BEGINS ====
router.get('/contact_us/contact', function (req, res) {
    res.render('contactus/contact_us');
});

router.post('/contact_us/send', function (req, res) {
  var name = req.body.name;
  var email = req.body.email;
  var contents = req.body.content;
  
  var helper  = require('sendgrid').mail;
  from_email = new helper.Email(email)
  to_email = new helper.Email("vporta7@gmail.com")
  subject = name;
  content = new helper.Content("text/plain", contents)
  mail = new helper.Mail(from_email, subject, to_email, content)

  var sg = require('sendgrid').SendGrid(process.env.SENDGRID_API_KEY)
  var requestBody = mail.toJSON()
  var request = sg.emptyRequest()
  request.method = 'POST'
  request.path = '/v3/mail/send'
  request.body = requestBody

  sg.API(request, function (response) {
    console.log(response.statusCode)
    console.log(response.body)
    console.log(response.headers)
    console.log(response)
  })

  res.redirect('/');
});


module.exports = router;
