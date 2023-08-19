import React from 'react'
import Tiket from '../components/Tiket'

function TiketPage() {
  return (
    <section className='my-3 mx-5'>
      <h5 className='text-xl border-b-2 border-gray-300'>Upcoming Event</h5>
      <div className='lg:mx-48 my-10'>
        <Tiket/>
        <Tiket/>
      </div>
    </section>
  )
}

export default TiketPage