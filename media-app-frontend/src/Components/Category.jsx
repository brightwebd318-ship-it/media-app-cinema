import React, { useEffect } from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import { addCategory, deleteCategory, getAVideo, getCategories, updateCategory } from '../services/allAPI';
import { toast } from 'react-toastify';
import Row from 'react-bootstrap/esm/Row'
import Col from 'react-bootstrap/esm/Col'
import VideoCard from './VideoCard';

function Category() {

  // hold to display the videos in the catogory


  // hold carogory details
  const [categoryDetails, setcategoryDetails] = useState({})

  // hold category name from the form
  const [categoryName, setcategoryName] = useState('')
  console.log(categoryName);

  const body = {
    categoryName
  }

  const handleAddCategory = async () => {
    if (categoryName.length > 0) {
      const response = await addCategory(body)
      console.log(response);
      toast.success(`${categoryName}  category added`)
      getCategory()
      setcategoryName("")
      handleClose()
    }
    else {
      toast.error('please fill a category')
    }
  }

  const getCategory = async () => {
    const { data } = await getCategories()
    console.log(data);
    setcategoryDetails(data)
  }

  useEffect(() => {
    getCategory()
  }, [])
  console.log(categoryDetails);

  const categoryDelete = async (id) => {
    const response = await deleteCategory(id)
    toast.error(`deleted`)
    getCategory()


  }

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);



  const dragOver = (e) => {
    console.log("video drag over");
    e.preventDefault()
  }

  const videodrop = async (e, categoryId) => {
    console.log("droped" + categoryId);
    const videoId = e.dataTransfer.getData("videoid")
    console.log(videoId);
    // api call for fetch a particular video
    const { data } = await getAVideo(videoId)
    console.log(data);
    // get category details

    const selectedCategory = categoryDetails.find(item => item.id === categoryId)
    console.log(selectedCategory);


    // add this videos details to array (allvideos[])
    selectedCategory.allvideos.push(data)
    console.log(selectedCategory);


    // make an api call to update category details
    await updateCategory(categoryId, selectedCategory)
    getCategory()


  }


  return (
    <div>
      <button className='btn btn-outline-light w-100 mb-3 rounded-pill fw-bold' onClick={handleShow} style={{ borderColor: '#727272', color: 'white' }}>
        <i className="fa-solid fa-plus me-2"></i>Add New Category
      </button>

      <div>
        {
          categoryDetails.length > 0 ? categoryDetails.map(item => (
            <div onDragOver={(e) => dragOver(e)} onDrop={(e) => videodrop(e, item.id)} className='my-3 p-3 rounded' style={{ width: '100%', backgroundColor: '#121212', border: '1px solid #282828' }}>

              <div className='d-flex justify-content-between align-items-center mb-3'>
                <h5 className='mb-0 fw-bold text-white'>{item.categoryName}</h5>
                <button className='btn btn-link text-secondary p-0' onClick={() => categoryDelete(item.id)}>
                  <i className='fa-solid fa-trash hover-text-white'></i>
                </button>
              </div>

              <Row>
                {
                  item.allvideos && item.allvideos.map((data) => (


                    <Col>
                      <VideoCard getdetails={data} insidecategory={true} />

                    </Col>
                  ))
                }
              </Row>


            </div>
          )) : <p>no data</p>
        }
      </div>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>ADD NEW CATOGORY</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form className='border border-3 border-info p-5 rounded' >

            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label style={{ color: 'black' }}  >Enter catogory name</Form.Label>
              <Form.Control type="email" placeholder="Enter catogory name" onChange={(e) => setcategoryName(e.target.value)} />

            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            CLOSE
          </Button>
          <Button variant="primary" onClick={handleAddCategory}>
            ADD
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  )
}
export default Category
























