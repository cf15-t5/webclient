import React from 'react'
import Wallet from '../components/Wallet'
import { Image,Button, Col, Row } from 'react-bootstrap'
import DetailAkun from '../components/DetailAkun'
import iconLogout from '../assets/iconLogout.png'
function Profile() {
  return (
    <section className='my-3 mx-5'>
      <h5>Detail Akun</h5>
      <hr/>
      <Row className="justify-content-md-start">
        <Col sm={12} md={4}>
          <Wallet/>
        </Col>
        <Col sm={12} md={5} lg={4} className='mt-3 mt-md-0'>
          <DetailAkun/>
          <Button className='mt-3 bg-white text-black border-0 w-100 text-start rounded py-2'>
            <Image src={iconLogout}/>
            <span className='ms-2'>Log Out</span>
          </Button>
        </Col>
      </Row>
    </section>
    
  )
}

export default Profile  