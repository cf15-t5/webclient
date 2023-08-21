import React from 'react'
import Wallet from '../components/Wallet'
import DetailAkun from '../components/DetailAkun'
import iconLogout from '../assets/iconLogout.png'
import useAuth from '../context/AuthContext'
import DetailAkunEO from '../components/DetailAkunEO'
function Profile() {
  const { getData,signOut} = useAuth()
  const userLogin = getData()
  console.log(userLogin)
  return (
    <section className='my-3 mx-5'>
      <h5>Detail Akun</h5>
      <div className="grid grid-cols-3 gap-4 md:justify-start">
        <div className='col-span-3 md:col-span-1'>
          <Wallet/>
        </div>
        <div className='col-span-3 md:col-span-1 mt-3 md:mt-0'>
          {userLogin?.role==='EVENT_ORGANIZER'?
            <DetailAkunEO name={userLogin?.name} email={userLogin?.email}/>:
            <DetailAkun name={userLogin?.name} email={userLogin?.email}/>
          }
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