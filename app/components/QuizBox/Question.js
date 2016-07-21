var React = require('react');
var Draggable = require('react-draggable');
var DraggableCore = Draggable.DraggableCore;
var _ = require('underscore');
var axios = require('axios');

var Question = React.createClass({

  getInitialState: function () {
    return {
      questions: [],
      trialID: '',
      currentQuestion: null,
      currentTrial: null,
      progress: 0,
      trialNumberIndex: 0,
      completed: false,
      yes: 'Y',
      no: 'N'
    }
  },
  componentWillMount: function() {
  
  },
  handleYesClick: function(e) {
    e.preventDefault();
    console.log('these are props' + this.props);

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

                } if (this.state.progress === 0) {

                    if (this.state.trialNumberIndex === 4) { 

                      this.setState ({

                        trialNumberIndex: this.state.trialNumberIndex + 2,
                        progress: 0

                      })

                    }
                }
                  if (this.state.trialNumberIndex === 6) {

                    this.setState({

                      progress: this.state.progress + 1

                    })

                  } if (this.state.progress === 4) {

                      if (this.state.trialNumberIndex === 6) {

                        this.setState({

                          trialNumberIndex: this.state.trialNumberIndex + 1,
                          progress: 0

                        })

                      }

                  }
                    if (this.state.trialNumberIndex === 7) {
                      this.setState({
                        progress: this.state.progress + 1
                      })
                    } if (this.state.progress === 2) {
                        if (this.state.trialNumberIndex === 7) {
                            this.endQuiz();  

                          // this.setState({
                          //   trialNumberIndex: 0,
                          //   progress: 0
                          // })
                        }
                      }

  console.log('----hello world----');
  console.log('progress: ' + this.state.progress);
  console.log('trialNumberIndex: ' + this.state.trialNumberIndex);  
  
  // INVOKE HANDLESUBMIT AND POST USER ANSWERS TO MONGODB
  this.handleSubmit(e, 1);  
  },
  handleNoClick: function(e) {
    e.preventDefault();
    console.log('these are props' + this.props);

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

                } if (this.state.progress === 0) {

                    if (this.state.trialNumberIndex === 4) { 

                      this.setState ({

                        trialNumberIndex: this.state.trialNumberIndex + 2,
                        progress: 0

                      })

                    }
                }
                  if (this.state.trialNumberIndex === 6) {

                    this.setState({

                      progress: this.state.progress + 1

                    })

                  } if (this.state.progress === 4) {

                      if (this.state.trialNumberIndex === 6) {

                        this.setState({

                          trialNumberIndex: this.state.trialNumberIndex + 1,
                          progress: 0

                        })

                      }

                  }
                    if (this.state.trialNumberIndex === 7) {
                      this.setState({
                        progress: this.state.progress + 1
                      })
                    } if (this.state.progress === 2) {
                        if (this.state.trialNumberIndex === 7) {
                            this.endQuiz();  

                          // this.setState({
                          //   trialNumberIndex: 0,
                          //   progress: 0
                          // })
                        }
                      }

  console.log('----hello world----');
  console.log('progress: ' + this.state.progress);
  console.log('trialNumberIndex: ' + this.state.trialNumberIndex);  

  this.handleSubmit(e, 0);
  },
  setCurrentQuestion: function(q) {
    this.state.currentQuestion = question;
    console.log(question);
  },
  endQuiz: function() {
    if (this.state.trialNumberIndex === 7) {

      if (this.state.progress === 2) {

        alert('GAME OVER!');

        window.location = window.location.origin + "/users/dashboard";
      }
    }
  },
  handleSubmit: function(e, ans) {
    console.log('hey now onsubmit fired')
    e.preventDefault();
    // /var form = e.target;
    //must change these values otherwise it would not 
    var answer = {
      user_answer: ans,
      question_id: this.state.progress,
      trial_id: this.state.trialNumberIndex
    };
    // console.log(yes + no);
    // console.log(e);
    console.log(this.state.trialNumberIndex);
    console.log(this.state.progress);

    axios.post('/api/trials-answers',answer)
      .then(function(results){
        console.log("Posted to MongoDB" + results);
      }.bind(this))
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
            {/*<button href="#" id="Y" type="submit" onClick={this.handleClick} className="myButton">Click Me</button>*/}
         <form className="questionForm">
           <div className="panel panel-default">
             <div className="panel-body">
                 
             </div>
             <button href="#" id="Y" data-value="Y" name="Y" ref='Y' type="submit" onClick={this.handleYesClick} className="myButton">YES</button>
             <button href="#" name="N" ref='N' type="submit" onClick={this.handleNoClick} id="N" className="myButton">NO</button>
           </div>
         </form>

        </div>
        )
      }
    } // End loops
      return (
       
      <div className="question-assessment">

      <button href="#" id="Y" type="submit" onClick={this.handleClick} className="myButton">Click Me</button>
      </div>

    );
  },
});

module.exports = Question;

