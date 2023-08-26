import { useEffect, useState } from "react";
import axios from "../../api/axios";
import RequestList from "../../Lists/RequestList";

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
            PendingEOs.sort((a, b) => {
              const dateA = new Date(a.created_at);
              const dateB = new Date(b.created_at);
              return dateB - dateA;
            });
            const NonPendingEOs = users.filter(
              (user) =>
                user.role === "EVENT_ORGANIZER" && user.status !== "INACTIVE"
            );
            NonPendingEOs.sort((a, b) => {
              const dateA = new Date(a.created_at);
              const dateB = new Date(b.created_at);
              return dateB - dateA;
            });
            setData({
              pending: [...PendingEOs],
              nonPending: [...NonPendingEOs],
            });
          })
          .catch((err) => {
            console.log(err);
            setData({ pending: [], nonPending: [] });
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
            setData({ pending: [], nonPending: [] });
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
        {tabList.map((tab) => (
          <button
            key={tab.tabId}
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
      <RequestList loading={loading} data={data} selectedTab={selectedTab} />
    </div>
  );
}

export default Request;
