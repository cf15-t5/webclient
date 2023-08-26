import React from 'react'
import Tiket from '../components/Tiket'

function TiketList({data, ticketDetail}) {
  return (
    data.map((item)=>{
      return(
        <div className='hover:shadow-md cursor-pointer' key={item.ticket_id} onClick={()=>ticketDetail(item)}>
          <Tiket {...item}/>
        </div>
      )
    })
  )
}

export default TiketList