import React from "react";
import { Link } from "react-router-dom";
import {
  dateToDDMonthYYYY,
  formatPosterURL,
  formatToIDRCurrency,
  sliceAddress,
  truncateTitle,
} from "../utils/stringProcess";

const MyEventCard = ({
  title,
  event_id,
  poster_path,
  date_of_event,
  address,
  price,
  number_of_ticket,
  ticket_count = 0,
  attendances_count = 0,
}) => {
  return (
    <Link
      to={`/myEvent/${event_id}`}
      className="flex flex-col justify-start items-center bg-white w-[300px] rounded-md shadow-md overflow-hidden"
    >
      <img
        src={formatPosterURL(poster_path)}
        alt={title}
        className="w-full h-[150px] object-cover"
      />
      <div className="flex flex-col justify-between items-start w-full h-full p-3 gap-3 text-left">
        <div className="flex flex-col justify-center items-start">
          <p className="font-bold leading-4">{truncateTitle(title)}</p>
          <div className="pt-1">
            <p>{dateToDDMonthYYYY(date_of_event)}</p>
            <p>{sliceAddress(address).city}</p>
          </div>
        </div>

        {/* HARGA DAN JUMLAH TIKET TERJUAL */}
        <div className="flex flex-row justify-between items-end w-full">
          <p className=" font-bold text-red-400">
            {formatToIDRCurrency(price)}
          </p>
          <div className="flex flex-col justify-center items-start">
            <div className="flex flex-row justify-between w-28">
              <p>Terjual</p>
              <p className="font-bold">
                {ticket_count}/{number_of_ticket}
              </p>
            </div>
            <div className="flex flex-row justify-between w-28">
              <p>Peserta</p>
              <p className="font-bold">
                {attendances_count}/{number_of_ticket}
              </p>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default MyEventCard;
