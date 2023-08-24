import React from 'react'

function ModalsAdd({title,onSubmit,setShow,value,setValue,id}) {
  return (
    <div className="fixed z-20 mt-24 inset-0 flex items-start justify-center backdrop-filter backdrop-blur-sm">
      <div className="bg-white p-5 rounded-md w-[400px]">
      <h2 className=" text-xl font-semibold mb-4">{title}</h2>
      <form onSubmit={onSubmit}>
        <input className='input-field' onChange={(e)=>setValue(e.target.value)} placeholder={value}/>
        <div className=' mt-4 text-end'>
          <button type='submit' className="btn-primary py-1 px-3">Simpan</button>
          <button onClick={() => setShow(false)} className="bg-transparent text-black ms-2 py-1 px-3 hover:bg-gray-300 rounded-lg">Batal</button>
        </div>
      </form>
      </div>
    </div>
  )
}

export default ModalsAdd