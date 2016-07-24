// Include the Mongoose Dependencies
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// Create a Schema for capturing clicks. We'll use clickID to update the same clickCounter
var AmslerSchema = new Schema({
  usernote: String,
  dateCreated: Date,
  user_id: [{ type: Schema.Types.ObjectId, ref: 'User' }]

});

// Create the Model
var Amsler = mongoose.model('Amsler', AmslerSchema);

// Export it for use elsewhere
module.exports = Amsler;