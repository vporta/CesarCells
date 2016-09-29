var path = require('path'),
    express = require('express'),
    sm = require('sitemap'),
    logger = require('morgan'),
    bodyParser = require('body-parser'),
    methodOverride = require('method-override'),
    session = require('express-session'),
    request = require('request'),
    fs = require('file-system'),
    cookieParser = require('cookie-parser'),
    mongoose = require('mongoose'),
    oauth2 = require('simple-oauth2'),
    flash = require('connect-flash'),
    passport = require('passport'), 
    LocalStrategy = require('passport-local'),
    TwitterStrategy = require('passport-twitter'),
    GoogleStrategy = require('passport-google-oauth'),
    FacebookStrategy = require('passport-facebook'),
    _ = require('underscore'),
    Trial = require('./models/Trial'),
    SNPs = require('./models/SNPs'),
    User = require('./models/UserModel'),
    $ = require("jquery"),
    ngrok = require('ngrok');
   
//======Express========
var app = express();

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(bodyParser.json({type:'application/vnd.api+json'}));
app.use(cookieParser('ILovemom')); //create env variable

//======Passport========      
app.use(session({ secret: 'angiepangie23', cookie: { maxAge: 600000 } })); // session secret create env variable
app.use(flash()); // use connect-flash for flash messages stored in session
app.use(passport.initialize());
app.use(passport.session()); // persistent login sessions
//app.use(app.router);



// Session-persisted message middleware
app.use(function(req, res, next){
  var err = req.session.error,
      msg = req.session.notice,
      success = req.session.success;

  delete req.session.error;
  delete req.session.success;
  delete req.session.notice;

  if (err) res.locals.error = err;
  if (msg) res.locals.notice = msg;
  if (success) res.locals.success = success;

  next();
});

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

var contact_us_controller = require('./controllers/contact_us_controller.js');
app.use('/', contact_us_controller);

var resources_controller = require('./controllers/resources_controller.js');
app.use('/', resources_controller);

var trials_controller = require('./controllers/trials_controller.js');
app.use('/', trials_controller);

var accounts_controller = require('./controllers/accounts_controller.js');
app.use('/', accounts_controller);

var about_us_controller = require('./controllers/about_us_controller.js');
app.use('/', about_us_controller);

var chats_controller = require('./controllers/chats_controller.js');
app.use('/', chats_controller);

var sitemap_controller = require('./controllers/sitemap_controller.js');
app.use('/', sitemap_controller);

var charges_controller = require('./controllers/charges_controller.js');
app.use('/', charges_controller);
// ==== APIs ====
var routing = require('./routing/api-trials');
app.use('/', routing);

// ==== SET PORT ====
var port = process.env.PORT || 3000;




// ==== REQUIRE MONGOOSE ====
var mongoose = require('mongoose');

// Save MongoDB directory to a db var
var db = 'mongodb://localhost/mongoCesarcells';
var options = { 
  server: { 
    socketOptions: { 
      keepAlive: 300000, connectTimeoutMS: 30000 
    } 
  }, 
  replset: { 
    socketOptions: { 
      keepAlive: 300000, 
      connectTimeoutMS : 30000 
    } 
  } 
};

if(process.env.MONGODB_URI) {
  mongoose.connect(process.env.MONGODB_URI, options);
} else {

  // Connect that directory to Mongoose, for simple, powerful querying
  mongoose.connect(db, function(err){
    // log any errors connecting with mongoose
    if(err){
      console.log(err);
    } 
    // or log a success message
    else {
      console.log('mongoose connection is successful on: ' + db);
    }
  });
}
require('./config/passport');


app.listen(port, function() {
  console.log("Let's do this! On port:", + port);
});




