import React, { useEffect, useState } from "react";
import EventCard from "../components/EventCard";
import axios from "../api/axios";
import { toast } from "react-hot-toast";
import { isDateExceed } from "../utils/dateProcess";

function EventList({ filter }) {
  const [loading, setLoading] = useState(true);
  const [eventData, setEventData] = useState([]);
  const [displayData, setDisplayData] = useState([]);

  useEffect(() => {
    axios
      .get("/events/")
      .then((res) => {
        const events = res.data.data;
        const eventApprove = events.filter(
          (event) => event.status === "APPROVED"
        );
        setEventData(eventApprove);
      })
      .catch((err) => {
        console.log(err.response);
        toast.error("Error Fetch Data");
      })
      .finally(() => setLoading(false));
  }, []);

  useEffect(() => {
    let newData = [...eventData];
    if (filter.kategori !== "") {
      newData = newData.filter(
        (data) => data.category.name === filter.kategori
      );
    }
    if (filter.namaEvent !== "") {
      newData = newData.filter((data) =>
        data.title?.toLowerCase().includes(filter.namaEvent.toLowerCase())
      );
    }
    if (filter.lokasi !== "") {
      newData = newData.filter((data) =>
        data.address?.toLowerCase().includes(filter.lokasi.toLowerCase())
      );
    }
    if (filter.tanggal !== "") {
      newData = newData.filter((data) =>
        isDateExceed(data.date_of_event, filter.tanggal)
      );
    }
    setDisplayData(newData);
  }, [
    eventData,
    filter.kategori,
    filter.lokasi,
    filter.tanggal,
    filter.namaEvent,
  ]);

  if (loading) return <p className="text-center">Loading....</p>;
  return (
    <div className="flex flex-wrap gap-5 justify-center ">
      {displayData?.map((event) => {
        return (
          <EventCard
            id={event.event_id}
            Img={event.poster_path}
            EventTitle={event.title}
            Date_of_event={event.date_of_event}
            Price={event.price}
            Location={event.address}
            Ticket={event.number_of_ticket}
            key={event.event_id}
          />
        );
      })}
    </div>
  );
}

export default EventList;
