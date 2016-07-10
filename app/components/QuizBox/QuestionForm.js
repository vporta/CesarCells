var React = require('react');

var QuestionForm = React.createClass({

  getInitialState: function() {
      return {
        questions: '',
        answers: '',
        value: ''
      };
    },
  handleChange: function(event) {
    this.setState({
      value: event.target.value
    });
  },
  render: function() {
    return (
      <div className="container">
        <div className = "row">
          <div className = "col-md-12">
        
            <p className="question">1. What is the answer to this question?</p>
            <ul className="answers">
            <div className="btn-group btn-group-justified" role="group" aria-label="...">

            <div className="btn-group" role="group">
              <button type="button" value={this.state.value} id="q1a" className="btn btn-default active" onClick={this.handleChange}>Yes</button><br/>
            </div>
            <div className="btn-group" role="group">
              <button type="button" value={this.state.value} id="q1b" className="btn btn-default active" onClick={this.handleChange}> No</button> <br/>
            </div>
            </div>
       
            </ul>
          </div> 
        </div>
      </div>
    );
  }
});

module.exports = QuestionForm;