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
  handleUserAnswerSubmit: function () {

    // axios.post('/api/trials-answers', {trialID: this.state.trialID, answers: this.state.answers})
    //   .then(function(results){
    //     console.log("Posted to MongoDB" +results);
    //   })

  },
  componentDidUpdate: function(prevProps, prevState){
    console.log("COMPONENT UPDATED");
  },
  render: function() {
    // var trials = this.state.data;
    // var questions;
    // for(var i =0; i < trials.length; i++) {
    //   for(var j=0; j <trials[i].questions.length; j++) {
    //     questions = trials[i].questions[j].question;
    //   console.log(questions);
    //   }
    // }

    return (
      <div className="container">
    
        <div>
        <Question data={this.state.data} onUserSubmit={this.state.handleUserAnswerSubmit} />
        {/*<QuestionForm onUserSubmit={this.state.handleUserAnswerSubmit} />*/}
        </div>

        <div className="row">
          <div className="col-lg-6">

            <Results /> 
             
            
          </div>

          <div className="col-lg-6">

            <Results />
            
            
          </div>

          <div className="col-lg-6">

            <Results />
            
            

          </div>
          <div className="col-lg-6">

            <Results />
                        
            

          </div>
        </div>
        <div className="row">

          <div className="col-lg-6">

            <Results />
            
            
          </div>

          <div className="col-lg-6">

            <Results />
            
            
          </div>

          <div className="col-lg-6">

            <Results />
            
          </div>
          <div className="col-lg-6">

            <Results />
            
            
          </div>
        </div>
        
      </div>
    );
  }
});

module.exports = Quiz;