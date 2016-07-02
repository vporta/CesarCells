var path = require('path');
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var session = require('express-session');
var request = require('request');
var fs = require('file-system');
var cookieParser = require('cookie-parser');
var requirejs = require('requirejs');
var trials = require('./data/trials');

// Database setup
// var Sequelize = require('sequelize'),
//     connection;
//     console.log(process.env.JAWSDB_URL);
// if (process.env.JAWSDB_URL) {
//   connection = new Sequelize(process.env.JAWSDB_URL);
// } else {
//   connection = new Sequelize('cesars_db', 'root', '', {
//     host: 'localhost',
//     dialect: 'mysql',
//     port: '3306'
//   })
// }

//Serve static content for the app from the "public" directory in the application directory.
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.text());
app.use(bodyParser.json({type:'application/vnd.api+json'}));



app.use(cookieParser());

app.use(session({ secret: 'app', cookie: { maxAge: 3600000 }}));

//Override with POST having ?_method=DELETE
app.use(methodOverride('_method'));

var exphbs = require('express-handlebars');
app.engine('handlebars', exphbs({
    defaultLayout: 'main'
}));
app.set('view engine', 'handlebars');
app.use(express.static('public'));





// Require Controllers
var users_controller = require('./controllers/users_controller.js');
app.use('/', users_controller);

var tools_controller = require('./controllers/tools_controller.js');
app.use('/', tools_controller);

//Require APIs
var routing = require('./routing/api-trials');
app.use('/', routing);

//Heroku select the port otherwise use port 3000 locally
var port = process.env.PORT || 3000;

app.listen(port, function() {
  console.log("Rocket has launched, Let's do this! On port:", + port);
});

