var axios = require('axios');
var _ = require('underscore');



// request.get({ url: base_uri + '/names/', headers: headers, json: true }, function (e, r, body) {
//             if(r.statusCode != 200) {
//                 res.clearCookie('access_token');
//                 res.redirect('/');
//             } else {
//                 names = body;
//                 for (var i = 0; i < names.profiles.length; i++) {
//                     names_by_id[names.profiles[i].id] = names.profiles[i].first_name + ' ' + names.profiles[i].last_name;
//                 }
//                 request.get({ url: base_uri + '/genotype/?locations=rs2854464', headers: headers, json: true}, function (e, r, body) {
//                     genotypes = body;
//                     res.render('result', {
//                         names: names_by_id,
//                         genotypes: genotypes
//                     });
//                 });
//             }
//         });

//  curl https://api.23andme.com/token/
//          -d client_id=xxx \
//          -d client_secret=yyy \
//          -d grant_type=authorization_code \
//          -d code=zzz \
//          -d "redirect_uri=https://localhost:5000/receive_code/"
//          -d "scope=basic%20rs3094315"

// axios.get('https://api.23andme.com/token/')
//   .then(function(result) {   
//     console.log(result); 
    
//     _this.setState({
//       data: result.data,
//     })
//   })