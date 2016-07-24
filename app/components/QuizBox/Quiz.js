var React = require('react');
var axios = require('axios');
var Draggable = require('react-draggable');
var DraggableCore = Draggable.DraggableCore;
var _ = require('underscore');
// var ReactCSSTransitionGroup = require('react-addons-css-transition-group');
var QuestionForm = require('./QuestionForm');
var Question = require('./Question');
var Results = require('./Results');

var Quiz = React.createClass({
  getInitialState: function() {
    return {
      data: [],
      step: 0,
      score: 0,
      trialID: '',
      answers: '',
      questions: []
    }
  },
  componentWillMount: function() {    
    var _this = this;
    this.serverRequest = 
      axios.get('/api/trials')
        .then(function(result) {   
          console.log(result); 
          
          _this.setState({
            data: result.data,
          })
        })
  },
  componentDidUpdate: function(prevProps, prevState){
    console.log("COMPONENT UPDATED");
  },
  render: function() {

    return (
      <div className="container">
    
        <div>
        <Question data={this.state.data} onUserSubmit={this.state.handleUserAnswerSubmit} />
        </div>

        <div className="row">
       
        </div>
        
      </div>
    );
  }
});

module.exports = Quiz;