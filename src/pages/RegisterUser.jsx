import { useState } from 'react'
import { Button } from 'react-bootstrap';
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
      <Button onClick={Register}>{loading?"LOADING..":"SUBMIT"}</Button>
    </div>
  )
}

export default RegisterUser 