import { useEffect, useState } from "react";
import MyEventCard from "../../components/MyEventCard";
import axios from "../../api/axios";
import ModalsAdd from "../../components/ModalsAdd";
import { toast } from "react-hot-toast";

function MyEvent() {
  const [data, setData] = useState();
  const [show,setShow] = useState(false)
  const [code,setCode] = useState('')
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
  
  function CekInEvent(e){
    e.preventDefault()
    if(!code) return toast.error("Silahkan Input Kode")
    axios
    .put('/tickets/attend',{ticket_code:code})
    .then((res)=>{
      toast.success('Berhasil Cek In')
      window.location.reload()
    })
    .catch((err)=>{
      console.log(err.response.data)
      toast.error(err.response.data.data)
    })
  }

  return (
    <div className="flex flex-col w-full min-h-screen py-5 px-5 sm:px-12 gap-5">
      {/* TAB */}
      <div className="flex flex-row justify-between border-b-2 border-black border-opacity-20 text-[24px] py-3">
        Event Saya
        <button onClick={()=>setShow(true)} className="btn-primary text-xs py-1 px-4">Cek in Event</button>
      </div>
      {show && (
        <ModalsAdd
        title="Cek in Event"
        onSubmit={CekInEvent}
        setShow={setShow}
        setValue={setCode}
      />
      )}
      {/* DATA */}
      {data ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 transition-all">
          {data.map((eventData) => (
            <MyEventCard key={eventData.event_id} {...eventData} />
          ))}
        </div>
      ) : (
        <p>Nothing to show</p>
      )}
    </div>
  );
}

export default MyEvent;
