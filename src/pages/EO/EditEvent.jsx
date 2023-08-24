import React, { useEffect, useState } from "react";
import axios from "../../api/axios";
import IconFileUp from "../../assets/IconFileUp";
import { toast } from "react-hot-toast";
import { sliceAddress } from "../../utils/stringProcess";
import { NavLink, useParams } from "react-router-dom";

function EditEvent() {
  const [loading,setLoading] = useState(false)
  const {id} = useParams()
  
  const [value,setValue] = useState({
    title:"",
    price:"",
    description:"",
    date:"",
    ticket:"",
    poster:"",
    address:"",
    category:""
  })

  useEffect(()=>{
    axios
    .get(`/events/${id}`)
    .then((res)=>{
      setValue({
        title:res.data.data.title,
        price:res.data.data.price,
        description:res.data.data.description,
        ticket:res.data.data.number_of_ticket,
        address:res.data.data.address,
        category:res.data.data.category.name
      })
    })
    .catch((err)=>console.log(err.response))
  },[id])
  
  const handleChange = (field, value) =>{
    setValue((prevData) => ({
      ...prevData,
      [field]: value
    }));
  }

  const handleAddressChange = (field,value) => {
    setValue(prevData => ({
      ...prevData,
      address: {
        ...prevData.address,
        [field]: value
      }
    }));
  };

  
  console.log(value)

  async function submitUpdateEvent(e){
    e.preventDefault()
    setLoading(true)
    const formData = new FormData()
    formData.append("title",value.title)
    // formData.append("poster",value.poster)
    formData.append("price",value.price)
    formData.append("description",value.description)
    formData.append("number_of_ticket",value.ticket)
    axios
      .put(`/events/${id}`,formData)
      .then((res)=>console.log(res.data))
      .then(()=>toast.success("Event Berhasil Diupdate"))
      .catch((err)=>{
        console.log(err.response.data)
        toast.error("Gagal Membuat Event")
      })
      .finally(()=>setLoading(false))
  }

  return (
    <section className="p-3 mx-5">
      <h5 className="text-xl border-b-2 border-gray-300">Edit Event</h5>
      <div className="bg-white mt-5 md:mx-20 rounded-xl">
        <form onSubmit={submitUpdateEvent} className=" p-10 md:px-20 flex flex-col">
          <div className="space-y-5">
            <div className="items-center justify-center w-full">
              <label
                for="dropzone-file"
                className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer hover:bg-gray-300 bg-gray-100 "
              >
                <div className="flex flex-col items-center justify-center pt-5 pb-6">
                  <IconFileUp/>
                  <p className="mb-2 text-sm text-gray-500">
                    <span className="font-semibold">Click to Upload</span>
                  </p>
                  <p className="text-xs text-gray-500">
                    SVG, PNG, JPG 
                  </p>
                </div>
                <input 
                  id="dropzone-file" 
                  type="file" 
                  className="hidden" 
                  onChange={(e)=>{handleChange("poster", e.target.files[0])}} 
                />
              </label>
            </div>
            <div>
              <label for="eventName" className="block mb-2 text-sm font-medium">
                Nama Event
              </label>
              <input
                id="eventName"
                type="text"
                placeholder={"Nama Event"}
                value={value.title}
                className="input-field"
                onChange={(e)=>handleChange("title",e.target.value)}
              />
            </div>
            <div>
              <label for="category" className="block mb-2 text-sm font-medium">
                Pilih Kategori
              </label>
              <input
                id="category"
                type="text"
                placeholder="Kategori"
                className="input-field"
                value={value.category}
                required
                readOnly
              />
              {/* <select
                id="category"
                className="input-field"
                onChange={(e)=>{handleChange("category",e.target.value)}}
                required
              >
                <option value={null}>Pilih kategori</option>
                {category.map((item)=>{
                  return(
                    <option key={item.category_id} value={item.category_id}>{item.name}</option>
                  )
                })}
              </select> */}
            </div>
            <div>
              <label for="province" className="block mb-2 text-sm font-medium">
                Provinsi
              </label>
              <input
                id="province"
                type="text"
                placeholder="Province"
                className="input-field"
                value={sliceAddress(value.address)?.prov}
                readOnly
                required
              />
              {/* <select
                id="province"
                className="input-field"
                onChange={(e)=>handleAddressChange("idProvince",e.target.value)}
                required
              >
                <option value={""}>Pilih Provinsi</option>
                {ProvinceData().map((prov)=>{
                  return(
                    <option key={prov.id} value={prov.id}>{prov.name}</option>
                  )
                })}
              </select> */}
            </div>
            <div>
              <label for="city" className="block mb-2 text-sm font-medium">
                Kota
              </label>
              <input
                id="city"
                type="text"
                placeholder="City"
                className="input-field"
                value={sliceAddress(value.address)?.city}
                readOnly
                required
              />
              {/* <select
                id="city"
                className="input-field"
                onChange={(e)=>{handleAddressChange("idCity",e.target.value)}}
                required
              >
                <option value={null}>Pilih kota</option>
                {CityData(value.address['idProvince']).map((city)=>{
                  return (
                    <option key={city.id} value={city.id}>{city.name}</option>
                  )
                })}
              </select> */}
            </div>
            <div>
              <label for="subdistrict" className="block mb-2 text-sm font-medium">
                Kecamatan
              </label>
              <input
                id="subdistrict"
                type="text"
                placeholder="Kecamatan"
                className="input-field"
                value={sliceAddress(value.address)?.sub}
                readOnly
                required
              />
              {/* <select
                id="subdistrict"
                className="input-field"
                onChange={(e)=>{handleAddressChange("idSub",e.target.value)}}
                required
              >
                <option value={null}>Pilih kecamatan</option>
                {SubdistrictData().map((sub)=>{
                  return (
                    <option key={sub.id} value={sub.id}>{sub.name}</option>
                  )
                })}
              </select> */}
            </div>
            <div>
              <label for="detailAddress" className="block mb-2 text-sm font-medium">
                Alamat Detail
              </label>
              <input
                id="detailAddress"
                type="text"
                placeholder="Alamat Detail"
                className="input-field"
                value={sliceAddress(value.address)?.detail}
                onChange={(e)=>{handleAddressChange("detail",e.target.value)}}
                readOnly
                required
              />
            </div>
            <div>
              <label for="eventDate" className="block mb-2 text-sm font-medium">
                Tanggal
              </label>
              <input
                id="eventDate"
                type="date"
                placeholder="Tanggal Event"
                className="input-field"
                onChange={(e)=>{handleChange("date",e.target.value)}}
                readOnly
                required
              />
            </div>
            <div>
              <label for="eventPrice" className="block mb-2 text-sm font-medium">
                Harga
              </label>
              <input
                id="eventPrive"
                type="number"
                placeholder="Harga"
                className="input-field"
                value={value.price}
                onChange={(e)=>{handleChange("price",e.target.value)}}
                required
              />
            </div>
            <div>
              <label for="ticket" className="block mb-2 text-sm font-medium">
                Jumlah Tiket
              </label>
              <input
                id="ticket"
                type="number"
                placeholder="Jumlah Tiket"
                className="input-field"
                value={value.ticket}
                onChange={(e)=>{handleChange("ticket",e.target.value)}}
                required
              />
            </div>
            <div>
              <label for="description" className="block mb-2 text-sm font-medium">
                Deskirpsi
              </label>
              <textarea 
                id="description" 
                rows="4" 
                className="input-field " 
                placeholder="Deskipsi Event"
                value={value.description}
                onChange={(e)=>{handleChange("description",e.target.value)}}
                required
                />
            </div>
          </div>
          <div className="self-end">
            <button type="submit" className="mt-9 btn-primary">{loading?"Loading..":"Simpan"}</button>
            <NavLink to={`/myEvent/${id}`} type="reset" className="mt-9 ms-1 hover:bg-gray-300 p-2 px-4 border border-black rounded-lg">Batal</NavLink>
          </div>
          
        </form>
      </div>
    </section>
  )
}

export default EditEvent