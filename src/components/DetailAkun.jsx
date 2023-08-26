import React, { useEffect, useState } from 'react'
import axios from '../api/axios'
import { toast } from 'react-hot-toast'
import { NavLink } from 'react-router-dom'

function DetailAkun({data}) {
  const [value,setValue] = useState({
    name:"",
    email:"",
    password:"",
  })
  useEffect(()=>{
    if (data) {
      setValue({
        name: data.name || "",
        email: data.email || "",
        password: "",
      });
    }
  },[data])

  const handleChange=(e)=>{
    const {name,value} = e.target
    setValue((prev)=>{
      return {
        ...prev,
        [name]:value
      }
    })
  }
  async function update(e){
    e.preventDefault()
    axios
    .post('/users/update-profile',{
      name:value.name,
      email:value.email,
      password:value.password
    })
    .then(()=>{
      toast.success("Data Berhasil diupdate")
      window.location.reload()
    })
    .catch((err)=>{
      console.log(err.response)
    })
  }
  
  function isCompany(role){
    return role==='EVENT_ORGANIZER';
  }

  return (
    <div className='bg-white p-4 rounded-xl flex justify-center flex-col shadow'>
      <div className='self-center'>
        <img 
          src={isCompany(data.role)?"/icons/building-logo.png":"/icons/iconProfile.png"} 
          className='my-4 h-20' alt='iconProfile'
        />
      </div>
      <form onSubmit={update}>
        <div className="mb-6">
          <label 
            for="name" 
            className="block mb-2 text-sm font-medium text-gray-900 ">
              {isCompany(data.role)?"Nama Perusahaan":"Nama"}
          </label>
          <input 
            type="text" 
            id="name" 
            className="input-field" 
            name='name'
            value={value.name} 
            onChange={handleChange}
            required/>
        </div>
        <div className="mb-6">
          <label 
            for="email" 
            className="block mb-2 text-sm font-medium text-gray-900 ">
              Email
          </label>
          <input 
            type="email" 
            id="email" 
            name='email'
            className="input-field" 
            value={value.email} 
            onChange={handleChange}
            required/>
        </div>
        <div className="mb-6">
          <label 
            for="password" 
            className="block mb-2 text-sm font-medium text-gray-900 ">
              Password
          </label>
          <input 
            type="password" 
            id="password" 
            name='password'
            className="input-field" 
            placeholder='xxxxxxxxx'
            onChange={handleChange}
            required/>
        </div>
        <div className='text-end '>
          <button type="submit" className="btn-primary">Simpan</button>
          <NavLink to={'/'} className='py-3 px-4 hover:bg-gray-200 rounded-xl'>Batal</NavLink>
        </div>
      </form>
      
    </div>
  )
}

export default DetailAkun