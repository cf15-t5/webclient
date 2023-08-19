import React, { useState } from "react";
import RegisterImage from "../assets/imgHomepage.png";
import EOLogoRegister from "../assets/eoRegisterWaiting.png";

const EORegister = () => {
  const [data, setData] = useState({
    namaPerusahaan: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [isRequestSent, setIsRequestSent] = useState(false);

  const submitRegister = async (e) => {
    e.preventDefault();
    setIsRequestSent(true);
    console.log(data);
  };
  return (
    <div className="flex flex-col sm:flex-row justify-center items-start w-full min-h-screen bg-white font-sans">
      <div className="hidden sm:block w-[50%] max-w-[600px] h-screen">
        <img src={RegisterImage} className="h-full object-cover" />
      </div>
      <div className="flex flex-col items-center justify-center w-full sm:w-[50%] p-5 mt-10">
        <p className="font-bold text-[24px] mb-5">Pengajuan Permohonan</p>
        {isRequestSent ? (
          <div>
            <p className="w-full text-center">
              Terima kasih atas ketertarikan Anda untuk bergabung bersama kami
              sebagai mitra SeTiket Kami dengan senang hati menyambut Anda dan
              senang membantu Anda mempromosikan produk Anda yang luar biasa
              kepada pengguna kami.
            </p>
            <button className="text-[14px] w-full flex flex-row justify-center items-center gap-2 p-2 bg-primary-100 rounded-md mt-5">
              <img src={EOLogoRegister} className="w-[28px] h-auto" />
              Pengajuan Sedang Diproses
            </button>
          </div>
        ) : (
          <form onSubmit={submitRegister} className="w-full">
            <div className="space-y-3">
              <input
                type="text"
                placeholder="Nama Perusahaan"
                className="w-full p-2.5 rounded-lg bg-slate-100"
                value={data.namaPerusahaan}
                onChange={(e) => {
                  setData({ ...data, namaPerusahaan: e.target.value });
                }}
              />
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
                className="w-full text-center bg-primary-500 rounded-md text-white py-2 px-6"
              >
                Ajukan
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};

export default EORegister;
