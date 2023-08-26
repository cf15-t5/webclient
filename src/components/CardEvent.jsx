import { useEffect, useState } from "react";
import { truncateTitle,formatToIDRCurrency,dateToDDMonthYYYY,formatPosterURL, sliceAddress } from "../utils/stringProcess";
import { NavLink } from "react-router-dom";
function CardEvent({ id ,Img, EventTitle, Date_of_event, Location, Price, Ticket }) {

  const [ statusStyle , setStatusStyle ] = useState("text-green-400")  
  const [ status , setStatus ] = useState("Tersedia Sekarang")

  useEffect(()=>{
    const checkStatus = (Ticket) => {
      if( Ticket <= 0 ){
        setStatus("Tidak Tersedia")
        setStatusStyle("text-red-400")
      }
    }
    checkStatus(Ticket)
  },[Ticket])

  return (
    <NavLink to={`/event/${id}`} className="w-72 bg-white border rounded-lg shadow flex flex-col">
      <img className="rounded-t-lg object-cover w-full h-[150px]" src={formatPosterURL(Img)}  alt="poster" />
      <div className="p-3 flex-grow flex flex-col">
        <div className="mb-5">
          <h5 className="mb-2 text-base font-bold tracking-tight">
          {truncateTitle(EventTitle)}
          </h5>
          <p className="text-sm">{dateToDDMonthYYYY(Date_of_event)}</p>
          <p className="mb-3 text-sm">{sliceAddress(Location).city}</p>
        </div>
        <div className="items-end mt-auto">
          <h6 className="text-red-300 font-bold text-lg">{formatToIDRCurrency(Price)}</h6>
          <p className={`${statusStyle} text-sm font-bold`}>{status}</p>
        </div>
      </div>
    </NavLink>
  );
}

export default CardEvent;
