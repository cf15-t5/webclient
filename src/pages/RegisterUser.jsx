import { useState } from 'react'
import axios from '../api/axios';

function RegisterUser() {
  const [loading,setLoading] = useState(false)
  const Register= async (e)=>{
    e.preventDefault();
    setLoading(true)
    axios.post("/auth/register",{
      name:"test2",
      email:"test2@gmail.com",
      password:"password",
      role:"ADMIN"
    })
    .then((res)=>console.log(res.data))
    .catch((err)=>{
      console.log(err.response.data)
    })
    .finally(()=>{setLoading(false)})
  }
  return (
    <div>
      RegisterUser
      <button onClick={Register} class="text-white bg-blue-400 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2">{loading?"LOADING..":"SUBMIT"}</button>
    </div>
  )
}

export default RegisterUser 