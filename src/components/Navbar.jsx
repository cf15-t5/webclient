import { useEffect, useState } from "react";
import { NavLink, Outlet } from "react-router-dom";
import axios from "../api/axios";

function NavigationBar() {
  const [open, setOpen] = useState(false);
  const [userLogin, setUserLogin] = useState();

  const userRole = {
    User: "USER",
    EO: "EVENT_ORGANIZER",
    Admin: "ADMIN",
  };

  useEffect(() => {
    async function getMe(){
      axios
      .get("/auth/me")
      .then((res) => {
        setUserLogin(res.data.data);
      })
      .catch((err) => {
        console.log(err.response);
      });
    }
    getMe()
  }, []);

  const FirstNameUser = userLogin?.name.split(" ")[0];

  const renderAuthButtons = () =>{
    if(!userLogin){
      return (
        <div className="flex">
          <NavLink to={"/login"}>
            <button className="hidden sm:block text-black hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center mr-3">
              Masuk
            </button>
          </NavLink>
          <NavLink to={"/register"}>
            <button className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center mr-3 md:mr-0 ">
              Daftar
            </button>
          </NavLink>
        </div>
      )
    }
    return(
      <NavLink to={"/profile"} className="self-center mr-3">
        <p>Halo, {FirstNameUser}</p>
      </NavLink>
    )
  }

  const renderNavLinks = () =>{
    if (userLogin?.role === userRole.Admin ){
      return(
        <>
          <NavLink
            to="/categories"
            onClick={() => setOpen(false)}
            className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 "
          >
            Kategori
          </NavLink>
          <NavLink
            to="/data"
            onClick={() => setOpen(false)}
            className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 "
          >
            Data
          </NavLink>
          <NavLink
            to="/request"
            onClick={() => setOpen(false)}
            className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 "
          >
            Permintaan
          </NavLink>
        </>
      )
    } else if (userLogin?.role === userRole.EO){
      return (
        <>
          <NavLink
            to="/myEvent"
            onClick={() => setOpen(false)}
            className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 "
          >
            Event Saya
          </NavLink>
          <NavLink
            to="/createEvent"
            onClick={() => setOpen(false)}
            className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 "
          >
            Buat Event
          </NavLink>
        </>
      )
    } else if (userLogin?.role === userRole.User || !userLogin) {
      return (
        <>
          <NavLink
          to="/ticket"
          onClick={() => setOpen(false)}
          className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 "
          >
            Tiket
          </NavLink>
          <NavLink
            to="/historyTransaction"
            onClick={() => setOpen(false)}
            className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0"
          >
            Riwayat Transaksi
          </NavLink>
        </>
      )
    }
  }

  return (
    <>
      <nav className="bg-white sticky w-full z-20 top-0 left-0 border-b border-gray-200 ">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <NavLink to={"/"} className="flex items-center">
            <img
              src="https://flowbite.com/docs/images/logo.svg"
              className="h-8 mr-3"
              alt="Flowbite Logo"
            />
            <span className="self-center text-2xl font-semibold whitespace-nowrap ">
              SeTiket
            </span>
          </NavLink>
          <div className="flex md:order-2 bg-pri">
            {renderAuthButtons()}
            <button
              onClick={() => setOpen(!open)}
              className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 "
            >
              <span className="sr-only">Open main menu</span>
              <img src="/icons/MenuLine.svg" alt="menu" />
            </button>
          </div>
          <div
            className={`items-center justify-between
              ${open ? "" : "hidden"} w-full md:flex md:w-auto md:order-1 `}
          >
            <div className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white">
              <NavLink
                to="/"
                onClick={() => setOpen(false)}
                className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0"
              >Home</NavLink>
              {renderNavLinks()}
            </div>
          </div>
        </div>
      </nav>
      <div className="bg-gray-200 min-h-screen">
        <Outlet />
      </div>
    </>
  );
}

export default NavigationBar;
