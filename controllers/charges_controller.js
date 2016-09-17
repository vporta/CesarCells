var express = require('express');
var session = require('express-session');
var bcrypt = require('bcryptjs');
var passport = require('passport');
var flash = require('connect-flash');
var router = express.Router();
var LocalStrategy = require('passport-local').Strategy;
var _ = require('underscore');
var User = require('../models/UserModel.js');
var Trial = require('../models/Trial.js');
var Answer = require('../models/Answers.js');
var Product = require('../models/Product.js');
var StargReg = require('../models/StargReg.js');
var helper = require('sendgrid').mail
var pa = require('../config/passport');

var stripe = require('stripe')('sk_test_5XkvbjH8H3iaICCflRksOepj');


router.get('/charge', function(req, res) {

  res.render('charge/charge', {
    layout: 'dash'
  })
});

router.get('/thanks-for-your-order', function(req, res) {
  req.flash('thanks', 'Thanks for purchasing the Gene Report!');

  res.render('charge/thankyou', {
    layout: 'dash',
    thanks: req.flash('thanks')
  })
});

router.post('/stripe-charge', function(req, res) {
  // var stripeToken = req.body.stripeToken;
  // Get the credit card details submitted by the form
  var token = req.body.stripeToken; // Using Express

  // Create a charge: this will charge the user's card
  var charge = stripe.charges.create({
    amount: 1900, // Amount in cents
    currency: "usd",
    source: token,
    description: "Example charge"
  }, function(err, charge) {
    if (err && err.type === 'StripeCardError') {
      // The card has been declined
    }else {
      var istrue = true;
      var email = req.user.local.email;
      
      User.findOneAndUpdate({_id: req.user._id}, {$set: {"geneReportPurchase": istrue }}).exec(function(err) {
        
        if(err) throw err;
        else { 

        
            var helper  = require('sendgrid').mail;
            from_email = new helper.Email("receipt@cesarcells.com")
            to_email = new helper.Email(email)
            var subject = "Thank You For Your Order!";
            var contents = "Hello " + req.user.firstname + ',\n\n' + 'We appreciate your recent purchase of the Genetic Report. Your purchase id number is '+ charge.id + '.' + ' You will find yourself becoming more knowledgable of your genetic risk by having purchased this new genetic report. Congratulations on taking an important step to reducing your retinal disease risk. \n\n' + 'Best,\n\n' + 'Vincent Porta\n\n' + 'Founder'
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
              res.redirect('/thanks-for-your-order');
            });    
            console.log('charge here ' + charge.id);
            console.log('charge here ' + charge.invoice);
            console.log('charge here ' + charge.customer);
        }
      });
    }
  });
});

module.exports = router;