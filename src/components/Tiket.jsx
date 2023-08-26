import React from 'react'
import { dateToDDMonthYYYY, formatPosterURL } from '../utils/stringProcess'

function Tiket(props) {
  return (
    <div className='bg-white flex flex-wrap text-sm justify-center rounded my-3 md:flex-nowrap  hover:border-blue-300 border-2'>
      <div className='w-[200px]'>
        <img src={formatPosterURL(props.event?.poster_path)} className='h-32 w-full flex-grow flex-1 object-cover rounded' alt='Poster'/>
      </div>
      <div className='m-3 ms-10 flex-grow'>
        <h6 className='font-bold'>{props.event?.title}</h6>
        <div>
          <span className='md:inline'>Tanggal Pelaksanaan : </span>
          <span>{dateToDDMonthYYYY(props.event?.date_of_event)}</span>
        </div>
        <div>
          <span className='md:inline'>Tanggal Pembelian   : </span>
          <span>{dateToDDMonthYYYY(props.created_at)}</span>
        </div>
        <div className='bg-primary-500 rounded text-white py-1 px-3 mt-3 font-bold' style={{width:'fit-content'}}> 
          <span>KODE : {props.ticket_code}</span>
        </div>
      </div>
    </div>
    


  )
}

export default Tiket