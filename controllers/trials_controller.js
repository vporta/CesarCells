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
var flash = require('connect-flash');
var helpers = require('../helpers/mail.js');



// ========= GET ROUTES ==========
router.get('/clinical-trials/zero', function (req, res) {
  var data = {};
  
  Trial.find({
  }).then(function(result) {
    
    data.trials = result;
   
   User.find({ 
   }).then(function(result) {

    data.users = result;
    res.render('trials/trial_zero.handlebars', {
      data: data,
      layout: 'dash'
    });
   });
  });
});

router.get('/clinical-trials/one', function (req, res) {
  var data = {};
  
  Trial.find({
  }).then(function(result) {
    
    data.trials = result;
   
   User.find({ 
   }).then(function(result) {

    data.users = result;
    res.render('trials/trial_one.handlebars', {
      data: data,
      layout: 'dash'
    });
   });
  });
});

router.get('/clinical-trials/two', function (req, res) {
  var data = {};
  
  Trial.find({
  }).then(function(result) {
    
    data.trials = result;
   
   User.find({ 
   }).then(function(result) {

    data.users = result;
    res.render('trials/trial_two.handlebars', {
      data: data,
      layout: 'dash'
    });
   });
  });
});

router.get('/clinical-trials/three', function (req, res) {
  var data = {};
  
  Trial.find({
  }).then(function(result) {
    
    data.trials = result;
   
   User.find({ 
   }).then(function(result) {

    data.users = result;
    res.render('trials/trial_three.handlebars', {
      data: data,
      layout: 'dash'
    });
   });
  });
});

router.get('/clinical-trials/four', function (req, res) {
  var data = {};
  
  Trial.find({
  }).then(function(result) {
    
    data.trials = result;
   
   User.find({ 
   }).then(function(result) {

    data.users = result;
    res.render('trials/trial_four.handlebars', {
      data: data,
      layout: 'dash'
    });
   });
  });
});

router.get('/clinical-trials/five', function (req, res) {
  var data = {};
  
  Trial.find({
  }).then(function(result) {
    
    data.trials = result;
   
   User.find({ 
   }).then(function(result) {

    data.users = result;
    res.render('trials/trial_five.handlebars', {
      data: data,
      layout: 'dash'
    });
   });
  });
});

router.get('/clinical-trials/six', function (req, res) {
  var data = {};
  
  Trial.find({
  }).then(function(result) {
    
    data.trials = result;
   
   User.find({ 
   }).then(function(result) {

    data.users = result;
    res.render('trials/trial_six.handlebars', {
      data: data,
      layout: 'dash'
    });
   });
  });
});

router.get('/clinical-trials/seven', function (req, res) {
  var data = {};
  
  Trial.find({
  }).then(function(result) {
    
    data.trials = result;
   
   User.find({ 
   }).then(function(result) {

    data.users = result;
    res.render('trials/trial_seven.handlebars', {
      data: data,
      layout: 'dash'
    });
   });
  });
});

// ========  POST ROUTES =========
router.post('/clinical-trials/contact/zero', function (req, res) {

  if (req.user && req.user.assessmentTaken) {
    var mailsubject = req.body.subject;
    var name = req.body.name;
    var email = req.body.email;
    var usercomment = req.body.usercomment;
    
    var helper  = require('sendgrid').mail;
    from_email = new helper.Email(email)
    to_email = new helper.Email("vporta7@gmail.com") // trials@alkeus.com
    subject = mailsubject;
    content = new helper.Content("text/plain", usercomment)
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

    res.redirect('/users/dashboard')
  } else {
    res.send("Sorry You Can't Do That. You Must Take The Assessment First.");
  }
});

router.post('/clinical-trials/contact/one', function (req, res) {
  if (req.user && req.user.assessmentTaken) {
    var mailsubject = req.body.subject;
    var name = req.body.name;
    var email = req.body.email;
    var usercomment = req.body.usercomment;
    
    var helper  = require('sendgrid').mail;
    from_email = new helper.Email(email)
    to_email = new helper.Email("vporta7@gmail.com") //Contact-Us@40sanofi.com
    subject = mailsubject;
    content = new helper.Content("text/plain", usercomment)
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

    res.redirect('/users/dashboard')
  } else {
    res.send("Sorry You Can't Do That. You Must Take The Assessment First.");
  }
});

router.post('/clinical-trials/contact/two', function (req, res) {

  if (req.user && req.user.assessmentTaken) {
      var mailsubject = req.body.subject;
      var name = req.body.name;
      var email = req.body.email;
      var usercomment = req.body.usercomment;
      
      var helper  = require('sendgrid').mail;
      from_email = new helper.Email(email)
      to_email = new helper.Email("vporta7@gmail.com") //shiying_li@40126.com
      subject = mailsubject;
      content = new helper.Content("text/plain", usercomment)
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

      res.redirect('/users/dashboard')
    } else {
      res.send("Sorry You Can't Do That. You Must Take The Assessment First.");
    }
});

router.post('/clinical-trials/contact/three', function (req, res) {
  if (req.user && req.user.assessmentTaken) {
    var mailsubject = req.body.subject;
    var name = req.body.name;
    var email = req.body.email;
    var usercomment = req.body.usercomment;
    
    var helper  = require('sendgrid').mail;
    from_email = new helper.Email(email)
    to_email = new helper.Email("vporta7@gmail.com") //Coordinator@40MyRetinaTracker.org
    subject = mailsubject;
    content = new helper.Content("text/plain", usercomment)
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

    res.redirect('/users/dashboard')
  } else {
    res.send("Sorry You Can't Do That. You Must Take The Assessment First.");
  }
});

router.post('/clinical-trials/contact/four', function (req, res) {
  if (req.user && req.user.assessmentTaken) {
    var mailsubject = req.body.subject;
    var name = req.body.name;
    var email = req.body.email;
    var usercomment = req.body.usercomment;
    
    var helper  = require('sendgrid').mail;
    from_email = new helper.Email(email)
    to_email = new helper.Email("vporta7@gmail.com") //bamjia@40nei.nih.gov
    subject = mailsubject;
    content = new helper.Content("text/plain", usercomment)
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

    res.redirect('/users/dashboard')
  } else {
    res.send("Sorry You Can't Do That. You Must Take The Assessment First.");
  }
});

router.post('/clinical-trials/contact/five', function (req, res) {
  if (req.user && req.user.assessmentTaken) {
    var mailsubject = req.body.subject;
    var name = req.body.name;
    var email = req.body.email;
    var usercomment = req.body.usercomment;
    
    var helper  = require('sendgrid').mail;
    from_email = new helper.Email(email)
    to_email = new helper.Email("vporta7@gmail.com") //jwmorgan@40mail.med.upenn.edu
    subject = mailsubject;
    content = new helper.Content("text/plain", usercomment)
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

    res.redirect('/users/dashboard')
  } else {
    res.send("Sorry You Can't Do That. You Must Take The Assessment First.");
  }
});

router.post('/clinical-trials/contact/six', function (req, res) {
  if (req.user && req.user.assessmentTaken) {
    var mailsubject = req.body.subject;
    var name = req.body.name;
    var email = req.body.email;
    var usercomment = req.body.usercomment;
    
    var helper  = require('sendgrid').mail;
    from_email = new helper.Email(email)
    to_email = new helper.Email("vporta7@gmail.com") //stevenlevy@40mdstemcells.com
    subject = mailsubject;
    content = new helper.Content("text/plain", usercomment)
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

    res.redirect('/users/dashboard')
  } else {
    res.send("Sorry You Can't Do That. You Must Take The Assessment First.");
  }
});

router.post('/clinical-trials/contact/seven', function (req, res) {
  if (req.user && req.user.assessmentTaken) {
    var mailsubject = req.body.subject;
    var name = req.body.name;
    var email = req.body.email;
    var usercomment = req.body.usercomment;
    
    var helper  = require('sendgrid').mail;
    from_email = new helper.Email(email)
    to_email = new helper.Email("vporta7@gmail.com") //bamjia@40nei.nih.gov brooksb@40mail.nih.gov
    subject = mailsubject;
    content = new helper.Content("text/plain", usercomment)
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

    res.redirect('/users/dashboard')
  } else {
    res.send("Sorry You Can't Do That. You Must Take The Assessment First.");
  }
});

module.exports = router;