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
      progress: 0
    }
  },
  componentWillMount: function() {
  
  },
  handleClick: function() {
    this.setState({
      progress: this.state.progress + 1
    })
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
      question = trials[i].questions[this.state.progress];
      trial = trials[j];
      console.log(question);

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

