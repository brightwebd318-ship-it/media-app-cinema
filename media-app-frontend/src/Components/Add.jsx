import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import { uploadvideo } from '../services/allAPI'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Add({setuploadVideoServerResponse}) {

  const [video,setvideo]=useState({
    id:"",
    caption:"",
    url:"",
    embedLink:""
  })
  console.log(video);

  const getembedLink=(e)=>{
    const {value}=e.target
    console.log(value.slice(-11));
    const link=`https://www.youtube.com/embed/${value.slice(-31)}`
    setvideo({...video,embedLink:link})
  }


 const handleUpload = async()=>{
  const {id,caption,url,embedLink}=video
  if(!id||!caption||!url||!embedLink){
    toast.error('please fill')
  }
  else{
    const response= await uploadvideo(video)
    console.log(response);
    if(response.status>=200 && response.status<=300){
      //set server response
      setuploadVideoServerResponse(response.data);
      toast.success(`${response.data.caption} added success`)
      setvideo({
        id:"",
        caption:"",
        url:"",
        embedLink:""
      })
      handleClose()
    }
    else{
      toast.warning('please provide unique id')
    }
  }
 }




  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div className='text-light container d-flex mt-5'>
      <h2>Upload New Video</h2>
      <button onClick={handleShow} className='btn txt-info fs-4 mx-2'> <i class="fa-sharp fa-solid fa-upload"></i></button>
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>UPLOAD A VIDEO</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Please fill Following</p>
          <form className='rounded border border-info p-3'>
          <FloatingLabel
       
        label="Enter video id"
        className="mb-3"
      >
        <Form.Control
        onChange={(e)=>setvideo({...video,id:e.target.value})}
        type="text" placeholder="enter video id" />
      </FloatingLabel>
      <FloatingLabel  label="Video caption" className='mb-3'>
        <Form.Control
        onChange={(e)=>setvideo({...video,caption:e.target.value})}
        type="text" placeholder="Video caption" />
      </FloatingLabel>
      <FloatingLabel  label="Video image url" className='mb-3'>
        <Form.Control 
        onChange={(e)=>setvideo({...video,url:e.target.value})}
        type="text" placeholder="Video image url" />
      </FloatingLabel>
      <FloatingLabel  label="youtube link" className='mb-3'>
        <Form.Control 
        onChange={getembedLink}
        type="text" placeholder="youtube link" />
      </FloatingLabel>
          </form>

        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button onClick={handleUpload} variant="info">Upload</Button>
          <ToastContainer />
        </Modal.Footer>
      </Modal>
    </div>
  )
}

export default Add