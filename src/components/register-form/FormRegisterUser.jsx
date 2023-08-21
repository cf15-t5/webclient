import React,{useState} from 'react'
import EOLogoRegister from "../../assets/eoRegister.png";
import { NavLink } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import { toast } from "react-hot-toast";
import axios from "../../api/axios";

function FormRegisterUser() {
  const [data,setData] = useState({
    name:"",
    email:"",
    password:"",
    confirmPassword:"",
  });

  const navigate = useNavigate()
  const [loading, setLoading] = useState(false);

  const Register = async (e) => {
    e.preventDefault();
    setLoading(true);
    if(data.password!==data.confirmPassword){
      toast.error("Password tidak sama")
      setLoading(false)
      return
    }
    axios
      .post("/auth/register",{
        name:data.name,
        email:data.email,
        password:data.password,
        role:"USER"
      })
      .then(()=>toast.success("Berhasil Buat Akun"))
      .then(()=>navigate('/login'))
      .catch((err) => {
        if(!Array.isArray(err.response.data.data)) return toast.error(err.response.data.data)
        toast.error("Something Wrong")
      })
      .finally(() => {
        setLoading(false);
      });
  };
  return (
    <form onSubmit={Register} className="w-full">
      <p className="font-bold text-[24px] pb-5">Daftar</p>
      <div className="space-y-3">
        <div>
          <label for="fullName" className="block mb-2 text-sm font-medium">
            Nama Lengkap
          </label>
          <input
            id="fullName"
            type="text"
            placeholder="Nama Lengkap"
            className="input-field"
            value={data.namaLengkap}
            onChange={(e) => {
              setData({ ...data, name: e.target.value });
            }}
            required
          />
        </div>
        <div>
          <label for="email" className="block text-sm font-medium">
            Email
          </label>
          <input
            type="email"
            placeholder="Email"
            className="input-field"
            value={data.email}
            onChange={(e) => {
              setData({...data,email:e.target.value});
            }}
            required
          />
        </div>
        <div>
          <label for="password" className="block text-sm font-medium">
            Password
          </label>
          <input
            type="password"
            placeholder="Password"
            className="input-field"
            value={data.password}
            minLength={5}
            onChange={(e) => {
              setData({ ...data, password: e.target.value });
            }}
          />
        </div>
        <div>
          <label for="password" className="block text-sm font-medium">
            Confirm Password
          </label>
          <input
            type="password"
            placeholder="Confirm Password"
            className="input-field"
            value={data.confirmPassword}
            minLength={5}
            onChange={(e) => {
              setData({ ...data, confirmPassword: e.target.value });
            }}
          />
        </div>
        <button type="submit" className="w-full btn-primary">
          {loading ? "Loading..." : "Daftar"}
        </button>
        <p>
          Sudah punya akun?{" "}
          <NavLink className="text-primary-500 font-semibold" to="/login">
            Masuk
          </NavLink>
        </p>
      </div>
      <NavLink
        to={"/eo-register"}
        className="text-[14px] w-full flex flex-row justify-center items-center gap-2 p-2 bg-primary-100 rounded-md text-primary-500 mt-5 hover:bg-blue-100"
      >
        <img
          src={EOLogoRegister}
          className="w-[28px] h-auto"
          alt="iconEO"
        />
        Klik untuk Pendaftaran sebagai Event Organizer
      </NavLink>
    </form>
  )
}
export default FormRegisterUser