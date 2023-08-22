import React from "react";
import EODefaultProfile from "../assets/iconBuilding.png";
import UserDefaultProfile from "../assets/iconProfile.png";

const DataCard = ({ nama, email, imageUrl = null, isUser }) => {
  return (
    <div className="flex flex-row justify-between items-center bg-white w-full rounded-md py-4 px-4 shadow-md">
      <div className="flex flex-row justify-center items-center gap-4">
        <img
          src={
            imageUrl === null
              ? isUser
                ? UserDefaultProfile
                : EODefaultProfile
              : imageUrl
          }
          alt="building"
          className="w-[40px]"
        />
        <div className="flex flex-col justify-center items-start text-[14px]">
          <p>Nama : {nama}</p>
          <p>Email : {email}</p>
        </div>
      </div>
    </div>
  );
};

export default DataCard;
