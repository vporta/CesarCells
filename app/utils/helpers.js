// // // Include the axios package for performing HTTP requests (promise based alternative to request)
// var axios = require('axios');
// var apiTrials = '/api/trials';
// var helpers = {

//   runQuery: function(){
//     return axios.get(apiTrials).then(function(response){
//       return {
//         data: response;
//       }
//     })
//   }
// }

// module.exports = helpers;

// var quiz = [
//   {
//     "question": this.props.trialOneQs[0],
//     "choices": ["Y", "N"],
//     "answer": this.props.trialOneAnswers[0]
//   }, {
//     "question": this.props.trialOneQs[1],
//     "choices": ["Y", "N"],
//     "answer": this.props.trialOneAnswers[1]
//   }, {
//     "question": this.props.trialOneQs[2],
//     "choices": ["Y", "N"],
//     "answer": this.props.trialOneAnswers[2]
//   }, {
//     "question": this.props.trialOneQs[3],
//     "choices": ["Y", "N"],
//     "answer": this.props.trialOneAnswers[3]
//   }, {
//     "question": this.props.trialOneQs[4],
//     "choices": ["Y", "N"],
//     "answer": this.props.trialOneAnswers[4]
//   }, {
//     "question": this.props.trialOneQs[5],
//     "choices": ["Y", "N"],
//     "answer": this.props.trialOneAnswers[5]
//   }
// ];

// module.exports = quiz;