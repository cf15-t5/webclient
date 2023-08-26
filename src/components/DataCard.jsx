import React from "react";
import { Link } from "react-router-dom";

const DataCard = ({ name, email, role, user_id }) => {
  return (
    <Link
      to={`/data/${user_id}`}
      className="flex flex-row justify-between items-center bg-white w-full rounded-md py-4 px-4 shadow-md"
    >
      <div className="flex flex-row justify-center items-center gap-4">
        <img
          src={role === "USER" ? "/icons/iconProfile.png" : '/icons/building-logo.png'}
          alt="building"
          className="w-[40px]"
        />
        <div className="flex flex-col justify-center items-start text-[14px]">
          <p>Nama : {name}</p>
          <p>Email : {email}</p>
        </div>
      </div>
    </Link>
  );
};

export default DataCard;
