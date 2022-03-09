
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from 'react';
import Total from './Total';
import TableComponent from './TableComponent';
import { Form } from 'react-bootstrap';


function App() {

  const [userInfo,setUserInfo]=useState({
    title:'',
    subtitle:'',
    assigned:'',
    start:'',
    end:'',
    priority:'high',
    rangeComplete:0,
  })

  

  const handleChange=(evt)=>{
    setUserInfo({
      ...userInfo,
      [evt.target.name]:evt.target.value
    })
  }
  const {title,subtitle,assigned,start,end,priority,rangeComplete}=userInfo

  const [newArrState,setNewArrState]=useState([])

  const onSubmitHandler=(evt)=>{
         evt.preventDefault()

           setNewArrState([
            ...newArrState,
            {
              title:title,
              subtitle:subtitle,
              assigned:assigned,
              start:start,
              end:end,
              priority:priority,
              rangeComplete:rangeComplete,
            }
          ])
        

    
        

  }


  return (
    <>
      <Form onSubmit={onSubmitHandler} className="m-5">
        <h1 className='text-center'>Issue Tracking Manager</h1>
        <Form.Group className='form-group'>
          <Form.Label htmlFor='title'>Title</Form.Label>
          <Form.Control 
             name='title'
             type='text'
             id='title'
             onChange={handleChange}
             value={title}
          />
          </Form.Group>

          <Form.Group className='form-group'>
          <Form.Label htmlFor='subtitle'>Sub Title</Form.Label>
          <Form.Control  
             name='subtitle'
             type='text'
             id='subtitle'
             onChange={handleChange}
             value={subtitle}
          />
          </Form.Group>

          <Form.Group className='form-group'>
          <Form.Label htmlFor='assigned'>Assigned To</Form.Label>
          <Form.Control 
             name='assigned'
             type='text'
             id='assigned'
             onChange={handleChange}
             value={assigned}
          />
          </Form.Group>

          <Form.Group className='form-group'>
          <Form.Label htmlFor='start'>Start</Form.Label>
          <Form.Control 
             name='start'
             type='date'
             id='start'
             onChange={handleChange}
             value={start}
          />

        <Form.Label htmlFor='end'>End</Form.Label>
          <Form.Control 
             name='end'
             type='date'
             id='end'
             onChange={handleChange}
             value={end}
          />

          </Form.Group>

          <Form.Group className='form-group'>
          <input
              type='radio'
              name='priority'
              onChange={handleChange}
              value='high'
              checked={priority==='high'}
             />
            <label htmlFor='priority'>High</label>

            <input
              type='radio'
              name='priority'
              onChange={handleChange}
              value='medium'
              checked={priority==='medium'}
             />
            <label htmlFor='priority'>Medium</label>

            <input
              type='radio'
              name='priority'
              onChange={handleChange}
              value='low'
              checked={priority==='low'}
             />
            <label htmlFor='priority'>Low</label>
          
          </Form.Group>

          <div className='form-group'>
             <label htmlFor='rangeComplete'>Completed in percentage</label>
             <input 
                type='range'
                name='rangeComplete'
                id='rangeComplete'
                onChange={handleChange}
                value={rangeComplete}

             />
             <input 
              type='text'
              onChange={handleChange}
              value={rangeComplete}
             />
          </div>


        <input className='btn btn-primary' type='submit' value="Submit"/>

      </Form>
      
        <Total length={newArrState.length}/>
        
        <TableComponent newArrState={newArrState}/>
    </>
  );
}

export default App;
