import React,{ useState } from 'react'
import axios from '../../api/axios';
import { toast } from 'react-hot-toast';

function FormRegisterEO({setIsRequestSent}) {

  const [loading,setLoading] = useState(false)
  const [data, setData] = useState({
    namaPerusahaan: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  
  async function Register(e){
    e.preventDefault();
    setLoading(true);
    if(data.password!==data.confirmPassword){
      toast.error("Password tidak sama")
      setLoading(false)
      return
    }
    axios
      .post("/auth/register",{
        name:data.namaPerusahaan,
        email:data.email,
        password:data.password,
        role:"EVENT_ORGANIZER"
      })
      .then((res) => console.log(res.data))
      .then(()=>toast.success("Permintaan berhasil diajukan"))
      .then(()=>setIsRequestSent(true))
      .catch((err) => {
        console.log(err.response);
        if(!Array.isArray(err.response.data.data)) return toast.error(err.response.data.data)
        toast.error("Something Wrong")
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <form onSubmit={Register} className="w-full ">
      <div className="space-y-3">
        <label for="companyName" className="block text-sm font-medium">
          Nama Perusahaan
        </label>
        <input
          id="companyName"
          type="text"
          placeholder="Nama Perusahaan"
          className="input-field"
          value={data.namaPerusahaan}
          onChange={(e) => {
            setData({ ...data, namaPerusahaan: e.target.value });
          }}
          required
        />
        <label for="email" className="block text-sm font-medium">
          Email
        </label>
        <input
          id="email"
          type="email"
          placeholder="Email"
          className="input-field"
          value={data.email}
          onChange={(e) => {
            setData({ ...data, email: e.target.value });
          }}
          required
        />
        <label for="password" className="block text-sm font-medium">
          Password
        </label>
        <input
          id="password"
          type="password"
          placeholder="Password"
          minLength={5}
          className="input-field"
          value={data.password}
          onChange={(e) => {
            setData({ ...data, password: e.target.value });
          }}
          required
        />
        <label for="confPassword" className="block text-sm font-medium">
          Confirm Password
        </label>
        <input
          id="confPassword"
          type="password"
          placeholder="Confirm Password"
          className="input-field"
          minLength={5}
          value={data.confirmPassword}
          onChange={(e) => {
            setData({ ...data, confirmPassword: e.target.value });
          }}
          required
        />
        <button type="submit" className="w-full btn-primary ">
          {loading?"Loading...":"Ajukan"}
        </button>
      </div>
    </form>
  )
}

export default FormRegisterEO 