import React, { useEffect, useState } from 'react'
import CardEvent from '../components/CardEvent'
import { NavLink } from 'react-router-dom'
// import axios from 'axios';
import axios from '../api/axios';

import imageEvent1 from "../assets/exposter.png";
import imageEvent2 from "../assets/imgHomepage.png";
import imageEvent3 from "../assets/exposter2.png";
import imageEvent4 from "../assets/exposter3.jpeg";
import imageEvent5 from "../assets/exposter4.jpeg";

function EventList() {
  const eventDataDum = [
    {
      id:1,
      Img: imageEvent1,
      EventTitle:
        "DEWA 19 Feat Allstar ( Stadium Tour ) - BANDUNG sdakkdkashdkhaskd haskhdjkashdjkash jkhdkjashdkjashjkdhasjkhdkjashdkh as",
      Date: "19 Agt 2023",
      Location: "Bandung",
      Price: "200.000",
      Status: "Tersedia Sekarang",
    },
    {
      id:2,
      Img: imageEvent2,
      EventTitle: "DEWA 19 Feat Allstar ( Stadium Tour ) - BANDUNG",
      Date: "19 Agt 2023",
      Location: "Bandung",
      Price: "200.000",
      Status: "Tersedia Sekarang",
    },
    {
      id:3,
      Img: imageEvent3,
      EventTitle: "DEWA 19 Feat Allstar ( Stadium Tour ) - BANDUNG",
      Date: "19 Agt 2023",
      Location: "Bandung",
      Price: "200.000",
      Status: "Tersedia Sekarang",
    },
    {
      id:4,
      Img: imageEvent4,
      EventTitle: "DEWA 19 Feat Allstar ( Stadium Tour ) - BANDUNG",
      Date: "19 Agt 2023",
      Location: "Bandung",
      Price: "200.000",
      Status: "Tersedia Sekarang",
    },
    {
      id:5,
      Img: imageEvent5,
      EventTitle: "DEWA 19 Feat Allstar ( Stadium Tour ) - BANDUNG",
      Date: "19 Agt 2023",
      Location: "Bandung",
      Price: "200.000",
      Status: "Tersedia Sekarang",
    },
  ];

  const [eventData,setEventData] = useState([])

  useEffect(()=>{
    axios
    .get('/events/')
    .then(res=>setEventData(res.data.data))
    .catch((err)=>console.log(err.response))
  },[])
  console.log(eventData)
  return (
    <div className="flex flex-wrap justify-center gap-5">
      {eventData.map((event) => {
        return (
          <NavLink to={"/eventDetail"} key={event.id}>
            <CardEvent EventTitle={event.title} />
          </NavLink>
        );
      })}
    </div>
  )
}

export default EventList  