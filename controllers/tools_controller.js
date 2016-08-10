var express = require('express');
var session = require('express-session');
var router = express.Router();
var request = require('request');
var bcrypt = require('bcryptjs');
var path = require('path');
var passport = require('passport');
var Trial = require('../models/Trial.js');
var oauth2 = require('simple-oauth2');
var Amsler = require('../models/Amsler.js');
var User = require('../models/UserModel.js');
var flash = require('connect-flash');
var helpers = require('../helpers/mail.js');
var axios = require('axios');
var cheerio = require('cheerio');
var querystring = require('querystring');

router.get('/tools/start-health-assessment', function (req, res) {
console.log('assessmentTaken: '+ req.user.assessmentTaken);
  if (req.user && req.user.assessmentTaken) {
    
    req.flash('taken', 'You\'ve already taken the assessment.')

    res.render('users/dashboard', {
      layout: 'dash',
      taken: req.flash('taken'),
      assessmentTaken: req.user.assessmentTaken
    });
  } else {
    res.render('tools/start_assessment', {layout: 'dash'}); 
  }
      
});

router.get('/tools/stemcell-assessment', function (req, res) {
 
    res.render('tools/stemcell_assessment', {
      layout: 'dash'
    });
});

router.get('/tools/genetic', function (req, res) {

  res.render('tools/genetic_report', {layout: 'dash'});
});

// **********23ANDME OAUTH2************
var oauth2 = require('simple-oauth2')({
  clientID: 'dd6b7f51cb19ee4bd93bfe59438f7956',
  clientSecret: '56d48e1817b9efd9b94db085a3f54164',
  site: 'https://api.23andme.com',
  tokenPath: '/token',
  authorizationPath: '/authorize'
});
var authorization_uri = oauth2.authCode.authorizeURL({
  redirect_uri: 'http://localhost:3000/receive_code/',
  scope: 'basic  analyses rs3094315 rs1801133',
  state: 'angie1'
});
// *************************************

router.get('/auth', function (req, res) {
  
    res.redirect(authorization_uri);
});

router.get('/receive_code', function(req, res) {
 
 var code = req.query.code;

 if (!code) {
   
   res.send('Error!!')

 
 } else {
    
    console.log('running');

    oauth2.authCode.getToken({
        
      code: code,
        
      redirect_uri: 'http://localhost:3000/receive_code/'
      
    }, saveToken);
     
    function saveToken(error, result) {
      
      console.log(result);
      
      if (error) { 
        
        console.log('Access Token Error', error.message); 
      
      } else {
        
        token = oauth2.accessToken.create(result);
        

        res.cookie('access_token', result.access_token, {signed: true});
        
        res.redirect('/tools/genetic-data-retinal-diseases');
      }
    };
  }
});

router.get('/tools/genetic-data-retinal-diseases', function(req, res) {

  var dataMediate = {}; // ==== MEDIATOR ====

  if (req.signedCookies.access_token) {
    console.log('its signed' + req.signedCookies.access_token);
    
    var genotypes, user;

    var base_uri = 'https://api.23andme.com/1';
    
    var headers = {Authorization: 'Bearer ' + req.signedCookies.access_token};

    axios({ 
      
      url: base_uri + '/user/', 
      
      headers: headers
    
    })
    .then(function(response) {

      if (response.status != 200) {
        
        // res.clearCookie('access_token');
        res.redirect('/');
      
      } else {

          user = response.data;
          dataMediate.userId = user.profiles[0].id;

          console.log('*********user profile id:  ' + user.profiles[0].id);

          // for (var i = 0; i < names.profiles.length; i++) {
          //   names_by_id[names.profiles[i].id] = names.profiles[i].first_name + ' ' + names.profiles[i].last_name;
          // }

          axios({
            
            url: base_uri + '/genotypes/'+ user.profiles[0].id +'/?locations=rs1801133', 
            
            headers: headers

          })
          .then(function(response) {

            genotypes = response.data;

            console.log('======genotypes:  ' + genotypes);

            console.log('======SNP: ' + genotypes.rs3094315)

            res.render('tools/gene_data', {
              
              layout: 'dash',
              genotypes: genotypes

            });

          })
          .catch(function(error) {
            console.log(error);
            //use req.flash here
          })
      }
    })
    .catch(function(error) {
      console.log(error);
    });

    // res.render('tools/gene_data', {
    //   layout: 'dash'

    // });
  } else {

      console.log('Cookie is not signed!');

  }

})



router.get('/tools/all-trials', function (req, res) {
  
  var data = {};
  
  Trial.find({
  }).then(function(result) {
    
    data.trials = result;
   
   User.find({ 
   }).then(function(result) {

    data.users = result;
    res.render('tools/all_trials', {
      data: data,
      layout: 'dash'
    });
   })
  })
});

// AMSLER PAGE ROUTES
router.get('/tools/amsler-test', function (req, res) {
  var data = {};
  Amsler.find({user_id: req.user._id}).then(function(result) {
    data.notes = result;
    console.log('==========================000000====================' + result);
  })
  res.render('tools/amsler_test_page', {
    data: data,
    layout: 'dash'
  });
});

router.post('/tools/amsler-grid-results', function(req, res) {
  
  var usernote = req.body.textfield;
  var dateCreated = req.body.datefield;


  var newAmsler = new Amsler({ usernote: usernote, dateCreated: dateCreated, user_id: req.user._id});

  newAmsler.save(function(err) {

    if(err){
      console.log(err);
    }

    else {
      res.redirect('/tools/amsler-test');
    }
  });
});

router.delete('/delete-note/:_id', function (req, res) {
var deleteNote = req.params._id;
  if (req.user) {


  Amsler.find({user_id: req.user._id, _id: deleteNote}).then(function(notes) {

    debugger;
    Amsler.remove({_id: deleteNote}, function(err, removed) {
      if(err) {
        throw err;
      } else {
        res.redirect('/tools/amsler-test');
      }
    });
  });
  } else {
    res.send("Sorry You Can't Do That. You Must Be Logged In.");
  }
});

module.exports = router;