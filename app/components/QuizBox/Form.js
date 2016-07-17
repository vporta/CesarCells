var React = require('react');
var Draggable = require('react-draggable');
var DraggableCore = Draggable.DraggableCore;
var ScoreBox = require('./ScoreBox');
var Question = require('./Question');
// var Trial = require('./models/Trial');


var Form = React.createClass({

  getInitialState: function() {
    return {
      answer: ''
    };
  },

  componentDidMount: function() {

   

  },
  // When a user submits... 
  handleClick: function(){

    console.log("CLICK");
    // console.log(this.state.term);
    // Set the parent to have the search term
    // this.props.setTerm(this.state.answer);

  },
  
  render: function() {
    
      // <h2>Stargardts Clinical Trial Assessment</h2>
    return(
      <div className="container">


        <form className="form">
        <div className="panel panel-default">
          <div className="panel-body">
            <div className="quizContainer">
            
            </div>
         
          </div>
          <button href="#" type="submit" value='Y' className="myButton" onClick={this.handleClick}>YES</button>
          <button href="#" type="submit" value='N' className="myButton" onClick={this.handleClick}>NO</button>
        </div>
        </form>
        <div>
          <small className="text-center">By taking this screening tool, you acknowledge that it is not a diagnostic instrument, is informational only, does not constitute medical or treatment advice, and is only to be used if you are 18 years or older. You are encouraged to share your results with a health provider or physician.</small>
        </div>

      </div>
    );
  }
});

module.exports = Form;