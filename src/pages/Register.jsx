import React, { useState } from "react";
import RegisterImage from "../assets/imgHomepage.png";
import EOLogoRegister from "../assets/eoRegister.png";
import { NavLink } from "react-router-dom";

const Register = () => {
  const [data, setData] = useState({
    namaLengkap: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const passwordIsSame = (password,confPassword) => {
    if(password==confPassword) return true
    return false
  }

  const submitRegister = async (e) => {
    e.preventDefault();
    if(passwordIsSame(data.password,data.confirmPassword)){
      console.log(data);
    }else{
      console.log("failed")
    }
  };
  return (
    <div className="flex flex-col sm:flex-row justify-center items-start w-full min-h-screen bg-white font-sans">
      <div className="hidden sm:block w-[50%] max-w-[600px] bg-black h-screen">
        <img src={RegisterImage} className="h-full object-cover" alt="registerImage"/>
      </div>
      <div className="flex flex-col flex-grow items-center justify-center w-full sm:w-[50%] p-5 px-20 ">
        <form onSubmit={submitRegister} className="w-full">
          <p className="font-bold text-[24px] pb-5">Daftar</p>
          <div className="space-y-3">
            <label 
              for="fullName" 
              class="block text-sm font-medium">
                Nama Lenggkap
            </label>
            <input
              id="fullName"
              type="text"
              placeholder="Nama Lengkap"
              className="w-full p-2.5 rounded-lg bg-slate-100"
              value={data.namaLengkap}
              onChange={(e) => {
                setData({ ...data, namaLengkap: e.target.value });
              }}
              required
            />
            <label 
              for="email" 
              class="block text-sm font-medium">
                Email
            </label>
            <input
              type="email"
              placeholder="Email"
              className="w-full p-2.5 rounded-lg bg-slate-100"
              value={data.email}
              onChange={(e) => {
                setData({ ...data, email: e.target.value });
              }}
              required
            />
            <label 
              for="password" 
              class="block text-sm font-medium">
                Password
            </label>
            <input
              type="password"
              placeholder="Password"
              className="w-full p-2.5 rounded-lg bg-slate-100"
              value={data.password}
              onChange={(e) => {
                setData({ ...data, password: e.target.value });
              }}
            />
            <label 
              for="password" 
              class="block text-sm font-medium">
                Confirm Password
            </label>
            <input
              type="password"
              placeholder="Confirm Password"
              className="w-full p-2.5 rounded-lg bg-slate-100"
              value={data.confirmPassword}
              onChange={(e) => {
                setData({ ...data, confirmPassword: e.target.value });
              }}
            />
            <button
              type="submit"
              className="w-full btn-primary"
            >
              Daftar
            </button>
            <p>
              Sudah punya akun?{" "}
              <NavLink className="text-primary-500 font-semibold" to="/login">
                Masuk
              </NavLink>
            </p>
          </div>
          <NavLink to={'/eo-register'} className="text-[14px] w-full flex flex-row justify-center items-center gap-2 p-2 bg-primary-100 rounded-md text-primary-500 mt-5 hover:bg-slate-100">
            <img src={EOLogoRegister} className="w-[28px] h-auto" />
            Klik untuk Pendaftaran sebagai Event Organizer
          </NavLink>
        </form>
      </div>
    </div>
  );
};

export default Register;
