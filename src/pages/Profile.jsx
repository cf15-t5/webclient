import React, { useEffect, useState } from 'react'
import Wallet from '../components/Wallet'
import DetailAkun from '../components/DetailAkun'
import axios from '../api/axios'
import { useNavigate } from 'react-router-dom'

function Profile() {
  const [data,setData] = useState([])
  const navigate = useNavigate()
  
  useEffect(()=>{
    axios
    .get('/auth/me')
    .then((res)=>{
      setData(res.data.data)
    })
    .catch((err)=>{
      console.log(err.data)
    })
  },[])
  
  function signOut(){
    localStorage.removeItem("SE_TIKET");
    navigate('/')
    window.location.reload()
  }

  return (
    <section className='p-3 mx-5'>
      <h5>Detail Akun</h5>
      <div className="grid grid-cols-3 gap-4 md:justify-start">
        <div className='col-span-3 md:col-span-1'>
          <Wallet data={data}/>
        </div>
        <div className='col-span-3 md:col-span-2 lg:col-span-1 mt-3 md:mt-0'>
            <DetailAkun data={data}/>
          <button onClick={()=>signOut()} className='mt-3 bg-white hover:bg-gray-200 rounded-xl py-2 w-full text-start'>
            <img className='inline ms-3' src='/icons/iconLogout.png' alt='iconLogout'/>
            <span className='ms-4'>Log Out</span>
          </button>
        </div>
      </div>
    </section>
    
  )
}

export default Profile  