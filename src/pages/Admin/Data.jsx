import { useEffect, useState } from "react";
import DataCard from "../../components/DataCard";
import axios from "../../api/axios";

function Data() {
  const [selectedTab, setSelectedTab] = useState(0);
  const [data, setData] = useState();
  const [displayData, setdisplayData] = useState([]);

  const tabList = [
    {
      tabName: "EOs",
      tabId: 0,
    },
    {
      tabName: "Users",
      tabId: 1,
    },
  ];

  useEffect(() => {
    async function fetchData() {
      axios
        .get(`/users/`)
        .then((res) => {
          setData([...res.data.data]);
        })
        .catch((err) => {
          console.log(err);
          setData([]);
        });
    }

    fetchData();
  }, []);

  useEffect(() => {
    if (selectedTab === 0) {
      // EOs
      const EOs = data?.filter(
        (user) => user.role === "EVENT_ORGANIZER" && user.status === "ACTIVE"
      );
      setdisplayData(EOs);
    } else if (selectedTab === 1) {
      // Users
      const Users = data?.filter((user) => user.role === "USER");
      setdisplayData(Users);
    }
  }, [selectedTab, data]);

  return (
    <div className="flex flex-col w-full min-h-screen py-5 px-5 sm:px-12 gap-5">
      {/* TAB */}
      <div className="flex flex-row border-b-2 border-black border-opacity-20">
        {tabList.map((tab) => (
          <button
            key={tab.tabId}
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
        <div className="flex flex-col justify-center items-center w-full gap-3">
          {displayData?.map((eventData) => (
            <DataCard key={eventData.user_id} {...eventData} />
          ))}
        </div>
      ) : (
        <p>Nothing to show</p>
      )}
    </div>
  );
}

export default Data;
