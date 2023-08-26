import React, { useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import { Link, useNavigate, useParams } from "react-router-dom";
import axios from "../../api/axios";
import { dateToDDMonthYYYY, formatPosterURL } from "../../utils/stringProcess";
import loadingCircle from '../../Assets/loading.svg'

const MyEventDetail = () => {
  const [data, setData] = useState(null);
  const [loadingPage, setloadingPage] = useState(false);
  const [loadingDelete, setloadingDelete] = useState(false);
  const navigate = useNavigate();
  const { event_id } = useParams();

  useEffect(() => {
    setloadingPage(true);
    axios
    .get(`/events/${event_id}`)
    .then((res) => {
      setData(res.data.data);
    })
    .catch((err) => {
      console.log(err);
    })
    .finally(setloadingPage(false));
  }, [event_id]);

  // Function
  const handleDeleteEvent = () => {
    setloadingDelete(true);
    axios
      .delete(`/events/${event_id}/delete`)
      .then(() => {
        toast.success("Berhasil menghapus event!");
        navigate("/myEvent");
      })
      .catch((err) => {
        toast.error("Gagal menghapus event");
      })
      .finally(setloadingDelete(false));
  };

  

  if (loadingPage) {
    return (
      <div className="flex flex-col justify-center items-center w-full min-h-screen">
        <img src={loadingCircle} alt="loadingCircle"/>
      </div>
    );
  } 

  return (
    <div className="flex flex-col justify-start items-center w-full min-h-screen">
      {/* POSTER EVENT */}
      <div className="w-full h-[25vh] sm:h-[50vh] relative">
        <img
          src={formatPosterURL(data?.poster_path)}
          alt={data?.title}
          className="w-full h-full object-cover brightness-[40%] blur-[1px] absolute top-0 z-[0]"
        />
        <img
          src={formatPosterURL(data?.poster_path)}
          alt={data?.title}
          className="h-full absolute top-0 z-[1] left-1/2 -translate-x-1/2 object-cover"
        />
      </div>

      {/* FULL INFO */}
      <div className="flex flex-col justify-start items-center w-full p-5 sm:px-16 sm:py-10 ">
        <div className="flex flex-row justify-between items-start w-full border-b-[1px] border-black border-opacity-20 pb-5">
          <div className="flex flex-col justify-center items-start">
            <p className="text-[24px] font-bold leading-6">{data?.title}</p>

            <ul className=" space-y-3 pt-5 list-none">
              <li className="flex flex-row gap-3 items-center">
                <img
                  src="/icons/calendar.png"
                  alt="Calendar logo"
                  className="w-[17px]"
                />
                {dateToDDMonthYYYY(data?.date_of_event)}
              </li>
              <li className="flex flex-row gap-3 items-center">
                <img
                  src="/icons/location.png"
                  alt="Location logo"
                  className="w-[17px]"
                />
                {data?.address}
              </li>
              <li>
                <h1 className="font-bold">Status : {data?.status}</h1>
              </li>
            </ul>
          </div>

          {/* APPROVAL INFO */}
          <div className="flex flex-col justify-start items-end">
            <p>Tiket yang terjual</p>
            <p className="font-bold">
              {data?.ticket_count}/{data?.number_of_ticket}
            </p>
            <p>Informasi Peserta</p>
            <p className="font-bold">
              {data?.attendances_count}/{data?.number_of_ticket}
            </p>
          </div>
        </div>

        {/* DESKRIPSI */}
        <div className="flex flex-col justify-center items-start w-full py-3">
          <p className="text-[20px] font-bold">Deskripsi</p>
          <p>{data?.description}</p>
        </div>

        {/* HARGA TIKET */}
        <div className="flex flex-row justify-end items-center w-full py-5 gap-3 text-white">
          <Link to={`/editEvent/${event_id}`} className="bg-primary-500 py-2 px-4 rounded-md">
            Edit Event
          </Link>
          <button
            onClick={() => handleDeleteEvent()}
            disabled={loadingDelete}
            className="bg-red-500 py-2 px-4 rounded-md disabled:opacity-50 disabled:cursor-not-allowed transition-all"
          >
            {loadingDelete ? "Menghapus..." : "Hapus Event"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default MyEventDetail;
