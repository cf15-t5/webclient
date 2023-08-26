import React, { useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import axios from "../../api/axios";
import { useNavigate, useParams } from "react-router-dom";
import {
  dateToDDMonthYYYY,
  formatPosterURL,
  formatToIDRCurrency,
} from "../../utils/stringProcess";

const EventApproval = () => {
  const [data, setData] = useState(null);
  const [loadingPage, setloadingPage] = useState(false);
  const [loadingApprove, setloadingApprove] = useState(false);
  const navigate = useNavigate();
  const { event_id } = useParams();

  useEffect(() => {
    setloadingPage(true);
    axios
      .get(`/events/${event_id}`)
      .then((res) => {
        console.log(res.data.data);
        setData(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(setloadingPage(false));
  }, [event_id]);

  // Function
  const handleApproveButton = () => {
    // do something here
    setloadingApprove(true);
    const data = {
      id: event_id,
      status: "APPROVED",
    };
    axios
      .post("/events/verify", data)
      .then(() => {
        toast.success("Berhasil menyetujui");
        navigate("/request");
      })
      .catch((err) => {
        toast.error("Proses gagal");
      })
      .finally(setloadingApprove(false));
  };

  const handleRejectButton = () => {
    // do something here
    setloadingApprove(true);
    const data = {
      id: event_id,
      status: "REJECTED",
    };
    axios
      .post("/events/verify", data)
      .then(() => {
        toast.success("Berhasil menolak");
        navigate("/request");
      })
      .catch((err) => {
        toast.error("Proses gagal");
      })
      .finally(setloadingApprove(false));
  };

  if (loadingPage) {
    return (
      <div className="flex flex-col justify-center items-center w-full min-h-screen">
        Loading...
      </div>
    );
  } else if (data === null) {
    return (
      <div className="flex flex-col justify-center items-center w-full min-h-screen">
        Can't find this event
      </div>
    );
  }
  return (
    <div className="flex flex-col justify-start items-center w-full min-h-screen">
      {/* POSTER EVENT */}
      <div className="w-full h-[25vh] sm:h-[50vh] relative">
        <img
          src={formatPosterURL(data.poster_path)}
          alt={data.title}
          className="w-full h-full object-cover brightness-[40%] blur-[1px] absolute top-0 z-[0]"
        />
        <img
          src={formatPosterURL(data.poster_path)}
          alt={data.title}
          className="h-full absolute top-0 z-[1] left-1/2 -translate-x-1/2 object-cover"
        />
      </div>

      {/* FULL INFO */}
      <div className="flex flex-col justify-start items-center w-full p-5 sm:px-16 sm:py-10 ">
        <div className="flex flex-row justify-between items-start w-full border-b-[1px] border-black border-opacity-20 pb-5">
          <div className="flex flex-col justify-center items-start">
            <p className="text-[24px] font-bold leading-6">{data.title}</p>

            <ul className=" space-y-3 pt-5 list-none">
              <li className="flex flex-row gap-3 items-center">
                <img
                  src="/icons/building2.png"
                  alt="Company logo"
                  className="w-[17px]"
                />
                {data.user.name}
              </li>
              <li className="flex flex-row gap-3 items-center">
                <img
                  src="/icons/calendar.png"
                  alt="Calendar logo"
                  className="w-[17px]"
                />
                {dateToDDMonthYYYY(data.date_of_event)}
              </li>
              <li className="flex flex-row gap-3 items-center">
                <img
                  src="/icons/location.png"
                  alt="Location logo"
                  className="w-[17px]"
                />
                {data.address}
              </li>
            </ul>
          </div>

          {/* APPROVAL INFO */}
          <div className="flex flex-col justify-start items-center">
            <p className="font-medium">Menyetujui?</p>
            {data.status === "PENDING" && (
              <div className="flex flex-row justify-center items-center gap-2 text-white font-medium text-[14px]">
                <button
                  disabled={loadingApprove}
                  className="bg-green-500 py-1 w-[80px] rounded-md hover:scale-105 active:scale-95 transition-all disabled:cursor-not-allowed disabled:opacity-70"
                  onClick={handleApproveButton}
                >
                  Ya
                </button>
                <button
                  disabled={loadingApprove}
                  className="bg-red-500 py-1 w-[80px] rounded-md hover:scale-105 active:scale-95 transition-all disabled:cursor-not-allowed disabled:opacity-70"
                  onClick={handleRejectButton}
                >
                  Tidak
                </button>
              </div>
            )}
            {data.status === "APPROVED" ? (
              <p className="text-green-400 text-[14px] font-bold">Disetujui</p>
            ) : (
              data.status === "REJECTED" && (
                <p className="text-red-400 text-[14px] font-bold">Ditolak</p>
              )
            )}
          </div>
        </div>

        {/* DESKRIPSI */}
        <div className="flex flex-col justify-center items-start w-full py-3">
          <p className="text-[20px] font-bold">Deskripsi</p>
          <p>{data.description}</p>
        </div>

        {/* HARGA TIKET */}
        <div className="flex flex-row justify-start items-center w-full py-5 gap-10 text-[20px] font-bold">
          <div className="flex flex-row justify-start items-center gap-2">
            <p>Harga Tiket</p>
            <p className="text-green-500">{formatToIDRCurrency(data.price)}</p>
          </div>
          <div className="flex flex-row justify-start items-center gap-2">
            <p>Jumlah Tiket</p>
            <p className="text-green-500">{data.number_of_ticket}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventApproval;
