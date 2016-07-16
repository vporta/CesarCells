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
      progress: 0,
      score: 0
  },
  checkAnswer: function(index) {
    
  },
  resetQuiz: function() {
  },
  componentWillUnmount: function() {
  },
  componentDidUpdate: function(prevProps, prevState){
    console.log("COMPONENT UPDATED");
  },
  render: function() {
    return (
      <div className="container">
    
        <div>
        <Question />
        <Form />

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