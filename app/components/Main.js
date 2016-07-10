// Include React 
var React = require('react');

var Quiz = require('./QuizBox/Quiz');
var QuestionForm = require('./QuizBox/QuestionForm');

var Main = React.createClass({

  render: function() {
    return (
        <div className="container">

          <div className="row">

            <div className="jumbotron">
              <h2><em>Stargardts Assessment</em></h2>
            </div>


            {/*This represents the "Parent"*/}
            <Quiz />
          </div>

        </div>
    );
  }
});

module.exports = Main;