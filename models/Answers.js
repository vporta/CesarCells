// Include the Mongoose Dependencies
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// Create a Schema for capturing clicks. We'll use clickID to update the same clickCounter
var AnswerSchema = new Schema({
  user_id: { type: Schema.Types.ObjectId, ref: 'User' },
  trial_id: { type: Number, ref: 'Trial' },
  user_answer: Number,
  question_id: Number
});

// Create the Model
var Answer = mongoose.model('Answer', AnswerSchema);

// Export it for use elsewhere
module.exports = Answer;