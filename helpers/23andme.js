var axios = require('axios');
var _ = require('underscore');


var client_id = "dd6b7f51cb19ee4bd93bfe59438f7956";
var client_secret = "56d48e1817b9efd9b94db085a3f54164";
var scope = 'rs2476601';
// var AUTHORIZATION_CODE;
var redirect_uri = 'http://localhost:3000/receive_code/';
var base_uri = 'https://api.23andme.com/1';
var code;

router.get('/receive_code/?code=296c703266608b6d3c1d2012fff3c964', function(req, res) {
var code = req.query.code;

axios.post('/https://api.23andme.com/token', {
  client_id: client_id,
  client_secret: client_secret, 
  grant_type: authorization_code,
  code: code,
  redirect_uri: 'https://localhost:5000/receive_code/',
  scope: scope
  })
  .then(function (response) {
    console.log(response);
    res.send(response);
  })
  .catch(function (error) {
    console.log(error);
  });
});
