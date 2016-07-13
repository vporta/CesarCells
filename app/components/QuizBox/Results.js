var React = require('react');
var Draggable = require('react-draggable');
var DraggableCore = Draggable.DraggableCore;

var Results = React.createClass({
  
  render: function() {

    return (
       


          <div className="circle-shape-results">

            <h2>Trial Name: {this.props.name} </h2> 

            <p> Conditions Treated: {this.props.conditions} </p>

            <strong><p> Your Qualified Percentage: {this.props.score} </p></strong>
          
          </div>

    );
  }
});

module.exports = Results;