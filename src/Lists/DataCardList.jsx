import React from "react";
import DataCard from "../components/DataCard";

const DataCardList = ({ displayData }) => {
  return (
    <div className="flex flex-col justify-center items-center w-full gap-3">
      {displayData?.map((eventData) => (
        <DataCard key={eventData.user_id} {...eventData} />
      ))}
    </div>
  );
};

export default DataCardList;
