// import React, { useEffect, useState } from "react";
import { useEffect, useState } from "react";
import EORequestCard from "../../components/EORequestCard";
import EventRequestCard from "../../components/EventRequestCard";
import axios from "../../api/axios";

function Request() {
  const [selectedTab, setSelectedTab] = useState(0);
  const [data, setData] = useState({
    pending: [],
    nonPending: [],
  });
  const [loading, setloading] = useState(false);

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
    async function fetchData() {
      // fetch data here
      setloading(true);
      if (selectedTab === 0) {
        // EOs
        axios
          .get(`/users/`)
          .then((res) => {
            const users = [...res.data.data];
            const PendingEOs = users.filter(
              (user) =>
                user.role === "EVENT_ORGANIZER" && user.status === "INACTIVE"
            );
            const NonPendingEOs = users.filter(
              (user) =>
                user.role === "EVENT_ORGANIZER" && user.status !== "INACTIVE"
            );
            setData({
              pending: [...PendingEOs],
              nonPending: [...NonPendingEOs],
            });
          })
          .catch((err) => {
            console.log(err);
            setData([]);
          });
      } else if (selectedTab === 1) {
        // Events
        axios
          .get(`/events/`)
          .then((res) => {
            const events = [...res.data.data];
            const PendingEvent = events.filter(
              (event) => event.status === "PENDING"
            );
            const NonPendingEvent = events.filter(
              (event) => event.status !== "PENDING"
            );
            setData({
              pending: [...PendingEvent],
              nonPending: [...NonPendingEvent],
            });
          })
          .catch((err) => {
            console.log(err);
            setData([]);
          });
      }
      setloading(false);
    }

    fetchData();
  }, [selectedTab]);

  return (
    <div className="flex flex-col w-full min-h-screen py-5 px-5 sm:px-12 gap-5">
      {/* TAB */}
      <div className="flex flex-row border-b-2 border-black border-opacity-20">
        {tabList.map((tab, index) => (
          <button
            key={index}
            onClick={() => {
              setSelectedTab(tab.tabId);
              setData([]);
            }}
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
      {loading ? (
        <p>Loading...</p>
      ) : data ? (
        data.length !== 0 ? (
          selectedTab === 0 ? (
            <div className="flex flex-col justify-center items-center w-full gap-3">
              {data.pending.length !== 0 ? (
                data.pending.map((eventData, index) => (
                  <EORequestCard key={index} {...eventData} />
                ))
              ) : (
                <p>Tidak ada permintaan untuk Event Organizer</p>
              )}
              <div className="border-b-2 border-black border-opacity-10 w-full" />
              {data.nonPending.length !== 0 ? (
                data.nonPending.map((eventData, index) => (
                  <EORequestCard key={index} {...eventData} />
                ))
              ) : (
                <p>Tidak ada riwayat untuk Event Organizer</p>
              )}
            </div>
          ) : (
            <>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 transition-all">
                {data.pending.length !== 0 ? (
                  data.pending.map((eventData, index) => (
                    <EventRequestCard key={index} {...eventData} />
                  ))
                ) : (
                  <p>Tidak ada permintaan untuk Event</p>
                )}
              </div>
              <div className="border-b-2 border-black border-opacity-10 w-full" />
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 transition-all">
                {data.nonPending.length !== 0 ? (
                  data.nonPending.map((eventData, index) => (
                    <EventRequestCard key={index} {...eventData} />
                  ))
                ) : (
                  <p>Tidak ada riwayat untuk Event</p>
                )}
              </div>
            </>
          )
        ) : (
          <p>Nothing to show here</p>
        )
      ) : (
        <p>Nothing to show here</p>
      )}
    </div>
  );
}

export default Request;
