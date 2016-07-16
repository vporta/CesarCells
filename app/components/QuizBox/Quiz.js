var React = require('react');
var axios = require('axios');
var Draggable = require('react-draggable');
var DraggableCore = Draggable.DraggableCore;

var Form = require('./Form');
var Question = require('./Question');
var Results = require('./Results');

var Quiz = React.createClass({
  getInitialState: function() {
    return {
      data: [],
      user_answers: [],
      step: 0,
      score: 0
      
    };
  },
  nextStep: function(){
      this.setState({step: (this.state.step + 1)});
  },
  setAnswer: function(event){
      this.state.user_answers[this.state.step] = this.state.user_answers[this.state.step] || [];
      this.state.user_answers[this.state.step][parseInt(event.target.value)] = event.target.checked;
  },
  getAllQuestions: function (Qs) {
    
    for(var i = 0; i < Qs.length; i++) {
      for(var j = 0; j < Qs[i].questions.length; j++) {
        console.log('all questions: ' + Qs[i].questions[j].one);
      }
    }   
  },
  checkAnswer: function () {

  },
  componentDidMount: function() {    
    var _this = this;
    this.serverRequest = 
      axios
        .get('/api/trials')
        .then(function(result) {   
        
        console.log(result); 
        // console.log('trialOne questions: ' + result.data);
          _this.setState({
            data: result.data
          });
      });
  },
  componentWillUnmount: function() {
    this.serverRequest.abort();
  },
  componentDidUpdate: function(prevProps, prevState){
    console.log("COMPONENT UPDATED");
  },
  render: function() {
    this.getAllQuestions(this.state.data);
    return (
      <div className="container">
    
        <div>
        <Form />
        <Question />

        </div>


        <div className="row">
          <div className="col-lg-12">

            <Results /> 
             
            
          </div>

          <div className="col-lg-12">

            <Results />
            
            
          </div>

          <div className="col-lg-12">

            <Results />
            
            

          </div>
          <div className="col-lg-12">

            <Results />
                        
            

          </div>
        </div>
        <div className="row">

          <div className="col-lg-12">

            <Results />
            
            
          </div>

          <div className="col-lg-12">

            <Results />
            
            
          </div>

          <div className="col-lg-12">

            <Results />
            
          </div>
          <div className="col-lg-12">

            <Results />
            
            
          </div>
        </div>
        
      </div>
    );
  }
});

module.exports = Quiz;