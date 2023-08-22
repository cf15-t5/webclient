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
    axios
      .get("/users")
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    // fetch data here
    if (selectedTab === 0) {
      // EOs
      setData(dummyDataEOs);
    } else if (selectedTab === 1) {
      // Events
      setData(dummyDataUsers);
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
              <DataCard key={index} {...eventData} isUser={false} />
            ))}
          </div>
        ) : selectedTab === 1 ? (
          <div className="flex flex-col justify-center items-center w-full gap-3">
            {data.map((eventData, index) => (
              <DataCard key={index} {...eventData} isUser={true} />
            ))}
          </div>
        ) : null
      ) : (
        <p>Nothing to show</p>
      )}
    </div>
  );
}

export default Data;
