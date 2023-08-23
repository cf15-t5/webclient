import React from "react";
import { Link } from "react-router-dom";
import {
  dateToDDMonthYYYY,
  formatPosterURL,
  // truncateTitle,
} from "../utils/stringProcess";

const EventRequestCard = ({
  title,
  event_id,
  poster_path,
  date_of_event,
  address,
  status,
}) => {
  return (
    <Link
      to={`/request/event/${event_id}`}
      className="flex flex-col justify-start items-center bg-white w-[300px] rounded-md shadow-md overflow-hidden"
    >
      <img
        src={formatPosterURL(poster_path)}
        alt={title}
        className="w-full h-[150px] object-cover"
      />
      <div className="flex flex-col justify-between items-start w-full h-full p-3 gap-3 text-left">
        <div className="flex flex-col justify-center items-start">
          <p className="font-bold leading-4">{title}</p>
          <div className="py-1 text-[14px]">
            <p>{dateToDDMonthYYYY(date_of_event)}</p>
            <p>{address}</p>
          </div>
        </div>
        <p className="font-bold">
          Status :{" "}
          {status === "PENDING" ? (
            <span className="text-primary-500">Butuh Persetujuan</span>
          ) : status === "APPROVED" ? (
            <span className="text-green-400">Disetujui</span>
          ) : (
            <span className="text-red-400">Ditolak</span>
          )}
        </p>
      </div>
    </Link>
  );
};

export default EventRequestCard;
