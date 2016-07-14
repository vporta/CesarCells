// Include the Mongoose Dependencies
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// Create a Schema for capturing clicks. We'll use clickID to update the same clickCounter
var TrialSchema = new Schema({
  name: String,
  status: String,
  "conditionsDisease": [], 
  "interventions": String, 
  "url": String,
  "min_age_req": {
    type: Number
  }
  "max_age_req": {
    type: Number,
  },
  dateCreated: Date,
  takenBy: { type: Schema.Types.ObjectId, ref: 'User' },
  // topic: { type: Schema.Types.ObjectId, ref: 'Topic' },
  
  // Ideally, I would use [QuestionSchema] here, instead of [Schema.Types.Mixed]. However, that
  // results in not saving any fields that are only present in one of the derived question types
  // (FillInQuestionSchema, etc.), but aren't present in the base (QuestionSchema). This may
  // have something to do with it: http://stackoverflow.com/a/16513323/393005
  questions: [Schema.Types.Mixed]
});

// Create the Model
var Trial = mongoose.model('Trial', TrialSchema);

// Export it for use elsewhere
module.exports = Trial;