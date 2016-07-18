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
      trialNumberIndex: 0,
      completed: false
    }
  },
  componentWillMount: function() {
  
  },
  handleClick: function() {

    if (this.state.trialNumberIndex === 0) {
      
      if (this.state.progress < 5) {
        
        this.setState({
          progress: this.state.progress + 1,
        })
      }
    } if (this.state.progress === 5) {

          if (this.state.trialNumberIndex === 0) {

            this.setState({
              trialNumberIndex: this.state.trialNumberIndex + 1,
              progress: 0 
            })

          } 
      }
            if (this.state.trialNumberIndex === 1) {
              this.setState({
                progress: this.state.progress + 1
              })
            } if (this.state.progress === 7) {

                if (this.state.trialNumberIndex === 1) {

                  this.setState({
                    trialNumberIndex: this.state.trialNumberIndex + 1,
                    progress: 0 
                  })
                }
              }
                if (this.state.trialNumberIndex === 2) {
                  this.setState({
                    progress: this.state.progress + 1
                  })
                } if (this.state.progress === 2) {

                    if (this.state.trialNumberIndex === 2) {

                      this.setState({
                        trialNumberIndex: this.state.trialNumberIndex + 1,
                        progress: 0 
                      })

                    }
                }
                  if (this.state.trialNumberIndex === 3) {
                    this.setState({
                      progress: this.state.progress + 1
                    })
                  } if (this.state.progress === 0) {

                      if (this.state.trialNumberIndex === 3) {

                        this.setState ({
                          trialNumberIndex: this.state.trialNumberIndex + 1,
                          progress: 0
                        })

                      }
                  }
                    if (this.state.trialNumberIndex === 4) {
                      this.setState({
                        progress: this.state.progress + 1
                      })
                    } if (this.state.progress === 'undefined') {

                        if (this.state.trialNumberIndex === 4) { 

                          this.setState ({
                            trialNumberIndex: this.state.trialNumberIndex + 1,
                            progress: 0
                          })

                        }

                    }





            console.log('hello world');
            console.log('progress: ' + this.state.progress);
            console.log('trialNumberIndex: ' + this.state.trialNumberIndex);

      
      console.log('progress: ' + this.state.progress);
      console.log('trialNumberIndex: ' + this.state.trialNumberIndex);
  },
  getCurrentQuestion: function () {

  },
  setCurrentQuestion: function(q) {
    this.state.currentQuestion = question;
    console.log(question);
  },
  nextQuiz: function() {
    this.setState({
      trialNumberIndex: this.state.trialNumberIndex + 1
    })
  },
  render: function() {

    var question, elem, i, j, trial;
    var _id = this.state.trialNumberIndex;
    var trials = this.props.data;
    
    for(var i =0; i < trials.length; i++) {

      for(var j=0; j < trials[i].questions.length; j++) {

      // console.log(trials[0].questions[0].question);
      question = trials[this.state.trialNumberIndex].questions[this.state.progress];
      trial = trials[j];
      console.log(question);
      // console.log(trial._id);


      return (
        <div className="question-assessment">

        
        <h1 key={i} onChange={this.setCurrentQuestion}>{question.question}</h1>
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

