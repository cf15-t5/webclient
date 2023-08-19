import React, { useState } from "react";
import LoginImage from "../assets/imgHomepage.png";
import EOLogoRegister from "../assets/eoRegister.png";

const Login = () => {
  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const submitLogin = async (e) => {
    e.preventDefault();
    console.log(data);
  };
  return (
    <div className="flex flex-col sm:flex-row justify-center items-center w-full min-h-screen bg-white font-sans">
      <div className="hidden sm:block w-[50%] max-w-[600px] h-screen">
        <img src={LoginImage} className="h-full object-cover" />
      </div>
      <div className="flex flex-col items-center justify-center w-full sm:w-[50%] p-5">
        <form onSubmit={submitLogin} className="w-full">
          <p className="font-bold text-[24px] mb-5">Masuk</p>
          <div className="space-y-3">
            <input
              type="email"
              placeholder="Email"
              className="w-full p-2.5 rounded-lg bg-slate-100"
              value={data.email}
              onChange={(e) => {
                setData({ ...data, email: e.target.value });
              }}
            />
            <input
              type="password"
              placeholder="Password"
              className="w-full p-2.5 rounded-lg bg-slate-100"
              value={data.password}
              onChange={(e) => {
                setData({ ...data, password: e.target.value });
              }}
            />
            <button
              type="submit"
              className="w-full text-center bg-primary-500 rounded-md text-white py-2 px-6"
            >
              Masuk
            </button>
            <p>
              Belum punya akun?{" "}
              <a className="text-primary-500" href="/register">
                Daftar
              </a>
            </p>
          </div>
          <button className="text-[14px] w-full flex flex-row justify-center items-center gap-2 p-2 bg-primary-100 rounded-md text-primary-500 mt-20">
            <img src={EOLogoRegister} className="w-[28px] h-auto" />
            Klik untuk Pendaftaran sebagai Event Organizer
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
