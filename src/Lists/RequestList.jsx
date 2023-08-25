import React from "react";
import EORequestList from "./EORequestList";
import EventRequestList from "./EventRequestList";

const RequestList = ({ loading, data, selectedTab }) => {
  if (loading) {
    return <p>Loading...</p>;
  }
  if (data) {
    if (data.length !== 0) {
      if (selectedTab === 0) {
        return <EORequestList data={data} />;
      } else {
        return <EventRequestList data={data} />;
      }
    } else {
      return <p>Nothing to show here</p>;
    }
  } else {
    return <p>Nothing to show here</p>;
  }
};

export default RequestList;
