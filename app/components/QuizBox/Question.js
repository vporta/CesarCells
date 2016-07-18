var React = require('react');
var Draggable = require('react-draggable');
var DraggableCore = Draggable.DraggableCore;
var _ = require('underscore');

var Question = React.createClass({
  getInitialState: function () {
    return {
      questions: [],
      trialID: ''
    }
  },
  componentWillMount: function() {
  
  },
  handleClick: function() {

  },
  render: function() {
    var trials = this.props.data;
    for(var i =0; i < trials.length; i++) {
      for(var j=0; j <trials[i].questions.length; j++) {

      console.log(trials[0].questions[0].question);
      
      return (
        <div className="question-assessment">

        
        <h1>{trials[0].questions[0].question}</h1>
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

