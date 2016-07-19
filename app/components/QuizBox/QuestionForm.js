var React = require('react');
var Draggable = require('react-draggable');
var DraggableCore = Draggable.DraggableCore;
var _ = require('underscore');
var ScoreBox = require('./ScoreBox');
var Question = require('./Question');
// var Trial = require('./models/Trial');

var QuestionForm = React.createClass({

  getInitialState: function() {
    return {
      yes: 'Y',
      no: 'N'
    };
  },

  componentDidMount: function() {

   

  },
  // When a user submits... 
  handleYesSubmit: function(e){
    e.preventDefault();
    var userAnswerYes = this.state.yes;
    var userAnswerNo = this.state.no;
    //unshift now 
    //then hit api to save answer
    console.log(userAnswerYes);
    // console.log(userAnswerNo);
    // console.log(this.state.term);
    // Set the parent to have the search term
    // this.props.onUserSubmit({yes: userAnswerYes, no: userAnswerNo});

  },
  handleNoSubmit: function(e){
    e.preventDefault();
    var userAnswerYes = this.state.yes;
    var userAnswerNo = this.state.no;
    //unshift now 
    //then hit api to save answer
    // console.log(userAnswerYes);
    console.log(userAnswerNo);
    // console.log(this.state.term);
    // Set the parent to have the search term
    // this.props.onUserSubmit({yes: userAnswerYes, no: userAnswerNo});

  },
  render: function() {
 
    return(
      {/*<div className="container">
        <form className="questionForm">
          <div className="panel panel-default">
            <div className="panel-body">
                
              

            </div>
            <button href="#" id="Y" type="submit" onClick={this.handleYesSubmit} className="myButton">YES</button>
            <button href="#" type="submit" onClick={this.handleNoSubmit} id="N" className="myButton">NO</button>
          </div>
        </form>
        <div>
          <small className="text-center">By taking this screening tool, you acknowledge that it is not a diagnostic instrument, is informational only, does not constitute medical or treatment advice, and is only to be used if you are 18 years or older. You are encouraged to share your results with a health provider or physician.</small>
        </div>
      </div>*/}
    );
  }
});

module.exports = QuestionForm;