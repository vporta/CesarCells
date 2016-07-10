var React = require('react');
// var helpers = require('../utils/helpers.js');
var QuestionForm = require('./QuestionForm');
var axios = require('axios');

var Quiz = React.createClass({
  getInitialState: function() {
    return {
      data: [],
      questionsTrialOne: [],
      questionsTrialTwo: [],
      questionsTrialThree: [],
      questionsTrialFour: [],
      questionsTrialFive: [],
      questionsTrialSix: [],
      questionsTrialSeven: [],
      questionsTrialEight: [],
      answersTrialOne: [],
      answersTrialTwo: [],
      answersTrialThree: [],
      answersTrialFour: [],
      answersTrialFive: [],
      answersTrialSix: [],
      answersTrialSeven: [],
      answersTrialEight: []
    }
  },
  componentDidMount: function() {
    var _this = this;
    this.serverRequest = 
      axios
        .get('/api/trials')
        .then(function(result) {   
        
        console.log(result); 

          _this.setState({
            data: result.data,
            questionsTrialOne: [result.data[0].questions[0].one, result.data[0].questions[0].two, result.data[0].questions[0].three, result.data[0].questions[0].four, result.data[0].questions[0].five, result.data[0].questions[0].six],
            questionsTrialTwo: [result.data[1].questions[1].one, result.data[1].questions[1].two, result.data[1].questions[1].three, result.data[1].questions[1].four, result.data[1].questions[1].five, result.data[1].questions[1].six],
            questionsTrialThree: [result.data[2].questions[2].one, result.data[2].questions[2].two, result.data[2].questions[2].three, result.data[2].questions[2].four, result.data[2].questions[2].five, result.data[2].questions[2].six],
            questionsTrialFour: null,
            questionsTrialFive: null,
            questionsTrialSix: [result.data[5].questions[5].one, result.data[5].questions[5].two, result.data[5].questions[5].three, result.data[5].questions[5].four, result.data[5].questions[5].five, result.data[5].questions[5].six],
            questionsTrialSeven: [result.data[6].questions[6].one, result.data[6].questions[6].two, result.data[6].questions[6].three, result.data[6].questions[6].four, result.data[6].questions[6].five, result.data[6].questions[6].six],
            questionsTrialEight: [result.data[7].questions[7].one, result.data[7].questions[7].two, result.data[7].questions[7].three, result.data[7].questions[7].four, result.data[7].questions[7].five, result.data[7].questions[7].six],
            answersTrialOne: result.data[0].questions[0].correct,
            answersTrialTwo: result.data[0].questions[1].correct,
            answersTrialThree: result.data[0].questions[2].correct,
            answersTrialFour: result.data[0].questions[3].correct,
            answersTrialFive: result.data[0].questions[4].correct,
            answersTrialSix: result.data[0].questions[5].correct,
            answersTrialSeven: result.data[0].questions[6].correct,
            answersTrialEight: result.data[0].questions[7].correct,
          });
        })
  },

  // componentWillUnmount: function() {
  //   this.serverRequest.abort();
  // },

  render: function() {
    return (
      <div>
      <h2> Below is the questions array</h2>
     
        {this.state.questionsTrialOne.map(function(trial1, i) {
          // console.log(i);
          return (

              <h2 key={i}> {trial1} </h2>
            )
        })}
                 
             
            
        <QuestionForm />
      </div>
    );
  }
});

module.exports = Quiz;