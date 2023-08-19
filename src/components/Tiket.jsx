import React from 'react'
import exPoster from '../assets/exposter.png'

function Tiket() {
  return (
    <div className='bg-white flex flex-wrap text-sm rounded my-3 md:flex-nowrap'>
      <img src={exPoster} className='h-32 w-full flex-grow flex-1 object-cover rounded' alt='Poster'/>
      <div className='m-3 flex-grow'>
        <h6 className='font-bold'>DEWA 19 Feat Allstar ( Stadium Tour ) - BANDUNG</h6>
        <div>
          <span className='block md:inline'>Tanggal Pelaksanaan : </span>
          <span>19 Agt 2023</span>
        </div>
        <div>
          <span className='block md:inline'>Tanggal Pembelian   : </span>
          <span>2 Agt 2023</span>
        </div>
        <div className='bg-primary-500 rounded text-white py-1 px-3 mt-3 font-bold' style={{width:'fit-content'}}> 
          <span>KODE : 3213127863</span>
        </div>
      </div>
    </div>
    


  )
}

export default Tiket