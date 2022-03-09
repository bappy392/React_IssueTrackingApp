import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Table } from 'react-bootstrap';
import React, { useState } from 'react';
import Total from './Total';
import TableComponent from './TableComponent';


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
      <form onSubmit={onSubmitHandler}>
        <h1>Issue Tracking Manager</h1>
        <div className='form-group'>
          <label htmlFor='title'>Title</label>
          <input 
             name='title'
             type='text'
             id='title'
             onChange={handleChange}
             value={title}
          />
          </div>

          <div className='form-group'>
          <label htmlFor='subtitle'>Sub Title</label>
          <input 
             name='subtitle'
             type='text'
             id='subtitle'
             onChange={handleChange}
             value={subtitle}
          />
          </div>

          <div className='form-group'>
          <label htmlFor='assigned'>Assigned To</label>
          <input 
             name='assigned'
             type='text'
             id='assigned'
             onChange={handleChange}
             value={assigned}
          />
          </div>

          <div className='form-group'>
          <label htmlFor='start'>Start</label>
          <input 
             name='start'
             type='date'
             id='start'
             onChange={handleChange}
             value={start}
          />

        <label htmlFor='end'>End</label>
          <input 
             name='end'
             type='date'
             id='end'
             onChange={handleChange}
             value={end}
          />

          </div>

          <div className='form-group'>
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
          
          </div>

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
              value={rangeComplete}
             />
          </div>


        <input type='submit' value="Submit"/>

      </form>

      <div>
        <br></br>        
        <Total length={newArrState.length}/>
      </div>
        
        <TableComponent newArrState={newArrState}/>
    </>
  );
}

export default App;
