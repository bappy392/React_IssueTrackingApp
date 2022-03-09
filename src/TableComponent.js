import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Table } from 'react-bootstrap';


const TableComponent=({newArrState})=>{
  return(
      <>
      <Table striped bordered hover>
      <thead>
    <tr>
      <th>#</th>
      <th>Title</th>
      <th>Subtitle</th>
      <th>Assigned</th>
      <th>Start</th>
      <th>End</th>
      <th>Priority</th>
      <th>RangeComplete</th>
    </tr>
  </thead>
  <tbody>
      {       
        newArrState.map((item,i)=>(
            <>
              <tr key={i}>
                <td>{i+1}</td>
                <td>{item.title}</td>
                <td>{item.subtitle}</td>
                <td>{item.assigned}</td>
                <td>{item.start}</td>
                <td>{item.end}</td>
                <td>{item.priority}</td>
                <td>{item.rangeComplete}</td>
                </tr>
                </>
        ))
     }
      
        </tbody>
     </Table>
      </>
  )
}


export default TableComponent