// Include the Mongoose Dependencies
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// Create a Schema for capturing clicks. We'll use clickID to update the same clickCounter
var TrialSchema = new Schema({
  _id: Number,
  name: String,
  status: String,
  "conditionsDisease": Array, 
  "interventions": String, 
  "url": String,
  "min_age_req": {
    type: Number
  },
  "max_age_req": {
    type: Number,
  },
  dateCreated: Date,
  questions: {
    
      questionId: _id, 
      type: String, 
      answer: String
  },

  takenBy: [{ type: Schema.Types.ObjectId, ref: 'User' }],

});

// Create the Model
var Trial = mongoose.model('Trial', TrialSchema);

// Export it for use elsewhere
module.exports = Trial;