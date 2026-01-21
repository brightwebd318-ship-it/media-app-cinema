import React, { useEffect, useState } from 'react'
import Add from '../Components/Add'
import { Link } from 'react-router-dom'
import View from '../Components/View'
import Category from '../Components/Category'


import Modal from 'react-bootstrap/Modal';

function Homepage() {


  // state create 
  const [uploadVideoServerResponse, setuploadVideoServerResponse] = useState({})
  const [showHero, setShowHero] = useState(false);
  const [showMoreInfo, setShowMoreInfo] = useState(false);

  const handleCloseHero = () => setShowHero(false);
  const handleShowHero = () => setShowHero(true);

  const handleCloseMoreInfo = () => setShowMoreInfo(false);
  const handleShowMoreInfo = () => setShowMoreInfo(true);

  return (
    <div style={{ background: 'linear-gradient(180deg, #121212 0%, #000000 100%)', minHeight: '100vh', paddingBottom: '50px' }}>

      {/* Featured Hero Section */}
      <div className="position-relative mb-5" style={{ height: '400px', overflow: 'hidden' }}>
        <div style={{
          position: 'absolute', top: 0, left: 0, right: 0, bottom: 0,
          backgroundImage: `url(${require('../assets/landing-hero.png')})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          filter: 'brightness(0.6)'
        }}></div>
        <div className="position-absolute d-flex align-items-end" style={{ top: 0, left: 0, right: 0, bottom: 0, background: 'linear-gradient(to top, #121212, transparent)', padding: '40px' }}>
          <div className="container-fluid">
            <span className="badge bg-success mb-3 px-3 py-2 text-black fw-bold">NEW RELEASE</span>
            <h1 className="text-white display-3 fw-bold mb-3" style={{ textShadow: '0 4px 20px rgba(0,0,0,0.5)' }}>Cyberscape Chronicles</h1>
            <p className="text-gray-300 lead mb-4" style={{ maxWidth: '600px', color: '#e0e0e0', textShadow: '0 2px 10px rgba(0,0,0,0.5)' }}>
              Dive into a future where technology and humanity collide. The best rated sci-fi collection of the year.
            </p>
            <div className="d-flex gap-3">
              <button className="btn btn-lg px-4 py-2 border-0 shadow-lg d-flex align-items-center gap-2" onClick={handleShowHero}
                style={{ backgroundColor: '#1DB954', color: 'black', borderRadius: '30px', fontWeight: 'bold' }}>
                <i className="fa-solid fa-play"></i> Play Now
              </button>
              <button className="btn btn-lg px-4 py-2 border-0 shadow-lg d-flex align-items-center gap-2" onClick={handleShowMoreInfo}
                style={{ backgroundColor: 'rgba(255,255,255,0.2)', color: 'white', borderRadius: '30px', backdropFilter: 'blur(10px)' }}>
                <i className="fa-solid fa-circle-info"></i> More Info
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Top Controls */}
      <div className="container-fluid d-flex justify-content-between align-items-center mb-4 px-4">
        <h3 className='fw-bold text-white'>Your Library</h3>
        <div className="d-flex align-items-center gap-3">
          <Link to={'/watch-history'} className='text-light text-decoration-none hover-underline d-flex align-items-center gap-2' style={{ fontSize: '14px', color: '#b3b3b3' }}>
            <i className="fa-solid fa-clock-rotate-left"></i>History
          </Link>
          <Add setuploadVideoServerResponse={setuploadVideoServerResponse} />
        </div>
      </div>

      <div className="container-fluid">
        <div className="row">
          {/* Main Content - Videos */}
          <div className="col-lg-9">
            <h4 className='text-white mb-3 fw-bold'>All Videos</h4>
            <View uploadVideoServerResponse={uploadVideoServerResponse} />
          </div>

          {/* Sidebar - Categories */}
          <div className="col-lg-3">
            <h4 className='text-white mb-3 fw-bold'>Categories</h4>
            <Category />
          </div>
        </div>
      </div>

      {/* Hero Video Modal */}
      <Modal show={showHero} onHide={handleCloseHero} size="lg" centered>
        <Modal.Header closeButton style={{ backgroundColor: '#181818', borderBottom: '1px solid #282828' }}>
          <Modal.Title className='text-white'>Cyberscape Chronicles</Modal.Title>
        </Modal.Header>
        <Modal.Body style={{ backgroundColor: '#121212', padding: 0 }}>
          <div className="ratio ratio-16x9">
            <iframe src="https://www.youtube.com/embed/7JxEXPHasNs?si=i6H98lC3VgkUI1nX&autoplay=1" title="Hero Video" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
          </div>
        </Modal.Body>
      </Modal>

      {/* More Info Modal */}
      <Modal show={showMoreInfo} onHide={handleCloseMoreInfo} size="lg" centered>
        <Modal.Header closeButton style={{ backgroundColor: '#181818', borderBottom: '1px solid #282828' }}>
          <Modal.Title className='text-white fw-bold'>Cyberscape Chronicles</Modal.Title>
        </Modal.Header>
        <Modal.Body style={{ backgroundColor: '#121212', color: '#e0e0e0', padding: '30px' }}>
          <div className="d-flex align-items-center gap-3 mb-4">
            <span className="badge bg-light text-black">2025</span>
            <span className="border border-secondary px-2 rounded small">TV-MA</span>
            <span className="text-success fw-bold">98% Match</span>
            <span>2 Seasons</span>
            <div className="border border-white px-1 rounded small">HD</div>
          </div>

          <h5 className="fw-bold text-white mb-2">Synopsis</h5>
          <p className="mb-4" style={{ lineHeight: '1.6' }}>
            In a dystopian future where the line between organic and synthetic life is blurred, a rogue detective uncovers a conspiracy that threatens to rewrite the history of humanity. As neon-lit cities crumble under the weight of corporate greed, one hero must decide if the truth is worth survival.
          </p>

          <h5 className="fw-bold text-white mb-2">Cast & Crew</h5>
          <p className="mb-0 text-secondary">
            <span className="text-white">Starring:</span> Alex Mercer, Sarah Connor, Neo Anderson <br />
            <span className="text-white">Director:</span> Christopher Nolan AI <br />
            <span className="text-white">Genre:</span> Sci-Fi, Cyberpunk, Thriller
          </p>
        </Modal.Body>
      </Modal>

    </div>
  )
}

export default Homepage