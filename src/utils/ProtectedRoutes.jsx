import React, { useEffect, useState } from "react";
import axios from "../api/axios";
import { Navigate, Outlet } from "react-router-dom";
import loadingCircle from '../Assets/loading.svg'

const ProtectedRoutes = ({ role, redirectPage = "/" }) => {
  const [userRole, setUserRole] = useState("");
  useEffect(() => {
    axios
      .get(`/auth/me`)
      .then((res) => {
        setUserRole(res.data.data.role);
      })
      .catch(() => {
        setUserRole("UNREGISTERED");
      });
  }, []);

  if (userRole === "") {
    return <div className="flex justify-center"><img src={loadingCircle} alt="loadingCircle"/></div>;
  } else {
    return role.includes(userRole) ? (
      <Outlet />
    ) : (
      <Navigate to={redirectPage} />
    );
  }
};

export default ProtectedRoutes;
