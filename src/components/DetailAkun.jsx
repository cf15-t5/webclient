import React from 'react'
import iconProfile from '../assets/iconProfile.png'

function DetailAkun() {
  return (
    <div className='bg-white p-4 rounded-xl flex justify-center flex-col'>
      <div className='self-center'>
        <img src={iconProfile} className='my-4 h-20' alt='iconProfile'/>
      </div>
      <form>
        <div class="mb-6">
          <label for="name" class="block mb-2 text-sm font-medium text-gray-900 ">Nama Lengkap</label>
          <input type="text" id="name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " required/>
        </div>
        <div class="mb-6">
          <label for="email" class="block mb-2 text-sm font-medium text-gray-900 ">Email</label>
          <input type="email" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " required/>
        </div>
      </form>
      <div className='text-end '>
        <button type="button" class="text-white bg-blue-400 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2">Simpan</button>
        <button className='py-3 px-4 hover:bg-gray-200 rounded-xl'>Batal</button>
      </div>
    </div>
  )
}

export default DetailAkun