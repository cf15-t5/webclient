import React from "react";
import { toast } from "react-hot-toast";

const EORequestCard = ({ eventName, email, dateOfRequest, approvalStatus }) => {
  const handleApproveButton = () => {
    // do something here
    toast.success("Approved!");
  };

  const handleRejectButton = () => {
    // do something here
    toast.success("Rejected!");
  };
  return (
    <div className="flex flex-row justify-between items-center bg-white w-full rounded-md py-2 px-4 shadow-md">
      <div className="flex flex-row justify-center items-center gap-4">
        <img
          src="./icons/building-logo.png"
          alt="building"
          className="w-[40px]"
        />
        <div className="flex flex-col justify-center items-start text-[14px]">
          <p>Nama Perusahaan : {eventName}</p>
          <p>Email : {email}</p>
          <p>Tanggal Pengajuan : {dateOfRequest}</p>
        </div>
      </div>
      {approvalStatus === null ? (
        <div className="flex flex-row justify-center items-center gap-2">
          <button
            className="hover:scale-105 active:scale-95 transition-all"
            onClick={handleApproveButton}
          >
            <img
              src="./icons/approve-icon.png"
              alt="Approve"
              className="w-[30px]"
            />
          </button>
          <button
            className="hover:scale-105 active:scale-95 transition-all"
            onClick={handleRejectButton}
          >
            <img
              src="./icons/reject-icon.png"
              alt="Approve"
              className="w-[30px]"
            />
          </button>
        </div>
      ) : approvalStatus ? (
        <p className="text-green-400 text-[14px] font-bold">Disetujui</p>
      ) : (
        <p className="text-red-400 text-[14px] font-bold">Ditolak</p>
      )}
    </div>
  );
};

export default EORequestCard;
