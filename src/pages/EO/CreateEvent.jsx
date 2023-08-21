import React, { useState } from "react";
import axios from "../../api/axios";

function CreateEvent() {
  const [data,setData] = useState({
    title:"",
    price:"",
    description:"",
    date:"",
    ticket:"",
    poster:"",
    address:"test",
    category:""
  })
  const formattedAddress = `${data.address["detail"]}, ${data.address["sub"]}, ${data.address["city"]}`;
  const formData = new FormData()
  formData.append("title",data.title)
  formData.append("price",data.price)
  formData.append("description",data.description)
  formData.append("date_of_event",data.date)
  formData.append("number_of_ticket",data.ticket)
  formData.append("poster",data.poster)
  formData.append("address","test")
  formData.append("category_id",data.category)

  async function submitCreateEvent(e){
    e.preventDefault()
    // for (const pair of formData.entries()) {
    //   console.log(pair[0], pair[1]);
    // }
    axios
      .post('/events/',formData)
      .then((res)=>console.log(res.data))
      .catch((err)=>err.response.data)
  }

  return (
    <section>
      <h5 className="text-xl border-b-2 border-gray-300">Buat Event</h5>
      <div className="bg-white mt-5 md:mx-20 rounded-xl">
        <form onSubmit={submitCreateEvent} className=" p-10 md:px-20 flex flex-col">
          <div className="space-y-5">
            <div className="hidden items-center justify-center w-full">
              <label
                for="dropzone-file"
                className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer hover:bg-gray-300 bg-gray-100 "
              >
                <div className="flex flex-col items-center justify-center pt-5 pb-6">
                  <svg
                    className="w-8 h-8 mb-4 text-gray-500"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 20 16"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                    />
                  </svg>
                  <p className="mb-2 text-sm text-gray-500">
                    <span className="font-semibold">Click to upload</span> or drag and
                    drop
                  </p>
                  <p className="text-xs text-gray-500">
                    SVG, PNG, JPG or GIF (MAX. 800x400px)
                  </p>
                </div>
                <input 
                  id="dropzone-file" 
                  type="file" 
                  className="hidden" 
                  onChange={(e)=>{setData({...data, poster:e.target.value})}}
                  />
              </label>
            </div>
            <div>
              <label for="poster" className="block mb-2 text-sm font-medium">
                Nama Event
              </label>
              <input
                id="poster"
                type="file"
                placeholder="poster"
                className="input-field"
                onChange={(e)=>{setData({...data, poster:e.target.value})}}
                required
              />
            </div>
            <div>
              <label for="eventName" className="block mb-2 text-sm font-medium">
                Nama Event
              </label>
              <input
                id="eventName"
                type="text"
                placeholder="Nama Event"
                className="input-field"
                onChange={(e)=>{setData({...data, title:e.target.value})}}
                required
              />
            </div>
            <div>
              <label for="category" className="block mb-2 text-sm font-medium">
                Pilih Kategori
              </label>
              <select
                id="category"
                defaultValue={null}
                className="input-field"
                onChange={(e)=>{setData({...data, category:e.target.value})}}
                required
              >
                <option value={null}>Pilih kategori</option>
                <option value="1">United States</option>
              </select>
            </div>
            <div>
              <label for="city" className="block mb-2 text-sm font-medium">
                Kota
              </label>
              <select
                id="city"
                defaultValue={null}
                className="input-field"
                onChange={(e)=>{setData({...data, address:{...data.address,city:e.target.value}})}}
                required
              >
                <option value={null}>Pilih kota</option>
                <option value="US">United States</option>
              </select>
            </div>
            <div>
              <label for="subdistrict" className="block mb-2 text-sm font-medium">
                Kecamatan
              </label>
              <select
                id="subdistrict"
                defaultValue={null}
                className="input-field"
                onChange={(e)=>{setData({...data, address:{...data.address,sub:e.target.value}})}}
                required
              >
                <option value={null}>Pilih kecamatan</option>
                <option value="US">United States</option>
              </select>
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
                onChange={(e)=>{setData({...data, address:{...data.address,detail:e.target.value}})}}
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
                onChange={(e)=>{setData({...data, date:e.target.value})}}
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
                onChange={(e)=>{setData({...data, price:e.target.value})}}
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
                onChange={(e)=>{setData({...data, ticket:e.target.value})}}
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
                onChange={(e)=>{setData({...data, description:e.target.value})}}
                required
                />
            </div>
          </div>
          <div className="self-end">
            <button type="submit" className="mt-9 btn-primary">Buat Event</button>
            <button type="reset" className="mt-9 ms-1 hover:bg-gray-300 p-2 px-4 border border-black rounded-lg">Batal</button>
          </div>
          
        </form>
      </div>
    </section>
  );
}

export default CreateEvent;
