import React, { useEffect, useState } from 'react'
import axios from '../../api/axios'
import { toast } from 'react-hot-toast'

function Categories() {
  const [categories,setCategories] = useState([])
  const [show , setShow] = useState(false)
  useEffect(()=>{
    axios
    .get('/categories/')
    .then((res)=>{
      console.log(res.data)
      setCategories(res.data.data)
    })
    .catch((err)=>{
      console.log(err.response)
    })
  },[])

  function deleteCategory(id){
    axios
    .delete(`/categories/${id}/delete`)
    .then(()=>{
      toast.success("Berhasil Dihapus")
    })
    .catch((err)=>{
      toast.error(err.response.data)
    })
  }


  return (
    <section className="p-3 mx-5 relative">
      <h5 className="text-xl border-b-2 border-gray-300">Kategori</h5>
      <div className='mt-5 md:mx-20 rounded-xl flex flex-col gap-4'>

        <div onClick={()=>setShow(true)} className="text-white w-full rounded-md py-3 px-4 hover:bg-blue-900 cursor-pointer bg-primary-500">
          <p className='font-bold'>+ Tambah Kategori</p>
        </div>


        {show && (
          <div className="fixed z-20 mt-24 inset-0 flex items-start justify-center backdrop-filter backdrop-blur-sm">
            <div className="bg-white p-5 rounded-md w-[400px]">
              <h2 className=" text-xl font-semibold mb-4">Tambah Kategori</h2>
              <input className='input-field' placeholder='Nama Kategori'/>
              <div className=' mt-4 text-end'>
                <button className="btn-primary py-1 px-3">Tambah</button>
                <button onClick={() => setShow(false)} className="bg-transparent text-black ms-2 py-1 px-3 hover:bg-gray-300 rounded-lg">Batal</button>
              </div>
            </div>
          </div>
        )}

        {categories.map((category)=>{
          return(
            <div key={category.category_id} className="flex flex-row justify-between items-center align-middle bg-white w-full rounded-md py-3 px-4">
              <p className='font-bold'>{category.name}</p>
              <div className='flex gap-2 items-center justify-center'>
                <button className="hover:scale-105 hover:text-white active:scale-95 transition-all py-1 px-4 text-xs bg-yellow-500 text-black btn-primary">
                  Edit
                </button>
                <button onClick={()=>deleteCategory(category.category_id)} className="hover:scale-105 active:scale-95 transition-all py-1 px-4 text-xs bg-red-400 btn-primary">
                  Hapus
                </button>
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}

export default Categories