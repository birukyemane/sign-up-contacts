import React, { Component } from 'react';
import './index.css';


function TableRow(props) {
  return (
  	<tr className ="Table-row">
      <td className ="Table-cell" key={props.data.fullName}>{props.data.fullName}</td>
      <td key={props.data.email}>{props.data.email}</td>
      <td key={props.data.phone}>{props.data.phone}</td>
      <td className="removeData">
          <button onClick={()=>props.delete(props.index)}>Delete</button>
      </td>
    </tr>
  );
}


class Table extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {

  	const rows =  this.props.participants.map((participant, j) => {
		return   (
			<TableRow data={participant} index={j} delete={this.props.delete}/>
		);		
  	});


    return (
      <table>
		  <tr className ="Table-header">
      		<th>Name</th>
      		<th>Email address</th>
      		<th>Phone number</th>
      </tr>  
      	{rows}   		     	 
      </table>
    );
  }
}
 
export default Table;
