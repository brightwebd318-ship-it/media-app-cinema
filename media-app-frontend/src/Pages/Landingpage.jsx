import React from 'react'
import { useNavigate } from 'react-router-dom'
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Landingpage() {
  const navigate = useNavigate()

  return (
    <div style={{ backgroundColor: '#0a0a0a', overflowX: 'hidden' }}>

      {/* Hero Section */}
      <div style={{
        backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.3), #0a0a0a), url(${require('../assets/landing-hero.png')})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '100vh',
        display: 'flex',
        alignItems: 'center',
        padding: '0 5%'
      }}>
        <div className="container-fluid">
          <Row>
            <Col lg={7} className="text-start">
              <h1 style={{ fontSize: '4rem', fontWeight: '800', background: 'linear-gradient(45deg, #1DB954, #1ed760)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', letterSpacing: '-2px', lineHeight: '1.2' }}>
                Unlimited Entertainment
              </h1>
              <h2 className="text-white mt-3" style={{ fontSize: '2.5rem', fontWeight: '300' }}>
                Your media, reimagined.
              </h2>
              <p className="text-gray-400 mt-4 lead" style={{ maxWidth: '600px', color: '#b3b3b3' }}>
                Organize, watch, and manage your video collection with a stunning, cinematic interface designed for the modern web.
              </p>
              <button
                onClick={() => navigate('/home')}
                className="btn mt-5 px-5 py-3 shadow-lg"
                style={{
                  backgroundColor: '#1DB954',
                  color: 'black',
                  fontWeight: 'bold',
                  borderRadius: '50px',
                  fontSize: '1.2rem',
                  border: 'none',
                  transition: 'transform 0.2s'
                }}
                onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
                onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
              >
                Start Watching
              </button>
            </Col>
          </Row>
        </div>
      </div>

      {/* Features Section */}
      <div className="container py-5 my-5">
        <h2 className="text-center text-white display-4 fw-bold mb-5">Power Features</h2>
        <Row className="g-4">
          <Col md={4}>
            <div className="p-4 h-100 rounded-4" style={{ backgroundColor: '#181818', border: '1px solid #282828', transition: 'all 0.3s ease' }}>
              <img src={require('../assets/feature-manage.png')} alt="Manage" className="img-fluid mb-4" style={{ height: '80px' }} />
              <h3 className="text-white h4 fw-bold mb-3">Smart Library</h3>
              <p style={{ color: '#a7a7a7', marginBottom: '1.5rem' }}>Effortlessly upload and manage your video collection with our intuitive drag-and-drop interface.</p>
              <ul className="list-unstyled" style={{ color: '#b3b3b3' }}>
                <li className="mb-2"><i className="fa-solid fa-check me-2" style={{ color: '#1DB954' }}></i>Drag & Drop Upload</li>
                <li className="mb-2"><i className="fa-solid fa-check me-2" style={{ color: '#1DB954' }}></i>Multi-format Support</li>
                <li className="mb-0"><i className="fa-solid fa-check me-2" style={{ color: '#1DB954' }}></i>Instant Cloud Sync</li>
              </ul>
            </div>
          </Col>
          <Col md={4}>
            <div className="p-4 h-100 rounded-4" style={{ backgroundColor: '#181818', border: '1px solid #282828' }}>
              <img src={require('../assets/feature-cat.png')} alt="Categorize" className="img-fluid mb-4" style={{ height: '80px' }} />
              <h3 className="text-white h4 fw-bold mb-3">Custom Categories</h3>
              <p style={{ color: '#a7a7a7', marginBottom: '1.5rem' }}>Create personalized playlists and categories to keep your content organized your way.</p>
              <ul className="list-unstyled" style={{ color: '#b3b3b3' }}>
                <li className="mb-2"><i className="fa-solid fa-check me-2" style={{ color: '#1DB954' }}></i>AI Auto-Sort</li>
                <li className="mb-2"><i className="fa-solid fa-check me-2" style={{ color: '#1DB954' }}></i>Infinite Sub-folders</li>
                <li className="mb-0"><i className="fa-solid fa-check me-2" style={{ color: '#1DB954' }}></i>Color Coded Tags</li>
              </ul>
            </div>
          </Col>
          <Col md={4}>
            <div className="p-4 h-100 rounded-4" style={{ backgroundColor: '#181818', border: '1px solid #282828' }}>
              <img src={require('../assets/feature-history.png')} alt="History" className="img-fluid mb-4" style={{ height: '80px' }} />
              <h3 className="text-white h4 fw-bold mb-3">Watch History</h3>
              <p style={{ color: '#a7a7a7', marginBottom: '1.5rem' }}>Never lose track of what you've watched. Resume right where you left off with detailed history.</p>
              <ul className="list-unstyled" style={{ color: '#b3b3b3' }}>
                <li className="mb-2"><i className="fa-solid fa-check me-2" style={{ color: '#1DB954' }}></i>Cross-device Resume</li>
                <li className="mb-2"><i className="fa-solid fa-check me-2" style={{ color: '#1DB954' }}></i>Viewing Insights</li>
                <li className="mb-0"><i className="fa-solid fa-check me-2" style={{ color: '#1DB954' }}></i>Incognito Mode</li>
              </ul>
            </div>
          </Col>
        </Row>
      </div>

      {/* Cinema Experience Section */}
      <div className="container-fluid py-5" style={{ backgroundColor: '#0f0f0f' }}>
        <Row className="align-items-center justify-content-center py-5">
          <Col lg={5} className="text-center text-lg-start mb-5 mb-lg-0 px-5">
            <h2 className="display-3 fw-bold text-white mb-4">Simple. Fast. <span style={{ color: '#1DB954' }}>Powerful.</span></h2>
            <p className="lead" style={{ color: '#b3b3b3' }}>
              Experience media playback like never before. Our player is built for speed and compatibility, ensuring your content looks great on any screen.
            </p>
          </Col>
          <Col lg={6}>
            <div className="ratio ratio-16x9 rounded-4 overflow-hidden shadow-lg" style={{ border: '1px solid #333' }}>
              <iframe src="https://www.youtube.com/embed/7JxEXPHasNs?si=i6H98lC3VgkUI1nX&autoplay=1&mute=1" title="Demo" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
            </div>
          </Col>
        </Row>
      </div>

    </div>
  )
}

export default Landingpage