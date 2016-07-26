var helper  = require('sendgrid').mail;
// console.log('helper' + helper.Personalization);
from_email = new helper.Email("vporta7@gmail.com")
to_email = new helper.Email("angelamariapg@gmail.com")
subject = "Welcome To CesarCells!"
content = new helper.Content("text/plain", "Hello, BABY CAKES! HAPPY 1 YEAR AND 9 MONTHS!!!!!")
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

// var payload   = {
//   to      : 'to@example.com', // req.user.email
//   from    : 'from@other.com', // cesarcells gmail account
//   subject : 'Saying Hi',
//   text    : 'This is my first email through SendGrid'
// }

// sendgrid.send(payload, function(err, json) {
//   if (err) { console.error(err); }
//   console.log(json);
// });

module.exports = helper;
// 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