// Include the Mongoose Dependencies
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// Create a Schema for capturing clicks. We'll use clickID to update the same clickCounter
var StargRegSchema = new Schema({
  visualtrouble: Number,
  besteyevision: String,
  visiontoday: Number,
  stargeneticallyconfirm: String,
  genemutation: String,
  opthaname: String,
  opthaemail: String,
  underlegalguardian: String,
  filledoutform: String,
  stargRegTaken: Boolean,
  dateCreated: Date,
  user_id: [{ type: Schema.Types.ObjectId, ref: 'User' }]

});

// Create the Model
var StargReg = mongoose.model('StargReg', StargRegSchema);

// Export it for use elsewhere
module.exports = StargReg;