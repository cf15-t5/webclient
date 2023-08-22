import React, { useEffect, useState } from 'react'
import iconLocation from '../assets/carbon_location.png'
import iconDate from '../assets/Vector.png'
import { useParams } from 'react-router-dom'
import axios from '../api/axios'

function EventDetail() {
  const { id } = useParams()
  const [eventDetail,setEventDetail] = useState([])
  useEffect(()=>{
    axios
    .get(`/events/${id}`)
    .then((res)=>{
      console.log(res.data)
      setEventDetail(res.data.data)
    })
  },[id])
  const formattedDate = eventDetail.date_of_event?.split(" ").slice(0,4).join(" ")
  return (
    <section className='relative bg-purple-400' style={{minHeight:'90vh'}}>
      <img src={`${process.env.REACT_APP_SERVER_URL}/${eventDetail.poster_path?.slice(7)}`} className='w-full  h-72 object-cover object-center brightness-50' alt='backgroundPoster'/>
      <div className='h-72 w-full absolute top-0 flex object-center justify-center'>
        <img src={`${process.env.REACT_APP_SERVER_URL}/${eventDetail.poster_path?.slice(7)}`} className='object-contain h-full' alt='poster'/>
      </div>  
      <div className=' md:my-3 md:mx-20'>
        <div className='flex justify-between border-b-2 border-gray-400'>
          <div className='mx-7 mt-5 md:m-3'>
            <h2 className='font-bold text-3xl'>{eventDetail.title}</h2>
            <div className='my-3'> 
              <img className='inline' src={iconLocation} alt='iconLoc'/>
              <span className='ms-2'>{eventDetail.address}</span><br/>
              <img className='ms-1 inline' src={iconDate} alt='iconDate'/>
              <span className='ms-3'>{formattedDate}</span>
            </div>
          </div>
          <div className='bg-white fixed flex justify-between p-3 bottom-0 w-full md:bg-transparent md:relative md:inline md:w-fit'>
            <h4 className='text-red-400 font-bold ms-2 md:ms-0 my-auto text-2xl mb-2'>IDR {eventDetail.price}</h4>
            <button className='bg-primary-500 text-white rounded-xl p-2 px-4 me-2 md:me-0 text-sm'>Beli Sekarang</button>
          </div>
        </div>
        <div className='mx-7 mt-5 md:m-3 mb-32 md:mb-3'>
          <h4 className='font-bold text-lg mb-3'>Deskripsi</h4>
          <p>{eventDetail.description}</p>
        </div>
      </div>
    </section>

  )
}

export default EventDetail