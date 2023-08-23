import axios from 'axios'
import { useEffect, useState } from 'react'

export function ProvinceData() {
  const [provinces,setProvinces] = useState([])
  useEffect(()=>{
    axios
    .get('https://www.emsifa.com/api-wilayah-indonesia/api/provinces.json')
    .then((res)=>{
      setProvinces(res.data)
    })
    .catch((err)=>console.log(err.response))
  },[])

  return provinces
}

export function CityData(idProv) {
  const [city,setCity] = useState([])
  useEffect(()=>{
    if(idProv){
      axios
      .get(`https://www.emsifa.com/api-wilayah-indonesia/api/regencies/${idProv}.json`)
      .then((res)=>{
        setCity(res.data)
      })
      .catch((err)=>console.log(err.response))
    }else setCity([])
  },[idProv])
  return city
};

export function SubdistrictData(idCity) {
  const [subdistrict,setSubdistrict] = useState([])
  useEffect(()=>{
    if(idCity){
      axios
      .get(`https://www.emsifa.com/api-wilayah-indonesia/api/districts/${idCity}.json`)
      .then((res)=>{
        setSubdistrict(res.data)
      })
      .catch((err)=>console.log(err.response))
    }else setSubdistrict([])
  },[idCity])
  return subdistrict
};

