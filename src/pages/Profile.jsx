import React, { useState } from 'react'
import Wallet from '../components/Wallet'
import DetailAkun from '../components/DetailAkun'
import iconLogout from '../assets/iconLogout.png'
import useAuth from '../context/AuthContext'

function Profile() {
  const { signOut} = useAuth()
  return (
    <section className='p-3 mx-5'>
      <h5>Detail Akun</h5>
      <div className="grid grid-cols-3 gap-4 md:justify-start">
        <div className='col-span-3 md:col-span-1'>
          <Wallet/>
        </div>
        <div className='col-span-3 md:col-span-1 mt-3 md:mt-0'>
            <DetailAkun/>
          <button onClick={()=>signOut()} className='mt-3 bg-white hover:bg-gray-200 rounded-xl py-2 w-full text-start'>
            <img className='inline ms-3' src={iconLogout} alt='iconLogout'/>
            <span className='ms-4'>Log Out</span>
          </button>
        </div>
      </div>
    </section>
    
  )
}

export default Profile  