var mongoose = require('mongoose');
var bcrypt   = require('bcrypt-nodejs');

var Schema = mongoose.Schema;

var UserSchema = new Schema({
 
  local: {
    email: String,
    password: String, 
  },
  resetPasswordToken: String,
  resetPasswordExpires: Date,
  age: Number,
  birth_day: Date,
  firstname: String,
  lastname: String,
  sex: String,
  retinalDiagnosis: Boolean,
  retinalDisease: String,
  informedConsent: Boolean,
  country: String,
  facebook: {
    id:String,
    token:String,
    email:String,
    name:String
  },
  qualifiedtrials: { 
    type: Number, 
    ref: 'Trial' 
  },
  assessmentTaken: Boolean,
  city: String,
  address: String,
  state: String,
  zip: Number,
  stargRegTaken: Boolean,
  geneticTestTaken: Boolean,
});



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