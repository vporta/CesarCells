// Include the Mongoose Dependencies
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// Create a Schema for capturing clicks. We'll use clickID to update the same clickCounter
var SNPsSchema = new Schema({
  genotypes: Object,
  diseases: Array,
  user_id: [{ type: Schema.Types.ObjectId, ref: 'User' }]

});

// Create the Model
var SNPs = mongoose.model('SNPs', SNPsSchema);

// Export it for use elsewhere
module.exports = SNPs;