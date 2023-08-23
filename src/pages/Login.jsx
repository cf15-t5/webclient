import React, { useState } from "react";
import LoginImage from "../assets/imgHomepage.png";
import EOLogoRegister from "../assets/eoRegister.png";
import { NavLink } from "react-router-dom";
import axios from "../api/axios";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate()
  const [data, setData] = useState({
    email: "",
    password: ""
  });

  const [loading,setLoading] = useState(false)
  const Login = async (e)=>{
    e.preventDefault();
    setLoading(true)
    axios.post("/auth/login",data)
    .then((res) => {
      localStorage.setItem("SE_TIKET", res.data.data.token);
      toast.success("Berhasil Login");
      navigate('/')
      window.location.reload()
    })
    .catch((err)=>{
      console.log(err.response)
      toast.error("Gagal Masuk")
    })
    .finally(()=>{setLoading(false)})
  }

  return (
    <div className="flex flex-col sm:flex-row justify-center items-start w-full min-h-screen bg-white">
      <div className="hidden sm:block w-[50%] max-w-[600px] h-screen">
        <img
          src={LoginImage}
          className="h-full object-cover"
          alt="loginImage"
        />
      </div>
      <div className="flex flex-col flex-grow items-center justify-center w-full sm:w-[50%] p-5 px-20">
        <form onSubmit={Login} className="w-full">
          <p className="font-bold text-[24px] mb-5">Masuk</p>
          <div className="space-y-3">
            <label for="email" className="block text-sm font-medium">
              Email
            </label>
            <input
              id="email"
              type="email"
              placeholder="Email"
              className="w-full p-2.5 rounded-lg bg-slate-100 focus:border-blue-300"
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
              className="w-full p-2.5 rounded-lg bg-slate-100"
              value={data.password}
              onChange={(e) => {
                setData({ ...data, password: e.target.value });
              }}
              required
            />
            <button type="submit" className="w-full btn-primary">
              {loading ? "Loading..." : "Masuk"}
            </button>
            <p>
              Belum punya akun?{" "}
              <NavLink
                to="/register"
                className="text-primary-500 font-semibold"
              >
                Daftar
              </NavLink>
            </p>
          </div>
          <NavLink
            to={"/eo-register"}
            className="text-[14px] w-full flex flex-row justify-center items-center gap-2 p-2 bg-primary-100 rounded-md text-primary-500 mt-20 hover:bg-slate-100"
          >
            <img
              src={EOLogoRegister}
              className="w-[28px] h-auto"
              alt="iconEORegister"
            />
            Klik untuk Pendaftaran sebagai Event Organizer
          </NavLink>
        </form>
      </div>
    </div>
  );
};

export default Login;
