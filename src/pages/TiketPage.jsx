import React, { useEffect, useState } from 'react'
import Tiket from '../components/Tiket'
import axios from '../api/axios'
import ModalsTicketInfo from '../components/ModalsTicketInfo'
import TiketList from '../Lists/TiketList'

function TiketPage() {
  const [show,setShow] = useState(false)
  const [selected, setSelected] = useState()
  const [ data , setData ] = useState([])
  
  useEffect(()=>{
    axios
    .get('/tickets/my')
    .then((res)=>{
      setData(res.data.data)
    })
    .catch((err)=>{
      console.log(err.response)
    })
  },[])

  function ticketDetail(data){
    setSelected(data)
    setShow(true)
  }

  return (
    <section className='py-3 px-5'>
      <h5 className='text-xl border-b-2 border-gray-300'>Upcoming Event</h5>
      <div className='lg:mx-48 my-10 relative'>
        <TiketList data={data} ticketDetail={ticketDetail}/>

        {show && (
          <ModalsTicketInfo
          data={selected}
          setShow={setShow}
          />
        )}

      </div>
    </section>
  )
}

export default TiketPage