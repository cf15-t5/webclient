import { useEffect, useState } from "react";
import MyEventCard from "../../components/MyEventCard";
import axios from "../../api/axios";

function MyEvent() {
  const [data, setData] = useState();

  useEffect(() => {
    axios
      .get("/events/my")
      .then((res) => {
        console.log(res.data.data);
        setData(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="flex flex-col w-full min-h-screen py-5 px-5 sm:px-12 gap-5">
      {/* TAB */}
      <div className="flex flex-row border-b-2 border-black border-opacity-20 text-[24px] py-3">
        Event Saya
      </div>

      {/* DATA */}
      {data ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 transition-all">
          {data.map((eventData, index) => (
            <MyEventCard key={index} {...eventData} />
          ))}
        </div>
      ) : (
        <p>Nothing to show</p>
      )}
    </div>
  );
}

export default MyEvent;
