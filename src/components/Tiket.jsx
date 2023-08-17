import React from 'react'
import { Image } from 'react-bootstrap'
import exPoster from '../assets/exposter.png'

function Tiket() {
  return (
    <div className='eventTicket rounded'>
      <Image src={exPoster} className='object-fit-cover rounded' fluid/>
      <div className='m-3'>
        <h6 className='fw-bold'>DEWA 19 Feat Allstar ( Stadium Tour ) - BANDUNG</h6>
        <div>
          <span className='d-block d-md-inline'>Tanggal Pelaksanaan : </span>
          <span>19 Agt 2023</span>
        </div>
        <div>
          <span className='d-block d-md-inline'>Tanggal Pembelian   : </span>
          <span>2 Agt 2023</span>
        </div>
        <div className='bg-primary rounded text-white py-1 px-3 mt-3 fw-bold' style={{width:'fit-content'}}> 
          <span>KODE : 3213127863</span>
        </div>
      </div>
    </div>
  )
}

export default Tiket