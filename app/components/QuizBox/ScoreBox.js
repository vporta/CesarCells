var React = require('react');


var ScoreBox = React.createClass( {
  render: function() {
    return (
      <div className="score">
          {/*<p>Score: {this.props.score}  possible.</p>*/}
        </div>
    );
  }
});

module.exports = ScoreBox;