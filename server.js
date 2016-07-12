var path = require('path'),
    express = require('express'),
    logger = require('morgan'),
    bodyParser = require('body-parser'),
    methodOverride = require('method-override'),
    session = require('express-session'),
    request = require('request'),
    fs = require('file-system'),
    cookieParser = require('cookie-parser'),
    favicon = require('serve-favicon'),
    mongoose = require('mongoose'),
    passport = require('passport'),
    flash = require('connect-flash'),
    LocalStrategy = require('passport-local'),
    TwitterStrategy = require('passport-twitter'),
    GoogleStrategy = require('passport-google-oauth'),
    FacebookStrategy = require('passport-facebook');

// var configDB = require('./config/database.js');
// configuration ===============================================================
// mongoose.connect(configDB.url); // connect to our database

//======Express========
var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json({type:'application/vnd.api+json'}));
app.use(cookieParser());
//======Passport========
app.use(session({ secret: 'ilovescotchscotchyscotchscotch' })); // session secret
app.use(flash()); // use connect-flash for flash messages stored in session
app.use(passport.initialize());
app.use(passport.session()); // persistent login sessions


// Session-persisted message middleware
// app.use(function(req, res, next){
//   var err = req.session.error,
//       msg = req.session.notice,
//       success = req.session.success;

//   delete req.session.error;
//   delete req.session.success;
//   delete req.session.notice;

//   if (err) res.locals.error = err;
//   if (msg) res.locals.notice = msg;
//   if (success) res.locals.success = success;

//   next();
// });

//Override with POST having ?_method=DELETE
app.use(methodOverride('_method'));

//Express handlebars middleware

var exphbs = require('express-handlebars');
app.engine('handlebars', exphbs({
    defaultLayout: 'main'
}));
app.set('view engine', 'handlebars');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static('public'));

//Require Controllers

var users_controller = require('./controllers/users_controller.js');
app.use('/', users_controller);

var tools_controller = require('./controllers/tools_controller.js');
app.use('/', tools_controller);

//Require APIs

var routing = require('./routing/api-trials');
app.use('/', routing);

//Heroku select the port otherwise use port 3000 locally

var port = process.env.PORT || 3000;




//Require Mongoose

var mongoose = require('mongoose');

// Save MongoDB directory to a db var

var db = 'mongodb://localhost/mongoCesarcells';

// Connect that directory to Mongoose, for simple, powerful querying

mongoose.connect(db, function(err){
  // log any errors connecting with mongoose
  if(err){
    console.log(err);
  } 
  // or log a success message
  else {
    console.log('mongoose connection is sucessful on: ' + db);
  }
});
require('./config/passport');





app.listen(port, function() {
  console.log("Let's do this! On port:", + port);
});



