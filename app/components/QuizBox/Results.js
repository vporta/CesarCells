var React = require('react');
var Draggable = require('react-draggable');
var DraggableCore = Draggable.DraggableCore;

var Results = React.createClass({

  render: function() {

    return (
       


          <div className="circle-shape-results">

            <h2>Trial Name:</h2> 

            <p> Conditions Treated:</p>

            <strong><p> Your Qualified Percentage:</p></strong>
          
          </div>

    );
  }
});

module.exports = Results;


// <table id="gene-table" class="table table-striped">
//   <thead>
//     <tr>
//       <th>Gene</th>
//       <th>Marker (SNP)</th>
//       <th>Genomic Position</th>
//       <th>Variants</th>
//       <th>Your Genotype</th>
//     </tr>
//   </thead>
//   <tbody>
//     <tr>
//       <th scope="row">1</th>
//       <td>Mark</td>
//       <td>Otto</td>
//       <td>@mdo</td>
//       <td>@mdo</td>
//     </tr>
//     <tr>
//       <th scope="row">2</th>
//       <td>Jacob</td>
//       <td>Thornton</td>
//       <td>@fat</td>
//       <td>@mdo</td>

//     </tr>
//     <tr>
//       <th scope="row">3</th>
//       <td>Larry</td>
//       <td>the Bird</td>
//       <td>@twitter</td>
//       <td>@mdo</td>

//     </tr>
//   </tbody>
// </table>