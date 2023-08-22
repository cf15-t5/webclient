import React from "react";
import { Link } from "react-router-dom";

const MyEventCard = ({
  name,
  imageUrl,
  eventDate,
  location,
  price,
  jumlahTiket,
  terjual,
  peserta,
}) => {
  const truncateTitle = (title) => {
    const maxTitle = 55;
    if (title.length > maxTitle) {
      return title.substring(0, maxTitle) + "...";
    }
    return title;
  };
  return (
    <Link
      to="/myEventDetail"
      className="flex flex-col justify-start items-center bg-white w-[300px] rounded-md shadow-md overflow-hidden"
    >
      <img
        src={imageUrl}
        alt={name}
        className="w-full h-[150px] object-cover"
      />
      <div className="flex flex-col justify-between items-start w-full h-full p-3 gap-3 text-left">
        <div className="flex flex-col justify-center items-start">
          <p className="font-bold leading-4">{truncateTitle(name)}</p>
          <div className="pt-1">
            <p>{eventDate}</p>
            <p>{location}</p>
          </div>
        </div>

        {/* HARGA DAN JUMLAH TIKET TERJUAL */}
        <div className="flex flex-row justify-between items-end w-full">
          <p className=" font-bold text-red-400">IDR {price}</p>
          <div className="flex flex-col justify-center items-start">
            <div className="flex flex-row justify-between w-28">
              <p>Terjual</p>
              <p className="font-bold">
                {terjual}/{jumlahTiket}
              </p>
            </div>
            <div className="flex flex-row justify-between w-28">
              <p>Peserta</p>
              <p className="font-bold">
                {peserta}/{jumlahTiket}
              </p>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default MyEventCard;
