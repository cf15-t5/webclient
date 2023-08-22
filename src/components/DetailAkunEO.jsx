import React from 'react'
import iconProfile from '../assets/iconBuilding.png'

function DetailAkunEO({name,email}) {
  return (
    <div className='bg-white p-4 rounded-xl flex justify-center flex-col'>
      <div className='self-center'>
        <img src={iconProfile} className='my-4 h-20' alt='iconProfile'/>
      </div>
      <form>
        <div class="mb-6">
          <label for="name" class="block mb-2 text-sm font-medium text-gray-900 ">Nama Perusahaan</label>
          <input type="text" id="name" class="input-field"value={name} required/>
        </div>
        <div class="mb-6">
          <label for="email" class="block mb-2 text-sm font-medium text-gray-900 ">Email</label>
          <input type="email" id="email" class="input-field" value={email} required/>
        </div>
      </form>
      <div className='text-end '>
        <button type="button" class="btn-primary">Simpan</button>
        <button className='py-3 px-4 hover:bg-gray-200 rounded-xl'>Batal</button>
      </div>
    </div>
  )
}

export default DetailAkunEO