import { useEffect, useState } from "react";
import axios from "../../api/axios";
import ModalsInput from "../../components/ModalsInput";
import { toast } from "react-hot-toast";
import MyEventList from "../../Lists/MyEventList";

function MyEvent() {
  const [data, setData] = useState();
  const [show, setShow] = useState(false);
  const [code, setCode] = useState("");
  useEffect(() => {
    axios
      .get("/events/my")
      .then((res) => {
        setData(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  function CekInEvent(e) {
    e.preventDefault();
    if (!code) return toast.error("Silahkan Input Kode");
    axios
      .put("/tickets/attend", { ticket_code: code })
      .then((res) => {
        console.log(res.data);
        toast.success("Berhasil Cek In");
        window.location.reload();
      })
      .catch((err) => {
        console.log(err.response.data);
        toast.error(err.response.data.data);
      });
  }

  return (
    <div className="flex flex-col w-full min-h-screen py-5 px-5 sm:px-12 gap-5">
      {/* TAB */}
      <div className="flex flex-row justify-between border-b-2 border-black border-opacity-20 text-[24px] py-3">
        Event Saya
        <button
          onClick={() => setShow(true)}
          className="btn-primary text-xs py-1 px-4"
        >
          Cek in Event
        </button>
      </div>
      {show && (
        <ModalsInput
          title="Cek in Event"
          onSubmit={CekInEvent}
          setShow={setShow}
          setValue={setCode}
        />
      )}
      {/* DATA */}
      <MyEventList data={data} />
    </div>
  );
}

export default MyEvent;
