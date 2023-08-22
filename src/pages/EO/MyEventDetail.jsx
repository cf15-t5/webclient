import React, { useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import { Link } from "react-router-dom";

// DUMMY DATA
const dummyEventData = {
  judulEvent: "DEWA 19 Feat Allstar ( Stadium Tour ) - BANDUNG",
  namaPerusahaan: "Pocketful Of Dreams",
  tanggalEvent: "19 Agt 2023",
  lokasi: "Stadion Si Jalak Harupat, Kutawarigin, Bandung",
  deskripsi: `BALADEWA & BALADEWI, Inilah yang ditunggu-tunggu! DEWA 19 kembali melakukan stadium tour di kota-kota besar Indonesia dengan membawa berbagai bintang tamu untuk ikut meramaikan acara konser dari band legendaris Indonesia.
    Konser akan dimeriahkan oleh Ari Lasso, Virzha, Ello, dan Tyo Nugros! Selain itu, turut mengundang ALL STARS PHIL X - Guitarist Bon Jovi, DEREK SHERINIAN - Keyboardist Dream Theater, Sons of Apollo, JEFF SCOTT SOTO - Vokalis Journey, Sons of Apollo, serta DINO JELUSICK - Vokalis Trans Siberian Orchestra, Whitesnake! Konser akan berlangsung di Stadion Si Jalak Harupat, Bandung!`,
  imageUrl: "./dummy/exposter.png",
  hargaTiket: 200000,
  jumlahTiket: 20,
  terjual: 0,
  peserta: 0,
};

const MyEventDetail = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    // fetch data here
    setData(dummyEventData);
  }, []);

  // Function
  const handleDeleteEvent = () => {
    // something
    toast.success("Berhasil menghapus event!");
  };

  if (data === null) {
    return (
      <div className="flex flex-col justify-center items-center w-full min-h-screen">
        Loading...
      </div>
    );
  }

  return (
    <div className="flex flex-col justify-start items-center w-full min-h-screen">
      {/* POSTER EVENT */}
      <div className="w-full h-[25vh] sm:h-[50vh] relative">
        <img
          src={data.imageUrl}
          alt={data.judulEvent}
          className="w-full h-full object-cover brightness-[40%] blur-[1px] absolute top-0 z-[0]"
        />
        <img
          src={data.imageUrl}
          alt={data.judulEvent}
          className="h-full absolute top-0 z-[1] left-1/2 -translate-x-1/2 object-cover"
        />
      </div>

      {/* FULL INFO */}
      <div className="flex flex-col justify-start items-center w-full p-5 sm:px-16 sm:py-10 ">
        <div className="flex flex-row justify-between items-start w-full border-b-[1px] border-black border-opacity-20 pb-5">
          <div className="flex flex-col justify-center items-start">
            <p className="text-[24px] font-bold leading-6">{data.judulEvent}</p>

            <ul className=" space-y-3 pt-5 list-none">
              <li className="flex flex-row gap-3 items-center">
                <img
                  src="./icons/calendar.png"
                  alt={data.namaPerusahaan}
                  className="w-[17px]"
                />
                {data.tanggalEvent}
              </li>
              <li className="flex flex-row gap-3 items-center">
                <img
                  src="./icons/location.png"
                  alt={data.namaPerusahaan}
                  className="w-[17px]"
                />
                {data.lokasi}
              </li>
            </ul>
            <div className="flex flex-row pt-3">
              <input
                placeholder="Tiket Kode"
                className="outline-none px-5 bg-gray-300 placeholder:text-gray-500"
              />
              <button className="px-4 py-2 bg-primary-500 text-white font-bold">
                Cek In
              </button>
            </div>
          </div>

          {/* APPROVAL INFO */}
          <div className="flex flex-col justify-start items-end">
            <p>Tiket yang terjual</p>
            <p className="font-bold">
              {data.terjual}/{data.jumlahTiket}
            </p>
            <p>Informasi Peserta</p>
            <p className="font-bold">
              {data.terjual}/{data.jumlahTiket}
            </p>
          </div>
        </div>

        {/* DESKRIPSI */}
        <div className="flex flex-col justify-center items-start w-full py-3">
          <p className="text-[20px] font-bold">Deskripsi</p>
          <p>{data.deskripsi}</p>
        </div>

        {/* HARGA TIKET */}
        <div className="flex flex-row justify-end items-center w-full py-5 gap-3 text-white">
          <Link to="/editEvent" className="bg-primary-500 py-2 px-4 rounded-md">
            Edit Event
          </Link>
          <button
            onClick={() => handleDeleteEvent()}
            className="bg-red-500 py-2 px-4 rounded-md"
          >
            Hapus Event
          </button>
        </div>
      </div>
    </div>
  );
};

export default MyEventDetail;
