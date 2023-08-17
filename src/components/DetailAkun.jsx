import React from 'react'
import { Image,Form, Button } from 'react-bootstrap'
import iconProfile from '../assets/iconProfile.png'

function DetailAkun() {
  return (
    <div className='bg-white p-4 rounded d-flex justify-content-center flex-column'>
      <div className='text-center'>
        <Image src={iconProfile} className='my-4' style={{height:'20vh'}} fluid />
      </div>
      <Form>
        <Form.Group className="mb-3" controlId="FormNama">
          <Form.Label>Nama Lengkap</Form.Label>
          <Form.Control type="text"/>
        </Form.Group>
        <Form.Group className="mb-3" controlId="FormEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email"/>
        </Form.Group>
      </Form>
      <div className='text-end'>
        <Button variant="primary" size='sm'>Simpan</Button>
        <Button variant='link' size='sm' className='text-black text-decoration-none'>Batal</Button>
      </div>
    </div>
  )
}

export default DetailAkun