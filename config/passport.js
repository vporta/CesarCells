var passport = require('passport');
var mongoose = require('mongoose');
var LocalStrategy = require('passport-local').Strategy;

var User = require('../models/UserModel');

passport.serializeUser(function(user, done) {
  done(null, user.id);
});

passport.deserializeUser(function(id, done) {
  User.findById(id, function(err, user) {
    done(err, user);
  });
});

passport.use('local.signup', new LocalStrategy({
  usernameField: 'email',
  passwordField: 'password',
  passReqToCallback: true
}, function(req, email, password, done) {
  User.findOne({'local.email': email}, function(err, user) {
    if(err) {
      return done(err);
    }
    if(user) {
      return done(null, false, {message: 'Email is already in use'});
    }
    var newUser = new User();
    newUser.local.email = email;
    newUser.local.password = newUser.encryptPassword(password);
    newUser.save(function(err, result) {
      if (err) {
        return done(err);
      }
      return done(null, newUser);
    });
  });
}));