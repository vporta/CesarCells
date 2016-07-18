var React = require('react');
var Draggable = require('react-draggable');
var DraggableCore = Draggable.DraggableCore;
var _ = require('underscore');

var Question = React.createClass({
  getInitialState: function () {
    return {
      questions: [],
      trialID: '',
      currentQuestion: null,
      currentTrial: null,
      progress: 0,
      trialNumber: 0
    }
  },
  componentWillMount: function() {
  
  },
  handleClick: function() {

    if(this.state.progress <=4) {

    this.setState({
      progress: this.state.progress + 1,
    })
    } else {
      this.setState({
        trialNumber: this.state.trialNumber + 1,
        progress: 0
      })
    } 
  },
  getCurrentQuestion: function () {

  },
  setCurrentQuestion: function(q) {
    this.state.currentQuestion = question;
  },
  nextQuestion: function() {
    
  },
  render: function() {

    var question, elem, i, j, trial;
    var trials = this.props.data;
    
    for(var i =0; i < trials.length; i++) {

      for(var j=0; j < trials[i].questions.length; j++) {

      // console.log(trials[0].questions[0].question);
      question = trials[this.state.trialNumber].questions[this.state.progress];
      trial = trials[j];
      console.log(question);
      // console.log(trial);


      return (
        <div className="question-assessment">

        
        <h1 key={i}>{question.question}</h1>
         <button href="#" id="Y" type="submit" onClick={this.handleClick} className="myButton">Click Me</button>
        </div>
        )
      }
    }


      return (
       
      <div className="question-assessment">

      
      </div>

    );
  },
});

module.exports = Question;

