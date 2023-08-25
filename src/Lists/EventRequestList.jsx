import React from "react";
import EventRequestCard from "../components/EventRequestCard";

export const EventRequestList = ({ data }) => {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 transition-all">
        {data.pending.length !== 0 ? (
          data.pending.map((eventData) => (
            <EventRequestCard key={eventData.event_id} {...eventData} />
          ))
        ) : (
          <p>Tidak ada permintaan untuk Event</p>
        )}
      </div>
      <div className="border-b-2 border-black border-opacity-10 w-full" />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 transition-all">
        {data.nonPending.length !== 0 ? (
          data.nonPending.map((eventData) => (
            <EventRequestCard key={eventData.event_id} {...eventData} />
          ))
        ) : (
          <p>Tidak ada riwayat untuk Event</p>
        )}
      </div>
    </>
  );
};
