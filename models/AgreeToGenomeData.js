// Include the Mongoose Dependencies
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// Create a Schema for capturing clicks. We'll use clickID to update the same clickCounter
var AgreeToGenomeDataSchema = new Schema({
  checkboxes: Array,
  user_id: [{ type: Schema.Types.ObjectId, ref: 'User' }]

});

// Create the Model
var AgreeToGenomeData = mongoose.model('AgreeToGenomeData', AgreeToGenomeDataSchema);

// Export it for use elsewhere
module.exports = AgreeToGenomeData;