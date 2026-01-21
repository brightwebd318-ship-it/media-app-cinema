import React, { useEffect, useState } from 'react'
import VideoCard from './VideoCard'
import { getAllVideos } from '../services/allAPI'
import Row from 'react-bootstrap/esm/Row'
import Col from 'react-bootstrap/esm/Col'


function View({ uploadVideoServerResponse }) {

  const [datas, setdata] = useState([])
  const [deleteStatus, setdeleteStatus] = useState(false)

  // api call for videos

  const getUploadedVideos = async () => {
    const { data } = await getAllVideos()  // all videos
    console.log(data);
    setdata(data)
  }

  useEffect(() => {
    getUploadedVideos()
    setdeleteStatus(false)
  }, [uploadVideoServerResponse, deleteStatus])
  console.log(datas);

  return (
    <div className='text-light'>
      <Row>
        {
          datas.length > 0 ? datas.map(video => (
            <Col sm={12} md={6} lg={4} >
              <VideoCard getdetails={video} setdeleteStatus={setdeleteStatus} />
            </Col>
          )) : <p>no video</p>

        }
      </Row>
    </div>
  )
}

export default View