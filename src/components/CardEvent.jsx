import { useEffect, useState } from "react";
import { truncateTitle,formatToIDRCurrency,dateToDDMonthYYYY,formatPosterURL, sliceAddress } from "../utils/stringProcess";

function CardEvent({ Img, EventTitle, Date_of_event, Location, Price, Ticket }) {
  const [statusStyle,setStatusStyle] = useState("text-green-400")  
  const [status,setStatus] = useState("Tersedia Sekarang")
  useEffect(()=>{
    const checkStatus = (Ticket) => {
      if(Ticket<0){
        setStatus("Tidak Tersedia")
        setStatusStyle("text-red-400")
      }
    }
    checkStatus(Ticket)
  },[Ticket])
  return (
    <div className="w-72  bg-white border rounded-lg shadow flex flex-col">
      <img className="rounded-t-lg object-cover h-40 w-full" src={formatPosterURL(Img)}  alt="poster" />
      <div className="p-3 flex flex-col">
          <h5 className="mb-2 text-base font-bold tracking-tight">
          {truncateTitle(EventTitle)}
          </h5>
          <p className="text-sm">{dateToDDMonthYYYY(Date_of_event)}</p>
          <p className="mb-3 text-sm">{sliceAddress(Location).city}</p>
          <h6 className="text-red-300 font-bold text-lg mt-10">IDR {formatToIDRCurrency(Price)}</h6>
          <p className={`${statusStyle} text-sm font-bold`}>{status}</p>
      </div>
    </div>
  );
}

export default CardEvent;
