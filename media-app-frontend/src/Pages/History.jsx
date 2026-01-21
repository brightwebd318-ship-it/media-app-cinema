import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Table from 'react-bootstrap/Table';
import { deletewatchhistory, getWatchhistory } from '../services/allAPI'


function History() {


  const deletehistory=async(id)=>{
     const response=await deletewatchhistory(id)
     alert('deleted')
  }
 

  const [history,sethistory]=useState([])
  
  const fetchhistory=async()=>{
    const {data}=await getWatchhistory()
    console.log(data);
    sethistory(data)
  }

  useEffect(()=>{
    fetchhistory()
  },[])

  console.log(history);
 

  return (
    <div className='text-light '>
      <div className='container d-flex justify-content-between align-item-center mt-5'>
      <h1>WATCH HISTORY</h1>
      <Link to={'/home'} style={{textDecoration:'none'}}>
      <p className='text-light'><i class="fa-solid fa-arrow-left me-3 "></i>Back to Home</p>
      </Link>
      
      
      </div>

      <div className='container my-5'>
      <Table striped bordered hover> 
          <thead>
            <tr>
              <th>id</th>
              <th>Caption</th>
              <th>URL</th>
              <th>Time</th>
              <th>Remove</th>
            </tr>
          </thead>
          <tbody>
            {
              history? history.map(item=>(
                <tr>
              <td>{item.id}</td>
              <td>{item.caption}</td>
              <td>{item.embedLink}</td>
              <td>{item.timestamp}</td>
              <td><a href=""><button className='btn' onClick={()=>{deletehistory(item.id)}}>remove</button></a></td>
            
            </tr>
              )):<p>no data</p>
              
            }
          
          </tbody>
        </Table>
       

      </div>
    </div>
  )
}

export default History