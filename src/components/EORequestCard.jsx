import React, { useState } from "react";
import { toast } from "react-hot-toast";
import axios from "../api/axios";
import { useNavigate } from "react-router-dom";

const EORequestCard = ({ name, email, dateOfRequest, user_id, status }) => {
  const [loadingApprove, setloadingApprove] = useState(false);
  const navigate = useNavigate();

  const handleApproveButton = () => {
    // do something here
    setloadingApprove(true);
    const data = {
      user_id,
      status: "ACTIVE",
    };
    axios
      .post("/auth/verify", data)
      .then(() => {
        toast.success("Berhasil menyetujui");
        navigate(0);
      })
      .catch((err) => {
        toast.error("Proses gagal");
      })
      .finally(setloadingApprove(false));
  };

  const handleRejectButton = () => {
    // do something here
    setloadingApprove(true);
    const data = {
      user_id,
      status: "REJECTED",
    };
    axios
      .post("/auth/verify", data)
      .then(() => {
        toast.success("Berhasil menolak");
        navigate(0);
      })
      .catch((err) => {
        toast.error("Proses gagal");
      })
      .finally(setloadingApprove(false));
  };
  return (
    <div className="flex flex-row justify-between items-center bg-white w-full rounded-md py-2 px-4">
      <div className="flex flex-row justify-center items-center gap-4">
        <img
          src="/icons/building-logo.png"
          alt="building"
          className="w-[40px]"
        />
        <div className="flex flex-col justify-center items-start text-[14px]">
          <p>Nama Perusahaan : {name}</p>
          <p>Email : {email}</p>
          <p>Tanggal Pengajuan : {dateOfRequest}</p>
        </div>
      </div>
      {status === "INACTIVE" ? (
        <div className="flex flex-row justify-center items-center gap-2">
          {loadingApprove ? (
            <div>Loading</div>
          ) : (
            <>
              <button
                className="hover:scale-105 active:scale-95 transition-all"
                onClick={handleApproveButton}
              >
                <img
                  src="/icons/approve-icon.png"
                  alt="Approve"
                  className="w-[30px]"
                />
              </button>
              <button
                className="hover:scale-105 active:scale-95 transition-all"
                onClick={handleRejectButton}
              >
                <img
                  src="/icons/reject-icon.png"
                  alt="Approve"
                  className="w-[30px]"
                />
              </button>
            </>
          )}
        </div>
      ) : status === "ACTIVE" ? (
        <p className="text-green-400 text-[14px] font-bold">Disetujui</p>
      ) : (
        <p className="text-red-400 text-[14px] font-bold">Ditolak</p>
      )}
    </div>
  );
};

export default EORequestCard;
