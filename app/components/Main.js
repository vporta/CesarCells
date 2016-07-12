// Include React 
var React = require('react');
var axios = require('axios');

var Quiz = require('./QuizBox/Quiz');

var Main = React.createClass({

  render: function() {
    return (
        <div className="container">

          <div className="row">

            

            {/*This represents the "Parent"*/}
            <Quiz />
          </div>

        </div>
    );
  }
});

module.exports = Main;