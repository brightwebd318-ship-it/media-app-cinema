import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import { deleteAVideo } from '../services/allAPI'
import { ToastContainer, toast } from 'react-toastify';
import { addToWatchhistory } from '../services/allAPI'



function VideoCard({ getdetails, setdeleteStatus, insidecategory }) {
  console.log(getdetails);

  // delete a video
  const deteteVideo = async (id) => {

    const response = await deleteAVideo(id)
    setdeleteStatus(true)
    toast.error('deleted')
  }

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);


  const handleShow = async () => {
    setShow(true)
    // api call for watch history
    const { caption, embedLink } = getdetails  // get the caption and url from getdetails
    // get current date and time a method in js
    let date = new Date()

    let timestamp = new Intl.DateTimeFormat('en-us', { year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit', second: '2-digit' }).format(date);
    console.log(timestamp);

    let videoDetails = {
      caption,
      embedLink,
      timestamp
    }
    await addToWatchhistory(videoDetails)

  }

  const dragstart = (e, id) => {
    console.log("drag started" + id, e);
    e.dataTransfer.setData("videoId", id)
  }




  return (
    <div>



      <Card draggable onDragStart={(e) => { dragstart(e, getdetails.id) }} style={{ width: '100%', backgroundColor: '#181818', border: 'none', borderRadius: '8px', cursor: 'pointer', transition: 'background-color 0.3s ease' }} className='mb-3 p-3 hover-bg-light-gray'>
        <div style={{ position: 'relative' }}>
          <Card.Img onClick={handleShow} variant="top" src={getdetails.url} style={{ borderRadius: '4px', width: '100%', height: '180px', objectFit: 'cover', boxShadow: '0 4px 60px rgba(0,0,0,.5)' }} />
          {!insidecategory && (
            <div className="play-button" style={{ position: 'absolute', bottom: '10px', right: '10px', backgroundColor: '#1DB954', borderRadius: '50%', width: '40px', height: '40px', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 8px 8px rgba(0,0,0,.3)', opacity: 0, transition: 'all 0.3s ease' }}>
              <i className="fa-solid fa-play text-black"></i>
            </div>
          )}
        </div>
        <Card.Body className='d-flex justify-content-between align-items-center px-0 pt-3'>
          <Card.Title className='mb-0 text-white text-truncate' style={{ fontSize: '16px', fontWeight: '700' }}>{getdetails.caption}</Card.Title>
          {insidecategory ? "" :
            <button className='btn btn-link text-secondary p-0' onClick={() => { deteteVideo(getdetails.id) }}><i className='fa-solid fa-trash hover-text-danger'></i></button>
          }
          <ToastContainer />
        </Card.Body>
      </Card>


      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{getdetails.caption}</Modal.Title>
        </Modal.Header>
        <Modal.Body><iframe width="100%" height="315" src={getdetails.embedLink} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe></Modal.Body>
        <Modal.Footer>

        </Modal.Footer>
      </Modal>

    </div>
  )
}

export default VideoCard