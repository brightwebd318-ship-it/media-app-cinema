import React from 'react'
import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarBrand
} from 'mdb-react-ui-kit';

function Header() {
  return (
    <div>
      <MDBNavbar dark bgColor='transparent' className='shadow-none p-3' style={{ backgroundColor: 'rgba(0,0,0,0.8)', backdropFilter: 'blur(10px)', position: 'sticky', top: 0, zIndex: 1000 }}>
        <MDBContainer fluid>
          <MDBNavbarBrand href='/' className='d-flex align-items-center' style={{ fontSize: '1.8rem', fontWeight: 'bold', color: 'white' }}>
            <img src={require('../../assets/logo.png')} alt="Logo" style={{ height: '40px', marginRight: '15px' }} />
            Media Player
          </MDBNavbarBrand>
        </MDBContainer>
      </MDBNavbar>
    </div>
  )
}

export default Header