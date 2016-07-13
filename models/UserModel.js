var mongoose = require('mongoose');
var bcrypt   = require('bcrypt-nodejs');

var Schema = mongoose.Schema;

var UserSchema = new Schema({
 
  local: {
    email: String,
    password: String //,
    // trials: [{ type: Schema.Types.ObjectId, ref: 'Trial' }],
    // topics: [{ type: Schema.Types.ObjectId, ref: 'Topic' }]
  }
  // facebook: {
  //   id:String,
  //   token:String,
  //   email:String,
  //   name:String
  // },
  // twitter: {
  //   id:String,
  //   token:String,
  //   displ:String,
  //   usern:String
  // },
  // google: {
  //   id:String,
  //   token:String,
  //   email:String,
  //   name:String
  // }
});

// methods ======================
// generating a hash
UserSchema.methods.encryptPassword = function(password) {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
};

// checking if password is valid
UserSchema.methods.validPassword = function(password) {
    return bcrypt.compareSync(password, this.local.password);
};

// create the model for users and expose it to our app
//users
var User = mongoose.model('User', UserSchema);
module.exports = User;