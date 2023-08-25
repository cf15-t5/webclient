import React from 'react'
import TransactionList from '../Lists/TransactionList'

function HistoryTransaction() {
  return (
    <section className='p-3 mx-5'>
      <h5 className='text-xl border-b-2 border-gray-300'>Riwayat Transaksi</h5>
      <div className='lg:mx-48 my-5'>
        <TransactionList/>
      </div>
    </section>
  )
}

export default HistoryTransaction