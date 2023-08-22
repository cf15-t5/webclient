// import React, { useEffect, useState } from "react";
import { useEffect, useState } from "react";
import EORequestCard from "../../components/EORequestCard";
import EventRequestCard from "../../components/EventRequestCard";
import axios from "../../api/axios";

// DUMMY
const dummyDataEOs = [
  {
    eventName: "Pocketful Of Dreams",
    email: "POCD02@gmail.com",
    dateOfRequest: "17 Agustus 1945",
    approvalStatus: false,
  },
  {
    eventName: "Pocketful Of Truth",
    email: "POCD02@gmail.com",
    dateOfRequest: "17 Agustus 1945",
    approvalStatus: true,
  },
  {
    eventName: "Pocketful Of Lies",
    email: "POCD02@gmail.com",
    dateOfRequest: "101010",
    approvalStatus: null,
  },
];

function Request() {
  const [selectedTab, setSelectedTab] = useState(0);
  const [data, setData] = useState([]);

  const tabList = [
    {
      tabName: "EOs",
      tabId: 0,
    },
    {
      tabName: "Events",
      tabId: 1,
    },
  ];

  useEffect(() => {
    // fetch data here
    if (selectedTab === 0) {
      // EOs
      setData(dummyDataEOs);
    } else if (selectedTab === 1) {
      // Events
      axios
        .get(`/events/`)
        .then((res) => {
          console.log(res.data.data);
          setData(res.data.data);
        })
        .catch((err) => {
          console.log(err);
        })
        .finally();
    }
  }, [selectedTab]);

  return (
    <div className="flex flex-col w-full min-h-screen py-5 px-5 sm:px-12 gap-5">
      {/* TAB */}
      <div className="flex flex-row border-b-2 border-black border-opacity-20">
        {tabList.map((tab, index) => (
          <button
            key={index}
            onClick={() => setSelectedTab(tab.tabId)}
            className={` ${
              selectedTab === tab.tabId
                ? "bg-white border-t-2 border-r-2 border-l-2 border-black border-opacity-[15%]"
                : " text-primary-500"
            } py-2 px-4`}
          >
            {tab.tabName}
          </button>
        ))}
      </div>

      {/* DATA */}
      {data.length !== 0 ? (
        selectedTab === 0 ? (
          <div className="flex flex-col justify-center items-center w-full gap-3">
            {data.map((eventData, index) => (
              <EORequestCard key={index} {...eventData} />
            ))}
          </div>
        ) : selectedTab === 1 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 transition-all">
            {data.map((eventData, index) => (
              <EventRequestCard key={index} {...eventData} />
            ))}
          </div>
        ) : null
      ) : (
        <p>Nothing to show</p>
      )}
    </div>
  );
}

export default Request;
