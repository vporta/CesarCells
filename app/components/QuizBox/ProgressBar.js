var React = require('react');
var Progress = require('react-progressbar');
var _ = require('underscore');

// For each click of the yes or no button, 
// Increment the progress bar by one
 
var ProgressBar = React.createClass({
 
  render: function() {
    return (
      <div>
        <div>
          <h1>Progress</h1>
        </div>
        <Progress completed={this.props.completed} />
      </div>
    );
  }
});
module.exports = ProgressBar;