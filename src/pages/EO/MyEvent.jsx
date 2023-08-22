// import React, { useEffect, useState } from "react";
import { useEffect, useState } from "react";
import MyEventCard from "../../components/MyEventCard";
import axios from "../../api/axios";

// DUMMY

const dummyDataEvents = [
  {
    name: "DEWA 19 Feat Allstar ( Stadium Tour ) - BANDUNG",
    imageUrl: "./dummy/exposter.png",
    eventDate: "19 Agt 2023",
    location: "Bandung",
    price: 200000,
    jumlahTiket: 20,
    terjual: 0,
    peserta: 0,
  },
  {
    name: "DEWA 19 Feat Allstar ( Stadium Tour ) - BANDUNG",
    imageUrl: "./dummy/exposter.png",
    eventDate: "19 Agt 2023",
    location: "Bandung",
    price: 200000,
    jumlahTiket: 20,
    terjual: 0,
    peserta: 0,
  },
];

function MyEvent() {
  const [data, setData] = useState();

  useEffect(() => {
    setData(dummyDataEvents);
    axios
      .get("/events/my")
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="flex flex-col w-full min-h-screen py-5 px-5 sm:px-12 gap-5">
      {/* TAB */}
      <div className="flex flex-row border-b-2 border-black border-opacity-20 text-[24px] py-3">
        Event Saya
      </div>

      {/* DATA */}
      {data ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 transition-all">
          {data.map((eventData, index) => (
            <MyEventCard key={index} {...eventData} />
          ))}
        </div>
      ) : (
        <p>Nothing to show</p>
      )}
    </div>
  );
}

export default MyEvent;
