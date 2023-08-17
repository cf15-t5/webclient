import React from 'react'
import { Button } from 'react-bootstrap';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';

function Wallet() {
  return (
    <div className='bg-white px-4 py-2 rounded'>
      <h6 className='d-inline'>Balance</h6>
      <h6 className='d-inline fw-bold ms-4'>10000</h6>
      <FloatingLabel
        controlId="floatingInput"
        label="Value"
        className="my-3"
      >
        <Form.Control type="text" placeholder='value'/>
      </FloatingLabel>
      <div className='d-flex justify-content-end gap-2' >
        <Button size="sm">Isi Ulang</Button>
        <Button size="sm">Tarik</Button>
      </div>
    </div>
  )
}

export default Wallet 