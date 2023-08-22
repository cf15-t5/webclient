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
  console.log(eventData)
  return (
    <div className="flex flex-wrap justify-center gap-5 h-full">
      {eventData?.map((event) => {
        const formattedDate = event.date_of_event.split(" ").slice(1,4).join(" ")
        return (
          <NavLink to={`/event/${event.event_id}`} key={event.event_id}>
            <CardEvent 
              Img={`${process.env.REACT_APP_SERVER_URL}/${event.poster_path.slice(7)}`} 
              EventTitle={event.title} 
              Date={formattedDate}   
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