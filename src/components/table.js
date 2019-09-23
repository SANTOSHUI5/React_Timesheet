import React from 'react';
import './tabs.css';
import data from './tableData.json';
export default class Table extends React.Component{
  constructor(props){
    super(props);
  }
  render() {
    return (
      <table class="table table-condensed">
      <thead>
          <tr>
          <th>Employee</th>
          <th>ST Hours</th>
          <th>OT Hours</th>
          <th>DT Hours</th>
          <th>Total</th>
          <th>Add Notes</th>
          <th>Gang</th>
          </tr>
      </thead>
      <tbody className="myTable">
      {data.map((row)=>(
        <tr>
            <td>{row.eId} {row.Employee}</td>
            <td>{row.st}</td>
            <td>{row.ot}</td>
            <td>{row.dt}</td>
            <td>{row.st + row.ot + row.dt}</td>
            <td><input/></td>
            <td>{row.Gang}</td>
        </tr>
      ))}
      </tbody>
  </table>
    );
  }
}
