import React from "react";
import EventRequestCard from "../components/EventRequestCard";
import EORequestList from "./EORequestList";

const RequestList = ({ loading, data, selectedTab }) => {
  if (loading) {
    return <p>Loading...</p>;
  }
  if (data) {
    if (data.length !== 0) {
      if (selectedTab === 0) {
        return <EORequestList data={data} />;
      } else {
        return <EventRequestCard data={data} />;
      }
    } else {
      return <p>Nothing to show here</p>;
    }
  } else {
    return <p>Nothing to show here</p>;
  }
};

export default RequestList;
