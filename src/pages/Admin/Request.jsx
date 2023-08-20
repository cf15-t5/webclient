// import React, { useEffect, useState } from "react";
import { useEffect, useState } from "react";
import EORequestCard from "../../components/EORequestCard";
import EventRequestCard from "../../components/EventRequestCard";

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

const dummyDataEvents = [
  {
    eventName: "DEWA 19 Feat Allstar ( Stadium Tour ) - BANDUNG",
    imageUrl: "./dummy/exposter.png",
    eventDate: "19 Agt 2023",
    location: "Bandung",
    approvalStatus: null,
  },
  {
    eventName: "Rock Fest 2023 - Jakarta",
    imageUrl: "./dummy/exposter.png",
    eventDate: "15 Sep 2023",
    location: "Jakarta",
    approvalStatus: false,
  },
  {
    eventName: "Jazz in the Park - Surabaya",
    imageUrl: "./dummy/exposter.png",
    eventDate: "10 Oct 2023",
    location: "Surabaya",
    approvalStatus: null,
  },
  {
    eventName: "Pop Sensation Concert - Bali",
    imageUrl: "./dummy/exposter.png",
    eventDate: "25 Nov 2023",
    location: "Bali",
    approvalStatus: true,
  },
  {
    eventName: "Hip-Hop Night - Yogyakarta",
    imageUrl: "./dummy/exposter.png",
    eventDate: "3 Dec 2023",
    location: "Yogyakarta",
    approvalStatus: true,
  },
  {
    eventName: "EDM Extravaganza - Semarang",
    imageUrl: "./dummy/exposter.png",
    eventDate: "8 Jan 2024",
    location: "Semarang",
    approvalStatus: null,
  },
  {
    eventName: "Classic Rock Revival - Medan",
    imageUrl: "./dummy/exposter.png",
    eventDate: "20 Feb 2024",
    location: "Medan",
    approvalStatus: true,
  },
  {
    eventName: "Country Music Festival - Makassar",
    imageUrl: "./dummy/exposter.png",
    eventDate: "5 Mar 2024",
    location: "Makassar",
    approvalStatus: null,
  },
  {
    eventName: "Reggae Rhythm Party - Surabaya",
    imageUrl: "./dummy/exposter.png",
    eventDate: "15 Apr 2024",
    location: "Surabaya",
    approvalStatus: false,
  },
  {
    eventName: "Indie Showcase - Bandung",
    imageUrl: "./dummy/exposter.png",
    eventDate: "30 May 2024",
    location: "Bandung",
    approvalStatus: true,
  },
];

function Request() {
  const [selectedTab, setSelectedTab] = useState(0);
  const [data, setData] = useState();

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
      setData(dummyDataEvents);
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
      {data ? (
        selectedTab === 0 ? (
          <div className="flex flex-col justify-center items-center w-full gap-3">
            {data.map((eventData, index) => (
              <EORequestCard key={index} {...eventData} />
            ))}
          </div>
        ) : selectedTab === 1 ? (
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 transition-all">
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
