var express = require('express');
var session = require('express-session');
var router = express.Router();
var request = require('request');
var bcrypt = require('bcryptjs');
var path = require('path');
var passport = require('passport');
var Trial = require('../models/Trial.js');
var SNPs = require('../models/SNPs.js');
var oauth2 = require('simple-oauth2');
var Amsler = require('../models/Amsler.js');
var User = require('../models/UserModel.js');
var AgreeToGenomeData = require('../models/AgreeToGenomeData.js');
var flash = require('connect-flash');
// var helpers = require('../helpers/mail.js');
var axios = require('axios');
var cheerio = require('cheerio');
var _ = require('underscore');
var querystring = require('querystring');
var diseases = require('../data/disease.js');

var ensureAuthenticated = function(req, res, next){
    if (req.isAuthenticated()) {
        return next();
    }
    res.redirect('/users/sign-in');
};

router.get('/tools/start-health-assessment', ensureAuthenticated, function (req, res) {
console.log('assessmentTaken: '+ req.user.assessmentTaken);
  if (req.user && req.user.assessmentTaken) {
    
    req.flash('taken', 'You\'ve already taken the assessment.')

    res.render('users/dashboard', {
      layout: 'dash',
      taken: req.flash('taken'),
      assessmentTaken: req.user.assessmentTaken

    });
  } else {
    res.render('tools/start_assessment', {
      layout: 'dash',
      user: req.user
    }); 
  }
      
});

router.get('/tools/stemcell-assessment', ensureAuthenticated, function (req, res) {
 
    res.render('tools/stemcell_assessment', {
      layout: 'dash'
    });
});

// router.get('/tools/gene-data-approval', ensureAuthenticated, function (req, res) {
  
//   res.render('tools/gene_data_approval', {layout: 'dash'});
// });

// router.post('/tools/agree-gene-data', ensureAuthenticated, function (req, res) {
  
//   //res.render('tools/gene_data_approval', {layout: 'dash'});

//   var formData = req.body.agree;
//   console.log(formData);
//   var newATGD = new AgreeToGenomeData({checkboxes: formData, user_id: req.user._id});

//   console.log(newATGD);

//   newATGD.save(function(err) {

//     if(err){
//       console.log(err);
//     }
//     else {
//       var isTrue = true;
//       User.findOneAndUpdate({_id: req.user._id}, { $set: { "agreedToAnalyzeGenome": isTrue
//       }}).then(function() {
//           req.flash('agreed', 'Welcome! Click on the button below to connect with 23andMe.')
//           if(err) throw err;

//           res.render('charge/charge', {
//             layout: 'dash',
//             agreed: req.flash('agreed')


//           });
//       });    
//     }
//   });
// });


router.get('/tools/genetic', ensureAuthenticated, function (req, res) {
 

    res.render('tools/genetic_report', {
      layout: 'dash'
    
    });

});


// **********23ANDME OAUTH2************
var oauth2 = require('simple-oauth2')({
  clientID: process.env.TWOTHREEANDME_CLIENT_ID,
  clientSecret: process.env.TWOTHREEANDME_CLIENT_SECRET,
  site: 'https://api.23andme.com',
  tokenPath: '/token',
  authorizationPath: '/authorize'
});


var authorization_uri = oauth2.authCode.authorizeURL({
  redirect_uri: 'https://arcane-fortress-13823.herokuapp.com/receive_code/',
  scope: 'basic names analyses rs61753033 rs61753034 rs11200638 rs1061170 rs800292 rs2230199 rs3775291 rs28936694 rs1048661 rs3825942',
  state: 'angie1'
});



router.get('/auth', ensureAuthenticated, function (req, res) {
  if (req.user && req.user.geneticTestTaken) {
    
    req.flash('info', 'You\'ve already submitted your data, ' + req.user.firstname + '!');

    res.render('tools/genetic_report', {layout: 'dash',
      user: req.user,
      info: req.flash('info')
    });
  } else {
    
      res.redirect(authorization_uri);
  }
});

router.get('/receive_code', ensureAuthenticated, function(req, res) {
 
 var code = req.query.code;

 if (!code) {
   
   res.send('Error!!')

 
 } else {
    
    console.log('running');

    oauth2.authCode.getToken({
        
      code: code,
        
      redirect_uri: 'https://arcane-fortress-13823.herokuapp.com/receive_code/'
      
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

router.get('/tools/genetic-data-retinal-diseases', ensureAuthenticated, function(req, res) {

  // var dataMediate = {}; // ==== MEDIATOR ====

  if (req.signedCookies.access_token) {
    
    console.log('its signed' + req.signedCookies.access_token);
    
    var names, names_by_id = {}, genotypes;

    var base_uri = 'https://api.23andme.com/1';
    
    var headers = {Authorization: 'Bearer ' + req.signedCookies.access_token};

    axios({ 
      
      url: base_uri + '/names/', 
      
      headers: headers
    
    })
    .then(function(response) {

      if (response.status != 200) {
        
        // res.clearCookie('access_token');
        res.redirect('/');
      
      } else {

          // user = response.data;
          // dataMediate.userId = user.profiles[0].id;

          //console.log('*********user profile id:  ' + response.data.profiles[0].id);

          axios({
            
            url: base_uri + '/genotypes/' + response.data.profiles[0].id + '/?locations=rs61753033 rs61753034 rs11200638 rs1061170 rs800292 rs2230199 rs3775291 rs28936694 rs1048661 rs3825942', 
            
            headers: headers

          })
          .then(function(response) {
            
            genotypes = response.data;

            console.log('======genotypes:  ' + JSON.stringify(genotypes));

            
            var obj = genotypes;

            // Remove id from snps object
            var objData = _.omit(obj, 'id');
            
           

            var newSNPs = new SNPs({ 
              genotypes: objData, 
              diseases: diseases,
              user_id: req.user._id
            });

            console.log('new new snps here: ' + newSNPs);
              
              newSNPs.save(function(err) {

                if(err){
                  console.log(err);
                }

                else {
                  var istrue = true;
                  
                  User.findOneAndUpdate({_id: req.user._id}, {$set: {"geneticTestTaken":istrue}}).exec(function(err) {
                    
                    if(err) {
                      throw err;
                    } else {
                     

                      res.render('tools/gene_postreport', {
                        user: req.user,
                        layout: 'dash',

                      });
                      
                    }
                  });
                  
                }

              })  
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

  } else {

      console.log('Cookie is not signed!');

  }

});

// *Declaration of all necessary variables needed to perform 23AndMe API Call
// var STARGARDT_SNPs = ['doesnt work:rs28938473', 'rs61753033', 'rs61753034'].join(' ');
// var LCA_SNPs = ['doesnt work: rs281865192'].join(' ');
// var MACD_SNPs = ['rs11200638', 'rs1061170', 'rs800292', 'rs2230199', 'rs3775291'].join(' ');
// var RETPIG_SNPs = ['doesnt work: rs104893775'].join(' ');
// var USHER_SNPs = ['doesnt work: rs104894651'].join(' ');
// var GLAUCOMA_SNPs = ['rs28936694', 'rs1048661', 'rs3825942'].join(' ');
// var DEFAULT_SCOPE = 'basic names analyses rs28938473';

// console.log(DEFAULT_SCOPE);

router.get('/tools/my-genetics', ensureAuthenticated, function(req, res) {
  var data = {};
  // if(req.user) {

  SNPs.find({user_id: req.user._id}, function(err, result) {
    if(err) throw err;
    
    data.genes = result;
    // console.log('===data inside here===: ' + data);
    console.log('===result inside here===: ' + result);


 
  // console.log('req.user here:------' + req.user);

  })
  res.render('tools/gene_data', {
    data: data,
    user: req.user,
    layout: 'dash'
  });
  // }
});


// router.get('/tools/all-trials', ensureAuthenticated, function (req, res) {
  
//   var data = {};
  
//   Trial.find({
//   }).then(function(result) {
    
//   data.trials = result;
   
//    User.find({ 
//    }).then(function(result) {

//     data.users = result;
//     res.render('tools/all_trials', {
//       data: data,
//       layout: 'dash',
//       user: req.user
//     });
//    });
//   });
// });  

// AMSLER PAGE ROUTES
router.get('/tools/amsler-test', ensureAuthenticated, function (req, res) {
  var data = {};
  Amsler.find({user_id: req.user._id}).then(function(result) {
    data.notes = result;
    console.log('==========================000000====================' + result);
  })
  res.render('tools/amsler_test_page', {
    data: data,
    layout: 'dash',
    user: req.user
  });
});

router.post('/tools/amsler-grid-results', ensureAuthenticated, function(req, res) {
  
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

router.delete('/delete-note/:_id', ensureAuthenticated, function (req, res) {
var deleteNote = req.params._id;
  if (req.user) {


  Amsler.find({user_id: req.user._id, _id: deleteNote}).then(function(notes) {

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