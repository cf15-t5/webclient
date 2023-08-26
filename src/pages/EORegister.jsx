import React, { useState } from "react";
import FormRegisterEO from "../components/register-form/FormRegisterEO";

const EORegister = () => {
  const [isRequestSent, setIsRequestSent] = useState(false);

  return (
    <div className="flex flex-col sm:flex-row justify-center items-start w-full min-h-screen bg-white">
      <div className="hidden sm:block w-[50%] max-w-[600px] h-screen">
        <img
          src='/icons/imgHomepage.png'
          className="h-full object-cover"
          alt="imageRegister"
        />
      </div>
      <div className="flex flex-col flex-grow items-center justify-center w-full sm:w-[50%] p-5 px-20 mt-10">
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
              <img
                src="/icons/eoRegisterWaiting.png"
                className="w-[28px] h-auto"
                alt="iconEI"
              />
              Pengajuan Sedang Diproses
            </button>
          </div>
        ) : (
          <FormRegisterEO setIsRequestSent={setIsRequestSent}/>
        )}
      </div>
    </div>
  );
};

export default EORegister;
