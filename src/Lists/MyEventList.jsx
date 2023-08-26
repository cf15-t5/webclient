import React from "react";
import MyEventCard from "../components/MyEventCard";

const MyEventList = ({ data }) => {
  if (!data) {
    return <p>Nothing to show</p>;
  }
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 transition-all">
      {data.map((eventData) => (
        <MyEventCard key={eventData.event_id} {...eventData} />
      ))}
    </div>
  );
};

export default MyEventList;
