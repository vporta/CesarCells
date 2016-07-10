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
            questionsTrialOne: [result.data[0].questions[0].one, result.data[0].questions[1].two, result.data[0].questions[2].three, result.data[0].questions[3].four, result.data[0].questions[4].five, result.data[0].questions[5].six],
            questionsTrialTwo: [result.data[1].questions[0].one, result.data[1].questions[1].two, result.data[1].questions[2].three, result.data[1].questions[3].four, result.data[1].questions[4].five, result.data[1].questions[5].six, result.data[1].questions[6].seven, result.data[1].questions[7].eight],
            questionsTrialThree: [result.data[2].questions[0].one, result.data[2].questions[1].two, result.data[2].questions[2].three],
            questionsTrialFour: [result.data[3].questions[0].one],
            questionsTrialFive: [result.data[4].questions[0].one],
            questionsTrialSix: null,
            questionsTrialSeven: [result.data[6].questions[0].one, result.data[6].questions[1].two, result.data[6].questions[2].three, result.data[6].questions[3].four, result.data[6].questions[4].five],
            questionsTrialEight: [result.data[7].questions[0].one, result.data[7].questions[1].two, result.data[7].questions[2].three],
            // answersTrialOne: result.data[0].questions[0].correct,
            // answersTrialTwo: result.data[0].questions[1].correct,
            // answersTrialThree: result.data[0].questions[2].correct,
            // answersTrialFour: result.data[0].questions[3].correct,
            // answersTrialFive: result.data[0].questions[4].correct,
            // answersTrialSix: result.data[0].questions[5].correct,
            // answersTrialSeven: result.data[0].questions[6].correct,
            // answersTrialEight: result.data[0].questions[7].correct,
          });
        })
        // console.log(this.answersTrialEight);
  },

  // componentWillUnmount: function() {
  //   this.serverRequest.abort();
  // },

  render: function() {
    return (
      <div>
      <h2> Assessment</h2>
     
        {this.state.questionsTrialOne.map(function(trial1, i) {
          // console.log(i);
          return (

              <h2 key={i}>{'Question ' + i + ':'} {trial1} </h2>
            )
        })}
                 
             
            
        <QuestionForm />
      </div>
    );
  }
});

module.exports = Quiz;