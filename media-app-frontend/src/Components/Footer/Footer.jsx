import React from 'react'

function Footer() {
  return (
    <div style={{
      position: 'fixed',
      bottom: 0,
      left: 0,
      right: 0,
      height: '90px',
      backgroundColor: '#181818',
      borderTop: '1px solid #282828',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '0 20px',
      zIndex: 2000
    }}>
      {/* Left: Song Info Placeholder */}
      <div className="d-flex align-items-center" style={{ width: '30%' }}>
        <div style={{ width: '56px', height: '56px', backgroundColor: '#282828', marginRight: '15px', borderRadius: '4px' }}>
          <i className="fa-solid fa-music d-flex justify-content-center align-items-center h-100 text-secondary"></i>
        </div>
        <div>
          <div style={{ fontSize: '14px', color: 'white', fontWeight: '500' }}>Media Player</div>
          <div style={{ fontSize: '11px', color: '#b3b3b3' }}>Welcome to the future</div>
        </div>
        <i className="fa-regular fa-heart ms-4 text-secondary" style={{ cursor: 'pointer' }}></i>
      </div>

      {/* Center: Controls */}
      <div className="d-flex flex-column align-items-center" style={{ width: '40%' }}>
        <div className="d-flex align-items-center mb-2 gap-4">
          <i className="fa-solid fa-shuffle text-secondary" style={{ fontSize: '16px' }}></i>
          <i className="fa-solid fa-backward-step text-white" style={{ fontSize: '20px' }}></i>
          <div className="d-flex justify-content-center align-items-center rounded-circle bg-white text-black" style={{ width: '32px', height: '32px' }}>
            <i className="fa-solid fa-play" style={{ fontSize: '14px', marginLeft: '2px' }}></i>
          </div>
          <i className="fa-solid fa-forward-step text-white" style={{ fontSize: '20px' }}></i>
          <i className="fa-solid fa-repeat text-secondary" style={{ fontSize: '16px' }}></i>
        </div>
        <div className="w-100 d-flex align-items-center gap-2" style={{ fontSize: '11px', color: '#a7a7a7' }}>
          <span>0:00</span>
          <div className="flex-grow-1 rounded-pill" style={{ height: '4px', backgroundColor: '#4d4d4d' }}>
            <div style={{ width: '0%', height: '100%', backgroundColor: 'white', borderRadius: '2px' }}></div>
          </div>
          <span>0:00</span>
        </div>
      </div>

      {/* Right: Volume etc */}
      <div className="d-flex align-items-center justify-content-end gap-3" style={{ width: '30%' }}>
        <i className="fa-solid fa-microphone text-secondary"></i>
        <i className="fa-solid fa-list text-secondary"></i>
        <i className="fa-solid fa-computer-speaker text-secondary"></i>
        <div className="d-flex align-items-center gap-2" style={{ width: '100px' }}>
          <i className="fa-solid fa-volume-high text-secondary"></i>
          <div className="flex-grow-1 rounded-pill" style={{ height: '4px', backgroundColor: '#4d4d4d' }}>
            <div style={{ width: '50%', height: '100%', backgroundColor: 'white', borderRadius: '2px' }}></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
