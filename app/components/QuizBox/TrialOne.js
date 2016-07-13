var React = require('react');
var Draggable = require('react-draggable');
var DraggableCore = Draggable.DraggableCore;
var ScoreBox = require('./ScoreBox');

var TrialOne = React.createClass({

  getInitialState: function() {
    return {
      quiz: [],
      current: 0,
      current_quiz: [],
      user_choice: "",
      score: 0,
      verifying_answer: false
    };
  },
  // On each click save the click count
  // componentDidUpdate: function(prevProps, prevState){
  //   console.log("COMPONENT UPDATED");

  //   // We will check if the click count has changed...
  //   if (prevState.clicks != this.state.clicks){

  //     // If it does, then update the clickcount in MongoDB
  //     axios.post('/api', {clickID: this.state.clickID, clicks: this.state.clicks})
  //       .then(function(results){
  //         console.log("Posted to MongoDB");
  //       })
  //   }
  // },
  componentDidMount: function() {

    this.setState({

      quiz: [
        {
          "question": this.props.trialOneQs[0],
          "choices": ["Y", "N"],
          "answer": this.props.trialOneAnswers[0]
        }, {
          "question": this.props.trialOneQs[1],
          "choices": ["Y", "N"],
          "answer": this.props.trialOneAnswers[1]
        }, {
          "question": this.props.trialOneQs[2],
          "choices": ["Y", "N"],
          "answer": this.props.trialOneAnswers[2]
        }, {
          "question": this.props.trialOneQs[3],
          "choices": ["Y", "N"],
          "answer": this.props.trialOneAnswers[3]
        }, {
          "question": this.props.trialOneQs[4],
          "choices": ["Y", "N"],
          "answer": this.props.trialOneAnswers[4]
        }, {
          "question": this.props.trialOneQs[5],
          "choices": ["Y", "N"],
          "answer": this.props.trialOneAnswers[5]
        }
      ]

    });

    console.log(this);
  },
  nextQuestion: function (index) {

  },
  checkAnswer: function() {

  },
  render: function() {
    
    // var quiz = [
    //     {
    //       "question": this.props.trialOneQs[0],
    //       "choices": ["Y", "N"],
    //       "answer": this.props.trialOneAnswers[0]
    //     }, {
    //       "question": this.props.trialOneQs[1],
    //       "choices": ["Y", "N"],
    //       "answer": this.props.trialOneAnswers[1]
    //     }, {
    //       "question": this.props.trialOneQs[2],
    //       "choices": ["Y", "N"],
    //       "answer": this.props.trialOneAnswers[2]
    //     }, {
    //       "question": this.props.trialOneQs[3],
    //       "choices": ["Y", "N"],
    //       "answer": this.props.trialOneAnswers[3]
    //     }, {
    //       "question": this.props.trialOneQs[4],
    //       "choices": ["Y", "N"],
    //       "answer": this.props.trialOneAnswers[4]
    //     }, {
    //       "question": this.props.trialOneQs[5],
    //       "choices": ["Y", "N"],
    //       "answer": this.props.trialOneAnswers[5]
    //     }
    //   ];

      // console.log('hey this is question # 1 as quiz[0].question: ' + quiz[0].question);
        
    return(
      <div ref="dragform">

      <h2>Stargardts Clinical Trial Assessment</h2>

        <form className="form">
        <div className="panel panel-default">
          <div className="panel-body">
            <div className="quizContainer">
              <h2 id="whatup">{this.props.trialOneQs[0]}</h2>
            </div>
         
          </div>
          <button href="#" type="submit" className="myButton">YES</button>
          <button href="#" type="submit" className="myButton">NO</button>
        </div>
        </form>
        <div>
          <small className="text-center">By taking this screening tool, you acknowledge that it is not a diagnostic instrument, is informational only, does not constitute medical or treatment advice, and is only to be used if you are 18 years or older. You are encouraged to share your results with a mental health provider or physician.</small>
        </div>
      </div>
    );
  }
});

module.exports = TrialOne;