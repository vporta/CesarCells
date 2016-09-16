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
// var sg = require('sendgrid').SendGrid(process.env.SENDGRID_API_KEY)
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

     User.findOneAndUpdate({_id: req.user._id}, {$set: {"geneReportPurchase": istrue }}).exec(function(err) {
        if(err) throw err;
        res.redirect('/thanks-for-your-order');
     });    
    console.log('charge here ' + charge.id);
    console.log('charge here ' + charge.invoice);
    console.log('charge here ' + charge.customer);
    }
  });
});

module.exports = router;