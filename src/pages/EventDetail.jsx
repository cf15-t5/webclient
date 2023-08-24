import React, { useEffect, useState } from "react";
import iconLocation from "../assets/carbon_location.png";
import iconDate from "../assets/Vector.png";
import { useNavigate, useParams } from "react-router-dom";
import axios from "../api/axios";
import {
  formatPosterURL,
  formatToIDRCurrency,
  dateToDDMonthYYYY,
} from "../utils/stringProcess";
import { toast } from "react-hot-toast";

function EventDetail() {
  const { id } = useParams();
  const [eventDetail, setEventDetail] = useState([]);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get(`/events/${id}`).then((res) => {
      setEventDetail(res.data.data);
    });
  }, [id]);

  function BuyTicket() {
    setLoading(true);
    axios
      .post("/tickets/", { event_id: id })
      .then(() => {
        toast.success("Pembelian Berhasil");
      })
      .catch((err) => {
        toast.error("Silahkan login terlebih dahulu");
        // navigate("/login");
      })
      .finally(() => setLoading(false));
  }
  return (
    <section className="relative pb-[100px] md:pb-10 ">
      {/* Event Poster */}
      <img
        src={formatPosterURL(eventDetail?.poster_path)}
        className="w-full  h-72 object-cover object-center brightness-50"
        alt="backgroundPoster"
      />
      <div className="h-72 w-full absolute top-0 flex object-center justify-center">
        <img
          src={formatPosterURL(eventDetail?.poster_path)}
          className="object-contain h-full"
          alt="poster"
        />
      </div>

      <div className=" md:py-3 md:px-20 ">
        {/* Event Info  */}
        <div className="flex justify-between border-b-2 border-gray-400">
          <div className="mx-7 mt-5 md:m-3">
            <h2 className="font-bold text-3xl">{eventDetail.title}</h2>
            <div className="my-3">
              <img className="inline" src={iconLocation} alt="iconLoc" />
              <span className="ms-2">{eventDetail.address}</span>
              <br />
              <img className="ms-1 inline" src={iconDate} alt="iconDate" />
              <span className="ms-3">
                {dateToDDMonthYYYY(eventDetail.date_of_event)}
              </span>
            </div>
          </div>

          <div className="bg-white fixed flex justify-between p-3 bottom-0 w-full md:bg-transparent md:relative md:inline md:w-fit">
            <h4 className="text-red-400 font-bold ms-2 md:ms-0 my-auto text-2xl mb-2">
              IDR {formatToIDRCurrency(eventDetail.price)}
            </h4>
            <button
              onClick={() => BuyTicket()}
              className="text-sm btn-primary md:me-0 md:w-full"
            >
              {loading ? "Loading..." : "Beli Sekarang"}
            </button>
          </div>
        </div>

        <div className="mx-7 mt-5 md:m-3 mb-32 md:mb-3">
          <h4 className="font-bold text-lg mb-3">Deskripsi</h4>
          <p>{eventDetail.description}</p>
        </div>
      </div>
    </section>
  );
}

export default EventDetail;
