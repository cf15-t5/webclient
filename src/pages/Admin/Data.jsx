import { useEffect, useState } from "react";
import DataCard from "../../components/DataCard";
import axios from "../../api/axios";

// DUMMY
const dummyDataEOs = [
  {
    nama: "Pocketful Of Dreams",
    email: "POCD02@gmail.com",
  },
  {
    nama: "Pocketful Of Truth",
    email: "POCD03@gmail.com",
  },
  {
    nama: "Pocketful Of Lies",
    email: "POCD03@gmail.com",
  },
];

const dummyDataUsers = [
  {
    nama: "John",
    email: "John22@gmail.com",
  },
  {
    nama: "Farhan",
    email: "Farhan@gmail.com",
  },
  {
    nama: "Fahrezy",
    email: "Fahrezy@gmail.com",
  },
  {
    nama: "Compi",
    email: "Compi@gmail.com",
  },
];

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
      // fetch data here
      // setloading(true);

      axios
        .get(`/users/`)
        .then((res) => {
          setData([...res.data.data]);
        })
        .catch((err) => {
          console.log(err);
          setData([]);
        });

      // setloading(false);
    }

    fetchData();
  }, []);

  useEffect(() => {
    if (selectedTab === 0) {
      // EOs
      const EOs = data?.filter((user) => user.role === "EVENT_ORGANIZER");
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
        <div className="flex flex-col justify-center items-center w-full gap-3">
          {displayData?.map((eventData, index) => (
            <DataCard key={index} {...eventData} />
          ))}
        </div>
      ) : (
        <p>Nothing to show</p>
      )}
    </div>
  );
}

export default Data;
