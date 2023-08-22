import React, { useEffect } from 'react'
import axios from '../../api/axios'

function MyEvent() {
  useEffect(()=>{
    axios
    .get('/events/my')
    .then((res)=>console.log(res.data))
  },[])
  return (
    <section className='my-3 mx-5'>
      <h5 className='text-xl border-b-2 border-gray-300'>My Event</h5>
    </section>
  )
}

export default MyEvent