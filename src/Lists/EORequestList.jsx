import React from "react";
import EORequestCard from "../components/EORequestCard";

const EORequestList = ({ data }) => {
  return (
    <div className="flex flex-col justify-center items-center w-full gap-3">
      {data.pending.length !== 0 ? (
        data.pending.map((eventData) => (
          <EORequestCard key={eventData.user_id} {...eventData} />
        ))
      ) : (
        <p>Tidak ada permintaan untuk Event Organizer</p>
      )}
      <div className="border-b-2 border-black border-opacity-10 w-full" />
      {data.nonPending.length !== 0 ? (
        data.nonPending.map((eventData) => (
          <EORequestCard key={eventData.user_id} {...eventData} />
        ))
      ) : (
        <p>Tidak ada riwayat untuk Event Organizer</p>
      )}
    </div>
  );
};

export default EORequestList;
