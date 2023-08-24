import React from 'react'
import { dateToDDMonthYYYY, formatToIDRCurrency } from '../utils/stringProcess'

function ModalsTicketInfo({setShow,data}) {
  return (
    <div className="fixed z-20 inset-0 flex items-center justify-center backdrop-filter backdrop-blur-sm ">
      <div className="bg-white p-5 rounded-md w-[400px] drop-shadow-2xl">
        <h2 className=" text-xl font-semibold mb-4">{data.event.title}</h2>
        <div>
          <table className='my-5'>
            <tr>
              <td>Tanggal Pelaksanaan</td>
              <td>:</td>
              <td>{dateToDDMonthYYYY(data.event.date_of_event)}</td>
            </tr>
            <tr>
              <td>Lokasi</td>
              <td>:</td>
              <td>{data.event.address}</td>
            </tr>
            <tr>
              <td>Nama</td>
              <td>:</td>
              <td>{data.user.name}</td>
            </tr>
            <tr>
              <td>Tanggal Pembelian</td>
              <td>:</td>
              <td>{dateToDDMonthYYYY(data.created_at)}</td>
            </tr>
            <tr>
              <td>Harga</td>
              <td>:</td>
              <td>{formatToIDRCurrency(data.event.price)}</td>
            </tr>
          </table>
          <h2 className='text-center bg-primary-500 p-2 text-white font-bold rounded'>Kode Tiket : {data.ticket_code}</h2>
        </div>
        <div className=' mt-4 text-end'>
          <button onClick={() => setShow(false)} className="btn-primary ms-2 py-1 px-3 rounded-lg">Close</button>
        </div>
      </div>
    </div>
  )
}

export default ModalsTicketInfo