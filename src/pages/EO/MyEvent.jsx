import { useEffect, useState } from "react";
import MyEventCard from "../../components/MyEventCard";
import axios from "../../api/axios";
import ModalsInput from "../../components/ModalsInput";
import { toast } from "react-hot-toast";
import loadingCircle from '../../Assets/loading.svg'
function MyEvent() {
  const [data, setData] = useState();
  const [show,setShow] = useState(false)
  const [code,setCode] = useState('')
  const [ loading, setLoading ] = useState(false)

  useEffect(() => {
    setLoading(true)
    axios
    .get("/events/my")
    .then((res) => {
      setData(res.data.data);
    })
    .catch((err) => {
      console.log(err);
    })
    .finally(()=>setLoading(false))
  }, []);
  
  function CekInEvent(e){
    e.preventDefault()
    if(!code) return toast.error("Silahkan Input Kode")
    axios
    .put('/tickets/attend',{ticket_code:code.replace(/\s/g, "")})
    .then((res)=>{
      console.log(res.data)
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
        <ModalsInput
        title="Cek in Event"
        onSubmit={CekInEvent}
        setShow={setShow}
        setValue={setCode}
      />
      )}
      {/* DATA */}
      {!loading ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 transition-all">
          {data?.map((eventData) => (
            <MyEventCard key={eventData.event_id} {...eventData} />
          ))}
        </div>
      ) : (
        <div className="flex justify-center">
          <img src={loadingCircle} alt="loadingCircle"/>
        </div>
      )}
    </div>
  );
}

export default MyEvent;
