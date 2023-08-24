import React, { useEffect, useState } from 'react'
import axios from '../../api/axios'
import { toast } from 'react-hot-toast'
import ModalsAdd from '../../components/ModalsAdd'

function Categories() {
  const [categories,setCategories] = useState([])
  const [value,setValue] = useState('')
  const [showAdd , setShowAdd] = useState(false)
  const [showUpdate , setShowUpdate] = useState(false)
  const [selectedCategory, setSelectedCategory] = useState(null);

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
    .then(()=>{
      window.location.reload()
    })
    .catch((err)=>{
      toast.error(err.response.data)
    })
  }

  function createCategory(e){
    e.preventDefault()
    console.log("cek")
    axios
    .post(`/categories/`,{name:value})
    .then(()=>{
      toast.success("Berhasil Ditambahkan")
      window.location.reload()
    })
    .catch((err)=>{
      console.log(err.response)
      toast.error(err.response.data)
    })
  }
  
  function setUpdateCategory(data){
    setSelectedCategory(data);
    setShowUpdate(true);
  }
  
  function updateCategory(e){
    e.preventDefault()
    axios
    .put(`/categories/${selectedCategory.category_id}`,{name:value})
    .then((res)=>{
      toast.success("Berhasil DiUpdate")
      window.location.reload()
    })
    .catch((err)=>{
      console.log(err)
    })
  }

  return (
    <section className="p-3 mx-5 relative">
      <h5 className="text-xl border-b-2 border-gray-300">Kategori</h5>
      <div className='mt-5 md:mx-20 rounded-xl flex flex-col gap-4'>
        <div onClick={()=>setShowAdd(true)} className="text-white w-full rounded-md py-3 px-4 hover:bg-blue-900 cursor-pointer bg-primary-500">
          <p className='font-bold'>+ Tambah Kategori</p>
        </div>
        {showAdd && (
          <ModalsAdd
            title="Tambah Kategori"
            onSubmit={createCategory}
            setShow={setShowAdd}
            setValue={setValue}
          />
        )}
        {categories.map((category)=>{
          return(
            <div key={category.category_id} className="flex flex-row justify-between items-center align-middle bg-white w-full rounded-md py-3 px-4">
              <p className='font-bold'>{category.name}</p>
              <div className='flex gap-2 items-center justify-center'>
                <button onClick={()=>setUpdateCategory(category)}  className="hover:scale-105 hover:text-white active:scale-95 transition-all py-1 px-4 text-xs bg-yellow-500 text-black btn-primary">
                  Edit
                </button>
                <button onClick={()=>deleteCategory(category.category_id)} className="hover:scale-105 active:scale-95 transition-all py-1 px-4 text-xs bg-red-400 btn-primary">
                  Hapus
                </button>
              </div>
            </div>
          )
        })}
        {showUpdate && (
          <ModalsAdd
            title="Edit Category"
            onSubmit={updateCategory}
            value={selectedCategory.name}
            setValue={setValue}
            setShow={setShowUpdate}
            id={selectedCategory.category_id}
          />
        )}
      </div>
    </section>
  )
}

export default Categories