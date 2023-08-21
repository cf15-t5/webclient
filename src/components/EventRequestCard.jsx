import React from "react";
import { Link } from "react-router-dom";

const EventRequestCard = ({
  eventName,
  imageUrl,
  eventDate,
  location,
  approvalStatus,
}) => {
  return (
    <Link
      to="/eventApproval"
      className="flex flex-col justify-start items-center bg-white w-[300px] rounded-md shadow-md overflow-hidden"
    >
      <img
        src={imageUrl}
        alt={eventName}
        className="w-full h-[150px] object-cover"
      />
      <div className="flex flex-col justify-between items-start w-full h-full p-3 gap-3 text-left">
        <div className="flex flex-col justify-center items-start">
          <p className="font-bold leading-4">{eventName}</p>
          <div className="py-1">
            <p>{eventDate}</p>
            <p>{location}</p>
          </div>
        </div>
        <p className="font-bold">
          Status :{" "}
          {approvalStatus === null ? (
            <span className="text-primary-500">Butuh Persetujuan</span>
          ) : approvalStatus ? (
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
