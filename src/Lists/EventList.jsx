import React, { useEffect, useState } from 'react'
import CardEvent from '../components/CardEvent'
import { NavLink } from 'react-router-dom'
import axios from '../api/axios';
function EventList() {
  const [eventData,setEventData] = useState([])
  useEffect(()=>{
    axios
    .get('/events/')
    .then(res=>setEventData(res.data.data))
    .catch((err)=>console.log(err.response))
  },[])
  return (
    <div className="flex flex-wrap justify-center gap-5 h-full">
      {eventData?.map((event) => {
        return (
          <NavLink to={`/event/${event.event_id}`} key={event.event_id}>
            <CardEvent 
              Img={event.poster_path} 
              EventTitle={event.title} 
              Date_of_event={event.date_of_event}   
              Price={event.price} 
              Location={event.address} 
              Ticket={event.number_of_ticket}/>
          </NavLink>
        );
      })}
    </div>
  )
}

export default EventList  