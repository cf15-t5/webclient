import React from "react";
import RegisterImage from "../assets/imgHomepage.png";
import FormRegisterUser from "../components/register-form/FormRegisterUser";


const Register = () => {
  return (
    <div className="flex flex-col sm:flex-row justify-center items-start w-full min-h-screen bg-white">
      <div className="hidden sm:block w-[50%] max-w-[600px] bg-black h-screen">
        <img
          src={RegisterImage}
          className="h-full object-cover"
          alt="registerImage"
        />
      </div>
      <div className="flex flex-col flex-grow items-center justify-center w-full sm:w-[50%] p-5 px-20 ">
        <FormRegisterUser/>
      </div>
    </div>
  );
};

export default Register;
