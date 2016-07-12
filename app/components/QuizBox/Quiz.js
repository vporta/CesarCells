var React = require('react');
// var helpers = require('../utils/helpers.js');
var axios = require('axios');
var TrialOne = require('./TrialOne');


var Quiz = React.createClass({
  getInitialState: function() {
    return {
      trialOneUrl: '',
      trialTwoUrl: '',
      trialThreeUrl: '',
      trialFourUrl: '',
      trialFiveUrl: '',
      trialSixUrl: '',
      trialSevenUrl: '',
      trialEightUrl: '',
      trialOneName: '',
      trialTwoName: '',
      trialThreeName: '',
      trialFourName: '',
      trialFiveName: '',
      trialSixName: '',
      trialSevenName: '',
      trialEightName: '',
      trialOneConditionsDisease: '',
      trialTwoConditionsDisease: '',
      trialThreeConditionsDisease: '',
      trialFourConditionsDisease: '',
      trialFiveConditionsDisease: '',
      trialSixConditionsDisease: '',
      trialSevenConditionsDisease: '',
      trialEightConditionsDisease: '',
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
            trialOneUrl: result.data[0].url,
            trialTwoUrl: result.data[1].url,
            trialThreeUrl: result.data[2].url,
            trialFourUrl: result.data[3].url,
            trialFiveUrl: result.data[4].url,
            trialSixUrl: result.data[5].url,
            trialSevenUrl: result.data[6].url,
            trialEightUrl: result.data[7].url,
            trialOneName: result.data[0].name,
            trialTwoName: result.data[1].name,
            trialThreeName: result.data[2].name,
            trialFourName: result.data[3].name,
            trialFiveName: result.data[4].name,
            trialSixName: result.data[5].name,
            trialSevenName: result.data[6].name,
            trialEightName: result.data[7].name,
            trialOneConditionsDisease: result.data[0].conditionsDisease.join(" and "),
            trialTwoConditionsDisease: result.data[1].conditionsDisease.join(" and "),
            trialThreeConditionsDisease: result.data[2].conditionsDisease.join(" and "),
            trialFourConditionsDisease: result.data[3].conditionsDisease.join(" and "),
            trialFiveConditionsDisease: result.data[4].conditionsDisease.join(" and "),
            trialSixConditionsDisease: result.data[5].conditionsDisease.join(" and "),
            trialSevenConditionsDisease: result.data[6].conditionsDisease.join(" and "),
            trialEightConditionsDisease: result.data[7].conditionsDisease.join(" and "),
            questionsTrialOne: [result.data[0].questions[0].one, result.data[0].questions[1].two, result.data[0].questions[2].three, result.data[0].questions[3].four, result.data[0].questions[4].five, result.data[0].questions[5].six],
            questionsTrialTwo: [result.data[1].questions[0].one, result.data[1].questions[1].two, result.data[1].questions[2].three, result.data[1].questions[3].four, result.data[1].questions[4].five, result.data[1].questions[5].six, result.data[1].questions[6].seven, result.data[1].questions[7].eight],
            questionsTrialThree: [result.data[2].questions[0].one, result.data[2].questions[1].two, result.data[2].questions[2].three],
            questionsTrialFour: [result.data[3].questions[0].one],
            questionsTrialFive: [result.data[4].questions[0].one],
            questionsTrialSix: null,
            questionsTrialSeven: [result.data[6].questions[0].one, result.data[6].questions[1].two, result.data[6].questions[2].three, result.data[6].questions[3].four, result.data[6].questions[4].five],
            questionsTrialEight: [result.data[7].questions[0].one, result.data[7].questions[1].two, result.data[7].questions[2].three],
            answersTrialOne: [result.data[0].questions[0].correct, result.data[0].questions[1].correct, result.data[0].questions[2].correct, result.data[0].questions[3].correct, result.data[0].questions[4].correct, result.data[0].questions[5].correct],
            answersTrialTwo: [result.data[1].questions[1].correct, result.data[1].questions[1].correct, result.data[1].questions[2].correct, result.data[1].questions[3].correct, result.data[1].questions[4].correct, result.data[1].questions[5].correct, result.data[1].questions[6].correct, result.data[1].questions[7].correct],
            answersTrialThree: [result.data[2].questions[0].correct, result.data[2].questions[1].correct, result.data[2].questions[2].correct],
            answersTrialFour: [result.data[3].questions[0].correct],
            answersTrialFive: [result.data[4].questions[0].correct],
            answersTrialSix: null,
            answersTrialSeven: [result.data[6].questions[0].correct, result.data[6].questions[1].correct, result.data[6].questions[2].correct, result.data[6].questions[3].correct, result.data[6].questions[4].correct],
            answersTrialEight: [result.data[7].questions[0].correct, result.data[7].questions[1].correct, result.data[7].questions[2].correct],
          });
      })
  },
  componentWillUnmount: function() {
    this.serverRequest.abort();
  },
  render: function() {

    return (
      <div>
      <h2>Stargardts Clinical Trial Assessment</h2>

        
       
        <TrialOne trialOneQs={this.state.questionsTrialOne} trialOneAnswers={this.state.answersTrialOne} /> 

        {/*trialTwoQs={this.state.questionsTrialTwo} trialThreeQs={this.state.questionsTrialThree} trialFourQs={this.state.questionsTrialFour} trialFiveQs={this.state.questionsTrialFive} trialSixQs={null} trialSevenQs={this.state.questionsTrialSeven} trialEightQs={this.state.questionsTrialEight}/>*/}

        {/*<Answers trialOneAnswers={this.state.answersTrialOne} trialTwoAnswers={this.state.answersTrialTwo} trialThreeAnswers={this.state.answersTrialThree} trialFourAnswers={this.state.answersTrialFour} trialFiveAnswers={this.state.answersTrialFive} trialSixAnswers={this.state.answersTrialSix} trialSevenAnswers={this.state.answersTrialSeven} trialEightAnswers={this.state.answersTrialEight} />*/}
      
      </div>
    );
  }
});

module.exports = Quiz;